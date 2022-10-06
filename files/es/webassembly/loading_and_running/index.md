---
title: Cargar y ejecutar código WebAssembly
slug: WebAssembly/Loading_and_running
tags:
  - Fetch
  - JavaScript
  - WebAssembly
  - XMLHttpRequest
  - bytecode
---

{{WebAssemblySidebar}}

Para usar WebAssembly en JavaScript, primero debes extraer tu módulo en la memoria antes de la compilación/instanciación. Este artículo proporciona una referencia para los diferentes mecanismos que se pueden usar para obtener el código de bytes de WebAssembly, además de cómo compilarlo/crear una instancia y luego ejecutarla.

## ¿Cuales son las opciones?

WebAssembly aún no está integrado con declaraciones `<script type='module'>` o `import`, por lo tanto, no hay una ruta para que el navegador busque módulos para ti usando importaciones.

Los métodos más antiguos [`WebAssembly.compile`](/en-US/docs/WebAssembly/JavaScript_interface/compile)/[`WebAssembly.instantiate`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) requieren que crees un {{jsxref("ArrayBuffer")}} que contiene el binario de tu módulo WebAssembly después de obtener los bytes sin procesar y luego compilarlo/crearlo. Esto es análogo a `new function(string)`, excepto que estamos sustituyendo una cadena de caracteres (código fuente de JavaScript) con un búfer de arreglo de bytes (código fuente de WebAssembly).

Los nuevos métodos [`WebAssembly.compileStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming)/[`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) son mucho más eficiente: realizan sus acciones directamente en el flujo sin procesar de bytes que provienen de la red, eliminando la necesidad del paso {{jsxref("ArrayBuffer")}}.

Entonces, ¿cómo metemos esos bytes en un búfer de arreglo y los compilamos? Las siguientes secciones lo explican.

## Usar Fetch

[Fetch](/es/docs/Web/API/Fetch_API) es una API moderna y conveniente para obtener recursos de red.

La forma más rápida y eficiente de obtener un módulo `wasm` es usar el método más nuevo [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming), que puede tomar una llamada `fetch()` como su primer argumento, y se encargará de obtener, compilar e instanciar el módulo en un solo paso, accediendo al código de bytes sin formato a medida que se transmite desde el servidor:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // ¡Haz algo con el resultado!
  }
);
```

Si usáramos el método anterior [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate), que no funciona en la transmisión directa, necesitaríamos un paso adicional para convertir el código de bytes obtenido en un {{jsxref("ArrayBuffer")}}, así:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // ¡Haz algo con el resultado!
  });
```

### Aparte en la sobrecarga de `instantiate()`

La función [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) tiene dos formas de sobrecarga: la que se muestra arriba toma el código de bytes para compilar como argumento y devuelve una Promesa que se resuelve en un objeto que contiene tanto el objeto del módulo compilado como una instancia del mismo. El objeto se ve así:

```
{
  module : Module // El objeto WebAssembly.Module recién compilado,
  instance : Instance // Una nueva WebAssembly.Instance del objeto mudule
}
```

> **Nota:** Por lo general, solo nos preocupamos por la instancia, pero es útil tener el módulo en caso de que queramos almacenarlo en caché, compartirlo con otro *worker* o `window` a través de [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage), o crear más instancias.

> **Nota:** El segunda forma de sobrecarga toma un objeto [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) como argumento y devuelve una promesa que contiene directamente el objeto `instance` como resultado. Consulta el [Ejemplo de segunda sobrecarga](/en-US/docs/WebAssembly/JavaScript_interface/instantiate#second_overload_example).

### Ejecutar tu código WebAssembly

Una vez que tengas tu instancia de WebAssembly disponible en tu JavaScript, puedes comenzar a usar funciones que se han exportado a través de la propiedad [`WebAssembly.Instance.exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports). Tu código podría ser algo como esto:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Llama a una función exportada:
    obj.instance.exports.exported_func();

    // o accede al contenido del búfer de una memoria exportada:
    const i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // o accede a los elementos de una tabla exportada:
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  }
);
```

> **Nota:** Para obtener más información sobre cómo funciona la exportación desde un módulo WebAssembly, lee [Usar la API JavaScript de WebAssembly](/en-US/docs/WebAssembly/Using_the_JavaScript_API) y [Comprender el formato de texto de WebAssembly](/en-US/docs/WebAssembly/Understanding_the_text_format).

## Usar XMLHttpRequest

[`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) es un poco más antiguo que Fetch, pero, felizmente, aún se puede usar para obtener un arreglo tipado. Nuevamente, asumiendo que nuestro módulo se llama `simple.wasm`:

1. Crea una nueva instancia de {{domxref("XMLHttpRequest()")}} y usa su método {{domxref("XMLHttpRequest.open","open()")}} para abrir una solicitud, configurando el método de solicitud a `GET`, y declarando la ruta al archivo que queremos obtener.
2. La parte clave de esto es establecer el tipo de respuesta en `'arraybuffer'` usando la propiedad {{domxref("XMLHttpRequest.responseType","responseType")}}.
3. A continuación, envía la solicitud mediante {{domxref("XMLHttpRequest.send()")}}.
4. Luego usamos el controlador de eventos {{domxref("XMLHttpRequest.load_event", "load")}} para invocar una función cuando la respuesta se ha terminado de descargar; en esta función, obtenemos el arreglo del búfer desde {{domxref("XMLHttpRequest.response", "response")}} y luego lo introducimos en nuestro método [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) como hicimos con Fetch.

El código final se ve así:

```js
const request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **Nota:** Puedes ver un ejemplo de esto en acción en [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
