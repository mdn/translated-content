---
title: blockquote
slug: Web/HTML/Element/blockquote
---

### Definición

- **blockquote** -_cita en bloque_ . Crea citas en bloque, marca las citas a otros autores o documentos.

  - : **Sus etiquetas son**: `<blockquote>` y `</blockquote>` (ambas obligatorias).

    **Está definido como**: Elemento [en bloque](/es/HTML/Elemento/Tipos_de_elementos#enbloque).

    **Crea una caja**: En bloque.

    **Puede y debe contener**: Uno o más elementos [en bloque](/es/HTML/Elemento/Tipos_de_elementos#enbloque) o [script](/es/HTML/Elemento/script)

    Con un doctype transicional **Puede contener**: texto, y/o cero o más elementos [en bloque](/es/HTML/Elemento/Tipos_de_elementos#enbloque) o [en línea](/es/HTML/Elemento/Tipos_de_elementos#enlinea)

#### Atributos

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th>atributo</th>
      <th>descripción</th>
      <th>valor</th>
    </tr>
    <tr>
      <th colspan="3">Genéricos</th>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-title"
          >title</a
        >
      </td>
      <td>
        Texto informativo o título del elemento. Suele mostrarse a modo de "tool
        tip".
      </td>
      <td>
        Texto legible por personas. Sensible a
        <abbr title="diferencia entre Mayúsculas y minúsculas">M/m.</abbr>. Por
        defecto: Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-id"
          >id</a
        >
      </td>
      <td>
        Le da un nombre al elemento que lo diferencia de todos los demás del
        documento.
      </td>
      <td>
        Un
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-id"
          >nombre único</a
        >. Sensible a
        <abbr title="diferencia entre Máyusculas y minúsculas">M/m.</abbr> Por
        defecto: Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-class"
          >class</a
        >
      </td>
      <td>Asigna nombres de clases al elemento. Por defecto, clases CSS.</td>
      <td>
        Lista de clases separadas por espacio en blanco. Sensible a
        <abbr title="diferencia entre Máyusculas y minúsculas">M/m.</abbr> Por
        defecto: Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/styles.html#adef-style"
          >style</a
        >
      </td>
      <td>
        Permite especificar
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/styles.html"
          >información de estilo</a
        >. Por defecto, estilos CSS.
      </td>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-style"
          >Declaraciones de estilo</a
        >. Por defecto: Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-lang"
          >lang</a
        >
      </td>
      <td>
        Información sobre el
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html"
          >idioma del contenido</a
        >
        del elemento y del valor de sus atributos.
      </td>
      <td>
        Un
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-langcode"
          >código de idioma</a
        >. Por defecto: "desconocido". Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-dir"
          >dir</a
        >
      </td>
      <td>
        Indica la
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html"
          >dirección de texto</a
        >
        y tablas.
      </td>
      <td>
        Uno de los siguientes: <abbr title="Left-to-right">'ltr' </abbr>o
        <abbr title="Right-to-left">'rtl'. </abbr>Por defecto: En castellano
        'ltr'. Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/interact/scripts.html#events"
          >Eventos:</a
        >
        <code style="color: green"
          >onclick, ondblclick, onmousedown, onmouseup, onmouseover,
          onmousemove, onmouseout, onkeypress, onkeydown, onkeyup.</code
        >
      </td>
    </tr>
    <tr>
      <th colspan="3">Específicos</th>
    </tr>
    <tr>
      <td><code style="color: green">cite</code></td>
      <td>Proporciona un enlace al documento original o fuente</td>
      <td>
        Una dirección
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.4"
          >URI</a
        >. Por defecto: lo fija el navegador
      </td>
    </tr>
    <tr>
      <th colspan="3">De transición</th>
    </tr>
    <tr>
      <td colspan="3">No tiene</td>
    </tr>
    <tr>
      <th>atributo</th>
      <th>descripción</th>
      <th>valor</th>
    </tr>
  </tbody>
</table>

### Ejemplos de uso

#### Un blockquote estricto

```
<blockquote cite='http://html.conclase.net/w3c/html401...def-BLOCKQUOTE'>
  <p>
    <strong>Nota.</strong> Recomendamos que las implementaciones de hojas
    de estilo porporcionen un mecanismo para insertar signos de puntuación de citas
    antes y después de una cita delimitada por un BLOCKQUOTE de un modo apropiado según
    el contexto del idioma actual y el grado de anidamiento de las citas.
  </p>
</blockquote>
```

### Estilo predeterminado

### Notas

- Conviene tener cuidado con las divergencias en el tipo de contenido dependiendo del doctype. El siguiente ejemplo es válido con un doctype transicional, pero no lo es con el estricto:

```
<blockquote>
  Bla, bla, bla...
</blockquote>
```

- **blockquote** tiene un hermano menor: [q](/es/HTML/Elemento/q). **blockquote** sirve para citas en bloque y [q](/es/HTML/Elemento/q) para citas en línea.

<!---->

- A diferencia de [q](/es/HTML/Elemento/q), **blockquote** no entrecomilla los contenidos, debe hacerlo el autor (con CSS).

### Referencia

- El elemento [**blockquote** en la especificación](http://html.conclase.net/w3c/html401-es/struct/text.html#edef-BLOCKQUOTE) de html 4.01

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-blockquote): IE 6 - IE 7 - FF 1.5 - OP 9.

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
