---
title: sepia()
slug: Web/CSS/filter-function/sepia
---

{{cssref}}

A função [CSS](/pt-BR/docs/Web/CSS) **`sepia()`** converte a imagem inputada em sépia, dando uma aparência mais amarelada/marrom e quente. Seu resultado é uma {{cssxref("&lt;filter-function&gt;")}}.

## Sintaxe

```
sepia(amount)
```

### Parâmetros

- `amount`
  - : A quantidade de conversão, especificada por um {{cssxref("&lt;number&gt;")}} ou uma {{cssxref("&lt;percentage&gt;")}}. Um valor de `100%` é completamente sépia, enquanto que um valor de `0%` mantém o input inalterado. Valores entre `0%` e `100%` são multiplicadores lineares do efeito. O valor de lacuna para interpolação é `0`.

## Exemplos

```css
sepia(0)     /* Sem efeito */
sepia(.65)   /* 65% sépia */
sepia(100%)  /* Completamente sépia */
```

## Ver também

- {{cssxref("&lt;filter-function&gt;")}}
