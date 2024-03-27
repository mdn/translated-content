---
title: CSSImportRule：layerName 属性
slug: Web/API/CSSImportRule/layerName
---

{{APIRef("CSSOM")}}

{{domxref("CSSImportRule")}} 接口的 **`layerName`** 只读属性返回由 {{cssxref("@import")}} [at 规则](/zh-CN/docs/Web/CSS/At-rule)创建的层叠层的名称。

如果创建的层是匿名的，则字符串为空（`""`），如果没有创建层，则为 `null` 对象。

## 值

一个字符串，可以为空，或者是 `null` 对象。

## 示例

该文档的单个样式表包含三个 {{cssxref("@import")}} 规则。第一个声明将样式表导入到一个具名层。第二个声明将样式表导入到一个匿名层。第三个声明在没有层声明的情况下导入一个样式表。

`layerName` 属性返回与导入的样式表关联的层的名称。

```css
@import url("style1.css") layer(layer-1);
@import url("style2.css") layer;
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].layerName); // 返回 `"layer-1"`
console.log(myRules[1].layerName); // 返回 `""`（匿名层）
console.log(myRules[2].layerName); // 返回 `null`
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 学习区：[层叠层](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_layers)
- {{cssxref("@import")}} 和 {{cssxref("@layer")}}
