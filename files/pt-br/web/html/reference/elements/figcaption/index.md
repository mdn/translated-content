---
title: "<figcaption>: O elemento de legenda da figura"
slug: Web/HTML/Reference/Elements/figcaption
original_slug: Web/HTML/Element/figcaption
---

{{HTMLSidebar}}

O **Elemento HTML Figcaption** (`<figcaption>`) representa uma legenda ou uma legenda associada com uma figura ou ilustração descrita pelo resto dos dados do elemento {{ HTMLElement("figure") }} que seu elemento pai.

{{InteractiveExample("HTML Demo: &lt;figcaption&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Categorias de conteúdo</a>
      </th>
      <td>Nenhuma.</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de Tag</th>
      <td>Nenhuma, tanto a tag de início quanto a de fim são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Elemento Pai Permitido</th>
      <td>Um Elemento {{HTMLElement("figure")}}</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento possui somente os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplos

Por favor, consulte a página {{HTMLElement("figure")}} para visualizar o exemplos do elemento `<figcaption>`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O elemento {{HTMLElement("figure")}}.
