$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['darkred', 'darkblue', 'darkgreen', 'black', 'darkgray', 'darkred', 'darkblue'],
    anchors: ['intro', 'over', 'mijn-skills', 'mijn-ervaring', 'mijn-opleiding', 'mijn-projecten', 'contacteer-me '],
    menu: '#menu',
    scrollingSpeed: 800,
    navigation: true,
    scrollBar: true,
    slidesNavigation: true
  });
});
