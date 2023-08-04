---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
---

{{APIRef("CSSOM")}}

`MediaQueryListEvent` 对象存储着发生在 {{DOMxRef("MediaQueryList")}} 对象上的变化的信息——作为一个在函数中被 {{DOMxRef("MediaQueryList.change_event", "change")}} 事件引用的事件对象。

{{InheritanceDiagram}}

## 构造函数

- {{DOMxRef("MediaQueryListEvent.MediaQueryListEvent()", "MediaQueryListEvent()")}}
  - : 创建一个新的 `MediaQueryListEvent` 实例。

## 属性

_`MediaQueryListEvent` 接口的属性继承自它的父接口，{{DOMxRef("Event")}}。_

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : 一个布尔值，如果 {{DOMxRef("document")}}
    目前匹配媒体查询列表，该值为 `true` ，反之为 `false`。
- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : 一个字符串，代表着一个序列化后的媒体查询。

## 方法

_`MediaQueryListEvent` 接口的方法继承自它的父接口，{{DOMxRef("Event")}}。_

## 示例

```js
var mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* 视口等于或小于 600 像素 */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* 视口大于 600 像素 */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addListener(screenTest);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [在代码中使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
