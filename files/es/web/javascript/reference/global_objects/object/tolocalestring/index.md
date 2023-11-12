---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef}}

El método **`toLocaleString()`** devuelve un string que representa a un objeto. Este método está pensado para ser redefinido en los objetos derivados, para los propósitos específicos de cada configuración regional.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Sintaxis

```
objeto.toLocaleString()
```

### Valor de retorno

Un string que representa al objeto.

## Descripción

{{jsxref("Object")}}'s `toLocaleString` devuelve el resultado de llamar a {{jsxref("Object.toString", "toString()")}}.

Se proporciona esta función para que los objetos dispongan de un método `toLocaleString` genérico, aunque puede que no todos la utilicen. Véase la lista siguiente.

### Objetos que redefinen `toLocaleString`

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Ejemplos

### Redefinición de toLocaleString() en Array

En los objetos [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) se puede utilizar [`toLocaleString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString) para imprimir los valores del _array_ como un string, con indicadores opcionales de configuración regional (como símbolos de moneda) aplicados.

Por ejemplo:

```js
const unArray = [4, 7, 10];

let preciosEnEuros = unArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Redefinición de toLocaleString() para Date

En los objetos [`Date`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date) se usa [`toLocaleString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) para imprimir fechas en un formato adecuado a la configuración regional.

Por ejemplo:

```js
const unaFecha = new Date(Date.now());
// "2020-07-07T19:51:44.046Z"

let fechaAleman = unaFecha.toLocaleString("de");
// "7.7.2020, 21:55:22"

var fechaFrances = unaFecha.toLocaleString("fr");
//"07/07/2020 à 21:55:22"
```

### Redefinición de toLocaleString() para Number

En los objetos [`Number`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number) se usa [`toLocaleString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) para imprimir números de forma adecuada a la configuración regional, p. ej. para usar los separadores de miles correctos.

Por ejemplo:

```js
const unNumero = 2901234564;
// "2901234564"

let numeroAleman = unNumero.toLocaleString("de");
// "2.901.234.564"

let numeroFrances = unNumero.toLocaleString("fr");
// "2 901 234 564"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.prototype.toString()")}}
