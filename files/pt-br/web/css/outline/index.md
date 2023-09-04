---
title: outline
slug: Web/CSS/outline
---

{{CSSRef}}

## Sumário

A propriedade [CSS](/pt-BR/docs/CSS) **`outline`** é uma propriedade abreviada para configurar uma ou mais das propriedades de contorno {{cssxref("outline-style")}}, {{cssxref("outline-width")}} e {{cssxref("outline-color")}} em uma única declaração. Na maioria dos casos o uso abreviado é preferível e mais conveniente.

Contornos se diferenciam de bordas das seguintes maneiras:

- Contornos não ocupam espaços, eles são desenhados acima do conteúdo.
- Contornos podem não ser retangulares. Eles são retangulares no Gecko/Firefox. Mas por exemplo, Opera desenha uma forma não retangular em torno de uma construção como este:
  **TEXTTEXTTEXT**

{{cssinfo}}

## Sintaxe

```css
/* largura | estilo | cor */
outline: 1px solid white;

/* Valores globais */
outline: inherit;
outline: initial;
outline: unset;
```

### Valores

Um, dois ou três valores, dada em ordem arbitrária:

- `<'outline-width'>`
  - : Veja {{Cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Veja {{Cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Desde Gecko 1.9 (Firefox 3), o valor da propriedade {{Cssxref("color")}} (cor de primeiro plano) é usado. Veja {{Cssxref("outline-color")}}.

### Sintaxe completa

{{csssyntax}}

## Exemplos

```css
/* duas declarações identicas */

:link:hover {
  outline: 1px solid #000;
}
:link:hover {
  outline: solid black 1px;
}
```

## Especificações

| Especificação                                                | Estado                     | Comentário         |
| ------------------------------------------------------------ | -------------------------- | ------------------ |
| {{SpecName('CSS3 Basic UI', '#outline', 'outline')}}         | {{Spec2('CSS3 Basic UI')}} | No change          |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline', 'outline')}} | {{Spec2('CSS2.1')}}        | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.outline")}}
