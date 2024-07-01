---
title: Display
slug: Web/CSS/display
---

{{CSSRef}}

A propriedade **`display`** [CSS](/pt-BR/docs/Web/CSS) define se um elemento é tratado como um [bloco ou elemento inline](/pt-BR/docs/Web/CSS/CSS_Flow_Layout) e o layout usado para seus filhos, como [layout de fluxo](/pt-BR/docs/Web/CSS/CSS_Flow_Layout), [grid](/pt-BR/docs/Web/CSS/CSS_Grid_Layout) ou [flex](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout).

Formalmente, a propriedade **`display`** define os _tipos de exibição_ internos e externos de um elemento. O tipo externo define a participação de um elemento no [layout de fluxo](/pt-BR/docs/Web/CSS/CSS_Flow_Layout); o tipo interno define o layout dos filhos. Alguns valores de `display` são totalmente definidos em suas próprias especificações individuais; por exemplo, o detalhe do que acontece quando `display: flex` é declarado é definido na especificação CSS Flexible Box Model.

## Sintaxe

A propriedade CSS `display` é especificada usando valores de palavra-chave.

```css
/* valores pré-compostos */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* geração de caixas */
display: none;
display: contents;

/* sintaxe de dois valores */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* outros valores */
display: table;
display: table-row; /* todos os elementos da tabela têm um valor de exibição CSS equivalente */
display: list-item;

/* Valores globais */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

## Valores agrupados

Os valores de palavra-chave podem ser agrupados em seis categorias de valor.

### Fora

- {{CSSxRef("&lt;display-outside&gt;")}}

  - : essas palavras-chave especificam o tipo de exibição externa do elemento, que é essencialmente sua função no layout de fluxo:

    - `block`
      - : O elemento gera uma caixa de elemento de bloco, gerando quebras de linha antes e depois do elemento quando no fluxo normal.
    - `inline`
      - : O elemento gera uma ou mais caixas de elemento em linha que não geram quebras de linha antes ou depois de si mesmas. No fluxo normal, o próximo elemento estará na mesma linha se houver espaço.

> **Nota:** Navegadores que suportam a sintaxe de dois valores, ao localizar apenas o valor externo, como quando `display: block` ou `display: inline` é especificado, definirão o valor interno como `flow`.
> Isso resultará no comportamento esperado; por exemplo, se você especificar um elemento para ser bloco, você esperaria que os filhos desse elemento participassem do bloco e do layout de fluxo normal embutido.

### Lado de dentro

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : Estas palavras-chave especificam o tipo de exibição interna do elemento, que define o tipo de contexto de formatação em que seu conteúdo é apresentado (supondo que seja um elemento não substituído):

    - `flow` {{Experimental_Inline}}

      - : O elemento apresenta seu conteúdo usando o layout de fluxo (layout de bloco e linha).

        Se seu tipo de exibição externa for `inline` ou `run-in`, e estiver participando de um bloco ou contexto de formatação inline, ele gerará uma caixa inline. Caso contrário, gera uma caixa de contêiner de bloco.

        Dependendo do valor de outras propriedades (como {{CSSxRef("position")}}, {{CSSxRef("float")}} ou {{CSSxRef("overflow")}}) e se ele próprio está participando em um contexto de formatação em bloco ou em linha, ele estabelece um novo [contexto de formatação de bloco](/pt-BR/docs/Web/Guide/CSS/Block_formatting_context) (BFC) para seu conteúdo ou integra seu conteúdo em seu contexto de formatação pai.

    - `flow-root`
      - : O elemento gera uma caixa de elemento de bloco que estabelece um novo [contexto de formatação de bloco](/pt-BR/docs/Web/Guide/CSS/Block_formatting_context), definindo onde está a raiz de formatação.
    - `table`
      - : Esses elementos se comportam como elementos HTML {{HTMLElement("table")}}. Ele define uma caixa de nível de bloco.
    - `flex`
      - : O elemento se comporta como um elemento de bloco e apresenta seu conteúdo de acordo com o [modelo flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout).
    - `grid`
      - : O elemento se comporta como um elemento de bloco e apresenta seu conteúdo de acordo com o [modelo de grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).
    - `ruby` {{Experimental_Inline}}
      - : O elemento se comporta como um elemento inline e apresenta seu conteúdo de acordo com o modelo de formatação ruby. Ele se comporta como os elementos HTML {{HTMLElement("ruby")}} correspondentes.

> **Nota:** Navegadores que suportam a sintaxe de dois valores, ao encontrar apenas o valor interno, como quando `display: flex` ou `display: grid` é especificado, definirão seu valor externo como `block`.
> Isso resultará no comportamento esperado; por exemplo, se você especificar um elemento como `display: grid`, você esperaria que a caixa criada no contêiner da grade fosse uma caixa de nível de bloco.

### Item de lista

- {{CSSxRef("&lt;display-listitem&gt;")}}
  - : O elemento gera uma caixa de bloco para o conteúdo e uma caixa inline de item de lista separada.

Um único valor de `list-item` fará com que o elemento se comporte como um item de lista.
Isso pode ser usado junto com {{CSSxRef("list-style-type")}} e {{CSSxRef("list-style-position")}}.

`list-item` também pode ser combinado com qualquer palavra-chave {{CSSxRef("&lt;display-outside&gt;")}} e `flow` ou `flow-root` {{CSSxRef("&lt;display-inside&gt;" )}} palavras-chave.

> **Nota:** Em navegadores que suportam a sintaxe de dois valores, se nenhum valor interno for especificado, o padrão será `flow`.
> Se nenhum valor externo for especificado, a caixa principal terá um tipo de exibição externa de `bloco`.

### Interno

- {{CSSxRef("&lt;display-internal&gt;")}}

  - : Alguns modelos de layout como `table` e `ruby` possuem uma estrutura interna complexa, com vários papéis diferentes que seus filhos e descendentes podem preencher.
    Esta seção define os valores de exibição "internos", que só têm significado dentro desse modo de layout específico.

    - `table-row-group`
      - : Esses elementos se comportam como {{HTMLElement("tbody")}} elementos HTML.
    - `table-header-group`
      - : Esses elementos se comportam como {{HTMLElement("thead")}} elementos HTML.
    - `table-footer-group`
      - : Esses elementos se comportam como {{HTMLElement("tfoot")}} elementos HTML.
    - `table-row`
      - : Esses elementos se comportam como {{HTMLElement("tr")}} elementos HTML.
    - `table-cell`
      - : Esses elementos se comportam como {{HTMLElement("td")}} elementos HTML.
    - `table-column-group`
      - : Esses elementos se comportam como {{HTMLElement("colgroup")}} elementos HTML.
    - `table-column`
      - : Esses elementos se comportam como {{HTMLElement("col")}} elementos HTML.
    - `table-caption`
      - : Esses elementos se comportam como {{HTMLElement("caption")}} elementos HTML.
    - `ruby-base` {{Experimental_Inline}}
      - : Esses elementos se comportam como {{HTMLElement("rb")}} elementos HTML.
    - `ruby-text` {{Experimental_Inline}}
      - : Esses elementos se comportam como {{HTMLElement("rt")}} elementos HTML.
    - `ruby-base-container` {{Experimental_Inline}}
      - : Esses elementos são gerados como caixas anônimas.
    - `ruby-text-container` {{Experimental_Inline}}
      - : Esses elementos se comportam como {{HTMLElement("rtc")}} elementos HTML.

### Caixa

- {{CSSxRef("&lt;display-box&gt;")}}

  - : Esses valores definem se um elemento gera caixas de exibição.

    - `contents`

      - : Esses elementos não produzem uma caixa específica por si mesmos. Eles são substituídos por sua pseudocaixa e suas caixas filhas. Observe que a especificação CSS Display Level 3 define como o valor `contents` deve afetar os "elementos incomuns" — elementos que não são renderizados puramente por conceitos de caixa CSS, como elementos substituídos. Consulte [Apêndice B: Efeitos da exibição: conteúdo sobre elementos incomuns](https://drafts.csswg.org/css-display/#unbox) para obter mais detalhes.

        _Devido a um bug nos navegadores, isso removerá o elemento da árvore de acessibilidade - os leitores de tela não verão o que está dentro. Consulte a seção [Preocupações de acessibilidade](#accessibility_preocupações) abaixo para obter mais detalhes._

    - `none`
      - : Desativa a exibição de um elemento para que não tenha efeito no layout (o documento é renderizado como se o elemento não existisse). Todos os elementos descendentes também têm sua exibição desligada.
        Para que um elemento ocupe o espaço que normalmente ocuparia, mas sem realmente renderizar nada, use a propriedade {{CSSxRef("visibility")}}.

### Pré-composto

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2 usava uma palavra-chave única, sintaxe pré-composta para a propriedade `display`, exigindo palavras-chave separadas para variantes de nível de bloco e nível inline do mesmo modo de layout.

    - `inline-block`

      - : O elemento gera uma caixa de elemento de bloco que fluirá com o conteúdo ao redor como se fosse uma única caixa em linha (comportando-se como um elemento substituído faria).

        É equivalente a `inline flow-root`.

    - `inline-table`

      - : O valor `inline-table` não possui um mapeamento direto em HTML. Ele se comporta como um elemento HTML {{HTMLElement("table")}}, mas como uma caixa embutida, em vez de uma caixa em nível de bloco. Dentro da caixa da tabela há um contexto de nível de bloco.

        É equivalente a `tabela inline`.

    - `inline-flex`

      - : O elemento se comporta como um elemento inline e apresenta seu conteúdo de acordo com o modelo flexbox.

        É equivalente a `inline flex`.

    - `inline-grid`

      - : O elemento se comporta como um elemento inline e apresenta seu conteúdo de acordo com o modelo de grade.

        É equivalente a `inline grid`.

### Qual sintaxe você deve usar agora?

A especificação de Nível 3 detalha dois valores para a propriedade `display` — habilitando explicitamente a especificação do tipo de exibição externa e interna — mas isso ainda não é bem suportado pelos navegadores.

Os métodos `<display-legacy>` pré-compostos permitem os mesmos resultados com valores de palavra-chave única e devem ser favorecidos pelos desenvolvedores até que os dois valores de palavra-chave sejam melhor suportados. Por exemplo, usando dois valores, você pode especificar um contêiner flexível em linha da seguinte forma:

```css
.container {
  display: inline flex;
}
```

Atualmente, isso pode ser especificado usando um único valor.

```css
.container {
  display: inline-flex;
}
```

Para obter mais informações sobre essas alterações na especificação, consulte o artigo [Adapting to the new two-value sintax of display](/pt-BR/docs/Web/CSS/display/two-value_syntax_of_display).

### Global

```css
/* Valores globais */
display: inherit;
display: initial;
display: unset;
```

## Descrição

As páginas individuais para os diferentes tipos de valor que o `display` pode ter definido apresentam vários exemplos desses valores em ação — consulte a seção [Sintaxe](#sintaxe). Além disso, consulte o material a seguir, que abrange os vários valores de exibição em profundidade.

- [Adaptando-se à nova sintaxe de exibição de dois valores](/pt-BR/docs/Web/CSS/display/two-value_syntax_of_display)

### Layout de fluxo CSS (exibir: bloquear, exibir: embutido)

- [Block and Inline Layout in Normal Flow](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Flow Layout and Overflow](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Layout de fluxo e modos de escrita](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Contextos de formatação explicados](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [Em fluxo e fora de fluxo](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### display: flex

- [Conceitos básicos do flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Alinhamento de itens em um contêiner flexível](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Controle de proporções de itens flexíveis ao longo do eixo principal](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Mastering Wrapping of Flex Items](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Ordering Flex Items](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Relação do flexbox com outros métodos de layout](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Casos de uso típicos do Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### display: grid

- [Conceitos básicos de layout de grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relação com outros métodos de layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Posicionamento baseado em linha](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Áreas de modelo de grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout usando linhas de grade nomeadas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Colocação automática no layout da grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Alinhamento da caixa no layout da grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Grades, valores lógicos e modos de escrita](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [Layout e acessibilidade da grade CSS](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [Layout de grade CSS e aprimoramento progressivo](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizando layouts comuns usando grades](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## Preocupações de acessibilidade

### display: none

Usar um valor `display` de `none` em um elemento irá removê-lo da [árvore de acessibilidade](/pt-BR/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Isso fará com que o elemento e todos os seus descendentes não sejam mais anunciados pela tecnologia de leitura de tela.

Se você deseja ocultar visualmente o elemento, uma alternativa mais acessível é usar [uma combinação de propriedades](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) para remover visualmente da tela, mas mantenha-o analisável por tecnologia assistiva, como leitores de tela.

### display: contents

As implementações atuais na maioria dos navegadores removerão da [árvore de acessibilidade](/pt-BR/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) qualquer elemento com um valor `display` de `contents` (mas os descendentes permanecerão). Isso fará com que o próprio elemento não seja mais anunciado pela tecnologia de leitura de tela. Este é um comportamento incorreto de acordo com a [especificação CSS](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [Marcação mais acessível com exibição: conteúdo | Esconda de Vries](https://hidde.blog/more-accessible-markup-with-display-contents/)
- [Exibir: o conteúdo não é uma redefinição de CSS | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tabelas

Alterar o valor `display` de um elemento {{HTMLElement("table")}} para `block`, `grid` ou `flex` alterará sua representação na [árvore de acessibilidade](/pt-BR/docs/Aprenda/Acessibilidade/What_is_accessibility#accessibility_apis). Isso fará com que a mesa não seja mais anunciada corretamente pela tecnologia de leitura de tela.

- [Pequena nota sobre o que as propriedades de exibição CSS fazem com a semântica da tabela — The Paciello Group](https://www.tpgi.com/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Conteúdo oculto para melhor a11y | Vá fazer coisas](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Diretriz 1.3 explicações](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Entendendo o Critério de Sucesso 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### exibir comparação de valores

Neste exemplo, temos dois elementos de contêiner em nível de bloco, cada um com três filhos embutidos. Abaixo disso, temos um menu de seleção que permite aplicar diferentes valores `display` aos contêineres, permitindo comparar e contrastar como os diferentes valores afetam o layout do elemento e de seus filhos.

Incluímos {{cssxref("padding")}} e {{cssxref("background-color")}} nos contêineres e seus filhos, para que seja mais fácil ver o efeito que os valores de exibição estão tendo.

> **Nota:** não incluímos nenhuma sintaxe moderna de dois valores, pois o suporte a ela ainda é bastante limitado.

#### HTML

```html
<article class="container">
  <span>Primeiro</span>
  <span>Segundo</span>
  <span>Terceiro</span>
</article>

<article class="container">
  <span>Primeiro</span>
  <span>Segundo</span>
  <span>Terceiro</span>
</article>

<div>
  <label for="display">Escolha um valor de exibição:</label>
  <select id="display">
    <option selected>block</option>
    <option>inline</option>
    <option>inline-block</option>
    <option>none</option>
    <option>flex</option>
    <option>inline-flex</option>
    <option>grid</option>
    <option>inline-grid</option>
    <option>table</option>
    <option>list-item</option>
  </select>
</div>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
  padding-top: 10px;
}

article {
  background-color: red;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}

article,
div {
  margin: 20px;
}
```

#### JavaScript

```js
const articles = document.querySelectorAll(".container");
const select = document.querySelector("select");

function updateDisplay() {
  articles.forEach((article) => {
    article.style.display = select.value;
  });
}

select.addEventListener("change", updateDisplay);

updateDisplay();
```

#### Resultado

{{EmbedLiveSample('display_value_comparison','100%', 440)}}

> **Nota:** você pode encontrar mais exemplos nas páginas para cada tipo de dados de exibição separado, linkado acima.

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- [Layout de bloco e inline no fluxo normal](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Introdução aos contextos de formatação](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
