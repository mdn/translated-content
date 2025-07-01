---
title: dt
slug: Web/HTML/Reference/Elements/dt
original_slug: Web/HTML/Element/dt
---

{{HTMLSidebar}}

El **elemento HTML `<dt>`** especifica un término en una descripción o lista de definiciones, y como tal debe utilizarse dentro de un elemento {{HTMLElement("dl")}} Es usualmente seguido por un elemento {{HTMLElement("dd")}}; sin embargo, múltiples elementos `<dt>` en un renglón indican diferentes términos los cuales todos son definidos por el siguiente elemento {{HTMLElement("dd")}}.

El subsecuente elemento {{HTMLElement("dd")}} (**Detalles de la descripción**) provee la definición u otro texto relacionado asociado con el término especificado utilizando `<dt>`.

{{InteractiveExample("HTML Demo: &lt;dt&gt;", "tabbed-standard")}}

```html interactive-example
<p>Please use the following paint colors for the new house:</p>

<dl>
  <dt>Denim (semigloss finish)</dt>
  <dd>Ceiling</dd>

  <dt>Denim (eggshell finish)</dt>
  <dt>Evening Sky (eggshell finish)</dt>
  <dd>Layered on the walls</dd>
</dl>
```

```css interactive-example
p,
dl {
  font:
    1rem "Fira Sans",
    sans-serif;
}

dl > dt {
  font-weight: normal;
  font-style: oblique;
}

dd {
  margin-bottom: 1rem;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/categorias_de_contenido"
          >Categorías de contenido</a
        >
      </th>
      <td>Ninguno.</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >Contenido de flujo</a
        >, pero sin {{HTMLElement("header")}},
        {{HTMLElement("footer")}}, contenido seccionado o encabezados
        descendientes de contenido.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de Tag</th>
      <td>
        Debe tener un tag inicial. El tag final puede ser omitido si este
        elemento es seguido inmediatamente después por otro elemento
        <code>&#x3C;dd></code>, o si no hay más contenido en el elemento padre.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Antes de un elemento {{HTMLElement("dt")}} o elemento
        {{HTMLElement("dd")}}, dentro de un {{HTMLElement("dl")}}
        o (en <a href="/es/docs/Glossary/WHATWG">WHATWG</a> HTML) un
        {{HTMLElement("div")}} que esta dentro de un
        {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        <a href="/es/docs/DOM/span"><code>HTMLSpanElement</code></a> interface
        for this element.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

## Ejemplo

Para ver un ejemplo, vea el [proveído por el elemento `<dl>`](/es/docs/Web/HTML/Reference/Elements/dl#examples).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}
