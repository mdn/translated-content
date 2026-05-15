---
title: <set>
slug: Web/SVG/Reference/Element/set
page-type: svg-element
browser-compat: svg.elements.set
sidebar: svgref
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

L'élément **`<set>`** [SVG](/fr/docs/Web/SVG) fournit une méthode permettant de définir la valeur d'un attribut pour une durée déterminée.

Il prend en charge tous les types d'attributs, y compris ceux qui ne peuvent pas raisonnablement être interpolés, comme les valeurs de type chaîne de caractères ou booléen. Pour les attributs qui peuvent raisonnablement être interpolés, l'élément {{SVGElement('animate')}} est généralement préféré.

> [!NOTE]
> L'élément `<set>` est non additif. Les attributs {{SVGAttr('additive')}} et {{SVGAttr('accumulate')}} ne sont pas autorisés et seront ignorés s'ils sont spécifiés.

## Contexte d'utilisation

{{svginfo}}

## Attributs

- {{SVGAttr("to")}}
  - : Cet attribut définit la valeur à appliquer à l'attribut cible pendant la durée de l'animation. La valeur doit correspondre aux exigences de l'attribut cible.
    _Type de valeur_&nbsp;: [**\<anything>**](/fr/docs/Web/SVG/Guides/Content_type#anything)&nbsp;; _Valeur par défaut_&nbsp;: aucune&nbsp;; _Animable_&nbsp;: **non**

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGSetElement")}}.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      cursor: pointer;
    }
    .round {
      rx: 5px;
      fill: green;
    }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Attribut {{SVGAttr("attributeName")}}
- [Attributs de minutage d'animation](/fr/docs/Web/SVG/Reference/Attribute#animation_timing_attributes), dont {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}} et {{SVGAttr("fill")}}.
- {{SVGElement("animate")}}
