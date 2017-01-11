$(document).ready(function(){
    
$('#fullpage').fullpage({
    anchors:['skiaTitle1', 'skiaIntro1', 'skiaProblem1', 'skiaDirection1', 'skiaSketching1', 'skiaModeling1', 'skiaCamera1', 'skiaColors1', 'skiaApp1', 'skiaAppLayout1', 'skiaProductPage1'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['SKIA', 'INTRO', 'PROBLEM', 'DIRECTION 1', 'SKETCHING', 'MODELING', 'CAMERA', 'COLORS', 'APP', 'LAYOUT', 'PRODCUT PAGE'],
    showActiveTooltip: false,
    css3: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 10,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    keyboardScrolling: true,
    touchSensitivity: 25,
    scrollOverflow: true,
    scrollBar: false,
})
});