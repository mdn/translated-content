---
title: Generador de historias absurdas
slug: Learn/JavaScript/First_steps/Silly_story_generator
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

En esta evaluación, deberás tomar parte del conocimiento que has aprendido en los artículos de este módulo y aplicarlo a la creación de una aplicación divertida que genere historias aleatorias. ¡Que te diviertas!

| Prerrequisitos: | Antes de intentar esta evaluación, deberías haber revisado todos los artículos de este módulo.                  |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Probar la comprensión de los fundamentos de JavaScript, como variables, números, operadores, cadenas y matrices |

## Punto de partida

Para iniciar esta evaluación, debe:

- Vaya y [tome el archivo HTML](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) para el ejemplo y guarde una copia local de este como `index.html` en un directorio nuevo en algún lugar de su computadora. Esto también tiene el CSS para estilizar el ejemplo que contiene.
- Vaya a la [página que contiene el texto sin procesar](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) y manténgalo abierto en una pestaña separada del navegador en algún lugar. Lo necesitarás más tarde.

> **Nota:** Alternativamente, puede usar un sitio como [JSBin](http://jsbin.com/) o [Glitch](https://glitch.com/) para hacer su evaluación. Puede pegar el HTML, CSS y JavaScript en uno de estos editores en línea. Si el editor en línea que está utilizando no tiene un panel de JavaScript separado, no dude en colocarlo en línea en un elemento `<script>` dentro de la página HTML.

## Resumen del proyecto

Se le han proporcionado algunos HTML / CSS en bruto y algunas cadenas de texto y funciones de JavaScript; necesita escribir el JavaScript necesario para convertir esto en un programa de trabajo, que hace lo siguiente:

- Genera una historia tonta cuando se presiona el botón "Generar historia aleatoria".
- Reemplaza el nombre predeterminado "Bob" en la historia con un nombre personalizado, solo si se ingresa un nombre personalizado en el campo de texto "Ingresar nombre personalizado" antes de presionar el botón Generar.
- Convierte las cantidades y unidades de peso y temperatura predeterminadas de los EE. UU. En la historia en equivalentes del Reino Unido del botón de opción del Reino Unido, antes de presionar el botón de generar.
- Generará otra historia tonta al azar si presionas el botón otra vez (y otra vez ...)

La siguiente captura de pantalla muestra un ejemplo de lo que debería producir el programa terminado:

![](screen_shot_2018-09-19_at_10.01.38_am.png)

Para darle más idea, eche un vistazo al ejemplo final (¡no mire el código fuente!)

## Etapas para completar

En las siguientes secciones se describe lo que hay que hacer.

Configuración básica:

1. Crear un nuevo archivo llamado `main.js`, en el mismo directorio que tu archivo `index.html`.
2. Aplicar el archivo JavaScript externo a tu HTML insertando un elemento {{htmlelement("script")}} en tu HTML haciendo referencia a `main.js`. Póngalo justo antes de la etiquette de cierra `</body>`.

Variables y funciones iniciales:

1. en el archivo de texto sin procesar, copia todo el código bajo el encabezado "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" y pégalo en la parte superior del archivo main.js. Esto te dará tres variables que almacenan las referencias al campo de texto "Enter custom name" (`customName`), el botón "Generate random story" (`randomize`), y el elemento {{htmlelement("p")}} al fondo del cuerpo HTML en el que la historia será copiada en (`story`), respectivamente. Además, obtendrás una funcion llamada `randomValueFromArray()` que toma un array, y devuelve uno de los items guardados dentro del array al azar.
2. Ahora observa la segunda sección del archivo de texto sin procesar — "2. RAW TEXT STRINGS". Esta contiene cadenas de texto que actuarán como entrada en nuestro programa. Nos gustaría que mantengas estas variables internas dentro del archivo `main.js`:

   1. Almacena la primera, la más larga, cadena de texto dentro de una variable llamada `storyText`.
   2. Almacena el primer conjunto de tres cadenas dentro de un array llamado `insertX`.
   3. Almacena el segundo conjunto de tres cadenas dentro de un array llamado `insertY`.
   4. Almacena el tercer conjunto de tres cadenas dentro de un array llamado `insertZ`.

Colocar el controlador de evento y la función incompleta:

1. Ahora regresa al archivo de texto sin procesar.
2. Copia el código encontrado bajo el encabezado "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" y pégalo al fondo de tu archivo `main.js` . Esto:

   - Añade un detector de eventos a la variable `randomize`, de manera que cuando al botón que esta representa se le haya dado un click, la función `result()` funcione.
   - Añade una definición de la función parcialmente completada `result()` a tu código. Por el resto de la evaluación, deberás llenar en líneas dentro de esta función para completarla y hacer que trabaje adecuadamente.

Completando la función `result()`:

1. Crear una nueva variable llamada `newStory`, y establezca su valor igual a `storyText`. Esto es necesario para que podamos crear una nueva historia aleatoria cada vez que se presiona el botón y se ejecuta la función. Si hiciéramos cambios directamente en `storyText`, solo podríamos generar una nueva historia una vez.
2. Crear tres nuevas variables llamadas `xItem`, `yItem`, y `zItem`, y tienes que igualar cada variable llamando a `randomValueFromArray()` en sus tres matrices (el resultado en cada caso será un elemento aleatorio de cada matriz en la que se llama). Por ejemplo, puede llamar a la función y hacer que devuelva una cadena aleatoria de `insertX` escribiendo `randomValueFromArray(insertX)`.
3. A continuación, queremos reemplazar los tres marcadores de posición en la cadena `newStory` — `:insertx:`, `:inserty:`, y `:insertz:` — con las cadenas almacenadas en `xItem`, `yItem`, y `zItem`. Hay un método de string en particular que lo ayudará aquí: en cada caso, haga que la llamada al método sea igual a `newStory` de modo que cada vez que se llame, `newStory` se iguale a sí mismo, pero con sustituciones. Entonces, cada vez que se presiona el botón, estos marcadores de posición se reemplazan con una cadena absurda aleatoria. Como sugerencia adicional, el método en cuestión solo reemplaza la primera instancia de la subcadena que encuentra, por lo que es posible que deba realizar una de las llamadas dos veces.
4. Dentro del primer bloque `if`, agregue otra llamada al método de reemplazo de cadena para reemplazar el nombre 'Bob' que se encuentra en la cadena `newStory` con la variable de `name`. En este bloque estamos diciendo "Si se ingresó un valor en la entrada de texto `customName` reemplace a Bob en la historia con ese nombre personalizado."
5. Dentro del segundo bloque `if`, se esta verificando si se ha seleccionado el botón de opción `uk` Si es así, queremos convertir los valores de peso y temperatura en la historia de libras and Fahrenheit a stones and grados centígrados. Lo que debe hacer es lo siguiente:

   1. Busque las fórmulas para convertir libras a stone, and Fahrenheit en grados centígrados.
   2. Dentro de la línea que define la variable de `weight`, reemplace 300 con un cálculo que convierta 300 libras en stones. Concatenar `'stone'` al final del resultado de la llamada `Math.round()`.
   3. Al lado de la línea que define la variable de `temperature`, reemplace 94 con un cálculo que convierta 94 Fahrenheit en centígrados. Concatenar `'centigrade'` al final del resultado de la llamada `Math.round()`.
   4. Justo debajo de las dos definiciones de variables, agregue dos líneas de reemplazo de cadena más que reemplacen '94 fahrenheit 'con el contenido de la variable de `temperature`, y '300 libras' con el contenido de la variable de `weight`.

6. Finalmente, en la penúltima línea de la función, haga que la propiedad `textContent` de la variable de la `story` (que hace referencia al párrafo) sea igual a `newStory`.

## Claves y pistas

- No necesitas modificar el HTML, salvo para incrustar el JavaScript a tu HTML.
- Si no estás seguro si el JavaScript está siendo aplicado adecuadamente a tu HTML, intenta remover temporalmente todo el codigo del archivo JavaScript, agregar una instruccion simple que sabes que tendrá un efecto obvio, luego guarda y actualiza. El siguiente ejemplo cambia el fondo de {{htmlelement("html")}} - así la ventana se verá completamente roja si el JavaScript está siendo aplicado adecuadamente.:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round) es un método JavaScript integrado que simplemente redondea el resultado de un cálculo al número entero más cercano.
- Hay tres casos de cadenas que deben reemplazarse. Puede repetir el método `replace()` varias veces o puede utilizar expresiones regulares. Por ejemplo, `let text = 'I am the biggest lover, I love my love'; text.replace(/love/g,'like');` Reemplazará todas las instancias de 'love' a 'like'. Recuerde, las cuerdas son inmutables.

## Evaluación o ayuda adicional

Si está siguiendo esta evaluación como parte de un curso organizado, debería poder entregar su trabajo a su profesor/mentor para que lo califique. Si está aprendiendo por ti mismo, puede obtener la guía de calificación con bastante facilidad preguntando en el hilo de [discussion thread for this exercise](https://discourse.mozilla.org/t/silly-story-generator-assessment/24686), o en el canal de IRC [#mdn](irc://irc.mozilla.org/mdn) en [Mozilla IRC](https://wiki.mozilla.org/IRC). Pruebe el ejercicio primero: ¡no se gana nada haciendo trampa!

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
