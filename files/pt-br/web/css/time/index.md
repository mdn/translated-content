---
title: <time>
slug: Web/CSS/time
---

{{CSSRef}}

O tipo de dado CSS **`<time>`** representa um valor de tempo expresso em segundo ou milissegundos. É usado em animações( {{cssxref("animation")}} ), transições( {{cssxref("transition")}} ) e propriedades relacionadas.

## Sintaxe

O tipo dado `<time>` consiste de um elemento {{cssxref("&lt;number&gt;")}} seguido por uma das unidades listadas abaixo. Opcionalmente, pode ser precedido por um sinal de `+` ou `-`. Como em todas as dimensões, não há espaço entre uma unidade literal e o número.

> **Nota:** Embora o número `0` seja sempre o mesmo, independente da unidade, essa última não pode ser omitida. Em outras palavras, `0` é invalido e não representa `0s` ou `0ms`.

### Unidades

- **`s`**
  - : Representa um tempo em segundos. Exemplos: `0s`, `1.5s`, `-60s`.
- **`ms`**
  - : Representa um tempo em milissegundos. Exemplos: `0ms`, `150.25ms`, `-60000ms`.

> **Nota:** A conversão entre `s` e `ms` segue a proporção `1s = 1000ms`.

## Exemplos

### Unidades de Tempo Válidas

```
12s         Inteiro Positivo
-456ms      Inteiro Negativo
4.3ms       Decimal
14mS        A unidade é case-insentive, embora letras iniciais maiúsculas (capital letters) não sejam recomendadas.
+0s         Zero com um + no inicio e uma unidade
-0ms        Zero com um - no inicio e uma unidade
```

### Unidades de Tempo Inválidas

```plain example-bad
0           Embora seja permitido o uso do zero sem unidade de medida por <length>s é invalido para <time>s.
12.0        Este é um <number>, não um <time>, pois está faltando a unidade de medida.
7 ms        Não é permitido espaço entre o número e a unidade de medida.
```

## Specifications

| Especificação                                            | Status                   | Comentário                         |
| -------------------------------------------------------- | ------------------------ | ---------------------------------- |
| {{SpecName('CSS4 Values','#time','&lt;time&gt;')}}       | {{Spec2('CSS4 Values')}} |                                    |
| {{SpecName('CSS3 Values','#time','&lt;time&gt;')}}       | {{Spec2('CSS3 Values')}} | Definição normativa de `s` e `ms`. |
| {{SpecName('CSS2.1','aural.html#times','&lt;time&gt;')}} | {{Spec2('CSS2.1')}}      | Difinição informal de `s` e `ms`.  |

## Compatibilidade com navegadores

{{Compat("css.types.time")}}
