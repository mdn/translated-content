---
title: Améliorations SVG dans Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: fff0462a1f0cdd479b62808e810e9fd030622c8e
---

{{FirefoxSidebar}}

La prise en charge de [SVG](/fr/docs/Web/SVG) est améliorée dans Firefox 3. Cet article fournit la liste des fonctionnalités (documentées par ailleurs) des fonctionnalités ajoutées à Firefox 3.

- Prise en charge de l'élément `foreignObject` (voir [le bogue 326966](https://bugzilla.mozilla.org/show_bug.cgi?id=326966)). Pour plus de détails, consultez [la spécification](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) ou [cet article](https://robert.ocallahan.org/2006/06/future-is-now_20.html).
- Prise en charge de l'élément `pattern` ([spécification](https://www.w3.org/TR/SVG11/pservers.html#PatternElement))
- Prise en charge de l'élément `mask` ([spécification](https://www.w3.org/TR/SVG11/masking.html#MaskElement))
- Prise en charge de l'ensemble des filtres SVG 1.1 ([spécification](https://www.w3.org/TR/SVG11/filters.html))&nbsp;:

  - `filter`
  - `feDistantLight`
  - `fePointLight`
  - `feSpotLight`
  - `feBlend`
  - `feColorMatrix`
  - `feConvolveMatrix`
  - `feComponentTransfer`, `feFuncR`, `feFuncG`, `feFuncB`, `feFuncA`
  - `feComposite`
  - `feConvolveMatrix`
  - `feDiffuseLighting`
  - `feDisplacementMap`
  - `feDistantLight`
  - `feFlood`
  - `feGaussianBlur`
  - `feImage`
  - `feMerge`, `feMergeNode`
  - `feMorphology`
  - `feOffset`
  - `fePointLight`
  - `feSpecularLighting`
  - `feTurbulence`
  - `feTile`

- Correction de plusieurs bogues pour la gestion de l'élément `<a>` en SVG&nbsp;: [267664](https://bugzilla.mozilla.org/show_bug.cgi?id=267664), [268135](https://bugzilla.mozilla.org/show_bug.cgi?id=268135), [316248](https://bugzilla.mozilla.org/show_bug.cgi?id=316248), [317270](https://bugzilla.mozilla.org/show_bug.cgi?id=317270), et [320724](https://bugzilla.mozilla.org/show_bug.cgi?id=320724).
- Implémentation des méthodes du DOM SVG `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()`, et `getCharNumAtPosition()`.
- Prise en charge de l'attribut `xml:space` ([spécification](https://www.w3.org/TR/SVG/text.html#WhiteSpace))
- Prise en charge pour les alternatives `fill`/`stroke` ([spécification](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- Prise en charge des unités `em` et `ex` units pour indiquer des longueurs ([305859](https://bugzilla.mozilla.org/show_bug.cgi?id=305859)).

## Voir aussi

- [SVG](/fr/docs/Web/SVG)
- [Notes de version de Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
