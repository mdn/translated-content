---
title: animation
slug: Web/CSS/animation
---

{{CSSRef}}

## Resumen

La propiedad `animation` de [CSS](/es/CSS) es una [propiedad abreviada (shorthand property)](/en/CSS/Shorthand_properties) para {{ cssxref("animation-name") }}, {{ cssxref("animation-duration") }}, {{ cssxref("animation-timing-function") }}, {{ cssxref("animation-delay") }}, {{ cssxref("animation-iteration-count") }} y {{ cssxref("animation-direction") }}.

La [lista de propiedades CSS que pueden ser animadas](/es/docs/CSS/Transiciones_de_CSS#Propiedades_que_pueden_ser_animadas)está disponible; cabe señalar que estas son las mismas propiedades soportadas por [CSS transitions](/es/docs/CSS/Transiciones_de_CSS).

{{cssinfo}}

## Sintaxis

```
Formal grammar:  [ <'animation-name'> || <'animation-duration'> || <'animation-timing-function'> || <'animation-delay'> ||
                    <'animation-iteration-count'> || <'animation-direction'> || <'animation-fill-mode'> ]
                  [, [<'animation-name'> || <'animation-duration'> || <'animation-timing-function'> || <'animation-delay'> ||
                      <'animation-iteration-count'> || <'animation-direction'> || <'animation-fill-mode'>] ]*
```

## Ejemplos

Consulte [CSS animations](/en/CSS/CSS_animations) para ver los ejemplos.

## Sobre Accesibilidad

Las animaciones titilantes e intermitentes pueden causar dificultades a las personas con discapacidades cognitivas como Trastorno por Déficit de Atención con Hiperactividad (ADHD) además de causar ataques a personas con cinestosis, epilepsia, migranias o síndrome de sensibilidad escotópica.

Por favor, considerá ofrecer un mecanismo para pausar o deshabilitar las animaciones, como utilizando [Reduced Motion Media Query.](/es/docs/Web/CSS/@media/prefers-reduced-motion)

Para más información (en inglés):

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulte también

- [Usando animaciones CSS](/es/docs/CSS/Using_CSS_animations)
- {{ domxref("AnimationEvent", "AnimationEvent") }}
