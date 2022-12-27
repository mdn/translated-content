---
title: 'Comprueba tus habilidades: Matematicas.'
slug: Learn/JavaScript/First_steps/Test_your_skills:_Math
tags:
  - JavaScript
  - Matemática
  - Principiante
  - Prueba tus habilidades
  - aprende
translation_of: Learn/JavaScript/First_steps/Test_your_skills:_Math
---
{{learnsidebar}}

El objetivo de esta prueba de habilidad es conocer si has entendido nuestra clase sobre el articulo [Matematica basica en JavaScript — números y operadores](/es/docs/Learn/JavaScript/First_steps/Math).

> **Nota:** Puedes probar soluciones en los editores interactivos a continuación, sin embargo, puede ser útil descargar el código y usar una herramienta en línea como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), o [Glitch](https://glitch.com/) para trabajar en las tareas.
>
> Si se queda atascado, pídanos ayuda; consulte la sección [Evaluación o ayuda adicional](#evaluación_o_ayuda_adicional) en la parte inferior de esta página.
>
> **Nota**: En los ejemplos a continuación, si hay un error en su código, se mostrará en el panel de resultados de la página, para ayudarlo a tratar de averiguar la respuesta (o en la consola JavaScript del navegador, en el caso de la versión descargable).

## Math 1

Iniciemos poniendo a prueba sus conocimientos acerca de los operadores matemáticos básicos. Usted tendrá que crear 4 valores númericos, unir los 2 primeros, hacer una resta del cuarto con el tercero y multiplicar los resultados secundarios juntos para obtener un resultado final de 48. Y finalmente, necesita ejecutar una prueba para comprobar si el resultado es un numero par.

Asi que intente realizar la actualización del código descrito abajo para crear el ejemplo terminado, siguendo estos pasos:

1. Crea cuatro variables que contengan numeros. Llama a las variables razonablemente.
2. Agrega las dos primeras variables juntas y guarda el resultado en otra variable.
3. Subtract the fourth variable from the third and store the result in another variable.
4. Multiply the results from the last two steps together, storing the result in a variable called `finalResult`. The product should be 48. If it isn't, you'll have to adjust some of the initial input values.
5. Finally, write a calculation that checks whether `finalResult` is an even number. Store the result in a variable called `evenOddResult`.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math1.html", '100%', 400)}}

> **Nota:** [Download the starting point for this task](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/math/math1-download.html) to work in your own editor or in an online editor.

## Math 2

In the second task you are already provided with two calculations, with the results stored in the variables `result` and `result2`. But these results aren't what we want; you'll need to take the calculations and change them to give us what we want.

What do we want? After multiplying the two results together and formatting the result to 2 decimal places, the final result should be 10.42.

Try updating the live code below to recreate the finished example, following these steps:

1. Write a calculation that multiples `result` and `result2` together and assigns the result back to `result`. This will require assignment shorthand.
2. Write a line of code that takes result and formats it to 2 decimal places, storing the result of this in a variable called `finalResult`.
3. Check the data type of `finalResult` using `typeof`; you'll probably see that it is actually of `string` type! Write a line of code that converts it to a `number` type, storing the result in a variable called `finalNumber`.
4. The value of `finalNumber` needs to be `10.42`. Go back and update the original calculations you were provided with so that they give this final result. Don't update the numbers or the operators.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math2.html", '100%', 400)}}

> **Nota:** [Download the starting point for this task](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/math/math2-download.html) to work in your own editor or in an online editor.

## Math 3

In the final task for this article, we want you to write some tests. You've got three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called `weightComparison`, `heightComparison`, and `pwdMatch`, respectively.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/math/math3.html", '100%', 400)}}

> **Nota:** [Download the starting point for this task](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/math/math3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:

    - A descriptive title such as "Assessment wanted for Math 1 skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
