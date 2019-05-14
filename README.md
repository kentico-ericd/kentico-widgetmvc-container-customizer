[![Version](https://img.shields.io/nuget/v/EricD.Kentico.MvcWidget.ContainerCustomizer.svg)](https://www.nuget.org/packages/EricD.Kentico.MvcWidget.ContainerCustomizer)

# Container customizer MVC widget

This custom MVC widget allows content editors to define styles for small sections of an MVC page without needing knowledge of CSS.

![Screenshot](https://github.com/kentico-ericd/kentico-widgetmvc-container-customizer/blob/master/screenshot.png)

## Installation

You can use Visual Studio's Package Manager to install the widget from [NuGet](https://www.nuget.org/packages/EricD.Kentico.MvcWidget.ContainerCustomizer).

## Usage

When you first place the widget on a page, it will attempt to locate a parent &lt;div&gt; element to customize. We recommend that you instead create your widget sections with a surrounding element and a custom class, e.g.

```
<div class="single-column-section-parent">
    @Html.Kentico().WidgetZone()
</div>
```

You can then open the widget's configuration dialog and use a CSS selector to identify the parent element, such as `.single-column-section-parent` in the above example.