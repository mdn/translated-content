---
title: WebAssembly
slug: WebAssembly
---

{{WebAssemblySidebar}}

WebAssembly es un nuevo tipo de código que puede ser ejecutado en navegadores modernos — es un lenguaje de bajo nivel, similar al lenguaje ensamblador, con un formato binario compacto que se ejecuta con rendimiento casi nativo y provee un objetivo de compilación para lenguajes como C/C++ y Rust que les permite correr en la web. También está diseñado para correr a la par de JavaScript, permitiendo que ambos trabajen juntos.

## En pocas palabras

WebAssembly tiene grandes implicaciones para la plataforma web — provee una forma de correr código escrito en múltiples lenguajes en la web a una velocidad casi nativa, con aplicaciones cliente corriendo en la web que anteriormente no podrían haberlo hecho.

WebAssembly esta diseñado para complementar y correr a la par de JavaScript — usando las APIs WebAssembly de JavaScript, puedes cargar módulos de WebAssembly en una aplicación JavaScript y compartir funcionalidad entre ambos. Esto te permite aprovechar el rendimiento y poder de WebAssembly y la expresividad y flexibilidad de JavaScript en las mismas aplicaciones, incluso si no sabes cómo escribir código WebAssembly.

Y lo mejor es que está siendo desarrollado como un estándar web a través del [grupo de trabajo de WebAssembly del W3C](https://www.w3.org/wasm/) y su [grupo comunitario](https://www.w3.org/community/webassembly/) con las participación activa de todos los principales fabricantes de navegadores.

## Guías

- [Conceptos de WebAssembly](/es/docs/WebAssembly/Concepts)
  - : Empieza leyendo los conceptos de alto nivel detrás de WebAssembly — qué es, por qué es tan útil, cómo encaja en la plataforma web (y más allá), y cómo usarlo.
- [Compilar un nuevo módulo de C/C++ a WebAssembly](/es/docs/WebAssembly/C_to_wasm)
  - : Al escribir código en C/C++, puedes compilarlo a .wasm usando una herramienta como [Emscripten](/es/docs/Mozilla/Projects/Emscripten/). Veamos cómo funciona.
- [Compilar un módulo existente de C a WebAssembly](/es/docs/WebAssembly/existing_C_to_wasm)
  - : Uno de los principales casos de uso para WebAssembly es tomar las librerías existentes del ecosistema de C y permitir que los desarrolladores los usen en la web.
- [Compilar de Rust a WebAssembly](/es/docs/WebAssembly/rust_to_wasm)
  - : Si has escrito algo en Rust, ¡puedes compilarlo a WebAssembly! Este tutorial te enseña todo lo que necesitas saber para compilar un proyecto de Rust a wasm y usarlo en una aplicación web existente.
- [Cargar y ejecutar código WebAssembly](/es/docs/WebAssembly/Loading_and_running)
  - : Una vez que tengas un .wasm, este artículo cubre cómo recuperarlo, compilarlo e instanciarlo, combinando la API de [WebAssembly de JavaScript](/es/docs/WebAssembly/JavaScript_interface) con las APIs [Fetch](/es/docs/Web/API/Fetch_API) o [XHR](/es/docs/Web/API/XMLHttpRequest).
- [Usar la API WebAssembly de JavaScript](/es/docs/WebAssembly/Using_the_JavaScript_API)
  - : Una vez cargado el módulo .wasm, querrás usarlo. En este artículo te mostramos cómo usar WebAssembly mediante la API WebAssembly de JavaScript.
- [Funciones exportadas de WebAssembly](/es/docs/WebAssembly/Exported_functions)
  - : Las funciones exportadas de WebAssembly son el reflejo en JavaScript de las funciones de WebAssembly que te permiten llamar código WebAssembly desde JavaScript. Este artículo las describe.
- [Entendiendo el formato de texto WebAssembly](/es/docs/WebAssembly/Understanding_the_text_format)
  - : Este artículo explica el formato de texto wasm. Esta es la representación textual de bajo nivel de un módulo .wasm, mostrada en las herramientas de desarrollador del navegador al depurar.
- [Convertir el formato de texto WebAssembly a wasm](/es/docs/WebAssembly/Text_format_to_wasm)
  - : Este artículo provee una guía para convertir un módulo de WebAssembly escrito en su formato de texto a un binario .wasm.

## Referencia de la API

- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : Este objeto sirve como espacio de nombres para toda funcionalidad relacionada a WebAssembly.
- {{jsxref("Global_objects/WebAssembly/Global", "WebAssembly.Global()")}}
  - : El objeto `WebAssembly.Global` representa una instancia variable global, accesible desde JavaScript e importable/exportable a través de una o más instancias de {{jsxref("WebAssembly.Module")}}. Esto permite el enlace dinámico de varios módulos.
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : El objeto `WebAssembly.Module` contiene código WebAssembly sin estado que ha sido ya compilado por el navegador y puede ser [compartido con workers](/es/docs/Web/API/Worker/postMessage) e instanciado varias veces.
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance()")}}
  - : Un objeto `WebAssembly.Instance` es una instancia ejecutable y con estado de un `Module`. Los objetos `Instance` contienen todas las [funciones exportadas de WebAssembly](/es/docs/WebAssembly/Exported_functions) que permiten llamar a código WebAssembly desde JavaScript.
- {{jsxref("Global_objects/WebAssembly/instantiateStreaming", "WebAssembly.instantiateStreaming()")}}
  - : La función `WebAssembly.instantiateStreaming()` es la principal API para compilar e instanciar código WebAssembly, retornando tanto un `Module` como su primera `Instance`.
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : Un objeto `WebAssembly.Memory` es un {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} redimensionable que contiene los bytes de memoria accedidos por una `Instance`.
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : Un objeto `WebAssembly.Table` es un arreglo tipado redimensionable de valores opacos, como referencias a funciones, que son accedidos por una `Instance`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Crea un nuevo objeto `CompileError` de WebAssembly.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Crea un nuevo objeto `LinkError` de WebAssembly.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Crea un nuevo objeto `RuntimeError` de WebAssembly.

## Ejemplos

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Consulta nuestro repositorio [webassembly-examples](https://github.com/mdn/webassembly-examples/) para ver otros ejemplos.

## Especificaciones

{{Specifications}}

## Ver también

- [WebAssembly en Mozilla Research](https://research.mozilla.org/webassembly/)
- [webassembly.org](http://webassembly.org/)
- [Artículos de WebAssembly en el blog Mozilla Hacks](https://hacks.mozilla.org/category/webassembly/)
- [Grupo comunitario de WebAssembly del W3C](https://www.w3.org/community/webassembly/)
- [Cabecera HTTP Large-Allocation](/es/docs/Web/HTTP/Headers/Large-Allocation)
- [Compilar una librería de C a Wasm](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)
