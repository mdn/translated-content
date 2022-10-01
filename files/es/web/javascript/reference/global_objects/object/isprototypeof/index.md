---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/isPrototypeOf
---
{{JSRef}}

El método **`isPrototypeOf()`** comprueba si un objeto se encuentra en la cadena de prototipado de otro.

> **Nota:** `isPrototypeOf` difiere del operador {{jsxref("Operators/instanceof", "instanceof")}}. En la expresión "`object instanceof AFunction`", la cadena de prototipado de `object` es comprobada contra `AFunction.prototype`, no contra la propia `AFunction`.

## Sintaxis

```
prototypeObj.isPrototypeOf(obj)
```

### Parámetros

- `prototypeObj`
  - : Un objeto para ver comprobado contra cada vínculo en la cadena de prototipado del argumento **object**.
- `object`
  - : El object sobre cuya cadena de prototipado se realizará la búsqueda.

## Descripción

El método `isPrototypeOf` permite comprobar si un objetyo existe o no en la cadena de prototipado de otro.

Por ejemplo, considerese la siguiente cadena de prototipado:

```js
function Fee() {
  // ...
}

function Fi() {
  // ...
}
Fi.prototype = new Fee();

function Fo() {
  // ...
}
Fo.prototype = new Fi();

function Fum() {
  // ...
}
Fum.prototype = new Fo();
```

Al final de la secuencia, si se instanci `Fum` y se necesita verificar si el prototipo de `Fi` existe en la cadena de prototipado de `Fum` prototype chain, puede hacerse esto:

```js
var fum = new Fum();
// ...

if (Fi.prototype.isPrototypeOf(fum)) {
  // do something safe
}
```

Esto, junto con el operador {{jsxref("Operators/instanceof", "instanceof")}} resulta especialmente útil si se tiene código que sólo puede operar cuando se trata de objetos descendientes de una cadena de prototipado específica, p.e., para garantizar que ciertos métodos o propiedades estén presentes en dichos objetos.

## Especificaciones

| Especificación                                                                                                                       | Estado                       | Observaciones       |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Definición inicial. |
| {{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}                                     | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}         | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Object.isPrototypeOf")}}

## Ver también

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.prototype.__proto__")}}
