---
title: Tipos de página
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: e0a2b683c4ddaeecdc4ddebf16e4a72c2dda17ac
---

MDN utiliza repetidamente varios tipos de páginas.
Este artículo describe estos tipos de páginas y sus propósitos, además de ofrecer ejemplos de cada uno y plantillas para usar al crear una nueva página.

Hay tres categorías generales de tipos de páginas en MDN, aunque algunos tipos pertenecen a más de una categoría.

- Las páginas de **referencia** describen los detalles de algo y están organizadas según la estructura de lo que describen.
- Las páginas de **guía** describen cómo hacer o usar algo, y están organizadas en función de los objetivos del lector.
- Las páginas de **navegación** existen principalmente para proporcionar enlaces a otras páginas, generalmente sobre temas relacionados.

## Crear una nueva página

Agregar un nuevo documento es relativamente sencillo, especialmente si puedes empezar copiando un archivo `index.md` de un tema similar.
Hay algunas cosas a tener en cuenta:

- Los documentos se escriben en Markdown en un archivo `index.md`.
- Por ejemplo, si estás creando un nuevo documento para una cabecera HTTP llamado `foo`, crea una nueva carpeta en `files/es/web/http/reference/headers/foo` y coloca el archivo Markdown en esa carpeta (`files/es/web/http/reference/headers/foo/index.md`).
- El archivo `index.md` de un documento debe comenzar con un front-matter que defina el `title`, el `slug` y, la mayoría de las veces, el `page-type`.
  Puede ser útil consultar el front-matter del `index.md` de un documento similar.

## Cómo usar las plantillas

Al crear una nueva página, puedes asegurarte de haber utilizado la estructura y el contenido correctos consultando una de nuestras plantillas de página (ve las secciones a continuación).
Puedes encontrar el código fuente exacto de cada plantilla (si deseas copiarlo) siguiendo el enlace "Source on **GitHub**" al pie de cada una.
Estas plantillas no tienen mucho sentido como páginas publicadas, pero si miras su código fuente, verás que contienen muchos comentarios útiles, marcadores de posición y sugerencias que detallan cómo completar la información faltante y crear tu página.

En la parte superior de cada plantilla encontrarás una sección titulada _Remove before publishing_ (Eliminar antes de publicar); esta contiene información sobre cómo completar el título de la página, el slug, el menú de la barra lateral y las etiquetas (es decir, información que no aparece en el cuerpo del artículo).
Debes eliminar esta sección después de haber seguido sus instrucciones, antes de que la página pueda considerarse terminada.

## Diseños de página de estilo antiguo

A veces encontrarás páginas de referencia de estilo antiguo que presentan diferencias notables en comparación con las plantillas presentadas aquí.
Por ejemplo, las páginas de interfaz de estilo antiguo tenían todos los detalles de los miembros de las interfaces en una sola página, y las páginas individuales de métodos, propiedades, constructores y detectores de eventos no existían.

Si encuentras un conjunto de páginas de estilo antiguo, ¡nos encantaría que las actualizaras al nuevo estilo!
Sin embargo, entendemos que esto podría suponer una gran cantidad de trabajo.
Si la información a actualizar no es demasiado extensa y tienes algo de tiempo libre, intenta actualizarla al nuevo estilo.

Si el trabajo es más significativo, considera estos factores al priorizar:

- ¿Qué tan desactualizada está la información?
- ¿Qué tan baja es la calidad de la información?
- ¿Qué tan popular es la característica? ¿Qué tan buscada es la información?

Si deseas reunir un equipo para trabajar en una actualización, o simplemente quieres informar o discutir algún contenido que necesita actualizarse, siéntete libre de [abrir un issue de contenido](https://github.com/mdn/content/issues) o [pedirnos ayuda](/es/docs/MDN/Community/Communication_channels).

## La clave page-type de front matter

Hemos definido una clave `page-type` de front matter para identificar claramente el tipo de páginas de MDN. Las plantillas enlazadas a continuación indican qué valores de `page-type` debes establecer para cada tipo de página.

Para ver la lista completa de tipos de página, consulta [La clave page-type de front matter](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Plantillas de página

A continuación, se muestran ejemplos de las distintas páginas que encontrarás en MDN, junto con plantillas que puedes usar para crear contenido nuevo según el tipo de contenido que se presentará, entre las que se incluyen las siguientes páginas:

- [Página de inicio de API](#api_landing_page)
- [Página de referencia de API](#api_reference_page)
- [Subpágina de referencia de API](#api_reference_subpage)
- [Página de referencia de elemento HTML](#html_element_reference_page)
- [Página de referencia de atributo HTML](#html_attribute_reference_page)
- [Página de referencia de elemento SVG](#svg_element_reference_page)
- [Página de módulo CSS](#css_module_page)
- [Página de referencia de característica CSS](#css_feature_reference_page)
- [Página de referencia de cabecera HTTP](#http_header_reference_page)
- [Página de referencia de ARIA](#aria_reference_page)
- [Página conceptual](#conceptual_page)
- [Página de glosario](#glossary_page)
- [Página de inicio](#landing_page)
- [Páginas de Aprende desarrollo web](#learn_web_development_pages)

Cada sección incluye enlaces a páginas de ejemplo en vivo para ese tipo de página.

### Página de inicio de API

Una **página de inicio de {{Glossary("API")}}** ofrece una descripción general de lo que hace una API en particular, así como enlaces a la documentación de cada una de las interfaces, globales, funciones, etc. que ofrece la API.
No enlaza directamente a métodos o propiedades específicos dentro de las clases de la API, excepto en el contexto del texto de descripción general.
Es principalmente una página de _navegación_, pero también funciona como una página de _referencia_ rápida para la API.

Hay casos en que existen múltiples API distintas, definidas en sus propias especificaciones, que están estrechamente relacionadas y, por lo tanto, tendría sentido cubrirlas con una única página de inicio de API.
Por ejemplo, la [Generic Sensor API](https://w3c.github.io/sensors/) cubre aspectos generales de sensores, pero aspectos más específicos se cubren en otras APIs como [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/), etc.
En tales casos, muchos de los conceptos de alto nivel son los mismos, por lo que no tiene sentido repetirlos en múltiples páginas de inicio.
En ese caso, tendría más sentido en términos de redundancia y facilidad de búsqueda cubrirlos todos bajo una única página de inicio de "Sensores web".

#### Ejemplo

- [WebVR API](/es/docs/Web/API/WebVR_API)

#### Plantillas

- [Plantilla de página de inicio de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### Página de referencia de API

> [!NOTE]
> También conocida como _página de inicio de interfaz_.

Una **página de referencia de API** enumera todos los métodos, propiedades, eventos, etc. que son miembros de una interfaz o clase en particular.
Proporciona una descripción general de lo que hace o para qué se usa la clase o interfaz, y ofrece enlaces a la documentación de cada uno de estos miembros.
Es más detallada que una página de inicio de API, que típicamente enlaza a múltiples páginas de referencia de API.

#### Ejemplo

- [Interfaz Request](/es/docs/Web/API/Request) de la [Fetch API](/es/docs/Web/API/Fetch_API).

#### Plantillas

- [Plantilla de página de referencia de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Subpágina de referencia de API

Una **subpágina de referencia de API** es una página hija de una página de referencia de API.
Documenta en detalle un único miembro de la interfaz.

#### Ejemplos

- [Método `count()`](/es/docs/Web/API/IDBIndex/count) de la interfaz [IDBIndex](/es/docs/Web/API/IDBIndex) (parte de la [API IndexedDB](/es/docs/Web/API/IndexedDB_API))
- [Propiedad capabilities](/es/docs/Web/API/VRDisplay/capabilities) de la interfaz [VRDisplay](/es/docs/Web/API/VRDisplay) (parte de la [WebVR API](/es/docs/Web/API/WebVR_API))
- [Constructor Request()](/es/docs/Web/API/Request/Request) de la interfaz [Request](/es/docs/Web/API/Request) (parte de la [Fetch API](/es/docs/Web/API/Fetch_API))
- [Evento vrdisplaypresentchange](/es/docs/Web/API/Window/vrdisplaypresentchange_event) (parte de la [WebVR API](/es/docs/Web/API/WebVR_API), depende de la interfaz [Window](/es/docs/Web/API/Window))

#### Plantillas

- [Plantilla de subpágina de método de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [Plantilla de subpágina de propiedad de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [Plantilla de subpágina de constructor de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [Plantilla de subpágina de evento de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### Página de referencia de elemento HTML

Una **página de referencia HTML** enumera todos los atributos disponibles en un elemento HTML, explica el propósito y uso del elemento, y proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

#### Ejemplo

- [Elemento `<video>`](/es/docs/Web/HTML/Reference/Elements/video)

#### Plantillas

- [Plantilla de página de elemento HTML](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### Página de referencia de atributo HTML

Una página de atributo HTML enumera todos los valores que existen en un atributo HTML, explica el propósito y casos de uso del atributo, y proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

> [!NOTE]
> Los atributos específicos de un elemento (por ejemplo, `placeholder` para `<input>`) no requieren una página separada si pueden cubrirse suficientemente dentro de la página de referencia del elemento padre (por ejemplo, el atributo `placeholder` debe cubrirse en la página del elemento `<input>`, no como una página independiente).

#### Ejemplo

- [Atributo `class`](/es/docs/Web/HTML/Reference/Global_attributes/class)

#### Plantillas

- [Plantilla de página de atributo HTML](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### Página de referencia de elemento SVG

Una **página de referencia SVG** enumera todos los atributos disponibles en un elemento SVG, explica el propósito y uso del elemento, y proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

#### Ejemplo

- [Elemento \<g>](/es/docs/Web/SVG/Reference/Element/g)

#### Plantillas

- [Plantilla de página de elemento SVG](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### Página de módulo CSS

Cada **módulo de [CSS](/es/docs/Web/CSS)** representa una especificación de CSS que brinda soporte para ciertas características e implementaciones en CSS. Por ejemplo, el módulo [modelo de caja CSS](/es/docs/Web/CSS/Guides/Box_model) representa la [especificación](/es/docs/Web/CSS/Guides/Box_model#specifications) que describe las propiedades de margen y relleno (padding) que permiten crear espaciado dentro y alrededor de una caja CSS.

Una **página de módulo CSS** proporciona una descripción general de las características que ofrece el módulo y enumera todas las propiedades, tipos de datos, funciones CSS, etc., que ofrece el módulo. Cuando es posible, la página de módulo CSS incluye una demostración rápida de lo que se puede lograr usando las propiedades del módulo mediante un ejemplo interactivo.
La página del módulo sirve principalmente como una página de _navegación_, pero también funciona como una página de _referencia_ rápida para el módulo.

Algunas propiedades y características relacionadas que pertenecen a otros módulos, pero que están estrechamente vinculadas a la funcionalidad que ofrece el módulo que estás documentando, también pueden cubrirse en una sección _Conceptos relacionados_.
Por ejemplo, el tipo de datos `<easing-function>` y la media query `prefers-reduced-motion` no están cubiertos en el módulo de animaciones CSS, pero dado que están estrechamente relacionados con las animaciones CSS, es recomendable destacarlos en la sección [Conceptos relacionados](/es/docs/Web/CSS/Guides/Animations#related_concepts) de la página del módulo de animaciones CSS.

#### Ejemplos

- [Animaciones CSS](/es/docs/Web/CSS/Guides/Animations)
- [Interfaz de usuario básica de CSS](/es/docs/Web/CSS/Guides/Basic_user_interface)
- [Efectos de filtro CSS](/es/docs/Web/CSS/Guides/Filter_effects)
- [Ajuste de desplazamiento CSS (Scroll snap)](/es/docs/Web/CSS/Guides/Scroll_snap)

#### Plantillas

- [Plantilla de página de módulo CSS](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template)

### Página de referencia de característica CSS

Una **página de referencia CSS** enumera toda la sintaxis disponible para una característica CSS, como un selector o una propiedad, y explica el propósito y uso de la característica. También proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

#### Ejemplos

- Propiedad {{cssxref("background-color")}}
- Pseudoclase {{cssxref(":hover")}}
- Regla arroba {{cssxref("@media")}}

#### Plantillas

- [Plantilla de página de propiedad CSS](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [Plantilla de página de selector CSS](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [Plantilla de página de función CSS](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### Página de referencia de cabecera HTTP

Una **página de referencia de cabecera HTTP** enumera todas las directivas disponibles que puede contener una cabecera HTTP, y explica el propósito y uso de la cabecera.
También proporciona ejemplos, información de compatibilidad con navegadores y otras explicaciones importantes.

#### Ejemplo

- [Cabecera Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Plantillas

- [Plantilla de página de cabecera HTTP](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Página de referencia de ARIA

Una **página de referencia de ARIA** describe un [rol](/es/docs/Web/Accessibility/ARIA/Reference/Roles) o [atributo](/es/docs/Web/Accessibility/ARIA/Reference/Attributes) que define formas de hacer que el contenido web y las aplicaciones web sean más accesibles para personas con discapacidades.

#### Ejemplos

- [Atributo `aria-busy`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [Rol `application`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Plantillas

- [Plantilla de página de ARIA](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Página conceptual

Una **página conceptual** es una página de _guía_ que explica o enseña algo.
Generalmente, si una página contiene principalmente texto explicativo y no encaja en ningún otro tipo de página, es probable que sea una página conceptual.
La discusión detallada de un tema puede dividirse en varias páginas conceptuales y vincularse mediante las macros [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) y [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs).

#### Ejemplos

- [Usar la WebVR API](/es/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualizaciones con la API Web Audio](/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Manejo de conflictos](/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Página de glosario

Una **página de glosario** contiene una breve explicación de un término, tema o concepto.
El primer párrafo debe ser una descripción simple y autónoma del término, de no más de un par de oraciones.
Esto puede ir seguido de enlaces a más información en la sección **Véase también**.
Si la extensión de la página supera la de una pantalla aproximadamente, es demasiado larga y debe convertirse en una página conceptual. Consulta [Cómo escribir y referenciar una entrada en el glosario](/es/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) para obtener más detalles.

#### Ejemplos

- [DOM](/es/docs/Glossary/DOM)
- [Exception](/es/docs/Glossary/Exception)
- [Hyperlink](/es/docs/Glossary/Hyperlink)

#### Plantillas

- [Plantilla de página de glosario](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Página de inicio

Una **página de inicio** sirve como menú para sus subpáginas y es, por lo tanto, principalmente una página de _navegación_.
Un diseño de página de inicio se usa típicamente para la página raíz de un árbol de páginas sobre un tema en particular.
Comienza con un breve resumen del tema, luego presenta una lista estructurada de enlaces a sus subpáginas y, opcionalmente, material adicional que puede ser útil para el lector.

La lista de subpáginas puede generarse automáticamente usando la plantilla [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs). Sin embargo, en casos más complejos, puede ser necesario crear (y mantener) la lista manualmente.

### Páginas de Aprende desarrollo web

La sección [Aprende desarrollo web](/es/docs/Learn_web_development) de MDN está dirigida específicamente a personas que están aprendiendo los fundamentos básicos del desarrollo web y, como tal, requiere un enfoque diferente al del resto del contenido de MDN. Puedes encontrar más pautas en [Guías de escritura de Aprende desarrollo web](/es/docs/MDN/Writing_guidelines/Learning_content).

Dentro de Aprende desarrollo web solo hay unos pocos tipos de páginas.

- **Página de inicio de grupo de módulos**, por ejemplo [Módulos de aprendizaje básicos](/es/docs/Learn_web_development/Core)
  - : Estas contienen un párrafo de introducción, una sección que detalla los prerrequisitos que debes tener antes de comenzar el grupo de módulos y una lista de los módulos, seguida de una lista opcional de enlaces "Véase también".
- **Página de inicio de módulo**, por ejemplo [Estructurar contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content)
  - : Estas contienen un párrafo de introducción, una sección que detalla los prerrequisitos que debes tener antes de comenzar el módulo y una lista de los tutoriales incluidos, seguida de una lista opcional de "Tutoriales adicionales" que están relacionados pero no forman parte de la ruta de aprendizaje central, y una lista opcional de enlaces "Véase también".
- **Página de tutorial**, por ejemplo [Sintaxis básica de HTML](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : La estructura de un tutorial de Aprende no es estricta, pero debe proporcionar una experiencia de aprendizaje práctica (consulta [Guías de escritura de Aprende desarrollo web > Enfoque](/es/docs/MDN/Writing_guidelines/Learning_content#approach)), debe tener un conjunto de "Prerrequisitos" y "Resultados de aprendizaje" enumerados al principio, y el contenido debe enseñar los resultados de aprendizaje indicados.

### Ejemplos

- [HTML](/es/docs/Web/HTML)
- [CSS](/es/docs/Web/CSS)
- [Web APIs](/es/docs/Web/API)
- [JavaScript](/es/docs/Web/JavaScript)
- [Aprende desarrollo web](/es/docs/Learn_web_development)
- [Recursos de la comunidad](/es/docs/MDN/Community)

## Véase también

- [Componentes de página](/es/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Crear ejemplos de código en Markdown](/es/docs/MDN/Writing_guidelines/Code_style_guide)
