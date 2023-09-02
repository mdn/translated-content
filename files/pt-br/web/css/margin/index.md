---
title: margin
slug: Web/CSS/margin
---

{{CSSRef}}

A propriedade **`margin`** do [CSS](/pt-BR/docs/Web/CSS) define a [área de margem](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) nos quatro lados do elemento. É uma abreviação que define todas as margens individuais de uma só vez: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, e {{cssxref("margin-left")}}.

{{EmbedInteractiveExample("pages/css/margin.html")}}

## Sintaxe

```css
/* Aplica para todos os quatro lados */
margin: 1em;

/* vertical | horizontal */
margin: 5% auto;

/* topo | horizontal | inferior */
margin: 1em auto 2em;

/* topo | direita | inferior | esquerda */
margin: 2px 1em 0 auto;

/* Valores globais */
margin: inherit;
margin: initial;
margin: unset;
```

A propriedade `margin` pode ser especificada usando um, dois, três ou quatro valores. Cada valor deve ser um [`<length>`](#length), uma [`<percentage>`](#percentage), ou a palavra-chave [`auto`](#auto). Cada valor pode ser positivo, zero ou negativo.

- Quando **um** valor é especificado, a mesma margem é aplicada para **todos os quatro lados**.
- Quando **dois** valores são especificados, a primeira margem é aplicada aos **lados** **superior e inferior,** e a segunda aos **lados** **esquerdo e direito**.
- Quando **três** valores são especificados, a primeira margem é apliacada ao **topo**, a segunda aos **lados** **esquerdo e direito**, e a terceira ao **lado** **inferior**.
- Quando **quatro** valores são especificados, as margens são aplicadas aos lados **superior**, **direito**, **inferior** e **esquerdo**, nesta ordem (sentido horário).

### Valores

- **{{cssxref("length")}}**
  - : O tamanho da margem como um valor fixo.
- {{cssxref("percentage")}}
  - : O tamanho da margem como um percetual, relativo à _largura_ do bloco em que o elemento está contido.
- `auto`
  - : O navegador seleciona uma margem adequada para utilizar. Por exemplo, em alguns casos este valor pode ser utilizado para centralizar o elemento.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Exemplo simples

#### HTML

```html
<div class="center">Este elemento está centralizado.</div>

<div class="outside">
  Este elemento está posicionado fora de seu bloco recipiente.
</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('Simple_example','100%',120) }}

### Mais exemplos

```css
margin: 5%; /* todos os lados: margem de 5% */

margin: 10px; /* todos os lados: margem de 10px */

margin: 1.6em 20px; /* topo e inferior:    margem de 1.6em */
/* esquerda e direita: margem de 20px  */

margin: 10px 3% 1em; /* topo:               margem de 10px */
/* esquerda e direita: margem de 3%   */
/* inferior:           margem de 1em  */

margin: 10px 3px 30px 5px; /* topo:     margem de 10px */
/* direita:  margem de 3px  */
/* inferior: margem de 30px */
/* esquerda: margem de 5px  */

margin: 2em auto; /* topo e inferior: margem de 2em          */
/* caixa está horizontalmente centralizada */

margin: auto; /* topo e inferior: margem de 0            */
/* caixa está horizontalmente centralizada */
```

## Notas

### Centralização horizontal

Para centralizar algo horizontalmente em navegadores modernos, você pode utilizar `display: flex; justify-content: center;`

Contudo, em navegadores antigos, como IE8-9 que não suporta layout flexbox, estes não estão disponíveis. Para centralizar um elemento dentro de seu pai, use `margin: 0 auto;` .

### Colapso de margens

Às vezes, as margens superior e inferior de elementos são colapsadas em uma única margem que é igual à maior das duas margens. Veja [Dominando margin collapsing](/pt-BR/docs/Web/CSS/CSS_Box_Model/margin_collapsing) para mais informações.

## Especificações

| Especificação                                                    | Status                          | Comentário                               |
| ---------------------------------------------------------------- | ------------------------------- | ---------------------------------------- |
| {{ SpecName('CSS3 Box', '#margin', 'margin') }}                  | {{ Spec2('CSS3 Box') }}         | Nenhuma mudança significativa.           |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'margin') }}  | {{ Spec2('CSS3 Transitions') }} | Define `margin` como animável.           |
| {{ SpecName('CSS2.1', 'box.html#margin-properties', 'margin') }} | {{ Spec2('CSS2.1') }}           | Remove seu efeito em elementos _inline_. |
| {{ SpecName('CSS1', '#margin', 'margin') }}                      | {{ Spec2('CSS1') }}             | Definição inicial.                       |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.margin")}}

## Veja também

- [CSS Box Model](/pt-BR/CSS/box_model)
- [Margin collapsing](/pt-BR/CSS/margin_collapsing)
