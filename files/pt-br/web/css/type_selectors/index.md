---
title: Type selectors
slug: Web/CSS/Type_selectors
---

{{CSSRef}}

O **seletor de tipo** CSS corresponde aos elementos pelo nome do nó. Em outras palavras, ele seleciona todos os elementos do tipo fornecido em um documento.

```css
/* Todos os elementos <a> */
a {
  color: red;
}
```

## Sintaxe

```
element { style properties }
```

## Exemplos

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Here's a span with some text.</span>
<p>Here's a p with some text.</p>
<span>Here's a span with more text.</span>
```

### Result

{{EmbedLiveSample('Examples', '100%', 150)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
