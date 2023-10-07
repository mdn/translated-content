---
title: <hgroup>
slug: Web/HTML/Element/hgroup
---

{{HTMLSidebar}}{{seeCompatTable}}

O **elemento HTML `<hgroup>` **destina-se a agrupar cabeçalhos de diferentes níveis para uma seção do documento. Ele agrupa (é um container para) um conjunto de elementos [`<h1>–<h6>`](/pt-BR/docs/Web/HTML/Element/Heading_Elements).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categorias de conteudo</th>
      <td>
        <a
          href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >, heading content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        One or more {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, and/or {{HTMLElement("h6")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row"><br />Elementos-pai permitidos</th>
      <td>
        Any element that accepts
        <a
          href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## atributos

Esse elemento admite apenas os [global attributes](/pt-BR/docs/HTML/Global_attributes) (atributos globais)

## Notas sobre o uso

> **Note:** O elemento `<hgroup>` foi removido da especificação do W3C para a HTML5, mas ainda se encontra na especificação HTML do WHATWG. Foi parcialmente implementado na maioria dos navegadores, contudo é pouco provável que seja incluído na especificação.
> Considerando que a finalidade do elemento `<hgroup>` é a de definir a maneira como os títulos serão mostrados pelo [outline algorithm definido na especificação da HTML](/pt-BR/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm) e considerando ainda que o **outline algorithm da HTML não está implementado em nenhum navegador**, conclui-se que, na prática, a semântica do elemento `<hgroup>` é meramente teórica.
> A especificação do W3C para a HTML5 fornece algumas sugestões para a marcação de [Subheadings, subtitles, alternative titles and taglines](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements) sem que se use o elemento `<hgroup>`.

`O elemento <hgroup> permite que o cabeçalho principal de uma seção de documento seja agrupado com quaisquer cabeçalhos secundarios-como subtitulos ou titulos alternativos-para formatar um cabeçalho de varios niveis.`

Em outras palavras o elemento \<hgroup> impede que qualquer um dos seus filhos secundarios \<h1>-\<h6> crie seçoes separadas propias no esboço-como esses elementos \<h1>-\<h6> normalmene seriam se não fossem filhos de nenhum \<hgroup>

Então, no esboço abstrato produzida pelo algortimo abstrato do HTML definido na especificação HTML, o \<hgroup> como um todo forma uma posição lógica simples, com todo o conjunto de filhos \<h1>-\<h6> do \<hgroup> entrando no esquema como uma unidade multinível, para compreender esse cabeçalho lógico único no resumo abstrato.

Para produzir alguma (não-abstrato) visualização não renderizada como um esboço, alguma escolhe deve ser feita no design para renderizar ferramentas sobre como renderizar \<hgroup> cabeçalhos como um jeito para transmitir sua natureza multi-nível. Há uma varidade de jeitos que \<hgroup> pode ser mostrado em um esboço renderizado; por exemplo:

- um \<hgroup> pode ser mostrado em um esboço renderizado com dois pontos e espaço (": ") ou outra pontuação após o cabeçalho principal e antes do primeiro cabeçalho secundário (e como a mesma pontuaçã, ou parecida, antes de qualquer cabeçalho secundário).
- um \<hgroup> pode ser mostrado em um esboço renderizado com o primeiro cabeçalho seguido de parênteses ao redor do segundo cabeçalho (s).

Considere o documento HTML a seguir:

```html
<!doctype html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML</h1>
    <h2>Living Standard — Last Updated 12 August 2016</h2>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id="toc">
    ...
  </ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

Um esboço renderizado para esse documento seria como:

![](outline-colon.png)

Isso é, o esboço renderizado deve ser o título primário, HTML, seguido por dois pontos e espaço, seguido pelo título secundário, Living Standard - Last Update 12 August 2016.

Ou, o esboço renderizado para aquele documento poderia ser como:

![Rendered outline that includes an 'hgroup' element, with parens around the secondary heading](outline-paren.png)

Isso é, o esboço renderizado deve mostrar o título primário, HTML, seguido pelo título secundário mostrado entre parênteses: (Living Standard - Last Updated 12 August 2016).

## Exemplos

```html
<hgroup id="document-title">
  <h1>HTML</h1>
  <h2>Living Standard — Last Updated 12 August 2016</h2>
</hgroup>
```

| Specification                                                                      | Status                   | Comment |
| ---------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-hgroup-element', '&lt;hgroup&gt;')}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilidade com navegadores

{{Compat("html.elements.hgroup")}}

## See also

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document).
