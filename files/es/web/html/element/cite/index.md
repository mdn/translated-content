---
title: cite
slug: Web/HTML/Element/cite
---

### Definición

- **cite** -_cita_ . Marca una referencia a una fuente, o el autor de un texto citado.

  - : **Sus etiquetas son**: \<cite> y \</cite> (ambas obligatorias)

    **Está definido como**: [Elemento de frase](/es/HTML/Elemento/Tipos_de_elementos#defrase), y por lo tanto [en línea](/es/HTML/Elemento/Tipos_de_elementos#enlinea).

    **Crea una caja**: En línea.

    **Puede contener**: Text y/o cero o más elementos [en línea](/es/HTML/Elemento/Tipos_de_elementos#enlinea).

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
      <td colspan="3">No tiene</td>
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

#### ¿Quién lo dijo?

código:

```html
<p><cite>Galileo</cite> dijo: "... y sin embargo, se mueve."</p>
```

Resultado:

{{EmbedLiveSample}}

### Estilo predeterminado

En los navegadores basados en Mozilla (y en otros) el contenido de cite es mostrado con un estilo de texto en cursiva.

```
<p> <cite>Galileo</cite> dijo: "... y sin embargo, se mueve." </p>
<p> <span style='font-style: italic;'>Galileo</span> dijo: "... y sin embargo, se mueve." </p>
```

### Notas

- Está bastante estendido el mal uso de este elemento, mucha gente lo usa para marcar el texto de las citas en vez del autor, para marcar el texto están los elementos [q](/es/HTML/Elemento/q) (en línea) y [blockquote](/es/HTML/Elemento/blockquote) (en bloque).

### Referencia

- Los elementos de frase [en la especificación](http://html.conclase.net/w3c/html401-es/struct/text.html#edef-CITE) de html 4.01

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-cite): IE 6 - IE 7 - FF 1.5 - OP 9.

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
