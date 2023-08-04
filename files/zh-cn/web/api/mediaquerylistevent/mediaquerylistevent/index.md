---
title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
---

{{APIRef("CSSOM")}}

**`MediaQueryListEvent()`** 构造函数用于创建一个新的 {{DOMxRef("MediaQueryListEvent")}} 对象。

## 语法

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### 参数

- `type`
  - : 一个带有该事件名字的字符串。该字符串是大小写敏感的，且浏览器通常将其设置为 `change`。
- `options` {{optional_inline}}
  - : 一个对象，_除已定义在 {{domxref("Event/Event", "Event()")}}的属性外_，其还可以添加如下额外属性：
    - `media` {{optional_inline}}
      - : 一个字符串，代表着一个序列化后的媒体查询。默认值为 `""`。
    - `matches` {{optional_inline}}
      - : 一个布尔值，代表着匹配媒体查询状态；如果匹配，该值为 `true`，否则为 `false`。默认值为 `false`。

### 返回值

一个新的 {{domxref("MediaQueryListEvent")}} 对象。

## 示例

```js
var media = "(max-width: 600px)";
var matches = true;

var myMediaQueryListEvent = new MediaQueryListEvent("change", {
  media,
  matches,
});
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
- {{DOMxRef("MediaQueryListEvent")}}
