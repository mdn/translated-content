---
title: MathMLElement
slug: Web/API/MathMLElement
---

{{APIRef("MathML")}}

**`MathMLElement`** 接口表示任意 [MathML](/zh-CN/docs/Web/MathML) 元素。

## 属性

_This interface has no properties, but inherits properties from: {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("Element")}}, {{DOMxRef("ElementCSSInlineStyle")}}, {{DOMxRef("GlobalEventHandlers")}}, {{DOMxRef("HTMLOrForeignElement")}}_

## 方法

_This interface has no methods, but inherits methods from: {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("Element")}}, {{DOMxRef("ElementCSSInlineStyle")}}, {{DOMxRef("GlobalEventHandlers")}}, {{DOMxRef("HTMLOrForeignElement")}}_

## 示例

### MathML

```html
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

### JavaScript

```js
document.querySelector("msqrt").constructor.name; // MathMLElement
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Element")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("SVGElement")}}
