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
      <td>{{no_tag_omission}}</td>
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

> **Nota:** A maioria dos browsers modernos adicionará automaticamente marcas de citação em volta do texto dentro de um elemento `<q>`. Talvez seja necessário criar uma regra de estilo para adicionar marcas de citação em browsers antigos.

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
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

| Especificação                                                                     | Status                   | Comentário        |
| --------------------------------------------------------------------------------- | ------------------------ | ----------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-q-element', '&lt;q&gt;')}}          | {{Spec2('HTML WHATWG')}} |                   |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-q-element', '&lt;q&gt;')}} | {{Spec2('HTML5 W3C')}}   |                   |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.2', '&lt;q&gt;')}}                 | {{Spec2('HTML4.01')}}    | Definição inicial |

## Compatibilidade com navegadores

{{Compat("html.elements.q")}}

## Veja também

- O elemento {{HTMLElement("blockquote")}} para longas citações.
- O elemento {{HTMLElement("cite")}} para citar fontes.
