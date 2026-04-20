---
title: Cómo escribir en Markdown
short-title: Escribir en Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 49f3eb321cf6a491c3bcef1c3590f9bf6f90c9b8
---

Esta página describe cómo usamos Markdown para escribir documentación en MDN Web Docs.
Hemos elegido GitHub-Flavored Markdown (GFM) como base y agregado extensiones para admitir las cosas que necesitamos en MDN.

## Base: GitHub-Flavored Markdown

La base para MDN Markdown es GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Esto significa que puede consultar la especificación de GFM para cualquier cosa que no se especifique explícitamente en esta página. GFM, a su vez, es un superconjunto de CommonMark (<https://spec.commonmark.org/>).

## Enlaces

La especificación de GFM define dos tipos básicos de enlaces:

- [enlaces en línea](https://github.github.com/gfm/#inline-link), en los que el destino se proporciona inmediatamente después del texto del enlace.
- [enlaces de referencia](https://github.github.com/gfm/#reference-link), en los que el destino se define en otra parte del documento.

En MDN preferimos usar enlaces en línea porque son más fáciles de leer y mantener sin perder contexto. Esta es la forma preferida de escribir enlaces en MDN:

```md
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

Sin embargo, en ciertas situaciones, los enlaces de referencia son más apropiados por su compacidad.
Por ejemplo, reducir las tablas anchas puede hacerlas más fáciles de revisar y editar.

```md
| Name                 | Features                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| [Macarons][macarons] | Delicious but tricky to make. Add more class to a tea party than almost any other confectionary. |
| [Biscotti][biscotti] | Crisp and easier to make.                                                                        |

[macarons]: https://en.wikipedia.org/wiki/Macaron
[biscotti]: https://en.wikipedia.org/wiki/Biscotti
```

En casos raros cuando sea necesario usar enlaces de referencia, asegúrese de que sigan inmediatamente al contexto donde se usan.

## Bloques de código de ejemplo

En GFM y CommonMark, los autores pueden usar "vallas de código" para delimitar bloques `<pre>`. La valla de código de apertura puede ir seguida de algún texto llamado "cadena de información". El lenguaje de la muestra de código debe especificarse usando la primera palabra de la cadena de información, y esto se usará para proporcionar resaltado de sintaxis para el bloque. Se admiten las siguientes palabras:

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
    - `glsl` - GLSL (Sombreadores OpenGL)
    - `sql` - Comandos SeQueL
    - `wat` - WebAssembly
    - `webidl` - Lenguaje de definición de interfaz web
- Estilos
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
- Prompts de comandos
  - `bash` - Bash/Shell
  - `batch` - Batch (Shell de Windows)
  - `powershell` - PowerShell
- Archivos de configuración/datos
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - Base de datos SQL
  - `ignore` - Archivo Gitignore
  - `apacheconf` - Configuración de Apache
  - `nginx` - Configuración de NGINX
- Plantillas
  - `django` - Plantillas de Django
  - `svelte` - Plantillas de Svelte
  - `hbs` - Plantillas de Handlebars
  - `pug` - [Plantillas de Pug](https://pugjs.org/api/getting-started.html) (que pueden ser usadas por [Express](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer))
- Otros
  - `plain` - Texto sin formato
  - `diff` - Archivo diff
  - `http` - Encabezados HTTP
  - `regex` - Regex
  - `uri` - URI y URL

Por ejemplo:

````md
```js
const greeting = "I will get JavaScript syntax highlighting";
```
````

Si el resaltado que desea usar no está listado arriba, debe marcar el bloque de código como `plain`.
Se pueden solicitar idiomas adicionales en el proceso [discutido en GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

> [!NOTE]
> Use el identificador de lenguaje exactamente como se lista arriba. Por ejemplo, `javascript` no está permitido y debe escribir `js`.

### Suprimir el linting

Los autores pueden agregar un sufijo `-nolint` a cualquiera de los identificadores de lenguaje:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Los bloques de código como este recibirán el resaltado de sintaxis apropiado y serán reconocidos por el sistema de muestras en vivo, pero serán ignorados por los linters o formateadores automáticos como Prettier. Los autores deben usar este sufijo para mostrar código no válido o formato alternativo que los linters o formateadores no deben corregir.

### Clases adicionales (cadenas de información)

GFM admite [cadenas de información](https://github.github.com/gfm/#info-string), que permiten a los autores proporcionar información adicional sobre un bloque de código. En MDN, las cadenas de información se convierten en nombres de clase.

Los autores pueden proporcionar una de las siguientes cadenas de información:

- `example-good`: diseñar este ejemplo como un buen ejemplo (para seguir)
- `example-bad`: diseñar este ejemplo como un mal ejemplo (para evitar)
- `hidden`: no representar este bloque de código en la página. Esto es para usar en muestras en vivo.

Por ejemplo:

````md
```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

```js hidden
const greeting = "I'm a secret greeting";
```
````

Estos se representarán como:

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### Referencia de discusión

Este problema se resolvió en:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Notas, advertencias y observaciones

Los autores pueden usar la [sintaxis de alertas de GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) para llamar la atención especial sobre el contenido. Hay tres tipos de alertas: notas, advertencias y observaciones.

> [!NOTE]
> MDN Web Docs admitió alertas con su propia sintaxis antes de admitir alertas de GFM, y se refería a ellas como "noteblocks".
> MDN no admite las siguientes alertas de GFM: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM no admite `[!CALLOUT]`.

- Para agregar una nota, cree un bloque de cita cuya primera línea sea `[!NOTE]`.
- Para agregar una advertencia, cree un bloque de cita cuya primera línea sea `[!WARNING]`.
- Para agregar una observación, cree un bloque de cita cuya primera línea sea `[!CALLOUT]`.

Las notas y advertencias agregarán una **Nota:** o **Advertencia:** localizada al comienzo de la salida, mientras que las observaciones no. Esto hace que las observaciones sean una buena opción cuando un autor desea proporcionar un título personalizado.

Múltiples líneas se producen mediante una línea de bloque de cita vacía de la misma manera que los párrafos normales. Además, múltiples líneas sin espacio también se tratan como líneas normales de Markdown y se concatenan.

El bloque de cita puede contener bloques de código u otros elementos de bloque.

### Ejemplos

#### Nota

```md
> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.
```

Esto producirá el siguiente HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

Este HTML se representará como un cuadro resaltado:

> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.

#### Advertencias

```md
> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.
```

Esto producirá el siguiente HTML:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Este HTML se representará como un cuadro resaltado:

> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.

#### Observaciones

```md
> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

Esto producirá el siguiente HTML:

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Este HTML se representará como un cuadro resaltado:

> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.

#### Nota que contiene un bloque de código

Este ejemplo contiene un bloque de código.

````md
> [!NOTE]
> This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.
````

Esto producirá el siguiente HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

Este HTML se representará con un bloque de código:

> [!NOTE]
> This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/3483>.

## Listas de definición

Las listas de definición se usan comúnmente en MDN, pero no son admitidas por GFM. MDN introduce un formato personalizado para listas de definición, que es una forma modificada de una lista desordenada de GFM ({{htmlelement("ul")}}). En este formato:

- El `<ul>` de GFM contiene cualquier número de elementos `<li>` de nivel superior de GFM.
- Cada uno de estos elementos `<li>` de nivel superior de GFM debe contener, como su elemento final, un elemento `<ul>` de GFM.
- Este `<ul>` anidado final debe contener un solo elemento `<li>` de GFM, cuyo contenido de texto debe comenzar con ": " (dos puntos seguidos de un espacio). Este elemento puede contener elementos de bloque, incluidos párrafos, bloques de código, listas incrustadas y notas.

Cada uno de estos elementos `<li>` de nivel superior de GFM se transformará en un par `<dt>`/`<dd>`, de la siguiente manera:

- El elemento `<li>` de nivel superior de GFM se analizará como un elemento `<li>` de GFM y su contenido interno comprenderá el contenido del `<dt>`, excepto el `<ul>` anidado final, que no se incluirá en el `<dt>`.
- El elemento `<li>` en el `<ul>` anidado final se analizará como un elemento `<li>` de GFM y su contenido interno comprenderá el contenido del `<dd>`, excepto el ": " inicial, que se descartará.

Por ejemplo, este es un `<dl>`:

````md
- term1
  - : My description of term1
- `term2`
  - : My description of term2

    It can have multiple paragraphs, and code blocks too:

    ```js
    const thing = 1;
    ```
````

En GFM/CommonMark, esto produciría el siguiente HTML:

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: My description of term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: My description of term2</p>
        <p>It can have multiple paragraphs, and code blocks too:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

En MDN, esto produciría el siguiente HTML:

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>My description of term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>My description of term2</p>
    <p>It can have multiple paragraphs, and code blocks too:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Las listas de definición escritas usando esta sintaxis deben consistir en pares de elementos `<dt>`/`<dd>`. Usando esta sintaxis, no es posible escribir una lista con más de un elemento `<dt>` consecutivo o más de un elemento `<dd>` consecutivo: el analizador tratará esto como un error. Esperamos que casi todas las listas de definición en MDN funcionen con esta limitación, y para aquellas que no, los autores pueden recurrir a HTML sin procesar.

Esto no está permitido:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Como solución alternativa para casos en los que un autor necesita asociar múltiples elementos `<dt>` con un solo `<dd>`, considere proporcionarlos como un solo `<dt>` que contiene múltiples términos, separados por comas, así:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

La racionalidad para la sintaxis descrita aquí es que funciona lo suficientemente bien con herramientas que esperan CommonMark (por ejemplo, Prettier o vistas previas de GitHub) mientras es razonablemente fácil de escribir y analizar.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4367>.

## Tablas

GFM proporciona una sintaxis para crear [tablas](https://github.github.com/gfm/#tables-extension-), que usamos en MDN. Sin embargo, hay momentos en los que las tablas de GFM no se ajustan a nuestras necesidades:

- La sintaxis de GFM solo admite un subconjunto de las características disponibles en HTML. Si necesita usar características de tabla que no son compatibles con GFM, use HTML para la tabla.
- Si la representación de GFM de la tabla tendría más de 150 caracteres de ancho, use HTML para la tabla.
- Admitimos un tipo especial de tabla llamada "tabla de propiedades", que tiene su propia clase CSS y por lo tanto siempre es HTML.

Entonces, el principio general es que los autores deben usar la sintaxis de Markdown de GFM cuando puedan, y recurrir a HTML sin procesar cuando tengan que o cuando HTML sea más legible. Para obtener más información, consulte [Cuándo usar tablas HTML](#cuándo_usar_tablas_html).

### Estilo de sintaxis de tabla de GFM

En la sintaxis de tabla de GFM, los autores pueden omitir las tuberías iniciales y finales para las filas. Sin embargo, por legibilidad, los autores de MDN deben incluir estas tuberías. Además, los autores deben proporcionar espacios finales en las filas, de modo que todas las celdas en una columna tengan la misma longitud en texto sin formato.

Es decir, los autores de MDN deben usar este estilo:

```md example-good
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --------- | --------- |
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

y no este estilo:

```md-nolint example-bad
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --- |----------------------|
| cell 1 | cell 2 | cell 3 |
cell 4 | cell 5 | cell 6
```

Las tablas son formateadas por Prettier, por lo que los autores confían en las herramientas para formatear las tablas correctamente.

### Cuándo usar tablas HTML

Hay tres circunstancias principales en las que los autores deben usar tablas HTML en lugar de la sintaxis de GFM:

1. La tabla usa características que no son compatibles con GFM (ver abajo).
2. La tabla de GFM sería demasiado ancha para ser legible.
3. El escritor desea un tipo especial de tabla llamado "tabla de propiedades".

#### Características de tabla que no son compatibles con GFM

Las limitaciones principales de la sintaxis de tabla de GFM son:

- Las tablas de GFM deben tener una fila de encabezado.
- Las tablas de GFM no pueden tener una columna de encabezado.
- GFM no analizará elementos de bloque de GFM en celdas de tabla. Por ejemplo, no puede tener una lista en una celda de tabla.
- Las tablas de GFM no pueden tener clases asignadas.
- GFM no admite ningún elemento de tabla más allá de `<table>`, `<tr>`, `<th>` y `<td>`.
- GFM no admite ningún atributo de elemento de tabla como `colspan`, `rowspan` o `scope`.

Si un autor necesita usar alguna de las características no compatibles, debe escribir la tabla en HTML.

Tenga en cuenta que no recomendamos el uso general de elementos `<caption>` en las tablas, ya que también descartaría la sintaxis de GFM.

#### Ancho máximo de tabla de GFM

Incluso cuando una tabla podría escribirse en GFM, a veces es mejor usar HTML, porque GFM usa un enfoque de "arte {{Glossary("ASCII")}}" para las tablas que no es legible cuando las filas de la tabla se vuelven largas. Considere la siguiente tabla:

```html
<table>
  <thead>
    <tr>
      <th>A heading 1</th>
      <th>A heading 2</th>
      <th>A heading 3</th>
      <th>A heading 4</th>
      <th>A heading 5</th>
      <th>A heading 6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Something shortish</td>
      <td>
        Something much longer that really goes into a lot of detail about
        something, so much so that the table formatting starts to look bad in
        GFM format.
      </td>
      <td>Something shortish</td>
      <td>
        Another cell with lots of text in it, that also really goes into a lot
        of detail about something, so much so that the table formatting starts
        to look bad in GFM format.
      </td>
      <td>Something shortish</td>
      <td>Something shortish</td>
    </tr>
  </tbody>
</table>
```

En GFM esto se verá así:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

En un caso como este, sería mejor usar HTML.

Esto nos lleva a la siguiente directriz: _si la representación de Markdown de la tabla tendría más de 150 caracteres de ancho, use HTML para la tabla_.

#### Tablas de propiedades

Las tablas de propiedades son un tipo específico de tabla que se usa para mostrar contenido de valores de propiedad estructurado en un conjunto de páginas de un tipo particular. Estas tablas tienen dos columnas: la primera columna es la columna de encabezado y enumera las propiedades, y la segunda columna enumera sus valores para este elemento en particular. Por ejemplo, aquí está la tabla de propiedades para la interfaz {{domxref("PannerNode")}}:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Estas páginas no pueden representarse en GFM porque tienen una columna de encabezado, por lo que los autores deben usar HTML en este caso.
Para obtener el estilo especial, los autores deben aplicar la clase `"properties"` a la tabla:

```html
<table class="properties"></table>
```

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> y <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Superíndice y subíndice

Los autores podrán usar los elementos HTML {{htmlelement("sup")}} y {{htmlelement("sub")}} si es necesario, pero deben usar alternativas si es posible. En particular:

- Para la exponenciación, use el caret: `2^53`.
- Para expresiones ordinales como 1<sup>st</sup>, prefiera palabras como "first".
- Para notas al pie, no marque las referencias de notas al pie, por ejemplo, `<sup>[1]</sup>`.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4578>.

## Resumen de página

El _resumen de página_ es el primer párrafo de "contenido" en una página; el primer texto que aparece después del material frontal de la página y cualquier macro de [barra lateral](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) o [banner de página](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#indicadores_de_encabezado_de_página_o_sección).

Este resumen se usa para la optimización de motores de búsqueda (SEO) y también se incluye automáticamente junto con las listas de páginas por algunas macros.
El primer párrafo debe ser conciso e informativo.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/3923>.

## Macros

Los autores usan macros en prosa para plantear patrones de enlace comunes, o para incluir bloques de código o texto específicos:

```md
The **`margin`** [CSS](/es/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Consulte [Usar macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros) para obtener más información.
