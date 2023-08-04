---
title: WebAssembly Concepts
slug: WebAssembly/Concepts
---

{{WebAssemblySidebar}}

En este artículo se explica los conceptos detrás de cómo funciona WebAssembly, sus objetivos, los problemas que resuelve, y como se ejecuta dentro del motor de renderizado de un navegador.

## ¿Qué es WebAssembly?

WebAssembly es un nuevo tipo de código que puede ser ejecutado en navegadores modernos, y provee nuevas funcionalidades y mejoras en rendimiento. No está pensado para ser ser escrito a mano, si no que está diseñado par ser un objeto final de compilación para lenguajes de bajo nivel como C, C++, Rust, etc.

Esto tiene enormes implicaciones para la plataforma web — presenta un medio para ejecutar código escrito en múltiples lenguajes en la web, haciendo que una aplicación web, se ejecute casi a la misma velocidad de código nativo, algo que previamente se podía hacer.

Lo que es más, no es necesario conocer como se crea código WebAssembly para usar sus ventajas. Los módulos de WebAssembly pueden importase en una aplicación web (o Node.js), exponiendo funciones de WebAssembly para ser usadas mediante Javascript. Los entornos de Javascript pueden usar WebAssembly para obtener grandes mejoras de rendimiento y nuevas funcionalidades y ser fácilmente disponibles por los desarrolladores Web.

## Objetivos de WebAssembly

WebAssembly ha sido creado por como un estándar abierto dentro de [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) con los siguientes objetivos:

- Ser rápido, eficiente y portable — el código WebAssembly puede ejecutarse se puede ejecutar a una velocidad casi nativa en diferentes plataformas aprovechando las [capacidades comunes del hardware](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
- Ser legible y depurable — WebAssembly es un lenguaje ensamblador de bajo nivel, pero tiene un formato de texto que puede ser entendido por las personas (la especificación aún se está terminando) lo cual permite al código ser escrito, visualizado y depurado a mano.
- Mantenerse seguro — WebAssembly se especifica para ser ejecutado de manera segura en un entorno de ejecución de espacio aislado (sandbox).Como otros códigos web, reforzará el propio origen del navegador así como sus políticas de seguridad.
- No quebrantar a la red — WebAssembly está diseñado de tal forma que se lleve bien con otras tecnologías web y mantenga compatibilidad con versiones anteriores.

> **Nota:** WebAssembly tendrá también usos fuera de la red y de los ambientes JavaScript (vea [Incrustaciones no-web](http://webassembly.org/docs/non-web/)).

## ¿Cómo se inserta WebAssembly dentro de la plataforma web?

La plataforma web puede pensar como constituida de dos partes:

- Una máquina virtual (VM por sus siglas en inglés) que ejecuta el código de la aplicación Web p.e. el código JavaScript que potencia sus aplicaciones.
- Un conjunto de interfaces Web ([Web APIs](/es/docs/Web/API)) que la aplicación Web puede llamar para controlar la funcionalidad del navegador/dispositivo web y hace que las cosas sucedan ([DOM](/es/docs/Web/API/Document_Object_Model), [CSSOM](/es/docs/Web/API/CSS_Object_Model), [WebGL](/es/docs/Web/API/WebGL_API), [IndexedDB](/es/docs/Web/API/IndexedDB_API), [Web Audio API](/es/docs/Web/API/Web_Audio_API), etc.).

Históricamente, la máquina virtual ha sido capaz de cargar solamente JavaScript. Esto nos ha funcionado bien debido a que JavaScript es suficientemente capaz para resolver la mayor parte de los problemas que las personas tienen en la Web hoy día. Sin embargo hemos llegado a tener problemas de rendimiento cuando se trata de usar JavaScript para casos de uso más intensos como juegos 3D, Realidad Virtual y Aumentada, visión por computadora, edición de vídeo/imágenes y algunos otros dominios de cosas que demandan rendimiento como el de código nativo (vea [Casos de Uso WebAssembly](http://webassembly.org/docs/use-cases/) para más ideas).

Adicionalmente, el costo de descargar, analizar gramaticalmente (parsing) y compilar aplicaciones JavaScript muy grandes resulta prohibitivo. Plataformas en móviles (celulares y otros) y otras de recursos limitados (tabletas, etc.) pueden amplificar más estos cuellos de botella del desempeño.

WebAssembly es un lenguaje distinto a JavaScript, aunque no se pretende sea un reemplazo. En lugar de ello, se diseña para complementar y trabajar en conjunto con JavaScript, permitiendo a los desarrolladores web tener una ventaja sobre las fortalezas de ambos lenguajes:

- JavaScript es un lenguaje de alto nivel, flexible y suficientemente expresivo para desarrollar aplicaciones web. Tiene muchas ventajas - es tipado dinámicamente, no necesita el paso de compilarlo, y tiene un gran ecosistema que lo provee de entornos, librerías y otras herramientas.
- WebAssembly es un lenguaje de bajo nivel similar a ensamblador, con un binario de un tamaño compacto que se ejecuta con una rendimiento casi nativo, y provee a lenguajes con esquemas de memoria de bajo nivel como C++ y Rust, con un objeto de compilación que también pueden ejecutar en la web. (Notar que WebAssembly también tiene el objetivo de soportar a lenguajes de alto nivel con recogedor de basura (garbage-collector) en el futuro).

Con la llegada de WebAssembly en los navegadores, la máquina virtual que se mencionó anteriormente, cargará y ejecutará dos tipos de código - JavaScript y WebAssembly.

Los distintos tipos de código pueden llamarse uno al otro según necesiten. [WebAssembly JavaScript API](/es/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) envuelve código WebAssembly exportado con funciones JavaScript, que pueden ser llamadas normalmente, y WebAssembly puede importar y llamar síncronamente funciones JavaScript. De hecho la unidad básica de código en WebAssembly se llama módulo y los módulos en WebAssembly son simétricos de muchas maneras a los módulos de ES2015.

### Conceptos clave en WebAssembly

Hay varios conceptos claves que son necesarios para entender cómo se ejecuta WebAssembly en un navegador. Todos estos conceptos están reflejados uno a uno en [WebAssembly JavaScript API](/es/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly).

- **Módulo**: Representa un binario de WebAssembly que ha sido compilado por el navegador en un ejecutable de código máquina. Un módulo no tiene estado, y es solo eso, como un [Blob](/es/docs/Web/API/Blob), puede ser explícitamente compartido entre ventanas y workers (por medio de [`postMessage()`](/es/docs/Web/API/MessagePort/postMessage)). Un módulo declara 'imports' y 'exports' igual que un módulo ES2015module.
- **Memoria**: Un conjunto de tamaño variable que contiene una serie lineal y continua de bytes, que puede ser leído o escrito por las instrucciones de memoria de bajo nivel de WebAssembly.
- **Tabla**: Una lista tipada de tamaño variable que contiene referencias (por ejemplo a funciones) que no podrían ser guardadas como bytes en memoria (por razones de seguridad o portabilidad).
- **Instancia**: Un modulo junto con todos los estados que use durante la ejecución e incluyendo la memoria, tabla y un conjunto de valores importados. Una instancia es como un módulo ES2015 que ha sido cargado en un global particular con un conjunto particular de 'imports'.

La API de JavaScript provee a los desarrolladores con la habilidad de crear módulos, memoria, tablas e instancias. Dada una instancia de WebAssembly, el código de JavaScript puede hacer llamadas síncronas a sus 'exports', que son expuestos, como funciones de JavaScript normal. Funciones de JavaScript arbitrarias pueden ser llamadas síncronamente también desde el código de WebAssembly, pasando dichas funciones de JavaScript como 'imports' a la instancia de WebAssembly.

Dado que JavaScript tiene un control completo sobre como el código de WebAssembly es descargado, compilado y ejecutado, los desarrolladores de JavaScript pueden pensar sobre WebAssembly como simplemente una funcionalidad de JavaScript para generar funciones de alto rendimiento.

En el futuro, los módulos de WebAssembly se podrán cargar igual que los módulos de [ES2015](https://github.com/WebAssembly/proposals/issues/12) (usando `<script type='module'>`), implicando que JavaScript será capaz de ir a buscar, compilar e importar un módulo de WebAssembly tan fácilmente como un módulo de ES2015.

## ¿Cómo usar WebAssembly en mi aplicación?

Previamente se describieron las primitivas que WebAssembly añade a la plataforma Web: un formato binario para el código y APIs para cargar y ejecutar este código binario. Ahora se describirá cómo usar estas primitivas en la práctica.

El ecosistema de WebAssembly está en sus comienzos; sin duda más herramientas parecerán en un futuro. Ahora mismo hay cuatro puntos principales donde comenzar:

- Portar una aplicación C/C++ con [Emscripten](/es/docs/Mozilla/Projects/Emscripten).
- Escribir o generar WebAssembly directamente a nivel de ensamblador.
- Escribir una aplicación en Rust y generar su salida como WebAssembly.
- Usar [AssemblyScript](https://assemblyscript.org/) que se parece a TypeScript y se compila a un binario de WebAssembly.

Detallemos más cada una de estas opciones:

### Portando desde C/C++

Dos de las muchas opciones para crear código WASM son o un ensamblador WASM en línea, o [Emscripten](/es/docs/Mozilla/Projects/Emscripten). Hay varias opciones para un ensamblador WASM en línea, como pueden ser:

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Estos son puntos adecuados donde se puede empezar a plantearse desde dónde empezar, pero que pueden no tener algunas optimizaciones para Emscripten.

La herramienta Emscripten está disponible para casi cualquier tipo de código C/C++ y compila en un módulo .wasm, además del código "pegamento" necesario en JavaScript, necesario para cargar y ejecutar el módulo, y un documento HTML donde se muestre el resultado del código.

![](emscripten-diagram.png)

Resumiendo, el proceso es el que sigue:

1. Emscripten primero compila C/C++ en clang+LLVM — un compilador de código abierto, de C/C++, que por ejemplo se distribuye como parte de XCode en OSX.
2. Emscripten transforma el resultado de la compilación de clang+LLVM en un binario .wasm.
3. Por sí mismo, WebAssembly no puede acceder directamente a el DOM; únicamente puede llamar a JavaScript, y pasarle datos enteros o de coma flotante como datos. Luego, para acceder a cualquier API Web, WebAssembly necesita llamar a JavaScript, que entonces hará lla llamada a la API Web. Emscripten por lo tanto crea el documento HTML y el código "pegamento" en JavaScritp necesario para conseguir esto.

> **Nota:** There are future plans to [allow WebAssembly to call Web APIs directly](https://github.com/WebAssembly/gc/blob/master/README.md).

The JavaScript glue code is not as simple as you might imagine. For a start, Emscripten implements popular C/C++ libraries like [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL), and parts of [POSIX](https://en.wikipedia.org/wiki/POSIX). These libraries are implemented in terms of Web APIs and thus each one requires some JavaScript glue code to connect WebAssembly to the underlying Web API.

So part of the glue code is implementing the functionality of each respective library used by the C/C++ code. The glue code also contains the logic for calling the above-mentioned WebAssembly JavaScript APIs to fetch, load and run the .wasm file.

The generated HTML document loads the JavaScript glue file and writes stdout to a {{htmlelement("textarea")}}. If the application uses OpenGL, the HTML also contains a {{htmlelement("canvas")}} element that is used as the rendering target. It's very easy to modify the Emscripten output and turn it into whatever web app you require.

You can find full documentation on Emscripten at [emscripten.org](https://emscripten.org), and a guide to implementing the toolchain and compiling your own C/C++ app across to wasm at [Compiling from C/C++ to WebAssembly](/es/docs/WebAssembly/C_to_wasm).

### Writing WebAssembly directly

Do you want to build your own compiler, or your own tools, or make a JavaScript library that generates WebAssembly at runtime?

In the same fashion as physical assembly languages, the WebAssembly binary format has a text representation — the two have a 1:1 correspondence. You can write or generate this format by hand and then convert it into the binary format with any of several [WebAssemby text-to-binary tools](https://webassembly.org/getting-started/advanced-tools/).

For a simple guide on how to do this, see our [Converting WebAssembly text format to wasm](/es/docs/WebAssembly/Text_format_to_wasm) article.

### Writing Rust Targeting WebAssembly

It is also possible to write Rust code and compile over to WebAssembly, thanks to the tireless work of the Rust WebAssembly Working Group. You can get started with installing the necessary toolchain, compiling a sample Rust program to a WebAssembly npm package, and using that in a sample web app, over at our [Compiling from Rust to WebAssembly](/es/docs/WebAssembly/Rust_to_wasm) article.

### Using AssemblyScript

For web developers who want to try WebAssembly without needing to learn the details of C or Rust, AssemblyScript will be the best option. It generates a small bundle and it's performance is slightly slower compared to C or Rust. You can check its documentation on <https://assemblyscript.org/>.

## Summary

This article has given you an explanation of what WebAssembly is, why it is so useful, how it fits into the web, and how you can make use of it.

## See also

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Loading and running WebAssembly code](/es/docs/WebAssembly/Loading_and_running) — find out how to load your own WebAssembly module into a web page.
- [Using the WebAssembly JavaScript API](/es/docs/WebAssembly/Using_the_JavaScript_API) — find out how to use the other major features of the WebAssembly JavaScript API.
