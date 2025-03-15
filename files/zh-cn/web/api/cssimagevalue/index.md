---
title: CSSImageValue
slug: Web/API/CSSImageValue
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSS Typed Object Model API")}}

[CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Object_Model#css_typed_object_model)的 **`CSSImageValue`** 接口表示取用图像的属性值，例如 {{cssxref('background-image')}}，{{cssxref('list-style-image')}}，或 {{cssxref('border-image-source')}}。

CSSImageValue 对象表示 [`<image>`](/zh-CN/docs/Web/CSS/image) 涉及的 URL，如 [`url()`](/zh-CN/docs/Web/CSS/url_function) 或 [`image()`](/zh-CN/docs/Web/CSS/image)，但不包括 [`linear-gradient()`](/zh-CN/docs/Web/CSS/gradient/linear-gradient) 或 [`element()`](/zh-CN/docs/Web/CSS/element)。

{{InheritanceDiagram}}

## 实例属性

无。

## 实例方法

_继承 {{domxref('CSSStyleValue')}} 方法。_

## 示例

创建元素

```html
<button>魔杖</button>
```

我们添加了一些 CSS，包括请求二进制文件的背景图片：

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url(magic-wand.png) aqua;
}
```

我们获取元素的样式表。然后，我们从样式表中获取景图片，并对其进行字符串化：

```js
// 获得元素
const button = document.querySelector("button");

// 使用 computedStyleMap() 读取所有已计算的样式
const allComputedStyles = button.computedStyleMap();

// 返回 CSSImageValue 示例
console.log(allComputedStyles.get("background-image"));
console.log(allComputedStyles.get("background-image").toString());
```

{{EmbedLiveSample("Examples", 120, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
