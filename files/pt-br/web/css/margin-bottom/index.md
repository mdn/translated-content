---
title: margin-bottom
slug: Web/CSS/margin-bottom
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`margin-bottom`** define a [margin area](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) na parte inferior de um elemento. Um valor positivo coloca o valor mais longe de outros elementos vizinhos, enquanto um valor negativo, aproxima.

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

![The effect of the CSS margin-bottom property on the element box](/files/4045/margin-bottom.svg)

A propriedade não tem efeito em non-[replaced](/pt-BR/docs/Web/CSS/Replaced_element) elementos inline, como {{HTMLElement("span")}} ou {{HTMLElement("code")}}.

## Sintaxe

```css
/* <length> values */
margin-bottom: 10px; /* Um tamanho absoluto */
margin-bottom: 1em; /* relativo ao tamanho do texto */
margin-bottom: 5%; /* relativo à largura do container do bloco mais próximo */

/* Keyword values */
margin-bottom: auto;

/* Global values */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: unset;
```

A propriedade `margin-bottom` é especificada como a palavra chave `auto`, ou a `<length>`, ou a`<percentage>`. Esse valor pode ser positivo, zero ou negativo

### Values

- {{cssxref("&lt;length&gt;")}}
  - : O tamanho de uma margin com um valor fixo
- {{cssxref("&lt;percentage&gt;")}}
  - : O tamanho de uma margin como porcentagem, é relativa com o _tamanho_ do bloco pai.
- `auto`
  - : O navegador seleciona um valor adequado para usar. Veja {{cssxref("margin")}}.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<div class="container">
  <div class="box0">Box 0</div>
  <div class="box1">Box 1</div>
  <div class="box2">Box one's negative margin pulls me up</div>
</div>
```

### CSS

CSS para definir margin-bottom e height

```css
.box0 {
  margin-bottom: 1em;
  height: 3em;
}
.box1 {
  margin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  border: 1px dashed black;
  border-width: 1px 0;
  margin-bottom: 2em;
}
```

Algumas definições para container e divs, para que o os efeitos de margin possam ser vistos com mais clareza

```css
.container {
  background-color: orange;
  width: 320px;
  border: 1px solid black;
}
div {
  width: 320px;
  background-color: gold;
}
```

{{ EmbedLiveSample('Example',350,200) }}

## Especificações

| Especificação                                                         | Status                        | Comentário                                |
| --------------------------------------------------------------------- | ----------------------------- | ----------------------------------------- |
| {{SpecName('CSS3 Box', '#margin-bottom', 'margin-bottom')}}           | {{Spec2('CSS3 Box')}}         | Nenhuma mudança significativa             |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'margin-bottom')}}  | {{Spec2('CSS3 Transitions')}} | Definir o `margin-bottom` como "animavel" |
| {{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-bottom')}} | {{Spec2('CSS2.1')}}           | Remove seu efeito nos elementos in-line.  |
| {{SpecName('CSS1', '#margin-bottom', 'margin-bottom')}}               | {{Spec2('CSS1')}}             | Definição inicial                         |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.margin-bottom")}}
