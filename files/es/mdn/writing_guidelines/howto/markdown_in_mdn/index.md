---
title: Cómo escribir en Markdown
short-title: Escribir en Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 49f3eb321cf6a491c3bcef1c3590f9bf6f90c9b8
---

Esta página describe cómo usamos Markdown para escribir documentación en MDN Web Docs.
Hemos elegido GFM (GitHub-Flavored Markdown, o Markdown personalizado por GitHub) como base y hemos añadido extensiones para adaptarlo a las necesidades de MDN.

## Base: Markdown personalizado por GitHub

MDN emplea GFM (GitHub-Flavored Markdown) como base: <https://github.github.com/gfm/>. Para cualquier detalle no cubierto aquí, consulta su especificación. GFM, a su vez, es un superconjunto de CommonMark (<https://spec.commonmark.org/>).

## Enlaces

La especificación de GFM define dos tipos de enlaces:

- [enlaces en línea](https://github.github.com/gfm/#inline-link): el destino se proporciona inmediatamente después del texto del enlace.
- [enlaces de referencia](https://github.github.com/gfm/#reference-link): el destino aparece en otra parte del documento.

En MDN preferimos los enlaces en línea porque son más fáciles de leer y mantener sin perder el contexto. Esta es la forma preferida de escribir enlaces en MDN:

```md
Los [macarons](<https://es.wikipedia.org/wiki/Macarrón_(galleta)>) son deliciosos, pero difíciles de hacer.
```

Sin embargo, en determinadas situaciones, los enlaces de referencia son más apropiados por su concisión.
Por ejemplo, reducir el ancho de las tablas puede facilitar su revisión y edición.

```md
| Nombre               | Características                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| [Macarons][macarons] | Deliciosos pero difíciles de hacer. Aportan más elegancia a una merienda que casi cualquier otro dulce. |
| [Biscotti][biscotti] | Crujientes y más fáciles de hacer.                                                                      |

[macarons]: https://es.wikipedia.org/wiki/Macarrón_(galleta)
[biscotti]: https://es.wikipedia.org/wiki/Biscotti
```

En casos excepcionales en los que sea necesario usar enlaces de referencia, asegúrate de que sigan inmediatamente al contexto donde se usan.

## Bloques de código de ejemplo

En GFM y CommonMark, los autores pueden usar "delimitadores de código" para demarcar bloques `<pre>`. El delimitador inicial puede ir seguido de un texto llamado "cadena de información". El lenguaje del código se especifica con la primera palabra de esta cadena, que determinará el resaltado de sintaxis del bloque. Se admiten las siguientes palabras:

- Lenguajes de programación
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-like
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
  - Otros
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (Sombreadores de OpenGL)
    - `sql` - Comandos SeQueL
    - `wat` - WebAssembly
    - `webidl` - Lenguaje de definición de interfaz web
- Estilo
  - `css` - CSS
  - `scss` - Sass (SCSS)
  - `less` - Less
- Marcado
  - `html` - HTML
  - `svg` - SVG
  - `xml` - XML
  - `mathml` - MathML
  - `md` - Markdown
  - `latex` - LaTeX
- Símbolos del sistema
  - `bash` - Bash/Shell
  - `batch` - Batch (Windows Shell)
  - `powershell` - PowerShell
- Configuración/Archivos de datos
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - Base de datos SQL
  - `ignore` - Archivo gitignore
  - `apacheconf` - Configuración de Apache
  - `nginx` - Configuración de NGINX
- Plantillas
  - `django` - Plantillas de Django
  - `svelte` - Plantillas de Svelte
  - `hbs` - Plantillas de Handlebars
  - `pug` - [Plantillas de Pug](https://pugjs.org/api/getting-started.html) (las cuales pueden ser usadas por [Express](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer))
- Otros
  - `plain` - Texto plano
  - `diff` - Archivos diff
  - `http` - Cabeceras HTTP
  - `regex` - Regex
  - `uri` - URI y URL

Por ejemplo:

````md
```js
const greeting = "Obtendré resaltado de sintaxis de JavaScript";
```
````

Si el resaltado que deseas usar no aparece en la lista anterior, debes marcar el bloque de código como `plain`.
Es posible solicitar lenguajes adicionales en el proceso [discutido en GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

> [!NOTE]
> Usa el identificador de lenguaje exactamente como aparece en la lista anterior. Por ejemplo, `javascript` no está permitido; debes escribir `js`.

### Omitir el _linting_

Los redactores pueden añadir el sufijo `-nolint` a los identificadores de lenguaje:

````md-nolint
```html-nolint
<p>
Este código no será analizado.
</p>
```
````

Los bloques de código como este obtendrán un resaltado de sintaxis apropiado, y serán reconocidos por el sistema de ejemplos en vivo, pero serán ignorados por analizadores o formateadores automáticos como Prettier. Los autores deben usar este sufijo para mostrar código no válido, o formato alternativo que los analizadores o formateadores no deberían corregir.

### Clases adicionales (cadenas de información)

GFM admite [cadenas de información](https://github.github.com/gfm/#info-string), que permiten a los autores proporcionar información adicional sobre un bloque de código. En MDN, las cadenas de información se convierten en nombres de clases.

Los redactores pueden proporcionar cualquiera de las siguientes cadenas de información:

- `example-good`: muestra este ejemplo como un buen ejemplo (uno a seguir)
- `example-bad`: muestra este ejemplo como un mal ejemplo (uno que se debe evitar)
- `hidden`: no muestra este bloque de código en la página. Es para usar en ejemplos en vivo.

Por ejemplo:

````md
```js example-good
const greeting = "Soy un buen ejemplo";
```

```js example-bad
const greeting = "Soy un mal ejemplo";
```

```js hidden
const greeting = "Soy un saludo secreto";
```
````

Se mostrarán así:

```js example-good
const greeting = "Soy un buen ejemplo";
```

```js example-bad
const greeting = "Soy un mal ejemplo";
```

### Referencia de la discusión

Este problema se resolvió en:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Notas, advertencias y observaciones

Los redactores pueden usar la [sintaxis de alertas de GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) para destacar contenido importante. Hay tres tipos de alertas: notas, advertencias y observaciones.

> [!NOTE]
> MDN Web Docs admitía alertas con su propia sintaxis antes de admitir el soporte para las alertas de GFM, y las denominaba "bloques de nota".
> MDN no admite las siguientes alertas de GFM: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM no admite `[!CALLOUT]`.

- Para añadir una nota, crea un bloque de cita cuya primera línea sea `[!NOTE]`.
- Para añadir una advertencia, crea un bloque de cita cuya primera línea sea `[!WARNING]`.
- Para añadir una observación, crea un bloque de cita cuya primera línea sea `[!CALLOUT]`.

Las notas y advertencias añadirán un **Nota:** o **Advertencia:** localizado al inicio del resultado, mientras que las observaciones no lo harán. Esto hace que las observaciones sean una buena opción cuando el autor desea proporcionar un título personalizado.

Las líneas múltiples se crean con una línea de bloque de cita vacía, de la misma manera que los párrafos normales. Además, las líneas múltiples sin un espacio también se tratan como líneas de Markdown normales y se concatenan.

El bloque de cita puede contener bloques de código u otros elementos de bloque.

### Ejemplos

#### Notas

```md
> [!NOTE]
> Así se escribe una nota.
>
> Puede tener varias líneas.
```

Esto generará el siguiente HTML:

```html
<div class="notecard note">
  <p><strong>Nota:</strong> Así se escribe una nota.</p>
  <p>Puede tener varias líneas.</p>
</div>
```

Este HTML se renderizará como un cuadro resaltado:

> [!NOTE]
> Así se escribe una nota.
>
> Puede tener varias líneas.

#### Advertencias

```md
> [!WARNING]
> Así se escribe una advertencia.
>
> Puede tener varios párrafos.
```

Esto generará el siguiente HTML:

```html
<div class="notecard warning">
  <p><strong>Advertencia:</strong> Así se escribe una advertencia.</p>
  <p>Puede tener varios párrafos.</p>
</div>
```

Este HTML se renderizará como un cuadro resaltado:

> [!WARNING]
> Así se escribe una advertencia.
>
> Puede tener varios párrafos.

#### Observaciones

```md
> [!CALLOUT]
>
> **Así se escribe una observación.**
>
> Puede tener varios párrafos.
```

Esto generará el siguiente HTML:

```html
<div class="callout">
  <p><strong>Así se escribe una observación.</strong></p>
  <p>Puede tener varios párrafos.</p>
</div>
```

Este HTML se renderizará como un cuadro resaltado:

> [!CALLOUT]
>
> **Así se escribe una observación.**
>
> Puede tener varios párrafos.

#### Nota que contiene un bloque de código

Este ejemplo contiene un bloque de código.

````md
> [!NOTE]
> Así se escribe una nota.
>
> Puede contener bloques de código.
>
> ```js
> const s = "Estoy en un bloque de código";
> ```
>
> Así.
````

Esto generará el siguiente HTML:

```html
<div class="notecard note">
  <p><strong>Nota:</strong> Así se escribe una nota.</p>
  <p>Puede contener bloques de código.</p>
  <pre class="brush: js">const s = "Estoy en un bloque de código";</pre>
  <p>Así.</p>
</div>
```

Este HTML se renderizará con un bloque de código:

> [!NOTE]
> Así se escribe una nota.
>
> Puede contener bloques de código.
>
> ```js
> const s = "Estoy en un bloque de código";
> ```
>
> Así.

### Referencia de la discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/3483>.

## Listas de definiciones

Las listas de definiciones se usan comúnmente en MDN, pero GFM no admite listas de definiciones. MDN introduce un formato personalizado para las listas de definiciones, que es una forma modificada de una lista no ordenada de GFM ({{HTMLElement("ul")}}). En este formato:

- El `<ul>` de GFM contiene cualquier cantidad de elementos `<li>` de GFM de primer nivel.
- Cada uno de estos elementos `<li>` de GFM de primer nivel debe contener, como su elemento final, un elemento `<ul>` de GFM.
- Este `<ul>` anidado final debe contener un elemento `<li>` de GFM, cuyo contenido de texto debe comenzar con ": " (dos puntos seguidos de un espacio). Este elemento puede contener elementos de bloque, incluidos párrafos, bloques de código, listas incrustadas y notas.

Cada uno de estos elementos `<li>` de GFM de primer nivel se transformará en un par `<dt>`/`<dd>`, de la siguiente manera:

- El elemento `<li>` de GFM de primer nivel se analizará como un elemento `<li>` de GFM y su contenido interno comprenderá el contenido del `<dt>`, excepto el `<ul>` anidado final, que no se incluirá en el `<dt>`.
- El elemento `<li>` del `<ul>` anidado final se analizará como un elemento `<li>` de GFM y su contenido interno comprenderá el contenido del `<dd>`, excepto el ": " inicial, que será descartado.

Por ejemplo, esto es un `<dl>`:

````md
- term1
  - : Mi descripción del term1
- `term2`
  - : Mi descripción del term2

    Puede tener varios párrafos y también bloques de código:

    ```js
    const thing = 1;
    ```
````

En GFM/CommonMark, esto generaría el siguiente HTML:

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: Mi descripción del term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: Mi descripción del term2</p>
        <p>Puede tener varios párrafos y también bloques de código:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

En MDN, esto generaría el siguiente HTML:

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>Mi descripción del term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>Mi descripción del term2</p>
    <p>Puede tener varios párrafos y también bloques de código:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Las listas de definiciones escritas con esta sintaxis deben constar en pares de elementos `<dt>`/`<dd>`. Con esta sintaxis, no es posible escribir una lista con más de un elemento `<dt>` consecutivo, o más de un elemento `<dd>` consecutivo: el analizador tratará esto como un error. Esperamos que casi todas las listas de definiciones en MDN funcionen con esta limitación y, para las que no, los autores pueden recurrir a HTML puro.

Esto no está permitido:

```md example-bad
- `param1`, `param2`, `param3`
  - : Mi descripción del `param1`
  - : Mi descripción del `param2`
  - : Mi descripción del `param3`
```

Como alternativa para los casos en los que un autor necesita asociar múltiples elementos `<dt>` con un solo `<dd>`, considera proporcionarlos como un único `<dt>` que contenga múltiples términos, separados por comas, de la siguiente forma:

```md example-good
- `param1`, `param2`, `param3`
  - : Mi descripción de los params 1, 2 y 3
```

La razón fundamental de la sintaxis descrita aquí es que funciona bastante bien con herramientas que esperan CommonMark (por ejemplo, Prettier o vistas previas de GitHub) y al mismo tiempo es razonablemente fácil de escribir y analizar.

### Referencia de la discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4367>.

## Tablas

GFM proporciona una sintaxis para crear [tablas](https://github.github.com/gfm/#tables-extension-), que utilizamos en MDN. Sin embargo, hay ocasiones en las que las tablas de GFM no se adaptan a nuestras necesidades:

- La sintaxis de GFM solo admite un subconjunto de las características disponibles en HTML. Si necesitas usar características de tabla que no son compatibles con GFM, usa HTML para la tabla.
- Si la representación de GFM de la tabla tiene más de 150 caracteres de ancho, usa HTML para la tabla.
- Admitimos un tipo especial de tabla llamada "tabla de propiedades", que tiene su propia clase CSS y, por lo tanto, siempre es HTML.

El principio general es que los autores deben usar la sintaxis de GFM Markdown cuando puedan, y recurrir al HTML puro cuando sea necesario o cuando HTML sea más legible. Para obtener más información, véase [Cuándo usar tablas HTML](#cuándo_usar_tablas_html).

### Estilo de sintaxis para tablas de GFM

En la sintaxis de tablas de GFM, los autores pueden omitir las barras verticales iniciales y finales de las filas. Sin embargo, para mejorar la legibilidad, los autores de MDN deben incluir estas barras. Además, los autores deben proporcionar espacios al final de las filas, de modo que todas las celdas de una columna tengan la misma longitud en texto plano.

Es decir, los autores de MDN deben usar este estilo:

```md example-good
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
| ------------ | ------------ | ------------ |
| celda 1      | celda 2      | celda 3      |
| celda 4      | celda 5      | celda 6      |
```

y no este estilo:

```md-nolint example-bad
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
| --------- | --- |----------------------|
| celda 1 | celda 2 | celda 3 |
celda 4 | celda 5 | celda 6
```

Las tablas se formatean con Prettier, por lo que los autores dependen de herramientas para darles el formato adecuado.

### Cuándo usar tablas HTML

Hay tres circunstancias principales en las que los autores deben usar tablas HTML en lugar de la sintaxis de GFM:

1. La tabla usa características que no son compatibles con GFM (véase más abajo).
2. La tabla de GFM sería demasiado ancha para ser legible.
3. El redactor quiere un tipo especial de tabla llamada "tabla de propiedades".

#### Características de las tablas que no son compatibles con GFM

Las principales limitaciones de la sintaxis de tablas de GFM son:

- Las tablas de GFM deben tener una fila de encabezado.
- Las tablas de GFM no pueden tener una columna de encabezado.
- GFM no analizará elementos de bloque de GFM en las celdas de la tabla. Por ejemplo, no puedes tener una lista en una celda de tabla.
- Las tablas de GFM no pueden tener clases asignadas.
- GFM no admite ningún elemento de tabla más allá de `<table>`, `<tr>`, `<th>` y `<td>`.
- GFM no admite ningún atributo de elemento de tabla como `colspan`, `rowspan` o `scope`.

Si un autor necesita usar alguna de las características no compatibles, debe escribir la tabla en HTML.

Ten en cuenta que no recomendamos el uso general de elementos `<caption>` en las tablas, ya que eso también descartaría la sintaxis de GFM.

#### Ancho máximo de las tablas de GFM

Aunque una tabla pueda escribirse en GFM, a veces es mejor usar HTML, ya que GFM usa un enfoque de "arte {{Glossary("ASCII")}}" para las tablas que no resulta legible cuando las filas se vuelven largas. Considera la siguiente tabla:

```html
<table>
  <thead>
    <tr>
      <th>Un encabezado 1</th>
      <th>Un encabezado 2</th>
      <th>Un encabezado 3</th>
      <th>Un encabezado 4</th>
      <th>Un encabezado 5</th>
      <th>Un encabezado 6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Algo corto</td>
      <td>
        Algo mucho más largo que realmente entra en muchos detalles sobre algo,
        hasta el punto de que el formato de la tabla comienza a verse mal en
        formato GFM.
      </td>
      <td>Algo corto</td>
      <td>
        Otra celda con mucho texto, que también incluye muchos detalles sobre
        algo, tanto es así que el formato de la tabla comienza a verse mal en
        formato GFM.
      </td>
      <td>Algo corto</td>
      <td>Algo corto</td>
    </tr>
  </tbody>
</table>
```

En GFM esto se vería así:

```md
| Un encabezado 1 | Un encabezado 2                                                                                                                                           | Un encabezado 3 | Un encabezado 4                                                                                                                                          | Un encabezado 5 | Un encabezado 6 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- |
| Algo corto      | Algo mucho más largo que realmente entra en muchos detalles sobre algo, hasta el punto de que el formato de la tabla comienza a verse mal en formato GFM. | Algo corto      | Otra celda con mucho texto, que también incluye muchos detalles sobre algo, tanto es así que el formato de la tabla comienza a verse mal en formato GFM. | Algo corto      | Algo corto      |
```

En un caso como este, sería mejor usar HTML.

Por ello, la pauta es la siguiente: _si la representación en Markdown de la tabla tiene más de 150 caracteres de ancho, usa HTML para la tabla_.

#### Tablas de propiedades

Las tablas de propiedades son un tipo específico de tabla que se utiliza para mostrar contenido estructurado de tipo propiedad-valor a lo largo de un conjunto de páginas de un tipo particular. Estas tablas tienen dos columnas: la primera columna es la de encabezado y enumera las propiedades, y la segunda columna enumera sus valores para ese elemento en particular. Por ejemplo, aquí está la tabla de propiedades para la interfaz {{domxref("PannerNode")}}:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Número de entradas</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Número de salidas</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Modo de recuento de canales</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Recuento de canales</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Interpretación del canal</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Estas páginas no se pueden representar en GFM porque tienen una columna de encabezado, por lo que los redactores deben usar HTML en este caso.
Para obtener el estilo especial, los redactores deben aplicar la clase `"properties"` a la tabla:

```html
<table class="properties"></table>
```

### Referencia de la discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> y <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Superíndice y subíndice

Los redactores podrán usar los elementos HTML {{HTMLElement("sup")}} y {{HTMLElement("sub")}} si es necesario, pero deben usar alternativas si es posible. En particular:

- Para exponenciación, usa el circunflejo: `2^53`.
- Para expresiones ordinales como 1<sup>st</sup>, prefiere palabras como "primero".
- Para las notas al pie, no marques las referencias de las notas al pie, por ejemplo, `<sup>[1]</sup>`.

### Referencia de la discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4578>.

## Resumen de la página

El _resumen de la página_ es el primer párrafo de "contenido" de una página — el primer texto que aparece justo después del front matter y de cualquier macro de [barra lateral](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) o [banner de página](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators).

Este resumen se utiliza para optimizar el SEO y algunas macros lo incluyen automáticamente junto a los listados de páginas.
Por lo tanto, el primer párrafo debe ser a la vez conciso e informativo.

### Referencia de la discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/3923>.

## Macros

Los redactores usan macros en el texto para crear plantillas de enlaces comunes, o para incluir bloques específicos de código o texto:

```md
La propiedad [CSS](/es/docs/Web/CSS) **`margin`** establece el área de margen en los cuatro lados de un elemento.
Es una abreviatura de \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}} y \{{cssxref("margin-left")}}.
…
```

Véase [Uso de macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros) para obtener más información.
