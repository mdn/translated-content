---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
tags:
  -Class
  - Clase
  - JavaScript
  - Referencia
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Instance
---

{{WebAssemblySidebar}}

Un objeto **`WebAssembly.Instance`** es una instancia ejecutable con estado de un [`WebAssembly.Module`](/es/docs/WebAssembly/JavaScript_interface/Module). Los objetos `Instance` contienen todas las [funciones exportadas de WebAssembly](/en-US/docs/WebAssembly/Exported_functions) que permiten llamar a código WebAssembly desde JavaScript.

## Constructor

- [`WebAssembly.Instance()`](/es/docs/WebAssembly/JavaScript_interface/Instance/Instance)
  - : Crea un nuevo objeto `Instance`.

## Propiedades de la instancia

- [`exports`](/es/docs/WebAssembly/JavaScript_interface/Instance/exports)
  - : Devuelve un objeto que contiene como sus miembros todas las funciones exportadas desde la instancia del módulo WebAssembly, para que JavaScript pueda acceder a ellas y utilizarlas. Solo lectura.

## Ejemplos

### Instanciar sincrónicamente un módulo WebAssembly

Se puede llamar a la función constructor `WebAssembly.Instance()` para instanciar sincrónicamente un objeto [`WebAssembly.Module`](/es/docs/WebAssembly/JavaScript_interface/Module), por ejemplo:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then((response) =>
  response.arrayBuffer()
).then((bytes) => {
  const mod = new WebAssembly.Module(bytes);
  const instance = new WebAssembly.Instance(mod, importObject);
  instance.exports.exported_func();
})
```

La forma preferida de obtener una `Instance` es de forma asincrónica, por ejemplo, usando la función [`WebAssembly.instantiateStreaming()`](/es/docs/WebAssembly/JavaScript_interface/instantiateStreaming) como esta:

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then((obj) => obj.instance.exports.exported_func());
```

Esto también demuestra cómo se usa la propiedad `exports` para acceder a las funciones exportadas.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [WebAssembly](/es/docs/WebAssembly) página de resumen
- [Conceptos WebAssembly](/es/docs/WebAssembly/Concepts)
- [Usar la API JavaScript de WebAssembly](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
