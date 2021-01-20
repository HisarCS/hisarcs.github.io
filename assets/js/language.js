let button = document.getElementById("switch-lang");

if (document.cookie) {
    if (document.cookie.includes("lang=tr")) { $('[lang="en"]').hide(); document.documentElement.lang = "tr-TR"; button.innerText = "EN";}
    else { $('[lang="tr"]').hide(); document.documentElement.lang = "en-US"; }
} else { $('[lang="tr"]').hide(); document.documentElement.lang = "en-US"; }

$('#switch-lang').click(function() {
    if (button.innerText == "EN") { button.innerText = "TR"; document.documentElement.lang = "en-US"; document.cookie = "lang=en"; }
    else { button.innerText = "EN"; document.documentElement.lang = "tr-TR"; document.cookie = "lang=tr"; }
    $('[lang="tr"]').toggle(); $('[lang="en"]').toggle();
});