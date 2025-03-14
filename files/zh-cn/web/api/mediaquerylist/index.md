---
title: MediaQueryList
slug: Web/API/MediaQueryList
---

{{APIRef("CSSOM")}}

一个 `MediaQueryList` 对象在一个 {{DOMxRef("document")}} 上维持着一系列的[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)，并负责处理当媒体查询在其 document 上发生变化时向监听器进行通知的发送。

如果你需要以编程方式来检测一个 document 上的媒体查询的值的变化，这个 `MediaQueryList` 对象使得通过观察其 document 而检测它的媒体查询的值的变化成为可能，而不是周期性地对这些媒体查询的值进行检查。

## 实例属性

_`MediaQueryList` 接口从它的父接口 {{DOMxRef("EventTarget")}} 继承了属性。_

- {{DOMxRef("MediaQueryList.matches", "matches")}} {{ReadOnlyInline}}
  - : 一个布尔值，如果当前 {{DOMxRef("document")}} 与媒体查询列表相匹配，则返回 `true`，否则返回 `false`。
- {{DOMxRef("MediaQueryList.media", "media")}} {{ReadOnlyInline}}
  - : 代表序列化的媒体查询的字符串。

## 方法

### addListener()

在媒体查询列表上增加一个新的监听器，如果列表中已经存在了这个指定的监听器，这个方法将失去作用。

#### 参数 ( 针对 addListener 方法)

- `listener`
  - : 当其媒体查询的求值结果发生变化时，该 {{DOMxRef("MediaQueryListListener")}} 对象将会被调用。

### removeListener()

从媒体查询列表中移除一个监听器，如果列表中不存在这个指定的监听器，则这个方法将失去作用。

#### 参数 (针对 removeListener 方法)

- `listener`
  - : 该 {{DOMxRef("MediaQueryListListener")}}对象将停止访问媒体查询的求值结果发生的变化。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [通过代码使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryListListener")}}
