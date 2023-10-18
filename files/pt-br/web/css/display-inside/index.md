---
title: <display-inside>
slug: Web/CSS/display-inside
---

{{CSSRef}}

Essas palavras-chave especificam o interior do elemento{{CSSxRef("display")}} type, que define o tipo de contexto de formatação que apresenta seu conteúdo (supondo que seja um elemento não substituído). Essas palavras-chave são usadas como valores do `display` e pode ser usada para fins legados como uma única palavra-chave ou conforme definido na especificação do Nível 3, juntamente com um valor do {{CSSxRef("&lt;display-outside&gt;")}} palavras-chave.

## Sintaxe

O `<display-inside>` O valor é definido usando uma palavra-chave da lista abaixo:

- `flow` {{Experimental_Inline}}

  - : O elemento expõe seu conteúdo usando o layout de fluxo (layout em bloco e em linha).
    Se o seu tipo de exibição externo for

    `inline` ou `run-in`,

    e estiver participando de um contexto de formatação em bloco ou em linha, gera uma caixa em linha. Caso contrário, ele gera uma caixa de contêiner de bloco.

    Dependendo do valor de outras propriedades como

    {{CSSxRef("position")}}, {{CSSxRef("float")}}, ou {{CSSxRef("overflow")}}) e se ele próprio participa de um contexto de formatação em bloco ou embutido, ele estabelece um novo contexto de formatação de bloco (BFC) para seu conteúdo ou integra seu conteúdo ao contexto de formatação pai.

- `flow-root` {{Experimental_Inline}}
  - : O elemento gera uma caixa de elemento de bloco que estabelece um novo contexto de formatação de bloco, definindo onde está a raiz da formatação.
- `table`
  - : Esses elementos se comportam como HTML{{HTMLElement("table")}} elementos. Ele define uma caixa no nível do bloco.
- `flex`
  - : O elemento se comporta como um elemento de bloco e expõe seu conteúdo de acordo com o modelo flexbox.
- `grid`
  - : O elemento se comporta como um elemento de bloco e expõe seu conteúdo de acordo com o modelo de grade.
- `ruby` {{Experimental_Inline}}
  - : O elemento se comporta como um elemento embutido e apresenta seu conteúdo de acordo com o modelo de formatação ruby. Ele se comporta como o HTML correspondente{{HTMLElement("ruby")}} elementos.

> **Nota:**: Navegadores que suportam a sintaxe de dois valores, encontrando apenas o valor interno, como quando `display: flex` or `display: grid` especificado, definirá seu valor externo como `block`. Isso resultará no comportamento esperado; por exemplo, se você especificar um elemento a ser `display: grid`, você esperaria que a caixa criada no contêiner da grade fosse uma caixa no nível do bloco.

### Sintaxe formal

{{CSSSyntax}}

## Exemplo

Neste exemplo, a caixa pai foi fornecida `display: flow-root` e assim estabelece um novo BFC e contém o item flutuado.

### HTML

```html
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

### CSS

```css
.box {
  background-color: rgb(224, 206, 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

### Resultado

{{EmbedLiveSample("Example", "100%", 180)}}

## Compatibilidade com navegadores

### Suporte a vários valores de palavras-chave

{{Compat("css.properties.display.multi-keyword_values", 10)}}

### Suporte de fluxo-raiz

{{Compat("css.properties.display.flow-root", 10)}}

### Suporte de tabela

{{Compat("css.properties.display.table_values", 10)}}

### Suporte de grade

{{Compat("css.properties.display.grid", 10)}}

### Suporte de flex

{{Compat("css.properties.display.flex", 10)}}

### Suporte de ruby

{{Compat("css.properties.display.ruby_values", 10)}}

## Veja também

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Conceitos básicos do Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Conceitos básicos de layout de grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
