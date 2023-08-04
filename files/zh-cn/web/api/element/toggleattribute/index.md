---
title: Element.toggleAttribute()
slug: Web/API/Element/toggleAttribute
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`toggleAttribute()`** 方法切换给定元素的某个布尔值属性的状态（如果属性不存在则添加属性，属性存在则移除属性）。

## 语法

```
Element.toggleAttribute(name [, force]);
```

### 参数

- `name`
  - : A {{domxref("DOMString")}} specifying the name of the attribute to be toggled. The attribute name is automatically converted to all lower-case when `toggleAttribute()` is called on an HTML element in an HTML document.
- `force` {{optional_inline}}
  - : A boolean value to determine whether the attribute should be added or removed, no matter whether the attribute is present or not at the moment.

### 返回值

`true` if attribute **`name`** is eventually present, and `false` otherwise.

### 异常

- `InvalidCharacterError`
  - : The specified attribute `name` contains one or more characters which are not valid in attribute names.

## 示例

在下面的例子中，`toggleAttribute()` 被用于切换 {{HTMLElement("input")}} 的 `readonly` 属性。

### HTML

```html
<input value="text" /> <button>toggleAttribute("readonly")</button>
```

### JavaScript

```js
var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener("click", function () {
  input.toggleAttribute("readonly");
});
```

### 结果

{{ EmbedLiveSample('示例', '300', '50') }}

{{DOMAttributeMethods}}

## Polyfill

> **备注：** 下面代码中的 `void 0` 即 `undefined`。

```js
if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function (name, force) {
    if (force !== void 0) force = !!force;

    if (this.getAttribute(name) !== null) {
      if (force) return true;

      this.removeAttribute(name);
      return false;
    } else {
      if (force === false) return false;

      this.setAttribute(name, "");
      return true;
    }
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
