$(document).ready(function(){
    
$('#fullpage').fullpage({
    anchors:['naviTitle1', 'naviIntro1', 'naviProblem1', 'naviSolution1', 'naviVisualFeedback1', 'naviExplode1', 'naviSketching1', 'naviProcess1', 'naviStraps1', 'naviElevate1', 'naviTesting1', 'naviPrototype1'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['NAVI', 'INTRO', 'PROBLEM', 'SOLUTION', 'VISUAL FEEDBACK', 'EXPLODE', 'SKETCHING', 'PROCESS', 'STRAPS', 'ELEVATE BAND', 'TESTING', 'PROTOTYPE'],
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

// var vid=document.getElementById('naviexplodedview');
//     vid.addEventListener("ended", hideVideo, false);

//     function hideVideo() {
//         var vid=document.getElementById('naviexplodedview');
//         var other=document.getElementById('exploded');
//         vid.removeEventListener("ended", hideVideo, false);
//         vid.style.display='none';
//         other.style.display='block';
//     }

});