---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---

{{JSRef}}

El método **`Object.setPrototypeOf()`** establece el prototipo (p.e., la propiedad interna `[[Prototype]]`) de un objeto especificado a otro objeto o sino establece {{jsxref("null")}}.

> **Advertencia:** **Adverdencia:** Cambiar la propiedad `[[Prototype]]` de un objeto, debido a la naturaleza de la optimización del acceso a propiedades de los motores modernos de JavaScript, es una operación bastante lenta, en todo **_todo_** navegador y motor de JavaScript. Los efectos sobre el rendimiento al alterar la herencia son sutiles y vastos., y no están limitados a simplemente el tiempo gastado en la sentencia `obj.__proto___ = ...`, but may extend to **_any_** code that has access to **_any_** object whose `[[Prototype]]` has been altered. If you care about performance you should avoid setting the `[[Prototype]]` of an object. Instead, create a new object with the desired `[[Prototype]]` using {{jsxref("Object.create()")}}.

## Sintaxis

```
Object.setPrototypeOf(obj, prototype);
```

### Parámetros

- `obj`
  - : El objeto al que se ha de establecer el prototipo.
- `prototype`
  - : El nuevo prototipo del objeto, (un objeto o {{jsxref("null")}}).

## Descripción

Arroja una excepción del tipo {{jsxref("TypeError")}} si el objeto cuyo `[[Prototype]]` se va a modificar no es extensible de acuerdo con {{jsxref("Object.isExtensible()")}}. No hace nada si el parametro `prototype` no es un objeto o {{jsxref("null")}} (p.e., número, cadena, booleano, o {{jsxref("undefined")}}). De cualquier otra forma, este método cambia la propiedad `[[Prototype]]` del `obj` al valor nuevo.

`Object.setPrototypeOf()` está en el último borrador del estandar ECMAScript6. Es considerado generalmente la manera adecuada de establecer el prototipo de un objeto, contra la propiedad más controversial [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

## Ejemplos

```js
var dict = Object.setPrototypeOf({}, null);
```

## Polyfill

Utilizando la vieja propiedad [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), podemos definir facilmente `Object.setPrototypeOf` si aún no está disponible:

```js
// Solo funciona en Chrome y FirefoxOnly works in Chrome y FireFox, no funciona en IE:
Object.setPrototypeOf =
  Object.setPrototypeOf ||
  function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  };
```

## Agregando cadenas de prototipo

Una combinación de `Object.getPrototypeOf()` y [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) permite agregar una nueva cadena de prototipos al nuevo prototipo del objeto.

```js
/**
 *** Object.appendChain(@object, @prototype)
 *
 * Agrega el primer prototipo no-nativo de una cadena a un nuevo prototipo.
 * Retorna @object (si es Primitivo (Primitive value) será transoformado a Objeto).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 *  Agrega el primer prototipo no-nativo de una cadena a la Function.prototype nativa del objeto, luego agrega una
 * ueva Function(["@arg"(s)], "@function_body") a la cadena.
 * Retorna la función.
 *
 **/

Object.appendChain = function (oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError("Object.appendChain - Not enough arguments");
  }
  if (typeof oProto === "number" || typeof oProto === "boolean") {
    throw new TypeError(
      "second argument to Object.appendChain must be an object or a string",
    );
  }

  var oNewProto = oProto,
    oReturn =
      (o2nd =
      oLast =
        oChain instanceof this ? oChain : new oChain.constructor(oChain));

  for (
    var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype && o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
};
```

### Uso

#### Primer ejemplo: Agregar una cadena a un prototipo

```js
function Mammal() {
  this.isMammal = "yes";
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies("Felis");

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = "yes";
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
```

#### Segundo ejemplo: Transformando un valor Primitivo en una instancia de su constructor y agregar su cadena al prototipo

```js
function Symbol() {
  this.isSymbol = "yes";
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new Symbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
```

#### Tercer ejemplo: Agregando una cadena a la Function.prototype de un objeto y agregando una nueva función a la cadena

```js
function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(
  new Person("George"),
  'console.log("Hello guys!!");',
);

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
