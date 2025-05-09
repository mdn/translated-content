---
title: transform-style
slug: Web/CSS/transform-style
---

A propriedade **`transform-style`** [CSS](/pt-BR/docs/Web/CSS) define se os elemento filhos são posicionados em um espaco 3D ou serão achatados ( flattened ) no plano do elemento

{{InteractiveExample("CSS Demo: transform-style")}}

```css interactive-example-choice
transform-style: flat;
```

```css interactive-example-choice
transform-style: preserve-3d;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all layer" id="example-element">
    <p>Parent</p>
    <div class="numeral"><code>rotate3d(1, 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css interactive-example
.layer {
  background: #623e3f;
  border-radius: 0.75rem;
  color: white;
  transform: perspective(200px) rotateY(30deg);
}

.numeral {
  background-color: #ffba08;
  border-radius: 0.2rem;
  color: #000;
  margin: 1rem;
  padding: 0.2rem;
  transform: rotate3d(1, 1, 1, 45deg);
}
```

Se achatados, os elementos filho não existirão por conta própria ou sozinhos no espaço 3D.

Como essa propriedade não é herdada, ela deve ser definida para todos os descendentes que não sejam folhas do elemento.

## Syntax

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Valores globais */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### Values

- `flat`
  - : Indica que os filhos do elemento estão no plano do próprio elemento.
- `preserve-3d`
  - : Indica que os filhos do elemento devem ser posicionados no espaço 3D.

### Formal syntax

{{csssyntax}}

## Especificações

{{Specifications}}

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using CSS transforms](/pt-BR/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)

{{CSSRef}}
