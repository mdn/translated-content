---
title: align-self
slug: Web/CSS/align-self
---

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`align-self`** alinha itens-flex da linha flex alvo, sobreescrevendo o valor {{cssxref("align-items")}}. Se alguma dos eixos das margens do dado item está estabelecido como `auto`, então `align-self` é ignorado.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

A propriedade não se aplica a caixas _block-level_, ou células de tabela.

## Sintaxe

```css
/* valores de palavras-chave */
align-self: auto;
align-self: normal;

/* Alinhamento de posicionamento */
/* align-self não recebe valores left e right */
align-self: center; /* Coloca o item em torno do centro */
align-self: start; /* Coloca o item no início */
align-self: end; /* Coloca o item no fim */
align-self: self-start; /* Alinha o item flush no início */
align-self: self-end; /* Alinha o item flush no fim */
align-self: flex-start; /* Coloca o item flex no início */
align-self: flex-end; /* Coloca o item flex no fim */

/* Alinhamento a partir da baseline */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Estica itens de tamanho 'auto' para encaixar no container */

/* Alinhamento com Oveflow */
align-self: safe center;
align-self: unsafe center;

/* Valores globais */
align-self: inherit;
align-self: initial;
align-self: unset;
```

### Valores

- `auto`
  - : O valor {{cssxref("align-items")}} é originado do valor de seu pai.
- `normal`

  - : O efeito dessa palavra-chave depende do modo de layout em que nos encontramos:

    - Em layouts absolutamente posicionados, a palavra-chave se comporta como `start` em caixas absolutamente posicionadas _replaced_, e como `stretch` em caixas absolutamente posicionadas _all other_.
    - Em posição estática de layouts absolutamente posicionados, a palavra-chave se comporta como `stretch`.
    - Para itens-flex, a palavra-chave se comporta como `stretch`.
    - Para itens-grid, essa palavra-chave leva ao comportamento similar ao de `stretch`, com exceção de caixas com aspect ratio ou tamanhos intrínsecos onde se comportam como `start`.
    - A propriedade não se aplica para caixas _block-level_, e para células de tabela.

- `self-start`
  - : Alinha os itens de maneira a mesclar a borda do alinhamento do container correspondente com o lado inicial do item no eixo.
- `self-end`
  - : Alinha os itens de maneira a mesclar a borda do alinhamento do container correspondente com o lado final do item no eixo.
- `flex-start`
  - : A borda da margem inicial do item flex é mesclada com a borda inicial da linha.
- `flex-end`
  - : A borda da margem fim do item flex é mesclada com a borda fim da linha.
- `center`
  - : A caixa-margem do item flex é centralizada ao longo da linha no eixo transversal. Se o tamanho do item é superior to container flex, então ele irá transbordar de maneira equivalente em ambas direções.
- `baseline first baseline`
  `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `stretch`
  - : Caso o tamanho combinado dos itens ao longo do eixo transversal seja menor do que o tamanho do container de alinhamento, e caso o tamanho do item segue o estilo `auto`, seu tamanho cresce igualmente (mas não proporcionalmente), enquanto que ainda respeitando as restrições impostas por {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou a funcionalidade equivalente), de maneira que o tamanho combinado de todos itens tamanho-`auto` preencha exatamente o container de alinhamento ao longo do eixo transversal.
- `safe`
  - : Caso o tamanho do item supere o alinhamento do container, o item é alinhado como se o modo de alinhamento fosse `start`.
- `unsafe`
  - : Independente dos tamanhos relativos do item e do alinhamento do container, o valor do alinhmento dado é mantido.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<section>
  <div>Item #1</div>
  <div>Item #2</div>
  <div>Item #3</div>
</section>
```

### CSS

```css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```

### Resultado

{{EmbedLiveSample('Example')}}

## Especificações

| Especificação                                                           | Status                          | Comentário                                   |
| ----------------------------------------------------------------------- | ------------------------------- | -------------------------------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-align-self", "align-self")}} | {{Spec2("CSS3 Box Alignment")}} | Atualiza para últimas definições de sintaxe. |
| {{SpecName("CSS3 Flexbox", "#propdef-align-self", "align-self")}}       | {{Spec2("CSS3 Flexbox")}}       | Definição inicial.                           |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [CSS Box Alignment](/pt-BR/docs/Web/CSS/CSS_Box_Alignment)
- The {{cssxref("align-items")}} property

{{CSSRef}}
