---
title: transition
slug: Web/CSS/transition
---

{{CSSRef}}{{SeeCompatTable}}

## Summary

A propriedade de [CSS](/pt-BR/CSS)**transition** é uma [propriedade abreviada](/pt-BR/docs/Web/CSS/Shorthand_properties) para {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }} e {{ cssxref("transition-delay") }}. Ela permite definir a transição entre dois estados de um elemento. Estados diferentes podem ser definidos usando [pseudo-classes](/pt-BR/docs/Web/CSS/Pseudo-classes) tais como {{cssxref(":hover")}} ou {{cssxref(":active")}}; ou dinamicamente, usando javascript.

{{cssinfo}}

## Syntax

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-left 4s;

/* property name | duration | delay */
transition: margin-left 4s 1s;

/* property name | duration | timing function | delay */
transition: margin-left 4s ease-in-out 1s;

/* Apply to 2 properties */
transition:
  margin-left 4s,
  color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

Observe que a ordem é importante dentro dos itens nesta propriedade: o primeiro valor que pode ser analisado como tempo é atribuído ao {{cssxref("transition-duration")}}, duration e o segundo valor que pode ser analisado como tempo é atribuído ao {{cssxref("transition-delay")}}.

Veja [como as coisas são manipuladas](/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Quando_os_tamanhos_dos_valores_das_listas_das_propriedades_s%C3%A3o_de_tamanhos_diferentes) quando as listas de valores de propriedades não têm o mesmo comprimento. Em resumo, descrições de transição extras além do número de propriedades realmente sendo animadas são ignoradas.

### Formal syntax

{{csssyntax}}

## Examples

Existem vários outros exemplos de transições CSS incluídas no artigo principal sobre [CSS transitions](/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

## Specifications

| Specification                                                                      | Status                          | Comment            |
| ---------------------------------------------------------------------------------- | ------------------------------- | ------------------ |
| {{ SpecName('CSS3 Transitions', '#transition-shorthand-property', 'transition') }} | {{ Spec2('CSS3 Transitions') }} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.transition")}}

## See also

- [Using CSS transitions](/pt-BR/docs/CSS/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
