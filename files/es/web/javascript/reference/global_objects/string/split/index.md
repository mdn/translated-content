---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
---

{{JSRef("Objetos_globales", "String")}}

El método **`split()`** divide un objeto de tipo `String` en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

## Sintaxis

```
cadena.split([separador][,limite])
```

### Parámetros

- `separador`
  - : Especifica el carácter a usar para la separación de la cadena. El `separador` es tratado como una cadena o como una [](/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp){{jsxref("Objetos_globales/RegExp", "expresión regular", "", 1)}}. Si se omite el `separador`, el array devuelto contendrá un sólo elemento con la cadena completa.

<!---->

- `limite`
  - : Opcional. Entero que especifica un límite sobre el número de divisiones a realizar. El método `split()` todavía se divide en todas las concordancias del `separador`, pero divide la matriz devuelta en la cantidad de elementos impuesta por el `limite`.

## Descripción

El método `split()` devuelve el nuevo array.

Cuando se encuentra, el `separador` es eliminado de la cadena y las subcadenas obtenidas se devuelven en un array. Si el `separador` no es encontrado o se omite, el array contendrá un único elemento con la cadena original completa. Si el `separador` es una cadena vacía la cadena es convertida en un array de carácteres.

Si el `separador` es una expresión regular que contiene paréntesis de captura, entonces cada vez que el `separador` concuerda, los resultados (incluído cualquier resultado indefinido) de los paréntesis de captura son divididos en el array resultante. Sin embargo no todos los navegadores soportan esta característica.

> **Nota:** Cuando la cadena está vacía, `split()` devuelve un array que contiene una cadena vacía, en lugar de un array vacío.

## Ejemplos

### Usando `split()`

El siguiente ejemplo define una función que divide una cadena en un array de cadenas usando el separador especificado. Después de la división de la cadena, la función muestra mensajes indicando la cadena original (antes de la división), el separador usado, el número de elementos del array y los elementos individuales del array.

```js
function dividirCadena(cadenaADividir, separador) {
  var arrayDeCadenas = cadenaADividir.split(separador);
  document.write('<p>La cadena original es: "' + cadenaADividir + '"');
  document.write('<br>El separador es: "' + separador + '"');
  document.write(
    "<br>El array tiene " + arrayDeCadenas.length + " elementos: ",
  );

  for (var i = 0; i < arrayDeCadenas.length; i++) {
    document.write(arrayDeCadenas[i] + " / ");
  }
}

var cadenaVerso = "Oh brave new world that has such people in it.";
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espacio = " ";
var coma = ",";

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);
```

Este ejemplo produce el siguiente resultado:

```
La cadena original es: "Oh brave new world that has such people in it."
El separador es: " "
El array tiene 10 elementos: Oh / brave / new / world / that / has / such / people / in / it. /

La cadena original es: "Oh brave new world that has such people in it."
El separador es: "undefined"
El array tiene 1 elementos: Oh brave new world that has such people in it. /

La cadena original es: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
El separador es: ","
El array tiene 12 elementos: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

### Eliminar espacios de una cadena

En el siguiente ejemplo, `split` busca 0 o más espacios seguidos de un punto y coma seguido por 0 o más espacios y, cuando los halla, elimina los espacios de la cadena. `listaNombres` es el array devuelto como resultado de la llamada a `split`.

```js
var nombres = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
document.write(nombres + "<br>" + "<br>");
var expresionRegular = /\s*;\s*/;
var listaNombres = nombres.split(expresionRegular);
document.write(listaNombres);
```

Esto imprime dos líneas; la primera línea imprime la cadena original, y la segunda línea imprime el array resultante.

```
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
Harry Trump,Fred Barney,Helen Rigby,Bill Abel,Chris Hand
```

### Devolviendo un número limitado de divisiones

El el siguiente ejemplo, `split` busca 0 o más espacios en una cadena y devuelve las tres primeras divisiones que encuentra.

```js
var miCadena = "Hola Mundo. Cómo estás hoy?";
var divisiones = miCadena.split(" ", 3);

print(divisiones);
```

Este script muestra lo siguiente:

```
Hola,Mundo.,Cómo
```

### Paréntesis de captura

Si el separador contiene paréntesis de capturaI los resultados que concuerden son devueltos en el array.

```js
var miCadena = "Hola 1 mundo. Oración número 2.";
var division = miCadena.split(/(\d)/);

console.log(division);
```

Este script muestra lo siguiente:

```html
Hola ,1, mundo. Oración número ,2,.
```

### Dar la vuelta a una cadena usando `split()`

```js
var str = "asdfghjkl";
var strReverse = str.split("").reverse().join(""); // 'lkjhgfdsa'
// split() retorna un array en el cual reverse() y join() pueden ser aplicados
```

**Extra:** usar el operador [===](</es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_.2F_strict_equality_(.3D.3D.3D)>) para verificar si la cadena anterior era un palíndromo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
