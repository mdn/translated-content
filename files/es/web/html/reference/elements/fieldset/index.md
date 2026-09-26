---
title: "`<fieldset>`: elemento HTML de grupo de campos"
short-title: <fieldset>
slug: Web/HTML/Reference/Elements/fieldset
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

El elemento [HTML](/es/docs/Web/HTML) **`<fieldset>`** se usa para agrupar varios controles, así como sus etiquetas ({{HTMLElement("label")}}), dentro de un formulario web.

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

Como muestra el ejemplo anterior, el elemento `<fieldset>` agrupa una parte de un formulario HTML, y un elemento {{htmlelement("legend")}} anidado le da un título al `<fieldset>`. Admite pocos atributos. Los más destacados son `form`, que puede contener el `id` de un {{htmlelement("form")}} de la misma página y permite que el `<fieldset>` forme parte de ese `<form>` aunque no esté anidado dentro de él, y `disabled`, que permite deshabilitar de una vez el `<fieldset>` y todo su contenido.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- [`disabled`](/es/docs/Web/HTML/Reference/Attributes/disabled)
  - : Si se establece este atributo booleano, todos los controles de formulario descendientes del `<fieldset>` quedan deshabilitados: no se pueden editar y no se envían junto con el {{htmlelement("form")}}. Tampoco reciben eventos de navegación, como los clics del ratón o los eventos relacionados con el foco. De forma predeterminada, los navegadores muestran estos controles en gris. Ten en cuenta que los elementos de formulario que están dentro del elemento {{HTMLElement("legend")}} no se deshabilitan.
- [`form`](/es/docs/Web/HTML/Reference/Attributes/form)
  - : Este atributo toma el valor del atributo [`id`](/es/docs/Web/HTML/Reference/Global_attributes/id) de un elemento {{HTMLElement("form")}} del que quieres que forme parte el `<fieldset>`, aunque no esté dentro del formulario. Ten en cuenta que su uso resulta confuso: si quieres que los elementos {{HTMLElement("input")}} que están dentro del `<fieldset>` se asocien con el formulario, tienes que usar el atributo `form` directamente en esos elementos. Puedes comprobar qué elementos están asociados con un formulario desde JavaScript, con {{domxref("HTMLFormElement.elements")}}.
- `name`
  - : El nombre asociado con el grupo.

    > [!NOTE]
    > El título del fieldset lo da el primer elemento {{HTMLElement("legend")}} anidado dentro de él.

## Estilos con CSS

Hay varias consideraciones especiales al aplicar estilos a `<fieldset>`.

Su valor de {{cssxref("display")}} es `block` de forma predeterminada, y establece un [contexto de formato de bloque](/es/docs/Web/CSS/Guides/Display/Block_formatting_context). Si al `<fieldset>` se le aplica un valor de `display` de nivel de línea, se comporta como `inline-block`; en cualquier otro caso, se comporta como `block`. De forma predeterminada, rodea el contenido un borde `groove` de `2px` y tiene un pequeño relleno predeterminado. El elemento tiene {{cssxref("min-inline-size", "min-inline-size: min-content")}} de forma predeterminada.

Si hay un elemento {{htmlelement("legend")}}, se coloca sobre el borde `block-start`. El `<legend>` se ajusta a su contenido y también establece un contexto de formato. Su valor de `display` se convierte en bloque. (Por ejemplo, `display: inline` se comporta como `block`).

Habrá una caja anónima que contiene el contenido del `<fieldset>` y que hereda algunas propiedades del `<fieldset>`. Si al `<fieldset>` se le aplica `display: grid` o `display: inline-grid`, la caja anónima será un contexto de formato de cuadrícula. Si al `<fieldset>` se le aplica `display: flex` o `display: inline-flex`, la caja anónima será un contexto de formato flexible. En cualquier otro caso, establece un contexto de formato de bloque.

Puedes aplicar a `<fieldset>` y `<legend>` los estilos que quieras para adaptarlos al diseño de tu página.

## Ejemplos

### Fieldset básico

Este ejemplo incluye un `<fieldset>` con un `<legend>` y un único control dentro.

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

{{ EmbedLiveSample('Fieldset_básico', '100%', '80') }}

### Fieldset deshabilitado

Este ejemplo muestra un `<fieldset>` deshabilitado con dos controles dentro. Observa que los dos controles quedan deshabilitados por estar dentro de un `<fieldset>` deshabilitado.

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

{{ EmbedLiveSample('Fieldset_deshabilitado', '100%', '110') }}

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
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >Contenido de flujo</a
        >,
        raíz de seccionamiento, elemento
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_asociado_a_formularios"
          >listado</a
        >,
        <a
          href="/es/docs/Web/HTML/Guides/Content_categories#contenido_asociado_a_formularios"
          >asociado a formularios</a
        >,
        contenido palpable.
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
      <th scope="row">Omisión de etiqueta</th>
      <td>Ninguna, tanto la etiqueta inicial como la final son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
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
