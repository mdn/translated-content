---
title: Función
slug: Glossary/Function
---

Una **función** es un fragmento de código que puede ser llamado por otro código o por sí mismo, o por una {{Glossary("variable")}} que haga referencia a la función. Cuando se llama a una función, los {{Glossary("Argument", "argumentos")}} se pasan a la función como entrada, y la función puede devolver opcionalmente una salida. Una función en {{glossary("JavaScript")}} es también un {{glossary("object", "objeto")}}.

El nombre de la función es un {{Glossary("identifier", "identificador")}} declarado como parte de una declaración de función o expresión de función. El {{Glossary("scope", "ámbito")}} de la función depende de si el nombre de la función es una declaración o una expresión.

### Diferentes tipos de funciones

Una **función anónima** es una función que no tiene nombre:

```js
function () {};
// o se puede usar la anotación con flecha ECMAScript 2015
() => {};
```

Una **función nombrada** es una función con nombre:

```js
function foo() {}
// o se puede usar la anotación con flecha ECMAScript 2015
const foo = () => {};
```

Una **función interna** es una función que está dentro de otra función (`cuadrado` en este caso). Una **función externa** es una función que contiene a otra función (`sumarCuadrados` en este caso):

```js
function sumarCuadradors(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
//Usando la anotación de flecha ECMAScript 2015
const sumarCuadrados = (a, b) => {
  const cuadrado = (x) => x * x;
  return cuadrado(a) + cuadrado(b);
};
```

Una **función recursiva** es una función que se llama a sí misma. Mira {{Glossary("Recursion", "recursión")}}.

```js
function bucle(x) {
  if (x >= 10) return;
  bucle(x + 1);
}
//Usando la anotación de flecha ECMAScript 2015
const bucle = (x) => {
  if (x >= 10) return;
  bucle(x + 1);
};
```

Una **expresión de una función que se invoca inmediatamente** ({{glossary("IIFE")}}, por sus siglas en inglés) es una función que se llama directamente después de que la función se haya cargado en el compilador del navegador. La forma de identificar un IIFE es ubicando el paréntesis izquierdo y derecho adicional al final de la declaración de la función.

```js
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();
```

Si desea obtener más información sobre las IIFE, consulte la siguiente página en Wikipedia: [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

## Saber más

### Referencias técnicas

- [Funciones](/es/docs/Web/JavaScript/Guide/Functions)
- [Funciones de flecha](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
