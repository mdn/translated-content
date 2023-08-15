---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---

{{JSRef}}

O método **`toFixed()`** formata um número utilizando notação de ponto fixo.

## Sintaxe

```
numObj.toFixed([dígitos])
```

### Parâmetros

- `dígitos`
  - : Opcional. O número de dígitos que aparecem depois do ponto decimal; este pode ser um valor entre 0 e 20, inclusive, e algumas implementacões podem suportar uma variação de números maiores. Se este argumento for omitido, será tratado como 0.

### Retorno

Uma string representando o número usando notação em ponto fixo.

### Throws

- {{jsxref("RangeError")}}
  - : Se `dígitos` for muito pequeno ou muito grande. Valores entre 0 e 20, inclusive, não irão causar o {{jsxref("RangeError")}}. É permitido às implementações suportar valores maiores e menores.
- {{jsxref("TypeError")}}
  - : Se este método for chamado em um objeto que não é {{jsxref( "Number")}}.

## Descrição

Uma string representando `numObj` que não usa notação exponencial e tem exatamente `dígitos` dígitos depois da casa decimal. O número será arredondado se necessário, e será adicionado zeros a parte após a virgula para que este tenha o tamanho que foi especificado. Se o `numObj` for maior que `1e+21`, entao será invocado o método {{jsxref("Number.prototype.toString()")}} e será retornado uma string em notação exponencial.

## Exemplos

### Utilizando `toFixed`

```js
var numObj = 12345.6789;

numObj.toFixed(); // Retorna '12346': note o arredondamento, não possui nenhuma parte fracionária
numObj.toFixed(1); // Retorna '12345.7': note o arredondamento
numObj.toFixed(6); // Retorna '12345.678900': note que adicionou zeros
(1.23e20).toFixed(2); // Retorna '123000000000000000000.00'
(1.23e-10).toFixed(2); // Retorna '0.00'
(2.34).toFixed(1); // Retorna '2.3'
(2.35).toFixed(1); // Retorna '2.4'. Note que arredonda para cima neste caso.
-(2.34).toFixed(1); // Retorna -2.3 (devido à precedência do operador, literais de números negativos não retornam uma string...)
(-2.34).toFixed(1); // Retorna '-2.3' (...a menos que se utilize parênteses)
```

## Especificações

| Specification                                                                        | Status               | Comment                                           |
| ------------------------------------------------------------------------------------ | -------------------- | ------------------------------------------------- |
| {{SpecName('ES3')}}                                                                  | {{Spec2('ES3')}}     | Definição incial. Implementada no JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.5', 'Number.prototype.toFixed')}}                   | {{Spec2('ES5.1')}}   |                                                   |
| {{SpecName('ES6', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}}     | {{Spec2('ES6')}}     |                                                   |
| {{SpecName('ESDraft', '#sec-number.prototype.tofixed', 'Number.prototype.toFixed')}} | {{Spec2('ESDraft')}} |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.toFixed")}}

## Veja também

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
