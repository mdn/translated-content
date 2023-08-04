---
title: Coerción
slug: Glossary/Type_coercion
---

La coerción es la conversión automática o implicita de valores de un tipo de dato a otro (Ejemplo: de cadena de texto a número). La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - la coerción es implícita mientras que la conversión puede ser implícita o explícita.

## Examples

```js
const valor1 = "5";
const valor2 = 9;
let suma = valor1 + valor2;

console.log(suma);
```

En el ejemplo anterior, JavaScript ha coercido el `9` de número a cadena de texto y luego ha concatenado los dos valores resultando en una cadena de texto de `59`. JavaScript tuvo la opción de coercer a cadena de texto o número y decidió usar número.

El compilador pudo haber coercido el `5` a un número y retornar el valor de 14, pero no lo hizo. Para retornar ese resultado, tendrías que convertir explícitamente el `5` a un número usando el método `Number()`:

```js
sumar = Number(valor1) + valor2;
```
