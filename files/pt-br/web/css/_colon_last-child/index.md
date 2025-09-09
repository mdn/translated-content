---
title: :last-child
slug: Web/CSS/:last-child
---

{{ CSSRef() }}

## Resumo

A CSS [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) `:last-child` representa qualquer elemento que é o último filho de seu elemento pai.

## Sintaxe

```
elemento:last-child { propriedades de estilo }
```

## Exemplo

### Conteúdo HTML

```html
<ul>
  <li>Esse item não é afetado pelo estilo.</li>
  <li>Esse também não.</li>
  <li>Esse item é! :)</li>
</ul>
```

### Conteúdo CSS

```css
li:last-child {
  background-color: lime;
}
```

{{EmbedLiveSample('Example', '100%', 100)}}

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- {{cssxref(":first-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
