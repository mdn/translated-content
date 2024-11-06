---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{CSSRef}}

A propriedade **`vertical-align`** do [CSS](/pt-BR/docs/Web/CSS) define o alinhamento vertical de uma caixa inline, inline-block ou table-cell.

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

A propriedade vertical-align pode ser usada em dois contextos:

- Para alinhar verticalmente a caixa de um elemento inline dentro da caixa de linha que a contém. Por exemplo, pode ser usado para [posicionar verticalmente uma imagem em uma linha de texto](#vertical_alignment_in_a_line_box).
- Para alinhar verticalmente [o conteúdo de uma célula em uma tabela](#vertical_alignment_in_a_table_cell).

Observe que `vertical-align` só se aplica a elementos inline, inline-block e table-cell: você não pode usá-lo para alinhar verticalmente [elementos em nível de bloco](/pt-BR/docs/Web/HTML/Block-level_elements).

## Sintaxe

```css
/* Valores de palavra-chave */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* valores <comprimento> */
vertical-align: 10em;
vertical-align: 4px;

/* valores <porcentagem> */
vertical-align: 20%;

/* Valores globais */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

A propriedade `vertical-align` é especificada como um dos valores listados abaixo.

### Valores para elementos inline

#### Valores relativos aos pais

Esses valores alinham verticalmente o elemento em relação ao seu elemento pai:

- `baseline`
  - : Alinha a linha de base do elemento com a linha de base de seu pai. A linha de base de alguns [elementos substituídos](/pt-BR/docs/Web/CSS/Replaced_element), como {{HTMLElement("textarea")}}, não é especificada pela especificação HTML, o que significa que seu comportamento com esta palavra-chave pode variar entre os navegadores.
- `sub`
  - : Alinha a linha de base do elemento com a linha de base subscrita de seu pai.
- `super`
  - : Alinha a linha de base do elemento com a linha de base sobrescrita de seu pai.
- `text-top`
  - : Alinha a parte superior do elemento com a parte superior da fonte do elemento pai.
- `text-bottom`
  - : Alinha a parte inferior do elemento com a parte inferior da fonte do elemento pai.
- `middle`
  - : Alinha o meio do elemento com a linha de base mais metade da altura x do pai.
- {{cssxref("&lt;length&gt;")}}
  - : Alinha a linha de base do elemento ao comprimento especificado acima da linha de base de seu pai. Um valor negativo é permitido.
- {{cssxref("&lt;percentage&gt;")}}
  - : Alinha a linha de base do elemento à porcentagem fornecida acima da linha de base de seu pai, com o valor sendo uma porcentagem da propriedade {{Cssxref("line-height")}}. Um valor negativo é permitido.

#### Valores relativos à linha

Os seguintes valores alinham verticalmente o elemento em relação à linha inteira:

- `top`
  - : Alinha o topo do elemento e seus descendentes com o topo de toda a linha.
- `bottom`
  - : Alinha a parte inferior do elemento e seus descendentes com a parte inferior de toda a linha.

Para elementos que não possuem uma linha de base, a borda da margem inferior é usada.

### Valores para células da tabela

- `baseline` (e `sub`, `super`, `text-top`, `text-bottom`, `<length>` e `<percentage>`)
  - : Alinha a linha de base da célula com a linha de base de todas as outras células na linha que estão alinhadas com a linha de base.
- `top`
  - : Alinha a borda de preenchimento superior da célula com a parte superior da linha.
- `middle`
  - : Centraliza a caixa de preenchimento da célula dentro da linha.
- `bottom`
  - : Alinha a borda de preenchimento inferior da célula com a parte inferior da linha.

Valores negativos são permitidos.

## Definição formal

{{CSSInfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### Exemplo básico

#### HTML

```html
<div>
  Uma imagem <img src="frame_image.svg" alt="link" width="32" height="32" /> com
  um alinhamento padrão.
</div>
<div>
  Uma imagem
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  com um alinhamento de texto superior.
</div>
<div>
  Uma imagem
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  com um alinhamento de texto inferior.
</div>
<div>
  Uma imagem
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  com um alinhamento médio.
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### Resultado

{{EmbedLiveSample("Basic_example")}}

### Alinhamento vertical em uma caixa de linha

#### HTML

```html
<p>
  top: <img style="vertical-align: top" src="star.png" /><br />
  middle: <img style="vertical-align: middle" src="star.png" /><br />
  bottom: <img style="vertical-align: bottom" src="star.png" /><br />
  super: <img style="vertical-align: super" src="star.png" /><br />
  sub: <img style="vertical-align: sub" src="star.png" /><br />
</p>

<p>
  text-top: <img style="vertical-align: text-top" src="star.png" /><br />
  text-bottom: <img style="vertical-align: text-bottom" src="star.png" /><br />
  0.2em: <img style="vertical-align: 0.2em" src="star.png" /><br />
  -1em: <img style="vertical-align: -1em" src="star.png" /><br />
  20%: <img style="vertical-align: 20%" src="star.png" /><br />
  -100%: <img style="vertical-align: -100%" src="star.png" /><br />
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### Resultado

{{EmbedLiveSample("Vertical_alignment_in_a_line_box", '100%', 160, "", "")}}

### Alinhamento vertical em uma célula da tabela

#### HTML

```html
<table>
  <tr>
    <td style="vertical-align: baseline">baseline</td>
    <td style="vertical-align: top">top</td>
    <td style="vertical-align: middle">middle</td>
    <td style="vertical-align: bottom">bottom</td>
    <td>
      <p>
        Existe uma teoria que afirma que se alguém descobrir exatamente para que
        serve o Universo e por que ele está aqui, ele desaparecerá
        instantaneamente e será substituído por algo ainda mais bizarro e
        inexplicável.
      </p>
      <p>Há outra teoria que afirma que isso já aconteceu.</p>
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}
```

#### Resultado

{{EmbedLiveSample("Vertical_alignment_in_a_table_cell", '100%', 230, "", "")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Casos de uso típicos do Flexbox, seção "Item central"](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Entendendo `vertical-align`, ou "Como (não) centralizar o conteúdo verticalmente"](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: Tudo o que você precisa saber](https://christopheraue.net/design/vertical-align)
