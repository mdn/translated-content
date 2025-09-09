---
title: transform-style
slug: Web/CSS/transform-style
---

La propiedad **`transform-style`** [CSS](/es/docs/Web/CSS) establece si el elemento hijo esta posicionado en el espacio 3D (preserve-3d) o esta integrado(flat) en el plano del elemento.

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

Si esta integrado (flat), el elemento hijo no existirá por sí solo en el espacio 3D.

Como esta propiedad no se hereda, debe establecerse para todos los nodos internos descendientes (hijos) del elemento.

## Syntax

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### Values

- `flat`
  - : Indica que el elemento hijo yace en el plano del elemento mismo.
- `preserve-3d`
  - : Indica que el elemento hijo debe ser posicionado en el espacio 3D.

### Formal syntax

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Using CSS transforms](/es/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
