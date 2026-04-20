---
title: Barras laterales
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Todas las páginas de MDN deben tener barras laterales.
La mayoría se crean usando un sistema que define estructuras de datos en archivos YAML, e incluye barras laterales en las páginas a través de front matter o una macro.

En esta guía, aprenderá cómo funcionan estas barras laterales para que pueda editar las barras laterales existentes y crear nuevas según sea necesario.

> [!NOTE]
> Si está editando barras laterales, puede usar comandos `npm run content`:
>
> - Ejecute `npm run content -- fmt-sidebars` para formatear barras laterales.
> - Ejecute `npm run content -- sync-sidebars` para sincronizar con redirecciones.

## Cómo funcionan las barras laterales

Cada barra lateral tiene un archivo YAML correspondiente contenido dentro del directorio [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) del repositorio `content` de MDN. Esto define la estructura jerárquica de los enlaces de la barra lateral, las URL a las que debe apuntar cada enlace, y texto de encabezado/enlace personalizado opcional, que puede localizarse a diferentes idiomas según sea necesario.

La página que está leyendo actualmente tiene una barra lateral definida en el archivo [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml).

La barra lateral se representa en la página actual (y todas las demás en el mismo árbol de documentos) incluyendo una entrada de front matter `sidebar` en el [origen del documento](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md):

```md
---
title: Barras laterales
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

Todas las páginas de MDN deben tener barras laterales.
```

El front matter es el contenido entre los guiones. Incluir `sidebar: mdnsidebar` en el front matter hace que el sistema busque un archivo YAML con el mismo nombre dentro del directorio `files/sidebars`. Si encuentra uno, automáticamente se encarga de representar la barra lateral y colocarla en la página como una o más listas ordenadas (elementos {{htmlelement("ol")}}).

Intente navegar por la barra lateral antes de volver a esta página. Notará que generalmente al navegar a una página, la lista de enlaces de la sección en la que se encuentra se expandirá, mientras que las otras se colapsarán, y la página en la que se encuentra está resaltada.

## Sintaxis YAML de barras laterales explicada

Esta sección explica las diferentes características que pueden incluirse en las barras laterales de MDN, y la sintaxis YAML usada para generar cada una. A medida que trabaja con esta documentación, verifique las características contra el [YAML de barras laterales existente](https://github.com/mdn/content/tree/main/files/sidebars).

### Iniciar una definición de barra lateral

El inicio de cada definición de datos de barra lateral YAML es una clave `sidebar`, el valor de la cual es una lista que define los datos de la barra lateral:

```yaml
sidebar:
  # la definición de la barra lateral va aquí
```

### Enlaces únicos

Para crear un solo enlace en una barra lateral, incluye un elemento de lista YAML que contiene una URL relativa:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

La URL es relativa al directorio `docs` en la estructura de URL de MDN, por lo que, por ejemplo, `/MDN/Writing_guidelines/Page_structures/Sidebars` generaría un enlace a la página actual. El sistema usa automáticamente el título del documento de la página vinculada como texto del enlace.
Si la página tiene una clave `short-title` en el front matter, se usará para el texto de visualización del enlace de la barra lateral.

Si desea usar texto de enlace personalizado que no sea el `title` o `short-title` de un documento, necesita incluir dos claves dentro del elemento de lista: `title`, que contiene el texto de enlace personalizado, y `link`, que contiene la URL relativa como antes. El siguiente ejemplo crearía un enlace a la página actual como antes, pero con texto de enlace personalizado de "Escribir barras laterales":

```yaml
sidebar:
  - title: Escribir barras laterales
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Títulos de sección

Un título de sección es un elemento de barra lateral representado en un tamaño de fuente más grande que los elementos normales de la barra lateral. Esto se usa comúnmente como un título en la parte superior de una barra lateral que enlaza a la página de aterrizaje para esa sección de documentos, o como un divisor de sección en el caso de barras laterales particularmente grandes (como se ve en la [sección Aprender desarrollo web](/es/docs/Learn_web_development)).

Un título de sección se define incluyendo una clave `type` con un valor de `section` en el elemento de lista. Por ejemplo:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Un título de sección puede tener texto de enlace personalizado especificado:

```yaml
sidebar:
  - type: section
    title: ¡Viva MDN!
    link: /MDN
```

O puede omitir la clave `link` para solo representar un elemento de lista de texto que no incluye un enlace:

```yaml
sidebar:
  - type: section
    title: ¡Viva MDN!
```

### Crear listas de enlaces expandibles/colapsables

Para crear una lista de enlaces expandible/colapsable, crea un elemento de lista como antes, pero incluye una clave `children`, el valor de la cual es una lista que contiene los enlaces que deseas mostrar como elementos de lista secundarios debajo del elemento principal. Cada elemento de lista secundaria tiene la misma sintaxis que el principal. Un elemento de lista secundaria incluso puede contener sus propios `children`, lo que le permite crear múltiples niveles de jerarquía. Aquí hay un ejemplo:

```yaml
sidebar:
  - title: community_guidelines
    details: closed
    children:
      - /MDN/Community
      - title: contributing_to_mdn_web_docs
        details: closed
        children:
          - /MDN/Community
          - /MDN/Community/Getting_started
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

Note también la clave `details`; esto controla si la lista de elementos secundarios de un elemento de lista se representa cerrada o abierta cuando la página se carga por primera vez. Los valores posibles son los siguientes:

- `closed`: Los elementos secundarios se representan cerrados, a menos que la página actual esté vinculada por uno de los elementos secundarios, en cuyo caso se representan abiertos.
- `open`: Los elementos secundarios siempre se representan abiertos.

Cuando un elemento de lista tiene `children` y `details` especificados, se representa con una estructura de elementos {{htmlelement("details")}}/{{htmlelement("summary")}} dentro, que contiene la lista secundaria, que luego puede expandirse/colapsarse haciendo clic en el widget de triángulo de divulgación, o enfocando el resumen y presionando <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Representar automáticamente una lista de subpáginas

Si desea crear una lista que contenga enlaces a las subpáginas de una página en particular, puede generar esto especificando un elemento de lista con una clave `type` de valor `listSubPages`, y una clave `path` cuyo valor es la ruta a la página cuyas subpáginas desea generar enlaces. Por ejemplo, toda la definición de la barra lateral del [Glosario](/es/docs/Glossary) (consulte [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) se ve así:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glosario
  - type: listSubPages
    path: /Glossary
```

Esto representa una barra lateral con un título de sección que enlaza de vuelta a la página de aterrizaje del Glosario, y una lista de nivel superior de enlaces a todas las páginas secundarias del glosario.

Si quisiera representar esto como un elemento de lista principal con las subpáginas apareciendo como una lista secundaria expandible/colapsable, necesitaría incluir adicionalmente una clave `title` que especifique el texto a mostrar para el elemento principal, y una clave `details` que especifique el comportamiento de apertura/cierre de la estructura `<details>`/`<summary>`.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glosario
    details: closed
```

#### Agrupar subpáginas de lista

También hay un valor de `type` de `listSubPagesGrouped`. Esto hace que cualquier página secundaria con títulos que comienzan con la misma subcadena seguida de un guion (por ejemplo, `elemento-`) se incluya en una lista secundaria bajo un elemento de lista de la subcadena, más un guion y un asterisco (por ejemplo, `elemento-*`).

Por ejemplo, al momento de escribir, el Glosario de MDN contiene tres páginas relacionadas con CORS:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Si actualizáramos la definición de la barra lateral del glosario a esto:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glosario
    details: closed
```

Los enlaces a esas páginas se agruparían en una estructura de lista secundaria como esta:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Ejemplos más realistas se pueden encontrar en la definición de la barra lateral de [CSS](/es/docs/Web/CSS) (consulte [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), donde `listSubPagesGrouped` se usa para agrupar enlaces de propiedades abreviadas y completas relacionadas. El elemento de lista que genera el menú de propiedades de la barra lateral se ve así:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Propiedades
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Esta definición de elemento de lista también contiene `tags`, que es el tema de la siguiente sección.

#### Filtrar subpáginas de lista

Si tiene varios tipos de página diferentes dentro del mismo directorio (según lo especificado por la clave `page-type` dentro del front matter de la página), puede filtrar los elementos de lista generados por `listSubPages` y `listSubPagesGrouped` por tipo de página. Para hacerlo, incluya una clave `tags` dentro del elemento de lista, el valor de la cual es un solo tipo de página o una lista de los tipos de página que desea incluir en los elementos de lista generados. La barra lateral de CSS contiene varios ejemplos de este tipo:

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Módulos
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Propiedades
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Selectores
  tags: css-selector
  details: closed
# etc.
```

### Localizar cadenas de texto

Como explicamos anteriormente, puede incluir texto personalizado para completar su texto de enlace o título de sección en una clave `title`. Si desea localizar ese texto a múltiples idiomas, puede incluir un marcador de posición en la clave `title`, luego incluir las definiciones de qué debe ser ese marcador de posición en diferentes idiomas dentro de un diccionario `l10n` en la parte inferior del archivo YAML.

Veamos un ejemplo para mostrar cómo se ve esto. En la barra lateral de [HTML](/es/docs/Web/HTML) (consulte [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)), definimos un elemento de lista que genera una lista de enlaces a todas las páginas de referencia de tipos {{htmlelement("input")}}. El texto del elemento de lista principal se define en la clave `title` como un marcador de posición de `Input_types`:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Al final del archivo, definimos el diccionario `l10n`. Cada clave dentro de `l10n` representa una configuración regional diferente: `en-US`, `fr`, `ja`, etc. El valor de cada una de estas claves es un subdiccionario, las claves del cual son los marcadores de posición definidos en las definiciones de elementos de lista. Cada valor clave es el valor de ese marcador de posición, en esa configuración regional respectiva.

Por ejemplo:

```yaml
l10n:
  en-US:
    Input_types: <code>&lt;input&gt;</code> types
  fr:
    Input_types: Types <code>&lt;input&gt;</code>
  ja:
    Input_types: <code>&lt;input&gt;</code> 型
  ko:
    Input_types: <code>&lt;input&gt;</code> types
  pt-BR:
    Input_types: Tipos de <code>&lt;input&gt;</code>
  ru:
    Input_types: Типы <code>&lt;input&gt;</code>
  zh-CN:
    Input_types: <code>&lt;input&gt;</code> 类型
```

Solo hemos incluido los valores de `Input_types` en cada configuración regional por brevedad.

Cuando se representa la barra lateral, el sistema reemplaza el texto `Input_types` con su valor definido en cualquier versión de configuración regional del sitio a la que se accede. Compare lo siguiente, por ejemplo:

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Si se accede a una configuración regional de MDN que no tiene un valor definido para un marcador de posición particular, se predetermina a la versión `en-US`. Si no se define una versión `en-US`, se muestra el texto literal del marcador de posición (que sería `Input_types`, en el caso anterior).

## Barras laterales únicas

Hay algunas barras laterales en MDN que no usan el sistema estándar descrito anteriormente. Estas son macros más complejas que necesitan un manejo especial:

- `\{{APIRef("<API>")}}`
  - : La barra lateral de API que se muestra en [páginas de referencia de API](/es/docs/Web/API#interfaces). Para cada interfaz, la macro genera automáticamente enlaces a los miembros definidos en la interfaz: propiedades, métodos, eventos, etc. El único parámetro es el nombre del grupo de API relevante definido en el archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json). Para editar las páginas relacionadas mostradas en la parte inferior de la barra lateral, edite la entrada GroupData de esa API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : La barra lateral de API que se muestra en [páginas de aterrizaje de API](/es/docs/Web/API#specifications). El único parámetro es el nombre del grupo de API relevante definido en el archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json). Para editar las guías, interfaces, etc. vinculadas en la barra lateral de una API en particular, edite la entrada GroupData de esa API.
- `sidebar: jsref`
  - : La barra lateral en [páginas de referencia de JavaScript](/es/docs/Web/JavaScript/Reference) incluida a través de front matter.
    El contenido de `jsref` se define en rari en [`jsref.rs`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/sidebars/jsref.rs).

Si cree que uno de estos debería actualizarse, póngase en contacto con nosotros a través de los [canales habituales](/es/docs/MDN/Community/Communication_channels).

## Véase también

- [Uso de macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros de enlaces de contenido](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de secciones de página](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Macros de banners y avisos](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
