---
title: animate
slug: Web/SVG/Element/animate
---

{{SVGRef}}

O elemento SVG **`<animate>`** fornece uma maneira de animar um atributo de um elemento ao longo do tempo.

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="https://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Attributes

### Animation Attributes

- [Animation timing attributes](/docs/Web/SVG/Attribute#Animation_Timing_Attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Animation value attributes](/docs/Web/SVG/Attribute#Animation_Value_Attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [Other Animation attributes](/docs/Web/SVG/Attribute#Animation_Attributes)
  - : Most notably: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [Animation event attributes](/docs/Web/SVG/Attribute/Events#Animation_Event_Attributes)
  - : Most notably: {{SVGAttr("onbegin")}}, {{SVGAttr("onend")}}, {{SVGAttr("onrepeat")}}

### Global attributes

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- Event Attributes
  - : [Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Document element event attributes](/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)

## Usage notes

This element implements the {{domxref("SVGAnimateElement")}} interface.

## Accessibility concerns

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation, as well as using the [Reduced Motion Media Query](/pt-BR/docs/Web/CSS/@media/prefers-reduced-motion) to create a complimentary experience for users who have expressed a preference for no animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Specifications

| Specification                                                            | Status                        | Comment            |
| ------------------------------------------------------------------------ | ----------------------------- | ------------------ |
| {{SpecName("SVG Animations 2", "#AnimateElement", "&lt;animate&gt;")}}   | {{Spec2("SVG Animations 2")}} | No change          |
| {{SpecName("SVG1.1", "animate.html#AnimateElement", "&lt;animate&gt;")}} | {{Spec2("SVG1.1")}}           | Initial definition |

## Compatibilidade com navegadores

{{Compat("svg.elements.animate")}}
