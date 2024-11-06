---
title: Herança
slug: Web/CSS/Inheritance
---

## Resumo

O resumo de cada [definição de propriedade do CSS](/pt-BR/docs/Web/CSS/Reference) diz se tal propriedade é herdada por padrão ("Inherited": sim) ou é não herdada por padrão ("Inherited": não). Isso controla o que ocorre quando nenhum valor é especificado para uma propriedade em um elemento.

## Propriedades herdadas

Quando nenhum valor de uma **propriedade herdada** foi especificado em um elemento, o elemento obtém o [valor computado](/pt-BR/docs/Web/CSS/computed_value) desta propriedade em seu elemento pai. Apenas o elemento raiz do documento obtém o [valor inicial](/pt-BR/docs/Web/CSS/initial_value) dado no resumo da propriedade.

Um exemplo típico de uma propriedade herdada é a propriedade {{ Cssxref("color") }}. Dadas as seguintes regras de estilo:

```css
p {
  color: green;
}
```

e o markup:

```html
<p>Este paragrafo tem <em>texto enfatizado</em> dentro dele.</p>
```

As palavras "texto enfatizado" vão aparecer em verde, já que o elemento `em` herdou o valor da propriedade {{ Cssxref("color") }} do elemento `p`. Ele _não_ obtém o valor inicial da propriedade (o qual é a cor usada pelo elemento raiz quando a página não especifica nenhuma cor).

## Propriedades não herdadas

Quando nenhum valor para uma **propriedade não herdada** (algumas vezes chamada de **reset property** em código Mozilla) é especificado em um elemento, o elemento obtém o [valor inicial](/pt-BR/docs/CSS/initial_value) desta propriedade (como especificado no resumo da propriedade).

Um exemplo típico de uma propriedade não herdada é a propriedade {{ Cssxref("border") }}. Dadas as seguintes regras de estilo:

```css
p {
  border: medium solid;
}
```

e o markup

```html
<p>Este paragrafo tem <em>texto enfatizado</em> dentro dele.</p>
```

As palavras "texto enfatizado" não vão ter uma borda (já que o valor inicial de {{ Cssxref("border-style") }} é `none`).

## Notas

A palavra-chave {{ Cssxref("inherit") }} permite aos autores especificar explicitamente a herança. Ela funciona tanto em propriedades herdadas como não herdadas.

## Veja também

- [Referência CSS](/pt-BR/docs/Web/CSS/Reference)
- {{ Cssxref("inherit") }}
