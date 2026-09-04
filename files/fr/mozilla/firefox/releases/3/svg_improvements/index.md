---
title: Améliorations SVG dans Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 3 offre une prise en charge améliorée du format [Scalable Vector Graphics](/fr/docs/Web/SVG) (SVG) par rapport aux versions précédentes de Firefox. Bien que ces fonctionnalités soient documentées ailleurs, cet article sert de liste pratique pour que vous puissiez facilement déterminer quelles fonctionnalités ont été ajoutées dans Firefox 3.

- L'élément {{SVGElement("foreignObject")}} est désormais pris en charge ([bogue Firefox 326966 <sup>(angl.)</sup>](https://bugzil.la/326966)).
- L'élément {{SVGElement("pattern")}} est désormais pris en charge.
- L'élément {{SVGElement("mask")}} est désormais pris en charge.
- La prise en charge de tous les [filtres](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects) SVG 1.1 a été ajoutée&nbsp;:
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
- La gestion de l'élément HTML `<a>` en SVG a été corrigée pour plusieurs bogues&nbsp;; voir [bogue Firefox 267664 <sup>(angl.)</sup>](https://bugzil.la/267664), [bogue WebKit 268135 <sup>(angl.)</sup>](https://bugzil.la/268135), [bogue WebKit 316248 <sup>(angl.)</sup>](https://bugzil.la/316248), [bogue WebKit 317270 <sup>(angl.)</sup>](https://bugzil.la/317270) et [bogue WebKit 320724 <sup>(angl.)</sup>](https://bugzil.la/320724).
- Les méthodes du DOM SVG `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()` et `getCharNumAtPosition()` ont été implémentées.
- L'attribut [`xml:space`](/fr/docs/Web/SVG/Reference/Attribute/xml:space) est désormais pris en charge.
- Les alternatives `fill`/`stroke` sont désormais prises en charge.
- Les unités `em` et `ex` sont désormais prises en charge pour indiquer des longueurs ([bogue Firefox 305859 <sup>(angl.)</sup>](https://bugzil.la/305859)).

## Voir aussi

- [SVG](/fr/docs/Web/SVG)
- [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
