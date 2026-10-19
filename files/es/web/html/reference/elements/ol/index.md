---
title: "`<ol>`: el elemento de lista ordenada de HTML"
short-title: <ol>
slug: Web/HTML/Reference/Elements/ol
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

El elemento [HTML](/es/docs/Web/HTML) **`<ol>`** representa una lista ordenada de elementos; por lo general, se muestra como una lista numerada.

{{InteractiveExample("HTML Demo: &lt;ol&gt;", "tabbed-shorter")}}

```html interactive-example
<ol>
  <li>Mezcla la harina, el polvo de hornear, el azúcar y la sal.</li>
  <li>En otro bol, mezcla los huevos, la leche y el aceite.</li>
  <li>Revuelve hasta unir ambas mezclas.</li>
  <li>Llena tres cuartas partes de cada molde para muffins.</li>
  <li>Hornea durante 20 minutos.</li>
</ol>
```

```css interactive-example
li {
  font:
    1rem "Fira Sans",
    sans-serif;
  margin-bottom: 0.5rem;
}
```

## Atributos

Este elemento también acepta los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}} {{non-standard_inline}}
  - : Este atributo booleano indica que la lista debería mostrarse con un estilo compacto. La interpretación de este atributo depende del navegador. Usa [CSS](/es/docs/Web/CSS) en su lugar: para lograr un efecto similar al del atributo `compact`, puedes usar la propiedad CSS {{cssxref("line-height")}} con un valor de `80%`.
- `reversed`
  - : Este atributo booleano especifica que los elementos de la lista están en orden inverso. Los elementos se numeran de mayor a menor.
- `start`
  - : Un número entero que indica el valor inicial para la numeración de la lista. Siempre es un número arábigo (1, 2, 3, etc.), incluso cuando el `type` de numeración use letras o números romanos. Por ejemplo, para empezar a numerar los elementos desde la letra "d" o el número romano "iv", usa `start="4"`.
- `type`
  - : Establece el tipo de numeración:
    - `a` para letras minúsculas
    - `A` para letras mayúsculas
    - `i` para números romanos en minúscula
    - `I` para números romanos en mayúscula
    - `1` para números (valor predeterminado)

    El tipo especificado se aplica a toda la lista, salvo que se use otro atributo [`type`](/es/docs/Web/HTML/Reference/Elements/li#type) en un elemento {{HTMLElement("li")}} contenido en ella.

    > [!NOTE]
    > A menos que el tipo de numeración de la lista sea relevante (como en los documentos legales o técnicos, donde se hace referencia a los elementos por su número o letra), usa en su lugar la propiedad CSS {{CSSxRef("list-style-type")}}.

## Notas de uso

Por lo general, los elementos de una lista ordenada se muestran precedidos de un [marcador](/es/docs/Web/CSS/Reference/Selectors/::marker), como un número o una letra.

Los elementos `<ol>` y {{HTMLElement("ul")}} (o su sinónimo {{HTMLElement("menu")}}) se pueden anidar a cualquier nivel de profundidad, alternando entre `<ol>`, `<ul>` (o `<menu>`) según haga falta.

Tanto `<ol>` como {{HTMLElement("ul")}} representan una lista de elementos. La diferencia es que en `<ol>` el orden es relevante. Por ejemplo:

- Pasos de una receta
- Indicaciones de una ruta paso a paso
- La lista de ingredientes en orden decreciente de proporción en las etiquetas de información nutricional

Para decidir qué lista usar, prueba a cambiar el orden de los elementos: si el significado cambia, usa `<ol>`; si no, puedes usar {{HTMLElement("ul")}}, o {{HTMLElement("menu")}} si tu lista es un menú.

## Ejemplos

### Ejemplo básico

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Ejemplo_básico", 400, 100)}}

### Uso de números romanos

```html
<ol type="i">
  <li>Introducción</li>
  <li>Lista de agravios</li>
  <li>Conclusión</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Uso_de_números_romanos", 400, 100)}}

### Uso del atributo start

```html
<p>Puestos de los participantes que no llegaron al podio:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Uso_del_atributo_start", 400, 100)}}

### Listas anidadas

```html
<ol>
  <li>primer elemento</li>
  <li>
    segundo elemento
    <!-- ¡la etiqueta de cierre </li> no está aquí! -->
    <ol>
      <li>primer subelemento del segundo elemento</li>
      <li>segundo subelemento del segundo elemento</li>
      <li>tercer subelemento del segundo elemento</li>
    </ol>
  </li>
  <!-- Aquí está la etiqueta de cierre </li> -->
  <li>tercer elemento</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Listas_anidadas", 400, 150)}}

### Lista no ordenada dentro de una lista ordenada

```html
<ol>
  <li>primer elemento</li>
  <li>
    segundo elemento
    <!-- ¡la etiqueta de cierre </li> no está aquí! -->
    <ul>
      <li>primer subelemento del segundo elemento</li>
      <li>segundo subelemento del segundo elemento</li>
      <li>tercer subelemento del segundo elemento</li>
    </ul>
  </li>
  <!-- Aquí está la etiqueta de cierre </li> -->
  <li>tercer elemento</li>
</ol>
```

#### Resultado

{{EmbedLiveSample("Lista_no_ordenada_dentro_de_una_lista_ordenada", 400, 150)}}

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
        > y, si los hijos del elemento <code>&#x3C;ol></code> incluyen al menos
        un elemento {{HTMLElement("li")}},
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_palpable"
          >contenido palpable</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        Cero o más elementos {{ HTMLElement("li") }},
        {{HTMLElement("script")}} y
        {{HTMLElement("template")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>Ninguna; tanto la etiqueta de apertura como la de cierre son obligatorias.</td>
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
      <td>
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{DOMxRef("HTMLOListElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos HTML relacionados con listas: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- Propiedades CSS que pueden resultar especialmente útiles para dar estilo al elemento `<ol>`:
  - la propiedad {{CSSxRef("list-style")}}, para elegir cómo se muestra la numeración
  - [contadores CSS](/es/docs/Web/CSS/Guides/Counter_styles/Using_counters), para gestionar listas anidadas complejas
  - la propiedad {{CSSxRef("line-height")}}, para simular el atributo obsoleto `compact`
  - la propiedad {{CSSxRef("margin")}}, para controlar la sangría de la lista
