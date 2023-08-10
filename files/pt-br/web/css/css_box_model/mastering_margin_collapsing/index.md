---
title: Dominando margin collapsing
slug: Web/CSS/CSS_box_model/Mastering_margin_collapsing
---

{{CSSRef}}As margens [superior](/pt-BR/docs/Web/CSS/margin-top) e [inferior](/pt-BR/docs/Web/CSS/margin-bottom) dos blocos às vezes são combinadas(colapsadas/reduzidas) para uma única margem cujo o tamanho é a maior das margens (se os elementos tiverem a mesma margem, uma delas não será somada), combinado a ele, um comportamento conhecido como **margin collapsing**. Note que as margens de [elementos flutuantes](/pt-BR/docs/Web/CSS/float) e [posicionados de forma absoluta](/pt-BR/docs/Web/CSS/position#Absolute_positioning) nunca colapsam.

Margin collapsing ocorre em três casos básicos:

- Irmãos adjacentes

  - : As margens de irmãos adjacentes são colapsadas (execeto quando o último irmão precisar ser [limpado](/pt-BR/docs/Web/CSS/clear) devido ao uso de floats em elementos anteriores ). Por exemplo:

    ```html
    <p>A margem inferior deste parágrafo é colapsada...</p>
    <p>... com margem superior deste parágrafo.</p>
    ```

- Pai e primeiro/último filho
  - : Se não houver border, padding, parte inline, [contexto de formatação de bloco](/pt-BR/docs/Web/Guide/CSS/Block_formatting_context) criado ou [livre](/pt-BR/docs/Web/CSS/clear) para separar o {{cssxref("margin-top")}} de um bloco do {{cssxref("margin-top")}} do seu primeiro bloco filho, ou nenhum border, padding, conteúdo inline, {{cssxref("height")}}, {{cssxref("min-height")}}, ou {{cssxref("max-height")}} para separar o {{cssxref("margin-bottom")}} de um bloco do {{cssxref("margin-bottom")}} do seu último filho, então essas margens colapsam. A margem colapsada acaba fora do pai.
- Blocos vázios
  - : Se não houver border, padding, conteúdo inline, {{cssxref("height")}}, ou {{cssxref("min-height")}} para separar um bloco {{cssxref("margin-top")}} de sua {{cssxref("margin-bottom")}}, então as margens superior e inferior são colapsadas.

Algumas coisas podem ser observadas:

- Margin collapsing mais complexo (de mais de duas margens) ocorrem quando esses casos são combinados.
- Essas regras se aplicam até mesmo a margens que são zero, portanto a margem e um primeiro/último filho termina fora de seu pai(de acordo com as regras acima) sendo a margem do pai zero ou não.
- Quando margens negativas são envolvidas, o tamanho da margem colapsada é a soma da maior margem positiva e da menor margem negativa(a mais negativa).
- Se ambos são negativos, o valor negativo maior será usado. Essa definição se aplica a elementos adjacentes e a elementos aninhados.

Margens de [elementos flutuantes](/pt-BR/docs/Web/CSS/float) e [posicionados de forma absoluta](/pt-BR/docs/Web/CSS/position#Absolute_positioning) nunca colapsam.

## Especificações

| Espeficicações                                                             | Status              | Comentário        |
| -------------------------------------------------------------------------- | ------------------- | ----------------- |
| {{SpecName("CSS2.1", "box.html#collapsing-margins", "margin collapsing")}} | {{Spec2("CSS2.1")}} | Definição inicial |

## Veja Também

- [CSS Reference](/pt-BR/docs/Web/CSS/CSS_Reference)
