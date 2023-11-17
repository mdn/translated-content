---
title: Elementos block-level
slug: Glossary/Block-level_content
---

Elementos HTML **(Linguagem de marcação de hipertexto)** historicamente foram categorizados como "nível de bloco" ou [elementos "em linha"](/pt-BR/docs/HTML/Inline_elements). Um elemento em nível de bloco ocupa todo o espaço de seu elemento pai (container), criando assim um "bloco". Este artigo ajuda a explicar o que isso significa.

Navegadores normalmente mostram o elemento em nível de bloco com uma nova linha antes e depois do elemento. O exemplo a seguir demonstra a influência desse elemento em nível de bloco:

## Elementos em nível de bloco

### HTML

```html
<p>
  Este parágrafo é um elemento block-level; seu plano de fundo foi colorido para
  exibir o elemento pai do parágrafo.
</p>
```

### CSS

```css
p {
  background-color: #8abb55;
}
```

{{ EmbedLiveSample('Block-level_Example') }}

## Utilização

- Elementos nível de bloco podem aparecer apenas dentro do elemento {{ HTMLElement("body") }}

## Nível-de-bloco vs. em-linha

Existem algumas diferenças importantes entre os elementos no nível do bloco e os elementos em linha:

- Modelo de conteúdo
  - : Geralmente, os elementos no nível de bloco podem conter elementos em linha e, às vezes, outros elementos no nível de bloco. Inerente a essa distinção estrutural está a idéia de que elementos de bloco criam estruturas "maiores" que elementos em linha.
- Formatação padrão
  - : Por padrão, os elementos no nível de bloco começam em novas linhas, mas, os elementos em linha, podem iniciar em qualquer lugar.

A distinção entre elementos em nível de bloco e elementos em linha foi usada nas especificações HTML até 4.01. No HTML5, essa distinção binária é substituída por um conjunto mais complexo de [categorias de conteúdo](/pt-BR/docs/HTML/Content_categories). Enquanto a categoria "em linha" corresponde aproximadamente à categoria de [conteúdo de frases](/pt-BR/docs/HTML/Content_categories#Phrasing_content), a categoria "nível de bloco" não corresponde diretamente a nenhuma categoria de conteúdo HTML5. Mas, os elementos "nível de bloco" e "embutido" combinados, correspondem ao [conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), em HTML5. Existem também categorias adicionais, por exemplo [conteúdo interativo](/pt-BR/docs/Web/Guide/HTML/Content_categories#Interactive_content).

## Elementos

A seguir, é apresentada uma lista completa de todos os elementos no nível de bloco HTML (embora "nível de bloco" não esteja tecnicamente definido para elementos novos no HTML5).

- {{ HTMLElement("address") }}
  - : Informação de contato.
- {{ HTMLElement("article") }}
  - : Conteúdo do artigo.
- {{ HTMLElement("aside") }}
  - : Conteúdo lateral.
- {{ HTMLElement("blockquote") }}
  - : Citação longa ("bloco").
- {{ HTMLElement("details") }}
  - : Widget de divulgação.
- {{ HTMLElement("dialog") }}
  - : Caixa de diálogo.
- {{ HTMLElement("dd") }}
  - : Descreve um termo em uma lista de descrição.
- {{ HTMLElement("div") }}
  - : Divisão de conteúdo.
- {{ HTMLElement("dl") }}
  - : Lista de descrição.
- {{ HTMLElement("fieldset") }}
  - : Rótulo de conjunto de campos.
- {{ HTMLElement("figcaption") }}
  - : Legenda da figura.
- {{ HTMLElement("figure") }}
  - : Groups media content with a caption (see {{ HTMLElement("figcaption") }}).
- {{ HTMLElement("footer") }}
  - : Section or page footer.
- {{ HTMLElement("form") }}
  - : Input form.
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : Heading levels 1-6.
- {{ HTMLElement("header") }}
  - : Section or page header.
- {{ HTMLElement("hgroup") }}
  - : Groups header information.
- {{ HTMLElement("hr") }}
  - : Horizontal rule (dividing line).
- {{ HTMLElement("li") }}
  - : List item.
- {{ HTMLElement("main") }}
  - : Contains the central content unique to this document.
- {{ HTMLElement("nav") }}
  - : Contains navigation links.
- {{ HTMLElement("ol") }}
  - : Ordered list.
- {{ HTMLElement("p") }}
  - : Paragraph.
- {{ HTMLElement("pre") }}
  - : Preformatted text.
- {{ HTMLElement("section") }}
  - : Section of a web page.
- {{ HTMLElement("table") }}
  - : Table.
- {{ HTMLElement("tfoot") }}
  - : Table footer.
- {{ HTMLElement("ul") }}
  - : Unordered list.
- {{ HTMLElement("video") }}
  - : Video player.

### Veja também

- [Elementos Emlinha](/pt-BR/docs/Web/HTML/Inline_elements)
