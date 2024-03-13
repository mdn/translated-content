---
title: WebAssembly
slug: conflicting/WebAssembly/JavaScript_interface
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly
---

{{JSRef}}

El objeto **`WebAssembly`** de JavaScript actua como un namespace para todas las funcionalidades realcionados con [WebAssembly](/es/docs/WebAssembly).

A diferencia de otros objetos globales, `WebAssembly` no tiene un constructor (no tiene una función para crear el objeto). Puedes ser comparado con el objeto {{jsxref("Math")}}, que también es un namespace, para funciones y constantes matemáticas, o también con {{jsxref("Intl")}} que es un namespace para internacionalización y otras funciones de idioma.

## Descripción

Los usos primarios para el objeto `WebAssembly` son:

- Cargar código WebAssembly, utilizando la función {{jsxref("WebAssembly.instantiate()")}}.
- Crear nuevas instancias de memoria y de tablas mediante los constructores {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}}.
- Facilitar el manejo de errores que ocurren dentro de un WebAssembly mediante los constructores:{{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}}.

## Métodos

- {{jsxref("WebAssembly.instantiate()")}}
  - : El API primaria para compilar e instanciar código WebAssembly, ambos regresan un `Module` y el primero `Instance`.
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : Compila e instancia un módulo WebAssembly directamente desde un flujo de origen subyacente, ambos regresan un `Module` y el primero `Instance`.
- {{jsxref("WebAssembly.compile()")}}
  - : Compila un {{jsxref("WebAssembly.Module")}} desde el código binario de un WebAssembly, manteniendo la creación de la instancia como un objeto separado.
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : compila un {{jsxref("WebAssembly.Module")}} directamente desde un flujo de origen subyacente, manteniendo la creación de la instancia como un objeto sepraado.
- {{jsxref("WebAssembly.validate()")}}
  - : Valida un arreglo con tipo de código binario de un WebAssembly, regresando si los bytes son código válido WebAssembly (`true`) o de lo contrario (`false`).

## Constructores

- {{jsxref("WebAssembly.Module()")}}
  - : Crea un nuevo objeto WebAssembly `Module`.
- {{jsxref("WebAssembly.Instance()")}}
  - : Crear un nuevo objeto WebAssembly `Instance`.
- {{jsxref("WebAssembly.Memory()")}}
  - : Crear un nuevo objeto WebAssembly `Memory`.
- {{jsxref("WebAssembly.Table()")}}
  - : Crear un nuevo objeto WebAssembly `Table`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Crear un nuevo objeto WebAssembly `CompileError`.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Crear un nuevo objeto WebAssembly `LinkError`.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Crear un nuevo objeto WebAssembly `RuntimeError`.

## Ejemplos

Después de obtener algún bytecode de WebAssembly usando la sentencia fetch, nosotros compilamos e instanciamos el módulo usando la función {{jsxref("WebAssembly.instantiate()")}} , importando una función de JavaScript en el WebAssembly Module en el proceso. Esta premisa resuelve a un objeto (`result`) que contenga un objeto [`Module`](/es/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) compilado y un objeto [`Instance`](/es/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance) . Entonces tenemos una llamada a [Exported WebAssembly function](/es/docs/WebAssembly/Exported_functions) que es exportada por `Instance`.

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(result =>
  result.instance.exports.exported_func()
);
```

> **Nota:** Ver [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) en GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/)) para un ejemplo que hace uso de la función [`fetchAndInstantiate()`](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js#L1).

## Ver también

- [Vista General de WebAssembly](/es/docs/WebAssembly)
- [Conceptos de WebAssembly](/es/docs/WebAssembly/Concepts)
- [Uso de la API de JavaScript de WebAssembly](/es/docs/WebAssembly/Using_the_JavaScript_API)
