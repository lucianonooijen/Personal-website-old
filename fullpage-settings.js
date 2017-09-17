$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['black', 'black', 'black', 'black', 'black', 'black', 'black'],
    anchors: ['intro', 'over', 'mijn-skills', 'mijn-ervaring', 'mijn-opleiding', 'contacteer-me '],
    menu: '#menu',
    scrollingSpeed: 800,
    navigation: true,
    scrollBar: true,
    slidesNavigation: true,
    parallax: true
  });
});
