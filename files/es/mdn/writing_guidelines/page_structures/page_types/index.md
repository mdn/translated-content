---
title: Tipos de página
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
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

- [Página de inicio de API](#página_de_inicio_de_api)
- [Página de referencia de API](#página_de_referencia_de_api)
- [Subpágina de referencia de API](#subpágina_de_referencia_de_api)
- [Página de referencia de elemento HTML](#página_de_referencia_de_elemento_html)
- [Página de referencia de atributo HTML](#página_de_referencia_de_atributo_html)
- [Página de referencia de elemento SVG](#página_de_referencia_de_elemento_svg)
- [Página de módulo CSS](#página_de_módulo_css)
- [Página de referencia de característica CSS](#página_de_referencia_de_característica_css)
- [Página de referencia de cabecera HTTP](#página_de_referencia_de_cabecera_http)
- [Página de referencia de ARIA](#página_de_referencia_de_aria)
- [Página conceptual](#página_conceptual)
- [Página de glosario](#página_de_glosario)
- [Clase de JavaScript](#página_de_clase_de_javascript)
- [Constructor de JavaScript](#página_de_constructor_de_javascript)
- [Error de JavaScript](#página_de_error_de_javascript)
- [Función de JavaScript](#página_de_función_de_javascript)
- [Propiedad global de JavaScript](#página_de_propiedad_global_de_javascript)
- [Propiedad de acceso de instancia de JavaScript](#página_de_propiedad_de_acceso_de_instancia_de_javascript)
- [Propiedad de datos de instancia de JavaScript](#página_de_propiedad_de_datos_de_instancia_de_javascript)
- [Método de instancia de JavaScript](#página_de_método_de_instancia_de_javascript)
- [Espacio de nombres de JavaScript](#página_de_espacio_de_nombres_de_javascript)
- [Operador de JavaScript](#página_de_operador_de_javascript)
- [Sentencia de JavaScript](#página_de_sentencia_de_javascript)
- [Propiedad de acceso estática de JavaScript](#página_de_propiedad_de_acceso_estática_de_javascript)
- [Propiedad de datos estática de JavaScript](#página_de_propiedad_de_datos_estática_de_javascript)
- [Método estático de JavaScript](#página_de_método_estático_de_javascript)
- [Página de inicio](#página_de_inicio)
- [Páginas de Aprende desarrollo web](#páginas_de_aprende_desarrollo_web)

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

Cada **módulo de [CSS](/es/docs/Web/CSS)** representa una especificación de CSS que brinda soporte para ciertas características e implementaciones en CSS. Por ejemplo, el módulo [modelo de caja CSS](/es/docs/Web/CSS/Guides/Box_model) representa la [especificación](/es/docs/Web/CSS/Guides/Box_model#especificaciones) que describe las propiedades de margen y relleno (padding) que permiten crear espaciado dentro y alrededor de una caja CSS.

Una **página de módulo CSS** proporciona una descripción general de las características que ofrece el módulo y enumera todas las propiedades, tipos de datos, funciones CSS, etc., que ofrece el módulo. Cuando es posible, la página de módulo CSS incluye una demostración rápida de lo que se puede lograr usando las propiedades del módulo mediante un ejemplo interactivo.
La página del módulo sirve principalmente como una página de _navegación_, pero también funciona como una página de _referencia_ rápida para el módulo.

Algunas propiedades y características relacionadas que pertenecen a otros módulos, pero que están estrechamente vinculadas a la funcionalidad que ofrece el módulo que estás documentando, también pueden cubrirse en una sección _Conceptos relacionados_.
Por ejemplo, el tipo de datos `<easing-function>` y la media query `prefers-reduced-motion` no están cubiertos en el módulo de animaciones CSS, pero dado que están estrechamente relacionados con las animaciones CSS, es recomendable destacarlos en la sección [Conceptos relacionados](/es/docs/Web/CSS/Guides/Animations#conceptos_relacionados) de la página del módulo de animaciones CSS.

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

### Página de clase de JavaScript

Una **página de clase de JavaScript** ofrece una descripción general de una clase de JavaScript, incluidos su propósito y su uso, y enumera todos los métodos y propiedades, estáticos o de instancia, de la clase. Una clase de JavaScript se define como un objeto de función intrínseco con una propiedad `prototype` que comparten todas las instancias de la clase. Según esta definición, `BigInt` también es una clase, aunque no se pueda llamar con `new`.

#### Ejemplos

- [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`BigInt`](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [`Map`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Intl.Collator`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [`Temporal.ZonedDateTime`](/es/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime)

#### Plantillas

- [Plantilla de página de clase de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template)

### Página de constructor de JavaScript

Una **página de constructor de JavaScript** ofrece información sobre el constructor de una clase de JavaScript y sobre cómo debe llamarse. El constructor de una clase se define simplemente como el propio objeto de función: por ejemplo, `BigInt()` es un constructor, aunque no se pueda llamar con `new`. No todas las clases tienen un constructor que valga la pena documentar: la clase {{jsxref("TypedArray")}}, por ejemplo, es una clase abstracta que siempre lanza un error al llamarla y, por lo tanto, no tiene página propia.

#### Ejemplos

- [`Array()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [`BigInt()`](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Map()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)
- [`Intl.Collator()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)
- [`Temporal.ZonedDateTime()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime)

#### Plantillas

- [Plantilla de página de constructor de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_constructor_page_template)

### Página de error de JavaScript

Una **página de error de JavaScript** ofrece información sobre cuándo se produce un error de JavaScript y cómo solucionarlo. Está pensada principalmente como referencia para las herramientas de desarrollo. Estas referencias de errores se organizan principalmente según los mensajes de error de Firefox: un mensaje de error por página. Consulta también la guía [cómo documentar errores](/es/docs/MDN/Writing_guidelines/Howto/Document_web_errors).

#### Ejemplos

- [ReferenceError: "x" is not defined](/es/docs/Web/JavaScript/Reference/Errors/Not_defined)

#### Plantillas

- [Plantilla de página de error de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template)

### Página de función de JavaScript

Una **página de función de JavaScript** ofrece información sobre una función de JavaScript que no pertenece a ninguna clase ni espacio de nombres: su propósito, sus parámetros y su valor de retorno.

Si la función está disponible de forma estática en una clase o un espacio de nombres, usa en su lugar la plantilla de [página de método estático de JavaScript](#página_de_método_estático_de_javascript). Si la función puede considerarse una clase (porque tiene una propiedad `prototype`), usa en su lugar la plantilla de [página de clase de JavaScript](#página_de_clase_de_javascript). La pista principal para usar la plantilla de página de función global es que la propiedad tiene como valor una función y empieza con minúscula.

#### Ejemplos

- [`eval()`](/es/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`encodeURIComponent()`](/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

#### Plantillas

- [Plantilla de página de función de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template)

### Página de propiedad global de JavaScript

Una **página de propiedad global de JavaScript** ofrece información sobre una propiedad global de JavaScript que no pertenece a ninguna clase ni espacio de nombres: su propósito y su uso.

Si la propiedad está disponible de forma estática en una clase o un espacio de nombres, usa en su lugar la plantilla de [página de propiedad de datos estática de JavaScript](#página_de_propiedad_de_datos_estática_de_javascript). Si la propiedad es una función, usa en su lugar la plantilla de [página de función de JavaScript](#página_de_función_de_javascript). Si la propiedad es un objeto simple cuyo objetivo principal es alojar otras propiedades, usa en su lugar la plantilla de [página de espacio de nombres de JavaScript](#página_de_espacio_de_nombres_de_javascript). La pista principal para usar la plantilla de página de propiedad global es que la propiedad tiene un valor primitivo, o bien empieza con minúscula y no es una función.

#### Ejemplos

- [`Infinity`](/es/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
- [`globalThis`](/es/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

#### Plantillas

- [Plantilla de página de propiedad global de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_global_property_page_template)

### Página de propiedad de acceso de instancia de JavaScript

Una **página de propiedad de acceso de instancia de JavaScript** ofrece información sobre una propiedad de acceso de una instancia de una clase de JavaScript. Una propiedad de acceso consta de un getter y, a veces, de un setter, y casi siempre se define en el prototipo de la instancia. La especificación usa la sintaxis `get Constructor.prototype.propertyName` para definir una propiedad de acceso. Casi todas las propiedades de acceso de instancia modernas del núcleo del lenguaje JavaScript solo tienen getter, lo que las hace de solo lectura.

Si la propiedad tiene como valor una función, usa en su lugar la plantilla de [página de método de instancia de JavaScript](#página_de_método_de_instancia_de_javascript).

#### Ejemplos

- [`Map.prototype.size`](/es/docs/Web/JavaScript/Reference/Global_Objects/Map/size)

#### Plantillas

- [Plantilla de página de propiedad de acceso de instancia de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_accessor_property_page_template)

### Página de propiedad de datos de instancia de JavaScript

Una **página de propiedad de datos de instancia de JavaScript** ofrece información sobre una propiedad de datos de una instancia de una clase de JavaScript. Una propiedad de datos consta de un valor y un indicador de escritura, y puede definirse en el prototipo de la instancia o directamente en la propia instancia.

Toda instancia tiene una propiedad de datos llamada [`constructor`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) que apunta a la función constructora que creó la instancia. Esta propiedad de datos se menciona en la página principal de la clase, pero no se documenta en una página aparte para cada clase.

Si la propiedad tiene como valor una función, usa en su lugar la plantilla de [página de método de instancia de JavaScript](#página_de_método_de_instancia_de_javascript).

#### Ejemplos

- [`Array`: `length`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [`Error.prototype.name`](/es/docs/Web/JavaScript/Reference/Global_Objects/Error/name)

#### Plantillas

- [Plantilla de página de propiedad de datos de instancia de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_data_property_page_template)

### Página de método de instancia de JavaScript

Una **página de método de instancia de JavaScript** ofrece información sobre un método de una instancia de una clase de JavaScript. Un método es una propiedad de la instancia cuyo valor es una función. En general, un método es una propiedad de datos definida en el prototipo de la instancia, pero hay algunas excepciones antiguas, como [`Intl.DateTimeFormat.prototype.format()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format), que es una propiedad de acceso que devuelve una función enlazada. Para que a quien lee le resulten familiares, las tratamos como métodos normales.

#### Ejemplos

- [`Array.prototype.push()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Intl.DateTimeFormat.prototype.resolvedOptions()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions)

#### Plantillas

- [Plantilla de página de método de instancia de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_method_page_template)

### Página de espacio de nombres de JavaScript

Una **página de espacio de nombres de JavaScript** ofrece una descripción general de un espacio de nombres de JavaScript, incluidos su propósito y su uso, y enumera todos los métodos y propiedades del espacio de nombres. Un espacio de nombres de JavaScript se define como un objeto simple que aloja otras propiedades.

#### Ejemplos

- [`Intl`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [`Math`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [`Temporal`](/es/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [`Temporal.Now`](/es/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now)

#### Plantillas

- [Plantilla de página de espacio de nombres de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template)

### Página de operador de JavaScript

Una **página de operador de JavaScript** ofrece información sobre un operador de JavaScript, incluidos su propósito y su uso. _Operador_ no es un término con una definición universalmente aceptada. Para MDN, lo definimos como una sintaxis parametrizada por uno o más operandos, normalmente en forma de expresiones o de construcciones similares a expresiones.

#### Ejemplos

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [`await`](/es/docs/Web/JavaScript/Reference/Operators/await)
- [`class`](/es/docs/Web/JavaScript/Reference/Operators/class)

#### Plantillas

- [Plantilla de página de operador de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_operator_page_template)

### Página de sentencia de JavaScript

Una **página de sentencia de JavaScript** ofrece información sobre una sentencia o declaración de JavaScript, incluidos su propósito, su sintaxis y su uso. Describe los componentes de la sintaxis de la sentencia y cómo afecta a la ejecución del programa o qué enlaces introduce.

Para las formas de expresión, como una expresión de función o una expresión de clase, usa en su lugar la plantilla de [página de operador de JavaScript](#página_de_operador_de_javascript).

#### Ejemplos

- [`if...else`](/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of)
- [`const`](/es/docs/Web/JavaScript/Reference/Statements/const)

#### Plantillas

- [Plantilla de página de sentencia de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_statement_page_template)

### Página de propiedad de acceso estática de JavaScript

Una **página de propiedad de acceso estática de JavaScript** ofrece información sobre una propiedad de acceso a la que se accede directamente en una clase o un espacio de nombres de JavaScript. Describe el valor que devuelve el getter y, cuando hay un setter, los valores que acepta y el efecto de la asignación.

Para una propiedad de acceso de una instancia, usa en su lugar la plantilla de [página de propiedad de acceso de instancia de JavaScript](#página_de_propiedad_de_acceso_de_instancia_de_javascript).

#### Ejemplos

- [`Array[Symbol.species]`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`RegExp.input`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)

#### Plantillas

- [Plantilla de página de propiedad de acceso estática de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_accessor_property_page_template)

### Página de propiedad de datos estática de JavaScript

Una **página de propiedad de datos estática de JavaScript** ofrece información sobre una propiedad de datos a la que se accede directamente en una clase o un espacio de nombres de JavaScript. Describe el valor de la propiedad, sus atributos, su propósito y su uso.

Si la propiedad es una propiedad de acceso, usa en su lugar la plantilla de [página de propiedad de acceso estática de JavaScript](#página_de_propiedad_de_acceso_estática_de_javascript). Si la propiedad tiene como valor una función, usa en su lugar la plantilla de [página de método estático de JavaScript](#página_de_método_estático_de_javascript). Las clases y los espacios de nombres expuestos como propiedades tienen sus propias [páginas de clase](#página_de_clase_de_javascript) o [páginas de espacio de nombres](#página_de_espacio_de_nombres_de_javascript).

#### Ejemplos

- [`Math.PI`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
- [`Number.MAX_SAFE_INTEGER`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

#### Plantillas

- [Plantilla de página de propiedad de datos estática de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_data_property_page_template)

### Página de método estático de JavaScript

Una **página de método estático de JavaScript** ofrece información sobre un método que se llama directamente en una clase o un espacio de nombres de JavaScript. Describe el propósito del método, su sintaxis, sus parámetros, su valor de retorno y sus excepciones.

Para un método de una instancia, usa en su lugar la plantilla de [página de método de instancia de JavaScript](#página_de_método_de_instancia_de_javascript). Para una función global, usa en su lugar la plantilla de [página de función de JavaScript](#página_de_función_de_javascript).

#### Ejemplos

- [`Array.from()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [`Temporal.Now.instant()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant)

#### Plantillas

- [Plantilla de página de método estático de JavaScript](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template)

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
  - : La estructura de un tutorial de Aprende no es estricta, pero debe proporcionar una experiencia de aprendizaje práctica (consulta [Guías de escritura de Aprende desarrollo web > Enfoque](/es/docs/MDN/Writing_guidelines/Learning_content#enfoque)), debe tener un conjunto de "Prerrequisitos" y "Resultados de aprendizaje" enumerados al principio, y el contenido debe enseñar los resultados de aprendizaje indicados.

### Ejemplos

- [HTML](/es/docs/Web/HTML)
- [CSS](/es/docs/Web/CSS)
- [Web APIs](/es/docs/Web/API)
- [JavaScript](/es/docs/Web/JavaScript)
- [Aprende desarrollo web](/es/docs/Learn_web_development)
- [Recursos de la comunidad](/es/docs/MDN/Community)

## Véase también

- [Componentes de página](/es/docs/MDN/Writing_guidelines/Writing_style_guide#componentes_de_la_página)
- [Crear ejemplos de código en Markdown](/es/docs/MDN/Writing_guidelines/Code_style_guide)
