---
title: HTMLIFrameElement：name 属性
slug: Web/API/HTMLIFrameElement/name
l10n:
  sourceCommit: e2b1940639d7b81e1205884532acbd0ee5e7ec34
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLIFrameElement")}} 接口的 **`name`** 属性是反映 {{HTMLElement("iframe")}} 元素的 `name` 属性的字符串值，表示 `<iframe>` 元素的特定名称。

## 值

一个字符串。

## 示例

```html
<iframe id="el" name="example"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.name); // 输出：“example”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
