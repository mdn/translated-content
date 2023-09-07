---
title: <br>
slug: Web/HTML/Element/br
---

## Sumário

O elemento HTML _quebra-de-linha_ \<br> produz uma quebra de linha em um texto (carriage-return).É útil para escrever poemas ou um endereço, onde a divisão de linha é significante.

Não use \<br> para aumentar o espaço entre as linhas de texto; para isso use a propiedade [CSS](/pt-BR/docs/CSS) {{cssxref('margin')}} ou o elemento {{HTMLElement("p")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/pt-BR/docs/HTML/Content_categories"
          >Categorias de Conteúdo</a
        >
      </th>
      <td>
        <a
          href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Conteúdo de Fluxo</a
        >,
        <a
          href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >conteúdo fraseado</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>Nenhum, é um {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>
        Deve ter uma tag de abertura, e não deve ter uma tag de fechamento. Em
        documentos XHTML , escreve esse elemento como <code>&#x3C;br /></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Elementos pai permitidos</th>
      <td>
        Qualquer elemento que aceita
        <a
          href="/pt-BR/docs/HTML/Content_categories#Phrasing_content"
          >conteúdo fraseado</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLBRElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclue os [Atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("clear")}} {{Deprecated_Inline}}

  - : Indica onde começar a próxima linha depois da quebra.

    > **Nota:** Este atributo está obsoleto em HTML 5 e **Não deve ser usado por autores**. Use a propriedade CSS {{CSSxref('clear')}} em vez disso.

## Exemplo

```html
Mozilla Foundation<br />
1981 Landings Drive<br />
Building K<br />
Mountain View, CA 94043-0801<br />
USA
```

Saída do HTML acima:

Mozilla Foundation<br>
1981 Landings Drive<br>
Building K<br>
Mountain View, CA 94043-0801<br>
USA

## Especificações

| Especificação                                                                         | Status                   | Comentário |
| ------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-br-element', '&lt;br&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-br-element', '&lt;br&gt;')}}   | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.2.1', '&lt;br&gt;')}}                  | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com o browser

{{Compat("html.elements.br")}}

## Veja também

- O elemento {{HTMLElement("address")}}
- O elemento {{HTMLElement("p")}}

{{HTMLSidebar}}
