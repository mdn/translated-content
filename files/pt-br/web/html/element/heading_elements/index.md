---
title: "<h1>–<h6>: Os elementos HTML de cabeçalho da seção"
slug: Web/HTML/Element/Heading_Elements
---

{{HTMLSidebar}}

Os **elementos HTML** **`<h1>`–`<h6>`** representam seis níveis de título de seção. `<h1>` é o nível de seção mais alto e `<h6>` é o mais baixo.

{{InteractiveExample("HTML Demo: &lt;h1-h6&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Beetles</h1>
<h2>External morphology</h2>
<h3>Head</h3>
<h4>Mouthparts</h4>
<h3>Thorax</h3>
<h4>Prothorax</h4>
<h4>Pterothorax</h4>
```

```css interactive-example
h1,
h2,
h3,
h4 {
  margin: 0.1rem 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  padding-left: 20px;
}

h3 {
  font-size: 1.2rem;
  padding-left: 40px;
}

h4 {
  font-size: 1rem;
  font-style: italic;
  padding-left: 60px;
}
```

## Sumário

Elementos de **cabeçalho** são implementados em seis níveis, `<h1>` é o mais importante e `<h6>` é o de menor importância. Um elemento de cabeçalho descreve brevemente o tópico da seção em que ele está. As informações de cabeçalho podem ser usadas por agentes de usuário, por exemplo, para construir uma tabela de conteúdos para um documento automaticamente.

- _[Categorias do conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Conteúdos de fluxo](/pt-BR/docs/Web/HTML/Content_categories#flow_content), conteúdos de cabeçalho, conteúdos palpáveis.
- _Conteúdo permitido_ [Conteúdo com texto](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content).
- _Omissão de tag_ Não há, porém, as tags de abertura e fechamento são obrigatórias.
- _Elementos pais permitidos_ Qualquer elemento que aceite [conteúdos de fluxo](/pt-BR/docs/Web/HTML/Content_categories#flow_content); ou como um elemento filho do grupo de elementos de cabeçalho {{HTMLElement("hgroup")}}
- _Interface DOM_ {{domxref("HTMLHeadingElement")}}

## Atributos

Esses elementos incluem os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

O atributo **align** está {{deprecated_inline}} no HTML 4 e no HTML 5.

## Exemplos

### Todos os cabeçalhos

O seguinte código mostra, em uso, todos os níveis de cabeçalho.

```html
<h1>Cabeçalho nível 1</h1>
<h2>Cabeçalho nível 2</h2>
<h3>Cabeçalho nível 3</h3>
<h4>Cabeçalho nível 4</h4>
<h5>Cabeçalho nível 5</h5>
<h6>Cabeçalho nível 6</h6>
```

Aqui está o resultado deste código:

{{ EmbedLiveSample('Todos_os_cabeçalhos', '320', '300', '', 'Web/HTML/Element/Heading_Elements') }}

### Página de exemplo

O código seguinte mostra alguns cabeçalhos com um pouco de conteúdo abaixo deles.

```html
<h1>Elementos de cabeçalho</h1>
<h2>Sumário</h2>
<p>Algum texto aqui...</p>

<h2>Exemplos</h2>
<h3>Exemplo 1</h3>
<p>Algum texto aqui...</p>

<h3>Exemplo 2</h3>
<p>Algum texto aqui...</p>

<h2>Veja também</h2>
<p>Algum texto aqui...</p>
```

Aqui está o resultado deste código:

{{ EmbedLiveSample('Página_de_exemplo', '360', '480', '', 'Web/HTML/Element/Heading_Elements') }}

## Notas

**Não** use níveis menores para diminuir o tamanho da fonte do cabeçalho: use a propriedade [CSS](/pt-BR/docs/Web/CSS) {{cssxref("font-size")}} .

Evite pular níveis de cabeçalhos: sempre comece com `<h1>`, depois `<h2>` e assim por diante. Tente, também, ter pelo menos um cabeçalho de primeiro nível em uma página..

Em HTML 5, use o elemento {{HTMLElement("section")}} para definir o outline de um documento. Cabeçalhos fornecem títulos para secções e subsecções. Você também pode agrupar um cabeçalho e seu conteúdo usando o elemento {{HTMLElement("div")}} .

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
