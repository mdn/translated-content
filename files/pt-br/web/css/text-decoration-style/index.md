---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
---

{{CSSRef}}

## Resumo

A propriedade CSS **`text-decoration-style`** CSS define o estilo das linhas especificadas por {{cssxref ("text-decoration-line")}}. O modelo aplica-se a todas as linhas, não há nenhuma forma de definir estilos diferentes para cada uma das linhas utilizando `text-decoration-line`.

Se a decoração especificada tem um significado semântico específico, como uma linha de line-through o que significa que um texto tenha sido excluído, autores são encorajados a denotar este significado usando uma tag HTML, como {{ HTMLElement("del") }} ou {{ HTMLElement("s") }}. Como os navegadores podem ser deficientes em alguns casos, o significado semântico não vai desaparecer em tal situação.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Global values */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: unset;
```

### Valores

- `solid double dotted dashed wavy`

  - : É uma das seguintes palavras-chave:

    | Keyword                               | Description         | Comment                                                                        |
    | ------------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
    | `solid`                               | Draws a single line |                                                                                |
    | `double`                              | Draws a double line |                                                                                |
    | `dotted`                              | Draws a dotted line |                                                                                |
    | `dashed`                              | Draws a dashed line |                                                                                |
    | `wavy`                                | Draws a wavy line   |                                                                                |
    | `-moz-none` {{ non-standard_inline }} | Do not draw a line  | **Do not use** **:** use {{ cssxref("text-decoration-line") }}`: none` instead |

- `inherit`
  - : É uma palavra-chave indicando a reutilizar o valor calculado sobre o elemento pai.

### Syntax Formal

{{csssyntax}}

## Exemplo

```css
.example {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: wavy;
  -moz-text-decoration-color: red;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: wavy;
  -webkit-text-decoration-color: red;
}
```

```css
.example {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

```html
<p class="example">This is how it looks.</p>
```

{{ EmbedLiveSample('Examples', '', '', '') }}

## Especificações

| Specification                                                                             | Status                              | Comment                                                                                    |
| ----------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------ |
| {{ SpecName('CSS3 Text Decoration', '#text-decoration-style', 'text-decoration-style') }} | {{ Spec2('CSS3 Text Decoration') }} | Initial definition. The {{cssxref("text-decoration")}} property wasn't a shorthand before. |

## Browser compatíveis

{{Compat("css.properties.text-decoration-style")}}
