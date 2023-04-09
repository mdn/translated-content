---
title: 종속
slug: Web/CSS/Cascade
---

{{CSSRef}}

**종속**(**Cascade**)이란 서로 다른 원점에서 가져온 속성 여럿을 조합해 최종 결과를 도출하는 알고리즘입니다. Cascading Style Sheets라는 이름에서도 알 수 있듯 종속은 CSS의 중심입니다. 이 글은 종속이 무엇인지, 선언한 {{Glossary("CSS")}} [정의](/ko/docs/Web/API/CSSStyleDeclaration)가 어떤 순서로 종속되는지, 그리고 여러분, 즉 웹 개발자에게 어떤 영향을 주는지 설명합니다.

## Which CSS entities participate in the cascade

Only CSS declarations, that is property/value pairs, participate in the cascade. This means that [at-rules](/ko/docs/Web/CSS/At-rule) containing entities other than declarations, such as a {{ cssxref("@font-face")}} rule containing _descriptors_, don't participate in the cascade. In these cases, only the at-rule as a whole participates in the cascade: here, the `@font-face` identified by its [`font-family`](/en-US/docs/Web/CSS/@font-face/font-family) descriptor. If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered.

While the declarations contained in most at-rules — such as those in {{cssxref("@media")}}, {{cssxref("@document")}}, or {{cssxref("@supports")}} — participate in the cascade, declarations contained in {{cssxref("@keyframes")}} don't. As with `@font-face`, only the at-rule as a whole is selected via the cascade algorithm.

Finally, note that {{cssxref("@import")}} and {{cssxref("@charset")}} obey specific algorithms and aren't affected by the cascade algorithm.

## Origin of CSS declarations

The CSS cascade algorithm's job is to select CSS declarations in order to determine the correct values for CSS properties. CSS declarations originate from different origins: the **[User-agent stylesheets](#user-agent_stylesheets)**, the **[Author stylesheets](#author_stylesheets)**, and the **[User stylesheets](#user_stylesheets)**.

Though style sheets come from these different origins, they overlap in scope; to make this work, the cascade algorithm defines how they interact.

### User-agent stylesheets

The browser has a basic style sheet that gives a default style to any document. These style sheets are named **user-agent stylesheets**. Some browsers use actual style sheets for this purpose, while others simulate them in code, but the end result is the same.

Some browsers let users modify the user-agent stylesheet. Although some constraints on user-agent stylesheets are set by the HTML specification, browsers still have a lot of latitude: that means that significant differences exist from one browser to another. To simplify the development process, Web developers often use a CSS reset style sheet, forcing common properties values to a known state before beginning to make alterations to suit their specific needs.

### Author stylesheets

**Author stylesheets** are the most common type of style sheet. These are style sheets that define styles as part of the design of a given web page or site. The author of the page defines the styles for the document using one or more stylesheets, which define the look and feel of the website — its theme.

### User stylesheets

The user (or reader) of the web site can choose to override styles in many browsers using a custom **user stylesheet** designed to tailor the experience to the user's wishes.

### Override stylesheets {{deprecated_inline}}

This feature was never implemented outside of Gecko, where it was only ever used for the non-standard [XBL stylesheets](/ko/docs/Mozilla/Tech/XBL).

## Cascading order

The cascading algorithm determines how to find the value to apply for each property for each document element.

1. It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate media at-rule.
2. Then it sorts these rules according to their importance, that is, whether or not they are followed by `!important`, and by their origin. The cascade is in ascending order, which means that `!important` values from a user-defined style sheet have precedence over normal values originated from a user-agent style sheet:

    |     | Origin                                | Importance   |
    | --- | ------------------------------------- | ------------ |
    | 1   | CSS Transitions                       | _see below_  |
    | 2   | user agent                            | normal       |
    | 3   | user                                  | normal       |
    |     | override {{deprecated_inline}} | normal       |
    | 4   | author                                | normal       |
    | 5   | CSS Animations                        | _see below_  |
    |     | override {{deprecated_inline}} | `!important` |
    | 6   | author                                | `!important` |
    | 7   | user                                  | `!important` |
    | 8   | user agent                            | `!important` |

3. In case of equality, the [specificity](/ko/docs/Web/CSSSpecificity) of a value is considered to choose one or the other.

## Resetting styles

After your content has finished altering styles, it may find itself in a situation where it needs to restore them to a known state. This may happen in cases of animations, theme changes, and so forth. The CSS property {{cssxref("all")}} lets you quickly set (almost) everything in CSS back to a known state.

`all` lets you opt to immediately restore all properties to any of their initial (default) state, the state inherited from the previous level of the cascade, a specific origin (the user-agent stylesheet, the author stylesheet, or the user stylesheet), or even to clear the values of the properties entirely.

## CSS animations and the cascade

[CSS animations](/ko/docs/Web/CSSUsing_CSS_animations), using {{ cssxref("@keyframes")}} at-rules, define animations between states. Keyframes don't cascade, meaning that at any given time CSS takes values from only one single {{cssxref("@keyframes")}}, and never mixes multiple ones together.

When several keyframes are appropriate, it chooses the latest defined in the most important document, but never combined all together.

Also note that values within `@keyframes` at-rules overwrite all normal values but are overwritten by `!important` values.

## Example

Let's look at an example involving multiple sources of CSS across the various origins; here we have a user agent style sheet, two author style sheets, a user stylesheet, and inline styles within the HTML:

**User-agent CSS:**

```css
li { margin-left: 10px }
```

<strong class="brush:css;">Author CSS 1:</strong>

```css
li { margin-left: 0 } /* This is a reset */
```

<strong class="brush:css;">Author CSS 2:</strong>

```css
@media screen {
  li { margin-left: 3px }
}

@media print {
  li { margin-left: 1px }
}
```

<strong class="brush:css;">User CSS:</strong>

```css
.specific { margin-left: 1em }
```

**HTML:**

```html
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```

In this case, declarations inside `li` and `.specific` rules should apply. No declaration is marked as `!important`, so the precedence order is author style sheets before user style sheets or user-agent stylesheet.

So three declarations are in competition:

```css
margin-left: 0
```

```css
margin-left: 3px
```

```css
margin-left: 1px
```

The last one is ignored (on a screen), and the first two have the same selector, hence the same specificity. Therefore, it is the last one that is then selected:

```css
margin-left: 3px
```

Note that the declaration defined in the user CSS, though having a greater specifity, is not chosen as the cascade algorithm is applied before the specifity algorithm.

## 명세서

{{Specifications}}

## See also

- [A very simple introduction to the CSS cascade](/ko/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- CSS 주요 개념

  - [CSS 문법](/ko/docs/Web/CSS/Syntax)
  - [@규칙](/ko/docs/Web/CSS/At-rule)
  - [주석](/ko/docs/Web/CSS/Comments)
  - [명시도](/ko/docs/Web/CSS/Specificity)
  - [상속](/ko/docs/Web/CSS/inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Web/CSS/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 값

    - [초깃값](/ko/docs/Web/CSS/initial_value)
    - [계산값](/ko/docs/Web/CSS/computed_value)
    - [결정값](/ko/docs/Web/CSS/resolved_value)
    - [지정값](/ko/docs/Web/CSS/specified_value)
    - [사용값](/ko/docs/Web/CSS/used_value)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/Replaced_element)
