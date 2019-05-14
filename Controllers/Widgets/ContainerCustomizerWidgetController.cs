using Kentico.PageBuilder.Web.Mvc;
using KenticoMarketplace.Models.Widgets.ContainerCustomizerWidget;
using System.Web.Mvc;

[assembly: RegisterWidget("ContainerCustomizerWidget", typeof(KenticoMarketplace.Controllers.Widgets.ContainerCustomizerWidgetController), "Container customizer", IconClass = "icon-palette")]
namespace KenticoMarketplace.Controllers.Widgets
{
    public class ContainerCustomizerWidgetController : WidgetController<ContainerCustomizerWidgetProperties>
    {
        public ActionResult Index()
        {
            var properties = GetProperties();
            return PartialView("Widgets/_ContainerCustomizerWidget", new ContainerCustomizerWidgetViewModel()
            {
                BgColor = properties.BgColor,
                FgColor = properties.FgColor,
                TargetID = properties.TargetID,
                FontFamily = properties.FontFamily,
                InstanceID = properties.InstanceID,
                FontSize = properties.FontSize,
                BgImage = properties.BgImage
            });
        }
    }
}