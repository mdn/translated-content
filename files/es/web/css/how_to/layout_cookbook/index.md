---
title: Libro de recetas de maquetación CSS
short-title: Libro de recetas de maquetación
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

El libro de recetas de maquetación CSS tiene como objetivo reunir recetas para patrones de maquetación comunes, cosas que quizás necesites implementar en tus propios sitios. Además de ofrecer código que puedes usar como punto de partida en tus proyectos, estas recetas muestran las distintas formas en que se pueden usar las especificaciones de maquetación y las decisiones que puedes tomar como desarrollador.

> [!NOTE]
> Si eres nuevo en la maquetación CSS, quizás quieras echar primero un vistazo a nuestro [módulo de aprendizaje de maquetación CSS](/es/docs/Learn_web_development/Core/CSS_layout), ya que te dará la base que necesitas para aprovechar las recetas de esta página.

## Las recetas

| Receta                                      | Descripción                                                                                                                             | Métodos de maquetación                                                                                             |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Objetos multimedia][media-objects]         | Una caja de dos columnas con una imagen a un lado y un texto descriptivo al otro, por ejemplo, una publicación en redes sociales.       | [Cuadrícula CSS][css-grid], {{cssxref("float")}} como alternativa, dimensionamiento con {{cssxref("fit-content")}} |
| [Columnas][columns]                         | Cuándo elegir el diseño multicolumna, flexbox o la cuadrícula para tus columnas.                                                        | [Cuadrícula CSS][css-grid], [Multicolumna][multicol], [Flexbox][flexbox]                                           |
| [Centrar un elemento][center]               | Cómo centrar un elemento horizontal y verticalmente.                                                                                    | [Flexbox][flexbox], [Alineación de cajas][box-alignment]                                                           |
| [Pies de página fijos][sticky-footers]      | Crear un pie de página que se sitúa en la parte inferior del contenedor o del viewport cuando el contenido es más corto.                | [Cuadrícula CSS][css-grid], [Flexbox][flexbox]                                                                     |
| [Navegación dividida][split-navigation]     | Un patrón de navegación en el que algunos enlaces están separados visualmente de los demás.                                             | [Flexbox][flexbox], {{cssxref("margin")}}                                                                          |
| [Navegación con migas de pan][breadcrumb]   | Crear una lista de enlaces que permita al visitante volver a subir por la jerarquía de páginas.                                         | [Flexbox][flexbox]                                                                                                 |
| [Grupo de lista con insignias][list-badges] | Una lista de elementos con una insignia que muestra un contador.                                                                        | [Flexbox][flexbox], [Alineación de cajas][box-alignment]                                                           |
| [Paginación][pagination]                    | Enlaces a páginas de contenido (como los resultados de una búsqueda).                                                                   | [Flexbox][flexbox], [Alineación de cajas][box-alignment]                                                           |
| [Tarjeta][card]                             | Un componente de tarjeta, que se muestra en una cuadrícula de tarjetas.                                                                 | [Diseño de cuadrícula][css-grid]                                                                                   |
| [Contenedor de cuadrícula][grid-wrapper]    | Para alinear el contenido de la cuadrícula dentro de un contenedor central, permitiendo a la vez que algunos elementos se salgan de él. | [Cuadrícula CSS][css-grid]                                                                                         |

[media-objects]: /es/docs/Web/CSS/How_to/Layout_cookbook/Media_objects
[columns]: /es/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts
[center]: /es/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element
[sticky-footers]: /es/docs/Web/CSS/How_to/Layout_cookbook/Sticky_footers
[split-navigation]: /es/docs/Web/CSS/How_to/Layout_cookbook/Split_navigation
[breadcrumb]: /es/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
[list-badges]: /es/docs/Web/CSS/How_to/Layout_cookbook/List_group_with_badges
[pagination]: /es/docs/Web/CSS/How_to/Layout_cookbook/Pagination
[card]: /es/docs/Web/CSS/How_to/Layout_cookbook/Card
[grid-wrapper]: /es/docs/Web/CSS/How_to/Layout_cookbook/Grid_wrapper
[css-grid]: /es/docs/Web/CSS/Guides/Grid_layout
[multicol]: /es/docs/Web/CSS/Guides/Multicol_layout
[flexbox]: /es/docs/Web/CSS/Guides/Flexible_box_layout
[box-alignment]: /es/docs/Web/CSS/Guides/Box_alignment

## Aporta una receta

Como en todo MDN, nos encantaría que aportaras una receta con el mismo formato que las anteriores. Consulta la [guía para añadir recetas al libro de recetas de maquetación](/es/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) para ver una plantilla y las pautas para escribir tu propio ejemplo.
