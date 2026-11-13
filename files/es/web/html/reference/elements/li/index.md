---
title: "`<li>`: elemento HTML de ítem de lista"
short-title: <li>
slug: Web/HTML/Reference/Elements/li
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

El elemento [HTML](/es/docs/Web/HTML) **`<li>`** se usa para representar un ítem dentro de una lista. Debe estar contenido en un elemento padre: una lista ordenada ({{HTMLElement("ol")}}), una lista desordenada ({{HTMLElement("ul")}}) o un menú ({{HTMLElement("menu")}}). En los menús y en las listas desordenadas, los ítems de lista suelen mostrarse con viñetas. En las listas ordenadas, suelen mostrarse con un contador ascendente a la izquierda, como un número o una letra.

{{InteractiveExample("HTML Demo: &lt;li&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Astronautas del programa Apolo:</p>

<ul>
  <li>Neil Armstrong</li>
  <li>Alan Bean</li>
  <li>Peter Conrad</li>
  <li>Edgar Mitchell</li>
  <li>Alan Shepard</li>
</ul>
```

```css interactive-example
p,
li {
  font:
    1rem "Fira Sans",
    sans-serif;
}

p {
  font-weight: bold;
}
```

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : Este atributo entero indica el número de orden que le corresponde al ítem de lista dentro de la numeración definida por el elemento {{HTMLElement("ol")}}. El único valor permitido para este atributo es un número, incluso si la lista se muestra con números romanos o letras. Los ítems de lista siguientes continúan la numeración a partir del valor establecido. Este atributo no tiene efecto en listas no ordenadas ({{HTMLElement("ul")}}) ni en menús ({{HTMLElement("menu")}}).
- `type` {{Deprecated_inline}}
  - : Este atributo de tipo carácter indica el tipo de numeración:
    - `a`: letras minúsculas
    - `A`: letras mayúsculas
    - `i`: números romanos en minúscula
    - `I`: números romanos en mayúscula
    - `1`: números

    Este tipo prevalece sobre el que use su elemento {{HTMLElement("ol")}} padre, si lo hay.

    > [!NOTE]
    > Este atributo ha quedado obsoleto; en su lugar, usa la propiedad CSS {{cssxref("list-style-type")}}.

## Ejemplos

Para ver ejemplos más detallados, consulta las páginas de {{htmlelement("ol")}} y {{htmlelement("ul")}}.

### Lista ordenada

```html
<ol>
  <li>primer ítem</li>
  <li>segundo ítem</li>
  <li>tercer ítem</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Lista_ordenada")}}

### Lista ordenada con un valor personalizado

```html
<ol type="I">
  <li value="3">tercer ítem</li>
  <li>cuarto ítem</li>
  <li>quinto ítem</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Lista_ordenada_con_un_valor_personalizado")}}

### Lista desordenada

```html
<ul>
  <li>primer ítem</li>
  <li>segundo ítem</li>
  <li>tercer ítem</li>
</ul>
```

#### Resultado

{{EmbedLiveSample("Lista_desordenada")}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>Ninguna.</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >Contenido de flujo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>
        La etiqueta de cierre puede omitirse si el ítem de lista va seguido
        inmediatamente de otro elemento <code>&lt;li&gt;</code>, o si no hay más
        contenido en su elemento padre.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Un elemento {{HTMLElement("ul")}}, {{HTMLElement("ol")}} o
        {{HTMLElement("menu")}}. Aunque no es un uso conforme, el elemento
        obsoleto {{HTMLElement("dir")}} también puede ser su padre.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role"
            >listitem</a
          ></code
        >
        cuando es hijo de un
        <code><a href="/es/docs/Web/HTML/Reference/Elements/ol">ol</a></code
        >, <code><a href="/es/docs/Web/HTML/Reference/Elements/ul">ul</a></code> o
        <code><a href="/es/docs/Web/HTML/Reference/Elements/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos HTML relacionados con las listas: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} y el obsoleto {{HTMLElement("dir")}};
- propiedades CSS que pueden resultar especialmente útiles para dar estilo al elemento `<li>`:
  - la propiedad {{cssxref("list-style")}}, para elegir cómo se muestra el marcador de cada ítem,
  - [contadores CSS](/es/docs/Web/CSS/Guides/Counter_styles/Using_counters), para manejar listas anidadas complejas,
  - la propiedad {{cssxref("margin")}}, para controlar la sangría del ítem de lista.
