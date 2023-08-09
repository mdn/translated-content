---
title: <cite>
slug: Web/HTML/Element/cite
---

O **elemento** **HTML \<cite>** representa uma referência a um trabalho artístico. Deve incluir o título do trabalho ou uma URL de referência, que pode ser em uma forma abreviada de acordo com as convenções usadas para a adição dos metadados de citação.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >,
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        {{domxref("HTMLSpanElement")}} interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui apenas [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Notas

- Um trabalho criativo deve conter a citação de um livro,um documento,um ensaio,um poema,um filme,um programa de televisão,um video game,uma escultura,uma pintura,uma produção cinematográfica,um jogo,uma opera,um musical,uma exibição,um relatório de um caso legal,um programa de computador,um website,uma página da web,um post de um blog ou comentário,um post em um forum ou um comentário no mesmo,um tweet,uma obra ou discurso,etc.
- O W3C específica alguns estados para referenciar um trabalho criativo que deve incluir o nome do autor,enquanto a WHATWG declarou que não deve ser incluso o nome do autor sob nenhuma circustância.
- Use o atributo [`cite`](/pt-BR/docs/Web/HTML/Element/blockquote#cite) em um elemento {{HTMLElement("blockquote")}} ou {{HTMLElement("q")}} para referenciar uma fonte online.
- Para evitar que o itálico padrão do estilo seja usado pelo elemento \<cite> use a propiedade {{cssxref("font-style")}} do CSS.

## Exemplo

```html
Mais informações podem ser encontradas em <cite>[ISO-0000]</cite>.
```

A saída do HTML acima:

Mais informações podem ser encontradas em \[ISO-0000].

## Especificação

| Especificação                                                                           | Estado                   | Comentário |
| --------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-cite-element', '&lt;cite&gt;')}}          | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-cite-element', '&lt;cite&gt;')}} | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.1', '&lt;cite&gt;')}}                    | {{Spec2('HTML4.01')}}    |            |

## Navegadores compatíveis

{{Compat("html.elements.cite")}}

## Veja também

- O elemento {{HTMLElement("blockquote")}} é para citações longas.
- O elemento {{HTMLElement("q")}} é para citações curtas ou na mesma linha.

{{HTMLSidebar}}
