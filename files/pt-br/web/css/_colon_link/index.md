---
title: :link
slug: Web/CSS/:link
---

{{ CSSRef() }}

## Resumo

A [pseudo-class](/pt-BR/docs/CSS/Pseudo-classes) CSS :link permite que você selecione os links dentro de um elemento. Ela seleciona todos os links, até mesmo os que não foram visitados, incluindo os links ja estilizados em outras classes ou ids com o {{ cssxref(":hover") }}, {{ cssxref(":active") }} ou {{ cssxref(":visited") }}. Para um funcionamento adequado é essencial que ela venha antes das regras: `:visited` — `:hover` — `:active`. O {{ cssxref(":focus") }} é uma pseudo-class geralmente usada antes de a:hover ou depois, dependendo do resultado esperado.

## Exemplos

```css
a:link {
  color: slategray;
}
.external:link {
  background-color: lightblue;
}
```

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
