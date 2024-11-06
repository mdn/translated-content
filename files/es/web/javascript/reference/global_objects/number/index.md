---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
---

{{JSRef}}

**`Number`** es un objeto primitivo envolvente que permite representar y manipular valores numéricos cómo 37 o -9.25. El constructor Number contiene constantes y métodos para trabajar con números. Valores de otro tipo pueden ser convertidos a números usando la función Number().

## Sintaxis

```js
new Number(value);
var a = new Number("123"); // a === 123 es false
var b = Number("123"); // b === 123 es true
a instanceof Number; // es true
b instanceof Number; // es false
```

### Parámetros

- `valor`
  - : El valor numérico de un objeto que está siendo creado.

## Descripción

Los principales usos del objeto `Number(valor)` son convertir un string u otro valor a uno de tipo numérico; si el argumento no puede ser convertido a un número, devuelve {{jsxref("NaN")}}.

### Literal syntax

```js
123; // one-hundred twenty-three
123.0; // same
123 === 123.0; // true
```

### Function syntax

```js
Number("123"); // retorna el número 123
Number("123") === 123; // retorna true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

## Constructor

- [`Number()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  - : Crea un nuevo valor Numérico ( `Number` value).

## Propiedades

- {{jsxref("Number.EPSILON")}}
  - : El intervalo más pequeño entre dos números representables
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : El número máximo representable en JavaScript (`253 - 1`).
- {{jsxref("Number.MAX_VALUE")}}
  - : El número más grande representable.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : El número mínimo representable en JavaScript (`-(253 - 1)`).
- {{jsxref("Number.MIN_VALUE")}}
  - : El número más pequeño representable - que es el número positivo más cercano a cero (sin llegar a ser cero)-.
- {{jsxref("Number.NaN")}}
  - : Valor especial "no es número" NaN.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Valor especial para representar infinitos negativos; retorno de un desborde de pila overflow.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Valor especial para representar infinitos positivos; retorno de un desborde de pila overflow.
- {{jsxref("Number.prototype")}}
  - : Permite la adición de propiedades a un objeto `Number`.

## Métodos

- {{jsxref("Number.isNaN()")}}
  - : Determina si el valor es NaN.
- {{jsxref("Number.isFinite()")}}
  - : Determina si el valor es un numero infinito.
- {{jsxref("Number.isInteger()")}}
  - : Determina si un numero es entero.
- {{jsxref("Number.isSafeInteger()")}}
  - : Determine si el valor pasado es un entero seguro (número entre `-(253 - 1)` y `253 - 1`).
- ~~{{jsxref("Number.toInteger()")}} {{deprecated_inline}}~~
  - : ~~Se usa para evaluar el valor pasado y convertirlo en un entero (or {{jsxref("Global_Objects/Infinity", "Infinity")}}), pero ha sido eliminado.~~
- {{jsxref("Number.parseFloat()")}}
  - : El valor es el mismo que {{jsxref ("parseFloat", "parseFloat ()")}} del objeto global.
- {{jsxref("Number.parseInt()")}}
  - : El valor es el mismo que {{jsxref("parseInt", "parseInt()")}} del objeto global.

## Instancias `Number`

Todas las instancias `Number` heredan de {{jsxref("Number.prototype")}}. El objeto prototipo del constructor de `Number` puede modificarse para aceptar a todas las instancias de `Number`.

### Métodos

- {{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}

  - : Devuelve una cadena que representa el número en notación exponencial.

- {{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}
  - : Devuelve una cadena que representa el número en notación de punto fijo.
- {{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}
  - : Devuelve una cadena con una representación sensible al idioma de este número. Invalida el método {{jsxref ("Object.prototype.toLocaleString ()")}}.

## Ejemplos

### Ejemplo: Utilizando el objeto `Number` para asignar valores a variables numéricas

El siguiente ejemplo utiliza las propiedades del objeto `Number` para asignar valores a varias variables numéricas:

```js
const masGrandeNum = Number.MAX_VALUE;
const masPequeNum = Number.MIN_VALUE;
const infinitoNum = Number.POSITIVE_INFINITY;
const notInfinitoNum = Number.NEGATIVE_INFINITY;
const noEsNum = Number.NaN;
```

### Intervalo de enteros para Number

El siguiente ejemplo muestra los valores máximos y minimos que pueden ser representados mediante el objeto Number:

Cuando se analizan datos que se han serializado en JSON, se puede esperar que los valores enteros que se encuentran fuera de este rango se corrompan cuando el analizador JSON los coacciona al tipo Number.

Una posible solución es usar {{jsxref ("String")}} en su lugar.

Los números más grandes se pueden representar usando el tipo {{jsxref ("BigInt")}}.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; //  (253 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(253 - 1) => -9007199254740991
```

### Ejemplo: Utilizando el objeto `Number` para modificar todos los objetos `Number`

El siguiente ejemplo crea un objeto Number, miNúmero, luego añade la propiedad descripción a todos los objetos Number. Luego el valor es asignado a la propiedad descripción del objeto miNúmero.

```js
miNúmero = new Number(65);
Number.prototype.descripción = null;
miNúmero.descripción = "velocidad del viento";
```

### Utilizando el objecto `Number` para transformar un objeto `Date`

El siguiente ejemplo convierte el objeto {{jsxref ("Date")}} a un valor numérico usando `Number` como función:

```js
var d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));
```

Esto muestra "819199440000".

### Convierte cadenas numéricas a números

```js
Number("123"); // 123
Number("12.3"); // 12.3
Number("123e-1"); // 12.3
Number(""); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN

Number("-Infinity"); //-Infinity
```

### Vea También

- {{jsxref("Global_Objects/NaN", "NaN")}}
- {{jsxref("Global_Objects/Math", "Math")}}
- {{jsxref("Arithmetic operators")}}
