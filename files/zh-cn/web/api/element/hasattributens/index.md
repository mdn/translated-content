---
title: Element：hasAttributeNS() 方法
slug: Web/API/Element/hasAttributeNS
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`hasAttributeNS()`** 方法返回一个表示当前元素是否具有指定命名空间的指定属性的布尔值。

如果你正在处理 HTML 文档，并且你不需要指定属性是否属于特定命名空间，请改用 {{domxref("Element.hasAttribute()", "hasAttribute()")}} 方法。

## 语法

```js-nolint
hasAttributeNS(namespace,localName)
```

### 参数

- `namespace`：一个指定属性的命名空间的字符串。
- `localName`：属性的名称。

### 返回值

一个布尔值。

## 示例

```js
// 在为属性设置值之前检测其是否存在
const d = document.getElementById("div1");
if (
  d.hasAttributeNS("http://www.mozilla.org/ns/specialspace/", "special-align")
) {
  d.setAttribute("align", "center");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
