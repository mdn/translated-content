---
title: syntax
slug: Web/CSS/@property/syntax
---

{{CSSRef}}{{SeeCompatTable}}

**`syntax`** [CSS](/zh-CN/docs/Web/CSS) 描述符在使用{{cssxref("@property")}} {{cssxref("at-rule")}}时是必需的，它描述了该属性所允许的语法结构。

## Syntax

如下是所有的有效 syntax 字符串：

```css
syntax: "<color>"; /* 接收一个颜色值 */

syntax: "<length> | <percentage>"; /* 接收长度或百分比参数，但是二者之间不进行计算合并 */

syntax: "small | medium | large"; /* 接收这些参数值之一作为自定义标识符 */

syntax: "*"; /* 任何有效字符 */
```

## 取值

规范定义的、受语法支持的字符串。支持的语法是[CSS types](/zh-CN/docs/Web/CSS/CSS_Types)的子集。这些可以单独使用，一些类型也可以结合使用。

- `"<length>"`
  - : 任何有效的 {{cssxref("&lt;length&gt;")}} 值。
- `"<number>"`
  - : 任何有效的 {{cssxref("&lt;number&gt;")}} 值。
- `"<percentage>"`
  - : 任何有效的 {{cssxref("&lt;percentage&gt;")}} 值。
- `"<length-percentage>"`
  - : 任何有效的 {{cssxref("&lt;length-percentage&gt;")}} 值。
- `"<color>"`
  - : 任何有效的 {{cssxref("&lt;color&gt;")}} 值。
- `"<image>"`
  - : 任何有效的 {{cssxref("&lt;image&gt;")}} 值。
- `"<url>"`
  - : 任何有效的 {{cssxref("url()","url()")}} 值。
- `"<integer>"`
  - : 任何有效的 {{cssxref("&lt;integer&gt;")}} 值。
- `"<angle>"`
  - : 任何有效的 {{cssxref("&lt;angle&gt;")}} 值。
- `"<time>"`
  - : 任何有效的 {{cssxref("&lt;time&gt;")}} 值。
- `"<resolution>"`
  - : 任何有效的 {{cssxref("&lt;resolution&gt;")}} 值。
- `"<transform-function>"`
  - : 任何有效的 {{cssxref("&lt;transform-function&gt;")}} 值。
- `"<custom-ident>"`
  - : 任何有效的 {{cssxref("&lt;custom-ident&gt;")}} 值。
- `"<transform-list>"`
  - : A list of valid {{cssxref("&lt;transform-function&gt;")}} 值。

## 标准定义

{{cssinfo}}

## 标准语法

```css
{{csssyntax}}
```

## 实例

为 `--my-color` {{cssxref('--*', '自定义属性')}}添加颜色值类型检测、设置默认值并且设置属性值不允许被继承。

使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref('@property')}} [规则](/zh-CN/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

使用 [JavaScript 中的](/zh-CN/docs/Web/JavaScript) {{domxref('CSS.registerProperty')}}函数：

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## 标准语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [CSS 属性与值 API](/zh-CN/docs/Web/API/CSS_Properties_and_值_API)
- [CSS 绘图 API](/zh-CN/docs/Web/API/CSS_Painting_API)
- [CSS 类型对象模型](/zh-CN/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/zh-CN/docs/Web/Houdini)
