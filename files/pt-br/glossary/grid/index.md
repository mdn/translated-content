---
title: Grade
slug: Glossary/Grid
---

Uma _grade no CSS_ é definida usando o valor `grid` da propriedade {{cssxref("display")}}; você pode definir colunas e linhas na sua grade usando as propridades {{cssxref("grid-template-rows")}} e {{cssxref("grid-template-columns")}}.

A grade que você define usando essas propriedades é descrita como uma _grade explícita_.

Se você colocar o conteúdo fora dessa grade explícita ou se estiver utilizando o posicionamento automático e o algoritmo da grade precisar criar linhas ou colunas adicionais {{glossary("grid tracks", "tracks")}} para manter {{glossary("grid item", "grid items")}}, então serão criadas faixas extras na grade implícita. A _grade implícita_ é a grade criada automaticamente devido ao conteúdo adicionado fora das faixas definidas.

No exemplo abaixo, criamos uma _grade explícita_ de três colunas e duas linhas. A terceira linha da grade é uma _faixa implícita de linha da grade_, formada por serem mais do que os seis os itens que preenchem as faixas explícitas.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>Um</div>
  <div>dois</div>
  <div>três</div>
  <div>quatro</div>
  <div>cinco</div>
  <div>seis</div>
  <div>sete</div>
  <div>oito</div>
</div>
```

{{ EmbedLiveSample('example', '500', '330') }}

1. CSS Grid Layout Guide:
   _[Basic concepts of grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
2. Property reference

   1. {{cssxref("grid-template-columns")}}
   2. {{cssxref("grid-template-rows")}}
   3. {{cssxref("grid")}}
   4. {{cssxref("grid-template")}}
