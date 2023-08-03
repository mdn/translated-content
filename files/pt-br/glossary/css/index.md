---
title: CSS
slug: Glossary/CSS
---

**CSS** (Cascading Style Sheets) é uma linguagem declarativa que controla a apresentação visual de páginas web em um {{glossary("browser","navegador")}}. O navegador aplica as declarações de estilo CSS aos elementos selecionados para exibi-los apropriadamente. Uma declaração de estilo contem as propriedades e seus valores, que determinam a aparência de uma página web.

CSS é uma das três principais tecnologias Web, junto com {{Glossary("HTML")}} e {{Glossary("JavaScript")}}. CSS normalmente estiliza {{Glossary("Element","Elementos HTML")}}, mas também pode ser usada com outras linguagens de marcação como {{Glossary("SVG")}} ou {{Glossary("XML")}}.

Uma regra CSS é um conjunto de {{Glossary("CSS Property","propriedades")}} associados a um {{Glossary("selector","seletor")}}. Aqui está um exemplo que faz com que todos os parágrafos HTML fiquem amarelos num fundo preto:

```css
/* O seletor "p" indica que todos os paragrafos no documento serão afetados por essa regra */
p {
  /* A propriedade "color" define a cor do texto, neste caso amarelo. */
  color: yellow;

  /* A propriedade "background-color" define a cor ao fundo, neste caso preto. */
  background-color: black;
}
```

"Cascading" ("em cascata") se refere às regras que decidem como seletores são priorizados ao mudar a aparência de uma página. Isso é uma característica muito importante, já que um website complexo pode ter milhares de regras CSS.

## Aprenda mais

### Conhecimento geral

- [Aprenda CSS](/pt-BR/docs/Aprender/CSS)
- [Cascading Style Sheets](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets) na Wikipedia

### Referências técnicas

- [A documentação sobre CSS na MDN](/pt-BR/docs/Web/CSS)
- [O trabalho atual do CSS Working Group](https://www.w3.org/Style/CSS/current-work) (Em inglês)

### Aprenda CSS

- [Curso de web no Codecademy.com](https://www.codecademy.com/learn/web) (Em inglês)
- ~~[Three Types of CSS](http://www.expression-web-tutorial.com/Types_CSS_Styles.html)~~ (Em inglês)
