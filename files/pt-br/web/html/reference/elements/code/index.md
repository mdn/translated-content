---
title: "<code>: O Elemento Inline Code"
slug: Web/HTML/Reference/Elements/code
original_slug: Web/HTML/Element/code
---

{{HTMLSidebar}}

O **elemento** **HTML `<code>` **apresenta seu conteúdo estilizado de maneira a indicar que o texto é um pequeno fragmento de código. Por padrão, o conteúdo é exibido utilizando a fonte monoespaçada padrão do {{Glossary("user agent", "user agent's")}}.

{{InteractiveExample("HTML Demo: &lt;code&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The <code>push()</code> method adds one or more elements to the end of an
  array and returns the new length of the array.
</p>
```

```css interactive-example
code {
  background-color: #eee;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Nenhuma, tanto a tag inicial quanto a final são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
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

Esse elemento inclui apenas os [global attributes](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplo

Um parágrafo que inlcui `<code>`:

```html
<p>
  A função <code>selectAll()</code> destaca todo o texto no campo de entrada
  então o usuário pode, por exemplo, copiar ou deletar o texto.
</p>
```

A saída gerada por esse trecho HTML se parece com isso:

{{EmbedLiveSample("Example", 640, 70)}}

## Notas

Para representar múltiplas linha de código, envolva o elemento `<code>` dentro do elemento {{HTMLElement("pre")}}. O elemento `<code>` por si só representa somente uma única senteça ou linha de código.

Uma regra CSS pode ser definida para o seletor `code` para sobrescrever a fonte padrão do navegador. Preferências definidas pelo usuário podem ter precedência sore o CSS especifciado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("command")}} (deprecated)
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
