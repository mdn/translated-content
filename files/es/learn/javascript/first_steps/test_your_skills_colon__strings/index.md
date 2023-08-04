---
title: "Prueba tus habilidades: Strings"
slug: Learn/JavaScript/First_steps/Test_your_skills:_Strings
---

{{learnsidebar}}

El objetivo de esta prueba de habilidad es evaluar si has entendido nuestros artículos [Manejo de texto — cadenas en JavaScript](/es/docs/Learn/JavaScript/First_steps/Strings) y [Métodos de cadena útiles](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods).

> **Nota:** Puedes probar las soluciones en los editores interactivos a continuación, sin embargo, puede ser útil descargar el código y usar una herramienta en línea como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), o [Glitch](https://glitch.com/) para trabajar en las tareas.
>
> Si te quedas atascado, pídenos ayuda — consulta la sección [Evaluación o ayuda adicional](#evaluación_o_ayuda_adicional) en la parte inferior de esta página.

> **Nota:** En los siguientes ejemplos, si hay un error en tu código, se mostrará en el panel de resultados de la página, para ayudarte a intentar averiguar la respuesta (o en la consola JavaScript del navegador, en el caso de la versión descargable).

## Cadenas 1

En nuestra primera tarea de cadenas, comenzaremos con algo pequeño. Ya tienes la mitad de una cita famosa dentro de una variable llamada `quoteStart`; nos gustaría que:

1. Busques la otra mitad de la cita y la agregues al ejemplo dentro de una variable llamada `quoteEnd`.
2. Concatenes las dos cadenas para hacer una sola cadena que contenga la cita completa. Guardes el resultado dentro de una variable llamada `finalQuote`.

Verás que obtienes un error en este punto. ¿Puedes solucionar el problema con `quoteStart` para que la cita completa se muestre correctamente?

Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}

> **Nota:** [Descarga el punto de partida de esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings1-download.html) para trabajar en tu propio editor o en un editor en línea.

## Cadenas 2

En esta tarea, se te proporcionan dos variables, `quote` y `substring`, que contienen dos cadenas. Nos gustaría que:

1. Recuperes la longitud de la cita y la guardes en una variable llamada `quoteLength`.
2. Busques la posición del índice donde aparece `substring` en `quote`, y almacenes ese valor en una variable llamada `index`.
3. Uses una combinación de las variables que tienes y las propiedades/métodos de cadena disponibles para recortar la cita original a "No me gustan los huevos verdes y el jamón", y la guardes en una variable llamada `revisedQuote`.

Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}

> **Nota:** [Descarga el punto de partida de esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings2-download.html) para trabajar en tu propio editor o en un editor en línea.

## Cadenas 3

En la siguiente tarea de cadenas, se te da la misma cita con la que terminaste en la tarea anterior, ¡pero está algo rota! Queremos que la arregles y actualices, así:

1. Cambia la letra mayúscula para corregir con mayúscula inicial la oración (todo en minúsculas, excepto la primera letra mayúscula). Almacena la nueva cita en una variable llamada `fixedQuote`.
2. En `fixedQuote`, reemplaza "huevos verdes con jamón" con otro alimento que realmente no te guste.
3. Hay una pequeña solución más por hacer: agrega un punto al final de la cita y guarda la versión final en una variable llamada `finalQuote`.

Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}

> **Nota:** [Descarga el punto de partida de esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings3-download.html) para trabajar en tu propio editor o en un editor en línea.

## Cadenas 4

En la tarea de cadena final, te hemos dado el nombre de un teorema, dos valores numéricos y una cadena incompleta (los bits que se deben agregar están marcados con asteriscos (`*`)). Queremos que cambies el valor de la cadena de la siguiente manera:

1. Cámbiala de un literal de cadena normal a una plantilla literal.
2. Reemplaza los cuatro asteriscos con cuatro marcadores de posición en la plantilla literal. Estos deben ser:

   1. El nombre del teorema.
   2. Los dos valores numéricos que tenemos.
   3. La longitud de la hipotenusa de un triángulo rectángulo, dado que las longitudes de los otros dos lados son iguales a los dos valores que tenemos. Deberás buscar cómo calcular esto a partir de lo que tienes. Haz el cálculo dentro del marcador de posición.

Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}

> **Nota:** [Descarga el punto de partida de esta tarea](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings4-download.html) para trabajar en tu propio editor o en un editor en línea.

## Evaluación o ayuda adicional

Puedes practicar estos ejemplos en los editores interactivos anteriores.

Si deseas que se evalúe tu trabajo o estás atascado y deseas pedir ayuda:

1. Coloca tu trabajo en un editor que se pueda compartir en línea, como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) o [Glitch](https://glitch.com/). Puedes escribir el código tú mismo o utilizar los archivos de punto de partida vinculados en las secciones anteriores.
2. Escribe una publicación solicitando evaluación y/o ayuda en la [categoría de aprendizaje del foro de discusión de MDN](https://discourse.mozilla.org/c/mdn/learn). Tu publicación debe incluir:

   - Un título descriptivo como "Se busca evaluación para la prueba de habilidad de Cadenas 1".
   - Detalles de lo que ya has probado y lo que te gustaría que hiciéramos, p. ej. si estás atascado y necesitas ayuda, o quiere una evaluación.
   - Un enlace al ejemplo que deseas evaluar o con el que necesitas ayuda, en un editor que se pueda compartir en línea (como se mencionó en el paso 1 anterior). Esta es una buena práctica para entrar — es muy difícil ayudar a alguien con un problema de codificación si no puedes ver su código.
   - Un enlace a la página de la tarea o evaluación real, para que podamos encontrar la pregunta con la que deseas ayuda.
