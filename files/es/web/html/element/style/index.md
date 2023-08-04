---
title: style
slug: Web/HTML/Element/style
---

### Definición

- **style** - estilo. Es el elemento encargado de indicar la información de estilo.

  - : **Sus etiquetas son**: `<style>` y `</style>` (ambas obligatorias).

    **Está definido como**: Elemento [de cabecera](/es/HTML/Elemento/Tipos_de_elementos#decabecera).

    **Crea una caja**: No.

    **Puede contener**: Declaraciones de estilo.

    **Debe ser contenido por**: Elementos [head](/es/HTML/Elemento/Tipos_de_elementos#head).

#### Atributos

~~Por defecto:~~ Debe indicarlo el autor.

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
      <th colspan="3">Específicos</th>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/styles.html#adef-type-STYLE"
          ><code style="color: green">type</code></a
        >
      </td>
      <td>Indica el lenguaje de hojas de estilo usado.</td>
      <td>
        Un tipo
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-content-type"
          >MIME</a
        >. Para CSS es: "text/css".
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/styles.html#adef-media"
          ><code style="color: green">media</code></a
        >
      </td>
      <td>
        Indica el/los medios a los que está destinada la información de estilo.
      </td>
      <td>
        Uno o más
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-media-descriptors"
          >descriptores de medio</a
        >
        separados por coma. Por defecto: 'screen'. Lo fija el navegador
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

#### Ejemplo simple

```
<style type="text/css">
 p { color: red; }
</style>
<p> Texto en rojo </p>
```

### Estilo predeterminado

### Notas

### Referencia

- El elemento [**style** en la especificación](http://html.conclase.net/w3c/html401-es/present/styles.html#edef-STYLE) de html 4.01
- Especificación de [CSS 2](http://www.sidar.org/recur/desdi/traduc/es/css/cover.html)

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-style): IE 6 - IE 7 - FF 1.5 - OP 9.

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
