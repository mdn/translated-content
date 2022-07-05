---
title: color-scheme
slug: Web/CSS/color-scheme
translation_of: Web/CSS/color-scheme
tags:
  - CSS
  - CSS Colors
  - CSS Property
  - HTML Colors
  - HTML Styles
  - Layout
  - Reference
  - Styling HTML
  - Styling text
  - Web
  - color-scheme
  - recipe:css-property
browser-compat: css.properties.color-scheme
---
{{CSSRef}}

A Propriedade CSS **`color-scheme`** possibilita que um elemento possa indicar em qual esquema de cores é mais amigável de ser renderizado.

Opções comuns em esquemas de cores de sistemas operacionais são "claro" e "escuro", ou "modo diurno" e "modo noturno". Quando um usuário seleciona um desses esquemas de cores, o sistema operacional faz ajustes na interface do usuário. Isso inclui controles de formulários, barra de scroll, e os valores utilizados no sistema de cores do CSS.

## Syntax

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;

/* Valores globais */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: unset;
```
O valor da propriedade `color-scheme` precisa ser uma das palavras-chaves abaixo.
### Valores
- `normal`
  - : Indica que o elemento não possui nenhum esquema de cores, e deve ser renderizado utilizando o esquema de cores padrão do navegador.
- `light`
  - : Indica que o elemento pode ser renderizado utilizando o esquema de cores claro do sistema operacional.
- `dark`
  - : Indica que o elemento pode ser renderizado utilizando o esquema de cores escuro do sistema operacional.
## Definição formal
{{cssinfo}}
## Sintaxe formal
{{csssyntax}}
## Exemplos
### Adaptando a esquemas de cores
Para fazer com que toda a página tenha o esquema de cores de preferência do usuário declare `color-scheme` no elemento {{cssxref(":root")}}.
```css
:root {
  color-scheme: light dark;
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Aplicando cores em elementos HTML com CSS](/pt-BR/docs/Web/HTML/Applying_color)
- Outras propriedades de cores relacionadas: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}