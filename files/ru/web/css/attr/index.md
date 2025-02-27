---
title: attr
slug: Web/CSS/attr
---

{{CSSRef}}

## Описание

С помощью функции [CSS](/ru/docs/Web/CSS) `attr()` можно извлекать значение атрибута выбранного элемента и использовать это значение в таблице стилей. Функция работает и с псевдо-элементами. В этом случае возвращается значение атрибута элемента, для которого формируется [псевдо-элемент](/ru/docs/Web/CSS/Pseudo-elements).

Функцию `attr()` можно использовать с любым свойством CSS, но поддержка иных свойств, кроме {{cssxref("content")}}, является экспериментальной.

## Синтаксис

```js
/* Пример простого использования */
attr(data-count);
attr(title);

/* С типом */
attr(src url);
attr(data-count number);
attr(data-width px);

/* с фоллбэком */
attr(data-count number, 0);
attr(src url, '');
attr(data-width px, inherit);
attr(data-something, 'default');
```

### Значения

- `attribute-name`
  - : Название атрибута элемента HTML, на который ссылаемся в CSS.
- `<type-or-unit>` {{Experimental_Inline}}

  - : Является ключевым словом, представляющим либо тип значения атрибута, либо его единицу, так как в HTML некоторые атрибуты имеют неявные единицы. Если использование `<type-or-unit>` в качестве значения для данного атрибута недопустимо, выражение `attr()` также будет недопустимым. Если этот параметр опущен, по умолчанию используется `string`. Список допустимых значений:

    - `string`

      - : The attribute value is treated as a CSS {{cssxref("&lt;string&gt;")}}. It is NOT reparsed, and in particular the characters are used as-is instead of CSS escapes being turned into different

        Значение по умолчанию: An empty string

    - `color` {{experimental_inline}}

      - : The attribute value is parsed as a hash (3- or 6-value hash) or a keyword. It must be a valid CSS {{cssxref("&lt;string&gt;")}} value. Leading and trailing spaces are stripped.

        Значение по умолчанию: `currentColor`

    - `url` {{experimental_inline}}

      - : The attribute value is parsed as a string that is used inside a CSS `url()` function. Relative URL are resolved relatively to the original document, not relatively to the style sheet. Leading and trailing spaces are stripped.

        Значение по умолчанию: The url `about:invalid` that points to a non-existent document with a generic error condition.

    - `integer` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;integer&gt;")}}. If it is not valid, that is not an integer or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `number` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `length` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;length&gt;")}} dimension, that is including the unit (e.g. `12.5em`). If it is not valid, that is not a length or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()` computes it to an absolute length. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;length&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()` computes it to an absolute length. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0`, or, if `0` is not a valid value for the property, the property's minimum value.

    - `angle` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;angle&gt;")}} dimension, that is including the unit (e.g. `30.5deg`). If it is not valid, that is not an angle or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.

    - `deg`, `grad`, `rad` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an {{cssxref("&lt;angle&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.

    - `time` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;time&gt;")}} dimension, that is including the unit (e.g. `30.5ms`). If it is not valid, that is not a time or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.

    - `s`, `ms` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an{{cssxref("&lt;time&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.

    - `frequency` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;frequency&gt;")}} dimension, that is including the unit (e.g. `30.5kHz`). If it is not valid, that is not a frequency or out of the range accepted by the CSS property, the default value is used.

        Значение по умолчанию: `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.

    - `Hz`, `kHz` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;frequency&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.

    - `%` {{experimental_inline}}

      - : The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;percentage&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given value is used as a length, `attr()` computes it to an absolute length. Leading and trailing spaces are stripped.

        Значение по умолчанию: `0%`, or, if `0%` is not a valid value for the property, the property's minimum value.

- `<fallback>` {{experimental_inline}}
  - : The value to be used if the associated attribute is missing or contains an invalid value. The fallback value must be valid where `attr()` is used, even if it is not used, and must not contain another `attr()` expression. If `attr()` is not the sole component value of a property, its `<fallback>` value must be of the type defined by `<type-or-unit>`. If not set, CSS will use the default value defined for each `<type-or-unit>`.

### Формальный синтаксис

{{csssyntax}}

## Пример

```css
p::before {
  content: attr(data-foo) " ";
}
```

```html
<p data-foo="hello">world</p>
```

### Результат

{{EmbedLiveSample("Пример", '100%', '80')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
