using Kentico.Forms.Web.Mvc;
using Kentico.PageBuilder.Web.Mvc;
using System;

namespace KenticoMarketplace.Models.Widgets.ContainerCustomizerWidget
{
    public class ContainerCustomizerWidgetProperties : IWidgetProperties
    {
        public string FontFamily { get; set; } = "Verdana";

        public string FontSize { get; set; } = "12px";

        public string BgColor { get; set; } = "#ffffff";

        public string FgColor { get; set; } = "#000000";

        public string BgImage { get; set; } = "";

        [EditingComponent(TextInputComponent.IDENTIFIER, ExplanationText = "One or more CSS selectors for the parent element to customize, e.g. \".single-column-section-parent.\" If empty, the system will attempt to locate a parent DIV of this widget, but the changes will not be visible in the page builder", Label = "Parent selector")]
        public string TargetID { get; set; }

        public string InstanceID { get; set; } = Guid.NewGuid().ToString();
    }
}