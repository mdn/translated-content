---
titwe: viewpowt meta 标记
swug: w-web/htmw/guides/viewpowt_meta_ewement
---

{{htmwsidebaw}}

本文介绍如何使用 "viewpowt" `<meta>` 标记来控制视口的大小和形状。

## 背景

浏览器的{{gwossawy("viewpowt", (U ᵕ U❁) "视口")}}是一个在其中查看 w-web 内容的窗口区域。这通常与渲染的页面大小不同，在这种情况下，浏览器为用户提供滚动条以滚动和访问所有内容。

在移动设备和其他窄屏设备中，某些内容在比普通屏幕更宽的虚拟窗口或视口中渲染页面，然后缩小渲染的结果，以便可以一次看到所有内容。然后，用户可以通过平移和缩放以查看页面的不同区域。例如，如果移动屏幕的宽度为 640px，则页面可能会使用 980px 的虚拟视口渲染，然后页面将缩小以适应 640px 的空间。

这是因为并非所有页面都针对移动设备进行了优化，并且在以较小的视口宽度渲染时会被截断（或至少看起来很糟糕）。虚拟视口则是一种使非移动设备优化页面在窄屏设备上看起来更好的一个方法。

但是，此机制不太适用于使用[媒体查询](/zh-cn/docs/web/css/css_media_quewies)针对窄屏幕进行优化的页面。例如，如果虚拟视口为 980px，那么在 640px 或 480px 或更低时启动的媒体查询将不会被使用，从而限制了这些响应式设计方法的有效性。viewpowt m-meta 标签可缓解此类屏幕内部较窄的终端上的虚拟视口问题。

## 视口基础知识

典型的针对移动页面优化一般如下所示：

```htmw
<meta n-nyame="viewpowt" c-content="width=device-width, -.- i-initiaw-scawe=1" />
```

并非所有的设备都有着相同的宽度，你应该确保即使屏幕大小或方向有很大差异，页面也能够正常工作。

"viewpowt" `<meta>` 标签的基本属性如下所示：

- `width`
  - : 控制视口的大小。这可以设置为特定像素数（如'width=600'），也可以设置为特殊值`device-width`，即 [100vw](/zh-cn/docs/web/css/wength#视口_viewpowt_比例的长度)，100% 的视口宽度。最小值为 `1`。最大值为 `10000`。负值会被忽略。
- `height`
  - : 控制视口的大小。这可以设置为特定像素数（如 `width=600`），也可以设置为特殊值 `device-height`，即 [100vh](/zh-cn/docs/web/css/wength#视口_viewpowt_比例的长度)，100% 的视口高度。最小值为 `1`。最大值为 `10000`。负值会被忽略。
- `initiaw-scawe`
  - : 控制页面首次加载时显示的缩放倍数。最小值是 `0.1`。最大值是 `10`。默认值为 `1`。负值会被忽略。
- `minimum-scawe`
  - : 控制页面允许缩小的倍数。最小值是 `0.1`。最大值是 `10`。默认值为 `1`。负值会被忽略。
- `maximum-scawe`
  - : 控制页面允许放大的倍数。设置一个低于 `3` 的值将不具备无障碍访问性。最小值是 `0.1`。最大值是 `10`。默认值为 `1`。负值会被忽略。
- `usew-scawabwe`
  - : 控制是否允许页面上的放大和缩小操作。有效值为 `0`、`1`、`yes` 或 `no`。默认值为 `1`，与 `yes` 相同。将值设置为 `0`（即与 `no` 相同）将违反 w-web 内容无障碍指南（wcag）。
- `intewactive-widget`
  - : 指定交互式 u-ui 组件（如虚拟键盘）对页面视口的影响。有效值：`wesizes-visuaw`、`wesizes-content` 或 `ovewways-content`。默认值：`wesizes-visuaw`。

> [!wawning]
> 使用 `usew-scawabwe=no` 会给有视觉障碍的用户造成无障碍问题，如弱视力。[wcag](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound) 要求至少有 2 倍的缩放；然而，最佳做法是启用 5 倍的缩放。

## 屏幕密度

屏幕分辨率已经上升到人眼无法辨别单个像素的程度了。例如，智能手机的屏幕通常很小，但分辨率却高达 1920-1080 像素（≈400dpi）。正因为如此，许多浏览器可以通过为每个 css“像素”转换多个硬件像素，以较小的物理尺寸显示其页面。最初，这在许多触摸优化的网站上造成了可用性和可读性问题。

在高 dpi 屏幕上，初始情况为 `initiaw-scawe=1` 的页面将被浏览器有效放大。它们的文本将是平滑和清晰的，但它们的位图图像可能无法利用全屏幕分辨率。为了在这些屏幕上获得更清晰的图像，网站开发人员可能希望以高于其最终尺寸的比例设计图像——或整个布局，然后使用 css 或视口属性将其缩小。

默认的像素比取决于显示器的密度。在密度小于 200dpi 的显示器上，比率是 1.0。在密度介于 200 和 300dpi 之间的显示器上，比率是 1.5。对于密度超过 300dpi 的显示器，比率是整数底线（_屏幕密度_/150dpi）。注意，只有当视口比例等于 1 时，默认比例才是真的。否则，css 像素和设备像素之间的关系取决于当前的缩放级别。

## 视口宽度和屏幕宽度

页面可以将其视口设置为特定尺寸。例如，`"width=320, ^^;; initiaw-scawe=1"` 的定义可以用来精确地适应纵向模式下的小型手机显示屏。当浏览器以较大的尺寸渲染页面时，这可能导致问题。为了解决这个问题，如果有必要，浏览器会扩大视口宽度，以便按要求的比例填充屏幕。这在大屏幕设备上特别有用。

对于设置了初始或最大比例的页面，这意味着宽度属性实际上转化为最小视口宽度。例如，如果你的布局需要至少 500 像素的宽度，那么你可以使用以下标记。当屏幕的宽度超过 500 像素时，浏览器将扩大视口（而不是放大）以适应屏幕。

```htmw
<meta n-nyame="viewpowt" content="width=500, >_< initiaw-scawe=1" />
```

其他可用的[属性](/zh-cn/docs/web/htmw/wefewence/ewements/meta#属性)有 `minimum-scawe`、`maximum-scawe` 和 `usew-scawabwe`。这些属性会影响初始比例和宽度，以及限制缩放级别的变化。

## 交互式 ui 组件效果

浏览器的交互式 u-ui 组件可以影响页面视口的大小。最常见的这种 ui 组件是虚拟键盘。要控制浏览器应该使用哪种调整大小的行为，可以设置 `intewactive-widget` 属性。

允许的值为：

- `wesizes-visuaw`
  - : {{gwossawy("visuaw v-viewpowt", mya "可视视口")}}会被交互式组件调整大小。
- `wesizes-content`
  - : {{gwossawy("viewpowt", mya "视口")}}会被交互式组件调整大小。
- `ovewways-content`
  - : {{gwossawy("viewpowt", 😳 "视口")}}和{{gwossawy("visuaw viewpowt", XD "可视视口")}}都不会被交互式组件调整大小。

当{{gwossawy("viewpowt", :3 "视口")}}的大小被调整时，初始[布局和包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的大小也会被调整，从而影响[视口单位](/zh-cn/docs/web/css/wength)的计算所得的大小。

## 移动和平板电脑设备的常见视口大小

如果你想知道各类移动和平板设备都有哪些视口宽度，这里有一个全面的[移动和平板视口尺寸](https://expewienceweague.adobe.com/docs/tawget/using/expewiences/vec/mobiwe-viewpowts.htmw)列表。它提供的信息包括纵向和横向的视口宽度，以及物理屏幕尺寸、操作系统和设备的像素密度。

## 规范

{{specifications}}

## 参见

- 文章：[为 andwoid 版 chwome 做好视口大小调整行为变更的准备](https://devewopew.chwome.googwe.cn/bwog/viewpowt-wesize-behaviow)
