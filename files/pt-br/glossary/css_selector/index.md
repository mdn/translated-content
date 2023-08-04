---
title: Selector (CSS)
slug: Glossary/CSS_Selector
---

O **seletor CSS** é parte da regra do CSS que lhe permite selecionar qual elemento(s) vai receber o estilo pela regra. Por exemplo:

```
***HTML***
<div> Eu estou dentro do elemento. </div>
<p> Eu estou dentro de um elemento de parágrafo. </p>


***CSS***
div {
 color: green;
}

p {
 color: red;
}
```

Nessa primeira regra do CSS, eu estou selecionando o elemento da div estilizando-a colorindo o texto para verde. Na segunda regra do CSS, eu estou selecionando o elemento "p" e estilizando-a colorindo o texto para vermelho. Aqui estão os resultados:

![CSS selector coding results](cssselectormdnglossary.jpg)

## Aprenda mais

### Conhecimento geral

- Seletores básicos

  - [Tipos de seletores](/pt-BR/docs/Web/CSS/Type_selectors) `elementname`
  - [Classes seletoras](/pt-BR/docs/Web/CSS/Class_selectors) `.classname`
  - [ID seletores](/pt-BR/docs/Web/CSS/ID_selectors) `#idname`
  - [Seletores universais](/pt-BR/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Seletores de atributos](/pt-BR/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - `Seletores de estado a:active, a:visited`

- Combinadores

  - [Seletores de irmão adjacentes](/pt-BR/docs/Web/CSS/Adjacent_sibling_selectors) `A + B`
  - [Seletores de irmãos gerais](/pt-BR/docs/Web/CSS/General_sibling_selectors) `A ~ B`
  - [Seletores filhos](/pt-BR/docs/Web/CSS/Child_selectors) `A > B`
  - [Seletores descendentes](/pt-BR/docs/Web/CSS/Descendant_selectors) `A B`

- [Pseudo-elementos](/pt-BR/docs/Web/CSS/Pseudo-elements)
- [Pseudo-classes](/pt-BR/docs/Web/CSS/Pseudo-classes)

### Referência técnica

{{SpecName("CSS3 Selectors")}}
