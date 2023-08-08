---
title: meta
slug: Web/HTML/Element/meta
---

### Definición

- **meta** de "metainformation" - metainformación. Sirve para aportar información sobre el documento..

  - : **Sus etiquetas son**: `<meta>` (solo tiene una).

    **Está definido como**: Elemento [de cabecera](/es/HTML/Elemento/Tipos_de_elementos#de_cabecera).

    **Crea una caja**: No.

    **Puede contener**: Nada.

    **Puede ser contenido por**: Elementos [head](/es/HTML/Elemento/head)

#### Atributos

~~Por defecto~~: Debe indicarlo el autor.

name = name [CS] Este atributo identifica un nombre de propiedad. Esta especificación no enumera los valores legales para este atributo. content = cdata [CS] Este atributo especifica el valor de una propiedad. Esta especificación no enumera los valores legales para este atributo. scheme = cdata [CS] Este atributo especifica un esquema que se usará para interpretar el valor de la propiedad (véase la sección sobre perfiles para más detalles). http-equiv = name [CI] Este atributo puede utilizarse en lugar del atributo name. Los servidores HTTP utilizan este atributo para obtener información sobre los encabezados del mensaje de respuesta HTTP.

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
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-name-META"
          >name</a
        >
      </td>
      <td>Nombre al que se asocia la metainformación</td>
      <td>
        Un 'nombre'. Sensible a
        <abbr title="diferencia entre Mayúsculas y minúsculas">M/m.</abbr> Por
        defecto: Lo fija el navegador.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-content"
          >content</a
        >
      </td>
      <td>
        Los datos que se quieren asociar a
        <code style="color: green">name</code>.
      </td>
      <td>
        Texto. Sensible a
        <abbr title="diferencia entre Mayúsculas y minúsculas">M/m.</abbr>.
      </td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-http-equiv"
          >http-equiv</a
        >
      </td>
      <td>
        Aporta información sobre los encabezado de respuesta HTTP, puede usarse
        en lugar de <code style="color: green">name</code>.
      </td>
      <td>Un 'nombre'. Por defecto: Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/global.html#adef-scheme"
          >scheme</a
        >
      </td>
      <td>Indica un esquema de interpretación para los metadatos.</td>
      <td>
        Texto. Sensible a
        <abbr title="diferencia entre Mayúsculas y minúsculas">M/m.</abbr>. Por
        defecto: Lo fija el navegador.
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

#### Con name y content

```
<meta name="copyright" content="© 2006 MDC">
```

#### Con http-equiv

```
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

### Estilo predeterminado

### Notas

### Referencia

- El elemento [**meta** en la especificación](http://html.conclase.net/w3c/html401-es/struct/global.html#edef-META) de html 4.01

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-meta): IE 6 - IE 7 - FF 1.5 - OP 9.

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
