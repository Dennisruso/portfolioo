window.Prism = window.Prism || {};
window.Prism.manual = true;

jQuery( document ).ready(function( $ ) {
    
    // Trim code on extra line at start

    $( ".dm-code-snippet #dm-code-raw" ).each(function() {
        $(this).text(function(_,t) { return $.trim(t) })
    });

    Prism.highlightAll();
});

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */