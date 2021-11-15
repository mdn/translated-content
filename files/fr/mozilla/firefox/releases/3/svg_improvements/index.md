---
title: Améliorations SVG dans Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
tags:
  - Firefox 3
  - SVG
translation_of: Mozilla/Firefox/Releases/3/SVG_improvements
original_slug: Améliorations_SVG_dans_Firefox_3
---
{{FirefoxSidebar}}

Firefox 3 offre un support [SVG](fr/SVG) amélioré par rapport aux versions précédentes de Firefox. Ces fonctionnalités sont documentés ailleurs, et cet article fournit une liste pratique permettant de déterminer lesquelles ont été ajoutées dans Firefox 3.

- support de l'élément [foreignObject](http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) ({{ Bug(326966) }}, [voir aussi](http://weblogs.mozillazine.org/roc/archives/2006/06/the_future_is_now.html))
- support de l'élément `pattern` ([spécification](http://www.w3.org/TR/SVG11/pservers.html#PatternElement))
- support de l'élément `mask` ([spécification](http://www.w3.org/TR/SVG11/masking.html#MaskElement))
- support de tous les filtres SVG 1.1 ([spécification](http://www.w3.org/TR/SVG11/filters.html))

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

- L'élément `<a>` géré dans SVG comportent plusieurs bogues résolus : consultez {{ Bug(267664) }}, {{ Bug(268135) }}, {{ Bug(316248) }}, {{ Bug(317270) }} et {{ Bug(320724) }}.
- Les méthodes DOM SVG `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()`, et `getCharNumAtPosition()` ont été implentées.
- support de l'attribut `xml:space` ([spécification](http://www.w3.org/TR/SVG/text.html#WhiteSpace))
- Les transitions `fill`/`stroke` sont à présent supportées ([spécification](http://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- Les unités `em` et `ex` sont à présent supportées pour l'indication de longueurs ({{ Bug(305859) }}).

### Voir également

- [SVG](fr/SVG)
- [SVG dans Firefox](fr/SVG_dans_Firefox)
- [Firefox 3 pour les développeurs](fr/Firefox_3_pour_les_d%c3%a9veloppeurs)
