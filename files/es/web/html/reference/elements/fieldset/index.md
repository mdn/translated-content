---
title: "<fieldset>: El elemento de agrupación de campos"
slug: Web/HTML/Reference/Elements/fieldset
page-type: html-element
browser-compat: html.elements.fieldset
sidebar: htmlsidebar
---

El elemento **`<fieldset>`** de [HTML](/es/docs/Web/HTML) se utiliza para agrupar varios controles así como etiquetas ({{HTMLElement("label")}}) dentro de un formulario web.

{{InteractiveExample("HTML Demo: &lt;fieldset&gt;", "tabbed-standard")}}

```html interactive-example
<form>
  <fieldset>
    <legend>Elige tu monstruo favorito</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

```css interactive-example
legend {
  background-color: black;
  color: white;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

Como muestra el ejemplo anterior, el elemento `<fieldset>` proporciona una agrupación para una parte de un formulario HTML, con un elemento {{htmlelement("legend")}} anidado que proporciona un título para el `<fieldset>`. Tiene pocos atributos, siendo los más notables `form`, que puede contener el `id` de un {{htmlelement("form")}} en la misma página, lo que permite hacer que el `<fieldset>` sea parte de ese `<form>` aunque no esté anidado dentro de él, y `disabled`, que permite deshabilitar el `<fieldset>` y todo su contenido de una sola vez.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/es/docs/Web/HTML/Reference/Attributes/disabled)
  - : Si este atributo booleano está establecido, todos los controles de formulario que son descendientes del `<fieldset>` están deshabilitados, lo que significa que no son editables y no se enviarán junto con el {{htmlelement("form")}}. No recibirán ningún evento de navegación, como clics del ratón o eventos relacionados con el foco. Por defecto, los navegadores muestran estos controles en gris. Ten en cuenta que los elementos de formulario dentro del elemento {{HTMLElement("legend")}} no se deshabilitarán.
- [`form`](/es/docs/Web/HTML/Reference/Attributes/form)
  - : Este atributo toma el valor del atributo [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) de un elemento {{HTMLElement("form")}} del que deseas que el `<fieldset>` forme parte, incluso si no está dentro del formulario. Ten en cuenta que el uso de esto puede ser confuso: si deseas que los elementos {{HTMLElement("input")}} dentro del `<fieldset>` estén asociados con el formulario, necesitas usar el atributo `form` directamente en esos elementos. Puedes verificar qué elementos están asociados con un formulario mediante JavaScript, usando {{domxref("HTMLFormElement.elements")}}.
- `name`
  - : El nombre asociado al grupo.

    > [!NOTE]
    > El título del fieldset lo proporciona el primer elemento {{HTMLElement("legend")}} anidado dentro de él.

## Estilización con CSS

Hay varias consideraciones especiales de estilización para `<fieldset>`.

Su valor de {{cssxref("display")}} es `block` por defecto, y establece un [contexto de formato de bloque](/es/docs/Web/CSS/Guides/Display/Block_formatting_context). Si el `<fieldset>` se estiliza con un valor de `display` a nivel de línea, se comportará como `inline-block`; de lo contrario, se comportará como `block`. Por defecto hay un borde `groove` de `2px` rodeando el contenido, y una pequeña cantidad de padding predeterminado. El elemento tiene {{cssxref("min-inline-size", "min-inline-size: min-content")}} por defecto.

Si hay un elemento {{htmlelement("legend")}} presente, se coloca sobre el borde `block-start`. El `<legend>` se ajusta a su contenido y también establece un contexto de formato. El valor de `display` se convierte a bloque. (Por ejemplo, `display: inline` se comporta como `block`.)

Habrá una caja anónima que contiene el contenido del `<fieldset>`, que hereda ciertas propiedades del `<fieldset>`. Si el `<fieldset>` se estiliza con `display: grid` o `display: inline-grid`, entonces la caja anónima será un contexto de formato de cuadrícula. Si el `<fieldset>` se estiliza con `display: flex` o `display: inline-flex`, entonces la caja anónima será un contexto de formato flexible. De lo contrario, establece un contexto de formato de bloque.

Puedes estilizar el `<fieldset>` y el `<legend>` de cualquier manera que desees para adaptarse al diseño de tu página.

## Ejemplos

### Fieldset básico

Este ejemplo incluye un `<fieldset>` con un `<legend>`, con un único control dentro de él.

```html
<form action="#">
  <fieldset>
    <legend>¿Estás de acuerdo?</legend>
    <input type="checkbox" id="chbx" name="agree" value="Yes!" />
    <label for="chbx">Estoy de acuerdo</label>
  </fieldset>
</form>
```

#### Resultado

{{ EmbedLiveSample('Fieldset básico', '100%', '80') }}

### Fieldset deshabilitado

Este ejemplo muestra un `<fieldset>` deshabilitado con dos controles dentro de él. Observa cómo ambos controles están deshabilitados por estar dentro de un `<fieldset>` deshabilitado.

```html
<form action="#">
  <fieldset disabled>
    <legend>Fieldset de inicio de sesión deshabilitado</legend>
    <div>
      <label for="name">Nombre: </label>
      <input type="text" id="name" value="Chris" />
    </div>
    <div>
      <label for="pwd">Arquetipo: </label>
      <input type="password" id="pwd" value="Wookie" />
    </div>
  </fieldset>
</form>
```

#### Resultado

{{ EmbedLiveSample('Fieldset deshabilitado', '100%', '110') }}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Contenido de flujo</a
        >,
        raíz de sección,
        <a href="/es/docs/Web/HTML/Guides/Content_categories#listed"
          >listado</a
        >,
        elemento
        <a
          href="/es/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >asociado a formularios</a
        >, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        Un elemento {{HTMLElement("legend")}} opcional, seguido de contenido
        de flujo.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>Ninguna, tanto la etiqueta de apertura como la de cierre son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
          >contenido de flujo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El elemento {{HTMLElement("legend")}}
- El elemento {{HTMLElement("input")}}
- El elemento {{HTMLElement("label")}}
- El elemento {{HTMLElement("form")}}
