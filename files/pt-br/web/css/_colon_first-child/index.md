---
title: ":first-child"
slug: Web/CSS/:first-child
---

{{ CSSRef() }}

## Sumário

A [pseudo-classe](/pt-BR/CSS/Pseudo-classes) de [CSS](/pt-BR/CSS) **`:first-child`** representa qualquer elemento que seja o primeiro filho de seus pais.

## Sintaxe

```
elemento:first-child { estilos }
```

## Exemplos

### Exemplo 1

#### HTML

```html
<div>
  <span>Este span é verde limão!</span>
  <span>Este span não é verde limão. :(</span>
</div>
```

#### CSS

```css
span:first-child {
  background-color: lime;
}
```

... resultado ...

{{EmbedLiveSample('Exemplo_1',300,50)}}

### Exemplo 2 - Usando UL

#### HTML

```html
<ul>
  <li>Elemento de Lista 1</li>
  <li>Elemento de Lista 2</li>
  <li>Elemento de Lista 3</li>
</ul>
```

#### CSS

```css
li {
  color: red;
}
li:first-child {
  color: green;
}
```

... resultado ...

{{EmbedLiveSample('Example_2_-_Using_UL',300,150)}}

## Especificações

| Especificação                                                           | Status                        | Comentário         |
| ----------------------------------------------------------------------- | ----------------------------- | ------------------ |
| {{ SpecName('CSS4 Selectors', '#first-child-pseudo', ':first-child') }} | {{ Spec2('CSS4 Selectors') }} | Sem mudança.       |
| {{ SpecName('CSS3 Selectors', '#first-child-pseudo', ':first-child') }} | {{ Spec2('CSS3 Selectors') }} | Definição inicial. |

## Browsers compatíveis

{{Compat("css.selectors.first-child")}}
