---
title: <number>
slug: Web/CSS/number
---

{{CSSRef}}

O [tipo de dado CSS](/pt-BR/docs/Web/CSS/CSS_Types) **`<number>`** representa um número, sendo esse ou um inteiro ou um componente fracional.

## Sintaxe

A sintaxe de `<number>` estende a sintaxe de {{CSSxRef("&lt;integer&gt;")}}. Um valor fracional é representado por um **`.`** seguido de um ou mais dígitos decimais e pode ser anexado a número inteiro. Não existe uma unidade associada aos números.

## Interpolação

Quando animado, os valores de `<number>` são interpolados como números reais e de ponto flutuante. A velocidade da interpolação é determinada pelo [tempo da função](/pt-BR/docs/Web/CSS/easing-function) associada à animação.

## Exemplos

### Números Válidos

```css example-good
12          Um <integer> puro é também um <number>.
4.01        Fração positiva
-456.8      Fração negativa
0.0         Zero
+0.0        Zero inciado por um +
-0.0        Zero iniciado por um -
.60         Um número fracional sem ser iniciado por zero
10e3        Notação científica
-3.4e-2     Notação científica complexa
```

### Números Inválidos

```css example-bad
12.         Números decimais devem ser seguidos por pelo menos um dígito.
+-12.2      Só um sinal +/- é permitido.
12.1.1      Só um ponto decimal é permitido.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{CSSxRef("&lt;integer&gt;")}}
