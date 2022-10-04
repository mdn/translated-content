---
title: Compilar un nuevo módulo C/C++ a WebAssembly
slug: WebAssembly/C_to_wasm
tags:
  - C
  - C++
  - Compiling
  - Compilar
  - Emscripten
  - WebAssembly
  - wasm
---

{{WebAssemblySidebar}}

Cuando hayas escrito un nuevo módulo de código en un lenguaje como C/C++, lo puedes compilar en WebAssembly usando una herramienta como [Emscripten](https://emscripten.org/). Veamos cómo funciona.

## Configurar el entorno Emscripten

Primero, configuremos el entorno de desarrollo requerido.

### Requisitos previos

Obtén el SDK de Emscripten siguiendo estas instrucciones: <https://emscripten.org/docs/getting_started/downloads.html>

## Compilar un ejemplo

Con el entorno configurado, veamos cómo usarlo para compilar un ejemplo de C en Emscripten. Hay una serie de opciones disponibles al compilar con Emscripten, pero los dos principales escenarios que cubriremos son:

- Compilar a `wasm` y crear HTML para ejecutar nuestro código, además de todo el código "pegamento" de JavaScript necesario para ejecutar `wasm` en el entorno web.
- Compilar a `wasm` y simplemente crear el JavaScript.

Veremos ambos a continuación.

### Crear el HTML y JavaScript

Este es el caso más simple que veremos, en el que obtienes emscripten para generar todo lo que necesitas para ejecutar tu código, como WebAssembly, en el navegador.

1. Primero necesitamos un ejemplo para compilar. Toma una copia del siguiente ejemplo simple en C y guárdalo en un archivo llamado `hello.c` en un nuevo directorio en tu disco local:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hola Mundo\n");
       return 0;
   }
   ```

2. Ahora, usando la ventana de terminal que usaste para ingresar al entorno del compilador Emscripten, navega hasta el mismo directorio que tu archivo `hello.c` y ejecuta el siguiente comando:

   ```bash
   emcc hello.c -o hello.html
   ```

Las opciones que hemos pasado con el comando son las siguientes:

- `-o hello.html` — Especifica que queremos que Emscripten genere una página HTML para ejecutar nuestro código (y un nombre de archivo a usar), así como el módulo `wasm` y el código "pegamento" de JavaScript para compilar e instanciar el `wasm` para que se pueda utilizar en el entorno web.

En este punto en tu directorio fuente deberías tener:

- El código del módulo binario `wasm` (`hello.wasm`)
- Un archivo JavaScript que contiene código de conexión para traducir entre las funciones nativas de C y JavaScript/`wasm` (`hello.js`)
- Un archivo HTML para cargar, compilar e instanciar tu código `wasm` y mostrar su salida en el navegador (`hello.html`)

### Ejecutar tu ejemplo

Ahora todo lo que queda es que cargues el `hello.html` resultante en un navegador que admita WebAssembly. Está habilitado de manera predeterminada desde Firefox 52, Chrome 57, Edge 57, Opera 44.

> **Nota:** Si intentas abrir un archivo HTML generado (`hello.html`) directamente desde tu disco duro local (por ejemplo, `file://tu_ruta/a/hello.html`), terminarás con un mensaje de error similar a _`tanto la obtención asincrónica como la sincronización del wasm falló`._ Necesitas ejecutar tu archivo HTML a través de un servidor HTTP (`http://`) — consulta [¿Cómo se configura un servidor de prueba local?](/es/docs/Learn/Common_questions/set_up_a_local_testing_server) para obtener más información.

Si todo funcionó según lo planeado, deberías ver el resultado "Hola mundo" en la consola Emscripten que aparece en la página web y en la consola JavaScript de tu navegador. ¡Felicitaciones!, ¡acabas de compilar C a WebAssembly y ejecutarlo en tu navegador!
![imagen](helloworld.png)

### Usar una plantilla HTML personalizada

A veces querrás utilizar una plantilla HTML personalizada. Veamos cómo lo podemos hacer.

1. En primer lugar, guarda el siguiente código C en un archivo llamado `hello2.c`, en un nuevo directorio:

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hola Mundo\n");
       return 0;
   }
   ```

2. Busca el archivo `shell_minimal.html` en tu repositorio emsdk. Cópialo en un subdirectorio llamado `html_template` dentro de tu nuevo directorio anterior.
3. Ahora navega a tu nuevo directorio (una vez más, en la ventana de terminal del entorno del compilador de Emscripten) y ejecuta el siguiente comando:

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   Las opciones que hemos pasado son ligeramente diferentes esta vez:

   - Hemos especificado `-o hello2.html`, lo cual significa que el compilador seguirá generando el código "pegamento" de JavaScript y `.html`.
   - También especificamos `--shell-file html_template/shell_minimal.html` — esto proporciona la ruta a la plantilla HTML que deseas usar para crear el HTML con el que ejecutarás tu ejemplo.

4. Ahora ejecutemos este ejemplo. El comando anterior habrá generado `hello2.html`, que tendrá casi el mismo contenido que la plantilla con un poco de código agregado para cargar el `wasm` generado, ejecutarlo, etc. Ábrelo en tu navegador y verás casi el mismo resultado que el último ejemplo.

> **Nota:** Puedes especificar la salida solo del archivo "pegamento" de JavaScript\* en lugar del HTML completo especificando un archivo .js en lugar de un archivo HTML en el indicador `-o`, p.ej. `emcc -o hola2.js hola2.c -O3`. Luego, podrías crear tu HTML personalizado completamente desde cero, aunque este es un enfoque avanzado; por lo general, es más fácil usar la plantilla HTML provista.
>
> - Emscripten requiere una gran variedad de código "pegamento" de JavaScript para manejar la asignación de memoria, las fugas de memoria y una serie de otros problemas

### Llamar a una función personalizada definida en C

Si tienes una función definida en tu código C que deseas llamar según sea necesario desde JavaScript, lo puedes hacer usando la función `ccall()` de Emscripten y la declaración `EMSCRIPTEN_KEEPALIVE` (que agrega tus funciones a la lista de funciones exportadas (consulta [¿Por qué las funciones en mi código fuente C/C++ desaparecen cuando compilo en JavaScript y/o no obtengo funciones para procesar?](https://emscripten.org/docs/getting_started/FAQ.html#why- do-functions-in-my-c-c-source-code-vanish-when-i-compilo-to-javascript-and-or-i-get-no-functions-to-process))). Veamos cómo funciona esto.

1. Para empezar, guarda el siguiente código como `hello3.c` en un nuevo directorio:

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
       printf("Hola Mundo\n");
       return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }
   ```

   De forma predeterminada, el código generado por Emscripten siempre llama a la función `main()` y otras funciones se eliminan como código inactivo. Poner `EMSCRIPTEN_KEEPALIVE` antes del nombre de una función evita que esto suceda. También necesitas importar la biblioteca `emscripten.h` para usar `EMSCRIPTEN_KEEPALIVE`.

   > **Nota:** Estamos incluyendo los bloques `#ifdef` para que si intentas incluir esto en el código C++, el ejemplo seguirá funcionando. Debido a las reglas de manipulación de nombres de C frente a C++, de lo contrario esto se rompería, pero aquí lo estamos configurando para que lo trate como una función C externa si estás usando C++.

2. Ahora agrega `html_template/shell_minimal.html` con `\{\{{ SCRIPT }}}` como contenido en este nuevo directorio también, solo por conveniencia (obviamente, colocarías esto en un lugar central en tu entorno de desarrollo real).
3. Ahora ejecutemos el paso de compilación nuevamente. Desde dentro de tu directorio más reciente (y dentro de la ventana de terminal del entorno del compilador Emscripten), compila tu código C con el siguiente comando. (Ten en cuenta que necesitamos compilar con `NO_EXIT_RUNTIME`, este es necesario porque, de lo contrario, cuando `main()` sale, el entorno de ejecución se cerraría, necesario para la emulación adecuada de C, por ejemplo, se llama a `atexits`, y no sería válido para llamar al código compilado).

   ```bash
   emcc -o hello3.html hello3.c -O3 --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. Si vuelves a cargar el ejemplo en tu navegador, ¡verás lo mismo que antes!
5. Ahora necesitamos ejecutar nuestra nueva función `myFunction()` desde JavaScript. En primer lugar, abre tu archivo `hello3.html` en un editor de texto.
6. Agrega un elemento {{HTMLElement("button")}} como se muestra a continuación, justo encima de la primera etiqueta de apertura `<script type='text/javascript'>`.

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. Ahora, agrega el siguiente código al final del primer elemento {{HTMLElement("script")}}:

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // nombre de la función C
       null, // tipo de retorno
       null, // tipo de argumentos
       null // argumentos
     );
   });
   ```

Esto ilustra cómo se usa `ccall()` para llamar a la función exportada.

## Ve también

- [emscripten.org](https://emscripten.org/): obtén más información sobre Emscripten y su gran variedad de opciones.
- [Llamar a funciones C compiladas desde JavaScript usando ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using- ccall-cwrap)
- [¿Por qué las funciones en mi código fuente C/C++ desaparecen cuando compilo en JavaScript y/o no obtengo funciones para procesar?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [La investigación de WebAssembly en Mozilla](https://research.mozilla.org/)
- [Compilar un módulo C existente a WebAssembly](/en-US/docs/WebAssembly/existing_C_to_wasm)
