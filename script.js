const SPEAKERS = [
  {
    name: 'Yochi Beckler',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis.',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos, nemo quis blanditiis cum minima!',
    imgSrc: 'images/speakers/me.jpg',
  },

  {
    name: 'Sohyong Noah',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis.',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos, nemo quis blanditiis cum minima!',
    imgSrc: 'images/speakers/me.jpg',
  },

  {
    name: 'Jefferey Cersi',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis.',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos, nemo quis blanditiis cum minima!',
    imgSrc: 'images/speakers/me.jpg',
  },

  {
    name: 'John Snow',
    info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis.',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos, nemo quis blanditiis cum minima!',
    imgSrc: 'images/speakers/me.jpg',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  // https://codepen.io/ljc-dev/embed/GRoLWxj?height=600&default-tab=js,result&embed-version=2
  // https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
  const navbar = document.querySelector('.navbar'); // list
  const ham = document.querySelector('.ham'); // button
  const menuLinks = document.querySelectorAll('.menu-link');

  function toggleHamburger() {
    navbar.classList.toggle('showNav');
    ham.classList.toggle('showClose');
  }

  // toggles hamburger menu in and out when clicking on the hamburger
  ham.addEventListener('click', toggleHamburger);

  // toggle when clicking on links
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', toggleHamburger);
  });

  SPEAKERS.forEach((speaker) => {
    const speakerDiv = document.createElement('div');
    speakerDiv.className += 'speaker';

    speakerDiv.innerHTML = ` 
    <div class="img-container">
      <img src="./images/speakers/me.jpg" alt="" />
    </div>
    <div class="text-container">
      <h3>${speaker.name}</h3>
      <h4>
        ${speaker.info}
      </h4>

      <p>
        ${speaker.about}
      </p>
    </div>
    `;
    document.querySelector('.speaker-container').appendChild(speakerDiv);
  });
});
