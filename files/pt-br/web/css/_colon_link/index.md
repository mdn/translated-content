---
title: ":link"
slug: Web/CSS/:link
---

{{ CSSRef() }}

## Resumo

A [pseudo-class](/pt-BR/CSS/Pseudo-classes) CSS :link permite que você selecione os links dentro de um elemento. Ela seleciona todos os links, até mesmo os que não foram visitados, incluindo os links ja estilizados em outras classes ou ids com o {{ cssxref(":hover") }}, {{ cssxref(":active") }} ou {{ cssxref(":visited") }}. Para um funcionamento adequado é essencial que ela venha antes das regras: `:visited` — `:hover` — `:active`. O {{ cssxref(":focus") }} é uma pseudo-class geralmente usada antes de a:hover ou depois, dependendo do resultado esperado.

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

| Especificação                                                          | Status                        | Comentário                                       |
| ---------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------ |
| {{ SpecName('CSS4 Selectors', '#link', ':link') }}                     | {{ Spec2('CSS4 Selectors') }} | Nenhuma mudança.                                 |
| {{ SpecName('CSS3 Selectors', '#link', ':link') }}                     | {{ Spec2('CSS3 Selectors') }} | Nenhuma mudança.                                 |
| {{ SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':link') }} | {{ Spec2('CSS2.1') }}         | Uso estrito ao elemento {{ HTMLElement("a") }} . |
| {{ SpecName('CSS1', '#anchor-pseudo-classes', ':link') }}              | {{ Spec2('CSS1') }}           | Definição Inicial.                               |

## Compatibilidade do navegador

{{Compat("css.selectors.link")}}

## Veja também

- {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
