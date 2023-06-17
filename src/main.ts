import './style.css'
import picture from './1685713533185.jpg'
import anime from 'animejs';

anime.set('body', { background: '#000' });
anime.set('.background-tri-black', { opacity: 0 });
anime.set('.background-tri-blue', { opacity: 0 });
anime.set('.card-content', { opacity: 0 });
anime.set('.card', { translateX: '-50%', translateY: '-50%', rotate: '45deg' });
anime.set('.loading-text', { rotate: '-45deg' });

const root = document.querySelector<Element>(':root')!;
const icon = document.querySelector<HTMLImageElement>('#icon')!;

icon.src = picture;

let rs = getComputedStyle(root);

anime({ targets: '.background-tri-black', opacity: 1, duration: 1000, easing: 'linear' });
anime({ targets: '.background-tri-blue', opacity: 0.9, duration: 1000, easing: 'linear' });

window.onload = () => {
  anime({ targets: 'body', background: rs.getPropertyValue('--background'), duration: 1000, easing: 'linear' });

  anime({ targets: '.background-tri-black', translateX: '-40%', delay: 1000 });
  anime({ targets: '.background-tri-blue', translateX: '40%', delay: 1050 });

  anime({ targets: '.loading-text', rotate: '0deg', opacity: 0, delay: 1200 });
  anime({ targets: '.card-content', opacity: 1, delay: 1200 });
  anime({ targets: '.card', rotate: '0deg', delay: 1200 });
  anime({ targets: '.card', width: '80%', delay: 1500 });
}