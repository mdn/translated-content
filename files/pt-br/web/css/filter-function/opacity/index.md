---
title: opacity()
slug: Web/CSS/filter-function/opacity
---

{{cssref}}

A função [CSS](/pt-BR/docs/Web/CSS) **`opacity()`** aplica transparência às amostras na imagem inputada. Seu resultado é uma {{cssxref("&lt;filter-function&gt;")}}.

> **Nota:** Essa função é similar à propriedade {{Cssxref("opacity")}} mais estabelecida. A diferença é que com filtros, alguns browsers fornecem aceleração de hardware para uma melhor performance.

## Sintaxe

```
opacity(amount)
```

### Parâmetros

- `amount`
  - : A quantidade de conversão, especificada com um {{cssxref("&lt;number&gt;")}} ou uma {{cssxref("&lt;percentage&gt;")}}. Um valor de `0%` é completamente transparente, enquanto que um valor de `100%` mantém o input inalterado. Valores entre `0%` e `100%` são multiplicadores lineares do efeito. O valor de lacuna para interpolação é `1`.

## Exemplos

```css
opacity(0%)   /* Completamente transparente */
opacity(50%)  /* 50% transparente */
opacity(1)    /* Nenhum efeito */
```

## Ver também

- {{cssxref("&lt;filter-function&gt;")}}
- Propriedade CSS {{cssxref("opacity")}}
