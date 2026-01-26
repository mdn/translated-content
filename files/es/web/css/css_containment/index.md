---
title: CSS Containment
slug: Web/CSS/CSS_containment
---

El objetivo de la especificación CSS Containment es mejorar el rendimiento de las páginas web, permitiendo a los desarrolladores aislar un subárbol del resto de la página. Si el navegador sabe si una parte de la página es independiente, se puede optimizar la renderización y el rendimiento mejora. La especificación define una única propiedad CSS {{cssxref("contain")}}. Este documento relata los objetivos básicos de la especificación.

## Ejemplo básico

Muchas páginas web contienen un número de secciones que son independientes entre sí. Por ejemplo una lista de encabezados de artículo y un contenido, como en el siguiente marcado.

```html
<h1>Mi blog</h1>
<article>
  <h2>Encabezado de un bonito artículo</h2>
  <p>Contenido del artículo.</p>
</article>
<article>
  <h2>Otro encabezado de otro artículo</h2>
  <p>Más contenido.</p>
</article>
```

Cada artículo tiene la propiedad {{cssxref("contain")}} con valor `content` aplicado en el CSS.

```css
article {
  contain: content;
}
```

Cada artículo es independiente de los demás artículos en la página, y en consecuencia se les ha aplicado `contain: content` para indicar al navegador que ese es el caso. El navegador puede entonces usar esa información para tomar decisiones sobre cómo renderizar el contenido. Por ejemplo, puede no renderizar artículos que estén fuera del área visible.

Si aplicamos a cada `<article>` la propiedad `contain` con el valor `content`, cuando se inserten nuevos elementos el navegador entiende que no necesita hacer _relayout_ o _repaint_ de ningún área que esté fuera del subárbol que contenga el elemento, aunque si aplicamos estilos al `<article>` (por ejemplo `height: auto`), el navegador puede necesitar hacerse cargo de ese cambio de tamaño.

Se nos ha dicho por medio de la propiedad `contain` que cada artículo es independiente de los demás.

El valor `content` es una clave para referirse al valor `layout paint`. Dice al navegador que el _layout_ del elemento está totalmente separado del resto de la página, y que todo lo relacionado con el elemento es pintado dentro de sus límites. Nada puede desbordarse visualmente.

Esta información es algo que normalmente es obvio para el desarrollador a la hora de crear la página web. Sin embargo, los navegadores no pueden adivinar las intenciones del desarrollador y no puede asumir que un `<article>` tenga que ser enteramente autocontenido. Esta propiedad, por lo tanto, provee de una buena forma de explicar este hecho al navegador, permitiendo que haga optimizaciones para el rendimiento basados en ese conocimiento.

## Key concepts and terminology

This specification defines only one property, the {{cssxref("contain")}} property. The values for this property indicate the type of containment that you want to apply to that element.

### Layout containment

```css
article {
  contain: layout;
}
```

Layout is normally scoped to the entire document, which means that if you move one element the entire document needs to be treated as if things could have moved anywhere. By using `contain: layout` you can tell the browser it only needs to check this element — everything inside the element is scoped to that element and does not affect the rest of the page, and the containing box establishes an independent formatting context.

In addition:

- `float` layout will be performed independently.
- Margins won't collapse across a layout containment boundary
- The layout container will be a containing block for `absolute`/`fixed` position descendants.
- The containing box creates a stacking context, therefore {{cssxref("z-index")}} can be used.

### Paint containment

```css
article {
  contain: paint;
}
```

Paint containment essentially clips the box to the padding edge of the principal box. There can be no visible overflow. The same things are true for `paint` containment as `layout` containment (see above).

Another advantage is that if the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box.

### Size containment

```css
article {
  contain: size;
}
```

Size containment does not offer much in the way of performance optimizations when used on its own. However, it means that the size of the element's children cannot affect the size of the element itself — its size is computed as if it had no children.

If you turn on `contain: size` you need to also specify the size of the element you have applied this to. It will end up being zero-sized in most cases, if you don't manually give it a size.

### Style containment

```css
article {
  contain: style;
}
```

Despite the name, style containment does not provide scoped styles such as you would get with the [Shadow DOM](/es/docs/Web/API/Web_components/Using_shadow_DOM). The main use case is to prevent situations where a [CSS Counter](/es/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) could be changed in an element, which could then affect the rest of the tree.

Using `contain: style` would ensure that the {{cssxref("counter-increment")}} and {{cssxref("counter-set")}} properties created new counters scoped to that subtree only.

> [!NOTE]
> `style` containment is "at-risk" in the spec and may not be supported everywhere (it's not currently supported in Firefox).

### Special values

There are two special values of contain:

- `content`
- `strict`

We encountered the first in the example above. Using `contain: content` turns on `layout` and `paint` containment. The specification describes this value as being "reasonably safe to apply widely". It does not apply `size` containment, so you would not be at risk of a box ending up zero-sized due to a reliance on the size of its children.

To gain as much containment as possible use `contain: strict`, which behaves the same as `contain: size layout paint`, or perhaps the following to also add `style` containment in browsers that support it:

```css
contain: strict;
contain: strict style;
```

## Reference

### CSS Properties

- {{cssxref("contain")}}

## External resources

- [An Introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
- [Everything You Need to Know About the CSS `will-change` Property](https://dev.opera.com/articles/css-will-change-property)
