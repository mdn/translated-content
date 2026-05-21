---
title: Barras laterales
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Todas las páginas de MDN deben tener barras laterales.
La mayoría se crean con un sistema que define estructuras de datos en archivos YAML, e incluye barras laterales en las páginas mediante el front matter o una macro.

En esta guía aprenderás cómo funcionan estas barras laterales para que puedas editar las existentes y crear nuevas según sea necesario.

> [!NOTE]
> Si estás editando barras laterales, puedes usar los comandos `npm run content`:
>
> - Ejecuta `npm run content -- fmt-sidebars` para formatear las barras laterales.
> - Ejecuta `npm run content -- sync-sidebars` para sincronizar con las redirecciones.

## Cómo funcionan las barras laterales

Cada barra lateral tiene un archivo YAML correspondiente dentro del directorio [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) del repositorio `content` de MDN. Este define la estructura jerárquica de los enlaces de la barra lateral, las URL a las que debe apuntar cada enlace y, opcionalmente, el texto personalizado del encabezado o enlace, que puede localizarse a diferentes idiomas según se requiera.

La página que estás leyendo actualmente tiene una barra lateral definida en el archivo [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml).

La barra lateral se renderiza en la página actual (y en todas las demás del mismo árbol de documentos) al incluir una entrada `sidebar` en el front matter del [origen del documento](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md):

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

El front matter es el contenido entre los guiones. Incluir `sidebar: mdnsidebar` en el front matter hace que el sistema busque un archivo YAML con el mismo nombre dentro del directorio `files/sidebars`. Si lo encuentra, se encarga automáticamente de renderizar la barra lateral y colocarla en la página como una o más listas ordenadas (elementos {{htmlelement("ol")}}).

Prueba a navegar por la barra lateral antes de volver a esta página. Notarás que, generalmente, al navegar a una página, la lista de enlaces de la sección en la que te encuentras se expande, mientras que las demás se contraen, y la página en la que estás aparece resaltada.

## La sintaxis YAML de las barras laterales

En esta sección se explican las distintas funciones que pueden incluirse en las barras laterales de MDN, y la sintaxis YAML utilizada para generar cada una. Mientras revisas esta documentación, contrasta las funciones con el [YAML de las barras laterales existentes](https://github.com/mdn/content/tree/main/files/sidebars).

### Inicio de una definición de barra lateral

El inicio de cada definición de datos de una barra lateral en YAML es una clave `sidebar`, cuyo valor es una lista que define los datos de la barra lateral:

```yaml
sidebar:
  # la definición de la barra lateral va aquí
```

### Enlaces individuales

Para crear un enlace individual en una barra lateral, incluye un elemento de lista YAML que contenga una URL relativa:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

La URL es relativa al directorio `docs` en la estructura de URL de MDN, así que, por ejemplo, `/MDN/Writing_guidelines/Page_structures/Sidebars` generaría un enlace a la página actual. El sistema usa automáticamente el título del documento de la página enlazada como texto del enlace.
Si la página tiene una clave `short-title` en el front matter, se usará en su lugar como texto del enlace en la barra lateral.

Si quieres usar un texto de enlace personalizado distinto del `title` o `short-title` del documento, debes incluir dos claves dentro del elemento de lista, `title`, que contiene el texto personalizado del enlace, y `link`, que contiene la URL relativa como antes. El siguiente ejemplo crearía un enlace a la página actual igual que antes, pero con el texto personalizado "Writing sidebars":

```yaml
sidebar:
  - title: Writing sidebars
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Títulos de sección

Un título de sección es un elemento de la barra lateral renderizado con un tamaño de fuente mayor que los elementos normales. Se usa habitualmente como título en la parte superior de una barra lateral que enlaza a la página principal de esa sección de documentación, o como divisor de secciones en el caso de barras laterales especialmente grandes (como puede verse en la sección [Aprende desarrollo web](/es/docs/Learn_web_development).)

Un título de sección se define incluyendo una clave `type` con el valor `section` en el elemento de la lista. Por ejemplo:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Un título de sección puede tener un texto de enlace personalizado:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

O puedes omitir la clave `link` para renderizar simplemente un elemento de lista de texto que no incluya un enlace:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Crear listas de enlaces expandibles/contraíbles

Para crear una lista de enlaces expandible/contraíble, creas un elemento de lista como antes, pero incluyes una clave `children` cuyo valor es una lista que contiene los enlaces que quieres mostrar como elementos hijos bajo el elemento padre. Cada elemento hijo tiene la misma sintaxis que el padre. Un elemento hijo puede incluso contener sus propios `children`, lo que te permite crear varios niveles de jerarquía. Aquí hay un ejemplo:

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

Fíjate también en la clave `details`: esta controla si la lista de hijos de un elemento se renderiza cerrada o abierta cuando la página carga por primera vez. Los valores posibles son los siguientes:

- `closed`: Los hijos se renderizan cerrados, salvo que la página actual esté enlazada por uno de los hijos, en cuyo caso se renderizan abiertos.
- `open`: Los hijos siempre se renderizan abiertos.

Cuando un elemento de lista tiene `children` y `details` especificados, se renderiza con una estructura de elementos {{htmlelement("details")}}/{{htmlelement("summary")}} en su interior, que contiene la lista de hijos, la cual puede expandirse/contraerse haciendo clic en el triángulo de revelación, o enfocando el resumen y pulsando <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Renderizar automáticamente una lista de subpáginas

Si quieres crear una lista que contenga enlaces a las subpáginas de una página concreta, puedes generarla especificando un elemento de lista con una clave `type` de valor `listSubPages`, y una clave `path` cuyo valor sea la ruta de la página cuyas subpáginas quieras enlazar. Por ejemplo, la definición completa de la barra lateral del [Glosario](/es/docs/Glossary) (consulta [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) tiene este aspecto:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Esto renderiza una barra lateral con un título de sección que enlaza de vuelta a la página principal del Glosario, y una lista de nivel superior con enlaces a todas las páginas hijas del glosario.

Si quisieras renderizar esto como un elemento de lista padre con las subpáginas apareciendo como una lista hija expandible/contraíble, deberás incluir además una clave `title` que especifique el texto a mostrar para el elemento padre, y una clave `details` que especifique el comportamiento de apertura/cierre de la estructura `<details>`/`<summary>`.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Agrupar subpáginas de la lista

También existe un valor de `type` llamado `listSubPagesGrouped`. Esto hace que cualquier página hija con un título que comience con la misma subcadena seguida de un guion (por ejemplo, `item-`) se incluya en una lista hija bajo un elemento de lista con la subcadena más un guion y un asterisco (por ejemplo, `item-*`).

Por ejemplo, en el momento de escribir esto, el Glosario de MDN contiene tres páginas relacionadas con CORS:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Si actualizáramos la definición de la barra lateral del glosario a esto:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Los enlaces a esas páginas se agruparían en una estructura de lista hija como esta:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Pueden encontrarse ejemplos más realistas en la definición de la barra lateral de [CSS](/es/docs/Web/CSS) (consulta [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), donde se usa `listSubPagesGrouped` para agrupar enlaces de propiedades shorthand y longhand relacionadas. El elemento de lista que genera el menú de propiedades en la barra lateral tiene este aspecto:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Esta definición de elemento de lista también contiene `tags`, que es el tema de la siguiente sección.

#### Filtrar subpáginas de la lista

Si tienes varios tipos de página dentro del mismo directorio (según se especifica con la clave `page-type` en el front matter de la página), puedes filtrar los elementos generados por `listSubPages` y `listSubPagesGrouped` por tipo de página. Para ello, incluye una clave `tags` en el elemento de la lista, cuyo valor sea un único tipo de página o una lista de los tipos de página que quieres incluir en los elementos generados. La barra lateral de CSS contiene varios ejemplos de este tipo:

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Modules
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Selectors
  tags: css-selector
  details: closed
# etc.
```

### Localizar cadenas de texto

Como explicamos antes, puedes incluir texto personalizado para el texto del enlace o el título de sección en una clave `title`. Si quieres localizar ese texto a varios idiomas, puedes incluir un marcador de posición en la clave `title`, y luego incluir las definiciones de lo que ese marcador debe ser en los distintos idiomas dentro de un diccionario `l10n` al final del archivo YAML.

Veamos un ejemplo. En la barra lateral de [HTML](/es/docs/Web/HTML) (consulta [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)), definimos un elemento de lista que genera una lista de enlaces a todas las páginas de referencia de los tipos de {{htmlelement("input")}}. El texto del elemento padre se define en la clave `title` como un marcador de posición `Input_types`:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Al final del archivo, definimos el diccionario `l10n`. Cada clave dentro de `l10n` representa un idioma diferente: `en-US`, `fr`, `ja`, etc. El valor de cada una de estas claves es un subdiccionario, cuyas claves son los marcadores de posición definidos en las definiciones de elementos de lista. El valor de cada clave es el valor de ese marcador en el idioma correspondiente.

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

Por brevedad, solo hemos incluido los valores de `Input_types` en cada idioma.

Cuando se renderiza la barra lateral, el sistema reemplaza el texto `Input_types` con el valor definido en el idioma del sitio al que se está accediendo. Compara, por ejemplo, lo siguiente:

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Si se accede a un idioma de MDN que no tiene un valor definido para un marcador de posición concreto, se usará por defecto la versión `en-US`. Si tampoco se ha definido la versión `en-US`, se mostrará el texto literal del marcador (que sería `Input_types`, en el caso anterior).

## Barras laterales únicas

Hay algunas barras laterales en MDN que no usan el sistema estándar descrito anteriormente. Se trata de macros más complejas que requieren un manejo especial:

- `\{{APIRef("<API>")}}`
  - : La barra lateral de API que se muestra en las [páginas de referencia de la API](/es/docs/Web/API#interfaces). Por cada interfaz, la macro genera automáticamente enlaces a los miembros definidos en la interfaz: propiedades, métodos, eventos, etc. El único parámetro es el nombre del grupo de API correspondiente, definido en el archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json). Para editar las páginas relacionadas que aparecen al final de la barra lateral, edita la entrada de GroupData de esa API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : La barra lateral de API que se muestra en las [páginas de inicio de la API](/es/docs/Web/API#specifications). El único parámetro es el nombre del grupo de API correspondiente, definido en el archivo [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json). Para editar las guías, interfaces, etc. enlazadas en la barra lateral de una API concreta, edita la entrada de GroupData de esa API.
- `sidebar: jsref`
  - : La barra lateral en las [páginas de referencia de JavaScript](/es/docs/Web/JavaScript/Reference) incluida mediante el front matter.
    El contenido de `jsref` se define en rari en [`jsref.rs`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/sidebars/jsref.rs).

Si crees que alguna de estas debería actualizarse, contáctanos por los [canales habituales](/es/docs/MDN/Community/Communication_channels).

## Véase también

- [Uso de macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros de enlaces de contenido](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de secciones de página](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Macros de banners y avisos](/es/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
