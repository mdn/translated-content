---
title: 浏览器引擎前缀
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{GlossarySidebar}}

浏览器厂商们有时会给实验性的或者非标准的 CSS 属性和 JavaScript API 添加前缀，这样开发者就可以用这些新的特性进行试验，同时（理论上）防止他们的试验代码被依赖，从而在标准化过程中破坏 Web 开发者的代码。开发者应该等到浏览器行为标准化之后再使用未加前缀的属性。

Web 开发者一直在生产环境的网站上使用这些实验性代码，这使得浏览器厂商更难保证浏览器兼容性和处理新特性；这也伤害了更小众的浏览器，它们被迫添加其他浏览器前缀以渲染热门网站。

现在，浏览器引擎的实验性功能被“放在一个标记（flag）后面”。这使得开发者可以更改浏览器配置来测试即将到来的功能。浏览器现在会将实验性特性添加在需要用户自行设置偏好或标记（flag）的地方，同时编写一个更小规模的规范，以更快达到稳定状态。

## CSS 前缀

你在旧代码中可能会看到的最常见的浏览器 CSS 前缀包括：

- `-webkit-`（Chrome、Safari、新版 Opera 浏览器以及几乎所有 iOS 系统中的浏览器（包括 iOS 系统中的火狐浏览器）；简单的说，所有基于 WebKit 内核的浏览器）
- `-moz-`（火狐浏览器）
- `-o-`（旧版 Opera 浏览器）
- `-ms-`（IE 浏览器 和 Edge 浏览器）
- `-webkit-`（Chrome、Safari，新版 Opera 浏览器、Edge 以及几乎所有 iOS 浏览器（包括 iOS 系统中的 Firefox）；也就是基本上所有基于 WebKit 或 Chromium 内核的浏览器）

示例：

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

如果你在代码库中遇到上面的代码，你可以安全地删除除最后一行之外的所有内容，因为无需浏览器引擎前缀，所有浏览器都已支持[过渡](/zh-CN/docs/Web/CSS/transition#browser_compatibility)：

```css
transition: all 4s ease;
```

## API 前缀

过去，浏览器引擎也使用前缀修饰实验性质的 API。如果整个接口都是实验性的，前缀修饰的就是接口名（但不包括其中的属性或者方法）。如果将一个实验性的接口或者方法添加到一个标准化的接口中，这个新增的接口或者方法被前缀修饰。

### 接口前缀

需要使用大写的前缀修饰接口名：

- `WebKit`（Chrome、Safari、新版 Opera 浏览器以及几乎所有 iOS 系统中的浏览器（包括 iOS 系统中的火狐浏览器）；简单的说，所有基于 WebKit 内核的浏览器）
- `Moz`（火狐浏览器）
- `O`（旧版 Opera 浏览器）
- `MS`（IE 浏览器 和 Edge 浏览器）

### 属性和方法前缀

需要使用小写的前缀修饰属性或者方法

- `webkit`（Chrome、Safari、新版 Opera 浏览器以及几乎所有 iOS 系统中的浏览器（包括 iOS 系统中的火狐浏览器）；简单的说，所有基于 WebKit 内核的浏览器）
- `moz`（火狐浏览器）
- `o`（旧版 Opera 浏览器）
- `ms`（IE 浏览器 和 Edge 浏览器）

示例：

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

## 参见

- [`-moz-` 浏览器引擎前缀 CSS 拓展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` 浏览器引擎前缀 CSS 拓展](/zh-CN/docs/Web/CSS/WebKit_Extensions)
- 维基百科[浏览器引擎前缀](https://zh.wikipedia.org/wiki/CSS濾器#前缀_滤镜)
