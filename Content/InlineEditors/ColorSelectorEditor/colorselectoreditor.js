(function () {
    window.kentico.pageBuilder.registerInlineEditor("color-selector-editor", {
        init: function (options) {
            var editor = options.editor;
            var box = editor.querySelector("#ccw-color-input");
            if (box !== null) {
                box.addEventListener("change", function () {
                    var event = new CustomEvent("updateProperty", {
                        detail: {
                            value: box.value,
                            name: options.propertyName
                        }
                    });
                    editor.dispatchEvent(event);
                });
            }
        }
    });
})();