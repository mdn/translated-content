---
title: <animate>
slug: Web/SVG/Element/animate
---

{{SVGRef}}

L'élément SVG **`<animate>`** permet d'animer un attribut d'un élément au fil du temps.

## Exemple

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
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('', 150, '100%')}}

## Attributs

### Attributs d'animation

- [Attribut pour le minutage d'une animation](/fr/docs/Web/SVG/Attribute#timing_de_lanimation)
  - [`begin`](/fr/docs/Web/SVG/Attribute/begin)
  - [`dur`](/fr/docs/Web/SVG/Attribute/dur)
  - [`end`](/fr/docs/Web/SVG/Attribute/end)
  - [`min`](/fr/docs/Web/SVG/Attribute/min)
  - [`max`](/fr/docs/Web/SVG/Attribute/max)
  - [`restart`](/fr/docs/Web/SVG/Attribute/restart)
  - [`repeatCount`](/fr/docs/Web/SVG/Attribute/repeatCount)
  - [`repeatDur`](/fr/docs/Web/SVG/Attribute/repeatDur)
  - [`fill`](/fr/docs/Web/SVG/Attribute/fill)
- [Attributs de valeur pour une animation](/fr/docs/Web/SVG/Attribute#valeurs_de_lanimation)
  - [`calcMode`](/fr/docs/Web/SVG/Attribute/calcMode)
  - [`values`](/fr/docs/Web/SVG/Attribute/values)
  - [`keyTimes`](/fr/docs/Web/SVG/Attribute/keyTimes)
  - [`keySplines`](/fr/docs/Web/SVG/Attribute/keySplines)
  - [`from`](/fr/docs/Web/SVG/Attribute/from)
  - [`to`](/fr/docs/Web/SVG/Attribute/to)
  - [`by`](/fr/docs/Web/SVG/Attribute/by)
- [Autres attributs relatifs aux animations](/fr/docs/Web/SVG/Attribute#attributs_danimation)
  - [`attributeName`](/fr/docs/Web/SVG/Attribute/attributeName)
  - [`additive`](/fr/docs/Web/SVG/Attribute/additive)
  - [`accumulate`](/fr/docs/Web/SVG/Attribute/accumulate)
- [Attributs pour les évènements relatifs aux animations](/fr/docs/Web/SVG/Attribute/Events#événements_danimation)
  - [`onbegin`](/fr/docs/Web/SVG/Attribute/onbegin)
  - [`onend`](/fr/docs/Web/SVG/Attribute/onend)
  - [`onrepeat`](/fr/docs/Web/SVG/Attribute/onrepeat)

### Attributs universels

- [Attributs fondamentaux](/fr/docs/Web/SVG/Attribute/Core)
  - [`id`](/fr/docs/Web/SVG/Attribute/id)
- [Attributs de mise en forme](/fr/docs/Web/SVG/Attribute/Styling)
  - [`class`](/fr/docs/Web/SVG/Attribute/class)
  - [`style`](/fr/docs/Web/SVG/Attribute/style)
- [Attributs relatifs aux évènements](/fr/docs/Web/SVG/Attribute#attributs_dévénement)
  - [Attributs pour les évènements universels](/fr/docs/Web/SVG/Attribute/Events#attributs_dévénement_globaux)
  - [Attributs pour les évènements des éléments du document](/fr/docs/Web/SVG/Attribute/Events#attributs_dévénement_des_éléments_du_document)

## Notes d'utilisation

Cet élément implémente l'interface [`SVGAnimateElement`](/fr/docs/Web/API/SVGAnimateElement).

## Accessibilité

Les animations de clignotement ou de flash peuvent être problématiques pour les personnes avec des troubles de l'attention. De plus, certains types de mouvement peuvent déclencher des troubles vestibulaires, des crises d'épilepsie, des migraines ou une sensibilité scotopique.

Veillez à fournir un mécanisme pour suspendre ou désactiver les animations, par exemple en utilisant [la caractéristique média `@prefers-reduced-motion`](/fr/docs/Web/CSS/@media/prefers-reduced-motion) pour proposer une expérience alternative aux personnes qui ont exprimé une préférence pour l'absence d'animations.

- [Concevoir des animations web plus sûres, tenant compte de la sensibilité aux mouvements, un article <i lang="en">A List Apart</i> (en anglais)](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Une introduction aux requêtes média pour la réduction des mouvements sur CSS-Tricks (en anglais)](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Conception adaptative et gestion du mouvement sur le blog WebKit (en anglais)](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [Guide MDN pour la compréhension de la règle 2.2 du WCAG](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Comprendre le critère de réussite 2.2.2, un guide du W3C pour la compréhension de WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
