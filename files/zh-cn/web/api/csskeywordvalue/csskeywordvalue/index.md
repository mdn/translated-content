---
title: CSSKeywordValue：CSSKeywordValue() 构造函数
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

**`CSSKeywordValue()`** 构造函数创建一个新的 {{domxref("CSSKeywordValue")}} 对象，用于表示 CSS 关键字和其它标识符。

## 语法

```js-nolint
new CSSKeywordValue(val)
```

### 参数

- `value`
  - : 设置或返回新 `CSSKeywordValue` 的值。

### 异常

- {{jsxref("TypeError")}}
  - : 如果参数 `value` 未设置或不是 {{jsxref('String')}} 类型，则抛出此异常。

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
const keyword = new CSSKeywordValue("initial");
const myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", keyword);

console.log(myElement.get("display").value); // 'initial'
console.dir(keyword);
```

{{EmbedLiveSample("示例", 120, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
