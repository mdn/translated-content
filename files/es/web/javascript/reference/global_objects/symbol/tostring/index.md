---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: cf607d68522cd35ee7670782d3ee3a361eaef2e4
---

{{JSRef}}

El método **`toString()`** devuelve una cadena que representa el objeto {{jsxref("Symbol")}} especificado.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## Sintaxis

```js
toString();
```

### Valor de retorno

Una cadena que representa el objeto {{jsxref("Symbol")}} especificado.

## Descripción

El objeto {{jsxref("Symbol")}} reemplaza el método `toString` del objeto {{jsxref("Object")}}; no hereda {{jsxref("Object.prototype.toString()")}}. Para los objetos `Symbol`, el método `toString` devuelve una representación de cadena del objeto.

### Sin concatenación de cadenas

Aunque se puede llamar a `toString()` en los símbolos, no se puede utilizar la concatenación de cadenas con ellos:

```js
Symbol("foo") + "bar"; // TypeError: No se puede convertir el símbolo en cadena
```

## Ejemplos

### Usando toString()

```js
Symbol("desc").toString(); // "Symbol(desc)"

// símbolos conocidos
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)

// símbolos globales
Symbol.for("foo").toString(); // "Symbol(foo)"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Object.prototype.toString()")}}
