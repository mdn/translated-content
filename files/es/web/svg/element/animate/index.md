---
title: <animate>
slug: Web/SVG/Element/animate
---

{{SVGRef}}El elemento `animate` de SVG se utiliza para animar un atributo o propiedad a través del tiempo. Normalmente se inserta dentro del elemento o referenciado con el atributo `href`.

## Contexto de uso

{{svginfo}}

## Atributos

### Atributos globales

- [Conditional processing attributes](/es/docs/Web/SVG/Attribute#Conditional_processing_attributes) »
- [Core attributes](/es/docs/Web/SVG/Attribute#Core_attributes) »
- [Animation event attributes](/es/docs/Web/SVG/Attribute#Animation_event_attributes) »
- [Xlink attributes](/es/docs/Web/SVG/Attribute#XLink_attributes) »
- [Animation attribute target attributes](/es/docs/Web/SVG/Attribute#AnimationAttributeTarget) »
- [Animation timing attributes](/es/docs/Web/SVG/Attribute#Animation_timing_attributes) »
- [Animation value attributes](/es/docs/Web/SVG/Attribute#Animation_value_attributes) »
- [Animation addition attributes](/es/docs/Web/SVG/Attribute#Animation_addition_attributes) »
- {{SVGAttr("externalResourcesRequired")}}

### Atributos específicos

- {{SVGAttr("attributeName")}}
- {{SVGAttr("attributeType")}}
- {{SVGAttr("from")}}
- {{SVGAttr("to")}}
- {{SVGAttr("dur")}}
- {{SVGAttr("repeatCount")}}

## DOM

Este elemento implementa la interfaz de [`SVGAnimateElement`](/es/docs/Web/DOM/SVGAnimateElement).

## Ejemplo

### SVG

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="x"
      from="-100"
      to="120"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

### Result

{{EmbedLiveSample("Ejemplo", 120, 120)}}

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
