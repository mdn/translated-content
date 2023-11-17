---
title: frame
slug: Web/HTML/Element/frame
---

### Definición

- **frame** -_marcos_ . Define la organización de los marcos dentro de la ventana del usuario.

  - : **Sus etiquetas son**: `<frame>` (solo tiene una).

    **Está definido como**: Elemento [para marcos](/es/HTML/Elemento/Tipos_de_elementos#paramarcos).

    **Crea una caja**: .

    **Puede contener**: Nada.

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
      <th colspan="3">Específicos</th>
    </tr>
    <tr>
      <td colspan="3">No tiene</td>
    </tr>
    <tr>
      <th colspan="3">De transición</th>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-longdesc-FRAME"
          >longdesc</a
        >
      </td>
      <td>
        Permite especificar un enlace a una descripción detallada del marco.
        Inportante para la <a href="es/Accesibilidad">accesibilidad</a>.
      </td>
      <td>
        Una dirección
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.4"
          >URI</a
        >. Por defecto: lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-name-FRAME"
          >name</a
        >
      </td>
      <td>
        Especifica un nombre para el marco, Esto permite usarlo
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#h-16.3"
          >como destino</a
        >
        de los enlaces.
      </td>
      <td>. Por defecto: . lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-src-FRAME"
          >src</a
        >
      </td>
      <td>Especifica la localización de los contenidos iniciales del marco.</td>
      <td>
        Una dirección
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.4"
          >URI</a
        >. Por defecto: lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-frameborder"
          >frameborder</a
        >
      </td>
      <td>Indica si el marco tendrá o no borde.</td>
      <td>Uno de los siguientes: '1' o '0'. Por defecto: '1'.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-marginwidth"
          >marginwidth</a
        >
      </td>
      <td>Indica el margen izquierdo y derecho entre contenido y borde.</td>
      <td>
        Una cantidad de píxeles (cero o más). Por defecto: lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-marginheight"
          >marginheight</a
        >
      </td>
      <td>Indica el margen superior e inferior entre contenido y borde.</td>
      <td>
        Una cantidad de píxeles (cero o más). Por defecto: lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-noresize"
          >noresize</a
        >
      </td>
      <td>Hace que la ventana del marco no sea redimensionable.</td>
      <td>'noresize'. Por defecto: lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-scrolling"
          >scrolling</a
        >
      </td>
      <td>
        Indica si el marco debe tener o no barra de desplazamiento (scroll).
      </td>
      <td>Uno de los sigientes: 'yes', 'no', o 'auto'. Por defecto: 'auto'.</td>
    </tr>
    <tr>
      <th>atributo</th>
      <th>descripción</th>
      <th>valor</th>
    </tr>
  </tbody>
</table>

### Ejemplos de uso

#### Un documento con marcos

código:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
  "http://www.w3.org/TR/html4/frameset.dtd">
<html>
<head>
<title>Un documento simple con marcos</title>
</head>
<frameset rows="20%,80%">
 <frameset cols="20%, 80%">
   <frame src="http://developer.mozilla.org/wiki-im...irefoxlogo.png">
   <frame src="http://html.conclase.net/w3c/html401...dtd.html#frame">
 </frameset>
 <frame src="http://html.conclase.net/w3c/html401...tml#edef-FRAME">
</frameset>
</html>
```

### Estilo predeterminado

### Notas

### Referencia

- El elemento [**frame** en la especificación](http://html.conclase.net/w3c/html401-es/present/frames.html#edef-FRAME) de html 4.01

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-frame): IE 6 - IE 7 - FF 1.5 - OP 9.

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
