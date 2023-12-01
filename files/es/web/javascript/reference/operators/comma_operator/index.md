---
title: Operador Coma
slug: Web/JavaScript/Reference/Operators/Comma_operator
---

{{jsSidebar("Operators")}}

El operador coma evalua cada uno de sus operandos (de izquierda a derecha) y retorna el valor del último operando.

## Sintaxis

```
expr1, expr2, expr3...
```

## Parámetros

- `expr1`, `expr2, expr3...`
  - : Cualquier expresión.

## Descripción

Puede usar el operador coma cuando deseé mútiples expresiones en una localización que requiere una sola expresión. El uso más común de este operador es proveer múltiples parámetros en un búcle for

## Ejemplo

Si a es un array de dos dimensiones con 10 elementos en un lado, el siguiente código usa el operador coma para incrementar dos variables a la vez. Note que la coma en la sentencia var **no** es el operador coma, porque no existe adentro de una expresión.Más bien, es un carácter especial en sentencias var para combinar a múltiples de ellas en una sola. Sin embargo, esa coma se comporta casi igual que el operador coma. El código imprime los valores de los elementos diagonales en el array:

```
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);
```

### Procesar y luego retornar

Otro ejemplo de lo que se puede hacer con el operador coma es procesar antes de retornar. Como se mencionó, solo el último elemento será retornado pero todos los otros también van a ser evaluados. Así, se puede hacer:

```js
function myFunc() {
  var x = 0;

  return (x += 1), x; // the same as return ++x;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [for loop](/es/docs/Web/JavaScript/Reference/Statements/for)
