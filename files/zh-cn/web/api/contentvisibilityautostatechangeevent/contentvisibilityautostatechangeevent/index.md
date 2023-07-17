---
title: ContentVisibilityAutoStateChangeEvent：ContentVisibilityAutoStateChangeEvent() 构造函数
short-title: ContentVisibilityAutoStateChangeEvent()
slug: Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}

构造函数 **`ContentVisibilityAutoStateChangeEvent()`** 创建新的 {{DOMXref("ContentVisibilityAutoStateChangeEvent")}} 对象实例。

## 语法

```js-nolint
new ContentVisibilityAutoStateChangeEvent(type, options)
```

### 参数

- `type`
  - : 表示事件类型的字符串。对于 `ContentVisibilityAutoStateChangeEvent`，此参数恒为 `event`。
- `options` {{optional_inline}}
  - : 包含下列属性的对象：
    - `skipped`
      - : 布尔值，若用户代理[跳过元素内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)则设置为 `true`，否则为 `false`。

## 示例

开发者不会手动使用此构造函数。当触发 {{DOMXref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件导致调用事件处理器时将构造新的 `ContentVisibilityAutoStateChangeEvent` 对象。

```js
canvasElem.addEventListener("contentvisibilityautostatechange", (event) => {
  // …
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMXref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件
- [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)
- {{CSSXref("content-visibility")}} 属性
- {{CSSXref("contain")}} 属性
