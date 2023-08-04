---
title: Element.remove()
slug: Web/API/Element/remove
---

{{APIRef("DOM")}}

**`Element.remove()`** 方法，把对象从它所属的 DOM 树中删除。

## 语法

```
node.remove();
```

## 示例

### 使用 `remove()`

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
```

```js
var el = document.getElementById("div-02");
el.remove();
// id 为 'div-02' 的 div 被删掉了
```

{{EmbedLiveSample('使用_remove()')}}

### `Element.remove()` 是不可见的

在 `with` 语句中，`remove()` 方法是不可见的。参阅 {{jsxref("Symbol.unscopables")}} 了解更多信息。

```js
with (node) {
  remove();
}
// ReferenceError: remove is not defined
```

## Polyfill

You can polyfill the `remove()` method in Internet Explorer 9 and higher with the following code:

```js
//https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("remove")) {
      return;
    }
    Object.defineProperty(item, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      },
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ChildNode")}} 纯接口。
- 实现此纯接口的对象类型： {{domxref("CharacterData")}}、{{domxref("Element")}} , 和 {{domxref("DocumentType")}}.
