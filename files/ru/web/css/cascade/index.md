---
title: Cascade
slug: Web/CSS/Cascade
---

{{ CSSRef() }}

Каскадность это алгоритм, который определяет как совмещать и сочетать значения свойств происходящих из различных источников(CSS-правила могут располагаться как в самом веб-документе, так и во внешних файлах). Данный алгоритм лежит в основе CSS, как можно понять из его названия: _Cascading_ Style Sheets(_Каскадные_ Таблицы Стилей). Данная статья объясняет что такое каскадность, порядок в котором определяется какие свойства будут в конечном итоге выполнены и как это затрагивает вас, веб разработчика.

## What CSS entities participate in the cascade

Only CSS declarations, that is property/value pairs, participate in the cascade. That means that at-rules containing entities other than declarations, like {{ cssxref("@font-face")}} containing _descriptors_ don't participate in the cascade. In these case, only the at-rule as the whole participates in the cascade; here the @font-face identified by its `font-family` descriptor. If several `@font-face` with the same descriptor are defined, only the most adequate `@font-face`, as a whole, is considered.

If the declarations contained in most [at-rules](/ru/docs/CSS/At-rule) participate in the cascade, like declarations contained in {{cssxref("@media")}}, {{cssxref("@documents")}}, or {{cssxref("@supports")}}, declarations contained in {{cssxref("@keyframes")}} doesn't. Like for {{cssxref("@font-face")}}, only the at-rule as a whole is selected via the cascade algorithm.

Finally note that {{cssxref("@import")}} and {{cssxref("@charset")}} obey specific algorithms and aren't affected by the cascade algorithm.

## Origin of CSS declarations

The CSS cascade algorithm wants to select CSS declarations to set the correct value for CSS properties. CSS declarations originate from different origins:

- The browser has a basic style sheet that gives a default style to any document. These style sheets are named **user-agent stylesheets**. Some browsers uses actual style sheets to perform this, while others simulate them in code, but both cases should be indetectable. Some browsers also allow users to modify the user-agent stylesheet. Although some constraints on user-agent stylesheets are set by the HTML specification, browsers still have a lot of latitude: that means that significant differences exist from one browser to another. To ease their development and lower the basic ground on which to work, Web developers often use a CSS reset style sheet, forcing common properties values to a known state.
- The author of the Web page define styles for the document. These are the most common style sheets. Most of the time several of them are defined and they make the look and feel of the Web site — its theme.
- The _reader_, the user of the browser, may have a custom style sheet to tailor its experience.

Though style sheets come from these different origins, they overlap in scope: the cascade algorithm defines how they interact.

## Cascading order

The cascading algorithm determines how to find the value to apply for each property for each document element.

1. It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate media at-rule.
2. Then it sorts these rules according to their importance, that is, whether or not they are followed by `!important`, and by their origin. The cascade is in ascending order, which means that `!important` values from a user-defined style sheet have precedence over normal values originated from a user-agent style sheet:

   |     | Origin         | Importance   |
   | --- | -------------- | ------------ |
   | 1   | user agent     | normal       |
   | 2   | user           | normal       |
   | 3   | author         | normal       |
   | 4   | CSS Animations | _see below_  |
   | 5   | author         | `!important` |
   | 6   | user           | `!important` |
   | 7   | user agent\*   | `!important` |

   \* based on [w3.org CSS3 specs](https://www.w3.org/TR/css-cascade-3/#importance)

3. In case of equality, the [specificity](/ru/docs/CSS/Specificity) of a value is considered to choose one or the other.

## CSS animations and the cascade

[CSS Animations](/ru/docs/CSS/Using_CSS_animations), using {{ cssxref("@keyframes")}} at-rules defines animations between states. Keyframes don't cascade, meaning that at any time CSS takes values from one single `@keyframes` and never mixes several of them.

When several keyframes are appropriate, it chooses the latest defined in the most important document, but never combined all together.

Also note that values within `@keyframes` at-rules overwrite all normal values but are overwritten by `!important` values.

## Example

**User-agent CSS:**

```css
li {
  margin-left: 10px;
}
```

**Author CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Author CSS 2:**

```css
@media screen {
  li {
    margin-left: 3px;
  }
}

@media print {
  li {
    margin-left: 1px;
  }
}
```

**User CSS:**

```css
.specific {
  margin-left: 1em;
}
```

**HTML:**

```html
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```

In this case, declarations inside `li` and `.specific` rules should apply. No declaration is marked as `!important` so the precedence order is author style sheets before user style sheets or user-agent stylesheet.

So three declarations are in competition:

```css
margin-left: 0;
```

```css
margin-left: 3px;
```

```css
margin-left: 1px;
```

The last one is ignored (on a screen), and the two first have the same selector, hence the same specificity: it is the last one that is then selected:

```css
margin-left: 3px;
```

Note that the declaration defined in the user CSS, though having a greater specifity, is not chosen as the cascade algorithm is applied before the specifity algorithm.

## See also

- The very simple [introduction](/ru/docs/CSS/Getting_Started/Cascading_and_inheritance) of cascading in the CSS Tutorial.
- Ключевые концепции CSS
  - [Синтаксис CSS](/ru/docs/Web/CSS/Syntax)
  - [@-правила](/ru/docs/Web/CSS/At-rule)
  - [комментарии](/ru/docs/Web/CSS/Comments)
  - [специфичность](/ru/docs/Web/CSS/Specificity)
  - [наследование](/ru/docs/Web/CSS/inheritance)
  - [блочная модель](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [режимы компоновки](/ru/docs/Web/CSS/Layout_mode)
  - [модели визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
  - [Схлопывание отступов](/ru/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Значения
    - [начальные](/ru/docs/Web/CSS/initial_value)
    - [вычисленные](/ru/docs/Web/CSS/computed_value)
    - [используемые](/ru/docs/Web/CSS/used_value)
    - [действительные](/ru/docs/Web/CSS/actual_value)
  - [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
  - [Сокращённые свойства](/ru/docs/Web/CSS/Shorthand_properties)
  - [Замещаемые элементы](/ru/docs/Web/CSS/Replaced_element)
