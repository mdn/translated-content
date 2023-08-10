---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
---

{{JSRef("Global_Objects", "Math")}}

## Sumário

A função **`Math.random()`** retorna um número pseudo-aleatório no intervalo `[0, 1[`, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.

> **Nota:** **`Math.random()`** não gera números criptograficamente seguros. Não a use para nada relacionado a segurança. Use a API Web Crypto, mais precisamente o método {{domxref("RandomSource.getRandomValues()", "window.crypto.getRandomValues()")}}.

## Sintaxe

```
Math.random()
```

### Valor retornado

Um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).

## Exemplos

Note que os números em JavaScript são pontos flutuantes que seguem o padrão IEEE 754 com comportamento _arredondar-para-o-par-mais-próximo_, os intervalos que serão citados nos exemplos a seguir (exceto o exemplo do `Math.random()`), não são exatas. Se limites extremamente grandes forem escolhidos (253 ou maior), em raros casos é possível que o limite superior (que seria exclusivo) seja retornado.

### Gerando um número aleatório entre 0 (inclusivo) e 1 (exclusivo)

```js
function getRandom() {
  return Math.random();
}
```

### Gerando um número aleatório entre dois valores

Este exemplo retorna um número entre dois valores definidos. O valor retornado será maior ou igual a `min`, e menor que `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Gerando um número inteiro aleatório entre dois valores

Este exemplo retorna um número _inteiro_ entre dois valores definidos. O valor não poderá ser menor que `min` (ou do próximo inteiro maior que `min`, caso `min` não seja inteiro), e será menor (mas não igual) a `max`.

```js
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
```

> **Nota:** Pode ser tentandor usar `Math.round()` para arredondar `min` e `max`, mas dessa maneira a aleatoriedade dos números seguiria uma distribuição não-uniforme, que talvez não seja o que você precisa.

### Gerando um número inteiro aleatório entre dois valores, inclusive

A função `getRandomInt()` acima tem intervalo com o valor mínimo incluído e o máximo excluído. Mas se você precisar que a função inclua, tanto o mínimo quanto o máximo, em seus resultados? A função `getRandomIntInclusive()` abaixo faz isso.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Especificações

| Especificação                                          | Status             | Comentário                                                                          |
| ------------------------------------------------------ | ------------------ | ----------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                    | {{Spec2('ES1')}}   | Definição inicial. JavaScript 1.0 (UNIX Only) / JavaScript 1.1 (Todas plataformas). |
| {{SpecName('ES5.1', '#sec-15.8.2.14', 'Math.random')}} | {{Spec2('ES5.1')}} |                                                                                     |
| {{SpecName('ES6', '#sec-math.random', 'Math.random')}} | {{Spec2('ES6')}}   |                                                                                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.random")}}
