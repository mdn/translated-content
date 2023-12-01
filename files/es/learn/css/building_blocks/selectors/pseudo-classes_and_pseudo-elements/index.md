---
title: Pseudoclases y pseudoelementos
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

El conjunto de selectores que estudiaremos en este artículo se conocen como **pseudoclases** y **pseudoelementos**. Hay muchos y a menudo sirven para fines muy específicos. Una vez que sepas cómo usarlos, puedes echar un vistazo a la lista para ver si alguno sirve para la página que quieres crear. Una vez más, la página correspondiente de MDN resulta muy útil para conocer qué navegadores los admiten o no.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, HTML básico (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción a HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con el CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Obtener información sobre los selectores de pseudoclases y
        pseudoelementos.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es una pseudoclase?

Una pseudoclase es un selector que marca los elementos que están en un estado específico, por ejemplo, los que son el primer elemento de su tipo, o aquellos por los que el cursor les pasa por encima. Tienden a actuar como si hubieras aplicado una clase en una parte determinada del documento y, a menudo, ayudan a reducir el exceso de clases y proporcionan un marcado más flexible y fácil de mantener.

Las pseudoclases son palabras clave que comienzan con dos puntos:

```css-nolint
:pseudo-class-name
```

### Ejemplos simples de pseudoclases

Echemos un vistazo a algunos ejemplos. Si queremos el primer párrafo de un artículo en letra más grande y en negrita, podemos añadir una clase a ese párrafo y luego añadirle CSS a esa clase, como se muestra en este ejemplo:

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

Sin embargo, podría ser complicado de mantener. ¿Y si añadiésemos un párrafo nuevo en la parte superior del documento? Habría que mover la clase para que quede antes del nuevo párrafo. En lugar de añadir la clase, podríamos utilizar el selector de pseudoclase {{cssxref(":first-child")}}, que _siempre_ seleccionará el primer elemento hijo del artículo, y de esta forma no tendremos que editar el código HTML (esto no siempre es posible, tal vez debido a que lo genera un CMS).

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

Todas las pseudoclases se comportan del mismo modo. Seleccionan un fragmento del documento que está en un estado determinado y se comportan como si se hubiera añadido una clase a su HTML. Echa un vistazo a otros ejemplos en MDN:

- [`:last-child`](/es/docs/Web/CSS/:last-child)
- [`:only-child`](/es/docs/Web/CSS/:only-child)
- [`:invalid`](/es/docs/Web/CSS/:invalid)

> **Nota:** Es válido escribir pseudoclases y pseudoelementos sin que les preceda un selector de elemento. En el ejemplo anterior, podría escribirse `:first-child` y la regla se aplicaríaa cualquier elemento que sea el primer hijo de un elemento `<article>`, no solo un párrafo primer hijo. `:first-child` equivale a `*:first-child`. Pero normalmente se quiere más control y hay que ser más específico.

### Pseudoclases de acción de usuario

Algunas pseudoclases solo intervienen cuando el usuario interactúa con el documento de alguna manera. Estas pseudoclases de **acción de usuario**, que también reciben el nombre de **pseudoclases dinámicas**, actúan como si se añadiese una clase al elemento cuando el usuario interactúa con él. Algunos ejemplos son:

- [`:hover`](/es/docs/Web/CSS/:hover): solo interviene si el usuario pasa el cursor sobre un elemento, normalmente un enlace.
- [`:focus`](/es/docs/Web/CSS/:focus): solo interviene si el usuario selecciona el elemento con los controles del teclado.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## ¿Qué es un pseudoelemento?

Los pseudoelementos se comportan de manera similar. Sin embargo, actúan como si hubieras añadido un elemento HTML totalmente nuevo en el marcado, en lugar de haber aplicado una clase nueva a los elementos presentes. Los pseudoelementos empiezan con un doble signo de dos puntos `::`.

```css-nolint
::pseudo-element-name
```

> **Nota:** Algunos de los primeros pseudoelementos utilizaban la sintaxis de un solo signo de dos puntos, así que puede ser que en ocasiones los veas escritos de esta forma en algún código o ejemplo. Los navegadores modernos leen tanto los pseudoelementos con la sintaxis de los dos puntos simple como la de los dos puntos doble para garantizar la compatibilidad retrospectiva.

Por ejemplo, si deseas seleccionar la primera línea de un párrafo simplemente puedes delimitarlo con el elemento `<span>` y utilizar un selector de elementos. Sin embargo, fallará si el número de palabras que has delimitado resulta ser más largo o más corto que el ancho del elemento padre. Ya que normalmente no sabemos cuántas palabras caben en una línea porque esto cambia con el ancho de la pantalla o con los cambios de tamaño de la letra, no es posible hacer esto introduciendo solo HTML.

El pseudoelemento `::first-line` soluciona este problema: no importa si el número de palabras aumenta o disminuye, siempre se selecciona la primera línea.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

Actúa como si hubiera un elemento `<span>` mágicamente delimitando esa primera línea, que se actualiza cada vez que la longitud de la línea cambia.

Puedes observar que en ambos párrafos se selecciona la primera línea.

## Combinar pseudoclases y pseudoelementos

Si quieres poner en negrita la primera línea del primer párrafo, puedes encadenar los selectores `:first-child` y `::first-line`. Añade al ejemplo anterior el CSS siguiente. Queremos que se seleccione la primera línea del primer elemento `<p>` que esté dentro de un elemento `<article>`.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Generar contenido con ::before y ::after

Hay un par de pseudoelementos especiales que se utilizan junto con la propiedad de [`content`](/es/docs/Web/CSS/content) para introducir contenido en el documento usando el CSS.

Puedes utilizarlos para insertar una cadena de texto, como en el ejemplo siguiente. Intenta cambiar el valor del texto de la propiedad {{cssxref("content")}} y observa el cambio en la salida. También puedes cambiar el pseudoelemento `::before` por `::after` y verás que el texto se inserta al final del elemento, en lugar de al principio.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

Sin embargo, en realidad no es habitual insertar cadenas de texto desde el CSS, porque ese texto resulta inaccesible para algunos lectores de pantalla y puede ser difícil de buscar y modificar en el futuro.

Un uso más adecuado de estos pseudoelementos es insertar un icono. Por ejemplo, la pequeña flecha que añadimos en el ejemplo siguiente es un indicador visual que no queremos que el lector de pantalla muestre:

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

Estos pseudoelementos también se utilizan con frecuencia para insertar una cadena vacía a la que luego se le puede aplicar estilo, como a cualquier otro elemento de la página.

En el ejemplo siguiente hemos añadido una cadena vacía mediante el pseudoelemento `::before`. Le hemos asociado `display: block` para poder aplicarle estilo para que tenga una anchura y una altura determinadas. A continuación, utilizamos el CSS para aplicar estilo de la misma forma que lo haríamos con cualquier otro elemento. Juega con el CSS y cambia la forma en que se ve y se comporta.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

El uso de los pseudoelementos `::before` y `::after`, junto con la propiedad `content` se conoce como «contenido generado» en CSS, y verás que esta técnica se utiliza a menudo para diversas tareas. Un buen ejemplo es la página web [CSS Arrow Please](http://www.cssarrowplease.com/), que te ayuda a generar una flecha con CSS. Echa un vistazo al CSS a medida que creas tu flecha y verás cómo funcionan los pseudoelementos {{cssxref("::before")}} y {{cssxref("::after")}}. Cada vez que veas estos selectores, echa un vistazo a la propiedad {{cssxref("content")}} para ver qué se añade al documento.

## Sección de referencia

Hay un gran número de pseudoclases y pseudoelementos, así que resulta útil tener una lista para ir consultándolos. A continuación encontrarás un par de tablas con enlaces a sus páginas de referencia en MDN. Tómalas como referencia para ver de qué dispones para seleccionar qué tipos de elementos.

### Las pseudoclases

| Selector                            | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ Cssxref(":active") }}            | Selecciona un elemento cuando el usuario lo activa (por ejemplo, con un clic).                                                                                                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":any-link") }}          | Selecciona los estados `:link` y `:visited` de un enlace.                                                                                                                                                                                                                                                                                                                                                                                             |
| {{ Cssxref(":blank") }}             | Selecciona un [elemento `<input>`](/es/docs/Web/HTML/Elemento/input) cuyo valor de entrada está vacío.                                                                                                                                                                                                                                                                                                                                                |
| {{ Cssxref(":checked") }}           | Selecciona un botón de opción o casilla de verificación en el estado que determines.                                                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":current") }}           | Selecciona el elemento que se muestra en ese momento, o un ancestro de ese elemento.                                                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":default") }}           | Selecciona uno o más elementos de interfaz de usuario cuyo valor es el predeterminado de entre un conjunto de elementos similares.                                                                                                                                                                                                                                                                                                                    |
| {{ Cssxref(":dir") }}               | Selecciona un elemento según su direccionalidad (valor del atributo [`dir`](/es/docs/Web/HTML/Global_attributes/dir) de HTML o propiedad [`direction`](/es/docs/Web/CSS/direction) de CSS).                                                                                                                                                                                                                                                           |
| {{ Cssxref(":disabled") }}          | Selecciona elementos de la interfaz de usuario que están en estado inactivo.                                                                                                                                                                                                                                                                                                                                                                          |
| {{ Cssxref(":empty") }}             | Selecciona un elemento que no tiene elementos hijo, excepto por algún espacio en blanco opcional.                                                                                                                                                                                                                                                                                                                                                     |
| {{ Cssxref(":enabled") }}           | Selecciona elementos de la interfaz de usuario que están en estado activo.                                                                                                                                                                                                                                                                                                                                                                            |
| {{ Cssxref(":first") }}             | En [Paged Media](/es/docs/Web/CSS/Paged_Media), selecciona la primera página.                                                                                                                                                                                                                                                                                                                                                                         |
| {{ Cssxref(":first-child") }}       | Selecciona el primero entre elementos hermanos.                                                                                                                                                                                                                                                                                                                                                                                                       |
| {{ Cssxref(":first-of-type") }}     | Selecciona el primero entre un tipo determinado de elementos hermanos.                                                                                                                                                                                                                                                                                                                                                                                |
| {{ Cssxref(":focus") }}             | Selecciona el elemento que tiene el foco.                                                                                                                                                                                                                                                                                                                                                                                                             |
| {{ Cssxref(":focus-visible")}}      | Selecciona el elemento que tiene el foco cuando el foco tiene que estar visible para el usuario.                                                                                                                                                                                                                                                                                                                                                      |
| {{ Cssxref(":focus-within") }}      | Selecciona el elemento que tiene el foco y el elemento con un descendiente que tiene el foco.                                                                                                                                                                                                                                                                                                                                                         |
| {{ Cssxref(":future") }}            | Selecciona los elementos que van después del elemento en curso.                                                                                                                                                                                                                                                                                                                                                                                       |
| {{ Cssxref(":hover") }}             | Selecciona un elemento cuando el usuario interactúa con él.                                                                                                                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":indeterminate") }}     | Selecciona elementos de interfaz de usuario cuyo valor está en un estado no determinado, por lo general se trata de [casillas de verificación](/es/docs/Web/HTML/Elemento/input/checkbox).                                                                                                                                                                                                                                                            |
| {{ Cssxref(":in-range") }}          | Selecciona un elemento cuyo valor se encuentra dentro de un rango de valores determinado.                                                                                                                                                                                                                                                                                                                                                             |
| {{ Cssxref(":invalid") }}           | Selecciona un elemento, como por ejemplo un `<input>`, cuyo estado es no válido.                                                                                                                                                                                                                                                                                                                                                                      |
| {{ Cssxref(":lang") }}              | Selecciona un elemento según el idioma (valor del atributo [lang](/es/docs/Web/HTML/Atributos_Globales/lang) de HTML).                                                                                                                                                                                                                                                                                                                                |
| {{ Cssxref(":last-child") }}        | Selecciona el último elemento de entre sus elementos hermanos.                                                                                                                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":last-of-type") }}      | Selecciona el último de entre los elementos hermanos de un tipo determinado.                                                                                                                                                                                                                                                                                                                                                                          |
| {{ Cssxref(":left") }}              | En [Paged Media](/es/docs/Web/CSS/CSS_Pages) selecciona las páginas de la izquierda.                                                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":link")}}               | Selecciona los enlaces no visitados.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":local-link")}}         | Selecciona los enlaces que dirigen a páginas que se encuentran en la misma página web que el documento activo.                                                                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":is", ":is()")}}        | Selecciona cualquiera de los selectores de la lista de selección que se pase como valor de este selector.                                                                                                                                                                                                                                                                                                                                             |
| {{ Cssxref(":not") }}               | Selecciona elementos que otros selectores no han seleccionado antes y que se han pasado como valor de este selector.                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":nth-child") }}         | Selecciona elementos de entre una lista de elementos hermanos. Los elementos hermanos están relacionados por una fórmula del tipo _an + b_ (por ejemplo, 2*n* + 1 seleccionaría los elementos 1, 3, 5, 7, etc., es decir, todos los impares).                                                                                                                                                                                                         |
| {{ Cssxref(":nth-of-type") }}       | Selecciona elementos de entre una lista de elementos hermanos de un tipo determinado (por ejemplo, todos los elementos `<p>`). Los elementos hermanos están relacionados por una fórmula del tipo _an + b_ (por ejemplo, 2*n* + 1 relacionaría en la secuencia ese tipo de elementos, los números 1, 3, 5, 7, etc., es decir, todos los impares).                                                                                                     |
| {{ Cssxref(":nth-last-child") }}    | Selecciona elementos de entre una lista de elementos hermanos, contando hacia atrás desde el final. Los elementos hermanos están relacionados por una fórmula del tipo _an+b_ (por ejemplo, 2*n* + 1 r_elacionaría en la secuencia el último de los elementos de este tipo con el que se encuentra dos por delante, y así sucesivamente. Todos los impares, contando desde el final).                                                                 |
| {{ Cssxref(":nth-last-of-type") }}  | Selecciona los elementos de entre una lista de elementos hermanos que son de un tipo determinado (por ejemplo, elementos `<p>`), contando hacia atrás desde el final. Los elementos hermanos están relacionados por una fórmula del tipo _an+b_ (por ejemplo, 2*n* + 1 relacionaría en la secuencia el último de los elementos de ese tipo con el que se encuentra dos por delante, y así sucesivamente. Todos los impares, contando desde el final). |
| {{ Cssxref(":only-child") }}        | Selecciona un elemento que no tiene elementos hermanos.                                                                                                                                                                                                                                                                                                                                                                                               |
| {{ Cssxref(":only-of-type") }}      | Selecciona un elemento que es el único de su tipo entre sus elementos hermanos.                                                                                                                                                                                                                                                                                                                                                                       |
| {{ Cssxref(":optional") }}          | Selecciona los elementos de formulario que son innecesarios.                                                                                                                                                                                                                                                                                                                                                                                          |
| {{ Cssxref(":out-of-range") }}      | Selecciona un elemento cuyo valor está fuera de rango.                                                                                                                                                                                                                                                                                                                                                                                                |
| {{ Cssxref(":past") }}              | Selecciona los elementos que se encuentran antes del elemento activo.                                                                                                                                                                                                                                                                                                                                                                                 |
| {{ Cssxref(":placeholder-shown") }} | Selecciona el elemento de entrada que muestra texto de marcador de posición.                                                                                                                                                                                                                                                                                                                                                                          |
| {{ Cssxref(":playing") }}           | Selecciona un elemento que representa un audio, un vídeo o un recurso similar que se puede «reproducir» o «pausar», cuando el elemento está «en reproducción».                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":paused") }}            | Selecciona un elemento que representa un audio, un vídeo o un recurso similar que se puede «reproducir» o «pausar» cuando el elemento está «pausado».                                                                                                                                                                                                                                                                                                 |
| {{ Cssxref(":read-only") }}         | Selecciona los elementos que el usuario no puede modificar.                                                                                                                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":read-write") }}        | Selecciona los elementos que el usuario puede modificar.                                                                                                                                                                                                                                                                                                                                                                                              |
| {{ Cssxref(":required") }}          | Selecciona los elementos de formulario que son necesarios.                                                                                                                                                                                                                                                                                                                                                                                            |
| {{ Cssxref(":right") }}             | En [Paged Media](/es/docs/Web/CSS/CSS_Pages) selecciona las páginas de la derecha.                                                                                                                                                                                                                                                                                                                                                                    |
| {{ Cssxref(":root") }}              | Selecciona un elemento que es la raíz del documento.                                                                                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":scope") }}             | Selecciona cualquier elemento de ámbito.                                                                                                                                                                                                                                                                                                                                                                                                              |
| {{ Cssxref(":valid") }}             | Selecciona un elemento como `<input>`, en un estado válido.                                                                                                                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":target") }}            | Selecciona el elemento al que apunta la URL activa (es decir, cuyo ID coincide con el [identificador de fragmento de la URL](https://en.wikipedia.org/wiki/Fragment_identifier) activo).                                                                                                                                                                                                                                                              |
| {{ Cssxref(":visited") }}           | Selecciona los enlaces visitados.                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Pseudoelementos

| Selector                          | Descripción                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{ Cssxref("::after") }}          | Selecciona el elemento al que se puede aplicar estilo que aparece a continuación del contenido del elemento que lo origina. |
| {{ Cssxref("::before") }}         | Selecciona el elemento al que se puede aplicar estilo que aparece antes del contenido del elemento que lo origina.          |
| {{ Cssxref("::first-letter") }}   | Selecciona la primera letra del elemento.                                                                                   |
| {{ Cssxref("::first-line") }}     | Selecciona la primera línea del elemento de contenido.                                                                      |
| {{ Cssxref("::grammar-error") }}  | Selecciona una parte del documento que contiene un error de gramática indicado por el navegador.                            |
| {{ Cssxref("::selection") }}      | Selecciona la parte del documento que ha sido seleccionada.                                                                 |
| {{ Cssxref("::spelling-error") }} | Selecciona una parte del documento que contiene un error de ortografía indicado por el navegador.                           |

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
