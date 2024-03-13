---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
l10n:
  sourceCommit: ef59c2d0399ba62ec2632810564ab12a198af868
---

{{JSRef}}

El método **`Symbol.keyFor(sym)`** recupera la clave de símbolo compartida del símbolo pasado como argumento desde el registro global de símbolos.

{{EmbedInteractiveExample("pages/js/symbol-keyfor.html")}}

## Sintaxis

```js
Symbol.keyFor(sym);
```

### Parámetros

- `sym`
  - : Symbol, obligatoria. El símbolo del que se desea encontrar la clave.

### Valor de retorno

Una cadena que representa la clave del símbolo pasado como parámetro si es encontrado en el registro global de símbolos; En caso contrario, {{jsxref("undefined")}}.

## Ejemplos

### Usando keyFor()

```js
const globalSym = Symbol.for("foo"); // crea un nuevo símbolo global
Symbol.keyFor(globalSym); // retorna: "foo"
const localSym = Symbol();
Symbol.keyFor(localSym); // retorna: undefined
// los símbolos de ámbito no son registrados
// en el registro global de símbolos.
Symbol.keyFor(Symbol.iterator); // retorna: undefined
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Symbol.for()")}}
