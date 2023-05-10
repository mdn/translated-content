---
title: attr
slug: Web/CSS/attr
original_slug: Web/CSS/attr()
---

{{CSSRef}}

## 概要

`attr()` [CSS](/zh-TW/docs/Web/CSS) 函數使用於樣式取得被選取之元素中特定屬性的值。它也可以用在擬元素選取項(Pseudo-element)，在此情形下，其屬性值來自於擬元素選取項相依的原始元素。

`attr()` 函數可以被用在任何 CSS 屬性，但除了 content 以外的屬性皆屬於實驗階段。

## 語法

```js
/* Simple usage */
attr(data-count);
attr(title);

/* With type */
attr(src url);
attr(data-count number);
attr(data-width px);

/* With fallback */
attr(data-count number, 0);
attr(src url, '');
attr(data-width px, inherit);
attr(data-something, 'default');
```

### 值

- `attribute-name`
  - : 在 CSS 中參考之 HTML 元素的屬性名稱。
- `<type-`or-unit> {{experimental_inline}}

  - : Is a keyword representing either the type of the attribute's value, or its unit, as in HTML some attributes have implicit units. If the use of `<type-or-unit>` as a value for the given attribute is invalid, the `attr()` expression will be invalid too. If omitted, it defaults to `string`. The list of valid values are:

    | Keyword                                                                                                               | Associated type                              | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Default value                                                                                  |
    | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
    | `string`                                                                                                              | {{cssxref("&lt;string&gt;")}}     | The attribute value is treated as a CSS {{cssxref("&lt;string&gt;")}}. It is NOT reparsed, and in particular the characters are used as-is instead of CSS escapes being turned into different characters.                                                                                                                                                                                                                                               | An empty string                                                                                |
    | `color` {{experimental_inline}}                                                                              | {{cssxref("&lt;color&gt;")}}         | The attribute value is parsed as a hash (3- or 6-value hash) or a keyword. It must be a valid CSS {{cssxref("&lt;string&gt;")}} value. Leading and trailing spaces are stripped.                                                                                                                                                                                                                                                                        | `currentColor`                                                                                 |
    | `url` {{experimental_inline}}                                                                                | {{cssxref("&lt;uri&gt;")}}         | The attribute value is parsed as a string that is used inside a CSS `url()`function. Relative URL are resolved relatively to the original document, not relatively to the style sheet. Leading and trailing spaces are stripped.                                                                                                                                                                                                                                   | The url `about:invalid` that points to a non-existent document with a generic error condition. |
    | `integer` {{experimental_inline}}                                                                            | {{cssxref("&lt;integer&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;integer&gt;")}}. If it is not valid, that is not an integer or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                                                                                 | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `number` {{experimental_inline}}                                                                             | {{cssxref("&lt;number&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                                                                                   | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `length` {{experimental_inline}}                                                                             | {{cssxref("&lt;length&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;length&gt;")}} dimension, that is including the unit (e.g. `12.5em`). If it is not valid, that is not a length or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()`computes it to an absolute length. Leading and trailing spaces are stripped.                                                                          | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{experimental_inline}} | {{cssxref("&lt;length&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;length&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()`computes it to an absolute length. Leading and trailing spaces are stripped. | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `angle` {{experimental_inline}}                                                                              | {{cssxref("&lt;angle&gt;")}}         | The attribute value is parsed as a CSS {{cssxref("&lt;angle&gt;")}} dimension, that is including the unit (e.g. `30.5deg`). If it is not valid, that is not an angle or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                                | `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.     |
    | `deg`, `grad`, `rad` {{experimental_inline}}                                                                 | {{cssxref("&lt;angle&gt;")}}         | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an {{cssxref("&lt;angle&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                       | `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.     |
    | `time` {{experimental_inline}}                                                                               | {{cssxref("&lt;time&gt;")}}         | The attribute value is parsed as a CSS {{cssxref("&lt;time&gt;")}} dimension, that is including the unit (e.g. `30.5ms`). If it is not valid, that is not a time or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                                   | `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.         |
    | `s`, `ms` {{experimental_inline}}                                                                            | {{cssxref("&lt;time&gt;")}}         | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an{{cssxref("&lt;time&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                        | `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.         |
    | `frequency` {{experimental_inline}}                                                                          | {{cssxref("&lt;frequency&gt;")}} | The attribute value is parsed as a CSS {{cssxref("&lt;frequency&gt;")}} dimension, that is including the unit (e.g. `30.5kHz`). If it is not valid, that is not a frequency or out of the range accepted by the CSS property, the default value is used.                                                                                                                                                                                               | `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.       |
    | `Hz`, `kHz` {{experimental_inline}}                                                                          | {{cssxref("&lt;frequency&gt;")}} | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;frequency&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                | `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.       |
    | `%` {{experimental_inline}}                                                                                  | {{cssxref("&lt;percentage&gt;")}} | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;percentage&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given value is used as a length, `attr()`computes it to an absolute length. Leading and trailing spaces are stripped.                     | `0%`, or, if `0%` is not a valid value for the property, the property's minimum value.         |

- `<fallback>` {{experimental_inline}}
  - : The value to be used if the associated attribute is missing or contains an invalid value. The fallback value must be valid where `attr()` is used, even if it is not used, and must not contain another `attr()` expression. If `attr()` is not the sole component value of a property, its `<fallback>` value must be of the type defined by `<type-or-unit>`. If not set, CSS will use the default value defined for each `<type-or-unit>`.

### 形式語法

{{csssyntax}}

## 範例

```css
p::before {
  content: attr(data-foo) " ";
}
```

```html
<p data-foo="hello">world</p>
```

### 結果

{{EmbedLiveSample("範例", '100%', '80')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
