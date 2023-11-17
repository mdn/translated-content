---
title: "<menu>: El elemento menú"
slug: Web/HTML/Element/menu
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar}}

El elemento [HTML](/es/docs/Web/HTML) **`<menu>`** se describe en la especificación HTML como una alternativa semántica a {{HTMLElement("ul")}}, pero los navegadores lo tratan (y lo exponen a través del árbol de accesibilidad) como no diferente de {{HTMLElement("ul")}}. Representa una lista desordenada de elementos (que están representados por elementos {{HTMLElement("li")}}).

{{EmbedInteractiveExample("pages/tabbed/menu.html", "tabbed-shorter")}}

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

## Notas de uso

Los elementos `<menu>` y {{HTMLElement("ul")}} representan una lista desordenada de elementos. La diferencia clave es que {{HTMLElement("ul")}} contiene principalmente elementos para mostrar, mientras que `<menu>` estaba destinado a elementos interactivos. El elemento {{HTMLElement("menuitem")}} relacionado ha quedado obsoleto.

> **Nota:** En las primeras versiones de la especificación HTML, el elemento `<menu>` tenía un caso de uso adicional como menú contextual. Esta funcionalidad se considera obsoleta y no está en la especificación.

## Ejemplo

### Barra de herramientas

En este ejemplo, se usa un `<menú>` para crear una barra de herramientas para una aplicación de edición.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Copiar</button></li>
  <li><button onclick="cut()">Cortar</button></li>
  <li><button onclick="paste()">Pegar</button></li>
</menu>
```

Tenga en cuenta que esto no es funcionalmente diferente de:

```html
<ul>
  <li><button onclick="copy()">Copiar</button></li>
  <li><button onclick="cut()">Cortar</button></li>
  <li><button onclick="paste()">Pegar</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### Resultado

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <p>
          <a href="/es/docs/Web/HTML/Content_categories#flow_content"
            >Contenido de flujo</a
          >. Si los hijos del elemento incluyen al menos un
           elemento {{HTMLElement("li")}}:
          <a
            href="/es/docs/Web/HTML/Content_categories#palpable_content"
            >contenido palpable</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <p>
          Cero o más ocurrencias de {{HTMLElement("li")}},
          {{HTMLElement("script")}}, ó
          {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>{{No_Tag_Omission}}</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Content_categories#flow_content"
          >contenido de flujo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Roles/List_role"
            >lista</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Roles/listbox_role"
            >listbox</a
          ></code
        >, <a href="/es/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a> ó <a href="/es/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos HTML relacionados con listas: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, y {{HTMLElement("li")}}.
