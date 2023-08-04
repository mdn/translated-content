---
title: attr
slug: Web/CSS/attr
---

{{CSSRef}}

A função **`attr()`** do [CSS](/pt-BR/docs/Web/CSS) é utilizada para se obter o valor de um determinado atributo do elemento selecionado e usá-lo na folha de estilo. Também pode ser utilizado em [pseudo-elementos](/pt-BR/docs/Web/CSS/Pseudo-elements), nesse caso o valor do atributo no pseudo-elemento do elemento original é retornado.

```css
/* Uso Simples */
attr(data-count);
attr(title);

/* Com o tipo */
attr(src url);
attr(data-count number);
attr(data-width px);

/* Com fallback */
attr(data-count number, 0);
attr(src url, '');
attr(data-width px, inherit);
attr(data-something, 'default');
```

> **Nota:** A função `attr()` pode ser utilizada com qualquer propriedade CSS, mas o suporte para propriedades que não sejam {{cssxref("content")}} é experimental.

## Sintaxe

### Valores

- `nome-do-atributo`
  - : É o nome do atributo HTML do elemento referenciado no CSS.
- `<tipo-ou-unidade>` {{experimental_inline}}

  - : É uma palavra-chave representando tanto o tipo quanto o valor do atributo, ou sua unidade, assim como no HTML alguns atributos tem unidades implícitas. Se o uso de `<tipo-ou-unidade>` como um valor para determinado atributo for inválido, a expressão `attr()` será inválida também. Se omitida, o padrão será `string`. A lista de valores válidos é:

    | Palavra-chave                                                                                                | Tipo Associado                    | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                   | Valor Padrão                                                                                   |
    | ------------------------------------------------------------------------------------------------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
    | `string`                                                                                                     | {{cssxref("&lt;string&gt;")}}     | O valor do atributo é tratado como um CSS {{cssxref("&lt;string&gt;")}}. NÃO será reparado, e em particular os caracteres usados .                                                                                                                                                                                                                                                                                                           | An empty string.                                                                               |
    | `cor` {{experimental_inline}}                                                                                | {{cssxref("&lt;color&gt;")}}      | O valor do atributo é analisado como hash (3- ou 6-valores hash) ou a palavra-chave. Precisa ser um valor {{cssxref("&lt;string&gt;")}} CSS válido. Os espaços do lead e trail são retirados.                                                                                                                                                                                                                                                | corAtual                                                                                       |
    | `url` {{experimental_inline}}                                                                                | {{cssxref("&lt;url&gt;")}}        | The attribute value is parsed as a string that is used inside a CSS `url()`function. Relative URL are resolved relatively to the original document, not relatively to the style sheet. Leading and trailing spaces are stripped.                                                                                                                                                                                                             | The url `about:invalid` that points to a non-existent document with a generic error condition. |
    | `integer` {{experimental_inline}}                                                                            | {{cssxref("&lt;integer&gt;")}}    | The attribute value is parsed as a CSS {{cssxref("&lt;integer&gt;")}}. If it is not valid, that is not an integer or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                                                                     | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `number` {{experimental_inline}}                                                                             | {{cssxref("&lt;number&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                                                                        | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `length` {{experimental_inline}}                                                                             | {{cssxref("&lt;length&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;length&gt;")}} dimension, that is including the unit (e.g. `12.5em`). If it is not valid, that is not a length or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()`computes it to an absolute length. Leading and trailing spaces are stripped.                                                               | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{experimental_inline}} | {{cssxref("&lt;length&gt;")}}     | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;length&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given unit is a relative length, `attr()`computes it to an absolute length. Leading and trailing spaces are stripped. | `0`, or, if `0` is not a valid value for the property, the property's minimum value.           |
    | `angle` {{experimental_inline}}                                                                              | {{cssxref("&lt;angle&gt;")}}      | The attribute value is parsed as a CSS {{cssxref("&lt;angle&gt;")}} dimension, that is including the unit (e.g. `30.5deg`). If it is not valid, that is not an angle or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                  | `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.     |
    | `deg`, `grad`, `rad` {{experimental_inline}}                                                                 | {{cssxref("&lt;angle&gt;")}}      | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an {{cssxref("&lt;angle&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                    | `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.     |
    | `time` {{experimental_inline}}                                                                               | {{cssxref("&lt;time&gt;")}}       | The attribute value is parsed as a CSS {{cssxref("&lt;time&gt;")}} dimension, that is including the unit (e.g. `30.5ms`). If it is not valid, that is not a time or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                                                                                      | `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.         |
    | `s`, `ms` {{experimental_inline}}                                                                            | {{cssxref("&lt;time&gt;")}}       | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as an{{cssxref("&lt;time&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                      | `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.         |
    | `frequency` {{experimental_inline}}                                                                          | {{cssxref("&lt;frequency&gt;")}}  | The attribute value is parsed as a CSS {{cssxref("&lt;frequency&gt;")}} dimension, that is including the unit (e.g. `30.5kHz`). If it is not valid, that is not a frequency or out of the range accepted by the CSS property, the default value is used.                                                                                                                                                                                     | `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.       |
    | `Hz`, `kHz` {{experimental_inline}}                                                                          | {{cssxref("&lt;frequency&gt;")}}  | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;frequency&gt;")}} with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. Leading and trailing spaces are stripped.                                                                                 | `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.       |
    | `%` {{experimental_inline}}                                                                                  | {{cssxref("&lt;percentage&gt;")}} | The attribute value is parsed as a CSS {{cssxref("&lt;number&gt;")}}, that is without the unit (e.g. `12.5`), and interpreted as a {{cssxref("&lt;percentage&gt;")}}. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used. If the given value is used as a length, `attr()`computes it to an absolute length. Leading and trailing spaces are stripped.                     | `0%`, or, if `0%` is not a valid value for the property, the property's minimum value.         |

- `<fallback>` {{experimental_inline}}
  - : The value to be used if the associated attribute is missing or contains an invalid value. The fallback value must be valid where `attr()` is used, even if it is not used, and must not contain another `attr()` expression. If `attr()` is not the sole component value of a property, its `<fallback>` value must be of the type defined by `<type-or-unit>`. If not set, CSS will use the default value defined for each `<type-or-unit>`.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### HTML

```html
<p data-foo="hello">world</p>
```

### CSS

```css
p::before {
  content: attr(data-foo) " ";
}
```

### Resultado

{{EmbedLiveSample("Examples")}}

## Especificações

| Especificação                                           | Status                   | Comentário                                                                                                                                                                                                                       |
| ------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Values', '#attr-notation', 'attr()')}} | {{Spec2('CSS3 Values')}} | Added two optional parameters; can be used on all properties; may return other values than {{cssxref("&lt;string&gt;")}}. These changes are experimental and may be dropped during the CR phase if browser support is too small. |
| {{SpecName('CSS2.1', 'generate.html#x18', 'attr()')}}   | {{Spec2('CSS2.1')}}      | Limited to the {{cssxref("content")}} property; always return a {{cssxref("&lt;string&gt;")}}.                                                                                                                                   |

## Compatibilidade com navegadores

{{Compat("css.types.attr")}}
