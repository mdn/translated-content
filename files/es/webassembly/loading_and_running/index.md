---
title: Loading and running WebAssembly code
slug: WebAssembly/Loading_and_running
---

{{WebAssemblySidebar}}

Para utilizar WebAssembly en JavaScript, necesita primero jalar su módulo dentro de la memoria antes dela compilación/instanciación. Este artículo ofrece una referencia para mecanismos distintos que pueden traer el bytecode de WebAssembly, así como tener la forma de compilar/instanciarlo una vez que ya funciona.

## ¿Cuáles son las opciones?

WebAssembly no está integradon aún con la etiqueta `<script type='module'>` o con la directiva ES2015 `import`, así, no existe una forma para que el navegador busque sus módulos a partir de importaciones.

Los métodos anteriores {{jsxref("WebAssembly.compile")}}/{{jsxref("WebAssembly.instantiate")}} requieren que se creen un {{domxref("ArrayBuffer")}} que contenga su módulo binario WebAssembly después de buscar los bytes sin procesar, y luego los compila/instancia. Estos es análogo a la `new Function(string)`, excepto que estamos sustituyendo una cadena de caracteres (código fuente JavaScript) con una memoria intermedia (arreglo) de bytes (código fuente de WebAssembly).

Lo actual en métodos {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} es que son mucho más eficientes — desempeñan sus acciones directamente sobre flujos de bytes sin procesar (raw streams) originados en la red, suprimiendo la necesidad de tenerl el paso de {{domxref("ArrayBuffer")}}.

La pregunta ¿cómo hacemos para tener esos bytes dentro de la memoria intermedia (arreglo) y compilarlos? En la siguiente sección lo explicamos.

## Utilización de Fetch (Traer a)

[Fetch](/es/docs/Web/API/Fetch_API) es una API moderna y conveniente para traer recursos de la red.

La manera más eficiente y rápida de traer un módulo wasm (WebAssembly Module) es utilizando el método actualizado {{jsxref("WebAssembly.instantiateStreaming()")}}, que puede generar una llamada al método `fetch()` como primer argumento y manejará la búsqueda, compilación e instanciación del módulo paso a paso, teniendo acceso a los bytes sin procesar mientras se transmiten (stream) del servidor:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Hacemos algo con el resultado aquí!
  },
);
```

Si usamos el método anterior {{jsxref("WebAssembly.instantiate()")}} , que no trabaja sobre una transmisión (stream) directa, necesitaremos un paso adicional para convertir el byte code buscado a un {{domxref("ArrayBuffer")}}, como se muestra a continuación:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Hacemos algo con el resultado aquí!
  });
```

### Más allá de las sobrecargas de instantiate()

La función {{jsxref("WebAssembly.instantiate()")}} tiene dos formas de sobrecargar — la primera se muestra arriba, toma el byte code como argumento para compilar y regresa un compromiso de que resolverá un objeto que contenga tanto un módulo objeto compilado, como una instancia desarrollada de ello. El objeto se ve como lo siguiente:

```js
{
  module : Module // El recién compilado objeto WebAssembly.Module,
  instance : Instance // Una instancia nueva de WebAssembly.Instance del módulo}
```

> **Nota:** Generalmente solo nos preocupamos de la instancia, pero resulta útil tener el módulo en caso de que querramos almacenarlo temporalmente (cache), compartirlo con otro proceso o ventana vía [`postMessage()`](/es/docs/Web/API/MessagePort/postMessage), o simplemente crear mas instancias.

> **Nota:** La segunda forma de sobrecarga utiliza un objeto del tipo {{jsxref("WebAssembly.Module")}} como argumento y regresa un compromiso directo conteniendo la instancia del objeto como resultado. Vea el [Segundo ejemplo de sobrecarga](/es/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example).

### Ejecutando su código WebAssembly

Una vez que se tiene disponible la instancia WebAssembly en su código JavaScript, puede entonces comenzar a utilizar las funcionalidades de éste, que han sido exportadas vía la propiedad {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}}. Su código podría verse como lo que a continuación mostramos:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Llamada a una función exportada:
    obj.instance.exports.exported_func();

    // o acceso al contenido de la memoria exportada:
    var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // o acceso a los elementos de una tabla exportada:
    var table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> **Nota:** Para mayor información sobre como funciona la exportación de módulos WebAssembly, debes leer [Utilización de la Interfaz (API) de WebAssembly JavaScript](/es/docs/WebAssembly/Using_the_JavaScript_API), y [Entendiendo el formato de texto en WebAssembly](/es/docs/WebAssembly/Understanding_the_text_format).

## Utilizando XMLHttpRequest

[`XMLHttpRequest`](/es/docs/Web/API/XMLHttpRequest) es de alguna forma más viejo que Fetch, pero se puede utilizar aún para obtener un arreglo de tipos. De nuevo, los pasos para utilizarlo, asumiendo que nuestro módulo se llama `simple.wasm`:

1. Crear una instancia nueva de {{domxref("XMLHttpRequest()")}} y utilizar su método {{domxref("XMLHttpRequest.open","open()")}} para abrir una petición, dejando el método de petición en `GET`, y declarando la ruta al alrchivo que queremos traer.
2. La parte clave de esto es poner el tipo de respuesta al uso de `'arraybuffer'` por medio de la propiedad {{domxref("XMLHttpRequest.responseType","responseType")}}.
3. Luego, enviar la petición utilizando {{domxref("XMLHttpRequest.send()")}}.
4. Cuando luego se utilice el manejador de evento {{domxref("XMLHttpRequest.onload", "onload")}} para invocar una función cuando la respuesta haya terminado de descargar — en esta función tomamos el arreglo de la propiedad {{domxref("XMLHttpRequest.response", "response")}} y luego lo mandamos a nuestro método {{jsxref("WebAssembly.instantiate()")}} como hicimos con Fetch.

El código final queda:

```js
request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = function () {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **Nota:** Puede ver un ejemplo de esta acción en [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
