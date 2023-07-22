---
title: Add a hit map on top of an image
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
---

现在我们将学习如何设置图像映射，先讨论他的缺点。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        你应该已经知道如何<a
          href="/zh-CN/Learn/HTML/Write_a_simple_page_in_HTML"
          >create a basic HTML document</a
        >
        以及<a href="/zh-CN/Learn/HTML/Howto/Add_images_to_a_webpage"
          >add accessible images to a webpage.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习如何将一张图片的不同区域链接到不同页面。</td>
    </tr>
  </tbody>
</table>

> **警告：** 本文仅讨论客户端图像映射。不要使用服务器端图像映射，这需要用户拥有鼠标。

## 图像映射和它的缺点

当你在{{htmlelement('a')}}标签中嵌套图像，整个图像是链接到一个网页的。但在图像映射中，包含多个活动区域（称为“热点”），可以链接到不同的资源地址。

图像映射原本非常流行于导航策略，但是前提需要考虑它的性能和无障碍。

[Text links](/zh-CN/Learn/HTML/Howto/Create_a_hyperlink) (perhaps styled with CSS) 比图像映射更具优势：文本链接更轻量级、好维护、更易于 SEO，而且支持更多形式需求的访问（如，屏幕阅读器、纯文本浏览器、翻译服务等）。

## 如何正确的插入一张图像映射

### 步骤 1: 图片

不是所有图片都合适。

- 图片必须明确表明当用户跟随图片链接时会发生什么。`alt` 属性是必须的，但很多人注意不到。
- 图片必须明确指出热点的开始和结束位置。
- 在任何尺寸的视口下，热点都需要足够大，方便用户可以点击。多大足够呢？[72 × 72 CSS pixels 是一个推荐的最小尺寸，](http://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) 包括触摸目标之间额外的间隙。在 [50languages.com](http://www.goethe-verlag.com/book2/) (as of time of writing) 上的世界地图可以完美诠释这一点。用户点击 Russia 或 North America 要比 Albania 或 Estonia 容易得多。

插入图片的方式 [和通常一样](/zh-CN/Learn/HTML/Howto/Add_images_to_a_webpage) (用 {{htmlelement("img")}} 标签 和 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt) 文本). 如果图片只是用作导航容器，你可以设置图片的 `alt=""`，改在后面 {{htmlelement('area')}} 的 [`alt`](/zh-CN/docs/Web/HTML/Element/area#alt) 中提供合适的文本。

你将需要一个特殊的 [`usemap`](/zh-CN/docs/Web/HTML/Element/img#usemap) 属性。为图像映射提供一个唯一标识，这个标识不能包含空格。将这个标识 (preceded by a hash) 作为 `usemap` 属性的值：

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### 步骤 2: 激活你的热点

在这一步中，将所有代码放置 {{htmlelement('map')}} 标签中。`<map>` 只需要一个属性，设置 [`name`](/zh-CN/docs/Web/HTML/Element/map#name) 和上面 `usemap` 属性一样的 map 值：

```html
<map name="example-map-1"> </map>
```

`在<map>` 元素中，我们需要嵌套 {{htmlelement('area')}} 元素。一个 `<area>` 元素对应一个热点.。为保持键盘导航的直观，请确保`<area>` 的源顺序和视觉上的热点顺序一致。

`<area>` 元素是空元素，但是需要包含 4 个属性：

- [`shape`](/zh-CN/docs/Web/HTML/Element/area#shape) [`coords`](/zh-CN/docs/Web/HTML/Element/area#coords)

  - : `shape` 有 4 个值：`circle`, `rect`, `poly`, and `default`. ( `default` `<area>` 表示除去您定义的其他热点的剩余空间.) 根据你选择的形状需要在 `coords` 中提供对应的坐标信息。

    - 对于 circle, 提供中心的 x、y 坐标，还需要提供半径。
    - 对于 rectangle, 提供左上角和右下角的 x、y 坐标。
    - 对于 polygon, 提供每个角的 x、y 坐标（至少 6 个值）。

    坐标用 CSS 像素 px 表示。

    In case of overlap, source order carries the day.

- [`href`](/zh-CN/docs/Web/HTML/Element/area#href)
  - : 您需要链接的资源地址。如果您不希望当前区域链接到任何地方 (比方说，如果您正在创建一个空心圆)，您可以将这个属性保留为空。
- [`alt`](/zh-CN/docs/Web/HTML/Element/area#alt)
  - : 一个必选属性，告诉用户链接的指向或功能说明。`alt` 文本仅在图像不可用时显示。请参阅我们的[guidelines for writing accessible link text](/zh-CN/Learn/HTML/Howto/Create_a_hyperlink#Writing_accessible_link_text)。如果 `href` 属性为空并且整个图像已经具备了 `alt` 属性，则可以设置 `alt=""`。

```html
<map name="example-map-1">
  <area
    shape="circle"
    coords="200,250,25"
    href="page-2.html"
    alt="circle example" />

  <area
    shape="rect"
    coords="10, 5, 20, 15"
    href="page-3.html"
    alt="rectangle example" />
</map>
```

### 步骤 3: 确保它的可用范围

你还并没有完成除非你很严格的在多个浏览器和终端测试图像映射功能。尝试仅用键盘操作。尝试关掉图片。

如果你的图像映射宽度大于 240px，你将需要进一步调整来适应网站的响应式。仅调整小屏幕下的图片是不够的，因为不变的坐标无法适应这样的图像。

如果必须使用图像映射，您可以看看[Matt Stow's jQuery plugin.](https://github.com/stowball/jQuery-rwdImageMaps)。另外，Dudley Storey 示范了一种方法 [use SVG for an image map effect](http://thenewcode.com/696/Using-SVG-as-an-Alternative-To-Imagemaps)，以及后来的[ombined SVG-raster hack](http://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG) for bitmap images.

## Learn more

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online image map editor](http://www.maschek.hu/imagemap/imgmap)
- [Advice on handling email clients](http://blog.goolara.com/2014/06/05/image-maps-revisited/)
