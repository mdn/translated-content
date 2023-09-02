---
title: <template>
slug: Web/HTML/Element/template
---

## Sumário

O elemento **[HTML](/pt-BR/docs/Web/HTML) `<template>`** é um mecanismo para encapsular um conteúdo do lado do cliente que não é renderizado quando a página é carregada, mas que pode ser instanciado posteriormente em tempo de execução usando JavaScript.

Pense no template como um fragmento de conteúdo, que é armazenado para um possível uso futuro no documento. Enquanto o parser processa o conteúdo do elemento **`<template>`** ao carregar a página, isso apenas garante que o conteúdo é válido; porém, o conteúdo do elemento ainda não foi renderizado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/pt-BR/docs/Web/HTML/Content_categories"
          >Conteúdo de categorias</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Metadata_content"
          >Metadata content</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >,
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >, script-supporting element
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo Permitido</th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Metadata_content"
          >Metadata content</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >flow content, </a
        >qualquer conteúdo HTML válido que é permitido para ocorrer dentro do
        {{HTMLElement("ol")}}, {{HTMLElement("dl")}},
        {{HTMLElement("figure")}}, {{HTMLElement("ruby")}},
        {{HTMLElement("object")}}, {{HTMLElement("video")}},
        {{HTMLElement("audio")}}, {{HTMLElement("table")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}},
        {{HTMLElement("tr")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("select")}}, {{HTMLElement("details")}}
        elemento e {{HTMLElement("menu")}} cujo tipo de atributo está
        em estado de menu de contexto.
      </td>
    </tr>
    <tr>
      <th scope="row">Tags omitidas</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos pais permitidos</th>
      <td>
        {{HTMLElement("body")}}, {{HTMLElement("frameset")}},
        {{HTMLElement("head")}} and
        {{HTMLElement("colgroup")}} sem um atributo <code>span</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface do DOM</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

Há também um atributo _content,_ o qual é _read-only_ e provê acesso ao conteúdo do template. A existência desse atributo _content_ é frequentemente usada como um modo de determinar se o navegador do usuário suporta o element **`<template>`**.

## Exemplo

Primeiro, nós começamos com um pedaço de HTML como exemplo:

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- existing data could optionally be included here -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

No início, nós temos uma tabela que irá receber conteúdo inserido via Javascript. Em seguida, vem o _template_, que descreve a estrutura de um fragmento de HTML que representa uma única linha da tabela.

Agora que a tabela foi criada e o _template_ definido, nós usamos JavaScript para inserir linhas na tabela, cada linha é construída usando o _template_ como base.

```js
// Teste se seu navegador suporta o template HTML checando
// a presença do atribute content no elemento template .
if ("content" in document.createElement("template")) {
  // Instancie a tabela com o HTML tbody e a row com o template
  var t = document.querySelector("#productrow"),
    td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // Clone a nova row e insira-a na tabela
  var tb = document.getElementsByTagName("tbody");
  var clone = document.importNode(t.content, true);
  tb[0].appendChild(clone);

  // Crie uma nova row
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // Clone a nova row e insira-a na tabela
  var clone2 = document.importNode(t.content, true);
  tb[0].appendChild(clone2);
} else {
  // Ache outro modo de adicionar as rows na tabela, pois
  // o elemento HTML template não é suportado.
}
```

O resultado é a tabela original do HTML, com duas novas linhas inseridas via Javascript:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Example", 500, 120)}}

## Especificações

| Especificação                                                                           | Estado                   | Comentário        |
| --------------------------------------------------------------------------------------- | ------------------------ | ----------------- |
| {{SpecName('HTML WHATWG','/scripting-1.html#the-template-element','template element')}} | {{Spec2('HTML WHATWG')}} | Sem mudanças      |
| {{SpecName('HTML5 W3C','/scripting-1.html#the-template-element','template element')}}   | {{Spec2('HTML5 W3C')}}   | Definição Inicial |

## Compatibilidade de Navegadores

{{Compat("html.elements.template")}}

## Veja também

- Web components: {{HTMLElement("content")}}, {{HTMLElement("shadow")}}

{{HTMLSidebar}}
