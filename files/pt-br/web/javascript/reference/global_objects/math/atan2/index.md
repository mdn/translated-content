---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
---

{{JSRef}}

A função **`Math.atan2()`** retorna o arco tangente do coeficiente dos argumentos passado.

## Sintaxe

```
Math.atan2(y, x)
```

### Parâmentros

- `y`
  - : Primeiro numero.
- `x`
  - : Segundo numero.

### Retorno

O arco tagente do coegiente dos parâmetros

## Descrição

O `Math.atan2()` método retorna um valor numérico entre -π e π representando o ângulo teta entre (x, y). Assim indo no sentido anti-horario ao ângulo, medido em radianos, entre o eixo X positivo, e o ponto`(x, y)`.Nota os argumentos para essa função: primeiro o eixo Y(ordenadas) e o eixo X(absissas) como segundo parâmetro.

![A simple diagram showing the angle returned by atan2(y, x)](atan2.png)

`Math.atan2()os argumentos são passados separados x e y enquanto no Math.atan() é passado a razão entre esses argumentos.`

Porque `atan2()` é um método estático de `Math`, você sempre usará `Math.atan2()`, ao inves de um objeto Math criado (`Math` não é um construtor).

## Examples

### Using `Math.atan2()`

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x > 0.
Math.atan2(±0, x);                // ±0 for x > 0.
Math.atan2(-y, ±0);               // -PI/2 for y > 0.
Math.atan2(y, ±0);                // PI/2 for y > 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
```

## Specifications

| Specification                                            | Status               | Comment                                            |
| -------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                      | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.5', 'Math.atan2')}}     | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.atan2', 'Math.atan2')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.atan2', 'Math.atan2')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.atan2")}}

## Veja também

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
