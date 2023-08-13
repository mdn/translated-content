---
title: padding
slug: Web/CSS/padding
---

{{CSSRef}}

A propriedade **`padding`** define uma a distância entre o conteúdo de um elemento e suas bordas. É um atalho que evita definir uma distância para cada lado separadamente (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`).

```css
/* Aplica-se à todas as bordas */
padding: 1em;

/* vertical | horizontal */
padding: 5% 10%;

/* superior | horizontal | inferior */
padding: 1em 2em 2em;

/* superior | direita | inferior | esquerda */
padding: 2px 1em 0 1em;

/* Valores globais */
padding: inherit;
padding: initial;
padding: unset;
```

{{cssinfo}}

## Sintaxe

A propriedade `padding` pode ser utilizada usando um, dois, três ou todos os quatro valores. Cada valor é um [`<comprimento>`](#length) ou uma [`<porcentagem>`](#percentage).

- Quando **um** único é valor utilizado, ele se aplica a todos os **quatro lados**.
- Se **Dois** valores forem utilizados o primeiro se aplica às bordas verticais (**superior e inferior**) e o segundo se aplica às bordas horizontais (**esquerda e direita**).
- Quando **Três** valores são utilizados o primeiro se aplica à borda **superior**, o segundo será utilizado tanto para a borda **esquerda quanto para a borda direita**. O terceiro será aplicado à borda **inferior**.
- Com **Quatro** valores a ordem de aplicação é: **superior, direita, inferior e esquerda** (de acordo com o movimento dos ponteiros do relógio).

### Valores

- `<comprimento>`
  - : Media do comprimento. Não pode ser negativo. Veja {{cssxref("&lt;length&gt;")}} para maiores detalhes.
- `<porcentagem>`
  - : Valor percentual que é aplicado em relação à **largura** do bloco contido.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
padding: 5%;
/* padding 5% em todos os lados */
```

```css
padding: 10px;
/* padding 10px em todos os lados */
```

```css
padding: 10px 20px;
/*  10px acima e abaixo  */
/*  20px esquerda e direita  */
```

```css
padding: 10px 3% 20px;
/*  10px acima          */
/*  3% esquerda e direita */
/*  20px abaixo       */
```

```css
padding: 1em 3px 30px 5px;
/*  acima    1em  padding  */
/*  direita  3px  padding  */
/*  abaixo   30px padding  */
/*  esquerda 5px  padding  */
```

border:outset; padding:5% 1em;

## Amostra

### HTML

```html
<h4>Hello world!</h4>
<h3>O padding é diferente nesta linha.</h3>
```

### CSS

```css
h4 {
  background-color: green;
  padding: 50px 20px 20px 50px;
}

h3 {
  background-color: blue;
  padding: 400px 50px 50px 400px;
}
```

{{ EmbedLiveSample('Live_Sample', 'Amostra', 300) }}

## Especificações

| Especificação                                                   | Status                  | Observações       |
| --------------------------------------------------------------- | ----------------------- | ----------------- |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding') }}           | {{ Spec2('CSS3 Box') }} | Sem alteração     |
| {{ SpecName('CSS2.1', 'box.html#propdef-padding', 'padding') }} | {{ Spec2('CSS2.1') }}   | Sem alteração     |
| {{ Specname('CSS1', '#padding', 'padding') }}                   | {{ Spec2('CSS1') }}     | Definição inicial |

## Compatibilidade

{{Compat("css.properties.padding")}}

## Veja também

- [CSS Box Model](/pt-BR/CSS/box_model)
