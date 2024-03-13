---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errores")}}

## Mensaje

```
SyntaxError: missing ; before statement
```

## Tipo de Error

{{jsxref("SyntaxError")}}.

## ¿Qué salio mal?

Hay un punto y coma (`;`) faltando en alguna parte. Las declaraciones Javascript deben terminar con punto y coma. Algunas de ellas son afectadas por la inserción automática [(ASI)](/es/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion), pero en este caso necesitas colocar un punto y coma, de esta forma Javascript puede analizar el código fuente de forma correcta.

Sin embargo, algunas veces, este error es solo una consecuencia de otro error, como no separar las cadenas de texto correctamente, o usar _var_ incorrectamente. Tal vez tengas muchos paréntesis en algún lugar. Revisa cuidadosamente la sintaxis cuando este error es lanzado.

## Ejemplo

### Cadenas de texto (strings) sin terminar

Este error puede pasar fácilmente cuando no se colocan las comillas correctamente y el motor de JavaScript esta esperando el final de la cadena. por ejemplo:

```js example-bad
var foo = 'El bar de Tom's';
// SyntaxError: missing ; before statement
```

En este caso se pueden usar comillas dobles para escapar del apóstrofe:

```js-nolint example-good
var foo = "El bar de Tom's";
var foo = 'El bar de Tom\'s';
```

> **Nota:** Este error suele pasar frecuentemene con cadenas del idioma Inglés

### Declarar propiedades con var

**No se pueden** declarar propiedades de un objeto o arreglo con una declaración `var`

```js example-bad
var obj = {};
var obj.foo = 'hola'; // SyntaxError: missing ; before statement

var array = [];
var array[0] = 'mundo'; // SyntaxError: missing ; before statement
```

En vez de esto. omitamos la palabra `var`:

```js example-good
var obj = {};
obj.foo = "hola";

var array = [];
array[0] = "mundo";
```

## Ver también

- [Automatic semicolon insertion (ASI)](/es/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)
- [JavaScript statements](/es/docs/Web/JavaScript/Reference/Statements)
