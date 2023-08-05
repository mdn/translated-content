---
title: ":last-of-type"
slug: Web/CSS/:last-of-type
---

{{CSSRef}}

## Sumário

A [CSS](/pt-BR/docs/Web/CSS) [pseudo-class](/pt-BR/docs/Web/CSS/Pseudo-classes) `:last-of-type` representa o último irmão com o nome de elemento dado na lista de filhos de seu elemento pai.

## Syntax

```
element:last-of-type { style properties }
```

## Exemplo

Para selecionar o último elemento _em_ dentro de um elemento {{HTMLElement("p")}}, você pode usar o seguinte:

```css
p em:last-of-type {
  color: lime;
}
```

```html
<p>
  <em>I'm not lime :(</em>
  <strong>I'm not lime :(</strong>
  <em>I'm lime :D</em>
  <strong>I'm also not lime :(</strong>
</p>

<p>
  <em>I'm not lime :(</em>
  <span><em>I am lime!</em></span>
  <strong>I'm not lime :(</strong>
  <em>I'm lime :D</em>
  <span><em>I am also lime!</em> <strike> I'm not lime </strike></span>
  <strong>I'm also not lime :(</strong>
</p>
```

...irá resultar em:

{{EmbedLiveSample('Example','100%', '120')}}

## Especificações

| Specification                                                           | Status                      | Comment            |
| ----------------------------------------------------------------------- | --------------------------- | ------------------ |
| {{SpecName('CSS4 Selectors', '#last-of-type-pseudo', ':last-of-type')}} | {{Spec2('CSS4 Selectors')}} | No change          |
| {{SpecName('CSS3 Selectors', '#last-of-type-pseudo', ':last-of-type')}} | {{Spec2('CSS3 Selectors')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.selectors.last-of-type")}}

## See also

- {{Cssxref(":nth-last-of-type")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":nth-of-type")}}
