---
title: transform-style
slug: Web/CSS/transform-style
---

A propriedade **`transform-style`** [CSS](/pt-BR/docs/Web/CSS) define se os elemento filhos são posicionados em um espaco 3D ou serão achatados ( flattened ) no plano do elemento

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

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

| Specification                                                                    | Status                        | Comment             |
| -------------------------------------------------------------------------------- | ----------------------------- | ------------------- |
| {{SpecName('CSS Transforms 2', '#transform-style-property', 'transform-style')}} | {{Spec2('CSS Transforms 2')}} | Initial definition. |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.transform-style")}}

## Veja também

- [Using CSS transforms](/pt-BR/docs/CSS/Using_CSS_transforms)

{{CSSRef}}
