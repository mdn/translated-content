---
title: Herança
slug: Web/CSS/Guides/Cascade/Inheritance
original_slug: Web/CSS/CSS_cascade/Inheritance
---

## Resumo

O resumo de cada [definição de propriedade do CSS](/pt-BR/docs/Web/CSS/Reference) diz se tal propriedade é herdada por padrão ("Inherited": sim) ou é não herdada por padrão ("Inherited": não). Isso controla o que ocorre quando nenhum valor é especificado para uma propriedade em um elemento.

## Propriedades herdadas

Quando nenhum valor de uma **propriedade herdada** foi especificado em um elemento, o elemento obtém o [valor computado](/pt-BR/docs/conflicting/Web/CSS/Guides/Cascade/Property_value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d) desta propriedade em seu elemento pai. Apenas o elemento raiz do documento obtém o [valor inicial](/pt-BR/docs/conflicting/Web/CSS/Guides/Cascade/Property_value_processing_bcdd1173c035d5a1f45a73ceb7da30cc58d8ff6e84066662a7d88acaf52fcc37) dado no resumo da propriedade.

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

Quando nenhum valor para uma **propriedade não herdada** (algumas vezes chamada de **reset property** em código Mozilla) é especificado em um elemento, o elemento obtém o [valor inicial](/pt-BR/docs/conflicting/Web/CSS/Guides/Cascade/Property_value_processing_bcdd1173c035d5a1f45a73ceb7da30cc58d8ff6e84066662a7d88acaf52fcc37) desta propriedade (como especificado no resumo da propriedade).

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
