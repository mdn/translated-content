---
title: Cómo escribir en Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 134cdabf5742ed1fd65b1c90ee19d8cc425ce999
---

{{MDNSidebar}}

Esta página describe cómo usamos Markdown para escribir documentación en MDN Web Docs. Hemos elegido un Markdown personalizado por GitHub (GFM, por sus siglas en inglés ―GitHub-Flavored Markdown―) como base y agregamos algunas extensiones para admitir algunas de las cosas que necesitamos hacer en MDN que no son fácilmente compatibles con GFM.

## Base: Markdown personalizado por GitHub

La base para el Markdown de MDN es un Markdown personalizado por GitHub (GFM): <https://github.github.com/gfm/>. Esto significa que puedes consultar la especificación de GFM para cualquier cosa que no se especifique explícitamente en esta página. GFM, a su vez, es un superconjunto de CommonMark (<https://spec.commonmark.org/>).

## Enlaces

La especificación de GFM define dos tipos básicos de enlaces:

- [enlaces en línea](https://github.github.com/gfm/#inline-link), en los que el destino se proporciona inmediatamente después del texto del enlace
- [enlaces de referencia](https://github.github.com/gfm/#reference-link), en los que el destino se define en otra parte del documento.

En MDN solo permitimos enlaces en línea.

Esta es la forma correcta de escribir enlaces de GFM en MDN:

```md example-good
Los [macarrones](<https://es.wikipedia.org/wiki/Macarrón_(galleta)>) son deliciosos pero difíciles de hacer.
```

Esta es una forma incorrecta de escribir enlaces en MDN:

```md example-bad
Los [macarrones][macaron] son deliciosos pero difíciles de hacer.

[macaron]: https://es.wikipedia.org/wiki/Macarrón_(galleta)
```

## Bloques de código de ejemplo

En GFM y CommonMark, los autores pueden usar "vallas de código" para demarcar bloques `<pre>`. El código de apertura puede ir seguido de algún texto llamado "cadena de información". La especificación establece lo siguiente:

> La primera palabra de la cadena de información se usa normalmente para especificar el lenguaje del ejemplo de código y se representa en el atributo de clase de la etiqueta de código.

Está permitido que la cadena de información contenga varias palabras, como:

````md
```fee fi fo fum
// algún código de ejemplo
```
````

En MDN, los escritores usarán bloques de código. Deben especificar el lenguaje del ejemplo de código usando la primera palabra de la cadena de información, y esto se usará para resaltar la sintaxis del bloque. Se admiten las siguientes palabras:

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
    - `wasm` - WebAssembly
    - `webidl` - Lenguaje de descripción de interfaz web
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
- Configuración/Archivos de información
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
  - `handlebars` - Plantillas de Handlebars
  - `pug` - [Plantillas de Pug](https://pugjs.org/api/getting-started.html) (las cuales pueden ser usadas por [Express](/es/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer))
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

Si el resaltado que quieres usar no aparece en la lista anterior, deberás marcar el bloque de código como `plain`.
Se pueden solicitar lenguajes adicionales en el proceso [discutido en GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

### Omitiendo analizadores de código (_linters_)

Los escritores pueden agregar un sufijo `-nolint` a cualquiera de los identificadores de lenguaje:

````md-nolint
```html-nolint
<p>
Este código no será analizado.
</p>
```
````

Los bloques de código como este obtendrán un resaltado de sintaxis apropiado y serán reconocidos por el sistema de ejemplos en vivo, pero serán ignorados por analizadores o formateadores automáticos como Prettier. Los autores deben usar este sufijo para mostrar código no válido o formato alternativo que los analizadores o formateadores no deberían corregir.

### Clases adicionales (cadenas de información)

GFM admite [cadenas de información](https://github.github.com/gfm/#info-string), que permiten a los autores proporcionar información adicional sobre un bloque de código. En MDN, las cadenas de información se convierten en nombres de clases.

Los escritores podrán proporcionar cualquiera de las siguientes cadenas de información:

- `example-good`: pinta este ejemplo como un buen ejemplo (uno a seguir)
- `example-bad`: pinta este ejemplo como un mal ejemplo (uno que se debe evitar)
- `hidden`: no mostrar este bloque de código en la página. Esto es para usar en ejemplos en vivo.

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

Serán mostrados de la siguiente manera:

```js example-good
const greeting = "Soy un buen ejemplo";
```

```js example-bad
const greeting = "Soy un mal ejemplo";
```

### Referencia de discusión

Este problema se resolvió en:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Notas, advertencias y observaciones

A veces, los escritores quieren llamar la atención sobre un contenido. Para hacer esto, usarán una cita en bloque de GFM con un primer párrafo especial. Hay tres tipos de estos: notas, advertencias y observaciones.

- Para añadir una nota, crea una cita en bloque de GFM cuyo primer párrafo comience con `**Nota:**`.
- Para añadir una advertencia, crea una cita en bloque de GFM cuyo primer párrafo comience con `**Advertencia:**`.
- Para añadir una observación, crea una cita en bloque de GFM cuyo primer párrafo comience con `**Observación:**`.

Las notas y advertencias mostrarán el texto **Nota:** o **Advertencia:** en el resultado, mientras que las observaciones no. Esto hace que las observaciones sean una buena opción cuando un autor desea proporcionar un título personalizado.

El procesamiento del marcado funciona en el árbol de sintaxis abstracta (AST, por sus siglas en inglés) que produce, no en los caracteres exactos proporcionados. Esto significa que proporcionar `<strong>Nota:</strong>` también generará una nota. Sin embargo, la sintaxis de Markdown es necesaria por una cuestión de estilo.

Una línea de cita en bloque vacía produce varias líneas de la misma manera que los párrafos normales. Además, las líneas múltiples sin espacios también se tratan como líneas Markdown normales y se concatenan.

La cita en bloque puede contener bloques de código u otros elementos de bloque.

### Ejemplos

#### Notas

```md
> [!NOTE]
> Así es como se escribe una nota.
>
> Puede tener varias líneas.
```

Esto producirá el siguiente HTML:

```html
<div class="notecard note">
  <p><strong>Nota:</strong> Así es como se escribe una nota.</p>
  <p>Puede tener varias líneas.</p>
</div>
```

Este HTML se representará como un cuadro resaltado:

> [!NOTE]
> Así es como se escribe una nota.
>
> Puede tener varias líneas.

#### Advertencias

```md
> [!WARNING]
> Así es como se escribe una advertencia.
>
> Puede tener varios párrafos.
```

Esto producirá el siguiente HTML:

```html
<div class="notecard warning">
  <p><strong>Advertencia:</strong> Así es como se escribe una advertencia.</p>
  <p>Puede tener varios párrafos.</p>
</div>
```

Este HTML se representará como un cuadro resaltado:

> [!WARNING]
> Así es como se escribe una advertencia.
>
> Puede tener varios párrafos.

#### Observaciones

```md
> [!CALLOUT]
> **Así es como se escribe una observación.**
>
> Puede tener varios párrafos.
```

Esto producirá el siguiente HTML:

```html
<div class="callout">
  <p><strong>Así es como se escribe una observación.</strong></p>
  <p>Puede tener varios párrafos.</p>
</div>
```

Este HTML se representará como un cuadro resaltado:

> [!CALLOUT]
>
> **Así es como se escribe una observación.**
>
> Puede tener varios párrafos.

#### Advertencias traducidas

Debido a que el texto "Nota:" o "Advertencia:" también aparece en la salida renderizada, debe ser sensible a las traducciones. En la práctica, esto significa que cada configuración regional admitida por MDN debe proporcionar su propia traducción de estas cadenas, y la plataforma debe reconocerlas como indicativas de que la construcción necesita un tratamiento especial.

Las localizaciones se almacenan en [Yari](https://github.com/mdn/yari/tree/main/markdown/localizations) como archivos JSON en formato [gettext](https://www.gnu.org/software/gettext/). Consulta estos archivos para determinar qué cadena se debe usar en lugar de "Nota:" o "Advertencia:" para esa configuración regional. Si no se define un archivo local, se usará el inglés como alternativa.

Por ejemplo, si queremos utilizar "Warnung" para "Advertencia" en alemán, entonces en las páginas alemanas escribiríamos:

```md
> [!WARNING]
> So schreibt man eine Warnung.
```

Y esto producirá:

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

#### Notas que contienen bloques de código

Este ejemplo contiene un bloque de código.

````md
> [!NOTE]
> Así es como se escribe una nota.
>
> Puede contener bloques de código.
>
> ```js
> const s = "Estoy en un bloque de código";
> ```
>
> Así.
````

Esto producirá el siguiente HTML:

```html
<div class="notecard note">
  <p><strong>Nota:</strong> Así es como se escribe una nota.</p>
  <p>Puede contener bloques de código.</p>
  <pre class="brush: js">const s = "Estoy en un bloque de código";</pre>
  <p>Así.</p>
</div>
```

Este HTML se representará como con un bloque de código:

> [!NOTE]
> Así es como se escribe una nota.
>
> Puede contener bloques de código.
>
> ```js
> const s = "Estoy en un bloque de código";
> ```
>
> Así.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/3483>.

## Listas de definiciones

Las listas de definiciones se usan comúnmente en MDN, pero GFM no las admite. MDN introduce un formato personalizado para listas de definiciones, que es una forma modificada de una lista no ordenada de GFM ({{HTMLElement("ul")}}). En este formato:

- El `<ul>` de GFM contiene cualquier número de elementos `<li>` de GFM de nivel superior.
- Cada uno de estos elementos `<li>` de GFM de nivel superior debe contener, como elemento final, un elemento `<ul>` de GFM.
- Este `<ul>` final anidado debe contener un único elemento `<li>` de GFM, cuyo contenido de texto debe comenzar con ": " (dos puntos seguidos de un espacio). Este elemento puede contener elementos de bloque, incluidos párrafos, bloques de código, listas incrustadas y notas.

Cada uno de estos elementos `<li>` de GFM de nivel superior se transformará en un par `<dt>`/`<dd>`, de la siguiente manera:

- El elemento `<li>` de GFM de nivel superior se analizará como un elemento `<li>` de GFM y su contenido interno comprenderá el contenido del `<dt>`, excepto el `<ul>` anidado final, que no se incluirá en el `<dt>`.
- El elemento `<li>` en el `<ul>` anidado final se analizará como un elemento `<li>` de GFM y su contenido interno comprenderá el contenido del `<dd>`, excepto el ": " inicial, que será descartado.

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

En GFM/CommonMark, esto produciría el siguiente HTML:

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

En MDN, esto produciría el siguiente HTML:

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

Las listas de definiciones escritas con esta sintaxis deben constar de pares de elementos `<dt>`/`<dd>`. Usando esta sintaxis, no es posible escribir una lista con más de un elemento `<dt>` consecutivo o más de un elemento `<dd>` consecutivo: el analizador tratará esto como un error. Esperamos que casi todas las listas de definiciones en MDN funcionen con esta limitación y, para aquellas que no lo hacen, los autores pueden recurrir a HTML sin formato.

Esto no está permitido:

```md example-bad
- `param1`, `param2`, `param3`
  - : Mi descripción del `param1`
  - : Mi descripción del `param2`
  - : Mi descripción del `param3`
```

Como solución alternativa para los casos en los que un autor necesita asociar varios elementos `<dt>` con un único `<dd>`, considera proporcionarlos como un único `<dt>` que contenga varios términos, separados por comas, como este:

```md example-good
- `param1`, `param2`, `param3`
  - : Mi descripción de los params 1, 2 y 3
```

El fundamento de la sintaxis descrita aquí es que funciona bastante bien con herramientas que esperan CommonMark (por ejemplo, Prettier o vistas previas de GitHub) y al mismo tiempo es razonablemente fácil de escribir y analizar.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4367>.

## Tablas

GFM proporciona una sintaxis para crear [tablas](https://github.github.com/gfm/#tables-extension-), que usamos en MDN. Sin embargo, hay ocasiones en las que las tablas de GFM no se adaptan a nuestras necesidades:

- La sintaxis de GFM solo admite un subconjunto de las funciones disponibles en HTML. Si necesitas usar funciones de tabla que no son compatibles con GFM, usa HTML para la tabla.
- Si la representación de GFM de la tabla tiene más de 150 caracteres de ancho, usa HTML para la tabla.
- Admitimos un tipo especial de tabla llamada "tabla de propiedades", que tiene su propia clase CSS y, por lo tanto, siempre es HTML.

Entonces, el principio general es que los autores deben usar la sintaxis de GFM Markdown cuando puedan y recurrir al HTML sin formato cuando sea necesario o cuando HTML sea más legible. Para obtener más información, véase [Cuándo usar tablas HTML](#cuándo_usar_tablas_html).

### Estilo de sintaxis de tablas de GFM

En la sintaxis de tablas de GFM, los autores pueden omitir el símbolo de tubería inicial y final de las filas. Sin embargo, por razones de legibilidad, los autores de MDN deben incluirlos. Además, los autores deben proporcionar espacios finales en las filas, de modo que todas las celdas de una columna tengan la misma longitud en texto sin formato.

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

Afortunadamente, Prettier corrige automáticamente el formato de las tablas, por lo que los autores pueden confiar en Prettier para formatear sus tablas correctamente.

### Cuándo usar tablas HTML

Hay tres circunstancias principales en las que los autores deberían usar tablas HTML en lugar de la sintaxis de GFM:

1. La tabla usa funciones que no son compatibles con GFM (mira abajo).
2. La tabla de GFM sería demasiado ancha para ser legible.
3. El escritor quiere un tipo especial de tabla llamada "tabla de propiedades".

#### Funciones de tablas que no son compatibles con GFM

Las principales limitaciones de la sintaxis de tablas de GFM son:

- Las tablas de GFM deben tener una fila de encabezado.
- Las tablas de GFM pueden no tener una columna de encabezado.
- GFM no analizará elementos en bloque de GFM en las celdas de la tabla. Por ejemplo, no puedes tener una lista en una celda de una tabla.
- Las tablas de GFM no pueden tener clases asignadas.
- GFM no admite ningún elemento de tabla más allá de `<table>`, `<tr>`, `<th>` y `<td>`.
- GFM no admite ningún atributo de elemento de tabla como `colspan`, `rowspan` o `scope`.

Si un autor necesita usar alguna de las funciones no compatibles, debe escribir la tabla en HTML.

Ten en cuenta que no recomendamos el uso general de elementos `<caption>` en las tablas, ya que eso también descartaría la sintaxis de GFM.

#### Ancho máximo de las tablas de GFM

Incluso cuando una tabla se puede escribir en GFM, a veces es mejor usar HTML, porque GFM usa un enfoque "{{Glossary("ASCII")}} art" para las tablas que no es legible cuando las filas de la tabla son largas. Considera la siguiente tabla:

```html
<table>
  <tr>
    <th>El encabezado 1</th>
    <th>El encabezado 2</th>
    <th>El encabezado 3</th>
    <th>El encabezado 4</th>
    <th>El encabezado 5</th>
    <th>El encabezado 6</th>
  </tr>
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
</table>
```

En GFM esto se vería así:

```md
| El encabezado 1 | El encabezado 2                                                                                                                                           | El encabezado 3 | El encabezado 4                                                                                                                                          | El encabezado 5 | El encabezado 6 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- |
| Algo corto      | Algo mucho más largo que realmente entra en muchos detalles sobre algo, hasta el punto de que el formato de la tabla comienza a verse mal en formato GFM. | Algo corto      | Otra celda con mucho texto, que también incluye muchos detalles sobre algo, tanto es así que el formato de la tabla comienza a verse mal en formato GFM. | Algo corto      | Algo corto      |
```

En un caso como este, sería mejor usar HTML.

Esto nos lleva a la siguiente pauta: _si la representación en Markdown de la tabla tiene más de 150 caracteres de ancho, usa HTML para la tabla_.

#### Tablas de propiedades

Las tablas de propiedades son un tipo específico de tablas que se usan para mostrar contenido estructurado de valores de propiedad en un conjunto de páginas de un tipo particular. Estas tablas tienen dos columnas: la primera columna es la columna de encabezado y enumera las propiedades, y la segunda columna enumera sus valores para ese elemento en particular. Por ejemplo, aquí está la tabla de propiedades para la interfaz {{domxref("PannerNode")}}:

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

Estas páginas no se pueden representar en GFM porque tienen una columna de encabezado, por lo que los escritores deben usar HTML en este caso.
Para obtener el estilo especial, los escritores deben aplicar la clase `"properties"` a la tabla:

```html
<table class="properties"></table>
```

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> y <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Superíndice y subíndice

Los escritores podrán usar los elementos {{HTMLElement("sup")}} y {{HTMLElement("sub")}} si es necesario, pero deben utilizar alternativas si es posible. En particular:

- Para exponenciación, usa el símbolo de intercalación: `2^53`.
- Para expresiones ordinales como 1.º, prefiere palabras como "primero".
- Para las notas al pie, no marques las referencias de las notas al pie, p. ej., `<sup>[1]</sup>`.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/4578>.

## Resumen de página

El _resumen de página_ es el primer párrafo de "contenido" de una página — el primer texto que aparece después de la portada de la página y cualquier macro de [menú lateral](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#generar_la_barra_lateral) o [banner de página](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#indicadores_de_encabezado_de_página_o_sección).

Este resumen se usa para la optimización de motores de búsqueda (SEO) y algunas macros también lo incluyen automáticamente junto con los listados de páginas.
Por lo tanto, el primer párrafo debe ser a la vez breve e informativo.

### Referencia de discusión

Este problema se resolvió en <https://github.com/mdn/content/issues/3923>.

## KumaScript

Los escritores podrán incluir llamadas a macros de KumaScript en el contenido en prosa:

```md
La propiedad de [CSS](/es/docs/Web/CSS) **`margin`**
establece el área de margen en los cuatro lados de un elemento. Es una abreviatura de
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}
y \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

Los márgenes superiores e inferiores no tienen ningún efecto sobre los elementos en
línea reemplazados, como \{{HTMLElement("span")}} o \{{HTMLElement("code")}}.
```

Véase [Usando macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros) para obtener más información sobre macros.
