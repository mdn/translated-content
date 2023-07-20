---
title: Compilar
slug: Glossary/Compile
l10n:
  sourceCommit: ed947b2c608428b62a60f07d09dc543f732dc09b
---

Compilar es el proceso de transformar un programa informático escrito en un {{Glossary("computer programming", "lenguaje")}} en un conjunto de instrucciones en otro formato o lenguaje. Un **compilador** es un programa de computadora que realiza dicha tarea.

Normalmente, un compilador transforma código escrito en un lenguaje de alto nivel como [C++](https://es.wikipedia.org/wiki/C++), [Rust](<https://es.wikipedia.org/wiki/Rust_(lenguaje_de_programaci%C3%B3n)>) o [Java](<https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)>) en código ejecutable — llamado **código binario** o **código máquina**. [WebAssembly](/es/docs/WebAssembly), por ejemplo, es una forma de código binario ejecutable que [puede ser compilado desde código escrito en C++, Rust, C#, Go, Swift y muchos otros lenguajes](https://webassembly.org/getting-started/developers-guide/) y luego puede ser ejecutado en cualquier página web de cualquier navegador.

La mayoría de los compiladores realizan compilación anticipada (ahead-of-time, AOT) o en tiempo de ejecución (just-in-time, JIT).

El compilador GNU `gcc` es un ejemplo muy conocido de compilador AOT. Los compiladores AOT son invocados típicamente desde la línea de comandos en un ambiente shell (desde una terminal o una consola) o dentro de un [IDE](/es/docs/Glossary/IDE).

Los compiladores JIT no son invocados típicamente de forma directa, sino que se integran internamente en software de entornos de ejecución, con el propósito de mejorar el rendimiento. Por ejemplo, la mayoría de los navegadores de ahora usan motores JavaScript que tienen compiladores JIT integrados.

Los compiladores también pueden traducir entre lenguajes de alto nivel — por ejemplo, de TypeScript a [JavaScript](/es/docs/Glossary/JavaScript) — en tal caso, a menudo se les denomina transpiladores.

## Véase también

- [Compilar de C/C++ a WebAssembly](/es/docs/WebAssembly/C_to_wasm)
- [Compilar de Rust a WebAssembly](/es/docs/WebAssembly/Rust_to_wasm)
- Wikipedia: [Compilador](https://es.wikipedia.org/wiki/Compilador)
