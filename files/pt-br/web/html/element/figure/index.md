---
title: '<figure>: O elemento de Figura com legenda opcional'
slug: Web/HTML/Element/figure
translation_of: Web/HTML/Element/figure
original_slug: Web/HTML/Element/figura
tags:
  - Element
  - HTML
  - HTML grouping content
  - Information
  - Presentation
  - Reference
  - figure
browser-compat: html.elements.figure
---

{{HTMLRef}}

O elemento [HTML](/pt-BR/docs/Web/HTML) **`<figure>`** representa o conteúdo independente, frequentemente com uma legenda, definida pelo elemento {{HTMLElement("figcaption")}}. A figura, sua legenda, e seu conteúdo são normalmente referidos como uma única unidade.

{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Conteúdo de fluxo</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Element/Heading_Elements#sectioning_roots"
          >raiz de seção</a
        >, conteúdo palpável.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        Um elemento {{HTMLElement("figcaption")}}, seguido de
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#flow_content"
          >conteúdo de fluxo</a
        >; ou conteúdo de fluxo seguido de um elemento
        {{HTMLElement("figcaption")}}; ou conteúdo de fluxo.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de Tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elemento Pai permitido</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Conteúdo de fluxo.</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Função ARIA implícita</th>
      <td>
        <a href="/pt-BR/docs/Web/Accessibility/ARIA/Roles/Figure_Role"
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Funções ARIA permitidas</th>
      <td>
        Sem nenhum
        <a href="/pt-BR/docs/Web/HTML/Element/figcaption">figcaption </a
        >definido:
        <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">any</a>,
        caso contrário nenhuma função permitida
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento só inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Uso

- Normalmente uma `<figure>` é uma imagem, uma ilustração, um diagrama, um trecho de código ou um esquema que é referenciado no texto principal, mas que pode ser movido para outra parte do documento ou para um apêndice, sem afetar o fluxo principal.
- Sendo uma [raiz de seção](/pt-BR/docs/Web/HTML/Element/Heading_Elements#sectioning_roots), o esquema do conteúdo do elemento `<figure>` é excluído do esquema principal do documento.
- Uma legenda pode ser associada ao elemento `<figure>` ao inserir um {{HTMLElement("figcaption")}} dentro (como primeiro ou último filho). O primeiro elemento `<figcaption>` encontrado na figura é apresentado como a legenda da figura.

## Exemplos

### Imagens

```html
<!-- Apenas uma imagem -->
<figure>
  <img
  src="favicon-192x192.png"
  alt="O belo logo MDN.">
</figure>

<!-- Imagem com uma legenda -->
<figure>
  <img
  src="favicon-192x192.png"
  alt="O belo logo MDN.">
  <figcaption>Logo MDN</figcaption>
</figure>
```

{{EmbedLiveSample("Images", "100%", 375)}}

### Trechos de código

```html
<figure>
  <figcaption>Obtenha os detalhes do browser usando <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName + "; ";
  txt+= "Browser Name: " + navigator.appName + "; ";
  txt+= "Browser Version: " + navigator.appVersion  + "; ";
  txt+= "Cookies Enabled: " + navigator.cookieEnabled  + "; ";
  txt+= "Platform: " + navigator.platform  + "; ";
  txt+= "User-agent header: " + navigator.userAgent  + "; ";
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### Citações

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>Se o debugging é o processo de remoção de bugs de software,
    então programação deve ser o processo de colocá-los.
  </blockquote>
</figure>
```

{{EmbedLiveSample("Quotations")}}

### Poemas

```html
<figure>
  <p style="white-space:pre">
Bid me discourse, I will enchant thine ear,
  Or like a fairy trip upon the green,
Or, like a nymph, with long dishevell'd hair,
  Dance on the sands, and yet no footing seen:
Love is a spirit all compact of fire,
  Not gross to sink, but light, and will aspire.</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>
```

{{EmbedLiveSample("Poems", "100%", 250)}}

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- O elemento {{HTMLElement("figcaption")}}.
