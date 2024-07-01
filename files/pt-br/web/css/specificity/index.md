---
title: Especificidade
slug: Web/CSS/Specificity
---

## O Conceito

A especificação é a maneira de como os navegadores definem quais valores de propriedades são os mais relevantes para o elemento a ser utilizado. A especificação é baseada apenas nas regras impostas na composição de diferentes tipos de [seletores](/pt-BR/CSS/CSS_Reference#Selectors).

## Como isso é calculado?

A espeficicação é calculada na concatenação da contagem de cada tipo de seletor. Não é um peso aplicado na expressão correspondente.

No caso de igualdade de especificação, a última declaração encontrada no CSS é aplicada ao elemento.

> **Nota:**: O fato de elementos estarem próximos na árvore do documento não tem efeito sobre a especificação.

### Ordem crescente de especificação

A seguinte lista de seletores está incluida na especificação:

- Seletores Universais
- Tipo de Seletores
- Classes seletoras
- Atributos Seletores
- Pseudo-classes
- Seletores ID
- Estilo Inline

### A exceção `!important`

Quando a regra `!important` é utilizada na declaração do estilo substitui qualquer outra declaração feita no CSS, onde quer que esteja na lista de declaração. Contudo, `!important` não tem nada a ver com especificação.

### A exceção `:not`

A pseudo-classe de negação `:not` não é considerada uma pseudo-classe no cálculo de especificação. Contudo, seletores colocados na pseudo-class de negação são entendidos como seletores normais.

Aqui está um trecho de CSS:

```css
div.outer p {
  color: orange;
}
div:not(.outer) p {
  color: lime;
}
```

Usado com o seguindo código HTML:

```html
<div class="outer">
  <p>Esta é a div outer.</p>
  <div class="inner">
    <p>Este texto está na div inner.</p>
  </div>
</div>
```

Irá aparecer na tela assim:

Esta é a div outer.

Este texto está na div inner.

### Especificação Form-based

A especificação é baseada na forma de um seletor. No seguinte caso, o seletor contém os atributos no algoritmo de determinação de especificação, embora ele selecione um ID.

A seguir veja as declarações de estilo:

```css
* #foo {
  color: green;
}
*[id="foo"] {
  background: purple;
}
```

Usado com esta marcação:

```html
<p id="foo">Eu sou um simples texto.</p>
```

Vai acabar parecendo algo como:

Eu sou um simples texto.

Porque coincide com o mesmo elemento, mas o seletor de ID tem uma especificação superior.

### Estrutura aproximada

A seguir a declaração do estilo:

```css
body h1 {
  color: green;
}
html h1 {
  color: purple;
}
```

Com o HTML seguinte::

```html
<html>
  <body>
    <h1>Aqui está o título!</h1>
  </body>
</html>
```

Vamos ter algo como:

Aqui está o título!

## Veja Também

- Espcificação de Seletores CSS - <https://www.w3.org/TR/selectors/#specificity>
