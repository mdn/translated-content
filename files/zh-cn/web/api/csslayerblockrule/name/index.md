---
title: CSSLayerBlockRule：name 属性
slug: Web/API/CSSLayerBlockRule/name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

{{domxref("CSSLayerBlockRule")}} 接口的只读属性 **`name`** 表示关联的层叠层的名称。

## 值

包含层名称的字符串，如果层是匿名的，则为 `""`。

## 示例

### HTML

```html
<output></output> <output></output>
```

### CSS

```css
output {
  display: block;
}

@layer special {
  div {
    color: rebeccapurple;
  }
}

@layer {
  div {
    color: black;
  }
}
```

### JavaScript

```js
const item1 = document.getElementsByTagName("output")[0];
const item2 = document.getElementsByTagName("output")[1];
const rules = document.styleSheets[1].cssRules;
// 注意，样式表 #1 是与此嵌入示例相关联的样式表，
// 而样式表 #0 是与整个 MDN 页面相关联的样式表

const layer = rules[1]; // CSSLayerBlockRule
const anonymous = rules[2]; // 匿名的 CSSLayerBlockRule

item1.textContent = `第一个 CSSLayerBlockRule 定义了“${layer.name}”层。`;
item2.textContent = `第二个 CSSLayerBlockRule 定义了一个层，其名称为：“${anonymous.name}”。`;
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@layer")}} 的声明语句由 {{domxref("CSSLayerStatementRule")}} 表示。
- 如何在 CSS 中[创建具名层叠层](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#创建层叠层)。
