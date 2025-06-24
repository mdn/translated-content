---
title: dd
slug: Web/HTML/Reference/Elements/dd
original_slug: Web/HTML/Element/dd
---

{{HTMLSidebar}}

El **elemento HTML `<dd>`** provee detalles acerca de o la definición de un término precedente ({{HTMLElement("dt")}}) en una lista de descripciones ({{HTMLElement("dl")}}).

{{InteractiveExample("HTML Demo: &lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
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
      <td>Ninguna</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a
          href="/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_dinámico"
          >Contenido de flujo</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de Tag</th>
      <td>
        El tag inicial es requerido. El tag final puede ser omitido si el
        elemento {{HTMLElement("dd")}} se encuentra inmediatamente
        seguido por otro elemento <code>&#x3C;dd></code>, o si no hay más
        contenido en el elemento padre.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        {{HTMLElement("dl")}} o (en
        <a href="/es/docs/Glossary/WHATWG">WHATWG</a> HTML) un
        {{HTMLElement("div")}} que se encuentra dentro de un
        {{HTMLElement("dl")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Hermano previo</th>
      <td>
        {{HTMLElement("dt")}} u otro elemento
        {{HTMLElement("dd")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Los atributos de este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `nowrap` {{Non-standard_inline}}
  - : Si el valor de este atributo es definido como `yes`, el texto de la definición no se encapsulará. El valor por defecto es `no`.

## Ejemplo

Para un ejemplo, ver [ejemplos \<dl>](/es/docs/Web/HTML/Reference/Elements/dl#examples).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
