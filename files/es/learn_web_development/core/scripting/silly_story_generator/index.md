---
title: Generador de historias absurdas
slug: Learn_web_development/Core/Scripting/Silly_story_generator
original_slug: Learn/JavaScript/First_steps/Silly_story_generator
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

En esta evaluación, deberás tomar parte del conocimiento que has aprendido en los artículos de este módulo y aplicarlo a la creación de una aplicación divertida que genere historias aleatorias. ¡Que te diviertas!

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Antes de intentar esta evaluación, deberías haber revisado todos los artículos de este módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Probar la comprensión de los fundamentos de JavaScript, como variables, números, operadores, cadenas y arreglos.
      </td>
    </tr>
  </tbody>
</table>

## Punto de partida

Para iniciar esta evaluación, debes:

- Ir y [tomar el archivo HTML](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) para el ejemplo y guarda una copia local de este, como `index.html` en un directorio nuevo en algún lugar de tú computadora. Esto también tiene el CSS para estilizar el ejemplo que contiene.
- Ve a la [página que contiene el texto sin procesar](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) y mantenlo abierto en una pestaña separada del navegador en algún lugar. Lo necesitarás más tarde.

Alternativamente, puede usar un sitio como [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). Puedes pegar el HTML, CSS y JavaScript en uno de estos editores en línea. Si el editor en línea que estas utilizando no tiene un panel de JavaScript separado, no dude en colocarlo en línea en un elemento `<script>` dentro de la página HTML.

> [!NOTE]
> Si tienes algún problema, puedes contactarnos a través de nuestros [canales de comunicación](/es/docs/MDN/Community/Communication_channels).

## Resumen del proyecto

Se te han proporcionado algunos HTML / CSS en bruto y algunas cadenas de texto y funciones de JavaScript; necesitas escribir el JavaScript necesario para convertir esto en un programa funcional, que hace lo siguiente:

- Genera una historia tonta cuando se presiona el botón "Generate random story".
- Reemplaza el nombre predeterminado "Bob" en la historia con un nombre personalizado, solo si se ingresa un nombre personalizado en el campo de texto "Enter custom name" antes de presionar el botón de generar.
- Convierte las cantidades y unidades de peso y temperatura predeterminadas de los EE. UU. (US) en la historia en equivalentes del Reino Unido (UK), si el botón de selección del Reino Unido es seleccionado, antes de presionar el botón de generar.
- Generará otra historia tonta al azar si presionas el botón otra vez (y otra vez ...)

La siguiente captura de pantalla muestra un ejemplo de lo que debería producir el programa terminado:

![](screen_shot_2018-09-19_at_10.01.38_am.png)

Para darte una mejor idea, [echa un vistazo al ejemplo final](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (¡no mires el código fuente!)

## Etapas para completar

En las siguientes secciones se describe lo que hay que hacer.

Configuración básica:

1. Crear un nuevo archivo llamado `main.js`, en el mismo directorio que tu archivo `index.html`.
2. Aplicar el archivo JavaScript externo a tu HTML insertando un elemento {{htmlelement("script")}} en tu HTML haciendo referencia a `main.js`. Pónlo justo antes de la etiqueta de cierre `</body>`.

Variables y funciones iniciales:

1. En el archivo de texto sin procesar, copia todo el código bajo el encabezado "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" y pégalo en la parte superior del archivo main.js. Esto te dará tres variables que almacenan las referencias al campo de texto "Enter custom name" (`customName`), el botón "Generate random story" (`randomize`), y el elemento {{htmlelement("p")}} al fondo del cuerpo HTML en el que la historia será copiada en (`story`), respectivamente. Además, obtendrás una funcion llamada `randomValueFromArray()` que toma un arreglo, y devuelve uno de los elementos guardados dentro del arreglo al azar.
2. Ahora observa la segunda sección del archivo de texto sin procesar — "2. RAW TEXT STRINGS". Esta contiene cadenas de texto que actuarán como entrada en nuestro programa. Nos gustaría que mantengas estas variables internas dentro del archivo `main.js`:
   1. Almacena la primera, la más larga, cadena de texto dentro de una variable llamada `storyText`.
   2. Almacena el primer conjunto de tres cadenas dentro de un arreglo llamado `insertX`.
   3. Almacena el segundo conjunto de tres cadenas dentro de un arreglo llamado `insertY`.
   4. Almacena el tercer conjunto de tres cadenas dentro de un arreglo llamado `insertZ`.

Colocar el controlador de evento y la función incompleta:

1. Ahora regresa al archivo de texto sin procesar.
2. Copia el código encontrado bajo el encabezado "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" y pégalo al fondo de tu archivo `main.js` . Esto:
   - Añade un detector de eventos a la variable `randomize`, de manera que cuando al botón que esta representa se le haya dado un clic, la función `result()` se ejecute.
   - Añade una definición de la función parcialmente completada `result()` a tu código. Por el resto de la evaluación, vas a escribir tú código dentro de esta función para completarla y hacer que funcione adecuadamente.

Completando la función `result()`:

1. Crear una nueva variable llamada `newStory`, y establezca su valor igual a `storyText`. Esto es necesario para que podamos crear una nueva historia aleatoria cada vez que se presiona el botón y se ejecuta la función. Si hiciéramos cambios directamente en `storyText`, solo podríamos generar una nueva historia una vez.
2. Crear tres nuevas variables llamadas `xItem`, `yItem`, y `zItem`, y tienes que igualar cada variable al resultado de la llamanda a `randomValueFromArray()` en tus tres matrices (el resultado en cada caso será un elemento aleatorio de cada matriz en la que se llama). Por ejemplo, puedes llamar a la función y hacer que devuelva una cadena aleatoria de `insertX` escribiendo `randomValueFromArray(insertX)`.
3. A continuación, queremos reemplazar los tres marcadores de posición en la cadena `newStory` — `:insertx:`, `:inserty:`, y `:insertz:` — con las cadenas almacenadas en `xItem`, `yItem`, y `zItem`. Hay dos posibles métodos de cadena que te ayudarán aquí: en cada caso, haga que la llamada al método sea igual a `newStory` de modo que cada vez que se llame, `newStory` se iguale a sí mismo, pero con sustituciones. Entonces, cada vez que se presiona el botón, estos marcadores de posición se reemplazan con una cadena absurda aleatoria. Como sugerencia adicional, dependiendo de el método que elijas, es posible que debas realizar una de las llamadas dos veces.
4. Dentro del primer bloque `if`, agregue otra llamada al método de reemplazo de cadena para reemplazar el nombre 'Bob' que se encuentra en la cadena `newStory` con la variable de `name`. En este bloque estamos diciendo "Si se ingresó un valor en la entrada de texto `customName` reemplace a Bob en la historia con ese nombre personalizado."
5. Dentro del segundo bloque `if`, verificamos si se ha seleccionado el botón de opción `uk`. Si es así, queremos convertir los valores de peso y temperatura en la historia de libras y Fahrenheit a piedras y grados centígrados. Lo que debe hacer es lo siguiente:
   1. Busque las fórmulas para convertir libras a piedras, y Fahrenheit en grados centígrados.
   2. Dentro de la línea que define la variable `weight`, reemplace 300 con un cálculo que convierta 300 libras en piedras. Concatenar `'stone'` al final del resultado de la llamada `Math.round()`.
   3. Al lado de la línea que define la variable `temperature`, reemplace 94 con un cálculo que convierta 94 Fahrenheit en centígrados. Concatenar `'centigrade'` al final del resultado de la llamada `Math.round()`.
   4. Justo debajo de las dos definiciones de variables, agregue dos líneas de reemplazo de cadena más, que reemplacen '94 fahrenheit' con el contenido de la variable `temperature`, y '300 libras' con el contenido de la variable `weight`.

6. Finalmente, en la penúltima línea de la función, haga que la propiedad `textContent` de la variable `story` (que hace referencia al párrafo) sea igual a `newStory`.

## Claves y pistas

- No necesitas modificar el HTML, salvo para incrustar el JavaScript a tu HTML.
- Si no estás seguro si el JavaScript está siendo aplicado adecuadamente a tu HTML, intenta remover temporalmente todo el codigo del archivo JavaScript, agrega una instruccion simple que sabes que tendrá un efecto obvio, luego guarda y actualiza. El siguiente ejemplo cambia el fondo de el elemento {{htmlelement("html")}} - así la ventana se verá completamente roja si el JavaScript está siendo aplicado adecuadamente:

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [Math.round()](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round) es un método JavaScript integrado que simplemente redondea el resultado de un cálculo al número entero más cercano.
- Hay tres instancias de cadenas que deben reemplazarse. Puede repetir el método `replace()` varias veces o puedes utilizar `replaceAll(). Recuerda, los Strings son inmutables.

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
