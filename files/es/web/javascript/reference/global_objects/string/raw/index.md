---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
---

{{JSRef}}

El método estatico **`String.raw()`** es una función de [plantilla de literales](/es/docs/Web/JavaScript/Reference/template_strings), similar al prefijo `r` en Python o al prefijo `@` en C# para strings literales (con ciertas diferencias: ver la explicación en [este problema](https://bugs.chromium.org/p/v8/issues/detail?id=5016)). Se utiliza para obtener un _string_ crudo a partir de plantillas de _string_ (es decir, el original, texto no interpretado).

## Sintaxis

```
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

### Parametros

- `callSite`
  - : Plantilla bien estructurada, similar a `{ raw: ['foo', 'bar', 'baz'] }`.
- `...substitutions`
  - : Contiene valores de sustitución.
- `templateString`
  - : [opcional] Una [plantilla _string_](/es/docs/Web/JavaScript/Reference/template_strings), con sustituciones (`${...}`).

### Valor de regreso

La forma cruda del _string_ de una plantilla _string_ proporcionada.

### Excepciones

- {{jsxref("TypeError")}}
  - : Un {{jsxref("TypeError")}} es arrojado si el primer argumento no es un objeto bien estructurado.

## Descripción

En la mayoría de los casos, `String.raw()` es usado con plantillas _string_. La primera sintaxis mencionada arriba es raramente usada, porque el motor de JavaScript hará la llamada por ti con los argumentos apropiados, al igual que otras [funciones de etiqueta](/es/docs/Web/JavaScript/Reference/template_strings#Tagged_template_literals).

`String.raw()` es la unica función de etiqueta incorporada en las plantillas _string_; trabaja igual que la función de la plantilla por defecto y ejecuta la concatenación. Incluso puedes reimplementarlo con código normal de JavaScript.

## Ejemplos

### Usando `String.raw()`

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `t${0}e${1}s${2}t` you can do:
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
// Note that 'test', a string, is an array-like object
// The following is equivalent to
// `foo${2 + 3}bar${'Java' + 'Script'}baz`
String.raw(
  {
    raw: ["foo", "bar", "baz"],
  },
  2 + 3,
  "Java" + "Script",
); // 'foo5barJavaScriptbaz'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Tambien ver

- [Template strings](/es/docs/Web/JavaScript/Reference/template_strings)
- {{jsxref("String")}}
- [Lexical grammar](/es/docs/Web/JavaScript/Reference/Lexical_grammar)
