---
title: box-sizing
slug: Web/CSS/box-sizing
---

A propriedade CSS box-sizing é utilizada para alterar a propriedade padrão da box model, usada para calcular larguras (widths) e alturas (heights) dos elementos. É possível usar essa propriedade para emular o comportamento dos navegadores (browsers) que não suportam corretamente a especificação da propriedade CSS box model.

## Sintaxe

```
Sintaxe formal: {{csssyntax("box-sizing")}}
```

```
box-sizing: content-box
box-sizing: border-box

box-sizing: inherit
```

### Valores

- `content-box`
  - : Essa é o estilo padrão, conforme especificado pela norma CSS. As propriedades {{Cssxref("width")}} (largura) e {{Cssxref("height")}} (altura) são medidas incluindo só o conteúdo, mas não o padding, border ou margin. Nota: Padding, border e margin serão fora da box. Exemplo.: Se .box {width: 350px} então se você aplicar uma propriedade {border: 10px solid black;} o resultado renderizado no navegador (browser) será .box {width: 370px;}
- `padding-box`{{experimental_inline}}
  - : As propriedades de largura ({{Cssxref("width")}}) e de altura ({{Cssxref("height")}}) incluem o tamanho padding size, mas não incluem a propriedade border ou margem.
- `border-box`
  - : As propriedades de largura ({{Cssxref("width")}}) e de altura ({{Cssxref("height")}}) incluem o tamanho padding size e a propriedade border, mas não incluem a propriedade margin.

## Exemplos

```css
/* funciona em Firefox, WebKit, Opera and IE8+ */
/* exemplo de uso no navegador Firefox */

.exemplo {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

## Especificações

| Especificação                                              | Situação                   | Comentário |
| ---------------------------------------------------------- | -------------------------- | ---------- |
| {{SpecName('CSS3 Basic UI', '#box-sizing', 'box-sizing')}} | {{Spec2('CSS3 Basic UI')}} |            |

## Compatibilidade com navegadores

{{Compat("css.properties.box-sizing")}}

## Veja também

- [CSS box model](/pt-BR/docs/CSS/box_model) \[Eng]
