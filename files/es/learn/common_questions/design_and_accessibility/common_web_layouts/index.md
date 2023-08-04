---
title: ¿Qué contienen los diseños web comunes?
slug: Learn/Common_questions/Design_and_accessibility/Common_web_layouts
---

Cuando diseña páginas para su sitio web es bueno tener una idea de los diseños más comunes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Asegúrese que usted ya ha pensado sobre
        <a href="/es/docs/Learn/Common_questions/Thinking_before_coding"
          >lo que quiere lograr</a
        >
        con su proyecto web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender dónde colocar las cosas en sus páginas web, y cómo hacerlo.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

Existe una razón para que hablemos sobre diseño web. Se comienza con una página en blanco, y se pueden tomar muchas direcciones. Si no tienes mucha experiencia, comenzar con una página en blanco pudiera ser un poco temible. Nosotros tenemos alrededor de 25 años de experiencia y te daremos algunas reglas básicas para ayudarte a diseñar tu sitio.

Aún ahora con el nuevo enfoque de la web para móviles, la mayoría de las páginas web principales son construídas a partir de las siguientes partes:

- Encabezado
  - : Visible en la parte superior de cada página de un sitio. Contiene información relevante para todas las páginas (como el nombre del sitio o el logo) y un sistema de navegación fácil de usar.
- Contenido principal
  - : Es el área más grande, contiene contenido único para la página actual.
- Contenido secundario
  - : 1) Información complementaria del contenido principal; 2) información compartida entre un subconjunto de páginas; 3) sistema de navegación alternativo. De hecho, todo lo que no es absolutamente requerido por el contenido de la página principal.
- Pie de página
  - : Visible en la parte inferior de cada página de un sitio. Análogamente al encabezado contiene información global, en este caso menos llamativa como avisos legales o información de contacto.

Estos elementos son bastante comunes en todos los factores de forma, pero pueden ser dispuestos de diferentes maneras. Aquí se presentan algunos ejemplos (**1** representa encabezado, **2** pie de página; **A** contenido principal; **B1, B2** barras laterales):

**Diseño de una columna.** Especialmente importante para navegadores de móviles de modo que no se llene la pequeña pantalla.

![Example of a 1 column layout: Main on top and asides stacked beneath it.](1-col-layout.png)

**Diseño de dos columnas.** A menudo utilizado para tabletas, ya que tienen pantallas de tamaño medio.

![Example of a basic 2 column layout: One aside on the left column, and main on the right column.](2-col-layout-right.png) ![Example of a basic 2 column layout: One aside on the right column, and main on the left column.](2-col-layout-left.png)

**Diseños de tres columnas**. Solamene adecuado para escritorios con pantallas grandes. (Incluso muchos usuarios de escritorio prefieren ver cosas en pequeñas ventanas que en pantalla completa.)

![Example of a basic 3 column layout: Aside on the left and right column, Main on the middle column.](3-col-layout.png) ![Another example of a 3 column layout: Aside side by side on the left, Main on the right column.](3-col-layout-alt.png) ![Another example of a 3 column layout: Aside side by side on the right, Main on the left column.](3-col-layout-alt2.png)

La verdadera diversión comienza cuando empiezas a mezclarlos todos juntos.

![Example of mixed layout: Main on top and asides beneath it side by side.](1-col-layout-alt.png) ![Example of a mixed layout: Main on the left column and asides stack on top of each other on the right column](2-col-layout-left-alt.png) ![Example of a mixed layout: one aside on the left column and main in the right column with a aside beneath main.](2-col-layout-mix.png) ![Example of a mixed layout: Main on the left of the first row and one aside on the right of that same row, a second aside convering the whole second row.](2-col-layout-mix-alt.png)…

Estos son solo ejemplos y eres bastante libre de diseñar las cosas como quieras. Puedes notar que mientras el contenido se puede mover alrededor de la pantalla, siempre se mantiene el encabezado (1) en la parte superior y el pie de página (2) en la parte inferior. Además, el contenido principal (A) es lo más importante, así que dale la mayor parte del espacio.

Estas son reglas del juego que puedes aprovechar. Desde luego, existen diseños complejos y excepciones. En otros artículos discutiremos cómo diseñar sitios responsivos (sitios que cambian en dependencia del tamaño de la pantalla) y sitios cuyos diseños varían entre las páginas. Por ahora, es mejor mantener tu diseño consistente en todo tu sitio.

## Aprendizaje activo

_Aún no hay aprendizaje activo disponible. [Por favor, considere contribuir](/es/docs/MDN/Getting_started)._

## Profundización

Estudiemos algunos ejemplos más concretos tomados de sitios web bien conocidos.

### Diseño de una columna

**[Aplicación de Invision](http://www.invisionapp.com/)**. Un diseño típico de una columna proporcionando toda la información linealmente en una sola página.

![Example of a 1 column layout in the wild](screenshot-product.jpg) ![1 column layout with header, main content, a stack of aside contents and a footer](screenshot-product-overlay.jpg)

Bastante sencillo. Sólo recuerda que muchas personas navegarán por tu sitio desde escritorios, así que haz tu contenido también utilizable allí.

### Diseño de dos columnas

**[Abduzeedo](http://abduzeedo.com/typography-mania-261)**, un simple diseño de blog. Los blogs usualmente tienen dos columnas, una para el contenido principal que es más ancha y otra más estrecha para el contenido secundario (como widgets, niveles de navegación secundarios y anuncios).

![Example of a 2 column layout for a blog](screenshot-blog.jpg) ![A 2 column layout with the main content on the left column](screenshot-blog-overlay.jpg)

En este ejemplo, mira la imagen (B1) justo debajo del encabezado. Está relacionada con el contenido principal, pero el contenido principal tiene sentido sin esta, de este modo pudieras pensar que la imagen forma parte del contenido principal o del lateral. En realidad no importa. Lo que importa es que si pones algo justo debajo del encabezado, debería ser parte del contenido principal o estar directamente relacionado con este.

### Es una trampa

**[MICA](http://www.mica.edu/About_MICA.html)**. Este es un poco más complicado. Parece un diseño de tres columnas...

![Example of a false 3 columns layout](screenshot-education.jpg) ![It looks like a 3 columns layout but actually, the aside content is floating around.](screenshot-education-overlay.jpg)

...pero no lo es. B1 y B2 flotan alrededor del contenido principal. Recuerda esa palabra "float"--te acordarás cuando empieces a aprender sobre {{Glossary("CSS")}}.

¿Por qué pensarías que es un diseño de tres columnas? Porque la imagen en la parte superior derecha está en forma de L, porque B1 parece una columna sosteniendo el conenido principal desplazado, y porque la "M" y la "I" del logo MICA crean una línea de fuerza vertical.

Este es un buen ejemplo de diseño clásico que admite cierta creatividad. Los diseños simples son más fáciles de implementar, pero deje espacio expresar su creatividad en el área.

### Un diseño mucho más complicado

**La [Opera de Paris](https://www.operadeparis.fr/en/saison-2014-2015/opera/la-boheme-puccini).**

![An example of a tricky layout.](screenshot-opera.jpg) ![This is a 2 column layout but the header is overlaping the main content.](screenshot-opera-overlay.jpg)

Básicamente un diseño de dos columnas, pero notarás muchos ajustes por aquí y por allá que rompen visualmente el diseño. Especialmente, el encabezado se superposiciona a la imagen del contenido principal. La manera en que la curva del menú del encabezado se une con la curva en el fondo de la imagen, hacen que el encabezado y el contenido principal parezcan un solo componente a pesar de que son técnicamente completamente distintos.

Como ves, puedes crear maravillosos sitios web incluso sólo con diseños básicos. Échale una mirada a tus propios sitos web favoritos y pregúntate a ti mismo, ¿dónde está el encabezado, el pie de página, el contenido principal y el contenido secundario? Esto te inspirará para tu propio diseño y te dará buenas pistas sobre para cuáles diseños funciona y para cuáles no.
