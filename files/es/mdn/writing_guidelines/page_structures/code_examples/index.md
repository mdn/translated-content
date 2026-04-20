---
title: Ejemplos de código en MDN
short-title: Ejemplos de código
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 74ab773eebccc1f7fe27c2c4abd4998cc074186b
---

{{MDNSidebar}}

En MDN, verás numerosos ejemplos de código que demuestran cómo usar las características de la plataforma web que documentamos.
Este artículo describe las formas en que puede agregar ejemplos de código a las páginas, junto con los tipos que puede usar y cuándo usarlos.

> [!NOTE]
> Esta página describe **cómo** se incluye el código en las páginas de MDN.
> Si desea sugerencias de linting y estilo para agregar código en una página de MDN, consulte nuestra [Guía de estilo de código](/es/docs/MDN/Writing_guidelines/Code_style_guide).

## ¿Qué tipos de ejemplos de código hay en MDN?

Hay cuatro tipos de ejemplos de código disponibles:

- **Ejemplos estáticos** — Bloques de código que muestran el código fuente en una página.
- **Ejemplos en vivo** — Una macro toma bloques de código de una página, los combina en un {{htmlelement("iframe")}}, e incrusta el iframe en la página para mostrar el resultado.
  La página publicada muestra los bloques de código fuente y los resultados uno al lado del otro.
- **Ejemplos interactivos** — Una macro representa el código fuente en la página y representa los resultados en un panel junto al fuente.
  Los lectores pueden editar el código fuente y volver a ejecutar el ejemplo para ver el efecto de sus cambios.
- **Incrustados de GitHub** — Una macro toma un documento en un repositorio de GitHub en la [organización MDN](https://github.com/mdn/), lo pone en un {{htmlelement("iframe")}} e lo incrusta en la página para mostrar el resultado.

## ¿Cuándo debe usar cada uno?

Cada tipo de ejemplo de código tiene sus propios casos de uso:

- Los **ejemplos estáticos** son útiles si necesita mostrar código y no es importante demostrar los resultados del código en la página publicada, o está mostrando un paso intermedio en un artículo.
  Los lectores a menudo buscarán estos tipos de bloques de código que muestran cómo usar una característica para que puedan copiar y pegar un ejemplo mínimo en su proyecto.
  Además, es posible que desee un bloque de código estático que demuestre una API o una característica que no funciona bien como un ejemplo en vivo.
- Los **ejemplos en vivo** son útiles si desea mostrar el código fuente, luego mostrarlo ejecutándose, y no le importa mucho que sea un ejemplo independiente.
  Son útiles porque solo necesita actualizar el código una vez para actualizar tanto los bloques de código en la página como los resultados en vivo uno al lado del otro.
- Los **ejemplos interactivos** se usan en páginas de referencia.
  Están limitados a una ocurrencia por página y deben estar en un lugar específico de la página después de la introducción.
  Son útiles para mostrar cuáles son los usos comunes o prácticos de una característica.
- Los **incrustados de GitHub** son útiles cuando tiene un ejemplo existente que desea incrustar, no desea mostrar el código fuente y/o desea asegurarse de que el ejemplo esté disponible en forma independiente.
  Debido a que el código en la página y el código fuente están en dos lugares diferentes, los costos de mantenimiento son más altos.

## Pautas generales

Hay consideraciones de estilo y contenido a tener en cuenta al agregar o actualizar ejemplos en MDN.

- Al colocar ejemplos en una página, intente asegurarse de que todas las características u opciones de la API o concepto sobre el que está escribiendo estén cubiertas.
  Como mínimo, se deben demostrar las opciones o propiedades más comunes.
- Preceda cada ejemplo con una explicación de qué hace el ejemplo y por qué es interesante o útil.
- Siga cada pieza de código con una explicación de qué hace.
- Cuando sea posible, divida ejemplos grandes en piezas más pequeñas. Por ejemplo, el sistema de "ejemplo en vivo" concatenará automáticamente todo su código en una sola pieza antes de ejecutar el ejemplo, por lo que en realidad puede dividir su JavaScript, HTML y/o CSS en piezas más pequeñas con texto descriptivo después de cada pieza si elige hacerlo así. Esta es una excelente manera de ayudar a explicar tramos de código largos o complicados más claramente.
- Vaya más allá de demostrar cómo funciona cada pieza de la API o tecnología. Considere posibles casos de uso del mundo real que pueda intentar demostrar.

## Ejemplos estáticos

Los ejemplos estáticos son bloques de código que muestran cómo se ve una característica en el código fuente.
Estos se ponen en una página usando "cercas de código" de Markdown, como se describe en [Bloques de código de ejemplo](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks).
Cuando se usan en páginas de documentación, se ven así:

```js
// Este es un ejemplo JS
const test = "Hello";
console.log(test);
```

## Ejemplos interactivos

La macro [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) se usa para incrustar ejemplos interactivos en la parte superior de las páginas de referencia de MDN.
Están destinados a lectores que desean probar un ejemplo sin tener que leer el artículo completo sobre un tema o característica.

La macro `InteractiveExample` acepta un título para el ejemplo como una cadena, seguido de una palabra clave para especificar la altura del ejemplo.
Los bloques de código para incluir en el ejemplo aparecen después de la llamada a la macro y contienen la palabra clave `interactive-example` en la cadena de información después del lenguaje del bloque de código.
El uso de [JavaScript `Array.concat()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) es un buen ejemplo de esta macro, que se ve así en el fuente markdown:

````md
\{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Salida esperada: Array ["a", "b", "c", "d", "e", "f"]
```
````

Hay algunas limitaciones para los ejemplos interactivos:

- Están especializados por tecnología: la interfaz de usuario para JavaScript es diferente de la interfaz de usuario para CSS, y solo ilustran una tecnología de forma aislada.
  No son apropiados si desea mostrar, por ejemplo, cómo combinar una estructura HTML/CSS/JS particular.
- No están destinados a ejemplos de código grandes: la interfaz de usuario admite un rango de **alturas fijas**, que solo funcionan realmente para ejemplos cortos (digamos, de 10 a 15 líneas).
- Una página de MDN solo puede tener un ejemplo interactivo.

## Ejemplos en vivo

Los ejemplos en vivo se insertan en la página usando la macro [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs).
Una macro \\{{EmbedLiveSample}} toma bloques de código de una página, los combina en un {{htmlelement("iframe")}} e inserta el resultado en la página.
Consulte la [guía de ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para obtener más información.

## Ejemplos en vivo de GitHub

Los ejemplos en vivo de GitHub se incrustan en la página usando la macro [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs).
Una macro \\{{EmbedGHLiveSample}} toma el contenido en una URL especificada (que debe ser un repositorio **MDN** en GitHub) y la inserta en la página en un {{htmlelement("iframe")}}.

La macro tiene tres parámetros:

1. La URL del documento a incrustar; esto es relativo a la organización MDN, el directorio de nivel superior de la cual está en `https://mdn.github.io/`. Por lo tanto, este parámetro necesita contener la parte de la URL después de esa, por ejemplo, `mi-subdirectorio/ejemplo.html`. Puede omitir el nombre del archivo si se llama `index.html`.
2. El ancho del `<iframe>`, que puede expresarse como un porcentaje o en píxeles.
3. La altura del `<iframe>`, que puede expresarse como un porcentaje o en píxeles.

Veamos un ejemplo. Digamos que queríamos incrustar el código en <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/>. Podríamos usar la siguiente llamada:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Esto se ve así cuando se representa:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
