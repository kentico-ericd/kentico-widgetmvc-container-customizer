(function () {
    window.kentico.pageBuilder.registerInlineEditor("background-image-editor", {
        init: function (options) {
            var editor = options.editor;
            var box = editor.querySelector("#url-box");
            if (box !== null) {
                box.addEventListener("keyup", function (e) {
                    if (e.keyCode === 13) {
                        var event = new CustomEvent("updateProperty", {
                            detail: {
                                value: box.value,
                                name: options.propertyName
                            }
                        });
                        editor.dispatchEvent(event);
                        box.focus();
                    }
                });
            }
        }
    });
})();