---
title: Compilar
slug: Glossary/Compile
tags:
  - CodingScripting
  - Compilador
  - Glossary
  - compilar
translation_of: Glossary/Compile
---
Compilar es el proceso de transformar un programa informático escrito en un {{Glossary("computer programming", "lenguaje")}} en un programa equivalente en otro formato. Al programa que se encarga de compilar se le llama compilador. A veces, a esta tarea se le llama "ensamblar" o "construir", lo que suele implicar otros procesos adicionales, e.j. empaquetarlo en formato binario.

Normalmente, un compilador transforma un lenguaje de alto nivel como C o {{Glossary("Java")}}, el cual es legible por los humanos, en un lenguaje máquina que la CPU puede entender. Algunos compiladores que traducen de un lenguaje a otro del mismo nivel son llamados transpiladores, por ejemplo al compilar de TypeScript a {{Glossary("JavaScript")}}. Son considerados herramientas de productividad.

Muchos compiladores funcionan de forma anticipada (AOT) o en tiempo de ejecución (JIT). Como programador, normalmente llamas a los compiladores AOT mediante la linea de comandos o el {{Glossary("IDE")}} que estés usando. Un ejemplo es el famoso compilador "gcc".

Los compiladores JIT suelen ser transparentes para el programador. Por ejemplo en los exploradores: el motor javaScript de [SpiderMonkey](/en-US/docs/Mozilla/Projects/SpiderMonkey), de FireFox tiene un JIT embebido que compila el JavaScript de una web a código máquina mientras navegas. Proyectos como [WebAssembly](/en-US/docs/WebAssembly) trabajan para mejorar esto.

## Saber más

### Conocimientos generales

- {{Interwiki("wikipedia", "Compiler")}} on Wikipedia
- The [GNU Compiler Collection (GCC)](https://gcc.gnu.org)

### Véase también

- [Base CS Introduction on Compilers](https://medium.com/basecs/a-deeper-inspection-into-compilation-and-interpretation-d98952ebc842)
- [A big list of learning material on StackOverflow](http://stackoverflow.com/a/1672/133203)
