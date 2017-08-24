$(document).ready(function(){
    $('#square').tilt({
        maxTilt:        30,
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.05, .05, .05, .05)",    // Easing on enter/exit.
        scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          300,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
        maxGlare:       .125       // From 0 - 1.
    });
});