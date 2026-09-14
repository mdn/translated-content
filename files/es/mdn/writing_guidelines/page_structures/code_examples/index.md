---
title: Ejemplos de código en MDN
short-title: Ejemplos de código
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 74ab773eebccc1f7fe27c2c4abd4998cc074186b
---

En MDN encontrarás numerosos ejemplos de código que muestran cómo usar las características de la plataforma web que documentamos.
Este artículo describe las formas en que puedes agregar ejemplos de código a las páginas, junto con los tipos que puedes usar y cuándo usarlos.

> [!NOTE]
> Esta página describe **cómo** se incluye el código en las páginas de MDN.
> Si quieres pautas de estilo y formato para añadir código en una página de MDN, consulta nuestras [Directrices para escribir ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide).

## ¿Qué tipos de ejemplos de código hay en MDN?

Hay cuatro tipos de ejemplos de código disponibles:

- **Ejemplos estáticos** — Bloques de código que muestran el código fuente en una página.
- **Ejemplos en vivo** — Una macro toma bloques de código de una página, los combina en un {{htmlelement("iframe")}} y lo inserta en la página para mostrar el resultado.
  La página publicada muestra los bloques de código fuente y los resultados uno al lado del otro.
- **Ejemplos interactivos** — Una macro renderiza el código fuente en la página y muestra los resultados en un panel junto al código.
  Los lectores pueden editar el código fuente y volver a ejecutar el ejemplo para ver el efecto de sus cambios.
- **Incrustaciones de GitHub** — Una macro toma un documento de un repositorio de GitHub en la [organización MDN](https://github.com/mdn/), lo coloca en un {{htmlelement("iframe")}} y lo inserta en la página para mostrar el resultado.

## ¿Cuándo debes usar cada tipo?

Cada tipo de ejemplo de código tiene sus propios casos de uso:

- Los **ejemplos estáticos** son útiles si necesitas mostrar código y no es importante demostrar los resultados del código en la página publicada, o si estás mostrando un paso intermedio en un artículo.
  Los lectores suelen buscar estos tipos de bloques de código que muestran cómo usar una característica para poder copiar y pegar un ejemplo mínimo en su proyecto.
  Además, es posible que desees un bloque de código estático que demuestre una API o una característica que no funcione bien como ejemplo en vivo.
- Los **ejemplos en vivo** son útiles cuando quieres mostrar el código fuente y luego mostrar su ejecución, sin que te importe demasiado que sea un ejemplo independiente.
  Son útiles porque solo necesitas actualizar el código una vez para actualizar tanto los bloques de código en la página como los resultados en vivo uno al lado del otro.
- Los **ejemplos interactivos** se usan en las páginas de referencia.
  Solo puede haber uno por página y debe colocarse en un lugar concreto, justo después de la introducción.
  Son útiles para mostrar los usos más comunes o prácticos de una característica.
- Las **incrustaciones de GitHub** son útiles cuando tienes un ejemplo existente que quieres insertar, del cual no quieres mostrar el código fuente y/o deseas asegurarte de que el ejemplo esté disponible de forma independiente.
  Debido a que el código de la página y el código fuente están en dos lugares diferentes, los costes de mantenimiento son mayores.

## Directrices generales

Hay consideraciones de estilo y contenido que debes tener en cuenta al añadir o actualizar ejemplos en MDN.

- Al colocar ejemplos en una página, intenta cubrir todas las características o las opciones de la API o del concepto que estás documentando.
  Como mínimo, deben aparecer las opciones o propiedades más habituales.
- Precede cada ejemplo con una explicación de lo que hace y por qué es interesante o útil.
- Acompaña cada fragmento de código con una explicación de lo que hace.
- Cuando sea posible, divide los ejemplos largos en fragmentos más pequeños. Por ejemplo, el sistema de "ejemplo en vivo" concatenará automáticamente todo tu código en un solo bloque antes de ejecutar el ejemplo, por lo que puedes dividir tu JavaScript, HTML y/o CSS en partes más pequeñas con texto descriptivo después de cada parte si así lo prefieres. Esta es una excelente manera de ayudar a explicar con mayor claridad fragmentos de código largos o complicados.
- Ve más allá de simplemente demostrar cómo funciona cada parte de la API o la tecnología. Considera posibles casos de uso del mundo real que podrías intentar demostrar.

## Ejemplos estáticos

Los ejemplos estáticos son bloques de código que muestran cómo se ve una característica en el código fuente.
Estos se colocan en una página utilizando "delimitadores de código" de Markdown, como se describe en [Bloques de código de ejemplo](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks).
Cuando se utilizan en páginas de documentación, tienen este aspecto:

```js
// Esto es un ejemplo de JS
const test = "Hello";
console.log(test);
```

## Ejemplos interactivos

La macro [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) se utiliza para insertar ejemplos interactivos en la parte superior de las páginas de referencia de MDN.
Están pensados para los lectores que quieren probar un ejemplo sin tener que leer el artículo completo sobre un tema o característica.

La macro `InteractiveExample` acepta un título para el ejemplo como cadena de texto, seguido de una palabra clave que especifica la altura del ejemplo.
Los bloques de código que se incluyen en el ejemplo aparecen después de la llamada a la macro y contienen la palabra clave `interactive-example` en la cadena de información después del lenguaje del bloque de código.
El uso de [`Array.concat()` en JavaScript](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) es un buen ejemplo de esta macro; así es como aparece en el código fuente Markdown:

````md
\{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Resultado esperado: Array ["a", "b", "c", "d", "e", "f"]
```
````

Los ejemplos interactivos tienen algunas limitaciones:

- Están especializados por tecnología: la interfaz de usuario para JavaScript es diferente de la interfaz de usuario para CSS, y solo ilustran una tecnología de forma aislada.
  No son apropiados si quieres mostrar, por ejemplo, cómo combinar una estructura HTML/CSS/JS en particular.
- No están pensados para ejemplos de código extensos; la interfaz admite una serie de **alturas fijas** que solo funcionan bien con ejemplos cortos (por ejemplo, de 10 a 15 líneas).
- Una página de MDN solo puede tener un ejemplo interactivo.

## Ejemplos en vivo

Los ejemplos en vivo se insertan en la página mediante la macro [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs).
Una llamada a \\{{EmbedLiveSample}} toma los bloques de código de una página, los combina en un {{htmlelement("iframe")}} e inserta el resultado en la página.
Consulta la [Guía de ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para más información.

## Ejemplos en vivo de GitHub

Los ejemplos en vivo de GitHub se insertan en la página mediante la macro [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs).
Un \\{{EmbedGHLiveSample}} toma el contenido de una URL específica (que debe ser un repositorio de GitHub de **MDN**) y lo inserta en la página dentro de un {{htmlelement("iframe")}}.

La macro tiene tres parámetros:

1. La URL del documento a insertar es relativa a la organización MDN, cuyo directorio raíz se encuentra en `https://mdn.github.io/`. Por tanto, este parámetro debe contener la parte de la URL que va después de esa raíz; por ejemplo, `my-subdirectory/example.html`. Puedes omitir el nombre del archivo si se llama `index.html`.
2. El ancho del `<iframe>`, que puede expresarse como porcentaje o en píxeles.
3. La altura del `<iframe>`, que puede expresarse como porcentaje o en píxeles.

Veamos un ejemplo. Supongamos que queremos insertar el código en <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/>. Podríamos usar la siguiente llamada:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Así es como se ve al renderizarlo:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
