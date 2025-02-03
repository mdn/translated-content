---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSS Typed Object Model API")}}

[CSS 类型对象模型 API](/zh-CN/docs/Web/API/CSS_Object_Model#css_类型对象模型) 的 **`CSSKeywordValue`** 接口创建一个对象，用于表示 CSS 关键字和其它标识符。

接口实例名称是一个{{Glossary("stringifier", "字符串化器")}}，这意味着在任何需要字符串的地方使用时，都会返回 `CSSKeyword.value` 的值。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}}
  - : 创建一个新的 `CSSKeywordValue` 对象。

## 实例属性

- {{domxref('CSSKeywordValue.value')}}
  - : 返回或设置 `CSSKeywordValue` 的值。

## 实例方法

_继承 {{domxref('CSSStyleValue')}} 的方法。_

## 示例

下面的示例将 CSS {{cssxref('display')}} 属性重置为默认值，并将内联 [`style`](/zh-CN/docs/Web/HTML/Global_attribute/style) 属性设置为 `style="display: initial"`（如果在[开发工具检查器](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html)中查看）。

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">
  查看开发人员工具，查看控制台中的日志，并检查此 div 上的样式属性。
</div>
```

```js
let myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", new CSSKeywordValue("initial"));

console.log(myElement.get("display").value); // 'initial'
```

{{EmbedLiveSample("示例", 120, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref('CSSImageValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
