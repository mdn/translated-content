---
title: 浏览器引擎前缀
slug: Glossary/Vendor_Prefix
---

{{GlossarySidebar}}

浏览器厂商们有时会给实验性的或者非标准的 CSS 属性和 JavaScript API 添加前缀，这样开发者就可以用这些新的特性进行试验，同时（理论上）防止他们的试验代码被依赖，从而在标准化过程中破坏 web 开发者的代码。开发者应该等到浏览器行为标准化之后再使用未加前缀的属性。

> **备注：** 浏览器厂商们正在努力停止使用前缀来表示实验性质的代码的行为。Web 开发者一直在生产环境的网站上使用这些实验性代码，这使得浏览器厂商更难保证浏览器兼容性和处理新特性；这也伤害了更小众的浏览器，它们被迫添加其他浏览器前缀以加载热门网站。
>
> 现在的趋势是将实验性功能添加在需要用户自行设置偏好或标记（flag）的地方，同时编写一个更小规模的规范，以更快达到稳定状态。

## CSS 前缀

主流浏览器引擎前缀：

- `-webkit-` （谷歌，Safari，新版 Opera 浏览器，以及几乎所有 iOS 系统中的浏览器（包括 iOS 系统中的火狐浏览器）；基本上所有基于 WebKit 内核的浏览器）
- `-moz-` （火狐浏览器）
- `-o-` （旧版 Opera 浏览器）
- `-ms-` （IE 浏览器 和 Edge 浏览器）

示例：

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

## API 前缀

过去，浏览器引擎也使用前缀修饰实验性质的 API。如果整个接口都是实验性的，前缀修饰的就是接口名（但不包括其中的属性或者方法）。如果将一个实验性的接口或者方法添加到一个标准化的接口中，这个新增的接口或者方法被前缀修饰。

### 接口前缀

需要使用大写的前缀修饰接口名：

- `WebKit` (谷歌，Safari, 新版 Opera 浏览器，以及几乎所有 iOS 系统中的浏览器 (包括 iOS 系统中的火狐浏览器); 简单的说，所有基于 WebKit 内核的浏览器)
- `Moz` (火狐浏览器)
- `O` (旧版 Opera 浏览器)
- `MS` (IE 浏览器 和 Edge 浏览器)

### 属性和方法前缀

需要使用小写的前缀修饰属性或者方法

- `webkit` (谷歌，Safari, 新版 Opera 浏览器，以及几乎所有 iOS 系统中的浏览器 (包括 iOS 系统中的火狐浏览器); 简单的说，所有基于 WebKit 内核的浏览器)
- `moz` (火狐浏览器)
- `o` (旧版 Opera 浏览器等
- `ms` (IE 浏览器 和 Edge 浏览器)

示例：

```js
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

## 了解更多

### 基础知识

- 维基百科[浏览器引擎前缀（Vendor prefix）](https://zh.wikipedia.org/wiki/CSS_hack#Browser_prefixes)
