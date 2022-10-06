---
title: Ejemplos de código
slug: MDN/Writing_guidelines/Page_structures/Code_examples
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

En MDN, verás numerosos ejemplos de código insertados en las páginas para demostrar el uso de las funciones de la plataforma web. Este artículo analiza los diferentes mecanismos disponibles para agregar ejemplos de código a las páginas, junto con cuáles debes usar y cuándo.

> **Nota:** Si deseas obtener asesoramiento sobre el estilo y el deslinde del código tal como aparece en un artículo de MDN, en lugar de las diferentes formas de incluir código, consulta nuestra [Guía de estilo de código](/es/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## ¿Qué tipos de código de ejemplo están disponibles?

Hay cuatro tipos de ejemplos de código disponibles en MDN:

- Ejemplos estáticos: bloques de código sin formato, posiblemente con una captura de pantalla para mostrar estáticamente el resultado de dicho código si se ejecutara.
- Ejemplos interactivos: Nuestro sistema para crear [ejemplos interactivos en vivo](https://github.com/mdn/interactive-examples) que muestran el código ejecutándose en vivo pero también te permiten cambiar el código sobre la marcha para ver cuál es el efecto. y copiar fácilmente el resultado.
- "Muestras en vivo" tradicionales de MDN: Una macro que toma bloques de código sin formato, los coloca dinámicamente en un documento dentro de un elemento {{HTMLElement("iframe")}} y lo incrusta en la página para mostrar el código que se ejecuta en vivo.
- GitHub "muestras en vivo": Una macro que toma un documento en un repositorio de GitHub dentro de la [organización MDN](https://github.com/mdn/), lo coloca dentro de un {{htmlelement("iframe")}} y lo incrusta en la página para mostrar el código ejecutándose en vivo.

Hablaremos de cada uno en secciones posteriores.

## ¿Cuándo debes usar cada uno?

Cada tipo de ejemplo de código tiene sus propios casos de uso. ¿Cuándo debes usar cada uno?

- Los ejemplos estáticos son útiles si solo necesitas mostrar algo de código, y no es muy importante mostrar cuál es el resultado en vivo. Algunas personas solo quieren algo para copiar y pegar. Tal vez solo estés mostrando un paso intermedio, o el código fuente es suficiente. (Por ejemplo, el artículo es para una audiencia avanzada y solo necesitan ver el código). Además, es posible que estés demostrando una función de la API que no funciona bien como un ejemplo incrustado, que podría necesitar su propia página separada para enlazarla.
- Los ejemplos interactivos son excelentes, ya que los lectores pueden modificar los valores sobre la marcha; esto es muy valioso para el aprendizaje. Sin embargo, es más complejo configurarlos que los otros formularios, tienen más limitaciones y están destinados a fines específicos.
- Las muestras en vivo tradicionales son útiles si deseas mostrar el código fuente en una página, luego mostrarlo en ejecución, y no te preocupa que sea accesible como un ejemplo independiente. Este enfoque también tiene la ventaja de que si muestras el código fuente y los ejemplos en vivo uno al lado del otro, solo necesitas actualizar el código una vez para actualizar ambos. Sin embargo, puede ser incómodo editarlos y trabajar con ellos.
- Las muestras en vivo de GitHub son útiles cuando tienes un ejemplo existente que deseas incrustar, no deseas mostrar el código fuente y/o deseas asegurarte de que el ejemplo esté disponible en forma independiente. Tienen un mejor flujo de trabajo de contribución, pero requiere que conozcas GitHub. Además, debido a que el código en la página y el código fuente están en dos lugares diferentes, es más fácil que no estén sincronizados.

## Reglas generales

Además del sistema específico para presentar las muestras en vivo, hay consideraciones de estilo y contenido que se deben tener en cuenta al agregar o actualizar muestras en MDN.

- Al colocar muestras en una página, intenta asegurarte de que se cubran todas las características u opciones de la API o el concepto sobre el que estás escribiendo. Como mínimo, al menos las opciones o propiedades más comunes se deben incluir en los ejemplos.
- Precede cada ejemplo con una explicación de lo que hace el ejemplo y por qué es interesante o útil.
- Sigue cada pieza de código con una explicación de lo que hace.
- Cuando sea posible, divide los ejemplos grandes en partes más pequeñas. Por ejemplo, el sistema de "muestra en vivo" concatenará automáticamente todo tu código en una sola pieza antes de ejecutar el ejemplo, por lo que puedes dividir tu JavaScript, HTML y/o CSS en partes más pequeñas con texto descriptivo después de cada parte si así lo deseas. Esta es una excelente manera de ayudar a explicar tramos de código largos o complicados con mayor claridad.
- Ve más allá de simplemente demostrar cómo funciona cada pieza de la API o tecnología. Considera posibles casos de uso del mundo real que podrías tratar de demostrar.

## Ejemplos estáticos

Por ejemplos estáticos, estamos hablando de bloques de código estático que muestran cómo se puede usar una función en el código. Estos se colocan en una página usando "cercas de código" Markdown, como se describe en [Ejemplos de bloques de código](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks). Un resultado de ejemplo se podría ver así:

```js
// Este es un ejemplo de JS
const test = "Hello";
console.log(test);
```

Opcionalmente, es posible que desees mostrar una imagen estática de la salida resultante del código. Por ejemplo:

![Captura de pantalla de una salida de consola en herramientas del desarrollador](console-example.png)

## Ejemplos interactivos

Los ejemplos interactivos están destinados a utilizarse en la parte superior de las páginas de referencia de MDN; nuestro objetivo es proporcionarlos para mejorar su valor para los principiantes y otros lectores que solo desean tomar y jugar con un ejemplo rápidamente antes de ver todos los detalles de lo que sea que estén buscando. Hay algunas limitaciones importantes a tener en cuenta sobre los ejemplos interactivos:

- Están especializados en una tecnología en particular: la interfaz de usuario para JavaScript es diferente de la interfaz de usuario para CSS y solo ilustran una tecnología de forma aislada. No son apropiados si deseas mostrar, por ejemplo, cómo combinar una estructura particular de HTML/CSS/JS.
- Los ejemplos interactivos en vivo actualmente solo están configurados para mostrar CSS y JavaScript. Para otras tecnologías, solo tendrás que esperar.
- La interfaz de usuario requiere más rendimiento que otros ejemplos de código; no deberías poner más de uno en cada artículo de MDN al que los apliques.
- No están pensados ​​para ejemplos de código grandes: la interfaz de usuario admite una variedad de tamaños fijos, que solo funcionan para ejemplos cortos (por ejemplo, de 10 a 15 líneas).

Si deseas enviar un ejemplo, puedes averiguar cómo hacerlo en la [guía de contribución del repositorio de ejemplos interactivos](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md).

Si encuentras una página que no tiene un ejemplo interactivo asociado, puedes contribuir con uno.

### Demostración de ejemplo interactivo

La macro [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs) se usa para incrustar ejemplos terminados en páginas de MDN. Por ejemplo, la llamada a la macro \\{{EmbedInteractiveExample("pages/js/array-push.html")}} muestra el siguiente código de ejemplo:

{{EmbedInteractiveExample("pages/js/array-push.html")}} Intenta ajustar el código para ver qué sucede y juega con los controles.

## Muestras tradicionales en vivo

Las muestras en vivo tradicionales se insertan en la página mediante la macro [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs). Una llamada a \\{{EmbedLiveSample}} captura dinámicamente los bloques de código en la misma sección del documento que ella y los coloca en un documento, que luego inserta en la página dentro de un {{htmlelement("iframe")}}. Consulta nuestra [guía de muestras en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para obtener más información.

### Formateo de muestras en vivo

Si escribes una muestra en vivo en la sección "Ejemplos", proporciona un encabezado H3 (`###`) descriptivo para este ejemplo de muestra en vivo. Idealmente, escribe una breve descripción del ejemplo que explique el escenario y lo que esperas demostrar. Luego agrega subsecciones con los siguientes encabezados H4 (`####`), en el orden indicado:

- HTML
- CSS
- JavaScript
- Resultado
  Escribe los bloques de código en las subsecciones respectivas enumeradas anteriormente.
  En la subsección **Resultado**, agrega la llamada a la [macro `EmbedLiveSample`](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples#live_sample_macros). Preferiblemente, incluye algo más de prosa en esta subsección para describir el resultado.
  Si no estás utilizando un tipo de lenguaje en particular (por ejemplo, si no estás utilizando JavaScript) o si lo estás ocultando, debes omitir el encabezado correspondiente.

Por ejemplo:

````
## Ejemplos

### Estilizar un párrafo

En este ejemplo, estamos usando CSS para estilizar párrafos que tienen el conjunto de clases `fancy`.

#### HTML

<p>No soy elegante.</p>

<p class="fancy">¡Pero este sí lo es!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Resultado

\{{EmbedLiveSample("Estilizar un párrafo")}}

Solo el elemento `<p>` con `class="fancy"` tendrá el estilo `red`.
````

### Código oculto

A veces, solo deseas mostrar el bloque de código estático que es pertinente para el ejemplo representado dentro de una página. Sin embargo, aún necesitas HTML, CSS y JavaScript para renderizar dicho ejemplo.

Para lograr esto, puedes ocultar cualquier bloque de código que sea relevante para la clase `hidden`.

Usando el ejemplo anterior pero sin mostrar el código HTML se vería así:

````
## Ejemplos

### Estilizar un párrafo

En este ejemplo, estamos usando CSS para estilizar párrafos que tienen el conjunto de clases `fancy`.

#### HTML

```html hidden
<p>No soy elegante.</p>

<p class="fancy">¡Pero este sí lo es!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Resultado

\{{EmbedLiveSample("Estilizar un párrafo")}}

Solo el elemento `<p>` con `class="fancy"` tendrá el estilo `red`.
````

## Muestras en vivo de GitHub

Las muestras en vivo de GitHub se insertan en la página mediante la macro [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs). Una llamada a \\{{EmbedGHLiveSample}} captura dinámicamente el documento en una URL específica (que debe estar dentro de la organización **mdn** GitHub) y lo inserta en la página dentro de un {{htmlelement("iframe")}} .

Estos funcionan de manera muy similar a las muestras en vivo tradicionales, pero son mucho más simples:

No tienes que preocuparte por la ubicación de los bloques de código en la página: toma un documento HTML en un repositorio de GitHub y lo coloca en un `<iframe>`.

La macro solo tiene tres parámetros:

1. La URL del documento para incrustar: esto es relativo a la organización MDN, cuyo directorio de nivel superior se encuentra en `https://mdn.github.io/`. Así que este parámetro debe contener la parte de la URL después de eso, p.ej. `mi-subdirectorio/ejemplo.html`. Puedes omitir el nombre del archivo si se llama `index.html`.
2. El ancho del `<iframe>`, que se puede expresar como un porcentaje o en píxeles.
3. La altura del `<iframe>`, que se puede expresar como un porcentaje o en píxeles.

Veamos un ejemplo. Digamos que queríamos incrustar el código en <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/>. Podríamos usar la siguiente llamada:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Esto se ve así cuando se renderiza:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Consejos para usar muestras en vivo de GitHub

- Obviamente, primero debes obtener una muestra de código adecuada en la [organización MDN GitHub] (https://github.com/mdn/). Esto se debe hacer usando Git. Si no estás familiarizado con Git, consulta nuestros artículos [¿Cómo usar las páginas de GitHub?](/es/docs/Learn/Common_questions/Using_Github_pages) y [Preparación para agregar los datos](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#preparing_to_add_the_data) para usos más avanzados.
- Tu muestra de código debe ser adecuada para mostrar lo que estás tratando de demostrar: debe contener un ejemplo simple que haga una cosa bien, no debe tener contenido ofensivo y debe seguir las [Pautas de muestra de código](/es/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) de MDN .
