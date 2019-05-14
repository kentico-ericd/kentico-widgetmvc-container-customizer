(function () {
    window.kentico.pageBuilder.registerInlineEditor("font-family-editor", {
        init: function (options) {
            var editor = options.editor;
            var box = editor.querySelector("#font-family-box");
            if (box !== null) {
                box.addEventListener("keyup", function (e) {
                    if (e.keyCode === 13) {
                        if (new Detector().detect(box.value)) {
                            // save only if font can be displayed
                            var event = new CustomEvent("updateProperty", {
                                detail: {
                                    value: box.value,
                                    name: options.propertyName
                                }
                            });
                            editor.dispatchEvent(event);
                        }
                        else {
                            alert("Font cannot be displayed, please check the value and try again.");
                        }
                        box.focus();
                    }
                });
            }
        }
    });
})();

var Detector = function () {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth !== defaultWidth[baseFonts[index]] || s.offsetHeight !== defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
};