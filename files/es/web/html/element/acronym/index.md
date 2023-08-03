---
title: acronym
slug: Web/HTML/Element/acronym
---

### Definición

**acromym** de acromyn=acrónimo

- Es el encargado para marcar estas formas abreviadas (modem, AJAX...). Además, gracias al atributo `title` podemos indicar la versión extendida del término.

  - : **Sus etiquetas son**: \<abbr> y \</abbr> (ambas obligatorias).

    **Crea una caja**: [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea).

    **Está definido como**: [Elemento de frase](/es/HTML/Elemento/Tipos_de_elementos#de_frase).

    **Puede contener**: cero o más elementos [en linea](/es/HTML/Elemento/Tipos_de_elementos#en_linea)

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

```

 <p>
 El acrónimo de moda es:
 <acronym lang="en" title="Asynchronous JavaScript and XML">Ajax</acronym>.
 </p>

```

### Estilo predeterminado

En Firefox se resalta con un "subrayado" punteado fino. vea el ejemplo:

```

 <p>
 el <abbr lang="en" title="Mocilla developer center">MDC</abbr> toma el
 <span style='border-bottom: dotted thin;'
 title='esto no es ni una abreviatura ni un acrónimo'>relevo</span> de lo que fue el
 <acronym lang="en" title="DEVeloper.Mozilla.Org">Devmo</acronym>.
 </p>

```

Cabe destacar que [abbr](/es/HTML/Elemento/abbr) y [acronym](/es/HTML/Elemento/acronym) comparten estilo predeterminado.

### Soporte

Puede consultar esta [comparativa](http://www.webdevout.net/browser_support_html.php#support-html401-acronym): IE6 vs IE7 vs FF1.5 vs OP9.

### Notas

El tema de las abreviaturas y acrónimos puede ser un tanto lioso. En castellano a veces cuesta saber si tal 'palabra' es una [abreviatura](http://es.wikipedia.org/wiki/Abreviatura), un [acrónimo](http://es.wikipedia.org/wiki/Acr%C3%B3nimo) una sigla o un símbolo. Para complicarlo un poco más, resulta que el estándar html está en inglés y parece ser que las gramáticas castellana e inglesa no definen exactamente igual conceptos como [abreviatura](/es/HTML/Elemento/abbr) o [acrónimo](/es/HTML/Elemento/acronym).

### Referencia

- El elemento **acronym** en el estándar [HTML 4.01](http://html.conclase.net/w3c/html401-es/struct/text.html#edef-ACRONYM)

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga defectos y carencias. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber como hacerlo consulta MDC:Como ayudar.

Categoría

interwiki links

automatismos
