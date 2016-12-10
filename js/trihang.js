$(document).ready(function(){
    
$('#fullpage').fullpage({
    anchors:['triHangTitle', 'triHangIntro', 'triHangSketching', 'triHangScaleModels', 'triHangFullModels', 'triHangProcess', 'triHangPrototype', 'triHangTechnicalDrawing'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['TRI-HANG', 'INTRO', 'SKETCHING', 'SCALE MODELS', 'FULL SCALE MODELS', 'PROCESS', 'PROTOTYPE', 'TECHNICAL DRAWING'],
    showActiveTooltip: false,
    css3: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 10,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    keyboardScrolling: true,
    touchSensitivity: 75,
    scrollOverflow: false,
    scrollBar: false,
})
});