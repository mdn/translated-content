---
title: Tipos de páginas
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: e0a2b683c4ddaeecdc4ddebf16e4a72c2dda17ac
---

Hay una serie de tipos de páginas que se usan repetidamente en MDN.
Este artículo describe estos tipos de páginas, su propósito, y proporciona ejemplos de cada uno y plantillas para usar al crear una nueva página.

Hay tres categorías amplias de tipos de páginas en MDN, aunque algunos tipos de páginas caen en más de una categoría.

- Las páginas de **Referencia** describen los detalles de algo y se organizan según la estructura de lo descrito.
- Las páginas de **Guía** describen cómo hacer algo o usar algo y se organizan según los objetivos del lector.
- Las páginas de **Navegación** existen principalmente para proporcionar enlaces a otras páginas, generalmente sobre temas relacionados.

## Crear una nueva página

Agregar un nuevo documento es relativamente sencillo, especialmente si puede comenzar copiando un archivo `index.md` de un tema similar.
Hay algunas cosas a tener en cuenta:

- Los documentos se escriben en Markdown en un archivo `index.md`.
- Por ejemplo, si está creando un nuevo documento para una cabecera HTTP llamada `foo`, cree una nueva carpeta en `files/en-us/web/http/reference/headers/foo` y ponga el archivo Markdown en esta carpeta (`files/en-us/web/http/reference/headers/foo/index.md`).
- El archivo `index.md` de un documento debe comenzar con un front matter que define el `title`, `slug`, y, la mayor parte del tiempo, `page-type`.
  Puede encontrar útil referirse al front matter dentro del archivo `index.md` de un documento similar.

## Cómo usar las plantillas

Al crear una nueva página, puede asegurarse de haber usado la estructura/contenido de página correcto consultando una de nuestras plantillas de página; consulte las secciones a continuación.
Puede encontrar el código fuente exacto de cada plantilla (si desea copiarla) siguiendo el enlace "Fuente en **GitHub**" en la parte inferior de cada una.
Estas plantillas de página no tienen mucho sentido como páginas publicadas, pero si ve su código fuente, verán que contienen muchos comentarios útiles, marcadores de posición y sugerencias que detallan cómo completar la información faltante y crear su página.

En la parte superior de cada plantilla encontrará una sección titulada _Eliminar antes de publicar_; esto contiene información sobre cómo completar el título de la página, el slug, el menú de barra lateral y las etiquetas (por ejemplo, información que realmente no aparece en el cuerpo del artículo).
Debe eliminar esta sección después de haber seguido las instrucciones en ella, antes de que la página pueda considerarse terminada.

## Diseños de página antiguos

A veces se encontrará con páginas de referencia antiguas que se ven marcadamente diferentes de las plantillas presentadas aquí.
Por ejemplo, las páginas de interfaz antiguas tenían todos los detalles de los miembros de la interfaz en una sola página, y las páginas individuales de método/propiedad/constructor/detector de eventos no existían.

Si se encuentra con un conjunto de páginas antiguas, ¡nos encantaría que las actualice al nuevo estilo!
Sin embargo, apreciamos que esto podría ser una gran cantidad de trabajo.
Si la información para actualizar no es demasiado grande y tiene algo de tiempo libre, por todos los medios intente actualizarla al nuevo estilo.

Si el trabajo es más significativo, entonces debe considerar algunos factores al priorizar el trabajo:

- ¿Qué tan desactualizada está la información?
- ¿Qué tan baja es la calidad de la información?
- ¿Qué tan popular es la característica? ¿Qué tan buscada está la información?

Si desea reunir un equipo para trabajar en una actualización, o solo desea reportar o discutir algún contenido que necesita una actualización, no dude en [presentar un problema de contenido](https://github.com/mdn/content/issues) o [pedirnos ayuda](/es/docs/MDN/Community/Communication_channels).

## La clave front matter page-type

Hemos definido una clave front matter `page-type` para identificar claramente el tipo de páginas de MDN. Las plantillas vinculadas a continuación indican qué valores de `page-type` debe establecer para cada tipo de página.

Para la lista completa de tipos de páginas, consulte [La clave front matter page-type](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Plantillas de páginas

A continuación se encuentran ejemplos de las varias páginas que encontrará en MDN junto con plantillas que pueden usarse para crear nuevo contenido basado en el tipo de contenido que presentará, incluyendo las siguientes páginas:

- [Página de aterrizaje de API](#página_de_aterrizaje_de_api)
- [Página de referencia de API](#página_de_referencia_de_api)
- [Subpágina de referencia de API](#subpágina_de_referencia_de_api)
- [Página de referencia de elemento HTML](#página_de_referencia_de_elemento_html)
- [Página de referencia de atributo HTML](#página_de_referencia_de_atributo_html)
- [Página de referencia de elemento SVG](#página_de_referencia_de_elemento_svg)
- [Página de módulo CSS](#página_de_módulo_css)
- [Página de referencia de característica CSS](#página_de_referencia_de_característica_css)
- [Página de referencia de cabecera HTTP](#página_de_referencia_de_cabecera_http)
- [Página de referencia ARIA](#página_de_referencia_aria)
- [Página conceptual](#página_conceptual)
- [Página de glosario](#página_de_glosario)
- [Página de aterrizaje](#página_de_aterrizaje)
- [Páginas de Aprender desarrollo web]

Cada sección incluye enlaces a páginas de ejemplo en vivo para ese tipo de página.

### Página de aterrizaje de API

Una **página de aterrizaje de {{Glossary("API")}}** proporciona una descripción general de qué hace una API en particular, así como enlaces a la documentación de cada una de las interfaces, globales, funciones, etc. que ofrece la API.
No enlaza directamente a métodos o propiedades específicos dentro de las clases de la API, excepto en el contexto del texto de descripción general.
Es principalmente una página de _navegación_, pero también funciona como una página de _referencia_ de un vistazo para la API.

Hay algunos casos donde existen múltiples API que son distintas y se definen en sus propias especificaciones, pero están estrechamente relacionadas y, por lo tanto, tendría sentido cubrirlas con una sola página de aterrizaje de API.
Por ejemplo, la [Generic Sensor API](https://w3c.github.io/sensors/) cubre preocupaciones generales de sensores, pero las preocupaciones más específicas se cubren en otras API como [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/), etc.
En tales casos, muchos de los conceptos de alto nivel son los mismos, por lo que no tiene sentido repetirlos en múltiples páginas de aterrizaje.
En tal caso, tendría más sentido en términos de repetición y facilidad de encontrar cubrirlas todas bajo una sola página de aterrizaje "Web sensors".

#### Ejemplo

- [WebVR API](/es/docs/Web/API/WebVR_API)

#### Plantillas

- [Plantilla de página de aterrizaje de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### Página de referencia de API

> [!NOTE]
> También conocida como _Página de aterrizaje de interfaz_.

Una **página de referencia de API** enumera todos los métodos, propiedades, eventos, etc. que son miembros de una interfaz o clase en particular.
Proporciona una descripción general de qué hace o para qué se usa la clase o interfaz, y proporciona enlaces a la documentación de cada uno de estos miembros.
Es más granular que una página de aterrizaje de API, que típicamente enlaza a múltiples páginas de referencia de API.

#### Ejemplo

- [Interfaz Request](/es/docs/Web/API/Request) de la [Fetch API](/es/docs/Web/API/Fetch_API).

#### Plantillas

- [Plantilla de página de referencia de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Subpágina de referencia de API

Una **subpágina de referencia de API** es hija de una página de referencia de API.
Documenta un solo miembro de interfaz en detalle.

#### Ejemplos

- [Método `count()`](/es/docs/Web/API/IDBIndex/count) de la interfaz [IDBIndex](/es/docs/Web/API/IDBIndex) (parte de la [IndexedDB API](/es/docs/Web/API/IndexedDB_API))
- [Propiedad capabilities](/es/docs/Web/API/VRDisplay/capabilities) de la interfaz [VRDisplay](/es/docs/Web/API/VRDisplay) (parte de la [WebVR API](/es/docs/Web/API/WebVR_API))
- [Constructor Request()](/es/docs/Web/API/Request/Request) de la interfaz [Request](/es/docs/Web/API/Request) (parte de la [Fetch API](/es/docs/Web/API/Fetch_API))
- [Evento vrdisplaypresentchange](/es/docs/Web/API/Window/vrdisplaypresentchange_event) (parte de la [WebVR API](/es/docs/Web/API/WebVR_API), cuelga de la interfaz [Window](/es/docs/Web/API/Window))

#### Plantillas

- [Plantilla de subpágina de método de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [Plantilla de subpágina de propiedad de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [Plantilla de subpágina de constructor de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [Plantilla de subpágina de evento de API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### Página de referencia de elemento HTML

Una **página de referencia de HTML** enumera todos los atributos que están disponibles en un elemento HTML, explica el propósito y uso del elemento, y proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

#### Ejemplo

- [Elemento `<video>`](/es/docs/Web/HTML/Reference/Elements/video)

#### Plantillas

- [Plantilla de página de elemento HTML](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### Página de referencia de atributo HTML

Una página de atributo HTML enumera todos los valores que existen en un atributo HTML, explica el propósito y casos de uso del atributo, proporcionando ejemplos, información de compatibilidad con navegadores y otros datos importantes.

> [!NOTE]
> Los atributos específicos del elemento (por ejemplo, `placeholder` para `<input>`) no requieren una página separada si los atributos pueden cubrirse suficientemente dentro de la página de referencia del elemento principal (por ejemplo, el atributo `placeholder` debe cubrirse en la página del elemento `<input>`, no como una página independiente).

#### Ejemplo

- [Atributo `class`](/es/docs/Web/HTML/Reference/Global_attributes/class)

#### Plantillas

- [Plantilla de página de atributo HTML](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### Página de referencia de elemento SVG

Una **página de referencia de SVG** enumera todos los atributos que están disponibles en un elemento SVG, explica el propósito y uso del elemento, y proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

#### Ejemplo

- [Elemento \<g>](/es/docs/Web/SVG/Reference/Element/g)

#### Plantillas

- [Plantilla de página de elemento SVG](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### Página de módulo CSS

Cada **[módulo CSS](/es/docs/Web/CSS)** representa una especificación CSS que proporciona soporte para ciertas características e implementaciones en CSS. Por ejemplo, el [módulo de modelo de caja CSS](/es/docs/Web/CSS/Guides/Box_model) representa la [especificación](/es/docs/Web/CSS/Guides/Box_model#specifications) que describe las propiedades de margen y relleno que le permiten crear espaciado dentro y alrededor de una caja CSS.

Una **página de módulo CSS** proporciona una descripción general de las características que proporciona el módulo y enumera todas las propiedades, tipos de datos, funciones CSS, etc. que ofrece el módulo. Cuando es posible, la página del módulo CSS proporciona una demostración rápida de lo que se puede lograr usando las propiedades del módulo a través de un ejemplo interactivo.
La página del módulo sirve principalmente como página de _navegación_, pero también funciona como una página de _referencia_ de un vistazo para el módulo.

Algunas propiedades y características relacionadas que pertenecen a otros módulos, pero que están estrechamente relacionadas con la funcionalidad ofrecida por el módulo que está documentando, también pueden cubrirse en una sección _Conceptos relacionados_.
Por ejemplo, el tipo de dato `<easing-function>` y la consulta de medios `prefers-reduced-motion` no se cubren en el módulo de animaciones CSS, pero porque están estrechamente relacionadas con las animaciones CSS, es una buena idea resaltarlas en la sección [Conceptos relacionados](/es/docs/Web/CSS/Guides/Animations#related_concepts) de la página del módulo de animaciones CSS.

#### Ejemplos

- [Animaciones CSS](/es/docs/Web/CSS/Guides/Animations)
- [Interfaz de usuario básica CSS](/es/docs/Web/CSS/Guides/Basic_user_interface)
- [Efectos de filtro CSS](/es/docs/Web/CSS/Guides/Filter_effects)
- [Desplazamiento con snap CSS](/es/docs/Web/CSS/Guides/Scroll_snap)

#### Plantillas

- [Plantilla de página de módulo CSS](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template)

### Página de referencia de característica CSS

Una **página de referencia de CSS** enumera toda la sintaxis disponible para una característica CSS como un selector o propiedad, y explica el propósito y uso de la característica. También proporciona ejemplos, información de compatibilidad con navegadores y otros datos importantes.

#### Ejemplos

- Propiedad {{cssxref("background-color")}}
- Pseudoclase {{cssxref(":hover")}}
- Regla-at {{cssxref("@media")}}

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

### Página de referencia ARIA

Una **página de referencia ARIA** describe un [rol](/es/docs/Web/Accessibility/ARIA/Reference/Roles) o [atributo](/es/docs/Web/Accessibility/ARIA/Reference/Attributes) que define formas de hacer que el contenido web y las aplicaciones web sean más accesibles para las personas con discapacidades.

#### Ejemplos

- [Atributo `aria-busy`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [Rol `application`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Plantillas

- [Plantilla de página ARIA](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### Página conceptual

Una **página conceptual** es una página de _guía_ que explica o enseña algo.
Generalmente, si una página contiene principalmente prosa y no cae en otro tipo de página, probablemente sea una página conceptual.
Una discusión extendida de un tema puede extenderse a través de múltiples páginas conceptuales y vincularse usando las macros [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) y [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs).

#### Ejemplos

- [Usar la API WebVR](/es/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualizaciones con la API de Web Audio](/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Manejar conflictos](/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Página de glosario

Una **página de glosario** contiene una breve explicación de un término, tema o concepto.
El primer párrafo debe ser una descripción simple y autosuficiente del término, no más de un par de oraciones.
Esto puede ir seguido de enlaces a más información en la sección **Véase también**.
Si la página crece a más de una pantalla aproximadamente, es demasiado larga y debe convertirse en una página conceptual. Consulte [Cómo escribir y referenciar una entrada en el glosario](/es/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) para obtener más detalles.

#### Ejemplos

- [DOM](/es/docs/Glossary/DOM)
- [Exception](/es/docs/Glossary/Exception)
- [Hyperlink](/es/docs/Glossary/Hyperlink)

#### Plantillas

- [Plantilla de página de glosario](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Página de aterrizaje

Una **página de aterrizaje** sirve como un menú, de cierto tipo, para sus subpáginas y, por lo tanto, es principalmente una página de _navegación_.
Un diseño de página de aterrizaje se usa típicamente para la página raíz de un árbol de páginas sobre un tema en particular.
Comienza con un breve resumen del tema, luego presenta una lista estructurada de enlaces a sus subpáginas, y opcionalmente, material adicional que puede ser útil para el lector.

La lista de subpáginas puede generarse automáticamente usando la plantilla [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs). Sin embargo, en casos más complejos, la lista puede necesitarse crear (y mantener) a mano.

### Páginas de Aprender desarrollo web

La sección [Aprender desarrollo web](/es/docs/Learn_web_development) de MDN está dirigida específicamente a personas que aprenden los fundamentos básicos del desarrollo web y, como tal, requiere un enfoque diferente al resto del contenido de MDN. Puede encontrar más pautas en [Pautas de escritura de Aprender desarrollo web](/es/docs/MDN/Writing_guidelines/Learning_content).

Solo hay algunos tipos de página dentro de Aprender desarrollo web:

- **Página de aterrizaje de grupo de módulos**, por ejemplo [Módulos de aprendizaje básico](/es/docs/Learn_web_development/Core)
  - : Estas contienen un párrafo de introducción, una sección que detalla los requisitos previos que debe tener antes de comenzar el grupo de módulos y una lista de los módulos, seguida de una lista opcional de enlaces "Véase también".
- **Página de aterrizaje de módulo**, por ejemplo [Estructurar contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content)
  - : Estas contienen un párrafo de introducción, una sección que detalla los requisitos previos que debe tener antes de comenzar el módulo y una lista de los tutoriales contenidos, seguida de una lista opcional de "Tutoriales adicionales" que están relacionados pero no son parte de la ruta de aprendizaje central, y una lista opcional de enlaces "Véase también".
- **Página de tutorial**, por ejemplo [Sintaxis básica de HTML](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : La estructura de un tutorial de Learn no es estricta, pero debe proporcionar una experiencia de aprendizaje práctica (consulte [Pautas de escritura de Aprender desarrollo web > Enfoque](/es/docs/MDN/Writing_guidelines/Learning_content#approach)), debe tener un conjunto de "Requisitos previos" y "Resultados de aprendizaje" enumerados en la parte superior, y el contenido debe enseñar los resultados de aprendizaje declarados.

### Ejemplos

- [HTML](/es/docs/Web/HTML)
- [CSS](/es/docs/Web/CSS)
- [Web APIs](/es/docs/Web/API)
- [JavaScript](/es/docs/Web/JavaScript)
- [Aprender desarrollo web](/es/docs/Learn_web_development)
- [Recursos de la comunidad](/es/docs/MDN/Community)

## Véase también

- [Componentes de página](/es/docs/MDN/Writing_guidelines/Writing_style_guide#componentes_de_página)
- [Crear ejemplos de código en markdown](/es/docs/MDN/Writing_guidelines/Code_style_guide)
