---
title: WebAssembly
slug: WebAssembly
tags:
  - Landing
  - Aterrizaje
  - WebAssembly
  - wasm
browser-compat: javascript.builtins.WebAssembly
---

{{WebAssemblySidebar}}

WebAssembly es un nuevo tipo de código que se puede ejecutar en navegadores modernos — es un lenguaje de bajo nivel, similar al lenguaje ensamblador, con un formato binario compacto que se ejecuta con rendimiento casi nativo y provee un objetivo de compilación para lenguajes como C/C++ y Rust que les permite correr en la web. También está diseñado para correr a la par de JavaScript, permitiendo que ambos trabajen juntos.

## En pocas palabras

WebAssembly tiene grandes implicaciones para la plataforma web — provee una forma de correr código escrito en múltiples lenguajes en la web a una velocidad casi nativa, con aplicaciones cliente corriendo en la web como anteriormente no lo podrían haber hecho.

WebAssembly esta diseñado para complementar y correr a la par de JavaScript — usando las APIs  JavaScript de WebAssembly, puedes cargar módulos de WebAssembly en una aplicación JavaScript y compartir funcionalidad entre ambos. Esto te permite aprovechar el rendimiento y poder de WebAssembly y la expresividad y flexibilidad de JavaScript en las mismas aplicaciones, incluso si no sabes cómo escribir código WebAssembly.

Y lo mejor es que se está desarrollando como un estándar web a través del grupo de trabajo WebAssembly del W3C y su grupo comunitario con la participación activa de todos los principales fabricantes de navegadores.

## Guías

- [Conceptos WebAssembly](/es/docs/WebAssembly/Concepts)
  - : Comienza leyendo los conceptos de alto nivel detrás de WebAssembly — qué es, por qué es tan útil, cómo encaja en la plataforma web (entre otras cosas) y cómo usarlo.
- [Compilar un nuevo módulo de C/C++ a WebAssembly](/en-US/docs/WebAssembly/C_to_wasm)
  - : Al escribir código en C/C++, lo puedes compilar a `.wasm` usando una herramienta como [Emscripten](https://emscripten.org/). Veamos cómo funciona.
- : [Compilar un módulo existente de C a WebAssembly](en-US/docs/WebAssembly/existing_C_to_wasm)
  - : Uno de los principales casos de uso para WebAssembly es tomar las librerías existentes del ecosistema C y permitir que los desarrolladores las usen en la web.
- [Compilar de Rust a WebAssembly](/en-US/docs/WebAssembly/Rust_to_wasm)
  - : Si has escrito algo en Rust, ¡lo puedes compilar a WebAssembly! Este tutorial te enseña todo lo que necesitas saber para compilar un proyecto de Rust a `.wasm` y usarlo en una aplicación web existente.
- [Cargar y ejecutar código WebAssembly](/en-US/docs/WebAssembly/Loading_and_running)
  - : Una vez que tengas un `.wasm`, este artículo cubre cómo recuperarlo, compilarlo e instanciarlo, combinando la [API JavaScript de WebAssembly](/es/docs/WebAssembly/JavaScript_interface) con las APIs [Fetch](/es/docs/Web/API/Fetch_API) o [XHR](/es/docs/Web/API/XMLHttpRequest).
- [Usar la API JavaScript de WebAssembly](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
  - : Una vez cargado el módulo `.wasm`, querrás usarlo. En este artículo te mostramos cómo usar WebAssembly mediante la API JavaScript de WebAssembly.
- [Funciones exportadas de WebAssembly](/en-US/docs/WebAssembly/Exported_functions)
  - : Las funciones exportadas de WebAssembly son el reflejo en JavaScript de las funciones de WebAssembly que te permiten llamar código WebAssembly desde JavaScript. Este artículo las describe.
- [Entender el formato de texto WebAssembly](/en-US/docs/WebAssembly/Understanding_the_text_format)
  - : Este artículo explica el formato de texto `wasm`. Esta es la representación textual de bajo nivel de un módulo `.wasm`, mostrada en las herramientas de desarrollador del navegador al depurar.
- [Convertir el formato de texto WebAssembly a `wasm`](/en-US/docs/WebAssembly/Text_format_to_wasm)
  - : Este artículo provee una guía para convertir un módulo WebAssembly escrito en su formato de texto a un binario `.wasm`.

## Referencia de la API

- [Control de flujo WebAssembly](/en-US/docs/WebAssembly/Reference/Control_flow)
  - : Este objeto sirve como espacio de nombres para toda funcionalidad relacionada a WebAssembly.
- [Interfaz JavaScript de WebAssembly ](/es/docs/WebAssembly/JavaScript_interface)
  - : Este objeto actúa como el espacio de nombres para todas las funciones relacionadas con WebAssembly.
- [`WebAssembly.Global()`](/en-US/docs/WebAssembly/JavaScript_interface/Global)
  - : El objeto WebAssembly.Global representa una variable de la instancia global, accesible desde JavaScript e importable/exportable a través de una o más instancias de [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module). Esto permite el enlace dinámico de varios módulos.
- [`WebAssembly.Module()`](/en-US/docs/WebAssembly/JavaScript_interface/Module)
  - : El objeto `WebAssembly.Module` contiene código WebAssembly sin estado que ya ha compilado el navegador y se puede [compartir con *workers*](/en-US/docs/Web/API/Worker/postMessage) e instanciar varias veces.
- [`WebAssembly.Instance()`](/en-US/docs/WebAssembly/JavaScript_interface/Instance)
  - : Un objeto `WebAssembly.Instance` es una instancia ejecutable con estado de un `Module`. Los objetos `Instance` contienen todas las [funciones exportadas de WebAssembly](/en-US/docs/WebAssembly/Exported_functions) que permiten llamar a código WebAssembly desde JavaScript.
- [`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile)
  - : La función `WebAssembly.compile()` compila el código binario de WebAssembly en un objeto `WebAssembly.Module`.
- [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming)
  - : La función `WebAssembly.compileStreaming()` compila un `WebAssembly.Module` directamente desde una fuente subyacente transmitida.
- [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate)
  - : La función `WebAssembly.instantiate()` te permite compilar e instanciar código WebAssembly.
- [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming)
  - : La función `WebAssembly.instantiateStreaming()` es la API principal para compilar e instanciar código WebAssembly, devolviendo tanto un `Module` como su primera `Instance`.
- [`WebAssembly.validate()`](/en-US/docs/WebAssembly/JavaScript_interface/validate)
  - : La función `WebAssembly.validate()` valida un determinado arreglo tipado de código WebAssembly binario.
- [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory)
  - : Un objeto `WebAssembly.Memory` es un {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} redimensionable que contiene los bytes sin procesar de la memoria a la que accede una `Instance`.
- [`WebAssembly.Table()`](/en-US/docs/WebAssembly/JavaScript_interface/Table)
  - : Un objeto `WebAssembly.Table` es un arreglo de valores opacos de tamaño variable, como referencias de funciones, a las que se accede mediante una `Instance`.
- [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/JavaScript_interface/Tag)
  - : El objeto `WebAssembly.Tag` define un tipo de excepción WebAssembly que se puede lanzar hacia/desde el código WebAssembly.
- [`WebAssembly.Exception()`](/en-US/docs/WebAssembly/JavaScript_interface/Exception)
  - : El objeto `WebAssembly.Exception` representa una excepción en el entorno de ejecución lanzada desde WebAssembly a JavaScript, o lanzada desde JavaScript a un controlador de excepciones WebAssembly.
- [`WebAssembly.CompileError()`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError)
  - : Crea un nuevo objeto `CompileError` de WebAssembly.
- [`WebAssembly.LinkError()`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError)
  - : Crea un nuevo objeto `LinkError` de WebAssembly.
- [`WebAssembly.RuntimeError()`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError)
  - : Crea un nuevo objeto `RuntimeError` de WebAssembly.

## Ejemplos

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Consulta nuestro repositorio [webassembly-examples](https://github.com/mdn/webassembly-examples/) para ver otros ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ve también

- [La investigación de WebAssembly en Mozilla](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [artículos del blog WebAssembly en Mozilla Hacks](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/emscripting-a-c-library/)
