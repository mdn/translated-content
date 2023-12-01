---
title: Enlaces rápidos
slug: MDN/Writing_guidelines/Page_structures/Quicklinks
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

MDN admite la adición de enlaces rápidos a las páginas; estos son cuadros que contienen una lista potencialmente jerárquica de enlaces a otras páginas en MDN o a páginas fuera del sitio.
Este artículo describe cómo crear enlaces rápidos.

## Sintaxis de enlaces rápidos

Los enlaces rápidos para una página se proporcionan mediante la creación de un bloque {{HTMLElement("section")}} con el ID "Quick_links".
Luego coloca los contenidos que van en el cuadro de enlaces rápidos dentro de la sección.
Estos deben formatearse como una lista ordenada {{HTMLElement("ol")}} (opcionalmente anidada).
Puede hacerlo utilizando el botón de lista numerada en la barra de herramientas del editor.
Por ejemplo, su HTML de enlaces rápidos podría verse así:

```html
<section id="Quick_links">
  <ol>
    <li>
      <a href="http://docs.ckeditor.com/">Sitio de documentación de CKEditor</a>
    </li>
    <li>
      <a href="http://mxr.mozilla.org/"
        >MXR: referencia cruzada de fuentes de Mozilla</a
      >
    </li>
    <li class="toggle">
      <details>
        <summary>Guías de estilo</summary>
        <ol>
          <li>
            <a href="http://www.economist.com/research/StyleGuide/"
              >La guía de estilo de The Economist</a
            >
          </li>
          <li>
            <a href="https://www.amazon.com/gp/product/0226104036/"
              >El manual de estilo de chicago</a
            >
          </li>
          <li>
            <a href="http://www.answers.com/library/Dictionary"
              >Diccionario de answers.com</a
            >
          </li>
          <li>
            <a href="http://www.wsu.edu/~brians/errors/"
              >Errores comunes en inglés</a
            >
          </li>
        </ol>
      </details>
    </li>
  </ol>
</section>
```

Las cosas importantes a tener en cuenta:

- La lista **debe** ser una lista ordenada.
- Puede tener listas anidadas usando un elemento {{HTMLElement("details")}} que contiene otra lista ordenada **dentro** del mismo bloque {{HTMLElement("li")}}.

## Uso de macros para crear enlaces rápidos

Vale la pena señalar que puede (y a menudo **debe**) usar macros para generar enlaces rápidos.
Cada vez que necesite usar el mismo conjunto de enlaces rápidos en más de una página, debe convertirlos en una macro.

Tu macro puede ser tan simple o tan compleja como sea necesario; necesita generar un HTML similar al que se muestra en [Sintaxis de enlaces rápidos](#sintaxis_de_enlaces_rápidos) arriba.

### Macros de enlaces rápidos estándar

Aquí hay una lista de nuestras macros estándar para generar enlaces rápidos.

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs)
  - : Crea los enlaces rápidos estándar para las páginas de referencia de CSS.
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs)
  - : Crea los enlaces rápidos estándar para las páginas de referencia HTML.
- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs)
  - : Crea un conjunto de vínculos rápidos utilizando los elementos secundarios de la página actual (o la página especificada) como destinos.
    Esto crea listas jerárquicas de hasta dos niveles de profundidad.
    Los títulos de las páginas se utilizan como texto del enlace y sus resúmenes como información sobre herramientas.
