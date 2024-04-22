---
title: big
slug: Web/HTML/Element/big
---

### Definición

**big** de big=grande

- Muestra el texto marcado con un tamaño de fuente más grande. El tamaño de la fuente puede definirse en una escala del 1 al 7, **big** aumenta este valor en un punto.

  - : **Sus etiquetas son**: `<big>` y `</big>` (Ambas obligatorias).

    **Crea una caja**: En línea.

    **Está definido como**: Elemento [de estilo de fuente](/es/HTML/Elemento/Tipos_de_elementos#de_estilo_de_fuente) y por lo tanto [en línea](/es/HTML/Elemento/Tipos_de_elementos#en_l.C3.ADnea).

    **Puede contener**: Texto y/o cero o más elementos [en línea](/es/HTML/Elemento/Tipos_de_elementos#en_l.C3.ADnea).

#### Atributos

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th>atributo</th>
      <th>descripción</th>
      <th>valor</th>
      <th>por omisión</th>
    </tr>
    <tr>
      <th colspan="4">Genéricos</th>
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
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.3"
          >Texto legible</a
        >. Sensible a
        <abbr title="diferencia entre Mayúsculas y minúsculas">M/m.</abbr>.
      </td>
      <td>Lo fija el navegador.</td>
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
        <abbr title="diferencia entre Máyusculas y minúsculas">M/m.</abbr>
      </td>
      <td>Lo fija el navegador.</td>
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
        <abbr title="diferencia entre Máyusculas y minúsculas">M/m.</abbr>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-cdata"
          >cdata</a
        >
      </td>
      <td>Lo fija el navegador.</td>
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
        >.
      </td>
      <td>Lo fija el navegador.</td>
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
        >.
      </td>
      <td>
        Lo fija el navegador. <abbr title="Por defecto">PD.</abbr>:
        "desconocido".
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
        <abbr title="Right-to-left">'rtl'.</abbr>
      </td>
      <td>
        Lo fija el navegador. <abbr title="Por defecto">PD.</abbr>: En
        castellano 'ltr'.
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <strong>Eventos</strong>:
        <code style="color: green"
          >onclick, ondblclick, onmousedown, onmouseup, onmouseover,
          onmousemove, onmouseout, onkeypress, onkeydown, onkeyup.</code
        >
      </td>
    </tr>
    <tr>
      <th colspan="4">Específicos</th>
    </tr>
    <tr>
      <td colspan="4">No tiene</td>
    </tr>
    <tr>
      <th colspan="4">De transición</th>
    </tr>
    <tr>
      <td colspan="4">No tiene</td>
    </tr>
    <tr>
      <th>atributo</th>
      <th>descripción</th>
      <th>valor</th>
      <th>por omisión</th>
    </tr>
  </tbody>
</table>

### Ejemplos de uso

#### Simple

```

  <p>

   Texto normal y... <big>Texto más grande</big>

  </p>

```

#### Recursivo

**big** puede contener otros elementos en línea, por ejemplo... **big**:

```html
<p>
  Texto normal y texto
  <big>
    cada
    <big>
      vez <big> más <big> grande. </big></big></big
    ></big
  >
</p>
```

Se visualiza así:

{{EmbedLiveSample}}

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-big): IE6 vs IE7 vs FF1.5 vs OP9.

### Estilo predeterminado

Observa el siguiente ejemplo:

```

 <style>
        span { font-size: larger; }
 </style>

 <h2> Con big </h2>
 <p> Texto normal y texto ...

 <big> cada <big> vez <big> más <big> grande. </big></big></big></big>  </p>

 <h2> Con CSS </h2>
 <p> Texto normal y texto ...

 <span> cada <span> vez <span> más <span> grande. </span></span></span></span>  </p>

```

### Notas

- **big** tiene un elemento opuesto, [small](/es/HTML/Elemento/small). Si **big** aumenta el tamaño de la fuente [small](/es/HTML/Elemento/small) lo disminuye. Sin embargo en su funcionamiento son idénticos.
- El W3C (y nosotros) desaconseja el uso de este elemento, para manejar el tamaño del texto es mejor usar CSS.

### Referencia

- El elemento [**big** en la especificación](http://html.conclase.net/w3c/html401-es/present/graphics.html#edef-BIG) de html 4.01

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
