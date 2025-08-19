---
title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
---

[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) **`contenteditable`** 是一个枚举属性，表示元素是否可被用户编辑。如果可以，浏览器会修改元素的组件以允许编辑。

{{InteractiveExample("HTML Demo: contenteditable", "tabbed-shorter")}}

```html interactive-example
<blockquote contenteditable="true">
  <p>Edit this content to add your own quote</p>
</blockquote>

<cite contenteditable="true">-- Write your own name here</cite>
```

```css interactive-example
blockquote {
  background: #eee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}

cite {
  margin: 16px 32px;
  font-weight: bold;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

[contenteditable="true"] {
  caret-color: red;
}
```

该属性必须是下面的值之一：

- `true` 或*空字符串*，表示元素是可编辑的。
- `false` 表示元素不是可编辑的。
- `plaintext-only` 表示元素的原始文本是可编辑的，但富文本格式会被禁用。

如果没有设置该属性的值（例如：`<label contenteditable>Example Label</label>`），则其值被视为空字符串。

如果没给出该属性或设置了无效的属性值，则其默认值*继承*自父元素：即，如果父元素可编辑，该子元素也可编辑。

注意，虽然该属性允许设定的值包括 `true` 和 `false`，但该属性仍是一个[_枚举_](/zh-CN/docs/Glossary/Enumerated)属性而非*布尔*属性。

你可以使用 CSS {{cssxref("caret-color")}} 属性设置用于绘制文本插入 {{Glossary("caret")}} 的颜色。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有的[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} 和 {{domxref("HTMLElement.isContentEditable")}}
- CSS {{cssxref("caret-color")}} 属性
- [Element `input` 事件](/zh-CN/docs/Web/API/Element/input_event)
