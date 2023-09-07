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

| Especificação                                                                 | Status                      | Comment           |
| ----------------------------------------------------------------------------- | --------------------------- | ----------------- |
| {{SpecName('CSS4 Selectors', '#type-selectors', 'Type (tag name) selector')}} | {{Spec2('CSS4 Selectors')}} | Sem mudanças      |
| {{SpecName('CSS3 Selectors', '#type-selectors', 'type selectors')}}           | {{Spec2('CSS3 Selectors')}} | Sem mudanças      |
| {{SpecName('CSS2.1', 'selector.html#type-selectors', 'type selectors')}}      | {{Spec2('CSS2.1')}}         |                   |
| {{SpecName('CSS1', '#basic-concepts', 'type selectors')}}                     | {{Spec2('CSS1')}}           | Definição Inicial |

## Compatibilidade com navegadores

{{Compat("css.selectors.type")}}
