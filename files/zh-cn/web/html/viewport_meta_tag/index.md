---
title: viewport meta 标记
slug: Web/HTML/Viewport_meta_tag
---

{{HTMLSidebar}}

本文介绍如何使用"viewport"`<meta>`标记来控制视口的大小和形状。

## 背景

浏览器的{{glossary("viewport", "视口")}}是一个窗口区域，您可以在其中查看 Web 内容。这通常与呈现的页面大小不同，在这种情况下，浏览器为用户提供滚动条以滚动和访问所有内容。

在移动设备和其他窄屏幕中，某些内容在比普通屏幕更宽的虚拟窗口或视口中呈现页面，然后缩小呈现的结果，以便可以一次看到所有内容。然后，用户可以通过平移和缩放以查看页面的不同区域。例如，如果移动屏幕的宽度为 640px，则页面可能会使用 980px 的虚拟视口呈现，然后页面将缩小以适应 640px 的空间。

这是因为并非所有页面都针对移动设备进行了优化，并且在以较小的视口宽度呈现时会被截断（或至少看起来很糟糕）。此虚拟视口是一种使非移动设备优化页面在窄屏设备上看起来更好的一个方法。

但是，此机制不太适用于使用[媒体查询](/zh-cn/docs/Web/CSS/Media_Queries)针对窄屏幕进行优化的页面。例如，如果虚拟视口为 980px，那么在 640px 或 480px 或更低时启动的媒体查询将不会被使用，从而限制了这些响应式设计方法的有效性。 "viewport"`<meta>` 可缓解此类屏幕内部较窄的终端上的虚拟视口问题。


## 视口基础知识

典型的针对移动页面优化一般如下所示：

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

并非所有的设备都有着相同的宽度，您应该确保即使屏幕大小或方向有很大差异，页面也能够正常工作。

`<meta>` "viewport"的基本属性如下所示：

- `width`
  - :控制视口的大小。这可以设置为特定像素数（如'width=600'），也可以设置为特殊值`device-width`，即[100vw](/zh-cn/docs/Web/CSS/length#视口 (Viewport) 比例的长度)，即100%的视口宽度。最小值为`1`。最大值为`10000`。负值会被忽略。

- `height`

  - : 控制视口的大小。 这可以设置为特定像素数（如'height=400'），也可以设置为特殊值`device-height`，即[100vh](/zh-cn/docs/Web/CSS/length#视口 (Viewport) 比例的长度)，即100%的视口高度。最小值为`1`。最大值为`10000`。负值会被忽略。

- `initial-scale`
  - : 控制页面首次加载时显示的缩放倍数。最小值是 `0.1`。最大值是 `10`。默认值为 `1`。负值会被忽略。

- `minimum-scale`
  - : 控制页面允许缩小的倍数。最小值是 `0.1`。最大值是 `10`。默认值为`1`。负值会被忽略。

- `maximum-scale`
  - : 控制页面允许放大的倍数。设置一个低于`3`的值将不具备无障碍访问性。最小值是 `0.1`。最大值是 `10`。默认值为`1`。负值会被忽略。

- `user-scalable`
  - : 控制是否允许页面上的放大和缩小操作。有效值为`0`、`1`、`yes`或`no`。默认值为`1`，与`yes`相同。将值设置为`0`（即与`no`相同）将违反Web内容可访问性指南（WCAG）。

- `interactive-widget`
  - : 指定交互式UI部件（如虚拟键盘）对页面视口的影响。有效值：`resizes-visual`, `resizes-content`, or `overlays-content`。默认值：`resizes-visual`。


> **警告:** 使用`user-scalable=no`会给有视觉障碍的用户造成无障碍问题，如弱视力。[WCAG](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)要求至少有2倍的缩放；然而，最佳做法是启用5倍的缩放。


## 屏幕密度

屏幕分辨率已经上升到人眼无法辨别单个像素的程度了。例如，智能手机的屏幕通常很小，但分辨率却高达1920-1080像素（≈400dpi）。正因为如此，许多浏览器可以通过为每个CSS"像素"转换多个硬件像素，以较小的物理尺寸显示其页面。最初，这在许多触摸优化的网站上造成了可用性和可读性问题。


在高dpi屏幕上，初始情况为`initial-scale=1`的页面将被浏览器有效放大。他们的文本将是平滑和清晰的，但他们的位图图像可能无法利用全屏幕分辨率。为了在这些屏幕上获得更清晰的图像，网站开发人员可能希望以高于其最终尺寸的比例设计图像--或整个布局，然后使用CSS或视口属性将其缩小。

默认的像素比取决于显示器的密度。在密度小于200dpi的显示器上，比率是1.0。在密度介于200和300dpi之间的显示器上，比率是1.5。对于密度超过300dpi的显示器，比率是整数底线（屏幕密度/150dpi）。注意，只有当视口比例等于1时，默认比例才是真的。否则，CSS像素和设备像素之间的关系取决于当前的缩放级别。

## 视口宽度和屏幕宽度

页面可以将其视口设置为特定尺寸。例如，"width=320, initial-scale=1"的定义可以用来精确地适应纵向模式下的小型手机显示屏。当浏览器以较大的尺寸渲染页面时，这可能导致问题。为了解决这个问题，如果有必要，浏览器会扩大视口宽度，以便按要求的比例填充屏幕。这在大屏幕设备上特别有用。

对于设置了初始或最大比例的页面，这意味着宽度属性实际上转化为最小视口宽度。例如，如果你的布局需要至少500像素的宽度，那么你可以使用以下标记。当屏幕的宽度超过500像素时，浏览器将扩大视口（而不是放大）以适应屏幕。

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

其他可用的[属性](/zh-cn/docs/Web/HTML/Element/meta#属性)有`minimum-scale`, `maximum-scale`, 和`user-scalable`。这些属性会影响初始比例和宽度，以及限制缩放级别的变化。

## 交互式UI小部件效果

浏览器的交互式UI小部件可以影响页面视口的大小。最常见的这种UI小部件是虚拟键盘。要控制浏览器应该使用哪种调整大小的行为，可以设置交互式小部件属性。

允许的值为：

- `resizes-visual`
  - : [visual viewport](/zh-cn/docs/Glossary/Viewport)被交互式小部件调整大小。

- `resizes-content`
  - : [viewport](/zh-cn/docs/Glossary/Viewport)被交互式部件调整大小。

- `overlays-content`
  - : [visual viewport](/zh-cn/docs/Glossary/Viewport)和[viewport](/zh-cn/docs/Glossary/Viewport)都不会被交互式部件调整大小。

当[viewport](/zh-cn/docs/Glossary/Viewport)被调整大小时，初始[布局和包含块](/zh-cn/docs/Web/CSS/Containing_block)也被调整大小，从而影响[视口单位](/zh-cn/docs/Web/CSS/length)的计算大小。


## 移动和平板电脑设备的常见视口大小

如果你想知道哪些移动和平板设备有哪些视口宽度，这里有一个全面的移动和平板视口尺寸列表。它提供的信息包括纵向和横向的视口宽度，以及物理屏幕尺寸、操作系统和设备的像素密度。

## 规范

{{Specifications}}

## 参见

- Article: [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/)
