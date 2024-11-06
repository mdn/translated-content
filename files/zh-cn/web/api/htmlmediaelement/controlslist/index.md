---
title: HTMLMediaElement.controlsList
slug: Web/API/HTMLMediaElement/controlsList
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

[`HTMLMediaElement`](/zh-CN/docs/Web/API/HTMLMediaElement)接口的**`controlsList`** 属性返回 DOMTokenList，帮助用户在显示其自己的控件集时选择要在媒体元素上显示的控件。DOMTokenList 可以设置以下三个可能值中的一个或多个：nodownload，nofullscreen 和 noremoteplayback（值是一组[无序的空格分隔标记](https://wicg.github.io/controls-list/html-output/multipage/infrastructure.html#unordered-set-of-unique-space-separated-tokens)，这些[标记](https://wicg.github.io/controls-list/html-output/multipage/infrastructure.html#unordered-set-of-unique-space-separated-tokens)是[ASCII 不区分大小写的](https://infra.spec.whatwg.org/#ascii-case-insensitive)）。

1. [`nodownload`](https://wicg.github.io/controls-list/html-output/multipage/embedded-content.html#attr-media-controlslist-nodownload)关键字暗示的下载控制应使用用户代理自己的一套媒体元素控件时被隐藏。
2. [`nofullscreen`](https://wicg.github.io/controls-list/html-output/multipage/embedded-content.html#attr-media-controlslist-nofullscreen)关键字暗示在使用用户代理自己的媒体元素控件集时，应隐藏全屏模式控件。
3. [`noremoteplayback`](https://wicg.github.io/controls-list/html-output/multipage/embedded-content.html#attr-media-controlslist-noremoteplayback)关键字暗示当使用用户代理自己的媒体元素控件集时，应隐藏远程播放控件。

## 语法

```plain
var domTokenList = HTMLMediaElement.controlsList;
```

### Value

A {{domxref("DOMTokenList")}}.

## 示例

```plain
<video controls controlslist="nodownload" id="video" src=""></video>
```

```plain
<video controls controlslist="nodownload nofullscreen noremoteplayback" id="video" src=""></video>
```

## 规格

<https://wicg.github.io/controls-list/html-output/multipage/embedded-content.html#attr-media-controlslist>.

## 浏览器兼容性

{{Compat}}

## 参阅

- [Chrome HTMLMediaElement controlsList Sample](https://googlechrome.github.io/samples/media/controlslist.html) 示例
