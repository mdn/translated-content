---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
---
{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`toggle()`** 方法从列表中删除一个给定的*标记* 并返回 `false` 。 如果*标记* 不存在，则添加并且函数返回 `true`。

## 语法

```plain
tokenList.toggle(token, force);
```

### 参数列表

- token
  - : 标记列表中你想探查并切换的 {{domxref("DOMString")}} .
- force {{optional_inline}}
  - : 一个{{domxref("Boolean")}} 值，设置后会将方法变成单向操作。如设置为`false`, 则会删除标记列表中匹配的给定标记，且不会再度添加。如设置为 `true`, 则将在标记列表中添加给定标记，且不会再度删除。

### 返回值

该方法返回一个{{domxref("Boolean")}}值 — 如给定标记不存在于列表中返回`false` , 标记存在则返回`true` 。

## Examples

In the following example we retrieve the list of classes set on a {{htmlelement("span")}} element as a `DOMTokenList` using {{domxref("Element.classList")}}. We then replace a token in the list, and write the list into the `<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b">classList is 'a b'</span>
```

Now the JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
span.onclick = function() {
  var result = classes.toggle("c");
  if(result) {
    span.textContent = "'c' added; classList is now '" + classes + "'.";
  } else {
    span.textContent = "'c' removed; classList is now '" + classes + "'.";
  }
}
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("api.DOMTokenList.toggle")}}
