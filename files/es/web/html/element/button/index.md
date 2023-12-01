---
title: button
slug: Web/HTML/Element/button
---

## Definición

**button** = botón.

Es el elemento crea botones marcadores.

- La etiqueta de **HTML `<button>`** representa un elemento cliqueable de tipo botón que puede ser utilizado en formularios o en cualquier parte de la página que necesite un botón estándar y simple de aplicar. De forma predeterminada, los botones HTML se presentan con un estilo similar en todas las plataformas, estos estilos se pueden cambiar utilizando [CSS](/es/docs/Web/CSS).

  - : **Sus etiquetas son**: \<button> y \</button> (ambas obligatorias).

    **Crea una caja**: en linea.

    **Está definido como**: [Elemento de control para formulario](/es/docs/HTML/Elemento/Tipos_de_elementos#de_frase).

    **Puede contener**: Texto y/o cero o más elementos [en Bloque](/es/docs/HTML/Elemento/Tipos_de_elementos#en_linea) o [en linea](/es/docs/HTML/Elemento/Tipos_de_elementos#en_linea), con las siguientes excepciones: (A|%formctrl;|FORM|FIELDSET)

## Atributos

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
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-dir"
          >name</a
        >
      </td>
      <td>
        Asigna un
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/interact/forms.html#control-name"
          >nombre de control</a
        >.
      </td>
      <td>
        Texto
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/types.html#type-cdata"
          >con limitaciones</a
        >
      </td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-dir"
          >value</a
        >
      </td>
      <td>Asigna un valor inicial que será enviado con el formulario.</td>
      <td>Texto</td>
      <td>Lo fija el navegador.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-dir"
          >type</a
        >
      </td>
      <td>Indica el tipo de botón.</td>
      <td>Uno de los siguientes: (button|submit|reset)</td>
      <td><abbr title="Por defecto">PD.</abbr>: submit.</td>
    </tr>
    <tr>
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-dir"
          >disabled</a
        >
      </td>
      <td>Indica que el control está desabilitado.</td>
      <td>disabled.</td>
      <td>Lo fija el navegador. disabled.</td>
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
        <a href="/es/docs/Accesibilidad" title="Accesibilidad">Accesibilidad</a
        >.
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
      <td>
        <a
          class="external"
          href="http://html.conclase.net/w3c/html401-es/struct/dirlang.html#adef-dir"
          >reserved</a
        >
      </td>
      <td>Reservado para un uso futuro que nunca tubo. Inútil</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="4">
        <strong>Eventos</strong>:
        <code style="color: green">onfocus onblur</code>
      </td>
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

## Ejemplos de uso

```html
<button name="button">Click me</button>
```

## Sobre Accesibilidad

### Botones con íconos

Los botones que solamente utilizan un ícono para representar una funcionalidad no tienen un nombre accesible para los lectores de no-videntes. Para arreglar esto debemos proveer un nombre para el botón que describa la funcionalidad de este.

#### Ejemplo

```
<button name="favorito" type="button">
  <svg aria-hidden="true" viewBox="0 0 10 10"><path d="m7.4 8.8-2.4-1.3-2.4 1.3.46-2.7-2-1.9 2.7-.39 1.2-2.5 1.2 2.5 2.7.39-1.9 1.9z"/></svg>
  Agregar a favoritos
</button>
```

Esto también ayudará a los usuarios videntes que no estén familiarizados con el significado del ícono ya que podrán entender su significado pasando el cursor por encima del elemento.

Para más información (en inglés):

- [What is an accessible name? | The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Robust#Guideline_4.1_—_Compatible_Maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Proximidad

Si el sitio tiene una gran cantidad de elementos interactivos muy cercanos entre ellos esto puede generar una dificultad en los usuarios con discapacidades motrices. Es ideal que estos elementos tengan una separación para evitar que el usuario cliquee el incorrecto. Puedes utilizar la propiedad `margin` para separarlos.

Más información (en inglés):

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Referencia

- El elemento [button](/es/docs/HTML/Elemento/button) en el estándar [HTML 4.01](http://html.conclase.net/w3c/html401-es/interact/forms.html#h-17.5)

---

> **Nota:** Estamos ampliando este documento, posiblemente contenga carencias y defectos. ¡Estamos en obras!... disculpen las molestias.
>
> ¿Quieres participar en su elaboración? Para saber cómo hacerlo consulta [MDC:Como ayudar](/es/docs/Project:Como_ayudar).
