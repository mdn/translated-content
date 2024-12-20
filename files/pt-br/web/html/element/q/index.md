---
title: <q>
slug: Web/HTML/Element/q
---

{{HTMLSidebar}}O elemento HTML \<q> indica que o texto dentro da tag é uma pequena citação. Este elemento destina-se a citações curtas que não requerem marcações de parágrafo; para citações maiores use o elemento {{HTMLElement("blockquote")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Categorias de conteúdo</a>
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Fluxo de conteúdo</a
        >,
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >conteúdo textual</a
        >, conteúdo palpável.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >Conteúdo textual</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>Nenhuma, tanto a tag inicial quanto a final são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Parents permitidos</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >conteúdo textual</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Atributos ARIA permitidos</th>
      <td>Qualquer</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> A maioria dos browsers modernos adicionará automaticamente marcas de citação em volta do texto dentro de um elemento `<q>`. Talvez seja necessário criar uma regra de estilo para adicionar marcas de citação em browsers antigos.

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `cite`
  - : O valor deste atributo é uma URL que designa uma fonte ou mensagem para a informação citada. A intenção deste atributo é indicar a informação e explicar o contexto ou referência para a citação.

## Exemplo

### Conteúdo HTML

```html
<p>
  According to Mozilla's website,
  <q cite="https://www.mozilla.org/pt-BR/about/history/details/"
    >Firefox 1.0 was released in 2004 and became a big success.</q
  >
</p>
```

{{ EmbedLiveSample('Example') }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O elemento {{HTMLElement("blockquote")}} para longas citações.
- O elemento {{HTMLElement("cite")}} para citar fontes.
