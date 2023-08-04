---
title: Elementos títulos
slug: Web/HTML/Element/Heading_Elements
---

Los elementos de **encabezado** implementan seis niveles de encabezado del documento, `<h1>` es el más importante, y `<h6>`, el menos importante. Un elemento de encabezado describe brevemente el tema de la sección que presenta. La información de encabezado puede ser usada por los agentes usuarios, por ejemplo, para construir una tabla de contenidos para un documento automáticamente.

> **Nota:**
>
> - No se deben usar niveles inferiores para reducir el tamaño de la fuente: use la propiedad [CSS](/es/docs/Web/CSS) {{cssxref("font-size")}} para eso.
> - Evite omitir niveles de encabezado: siempre comience con `<h1>`, después use `<h2>` y así sucesivamente.
> - Con el elemento {{HTMLElement("section")}}, debe considerar evitar usar \<h1> más de una vez en una página; por costumbre, se usa para mostrar el título de la página, con todos los encabezados debajo de éste comenzando con `<h2>`. Cuando se usan secciones, debe usarse un `<h1>` por sección. Véase [Definiendo secciones](/es/docs/Sections_and_Outlines_of_an_HTML5_document#Definiendo_secciones_en_HTML5) en [Secciones y esquema de un documento HTML5](/es/docs/Sections_and_Outlines_of_an_HTML5_document) para más información.

| [Categorías de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido) | [Contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico), contenido de encabezados, contenido palpable.                                                                        |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                        | [Contenido textual o estático](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_textual_o_estático).                                                                                                  |
| Omisión de etiquetas                                                       | {{no_tag_omission}}                                                                                                                                                                                            |
| Elementos padres permitidos                                                | Cualquier elemento que acepte [contenido dinámico](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico); no debe usarse como hijo del elemento {{HTMLElement("hgroup")}}, pues éste es obsoleto |
| Interfaz DOM                                                               | {{domxref("HTMLHeadingElement")}}                                                                                                                                                                              |

## Atributos

Estos elementos incluyen los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

El atributo `align` es obsoleto; no debe usarse.

## Ejemplos

### Todos los encabezados

El siguiente código muestra todos los niveles de encabezado.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

Aquí está el resultado de este código:

{{ EmbedLiveSample('Todos_los_encabezados', '280', '300', '') }}

### Página de ejemplo

El código siguiente muestra unos pocos encabezados con algo de contenido debajo de ellos.

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

Aquí está el resultado de este código:

{{ EmbedLiveSample('Página_de_ejemplo', '280', '480', '') }}

## Sobre Accesibilidad

### Navegación

Una forma típica de navegación que utilizan las personas no videntes es moverse a través de la pantalla con las etiquetas de encabezado. De esta forma, pueden conocer rápidamente el contenido de la página en poco tiempo; por esta razón es importante prestar mucha atención a nuestras etiquetas de encabezado y no saltearse ningún nivel o podríamos confundir a este usuario.

#### No hacer

```html example-bad
<h1>Cabecera nivel 1</h1>
<h3>Cabecera nivel 3</h3>
<h4>Cabecera nivel 4</h4>
```

#### Sí hacer

```html example-good
<h1>Cabecera nivel 1</h1>
<h2>Cabecera nivel 2</h2>
<h3>Cabecera nivel 3</h3>
```

#### Anidar

Las etiquetas de cabecera pueden anidarse para generar sub-secciones en nuestros documentos. Esto beneficia la organización de la información y también ayuda a los usuarios de lectores de pantalla a conocer mejor la jerarquía de los contenidos.

1. `h1` Harry Potter

   1. `h2` Sinopsis
   2. `h2` Novelas

      1. `h3` Harry Potter y la Piedra Filosofal
      2. `h3` Harry Potter y la Cámara de los Secretos
      3. `h3` Harry Potter y el Prisionero de Azkaban
      4. `h3` Harry Potter y el Cáliz de Fuego
      5. `h3` Harry Potter y la Orden del Fenix
      6. `h3` Harry Potter y el Príncipe Mestizo
      7. `h3` Harry Potter y las Reliquias de la Muerte

   3. `h2` Películas

      1. `h3` Harry Potter y la Piedra Filosofal
      2. `h3` Harry Potter y la Cámara de los Secretos
      3. `h3` Harry Potter y el Prisionero de Azkaban
      4. `h3` Harry Potter y el Cáliz de Fuego
      5. `h3` Harry Potter y la Orden del Fenix
      6. `h3` Harry Potter y el Príncipe Mestizo
      7. `h3` Harry Potter y las Reliquias de la Muerte (Parte 1)
      8. `h3` Harry Potter y las Reliquias de la Muerte (Parte 2)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}

{{HTMLSidebar}}
