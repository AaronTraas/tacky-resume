// Use CSS class to give this page no class
document.getElementsByTagName('body')[0].className += 'tacky';
document.getElementsByTagName('html')[0].className += 'tacky';

var tacky_link = document.createElement('link');
tacky_link.setAttribute('rel','stylesheet');
tacky_link.setAttribute('media','screen');
tacky_link.setAttribute('href','tacky/tacky.css');
document.head.appendChild(tacky_link);

var tacky_bgm = document.createElement('audio');
tacky_bgm.setAttribute('src','tacky/tacky.mp3');
tacky_bgm.setAttribute('autoplay','autoplay');
document.body.appendChild(tacky_bgm);
