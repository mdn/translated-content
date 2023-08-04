---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{CSSRef}}

A propriedade CSS **`animation-fill-mode`** define como uma animação [CSS](/pt-BR/docs/Web/CSS) aplica estilos ao seu destino antes e depois de sua execução.

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

It is often convenient to use the shorthand property {{cssxref("animation")}} to set all animation properties at once.

## Syntax

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

### Values

- `none`
  - : A animação não aplicará nenhum estilo ao destino quando não estiver em execução. Em vez disso, o elemento será exibido usando quaisquer outras regras CSS aplicadas a ele. Este é o valor padrão.
- `forwards`

  - : The target will retain the computed values set by the last [keyframe](/pt-BR/docs/CSS/@keyframes) encountered during execution. The last keyframe depends on the value of {{cssxref("animation-direction")}} and {{cssxref("animation-iteration-count")}}:

    | `animation-direction` | `animation-iteration-count` | last keyframe encountered |
    | --------------------- | --------------------------- | ------------------------- |
    | `normal`              | even or odd                 | `100%` or `to`            |
    | `reverse`             | even or odd                 | `0%` or `from`            |
    | `alternate`           | even                        | `0%` or `from`            |
    | `alternate`           | odd                         | `100%` or `to`            |
    | `alternate-reverse`   | even                        | `100%` or `to`            |
    | `alternate-reverse`   | odd                         | `0%` or `from`            |

- `backwards`

  - : The animation will apply the values defined in the first relevant [keyframe](/pt-BR/docs/CSS/@keyframes) as soon as it is applied to the target, and retain this during the {{cssxref("animation-delay")}} period. The first relevant keyframe depends on the value of {{cssxref("animation-direction")}}:

    | `animation-direction`            | first relevant keyframe |
    | -------------------------------- | ----------------------- |
    | `normal` or `alternate`          | `0%` or `from`          |
    | `reverse` or `alternate-reverse` | `100%` or `to`          |

- `both`
  - : The animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions.

> **Nota:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref("animation-name")}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values).

### Formal syntax

{{csssyntax}}

## Example

You can see the effect of `animation-fill-mode` in the following example. It demonstrates how, for an animation that runs for an infinite time, you can cause it to remain in its final state rather than reverting to the original state (which is the default).

### HTML

```html
<p>Move your mouse over the gray box!</p>
<div class="demo">
  <div class="growsandstays">This grows and stays big.</div>
  <div class="grows">This just grows.</div>
</div>
```

### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

{{EmbedLiveSample('Example',700,300)}}

See [CSS animations](/pt-BR/CSS/CSS_animations) for more examples.

## Specifications

| Specification                                                                  | Status                       | Comment             |
| ------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('CSS3 Animations', '#animation-fill-mode', 'animation-fill-mode')}} | {{Spec2('CSS3 Animations')}} | Initial definition. |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.animation-fill-mode")}}

## See also

- [Using CSS animations](/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
