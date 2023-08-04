---
title: Semântica
slug: Glossary/Semantics
---

Na programação, a **Semântica** se refere ao _significado_ de um trecho de código — por exemplo, "que efeito tem a execução dessa linha de JavaScript?", Ou "que finalidade ou função esse elemento HTML tem" (em vez de "como ele se parece?").

## Semântica em JavaScript

Em JavaScript, considere uma função que aceita um parâmetro de string e retorne um elemento {{htmlelement("li")}} com essa string como seu `textContent`. Você precisaria examinar o código para entender o que a função fazia se fosse chamada `build('Peach')`, ou `createLiWithContent('Peach')`?

## Semântica em CSS

No CSS, considere criar uma lista com elementos `li` representando diferentes tipos de frutas. Você saberia qual parte do DOM está sendo selecionada com `div > ul > li`, ou `.fruits__item`?

## Semântica em HTML

Em HTML, por exemplo, o {{htmlelement("h1")}} é um elemento semântico, que fornece o texto que envolve a representação (ou o significado) de "um cabeçalho de nível superior em sua página".

```html
<h1>This is a top level heading</h1>
```

Por padrão, a maioria das [folhas de estilo do agente do usuário](/pt-BR/docs/Web/CSS/Cascade#User-agent_stylesheets) do navegador, estilizará um {{htmlelement("h1")}} com um tamanho de fonte grande para parecer um título (embora você possa estilizá-lo como quiser).

Por outro lado, você pode fazer qualquer elemento parecer um cabeçalho de nível superior. Considere o seguinte:

```html
<span style="font-size: 32px; margin: 21px 0;"
  >Is this a top level heading?</span
>
```

Isso fará com que pareça um cabeçalho de nível superior, mas não tem valor semântico. Portanto, não obterá nenhum benefício extra, conforme descrito acima. Assim, é uma boa idéia usar o elemento HTML certo, para o trabalho certo.

O HTML deve ser codificado para representar a data que será preenchida e não com base em seu estilo de apresentação padrão. A apresentação (como deve ser) é de responsabilidade exclusiva do [CSS](/pt-BR/docs/Web/CSS).

Alguns dos benefícios de se escrever a marcação semântica:

- Os mecanismos de pesquisa considerarão seu conteúdo como palavras-chave importantes para influenciar os rankings de pesquisa da página (see {{glossary("SEO")}})
- Os leitores de tela podem usá-lo como uma placa de sinalização para ajudar usuários com deficiência visual a navegar em uma página
- Encontrar blocos de código importantes é significativamente mais fácil do que procurar `div`s sem fim, com ou sem classes de semântica ou de nome espaçado.
- Sugira ao desenvolvedor o tipo de dados que serão preenchidos
- A nomeação semântica reflete a nomeação adequada do elemento/componente personalizado

Ao abordar qual marcação usar, pergunte a si mesmo: "Quais elementos melhor descrevem/representam os dados que vou preencher?" Por exemplo, é uma lista de dados? ordenado, não ordenado? é um artigo com seções e uma parte de informações relacionadas? lista as definições? é uma figura ou imagem que precisa de legenda? deve ter um cabeçalho e rodapé, além do cabeçalho e rodapé em todo o site? etc.

## Elementos semânticos

Estes são alguns dos aproximadamente 100 [elementos](/pt-BR/docs/Web/HTML/Element) semânticos disponíveis:

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## Saiba mais

- [HTML element reference](/pt-BR/docs/Web/HTML/Element#Inline_text_semantics) on MDN
- [Using HTML sections and outlines](/pt-BR/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Problems_solved_by_HTML5) on MDN
- [The meaning of semantics in computer science](https://pt.wikipedia.org/wiki/Semantics) on Wikipedia
- [MDN Web Docs Glossary](/pt-BR/docs/Glossary)

  - {{Glossary("SEO")}}

- Some of semantic elements in HTML

  - {{htmlelement("article")}}
  - {{htmlelement("aside")}}
  - {{htmlelement("details")}}
  - {{htmlelement("figcaption")}}
  - {{htmlelement("figure")}}
  - {{htmlelement("footer")}}
  - {{htmlelement("header")}}
  - {{htmlelement("main")}}
  - {{htmlelement("mark")}}
  - {{htmlelement("nav")}}
  - {{htmlelement("section")}}
  - {{htmlelement("summary")}}
  - {{htmlelement("time")}}
