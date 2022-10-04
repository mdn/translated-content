---
title: Conceptos WebAssembly
slug: WebAssembly/Concepts
tags:
  - C
  - C++
  - Emscripten
  - JavaScript
  - WebAssembly
  - AssemblyScript
  - conceptos
  - rust
  - formato de texto
  - text format
  - web platform
  - plataforma web
---

{{WebAssemblySidebar}}

En este artículo se explican los conceptos detrás de cómo funciona WebAssembly, sus objetivos, los problemas que resuelve, y como se ejecuta dentro del motor de renderizado de un navegador.

## ¿Qué es WebAssembly?

WebAssembly es un nuevo tipo de código que se puede ejecutar en navegadores modernos, y provee nuevas funcionalidades y mejoras en rendimiento. No está pensado para escribirse a mano, si no que está diseñado para ser un objeto de compilación final para lenguajes de bajo nivel como C, C++, Rust, etc.

Esto tiene enormes implicaciones para la plataforma web — presenta un medio para ejecutar código escrito en múltiples lenguajes en la web, haciendo que una aplicación web, se ejecute casi a la misma velocidad de código nativo, algo que previamente no se podía hacer.

Lo que es más, no es necesario conocer como se crea código WebAssembly para aprovechar sus ventajas. Los módulos de WebAssembly se pueden importar en una aplicación web (o Node.js), exponiendo funciones de WebAssembly para ser usadas mediante JavaScript. Los entornos de JavaScript pueden usar WebAssembly para obtener grandes mejoras de rendimiento y nuevas funcionalidades y estar fácilmente disponibles para los desarrolladores Web.

## Objetivos de WebAssembly

WebAssembly ha sido creado como un estándar abierto dentro de [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) con los siguientes objetivos:

- Ser rápido, eficiente y portable — el código WebAssembly se puede ejecutar a una velocidad casi nativa en diferentes plataformas aprovechando las [capacidades comunes del hardware](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
- Ser legible y depurable — WebAssembly es un lenguaje ensamblador de bajo nivel, pero tiene un formato de texto que las personas pueden entender (la especificación aún se está terminando) lo cual permite al código ser escrito, visualizado y depurado a mano.
- Mantenerse seguro — WebAssembly se especifica para ejecutarse de manera segura en un entorno de ejecución aislado (*sandbox*). Como otro código web, reforzará el propio origen del navegador así como sus políticas de seguridad.
- No rompe la red — WebAssembly está diseñado de tal forma que juegue bien con otras tecnologías web y mantenga compatibilidad con versiones anteriores.

> **Nota:** WebAssembly tendrá también usos fuera de la red y de los ambientes JavaScript (ve [Incrustaciones no-web](http://webassembly.org/docs/non-web/)).

## ¿Cómo se inserta WebAssembly dentro de la plataforma web?

Se puede pensar en la plataforma web como si tuviera dos partes:

- Una máquina virtual (VM por sus siglas en inglés) que ejecuta el código de la aplicación Web p.e. el código JavaScript que potencia tus aplicaciones.
- Un conjunto de ([APIs Web](/es/docs/Web/API)) que la aplicación Web puede llamar para controlar la funcionalidad del navegador/dispositivo web y hace que las cosas sucedan ([DOM](/es/docs/Web/API/Document_Object_Model), [CSSOM](/es/docs/Web/API/CSS_Object_Model), [WebGL](/es/docs/Web/API/WebGL_API), [IndexedDB](/es/docs/Web/API/IndexedDB_API), [API Web Audio](/es/docs/Web/API/Web_Audio_API), etc.).

Históricamente, la máquina virtual ha sido capaz de cargar solamente JavaScript. Esto nos ha funcionado bien debido a que JavaScript es suficientemente capaz para resolver la mayor parte de los problemas que las personas tienen en la Web hoy día. Sin embargo, hemos llegado a tener problemas de rendimiento cuando se trata de usar JavaScript para casos de uso más intenso, como juegos 3D, Realidad Virtual y Aumentada, visión por computadora, edición de vídeo/imágenes y algunos otros dominios de cosas que demandan rendimiento como el de código nativo (ve [Casos de Uso de WebAssembly](http://webassembly.org/docs/use-cases/) para más ideas).

Adicionalmente, el costo de descargar, analizar gramaticalmente (*parsing*) y compilar aplicaciones JavaScript muy grandes resulta prohibitivo. Plataformas en móviles (celulares y otros) y otras de recursos limitados (tabletas, etc.) pueden amplificar más estos cuellos de botella de rendimiento.

WebAssembly es un lenguaje distinto a JavaScript, aunque no se pretende sea un reemplazo. En lugar de ello, está diseñado para complementar y trabajar en conjunto con JavaScript, permitiendo a los desarrolladores web tener una ventaja sobre las fortalezas de ambos lenguajes:

- JavaScript es un lenguaje de alto nivel, flexible y suficientemente expresivo para desarrollar aplicaciones web. Tiene muchas ventajas — es tipado dinámicamente, no necesita el paso de compilación, y tiene un gran ecosistema que lo provee de potentes marcos, librerías y otras herramientas.
- WebAssembly es un lenguaje de bajo nivel similar a ensamblador, con un compacto formato binario que se ejecuta con rendimiento casi nativo, y provee a lenguajes con esquemas de memoria de bajo nivel como C++ y Rust, con un destino de compilación que también pueden ejecutar en la web. (Ten en cuenta que WebAssembly tiene el [objetivo de alto nivel](https://webassembly.org/docs/high-level-goals/) de admitir lenguajes con modelos de memoria recolectores de basura en el futuro).

Con la llegada de WebAssembly en los navegadores, la máquina virtual que se mencionó anteriormente, cargará y ejecutará dos tipos de código — JavaScript y WebAssembly.

Los distintos tipos de código se pueden llamar uno al otro según necesiten — la [API JavaScript de WebAssembly](/es/docs/WebAssembly/JavaScript_interface) envuelve código WebAssembly exportado con funciones JavaScript, que pueden ser llamadas normalmente, y WebAssembly puede importar y llamar sincrónicamente funciones JavaScript. De hecho la unidad básica de código en WebAssembly se llama módulo y los módulos en WebAssembly son simétricos de muchas maneras a los módulos de ES2015.

### Conceptos clave en WebAssembly

Hay varios conceptos claves que son necesarios para entender cómo se ejecuta WebAssembly en un navegador. Todos estos conceptos están reflejados uno a uno en la [API JavaScript de WebAssembly](/es/docs/WebAssembly/JavaScript_interface).

- **Módulo**: Representa un binario de WebAssembly que ha sido compilado por el navegador en código máquina ejecutable. Un módulo no tiene estado, y es solo eso, como un [Blob](/es/docs/Web/API/Blob), se puede compartir explícitamente entre ventanas y *workers* (por medio de [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage)). Un módulo declara 'imports' y 'exports' igual que un módulo ES2015module.
- **Memoria**: Un conjunto de tamaño variable que contiene una serie lineal y continua de bytes, que las instrucciones de memoria de bajo nivel de WebAssembly pueden leer y escribir.
- **Tabla**: Una lista tipada de tamaño variable que contiene referencias (por ejemplo a funciones) que no se podrían guardar como bytes en memoria (por razones de seguridad o portabilidad).
- **Instancia**: Un modulo junto con todos los estados que usó durante la ejecución e incluyendo la memoria, tabla y un conjunto de valores importados. Una instancia es como un módulo ES2015 que ha sido cargado en un global particular con un conjunto particular de `imports`.

La API de JavaScript provee a los desarrolladores con la habilidad de crear módulos, memorias, tablas e instancias. Dada una instancia de WebAssembly, el código JavaScript puede hacer llamadas síncronas a sus `exports`, que son expuestos, como funciones de JavaScript normal. Se puede llamar arbitrariamente a funciones JavaScript sincrónicamente también desde el código WebAssembly, pasando dichas funciones de JavaScript como `imports` a la instancia de WebAssembly.

Dado que JavaScript tiene un control completo sobre como se descarga, compila y ejecuta el código de WebAssembly, los desarrolladores de JavaScript pueden pensar sobre WebAssembly como simplemente una funcionalidad de JavaScript para generar funciones de alto rendimiento.

En el futuro, los módulos de WebAssembly se podrán cargar igual que los módulos de [ES2015](https://github.com/WebAssembly/proposals/issues/12) (usar `<script type='module'>`), implica que JavaScript será capaz de ir a buscar, compilar e importar un módulo de WebAssembly tan fácilmente como un módulo de ES2015.

## ¿Cómo usar WebAssembly en mi aplicación?

Previamente se describieron las primitivas que WebAssembly añade a la plataforma Web: un formato binario para el código y APIs para cargar y ejecutar este código binario. Ahora explicaremos cómo usar estas primitivas en la práctica.

El ecosistema de WebAssembly está en sus comienzos; sin duda más herramientas aparecerán en un futuro. Ahora mismo hay cuatro puntos principales donde comenzar:

- Portar una aplicación C/C++ con [Emscripten](https://emscripten.org/).
- Escribir o generar WebAssembly directamente a nivel de ensamblador.
- Escribir una aplicación en Rust y generar su salida como WebAssembly.
- Usar [AssemblyScript](https://assemblyscript.org/) que se parece a TypeScript y se compila a un binario de WebAssembly.

Detallemos más cada una de estas opciones:

### Portar desde C/C++

Dos de las muchas opciones para crear código WASM son o bien, un ensamblador WASM en línea, o [Emscripten](https://emscripten.org/). Hay varias opciones para un ensamblador WASM en línea, como pueden ser:

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

Estos son puntos adecuados donde se puede empezar a plantear desde dónde empezar, pero que pueden no tener algunas optimizaciones para Emscripten.

La herramienta Emscripten está disponible para casi cualquier tipo de código C/C++ y compila en un módulo `.wasm`, además del código "pegamento" necesario en JavaScript, para cargar y ejecutar el módulo, y un documento HTML donde se muestre el resultado del código.

![](emscripten-diagram.png)

En resumen, el proceso es el siguiente:

1. Emscripten primero compila C/C++ en clang+LLVM — un compilador C/C++ de código abierto, que por ejemplo se distribuye como parte de XCode en OSX.
2. Emscripten transforma el resultado de la compilación de clang+LLVM en un binario `.wasm`.
3. Por sí mismo, WebAssembly no puede acceder directamente al DOM; únicamente puede llamar a JavaScript, y pasarle primitivos enteros o de coma flotante como datos. Luego, para acceder a cualquier API Web, WebAssembly necesita llamar a JavaScript, que entonces llamará a la API Web. Emscripten por lo tanto crea el documento HTML y el código "pegamento" en JavaScritp necesario para conseguir esto.

> **Nota:** Hay planes a futuro para [permitir que WebAssembly llame a las APIs web directamente](https://github.com/WebAssembly/gc/blob/master/README.md).

El código "pegamento" de JavaScript no es tan simple como podrías imaginar. Para empezar, Emscripten implementa bibliotecas C/C++ populares como [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL) y partes de [POSIX](https://en.wikipedia.org/wiki/POSIX). Estas bibliotecas se implementan en términos de APIs web y, por lo tanto, cada una requiere un código de enlace JavaScript para conectar WebAssembly a la API web subyacente.

Por lo tanto, parte del código "pegamento" implementa la funcionalidad de cada biblioteca respectiva utilizada por el código C/C++. El código de conexión también contiene la lógica para llamar a las APIs JavaScript de WebAssembly mencionadas anteriormente para obtener, cargar y ejecutar el archivo `.wasm`.

El documento HTML generado carga el archivo de enlace JavaScript y escribe `stdout` en un elemento {{htmlelement("textarea")}}. Si la aplicación usa OpenGL, el HTML también contiene un elemento {{htmlelement("canvas")}} que se usa como destino de renderizado. Es muy fácil modificar la salida de Emscripten y convertirla en cualquier aplicación web que necesites.

Puedes encontrar documentación completa sobre Emscripten en [emscripten.org](https://emscripten.org), y una guía para implementar la cadena de herramientas y compilar tu propia aplicación C/C++ a través de wasm en [Compilación de C/C++ a WebAssembly](/en-US/docs/WebAssembly/C_to_wasm).

### Escribir WebAssembly directamente

¿Quiere crear tu propio compilador, tus propias herramientas o crear una biblioteca de JavaScript que genere WebAssembly en tiempo de ejecución?

De la misma manera que los lenguajes ensambladores físicos, el formato binario WebAssembly tiene una representación de texto: los dos tienen una correspondencia 1:1. Puedes escribir o generar este formato a mano y luego convertirlo al formato binario con cualquiera de varias [herramientas de texto a binario de WebAssembly](https://webassembly.org/getting-started/advanced-tools/).

Para obtener una guía sencilla sobre cómo hacer esto, consulta nuestro artículo [Conversión de formato de texto WebAssembly a wasm](/en-US/docs/WebAssembly/Text_format_to_wasm).

### Escribir Rust destinado a WebAssembly

También es posible escribir código Rust y compilarlo en WebAssembly, gracias al incansable trabajo del grupo de trabajo de Rust WebAssembly. Puedes comenzar instalando la cadena de herramientas necesaria, compilando un programa Rust de ejemplo en un paquete npm de WebAssembly y usándolo en una aplicación web de muestra, en nuestro artículo [Compilar de Rust a WebAssembly](/en-US/docs/WebAssembly/Rust_to_wasm).

### Usar AssemblyScript

Para los desarrolladores web que quieran probar WebAssembly sin necesidad de aprender los detalles de C o Rust, permaneciendo en la comodidad de un lenguaje familiar como TypeScript, AssemblyScript será la mejor opción. AssemblyScript compila una variante estricta de TypeScript en WebAssembly, lo que permite a los desarrolladores web seguir usando herramientas compatibles con TypeScript con las que están familiarizados, como Prettier, ESLint, VS Code intellisense, etc. Puedes consultar su documentación en <https://www.assemblyscript.org/>.

## Resumen

Este artículo ha dado una explicación de qué es WebAssembly, por qué es tan útil, cómo encaja en la web y cómo lo puedes utilizar.

## Ve también

- [artículos del blog WebAssembly en Mozilla Hacks](https://hacks.mozilla.org/category/webassembly/)
- [La investigación de WebAssembly en Mozilla](https://research.mozilla.org/)
- [Cargar y ejecutar código WebAssembly](/es/docs/WebAssembly/Loading_and_running) — descubre cómo cargar tu propio módulo WebAssembly en una página web.
- [Usar la API JavaScript de WebAssembly](/en-US/docs/WebAssembly/Using_the_JavaScript_API) — descubre cómo usar otras características principales de la API JavaScript de WebAssembly.
