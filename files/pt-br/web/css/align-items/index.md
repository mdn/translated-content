---
title: align-items
slug: Web/CSS/align-items
---

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`align-items`** estabelece o valor {{cssxref("align-self")}} em todos filhos diretos como um grupo. A propriedade align-self estabelece o alinhamento de um certo item dentro do bloco que o contém. Em Flexbox ele controla o alinhamento dos itens em {{glossary("Cross Axis")}}, enquanto que no Grid Layout, controla o alinhamento dos itens no Eixo de Bloco dentro de sua [grid area](/pt-BR/docs/Glossary/Grid_Areas).

O exemplo interativo abaixo demonstra alguns dos valores para `align-items` usando grid layout.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

## Sintaxe

```css
/* Palavras-chave básicas */
align-items: normal;
align-items: stretch;

/* Posicionamento do alinhamento */
/* align-items não recebe valores left e right */
align-items: center; /* Itens posicionados ao redor do centro */
align-items: start; /* Posiciona itens a partir do início */
align-items: end; /* Posiciona itens a partir do fim */
align-items: flex-start; /* Posiciona itens-flex a partir do início */
align-items: flex-end; /* Posiciona itens-flex a partir do fim */
align-items: self-start;
align-items: self-end;

/* Alinhamento da baseline */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alinhamento (apenas para alinhamento de posição) */
align-items: safe center;
align-items: unsafe center;

/* Valores globais */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### Valores

- `normal`

  - : O efeito desta palavra-chave depende do modo de layout em que nos encontramos:

    - Em layouts absolutamente posicionados, a palavra-chave se comporta como `start` em _replaced_ de caixas absolutamente posicionadas, e como `stretch` em _all others_ de caixas absolutamente posicionadas.
    - Em posição estática de layouts absolutamente posicionados, a palavra-chave se comporta como `stretch`.
    - Para itens-flex, a palavra chave se comporto como `stretch`.
    - Para itens-grid, esta palavra-chave leva a um comportamento similiar ao `stretch`, exceto para caixas com um aspect ratio ou tamanhos intrínsecos, onde se comporta como `start`.
    - A propriedade não se aplica para caixas block-level, e para células de tabela.

- `flex-start`
  - : As bordas da margem superior dos itens-flex são juntados com a borda superior da linha.
- `flex-end`
  - : As bordas da margem inferior dos itens flex são juntados com a borda inferior da linha.
- `center`
  - : As caixas de margem dos itens flex são centralizados ao longo da linha do eixo. Caso o tamanho de um item seja superior ao container flex, irá transbordar de maneira igual em ambas direções.
- `start`
  - : Os itens são posicionados, para cada um, em direção a borda início do container de alinhamento no eixo apropriado.
- `end`
  - : Os itens são posicionados, para cada um, em direção a borda fim do container de alinhamento no eixo apropriado.
- `self-start`
  - : Os itens são posicionados para a borda do container de alinhamento do lado inicial do item, no eixo apropriado.
- `self-end`
  - : Os itens são posicionados para a borda do container de alinhamento do lado final do item, no eixo apropriado.
- `baseline`

  `first baseline`

  `last baseline`

  - : Todos itens-flex são alinhados de tal forma que suas [baselines de container flex](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) estejam alinhados. O item com a maior distância entre o eixo de início de sua margem e sua baseline é juntado com eixo de início da linha.

- `stretch`
  - : Itens-flex são esticados de tal maneira que o tamanho da caixa de margem do item seja o mesmo da linha, respeitando as restrições de comprimento e altura.
- `safe`
  - : Usado em conjunto com uma palavra-chave de alinhamento. Se a palavra-chave escolhida signifique que o item transborde o alinhamento do container, causando assim perda de dados, o item é alinhado como estivesse no modo `start`.
- `unsafe`
  - : Usado em conjunto com uma palavra-chave de alinhamento. Independente dos tamanhos relativos do item, do alinhamento do container e caso overflow possa causar perda de dados, o valor de alinhamento estabelecido é mantido.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-items: center; /* Pode ser mudado na amostra ao vivo */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

### Resultado

{{EmbedLiveSample("Example", "260px", "290px")}}

## Especificações

| Especificação                                                             | Status                          | Comentário                                      |
| ------------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-align-items", "align-items")}} | {{Spec2("CSS3 Box Alignment")}} | Atualização para últimas definições de sintaxe. |
| {{SpecName('CSS3 Flexbox', '#propdef-align-items', 'align-items')}}       | {{Spec2('CSS3 Flexbox')}}       | Definição inicial                               |

{{cssinfo}}

## Compatibilidade com navegadores

### Support in Flex layout

{{Compat}}

## Veja também

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/pt-BR/docs/Web/CSS/CSS_Box_Alignment)
- The {{cssxref("align-self")}} property

{{CSSRef}}
