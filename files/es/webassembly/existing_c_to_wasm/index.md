---
title: Compilar un módulo C existente a WebAssembly
slug: WebAssembly/existing_C_to_wasm
tags:
  - C++
  - Compiling
  - Compilar
  - Emscripten
  - WebAssembly
  - wasm
---

{{WebAssemblySidebar}}

Un caso de uso central para WebAssembly es tomar el ecosistema existente de bibliotecas C y permitir que los desarrolladores las usen en la web.

Estas bibliotecas a menudo se basan en la biblioteca estándar de C, un sistema operativo, un sistema de archivos y otras cosas. Emscripten proporciona la mayoría de estas funciones, aunque existen algunas [limitaciones](https://emscripten.org/docs/porting/guidelines/api_limitations.html).

Como ejemplo, compilemos un codificador para WebP en `wasm`. El código fuente del códec WebP está escrito en C y [disponible en GitHub](https://github.com/webmproject/libwebp), así como una amplia [documentación de la API](https://developers.google.com/speed/webp/docs/api). Ese es un muy buen punto de partida.

```bash
git clone https://github.com/webmproject/libwebp
```

Para empezar de manera simple, expón `WebPGetEncoderVersion()` desde `encode.h` a JavaScript escribiendo un archivo C llamado `webp.c`:

```cpp
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```

Este es un buen programa sencillo para probar si puedes obtener el código fuente de `libwebp` para compilar, ya que no requiere ningún parámetro o estructuras de datos complejas para invocar esta función.

Para compilar este programa, necesitas decirle al compilador dónde puede encontrar los archivos de encabezado de `libwebp` usando el indicador `-I` y también pasarle todos los archivos C de `libwebp` que necesita. Una estrategia útil es darle **todos** los archivos C y confiar en el compilador para eliminar todo lo que no sea necesario. Parece funcionar de manera brillante para esta biblioteca:

```bash
$ emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c
```

> **Nota:** Esta estrategia no funcionará con todos los proyectos C. Muchos proyectos se basan en autoconf/automake para generar código específico del sistema antes de la compilación. Emscripten proporciona `emconfigure` y `emmake` para envolver estos comandos e inyectar los parámetros apropiados. Puedes encontrar más en la [documentación de Emscripten](https://emscripten.org/docs/compiling/Building-Projects.html).

Ahora solo necesitas algo de HTML y JavaScript para cargar tu nuevo módulo:

```html
<script src="./a.out.js"></script>
<script>
  Module.onRuntimeInitialized = async () => {
    const api = {
      version: Module.cwrap("version", "number", []),
    };
    console.log(api.version());
  };
</script>
```

Y verás el número de versión correcto en la [salida](https://googlechrome.github.io/samples/webassembly/version.html):

![Captura de pantalla de la consola de DevTools que muestra el número de versión correcto.](version.png)

> **Nota:** `libwebp` devuelve la versión actual a.b.c como un número hexadecimal 0xabc. Por ejemplo, v0.6.1 está codificado como 0x000601 = 1537.

### Obtener una imagen de JavaScript en Wasm

Obtener el número de versión del codificador es excelente, pero codificar una imagen real sería más impresionante. ¿Como lo hacemos?

La primera pregunta que debes responder es: ¿cómo ingreso la imagen en `wasm`? Mirando la [API de codificación de `libwebp`](https://developers.google.com/speed/webp/docs/api#simple_encoding_api), encontrarás que espera un arreglo de bytes en RGB, RGBA, BGR o BGRA. Afortunadamente, la API de Canvas tiene {{domxref("CanvasRenderingContext2D.getImageData")}}, que te brinda un {{jsxref("Uint8ClampedArray")}} que contiene los datos de la imagen en RGBA:

```js
async function loadImage(src) {
  // Carga la imagen
  const imgBlob = await fetch(src).then((resp) => resp.blob());
  const img = await createImageBitmap(imgBlob);
  // Hace que el canvas tenga el mismo tamaño que la imagen
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // Dibuja la imagen en el canvas
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}
```

Ahora "solo" es cuestión de copiar los datos de JavaScript en `wasm`. Para eso, debes exponer dos funciones adicionales: una que asigna memoria para la imagen dentro de `wasm` y otra que la libera nuevamente:

```cpp
#include <stdlib.h> // requerido por malloc definition

EMSCRIPTEN_KEEPALIVE
uint8_t* create_buffer(int width, int height) {
  return malloc(width * height * 4 * sizeof(uint8_t));
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(uint8_t* p) {
  free(p);
}
```

La función `create_buffer()` asigna un búfer para la imagen RGBA, por lo tanto, 4 bytes por píxel. El puntero devuelto por `malloc()` es la dirección de la primera celda de memoria de ese búfer. Cuando el puntero se devuelve a la tierra de JavaScript, se trata solo como un número. Después de exponer la función a JavaScript usando `cwrap`, puedes usar ese número para encontrar el inicio de nuestro búfer y copiar los datos de la imagen:

```js
const api = {
  version: Module.cwrap("version", "number", []),
  create_buffer: Module.cwrap("create_buffer", "number", ["number", "number"]),
  destroy_buffer: Module.cwrap("destroy_buffer", "", ["number"]),
  encode: Module.cwrap("encode", "", ["number", "number", "number", "number"]),
  free_result: Module.cwrap("free_result", "", ["number"]),
  get_result_pointer: Module.cwrap("get_result_pointer", "number", []),
  get_result_size: Module.cwrap("get_result_size", "number", []),
};

const image = await loadImage("./image.jpg");
const p = api.create_buffer(image.width, image.height);
Module.HEAP8.set(image.data, p);
// ... llama  al codificador ...
api.destroy_buffer(p);
```

### Codificar la imagen

La imagen ya está disponible en `wasm`. Es hora de llamar al codificador WebP para que haga su trabajo. Mirando la [documentación de WebP](https://developers.google.com/speed/webp/docs/api#simple_encoding_api), encontrarás que `WebPEncodeRGBA` parece encajar perfectamente. La función lleva un puntero a la imagen de entrada y sus dimensiones, así como una opción de calidad entre 0 y 100. También nos asigna un búfer de salida que necesitamos liberar usando `WebPFree()` una vez que hayamos terminado con la imagen de WebP.

El resultado de la operación de codificación es un búfer de salida y su longitud. Debido a que las funciones en C no pueden tener arreglos como tipos de retorno (a menos que asignes memoria dinámicamente), este ejemplo recurre a un arreglo global estático. Es posible que esto no sea C limpio. De hecho, se basa en punteros `wasm` de 32 bits de ancho. Pero este es un atajo justo para mantener las cosas simples:

```cpp
int result[2];
EMSCRIPTEN_KEEPALIVE
void encode(uint8_t* img_in, int width, int height, float quality) {
  uint8_t* img_out;
  size_t size;

  size = WebPEncodeRGBA(img_in, width, height, width * 4, quality, &img_out);

  result[0] = (int)img_out;
  result[1] = size;
}

EMSCRIPTEN_KEEPALIVE
void free_result(uint8_t* result) {
  WebPFree(result);
}

EMSCRIPTEN_KEEPALIVE
int get_result_pointer() {
  return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_result_size() {
  return result[1];
}
```

Ahora, con todo eso en su lugar, puedes llamar a la función de codificación, tomar el puntero y el tamaño de la imagen, colocarlo en un búfer de JavaScript propio y liberar todos los búferes `wasm` asignados en el proceso:

```js
api.encode(p, image.width, image.height, 100);
const resultPointer = api.get_result_pointer();
const resultSize = api.get_result_size();
const resultView = new Uint8Array(
  Module.HEAP8.buffer,
  resultPointer,
  resultSize
);
const result = new Uint8Array(resultView);
api.free_result(resultPointer);
```

> **Nota:** `new Uint8Array(someBuffer)` creará una nueva vista en el mismo fragmento de memoria, mientras que `new Uint8Array(someTypedArray)` copiará los datos.

Dependiendo del tamaño de tu imagen, es posible que te encuentres con un error en el que `wasm` no puede aumentar la memoria lo suficiente como para acomodar tanto la imagen de entrada como la de salida:

![Captura de pantalla de la consola de DevTools que muestra un error.](error.png)

Afortunadamente, la solución a este problema está en el mensaje de error. Solo necesitas agregar `-s ALLOW_MEMORY_GROWTH=1` a tu comando de compilación.

Y ahí lo tienes. Compilaste un codificador WebP y transcodificaste una imagen JPEG a WebP. Para probar que funcionó, convierte tu búfer de resultados en un blob y utilízalo en un elemento `<img>`:

```js
const blob = new Blob([result], { type: "image/webp" });
const blobURL = URL.createObjectURL(blob);
const img = document.createElement("img");
img.src = blobURL;
document.body.appendChild(img);
```

He aquí la gloria de una nueva imagen WebP.

[Demo](https://googlechrome.github.io/samples/webassembly/image.html) | [Artículo Original](https://web.dev/emscripting-a-c-library/)

![Panel de red de DevTools y la imagen generada](result.jpg)
