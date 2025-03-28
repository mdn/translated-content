---
title: Ejemplos de código
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: e5a9a20bfc03a99398bbdfc0a84b737db835a854
---

{{MDNSidebar}}

En MDN, encontrarás numerosos ejemplos de código insertados en las páginas para demostrar el uso de las características de la plataforma web. Este artículo discute los diferentes mecanismos disponibles para agregar ejemplos de código a las páginas, junto con cuáles debes usar y cuándo.

> [!NOTE]
> Si buscas consejos sobre el estilo y el formato del código tal como aparece en un artículo de MDN, en lugar de las diferentes formas de incluir código, consulta nuestra [Guía de estilo de código](/es/docs/MDN/Writing_guidelines/Code_style_guide).

## ¿Qué tipos de ejemplos de código están disponibles?

Hay cuatro tipos de ejemplos de código disponibles en MDN:

- Ejemplos estáticos: bloques de código simples, posiblemente con una captura de pantalla para mostrar estáticamente el resultado de dicho código si se ejecutara.
- Ejemplos interactivos: nuestro sistema para crear [ejemplos interactivos en vivo](https://github.com/mdn/interactive-examples) que muestran el código ejecutándose en vivo, pero también te permiten cambiar el código sobre la marcha para ver cuál es el efecto y copiar fácilmente los resultados.
- "Muestras en vivo" tradicionales de MDN: una macro que toma bloques de código simples, los coloca dinámicamente en un documento dentro de un elemento {{htmlelement("iframe")}} y lo incrusta en la página para mostrar el código ejecutándose en vivo.
- "Muestras en vivo" de GitHub: una macro que toma un documento en un repositorio de GitHub dentro de la [organización MDN](https://github.com/mdn/), lo coloca dentro de un elemento {{htmlelement("iframe")}} y lo incrusta en la página para mostrar el código ejecutándose en vivo.

Discutiremos cada uno en secciones posteriores.

## ¿Cuándo debes usar cada uno?

Cada tipo de ejemplo de código tiene sus propios casos de uso. ¿Cuándo debes usar cada uno?

- Los ejemplos estáticos son útiles si solo necesitas mostrar algún código y no es crucial mostrar cuál es el resultado en vivo. Algunas personas solo quieren algo para copiar y pegar. Tal vez solo estás mostrando un paso intermedio, o el código fuente es suficiente. (Por ejemplo, el artículo es para una audiencia avanzada y solo necesitan ver el código). También podrías estar demostrando una característica de la API que no funciona bien como un ejemplo incrustado, que podría necesitar su propia página independiente para enlazar.
- Los ejemplos interactivos son excelentes ya que los lectores pueden modificar valores sobre la marcha; esto es muy valioso para aprender. Sin embargo, son más complejos de configurar que las otras formas, con más limitaciones, y están destinados a propósitos específicos.
- Las muestras en vivo tradicionales son útiles si deseas mostrar el código fuente en una página, luego mostrarlo ejecutándose, y no te importa mucho que sea accesible como un ejemplo independiente. Este enfoque también tiene la ventaja de que si estás mostrando código fuente y ejemplos en vivo uno al lado del otro, solo necesitas actualizar el código una vez para actualizar ambos. Sin embargo, pueden ser incómodos de editar y hacer funcionar.
- Las muestras en vivo de GitHub son útiles cuando tienes un ejemplo existente que deseas incrustar, no deseas mostrar el código fuente y/o deseas asegurarte de que el ejemplo esté disponible en forma independiente. Tienen un mejor flujo de trabajo de contribución, pero requiere que conozcas GitHub. Además, debido a que el código en la página y el código fuente están en dos lugares diferentes, es más fácil que se desincronicen.

## Pautas generales

Además del sistema específico para presentar los ejemplos en vivo, hay consideraciones de estilo y contenido a tener en cuenta al agregar o actualizar ejemplos en MDN.

- Al colocar ejemplos en una página, intenta asegurarte de que se cubran todas las características u opciones de la API o concepto sobre el que estás escribiendo. Como mínimo, al menos las opciones o propiedades más comunes deben incluirse en los ejemplos.
- Antecede cada ejemplo con una explicación de lo que hace y por qué es interesante o útil.
- Sigue cada fragmento de código con una explicación de lo que hace.
- Cuando sea posible, divide ejemplos grandes en fragmentos más pequeños. Por ejemplo, el sistema de "ejemplos en vivo" concatenará automáticamente todo tu código en una pieza antes de ejecutar el ejemplo, por lo que puedes dividir tu JavaScript, HTML y/o CSS en fragmentos más pequeños con texto descriptivo después de cada fragmento si eliges hacerlo. Esta es una excelente manera de ayudar a explicar tramos de código largos o complicados de manera más clara.
- Ve más allá de simplemente demostrar cómo funciona cada parte de la API o tecnología. Considera posibles casos de uso del mundo real que puedas intentar demostrar.

## Ejemplos estáticos

Con ejemplos estáticos, nos referimos a bloques de código estáticos que muestran cómo se podría usar una característica en el código. Estos se colocan en una página utilizando "vallas de código" de Markdown, como se describe en [Bloques de código de ejemplo](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks). Un resultado de ejemplo podría lucir así:

```js
// Ejemplo de JavaScript
const test = "Hello";
console.log(test);
```

Opcionalmente, es posible que desees mostrar una imagen estática de la salida resultante del código. Por ejemplo:

![Captura de pantalla de una salida de consola en herramientas para desarrolladores](console-example.png)

## Ejemplos interactivos

Los ejemplos interactivos están destinados a usarse en la parte superior de las páginas de referencia de MDN; nuestro objetivo es proporcionarlos para mejorar su valor para principiantes y otros lectores que desean tomar y jugar con un ejemplo rápidamente antes de ver todos los detalles de lo que están buscando. Hay algunas limitaciones importantes que debes tener en cuenta acerca de los ejemplos interactivos:

- Están especializados para una tecnología específica; la interfaz de usuario para JavaScript es diferente de la interfaz de usuario para CSS, y solo ilustran una tecnología de forma aislada. No son apropiados si deseas mostrar, por ejemplo, cómo combinar una estructura HTML/CSS/JS específica.
- Los ejemplos interactivos en vivo actualmente solo están configurados para mostrar CSS y JavaScript. Para otras tecnologías, tendrás que esperar.
- La interfaz de usuario es más intensiva en rendimiento que otros ejemplos de código; no debes poner más de uno en cada artículo de MDN al que los apliques.
- No están destinados para ejemplos de código grandes; la interfaz de usuario admite una variedad de tamaños fijos, que realmente solo funcionan bien para ejemplos cortos (digamos, de 10 a 15 líneas).

Si deseas enviar un ejemplo, puedes obtener información en la [guía de contribución del repositorio de ejemplos interactivos](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md).

Si encuentras una página que no tiene un ejemplo interactivo asociado, ¡eres bienvenido a contribuir con uno!

### Demostración de ejemplo interactivo

La macro [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs) se utiliza para incrustar ejemplos terminados en las páginas de MDN. Por ejemplo, la llamada al macro \\{{EmbedInteractiveExample("pages/js/array-push.html")}} muestra el siguiente ejemplo de código:

{{EmbedInteractiveExample("pages/js/array-push.html")}}Intenta ajustar el código para ver qué sucede y juega con los controles.

## Muestras en vivo tradicionales

Las muestras en vivo tradicionales se insertan en la página mediante el macro [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs). Una llamada \\{{EmbedLiveSample}} captura dinámicamente los bloques de código en la misma sección del documento que ella misma y los coloca en un documento, que luego inserta en la página dentro de un {{htmlelement("iframe")}}. Consulta nuestra [Guía de muestras en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para obtener más información.

## Muestras en vivo de GitHub

Las muestras en vivo de GitHub se insertan en la página mediante el macro [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs). Una llamada \\{{EmbedGHLiveSample}} captura dinámicamente el documento en una URL especificada (que debe estar dentro de la organización **mdn** en GitHub) y lo inserta en la página dentro de un {{htmlelement("iframe")}}.

Estas funcionan de manera muy similar a las muestras en vivo tradicionales, pero son mucho más simples:

No tienes que preocuparte por la ubicación de los bloques de código en la página; captura un documento HTML en un repositorio de GitHub y lo coloca en el `<iframe>`.

El macro solo tiene tres parámetros:

1. La URL del documento a incrustar, que es relativa a la organización MDN, cuyo directorio de nivel superior está en `https://mdn.github.io/`. Por lo tanto, este parámetro debe contener la parte de la URL después de eso, por ejemplo, `mi-subdirectorio/ejemplo.html`. Puedes omitir el nombre del archivo si se llama `index.html`.
2. El ancho del `<iframe>`, que se puede expresar como un porcentaje o en píxeles.
3. La altura del `<iframe>`, que se puede expresar como un porcentaje o en píxeles.

Veamos un ejemplo. Digamos que queremos incrustar el código en <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/>. Podríamos usar la siguiente llamada:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Esto se ve así cuando se renderiza:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Consejos para usar muestras en vivo de GitHub

- Obviamente, primero debes obtener un ejemplo de código adecuado en la [organización GitHub de MDN](https://github.com/mdn/). Esto debe hacerse utilizando Git. Si no estás familiarizado con Git, consulta nuestro artículo [¿Cómo uso GitHub Pages?](/es/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) y [Preparación para agregar los datos](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para usos más avanzados.
- Tu ejemplo de código debe ser adecuado para mostrar lo que estás tratando de demostrar; debe contener un ejemplo simple que haga una cosa bien, no debe contener contenido ofensivo y debe seguir las [pautas de ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide) de MDN.
