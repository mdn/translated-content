---
title: frameset
slug: Web/HTML/Element/frameset
---

### Definición

- **frameset** -_conjunto de marcos_ . Define la organización de los marcos dentro de la ventana del usuario.

  - : **Sus etiquetas son**: `<frameset>` y `</frameset>` (ambas obligatorias).

    - **Está definido como**: Elemento [para marcos](/es/HTML/Elemento/Tipos_de_elementos#paramarcos).

      - : Con un doctype para marcos está definido como contenido de html.

    **Crea una caja**: .

    **Puede y debe contener**: Uno o más elementos [frameset](/es/HTML/Elemento/frameset) y [frame](/es/HTML/Elemento/frame). además puede contener un elemento [noframes](/es/HTML/Elemento/noframes).

    **Debe ser contenido por**: Elementos [html](/es/HTML/Elemento/html)

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
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-rows-FRAMESET"
          >rows</a
        >
      </td>
      <td>Asigna la disposición horizontal de los marcos.</td>
      <td>
        Lista de
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.6"
          >longitudes</a
        >
        separadas por coma, pueden espresarse en píxeles, porcentajes o de forma
        relativa. Por defecto: 100% (una fila), lo fija el navegador..
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/present/frames.html#adef-cols-FRAMESET"
          >cols</a
        >
      </td>
      <td>Asigna la disposición horizontal de los marcos.</td>
      <td>
        Lista de
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#h-6.6"
          >longitudes</a
        >
        separadas por coma, pueden espresarse en píxeles, porcentajes o de forma
        relativa. Por defecto: 100% (una columna). lo fija el navegador.
      </td>
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
   <frame src="http://html.conclase.net/w3c/html401....html#frameset">
 </frameset>
 <frame src="http://html.conclase.net/w3c/html401...#edef-FRAMESET">
 <noframes>
   <p> este documento contiene los siguientes recursos: </p>
   <ul>
     <li> <img src="http://developer.mozilla.org/wiki-im...irefoxlogo.png" alt="el logo de Firefox">
     </li>
     <li> La definición de frameset en el
          <a href="http://html.conclase.net/w3c/html401....html#frameset">
          dtd de html 4.01 trans.</a>
     </li>
     <li> La definición de frameset en la
          <a href="http://html.conclase.net/w3c/html401...#edef-FRAMESET">
          especificación de html 4.01</a>
     </li>
   </ul>
 </noframes>
</frameset>
</html>
```

### Estilo predeterminado

### Notas

### Referencia

- El elemento [**frameset** en la especificación](http://html.conclase.net/w3c/html401-es/present/frames.html#edef-FRAMESET) de html 4.01

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-frameset): IE 6 - IE 7 - FF 1.5 - OP 9.

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
