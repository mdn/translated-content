---
title: Firefox 18 for developers
slug: Mozilla/Firefox/Releases/18
---

{{FirefoxSidebar}}

Firefox 18 已于 2013 年 1 月 8 日发布。

## WEB 开发者需要注意的变化

### HTML

- 实现了{{HTMLElement("ol")}}元素上的[`reversed`](/zh-CN/docs/Web/HTML/Element/ol#reversed)属性 ([Firefox bug 601912](https://bugzil.la/601912)).
- 实现了{{HTMLElement("link")}}元素上的[`crossorigin`](/zh-CN/docs/Web/HTML/Element/link#crossorigin)属性 ([Firefox bug 786564](https://bugzil.la/786564)).

### CSS

- {{cssxref("min-width")}} 和 {{cssxref("min-height")}} 属性使用 `auto` 关键字作为初始值 (This has an effect only on flex items as it resolves to `0`, the previous initial value, for other items). ([Firefox bug 763689](https://bugzil.la/763689))
- The cascade has been updated: now author `!important` rules override [CSS animations](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations). ([Firefox bug 783714](https://bugzil.la/783714))
- {{cssxref("background")}}简写属性可以包含 CSS3 中的{{cssxref("background-size")}}属性了。([Firefox bug 570326](https://bugzil.la/570326))
- 初步实现了 Flexbox.默认禁用状态，可以通过设置`layout.css.flexbox.enabled`选项激活该特性.([Firefox bug 666041](https://bugzil.la/666041))

### DOM

- 实现了 `navigator.mozPay` 属性（[Firefox bug 767818](https://bugzil.la/767818)）
- 实现了 `window.devicePixelRatio` 属性。（[Firefox bug 564815](https://bugzil.la/564815)）
- 在 MacOS 上实现了`window.navigator.battery` 属性。（[Firefox bug 696045](https://bugzil.la/696045)）
- 删除了 {{domxref("BlobBuilder", "MozBlobBuilder")}}。开发者应该使用 {{domxref("Blob")}} 构造函数来创建 `Blob` 对象。（[Firefox bug 744907](https://bugzil.la/744907)）
- [`visibilitychange`](/zh-CN/docs/Web/API/Document/visibilitychange_event)事件和[页面可见性 API](/zh-CN/docs/Web/API/Page_Visibility_API)取消前缀[Firefox bug 812086](https://bugzil.la/812086)).
- 实现了 `TextDecoder` 和 `TextEncoder`。（[Firefox bug 764234](https://bugzil.la/764234)）
- `HTMLMediaElement.src` 被分成了两个属性：一个是标准的 `src` 属性，返回普通的字符串 {{domxref("DOMString")}},另一个是带前缀的`mozSrcObject`属性，返回 [media streams](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)（[Firefox bug 792665](https://bugzil.la/792665)）。

### JavaScript

- 实现了 EcmaScript 6 中的[直接代理](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)([Firefox bug 703537](https://bugzil.la/703537)).警告：该实现包含了一些已知的 bug，以及未根据最新规范草案实现某些特性。不要在生产环境中使用它。
- 实现了 ECMAScript 6 中的字符串方法`contains()`.

### WebGL

### SVG

### MathML

### XUL

### 网络

- HTTP 请求头`Accept-Language` 可以使用两位数字的质量因子（"q-values"）（[Firefox bug 672448](https://bugzil.la/672448)）。
- HTTP 响应头支持了[`X-FRAME-OPTIONS`](/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options)中的`ALLOW-FROM`语法 ([Firefox bug 690168](https://bugzil.la/690168)).

### 开发者工具

## 附加组件和 Mozilla 开发者需要注意的变化

### 接口变更

- `nsIStreamListener`
  - : `onDataAvailable()`方法的第四个参数 (aOffset) 类型改为无符号长整型。([Firefox bug 784912](https://bugzil.la/784912))
- `nsIUploadChannel`
  - : `setUploadStream()` 支持了超过 2GB 大小的 content-length ([Firefox bug 790617](https://bugzil.la/790617))
- `nsIEditor`
  - : 删除了 `addEditorObserver()`，使用 `setEditorObserver()` 来替代，`removeEditorObserver()` 不再需要一个 `nsIEditorObserver` 参数（[Firefox bug 785091](https://bugzil.la/785091)）
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` observers are no longer guaranteed to be called synchronously during
    `nsIChannel.asyncOpen()`. For observers that need to be called during `asyncOpen`(), the new `http-on-opening-request` observer topic has been added. ([Firefox bug 800799](https://bugzil.la/800799))

#### 新增接口

#### 移除接口

下面的接口已经被移除。

- `nsIEditorObserver`

## 参见

- [Firefox 18 发行说明](https://www.mozilla.org/zh-CN/firefox/18.0/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Firefox 18 网站兼容性](/zh-CN/docs/Site_Compatibility_for_Firefox_18)
- [Firefox 18 附加组件兼容性](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/)

### 更早期的版本

{{Firefox_for_developers}}
