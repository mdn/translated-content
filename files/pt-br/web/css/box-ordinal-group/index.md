---
title: "-moz-box-ordinal-group"
slug: Web/CSS/box-ordinal-group
---

{{CSSRef}}

> **Aviso:** Essa propriedade é parte do projeto do módulo original do CSS Flexible Box Layout, e foi substituído em projetos recentes.

Veja [Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) para mais informações do que você deveria usar ao invés dessa propriedade.

## Sumário

Indica o grupo ordinal ao qual o elemento percente. Elementos com um grupo ordinal menor são mostrados antes daqueles com grupo ordinal maior.

## Valores

Os valores devem ser inteiros maiores que zero. O valor padrão para essa propriedade é 1.

## Exemplos

```css
#Flexbox {
  display: -ms-box;
  display: -moz-box;
  display: -webkit-box;
}

#text1 {
  background: red;
  -ms-box-ordinal-group: 4;
  -moz-box-ordinal-group: 4;
  -webkit-box-ordinal-group: 4;
}

#text2 {
  background: green;
  -ms-box-ordinal-group: 3;
  -moz-box-ordinal-group: 3;
  -webkit-box-ordinal-group: 3;
}

#text3 {
  background: blue;
  -ms-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  -webkit-box-ordinal-group: 2;
}

#text4 {
  background: orange;
}
```

```html
<div id="Flexbox">
  <div id="text1">text 1</div>
  <div id="text2">text 2</div>
  <div id="text3">text 3</div>
  <div id="text4">text 4</div>
</div>
```
