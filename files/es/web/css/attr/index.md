---
title: attr
slug: Web/CSS/attr
---

{{ CSSRef() }}

## Resumen

La función `attr()` de [CSS](/es/docs/Web/CSS) se usa para recuperar el valor de un atributo del elemento seleccionado y usarlo en la hoja de estilos. Se puede usar también en un pseudo-elemento y, en este caso, el valor del atributo en el elemento originado del pseudo-elemento es devuelto.

La función `attr()` de [CSS](/es/docs/Web/CSS) se puede usar con cualquier propiedad de CSS. {{ experimental_inline() }}

## Síntaxis

```
Sintaxis formal: attr( attribute-name <type-or-unit>? [, <fallback> ]? )
```

### Valores

- `attribute-name`
  - : Es el nombre de un atributo en el elemento HTML al que se hace referencia en el CSS. Soporte para otros atributos a parte de {{ cssxref("content") }} es {{ experimental_inline() }}.
- `<type-or-unit>`

  - : Es una palabra clave que representa o el tipo del valor del atributo, o su unidad, pues en HTML algunos atributos tienen unidades implícitas. Si el uso de `<type-or-unit>` como valor del atributo especificado no es válido, la expresión `attr()` también será no válida. Si se omite, el valor por defecto es string. La lista de valores válidos son:

    | Keyword                                                                                                          | Associated type                   | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                       | Default value                                                                                     |
    | ---------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
    | `string`                                                                                                         | {{cssxref("&lt;string&gt;")}}     | El valor del atributo es tratado como una {{cssxref("&lt;string&gt;")}} de CSS. No se reparsea, y en este caso particular los caracteres son usados tal y como son en vez de convertirlos en diferentes caracteres de CSS.                                                                                                                                                                                                                    | Cadena vacía                                                                                      |
    | `color` {{ experimental_inline() }}                                                                              | {{cssxref("&lt;color&gt;")}}      | El valor del atributo es tratado como hash (3- or 6-value hash) o a una palabra clave. Debe ser un valor válido de una {{cssxref("&lt;string&gt;")}} de CSS. Los espacios iniciales y finales son eliminados.                                                                                                                                                                                                                                 | `currentColor`                                                                                    |
    | `url` {{ experimental_inline() }}                                                                                | {{ cssxref("&lt;uri&gt;") }}      | El valor del atributo es tratado como una cadena que se usa en una función `url()` de CSS. URLs relativas se resuelven con respecto al documento original, no respecto a la hoja de estilos. Los espacios iniciales y finales son eliminados.                                                                                                                                                                                                 | La url `about:invalid` que apunta a un documento inexistente con una condición de error genérico. |
    | `integer` {{ experimental_inline() }}                                                                            | {{cssxref("&lt;integer&gt;")}}    | El valor del atributo es tratado como un {{cssxref("&lt;integer&gt;")}} CSS. Si no es válido, si no es un entero o está fuera del rango aceptado por la propiedad CSS, se usa el valor por defecto. Los espacios iniciales y finales son eliminados.                                                                                                                                                                                          | `0`, or, if `0` is not a valid value for the property, the property's minimum value.              |
    | `number` {{ experimental_inline() }}                                                                             | {{cssxref("&lt;number&gt;")}}     | El valor del atributo es tratado como {{cssxref("&lt;number&gt;")}}. Si no es válido, si no es un número o está fuera del rango aceptado por la propiedad CSS, se usa el valor por defecto. Los espacios iniciales y finales son eliminados.                                                                                                                                                                                                  | `0`, or, if `0` is not a valid value for the property, the property's minimum value.              |
    | `length` {{ experimental_inline() }}                                                                             | {{cssxref("&lt;length&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;length&gt;")}} dimension, that is including the unit (e.g. `12.5em`). If it is not valid, that is not a length or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()` computes it to an absolute length. Leading and trailing spaces are stripped.                                                               | `0`, or, if `0` is not a valid value for the property, the property's minimum value.              |
    | `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{ experimental_inline() }} | {{cssxref("&lt;length&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;length&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()` computes it to an absolute length. Leading and trailing spaces are stripped. | `0`, or, if `0` is not a valid value for the property, the property's minimum value.              |
    | `angle` {{ experimental_inline() }}                                                                              | {{ cssxref("&lt;angle&gt;") }}    | The attribute value is parsed as a CSS {{ cssxref("&lt;angle&gt;") }} dimension, that is including the unit (e.g. `30.5deg`). If it is not valid, that is not an angle or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                 | `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.        |
    | `deg`, `grad`, `rad` {{ experimental_inline() }}                                                                 | {{ cssxref("&lt;angle&gt;") }}    | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an {{ cssxref("&lt;angle&gt;") }} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                   | `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.        |
    | `time` {{ experimental_inline() }}                                                                               | {{cssxref("&lt;time&gt;")}}       | The attribute value is parsed as a CSS {{cssxref("&lt;time&gt;")}} dimension, that is including the unit (e.g. `30.5ms`). If it is not valid, that is not a time or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                       | `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.            |
    | `s`, `ms` {{ experimental_inline() }}                                                                            | {{cssxref("&lt;time&gt;")}}       | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an{{cssxref("&lt;time&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                       | `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.            |
    | `frequency` {{ experimental_inline() }}                                                                          | {{cssxref("&lt;frequency&gt;")}}  | The attribute value is parsed as a CSS {{cssxref("&lt;frequency&gt;")}} dimension, that is including the unit (e.g. `30.5kHz`). If it is not valid, that is not a frequency or out of the range accepted by the CSS property, the default value is used.                                                                                                                                                                                      | `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.          |
    | `Hz`, `kHz` {{ experimental_inline() }}                                                                          | {{cssxref("&lt;frequency&gt;")}}  | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;frequency&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                  | `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.          |
    | `%` {{ experimental_inline() }}                                                                                  | {{cssxref("&lt;percentage&gt;")}} | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;percentage&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given value is used as a length, `attr()` computes it to an absolute length. Leading and trailing spaces are stripped.                     | `0%`, or, if `0%` is not a valid value for the property, the property's minimum value.            |

- `<fallback>`
  - : The value to be used if the associated attribute is missing or contains an invalid value. The fallback value must be valid where `attr()` is used, even if it is not used, and must not contain another `attr()` expression. If `attr()` is not the sole component value of a property, its `<fallback>` value must be of the type defined by `<type-or-unit>`. If not set, CSS will use the default value defined for each `<type-or-unit>`.

## Examples

```css
p::before {
  content: attr(data-foo) " ";
}
```

```html
<p data-foo="hello">world</p>
```

### Result

{{ EmbedLiveSample("Examples", '100%', '80') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
