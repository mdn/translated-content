---
title: asm.js
slug: Games/Tools/asm.js
---

{{GamesSidebar}}

[Asm.js](http://asmjs.org/) es un subconjunto de JavaScript que es altamente optimizable. Este artículo analiza exactamente lo que está permitido en el subconjunto asm.js, las mejoras que confiere, donde y cómo puedo utilizarlo, y otros recursos y ejemplos.

## ¿Qué es asm.js exactamente?

Es un subconjunto muy pequeño y estricto de JavaScript que solo permite cosas como `while`, `if`, números, funciones con nombres de nivel superior y otras construcciones simples. No permite objetos, cadenas, cierres y básicamente cualquier cosa que requiera una asignación de la pila. El código asm.js se parece al lenguaje de programación "C" en muchos aspectos, pero es JavaScript completamente válido que se ejecuta en todos los motores actuales. Impulsa los motores JS para optimizar este tipo de código, y le da a los compiladores como Emscripten una definición clara de qué tipo de código generar. A continuación, mostraremos cómo es un código asm.js y explicaremos cómo le ayuda y cómo puede usarlo.

Este subconjunto de JavaScript ya está altamente optimizado en muchos motores de JavaScript que utilizan técnicas de compilación Just-In-Time (JIT) sofisticadas. Sin embargo, al definir un estándar tan explícito, podemos trabajar en la optimización de este tipo de código aún más y obtener el máximo rendimiento posible. Facilita la colaboración en múltiples motores JS porque es fácil de comparar. La idea es que este tipo de código se ejecute muy rápido en cada motor, y si no lo hace, es que hay un error y es un claro mensaje de que los motores deben optimizarse.

También facilita la tarea de las personas que escriben compiladores que desean generar código de alto rendimiento en la web. Pueden consultar las especificaciones de asm.js para saber que se ejecutará rápidamente si se adhieren a los patrones de asm.js. Emscripten, un compilador de C/C++ a JavaScript, genera código asm.js para que funcione con un rendimiento casi nativo en varios navegadores.

Además, si un motor elige reconocer especialmente código asm.js, se pueden realizar aún más optimizaciones. Firefox es el único navegador que hace esto ahora.

## Resumen del lenguaje asm.js

asm.js es un lenguaje de programación intermedio. Tiene una tasa de rendimiento muy predecible porque está limitada a un subconjunto extremadamente restringido de JavaScript que proporciona solo enteros, números en coma flotante, aritmética, llamadas a funciones y accesos de pila de tipo estricto. Las características de rendimiento son más cercanas al código nativo que las de JavaScript estándar. El uso del subconjunto de JavaScript asm.js ya es compatible con los principales navegadores web. Como asm.js se ejecuta en un navegador, depende en gran medida del navegador y del hardware.
