---
title: Encabezados y párrafos
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Una de las tareas principales de HTML es dar estructura al texto para que el navegador pueda mostrar un documento HTML tal como pretende quien lo desarrolla. Este artículo explica cómo se puede usar {{glossary("HTML")}} para dar a una página su estructura fundamental definiendo encabezados y párrafos.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con HTML, como se explica en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Sintaxis básica de HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Cómo crear una buena estructura de documento con encabezados y contenido debajo de ellos.</li>
          <li>Usar HTML semántico en lugar de HTML de presentación, y por qué es importante.</li>
          <li>La necesidad de usar los niveles de encabezado de forma lógica, es decir, sin saltarse niveles ni usarlos de forma arbitraria porque quieres conseguir cierto tamaño de fuente (eso es tarea de CSS).</li>
          <li>Ventajas para el SEO: por ejemplo, las palabras clave tienen más peso en los encabezados.</li>
          <li>Ventajas para la accesibilidad: las tecnologías de asistencia (TA), como los lectores de pantalla, usan los encabezados (y otros puntos de referencia) como señales para navegar por el contenido. Los documentos HTML son muy difíciles de usar sin encabezados para quienes usan TA.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Encabezados y párrafos

La mayor parte del texto estructurado se compone de encabezados y párrafos, ya estés leyendo un cuento, un periódico, un libro de texto universitario, una revista, etc.

![Ejemplo de la portada de un periódico, con un encabezado de nivel superior, subencabezados y párrafos.](newspaper_small.jpg)

El contenido estructurado hace que la lectura sea más fácil y agradable.

En HTML, cada párrafo tiene que ir dentro de un elemento {{htmlelement("p")}}, así:

```html
<p>Soy un párrafo, oh sí, lo soy.</p>
```

Cada encabezado tiene que ir dentro de un elemento de encabezado:

```html
<h1>Soy el título del cuento.</h1>
```

Hay seis elementos de encabezado: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} y {{htmlelement("Heading_Elements", "h6")}}. Cada elemento representa un nivel distinto de contenido en el documento; `<h1>` representa el encabezado principal, `<h2>` representa los subencabezados, `<h3>` representa los subencabezados de segundo nivel, y así sucesivamente.

## Implementar una jerarquía estructural

Por ejemplo, en este cuento, el elemento `<h1>` representa el título del cuento, los elementos `<h2>` representan el título de cada capítulo y los elementos `<h3>` representan las subsecciones de cada capítulo:

```html
<h1>El pelmazo aplastante</h1>

<p>Por Chris Mills</p>

<h2>Capítulo 1: La noche oscura</h2>

<p>
  Era una noche oscura. En algún lugar ululó un búho. La lluvia caía a cántaros…
</p>

<h2>Capítulo 2: El silencio eterno</h2>

<p>Nuestro protagonista no logró sacarle ni un susurro a la figura sombría…</p>

<h3>El espectro habla</h3>

<p>
  Habían pasado varias horas más cuando, de repente, el espectro se incorporó de
  golpe y exclamó: «¡Por favor, ten piedad de mi alma!»
</p>
```

Lo que representen los elementos depende de ti, siempre que la jerarquía tenga sentido. Solo tienes que tener en cuenta algunas buenas prácticas al crear estas estructuras:

- Preferiblemente, usa un solo `<h1>` por página: es el encabezado de nivel superior, y todos los demás quedan por debajo de él en la jerarquía.
- Asegúrate de usar los encabezados en el orden correcto de la jerarquía. No uses elementos `<h3>` para representar subencabezados seguidos de elementos `<h2>` para representar subencabezados de segundo nivel: no tiene sentido y dará resultados extraños.
- De los seis niveles de encabezado disponibles, procura no usar más de tres por página, a menos que lo consideres necesario. Los documentos con muchos niveles (por ejemplo, una jerarquía de encabezados profunda) se vuelven difíciles de manejar y de navegar. En esos casos, conviene repartir el contenido en varias páginas si es posible.

## ¿Por qué necesitamos estructura?

Para responder a esta pregunta, echemos un vistazo a [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html), una buena receta de hummus. El cuerpo de este documento contiene ahora varios fragmentos de contenido. No están marcados de ninguna forma, pero están separados por saltos de línea (se pulsó Intro para pasar a la línea siguiente).

Sin embargo, cuando [abres el documento en tu navegador](https://mdn.github.io/learning-area/html/introduction-to-html/html-text-formatting/text-start.html), ¡verás que el texto aparece como un gran bloque!

![Una página web que muestra un muro de texto sin formato, porque no hay elementos en la página que lo estructuren.](screen_shot_2017-03-29_at_09.20.35.png)

Esto se debe a que no hay elementos que den estructura al contenido, así que el navegador no sabe qué es un encabezado y qué es un párrafo. Además:

- Quienes miran una página web suelen recorrerla rápidamente con la vista para encontrar el contenido relevante y, al principio, a menudo solo leen los encabezados. (Normalmente [pasamos muy poco tiempo en una página web](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)). Si no ven nada útil en pocos segundos, probablemente se frustren y se vayan a otra parte.
- Los motores de búsqueda que indexan tu página consideran el contenido de los encabezados como palabras clave importantes que influyen en la posición de la página en los resultados de búsqueda. Sin encabezados, tu página tendrá un mal rendimiento en cuanto a {{glossary("SEO")}} (optimización para motores de búsqueda).
- Las personas con discapacidad visual grave a menudo no leen las páginas web, sino que las escuchan. Esto se hace con un software llamado [lector de pantalla](https://es.wikipedia.org/wiki/Lector_de_pantalla). Este software ofrece formas de acceder rápidamente a un contenido de texto determinado. Entre las distintas técnicas que usa, ofrece un esquema del documento leyendo en voz alta los encabezados, lo que permite a sus usuarios encontrar rápidamente la información que necesitan. Si no hay encabezados, se verán obligados a escuchar el documento entero leído en voz alta.
- Para dar estilo al contenido con {{glossary("CSS")}}, o hacer que haga cosas interesantes con {{glossary("JavaScript")}}, necesitas tener elementos que envuelvan el contenido correspondiente, para que CSS o JavaScript puedan seleccionarlo de forma eficaz.

Por lo tanto, tenemos que dar a nuestro contenido un marcado estructural.

## Dar estructura al contenido

Vamos directamente a ello: resuelve un pequeño desafío de código para practicar con los encabezados y párrafos de HTML:

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Envuelve el texto adecuado del principio del contenido dentro de un elemento `<h1>` para convertirlo en el encabezado principal.
3. Hay dos pares de palabras que deberían ir dentro de elementos `<h2>` para convertirlos en encabezados de segundo nivel.
4. Envuelve las frases restantes en elementos `<p>` para convertirlas en párrafos. Debajo de cada elemento `<h2>` debería haber un elemento `<p>`.

Si cometes un error, puedes borrar tu trabajo usando el botón _Reset_ en el MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___headings_paragraphs
Partes del cuerpo favoritas El cerebro Bonita forma y color. Además, se encarga
de pensar. Los pies Huesudos y feos, pero útiles para moverse.
```

{{ EmbedLiveSample('headings_paragraphs', "100%", 60) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu elemento HTML terminado debería verse así:

```html
<h1>Partes del cuerpo favoritas</h1>

<h2>El cerebro</h2>

<p>Bonita forma y color. Además, se encarga de pensar.</p>

<h2>Los pies</h2>

<p>Huesudos y feos, pero útiles para moverse.</p>
```

</details>

## ¿Por qué necesitamos semántica?

Dependemos de la semántica en todo lo que nos rodea: nos basamos en la experiencia previa para saber cuál es la función de un objeto cotidiano; cuando vemos algo, sabemos qué función tendrá. Así, por ejemplo, esperamos que un semáforo en rojo signifique «alto» y que uno en verde signifique «adelante». Las cosas pueden complicarse muy rápido si se aplica la semántica equivocada. (¿Hay algún país que use el rojo para decir «adelante»? Esperamos que no).

Del mismo modo, tenemos que asegurarnos de usar los elementos correctos, dando a nuestro contenido el significado, la función o la apariencia correctos. En este contexto, el elemento `{{htmlelement("Heading_Elements", "&lt;h1>")}}` también es un elemento semántico, que da al texto que envuelve el rol (o significado) de «encabezado de nivel superior de tu página».

```html
<h1>Esto es un encabezado de nivel superior</h1>
```

De forma predeterminada, el navegador le dará un tamaño de fuente grande para que parezca un encabezado (aunque con CSS podrías darle el estilo que quisieras). Y, lo que es más importante, su valor semántico se usará de varias formas, por ejemplo, por parte de los motores de búsqueda y los lectores de pantalla (como se mencionó antes).

Por otro lado, podrías hacer que cualquier elemento _parezca_ un encabezado de nivel superior. Fíjate en lo siguiente:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  ¿Esto es un encabezado de nivel superior?
</span>
```

Esto es un elemento {{htmlelement("span")}}. No tiene semántica. Se usa para envolver contenido cuando quieres aplicarle CSS (o hacer algo con él mediante JavaScript) sin darle ningún significado adicional. (Aprenderás más sobre estos elementos más adelante en el curso). Le hemos aplicado algo de CSS para que parezca un encabezado de nivel superior, pero como no tiene valor semántico, no obtendrá ninguna de las ventajas adicionales descritas antes. Conviene usar el elemento HTML adecuado para cada tarea.

## Resumen

Con esto terminamos nuestro estudio de los encabezados y párrafos de HTML. A continuación, veremos más aspectos del HTML semántico: dar énfasis a las palabras.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
