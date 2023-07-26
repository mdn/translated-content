---
title: "Comprueba tus habilidades: Matematicas"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Math
---

{{learnsidebar}}

El objetivo de esta prueba de habilidad es conocer si has entendido nuestra clase sobre el articulo [Matematica basica en JavaScript — números y operadores](/es/docs/Learn/JavaScript/First_steps/Math).

> **Nota:** Puedes probar soluciones en los editores interactivos a continuación, sin embargo, puede ser útil descargar el código y usar una herramienta en línea como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), o [Glitch](https://glitch.com/) para trabajar en las tareas.
>
> Si se queda atascado, pídanos ayuda; consulte la sección [Evaluación o ayuda adicional](#evaluación_o_ayuda_adicional) en la parte inferior de esta página.
>
> **Nota**: En los ejemplos a continuación, si hay un error en su código, se mostrará en el panel de resultados de la página, para ayudarlo a tratar de averiguar la respuesta (o en la consola JavaScript del navegador, en el caso de la versión descargable).

## Matemáticas 1

Iniciemos poniendo a prueba sus conocimientos acerca de los operadores matemáticos básicos. Usted tendrá que crear 4 valores númericos, unir los 2 primeros, hacer una resta del cuarto con el tercero y multiplicar los resultados secundarios juntos para obtener un resultado final de 48. Y finalmente, necesita ejecutar una prueba para comprobar si el resultado es un numero par.

Asi que intente realizar la actualización del código descrito abajo para crear el ejemplo terminado, siguendo estos pasos:

1. Crea cuatro variables que contengan numeros. Llama a las variables razonablemente.
2. Agrega las dos primeras variables juntas y guarda el resultado en otra variable.
3. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
4. Multiplique los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada `finalResult`. El producto debe ser 48. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
5. Finalmente, escribe un cálculo que verifique si `finalResult` es un número par. Almacene el resultado en una variable llamada `evenOddResult`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> **Nota:** [Descargue el punto de partida para esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/math/math1-download.html) para trabajar en su propio editor o en un editor en línea.

## Matemáticas 2

En la segunda tarea ya tienes dos cálculos, con los resultados almacenados en las variables `result` y `result2`. Pero estos resultados no son los que queremos; tendrás que tomar los cálculos y cambiarlos para darnos lo que queremos.

¿Qué queremos? Después de multiplicar los dos resultados y formatear el resultado con 2 decimales, el resultado final debería ser 10,42.

Intente actualizar el código en vivo a continuación para recrear el ejemplo terminado, siguiendo estos pasos:

1. Escribe un cálculo que multiplique `result` y `result2` y asigne el resultado de nuevo a `result`.
2. Escriba una línea de código que tome el resultado y lo formatee con 2 decimales, almacenando el resultado de esto en una variable llamada `finalResult`.
3. Verifique el tipo de dato de `finalResult` usando `typeof`; ¡Probablemente verás que en realidad es del tipo `string`! Escriba una línea de código que lo convierta en un tipo `number`, almacenando el resultado en una variable llamada `finalNumber`.
4. El valor de `finalNumber` debe ser `10.42`. Regrese y actualice los cálculos originales que se le proporcionaron para que den este resultado final. No actualice los números ni los operadores.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> **Nota:** [Descargue el punto de partida para esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/math/math2-download.html) para trabajar en su propio editor o en un editor en línea.

## Matemáticas 3

En la tarea final de este artículo, queremos que escriba algunas pruebas. Tiene tres grupos, cada uno de los cuales consta de una declaración y dos variables. Para cada uno, escriba una prueba que pruebe o refute la afirmación hecha. Almacene los resultados de esas pruebas en variables llamadas `weightComparison`, `heightComparison` y `pwdMatch`, respectivamente.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 400)}}

> **Nota:** [Descargue el punto de partida para esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/math/math3-download.html) para trabajar en su propio editor o en un editor en línea.

## Evaluación o ayuda adicional

Puede practicar estos ejemplos en los editores interactivos anteriores.

Si desea que se evalúe su trabajo, o está atascado y quiere pedir ayuda:

1. Coloque su trabajo en un editor compartible en línea como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) o [Glitch](https://glitch.com/). Puede escribir el código usted mismo o usar los archivos de punto de partida vinculados en las secciones anteriores.
2. Escriba una publicación solicitando evaluación o ayuda en la [categoría de aprendizaje del foro de Discourse de MDN](https://discourse.mozilla.org/c/mdn/learn). Su publicación debe incluir:

   - Un título descriptivo como "Evaluación buscada para la prueba de habilidad de Matemáticas 1".
   - Detalles de lo que ya ha probado y lo que le gustaría que hiciéramos, por ejemplo si está atascado y necesita ayuda, o desea una evaluación.
   - Un enlace al ejemplo que desea evaluar o con el que necesita ayuda, en un editor compartible en línea (como se mencionó en el paso 1). Esta es una buena práctica para comenzar: es muy difícil ayudar a alguien con un problema de codificación si no puede ver su código.
   - Un enlace a la tarea real o página de evaluación, para que podamos encontrar la pregunta con la que necesita ayuda.
