---
title: HTMLElement：style 属性
slug: Web/API/HTMLElement/style
---

{{APIRef("CSSOM")}}

只读属性 **`style`** 以 {{domxref("CSSStyleDeclaration")}} 实时对象（Live Object）的形式返回元素的*内联*样式，该对象包含该元素的所有样式属性列表，只为元素的内联 [`style`](/zh-CN/docs/Web/HTML/Global_attributes/style) 属性中定义的属性分配值。

简写属性会展开。如果设置了 `style="border-top: 1px solid black"`，会设置完整属性（{{cssxref("border-top-color")}}、{{cssxref("border-top-style")}} 和 {{cssxref("border-top-width")}}）。

该属性是只读的，意味着不可以将 {{domxref("CSSStyleDeclaration")}} 对象赋值给它。然而，可以通过直接给 `style` 属性分配一个*字符串*来设置内联样式。在这种情况下，这个字符串被转发到 {{domxref("CSSStyleDeclaration.cssText")}}。以这种方式使用 `style` 将完全覆盖该元素的所有内联样式。

因此，要在不改变其他样式值的情况下为一个元素添加特定的样式，通常最好是在 {{domxref("CSSStyleDeclaration")}} 对象上设置个别属性。例如，你可以写成 `element.style.backgroundColor = "red"`。

样式声明可通过设置它为 `null` 或空字符串来重置，比如 `elt.style.color = null`。

> **备注：** 通过这些规则，CSS 属性名称被转换为 JavaScript 标识符：
>
> - 如果属性是由一个单词组成的，则保持原样：如 `height`（也保持小写）。
> - 如果属性是由若干个单词组成的，由横线分隔，则横线被移除，并转化为*驼峰*形式：如 `background-attachment` 转换为 `backgroundAttachment`。
> - 作为 JavaScript 保留关键字的 `float` 属性被转化为 `cssFloat`。
>
> 通过 `style` 属性设置的样式优先级与内联样式声明相同。

## 值

一个实时的 {{domxref("CSSStyleDeclaration")}} 对象。

## 示例

### 获取样式信息

以下代码片段演示了从元素的 `style` 属性获得的值如何与 HTML 属性上设置的样式相关。

```html
<!doctype html>
<html lang="zh-CN">
  <body style="font-weight:bold">
    <div style="border-top: 1px solid blue; color:red" id="elt">
      一个简单的 div
    </div>
    <pre id="out"></pre>
  </body>
</html>
```

```js
const element = document.getElementById("elt");
const out = document.getElementById("out");
const elementStyle = element.style;

// 我们迭代所有的样式（for…of 对 CSStyleDeclaration 无效）
for (const prop in elementStyle) {
  if (Object.hasOwn(elementStyle, prop)) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("获取样式信息", "100", "115")}}

注意，`font-weight` 没有被列为 `elementStyle` 的一个值，因为它没有被定义在元素本身的 `style` 属性中。相反，它是从其父级元素的定义中继承的。还要注意的是，在 `style` 属性中定义的简写属性 {{cssxref("border-top")}}，没有直接列出。相反，它被三个相应的完整属性（{{cssxref("border-top-color")}}、{{cssxref("border-top-style")}} 和 {{cssxref("border-top-width")}}）取代。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用动态样式信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("SVGElement.style")}}
