---
title: 移动端 Web 开发
slug: Web/Guide/Mobile
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide/Mobile")}}
  <ol>
    <li class="toggle">
      <details>
        <summary>指南</summary>
        <ol>
          {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide")}}
        </ol>
      </details>
    </li>
  </ol>
</section>

本页概述了设计在移动设备上运行良好的网站所需的一些主要技术。

我们准备用两个章节来组织本文的内容，[为移动设备设计](#为移动设备设计)和[跨浏览器兼容性](#跨浏览器开发)。另外，还有一篇 Jason Grlicky 为 web 开发者写的[移动端友好性](/zh-CN/docs/Web_Development/Mobile/Mobile-friendliness)指南。

## 为移动设备设计

与台式电脑或笔记本电脑相比，移动设备具有相当不同的硬件特征。显然，它们的屏幕通常较小，但它们也通常在用户旋转设备时自动在纵向和横向模式之间切换屏幕方向。它们通常有触摸屏供用户输入。像地理位置或方向这样的 API 在台式机上要么不被支持，要么作用小得多，而这些 API 给了移动用户与你的网站互动的新方式。

### 在更小的屏幕下工作

[响应式网页设计](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)是一项让你的网站在手持设备上通过不同的使用环境进行自动适应的技术，通常来说体现在尺寸和屏幕的排列方向上。它包含下面的技术：

- 流动的 CSS 布局设计，保证当浏览器窗口的尺寸变化时网页也能流畅地适应
- 根据设备屏幕的[宽](/zh-CN/docs/Web/CSS/@media/width)[高](/zh-CN/docs/Web/CSS/@media/height)，合理使用 CSS [媒体查询](/zh-CN/docs/Web/CSS/Media_Queries)规则

[viewport meta 标签](/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design#viewport_meta_标签)指示浏览器以适合用户设备的比例显示你的网站。

### 处理触摸屏

在触摸设备中你需要使用 [DOM Touch 事件](/zh-CN/docs/Web/API/Touch_events)。不能够再使用 {{cssxref(":hover")}} 伪类；同时因为手指比鼠标要大的缘故，要将可点击元素做的更大一点。参见这篇介绍[在触摸屏上设计](https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/)的文章。

你可以使用 [pointer](/zh-CN/docs/Web/CSS/@media/pointer) 或 [any-pointer](/zh-CN/docs/Web/CSS/@media/any-pointer) 媒体查询以在可触摸设备上加载不同的 CSS。

### 优化图片

为了解决那些带宽小或者流量费用昂贵的用户，你可以通过根据用户的屏幕尺寸和分辨率加载合适的图片来优化图片的加载。你可以通过媒体查询来获取屏幕的[高度](/zh-CN/docs/Web/CSS/@media/height)、[宽度](/zh-CN/docs/Web/CSS/@media/width)以及[像素比](/zh-CN/docs/Web/CSS/@media/resolution)。

你也可以利用 CSS 属性，如[渐变](/zh-CN/docs/Web/CSS/CSS_Images/Using_CSS_gradients)和[阴影](/zh-CN/docs/Web/CSS/box-shadow)来实现视觉效果，而无需图像。

### 移动端 API

最后，你可以利用移动设备提供的新可能性，例如[旋转方向](/zh-CN/docs/Web/API/Device_orientation_events/Detecting_device_orientation)和[地理位置](/zh-CN/docs/Web/API/Geolocation_API)。

## 跨浏览器开发

### 书写跨浏览器代码

要想创建能够在不同的移动浏览器上可接受地运行的网站：

- 尽量避免使用浏览器的特定功能，如供应商前缀的 CSS 属性。
- 对于不支持这些功能的浏览器，只要内容仍可使用，就不要提供供应商预设的后备功能。像 `-webkit-border-radius` 这样的供应商预设属性，会损害那些老旧的、不支持现代标准的浏览器的性能。
- 要在不影响性能的前提下使用新的功能，可以针对当前的浏览器进行样式设计，然后使用 [`@supports`](/zh-CN/docs/Web/CSS/@supports) 功能查询，向支持的浏览器提供现代 CSS。

参见 [Gecko 特定属性列表](/zh-CN/docs/Web/CSS/Mozilla_Extensions)，以及 [WebKit 特定属性列表](/zh-CN/docs/Web/CSS/WebKit_Extensions) 和 Peter Beverloo 的[供应商特定属性表](https://peter.sh/experiments/vendor-prefixed-css-property-overview/)。

### 注意用户代理嗅探

网站最好使用上述技术检测特定的设备特征，如屏幕尺寸和触摸屏，并相应地调整自己。但有时这是不现实的，网站会采用解析浏览器的用户代理字符串来尝试区分台式机、平板电脑和手机，为每种类型的设备提供不同的内容。

如果你这样做，请确保你的算法是正确的，且你不会因为不了解某个特定浏览器的用户代理字符串而向一个设备提供错误的内容类型。请看这个[使用用户代理字符串确定设备类型的指南](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile.2c_tablet_or_desktop)。

### 多浏览器测试

在多个浏览器上测试你的网站。这意味着在多个平台上进行测试——至少是在 iOS 和 Android 上。

- 使用 [iOS simulator](https://developer.apple.com/devcenter/ios/index.action) 在 iPhone 上测试移动版 Safari。
- 使用 [Android SDK](https://developer.android.google.cn/studio#command-tools) 测试 Opera 和 Firefox。详细方法请查看[使用安卓模拟器运行安卓版 Firefox 浏览器](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator)。
