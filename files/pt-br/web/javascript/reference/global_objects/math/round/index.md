---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
---

{{JSRef("Global_Objects", "Math")}}

## Resumo

A função **`Math.round()`** retorna o valor de um número arredondado para o inteiro mais proximo.

## Sintaxe

```
 Math.round(x)
```

### Parâmetros

- `x`
  - : Um número.

### Retorno

O valor de um número dado aproximado para o inteiro mais próximo

## Descrição

Se a parte fracionária do número for maior ou igual a 0.5, o argumento x é arredondado para o próximo número inteiro acima, entretanto se a parte fracionária do `número` for menor que 0.5, então o valor de x é arredondado para o próximo número inteiro abaixo. Se a parte fracionária for exatamente igual a 0.5, o número é arredondado para o próximo inteiro na direção de +∞.

Por `round` ser um método estático de `Math`, você sempre irá usá-lo como `Math.round()`, ao invés de usá-lo como um método da instância do objeto `Math` que você criou.

## Exemplos

### Exemplo: Uso de `Math.round`

```js
// Retorna o valor 20
x = Math.round(20.49);

// Retorna o valor 21
x = Math.round(20.5);

// Retorna o valor -20
x = Math.round(-20.5);

// Retorna o valor -21
x = Math.round(-20.51);

// Retorna 1 (!)
// Note o erro de arredondamento por causa da inacurácia de aritmética de ponto flutuante
// Compare o exemplo abaixo com Math.round(1.005, -2)
x = Math.round(1.005 * 100) / 100;
```

### Exemplo: Arredondamento decimal

```js
// Closure
(function () {
  /**
   * Ajuste decimal de um número.
   *
   * @param  {String}  type  O tipo de arredondamento.
   * @param  {Number}  value  O número a arredondar.
   * @param  {Integer}  exp    O expoente (o logaritmo decimal da base pretendida).
   * @returns  {Number}      O valor depois de ajustado.
   */
  function decimalAdjust(type, value, exp) {
    // Se exp é indefinido ou zero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Se o valor não é um número ou o exp não é inteiro...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Transformando para string
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Transformando de volta
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Arredondamento decimal
  if (!Math.round) {
    Math.round = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Decimal arredondado para baixo
  if (!Math.floor) {
    Math.floor = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Decimal arredondado para cima
  if (!Math.ceil) {
    Math.ceil = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Round (arredondamento)
Math.round(55.55, -1); // 55.6
Math.round(55.549, -1); // 55.5
Math.round(55, 1); // 60
Math.round(54.9, 1); // 50
Math.round(-55.55, -1); // -55.5
Math.round(-55.551, -1); // -55.6
Math.round(-55, 1); // -50
Math.round(-55.1, 1); // -60
Math.round(1.005, -2); // 1.01 -- compare este resultado com Math.round(1.005*100)/100 no exemplo acima
// Floor (para baixo)
Math.floor(55.59, -1); // 55.5
Math.floor(59, 1); // 50
Math.floor(-55.51, -1); // -55.6
Math.floor(-51, 1); // -60
// Ceil (para cima)
Math.ceil(55.51, -1); // 55.6
Math.ceil(51, 1); // 60
Math.ceil(-55.59, -1); // -55.5
Math.ceil(-59, 1); // -50
```

### Método de arredondamento PHP

O código abaixo pode ser utilizado para adicionar sua própria versão do Math.round ao seu namespace no qual tenha um parâmetro de precisão. Diferentemente do arredondamento decimal do exemplo acima, esse método não realiza conversão de e para strings, e o parâmetro de precisão funciona da mesma maneira que PHP e Excel onde um positivo 1 seria arredondado para 1 casa decimal e -1 seria arredondado para os decimais.

```
var myNamespace = {};

myNamespace.round = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

myNamespace.round(1234.5678, 1); // 1234.6
myNamespace.round(1234.5678, -1); // 1230
```

## Especificações

| Especificação                                         | Status             | Comentário         |
| ----------------------------------------------------- | ------------------ | ------------------ |
| ECMAScript 1ª Edição. Implementado em JavaScript 1.0. | Padrão             | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.8.2.15', 'Math.round')}} | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES6', '#sec-math.round', 'Math.round')}}  | {{Spec2('ES6')}}   |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.round")}}

## Veja também

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
