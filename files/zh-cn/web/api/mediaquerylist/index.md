---
title: MediaQueryList
slug: Web/API/MediaQueryList
---

{{APIRef("CSSOM View")}}{{SeeCompatTable}}

一个`MediaQueryList`对象在一个{{ domxref("document") }}上维持着一系列的[媒体查询](/zh-CN/docs/CSS/Media_queries)，并负责处理当媒体查询在其 document 上发生变化时向监听器进行通知的发送。

如果你需要以编程方式来检测一个 document 上的媒体查询的值的变化，这个`MediaQueryList`对象使得通过观察其 document 而检测它的媒体查询的值的变化成为可能，而不是周期性地对这些媒体查询的值进行检查。

## 方法概述

```
void addListener(MediaQueryListListener listener);
void removeListener(MediaQueryListListener listener);
```

## 属性

| Property  | Type        | Description                                                                                             |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `matches` | `boolean`   | `如果当前`{{ domxref("document") }}匹配该媒体查询列表则其值为 true；反之其值为 false。**只读。** |
| `media`   | `DOMString` | 序列化的媒体查询列表。                                                                                  |

## 方法

### addListener()

在媒体查询列表上增加一个新的监听器，如果列表中已经存在了这个指定的监听器，这个方法将失去作用。

```
void addListener(
  MediaQueryListListener listener
);
```

#### 参数 ( 针对 addListener 方法)

- `listener`
  - : 当其媒体查询的求值结果发生变化时，该{{ domxref("MediaQueryListListener") }} 对象将会被调用。

### removeListener()

从媒体查询列表中移除一个监听器，如果列表中不存在这个指定的监听器，则这个方法将失去作用。

```
void removeListener(
  MediaQueryListListener listener
);
```

#### 参数 (针对 removeListener 方法)

- `listener`
  - : 该{{ domxref("MediaQueryListListener") }}对象将停止访问媒体查询的求值结果发生的变化。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- [CSS 媒体查询](/zh-CN/docs/CSS/Media_queries)
- [通过代码使用媒体查询](/zh-CN/docs/DOM/Using_media_queries_from_code)
- {{ domxref("window.matchMedia()") }}
- {{ domxref("MediaQueryListListener") }}
