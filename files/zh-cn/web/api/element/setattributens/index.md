---
title: Element：setAttributeNS() 方法
slug: Web/API/Element/setAttributeNS
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

`setAttributeNS` 根据给定的命名空间和名称添加一个新属性或改变属性的值。

如果你正在处理 HTML 文档，并且你不需要指定要设置的属性属于特定的命名空间，那么使用 {{domxref("Element.setAttribute()")}} 方法即可。

## 语法

```js-nolint
setAttributeNS(namespace, name, value)
```

### 参数

- `namespace`：一个指定属性的命名空间的字符串。
- `name`：一个标识属性的限定名称的字符串。即一个命名空间前缀，后跟一个冒号，再跟一个本地名称。
- `value`：一个表示新的属性值的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

## 备注

在限定命名空间的属性的方法中，`setAttributeNS` 是唯一一个需要完全限定名（即 `"namespace:localname"`）的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
