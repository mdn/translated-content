---
title: area
slug: Web/HTML/Element/area
---

### Definición

**area** de area=área

- Sirve para crear las distintas secciones en las que se puede dividir un [mapas de imágenes](http://html.conclase.net/w3c/html401-es/struct/objects.html#include-maps) en el cliente.

  - : **Sus etiquetas son**: \<area> (solo tiene una).

    **Crea una caja**: No.

    **Es un**: Elemento para mapas de imágenes.

    **Puede contener**: Nada.

    **Solo puede ser hijo de**: Elementos [map](/es/HTML/Elemento/map).

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
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/objects.html#adef-shape"
          >shape</a
        >
      </td>
      <td>Indica la forma del área del mapa.</td>
      <td>
        Uno de los siguientes: <code>'rect'</code>, <code>'circle'</code>,
        <code>'poly'</code>, o <code>'default'</code>.
      </td>
      <td><abbr title="Por defecto">PD.</abbr>: <code>'rect'</code></td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/objects.html#adef-coords"
          >coords</a
        >
      </td>
      <td>Indica las coordenadas (x,y) del área del mapa.</td>
      <td>
        Lista de: cantidades de píxeles, o porcentajes de espacio disponible.
        Separadas por comas.
      </td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/links.html#adef-href"
          >href</a
        >
      </td>
      <td>La dirección del recurso vínculado.</td>
      <td>
        Una dirección
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.4"
          >URI</a
        >. Sensible a
        <abbr title="diferencia entre Máyusculas y minúsculas">M/m.</abbr> (o
        no).
      </td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/objects.html#adef-nohref"
          >nohref</a
        >
      </td>
      <td>Indica que el área no es activa, no tiene enlace.</td>
      <td>Uno: 'nohref'</td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/objects.html#adef-alt"
          >alt</a
        >
      </td>
      <td>
        Describe el área o su vínculo, es necesario por que
        <strong>area</strong> no tiene contenido.
      </td>
      <td>
        Texto legible. Sensible a
        <abbr title="diferencia entre Máyusculas y minúsculas">M/m.</abbr>
      </td>
      <td><abbr title="El autor debe indicarlo">Requerido</abbr></td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/interact/forms.html#adef-accesskey"
          >accesskey</a
        >
      </td>
      <td>
        Define una tecla de acceso rápido. Importante para la
        <a href="es/Accesibilidad">Accesibilidad</a>.
      </td>
      <td>
        Un
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-character"
          >carácter</a
        >
        o letra.
      </td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/interact/forms.html#adef-tabindex"
          >tabindex</a
        >
      </td>
      <td>Asigna un número de posición en el orden de tabulación.</td>
      <td>Un número entre 0 y 32767.</td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td colspan="4">
        <strong>Eventos</strong>:
        <code style="color: green">onfocus, onblur.</code>
      </td>
    </tr>
    <tr>
      <th colspan="4">De transición</th>
    </tr>
    <tr>
      <td><code style="color: green">target</code></td>
      <td>
        Indica el
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#h-16.1"
          >marco</a
        >
        en el que se cargará el recurso.
      </td>
      <td>
        Puede ser el nombre de un marco existente, o un
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-frame-target"
          >nombre reservado</a
        >
      </td>
      <td>Lo fija el navegador.</td>
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

#### Un mapa de imágenes dividido en dos

```

 <object data="http://developer.mozilla.org/wiki-images/es/3/39/Firefoxlogo.png"
         usemap="#map1" type="image/png"
         width="135" height="155">

   <map name="map1">
     <area href="http://www.mozilla.com/firefox/"
       alt="El navegador"
       shape="rect"
       coords="0,0,60,155">

     <area href="http://www.mozilla.com/thunderbird/"
       alt="El gestor de correo"
       shape="rect"
       coords="75,0,135,155">
   </map>
 </object>

```

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-area): IE6 vs IE7 vs FF1.5 vs OP9.

### Estilo predeterminado

### Notas

- **area** es un elemento antiguo con el que pueden hacerse mapas simples y poco accesibles. No se recomienda su uso, es preferible diseñar los mapas con elementos en bloque y [anclas](/es/HTML/Elemento/a).

### Referencia

- Los mapas de imágenes y el elemento [**area** en la especificación](http://html.conclase.net/w3c/html401-es/struct/objects.html#h-13.6) de html 4.01

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras! Disculpen las molestias.
>
> ¿Quieres participar en su ampliación? Para saber como hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
