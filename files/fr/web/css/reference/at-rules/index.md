---
title: Règles @ CSS
short-title: Règles @
slug: Web/CSS/Reference/At-rules
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Les **règles @** sont des [instructions CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#instructions_css) qui indiquent à CSS comment se comporter. Elles servent à regrouper et structurer des règles de style et d'autres règles @, à déclarer des informations de style non directement associées au contenu sélectionné, et à gérer des constructions syntaxiques telles que les imports et les mappages de mots-clés d'espaces de noms. Elles commencent par un arobase, `@` (U+0040 COMMERCIAL AT), suivi d'un identifiant.

## Index des règles @ et des descripteurs de règles @

- {{CSSxRef("@charset")}}
- {{CSSxRef("@color-profile")}}
- {{CSSxRef("@container")}}
- {{CSSxRef("@counter-style")}}
  - {{CSSxRef("@counter-style/additive-symbols")}}
  - {{CSSxRef("@counter-style/fallback")}}
  - {{CSSxRef("@counter-style/negative")}}
  - {{CSSxRef("@counter-style/pad")}}
  - {{CSSxRef("@counter-style/prefix")}}
  - {{CSSxRef("@counter-style/range")}}
  - {{CSSxRef("@counter-style/speak-as")}}
  - {{CSSxRef("@counter-style/suffix")}}
  - {{CSSxRef("@counter-style/symbols")}}
  - {{CSSxRef("@counter-style/system")}}
- {{CSSxRef("@document")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
- {{CSSxRef("@font-face")}}
  - {{CSSxRef("@font-face/ascent-override")}}
  - {{CSSxRef("@font-face/descent-override")}}
  - {{CSSxRef("@font-face/font-display")}}
  - {{CSSxRef("@font-face/font-family")}}
  - {{CSSxRef("@font-face/font-feature-settings")}}
  - {{CSSxRef("@font-face/font-stretch")}}
  - {{CSSxRef("@font-face/font-style")}}
  - {{CSSxRef("@font-face/font-variation-settings")}}
  - {{CSSxRef("@font-face/font-weight")}}
  - {{CSSxRef("@font-face/line-gap-override")}}
  - {{CSSxRef("@font-face/size-adjust")}}
  - {{CSSxRef("@font-face/src")}}
  - {{CSSxRef("@font-face/unicode-range")}}
- {{CSSxRef("@font-feature-values")}}
  - {{CSSxRef("@font-feature-values/font-display")}}
- {{CSSxRef("@font-palette-values")}}
  - {{CSSxRef("@font-palette-values/base-palette")}}
  - {{CSSxRef("@font-palette-values/font-family")}}
  - {{CSSxRef("@font-palette-values/override-colors")}}
- {{CSSxRef("@function")}} {{Experimental_Inline}}
- {{CSSxRef("@import")}}
- {{CSSxRef("@keyframes")}}
- {{CSSxRef("@layer")}}
- {{CSSxRef("@media")}} (voir [liste des fonctionnalités média](#index_des_fonctionnalités_média) dans la section suivante)
- {{CSSxRef("@namespace")}}
- {{CSSxRef("@page")}}
  - {{CSSxRef("@page/page-orientation")}}
  - {{CSSxRef("@page/size")}}
- {{CSSxRef("@position-try")}}
- {{CSSxRef("@property")}}
  - {{CSSxRef("@property/inherits")}}
  - {{CSSxRef("@property/initial-value")}}
  - {{CSSxRef("@property/syntax")}}
- {{CSSxRef("@scope")}}
- {{CSSxRef("@starting-style")}}
- {{CSSxRef("@supports")}}
- {{CSSxRef("@view-transition")}}

## Index des fonctionnalités média

- {{CSSxRef("@media/-moz-device-pixel-ratio")}}
- {{CSSxRef("@media/-webkit-animation")}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio")}}
- {{CSSxRef("@media/-webkit-transform-2d")}}
- {{CSSxRef("@media/-webkit-transform-3d")}}
- {{CSSxRef("@media/-webkit-transition")}}
- {{CSSxRef("@media/any-hover")}}
- {{CSSxRef("@media/any-pointer")}}
- {{CSSxRef("@media/aspect-ratio")}}
- {{CSSxRef("@media/color")}}
- {{CSSxRef("@media/color-gamut")}}
- {{CSSxRef("@media/color-index")}}
- {{CSSxRef("@media/device-aspect-ratio")}}
- {{CSSxRef("@media/device-height")}}
- {{CSSxRef("@media/display-mode")}}
- {{CSSxRef("@media/dynamic-range")}}
- {{CSSxRef("@media/forced-colors")}}
- {{CSSxRef("@media/grid")}}
- {{CSSxRef("@media/height")}}
- {{CSSxRef("@media/horizontal-viewport-segments")}}
- {{CSSxRef("@media/hover")}}
- {{CSSxRef("@media/inverted-colors")}}
- {{CSSxRef("@media/monochrome")}}
- {{CSSxRef("@media/orientation")}}
- {{CSSxRef("@media/overflow-block")}}
- {{CSSxRef("@media/overflow-inline")}}
- {{CSSxRef("@media/pointer")}}
- {{CSSxRef("@media/prefers-color-scheme")}}
- {{CSSxRef("@media/prefers-contrast")}}
- {{CSSxRef("@media/prefers-reduced-data")}}
- {{CSSxRef("@media/prefers-reduced-motion")}}
- {{CSSxRef("@media/prefers-reduced-transparency")}}
- {{CSSxRef("@media/resolution")}}
- {{CSSxRef("@media/scan")}}
- {{CSSxRef("@media/scripting")}}
- {{CSSxRef("@media/shape")}}
- {{CSSxRef("@media/update")}}
- {{CSSxRef("@media/vertical-viewport-segments")}}
- {{CSSxRef("@media/video-dynamic-range")}}
- {{CSSxRef("@media/width")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Fonctions des règles @ CSS](/fr/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [Imbrication des règles @](/fr/docs/Web/CSS/Guides/Nesting/At-rules)
- Le module de [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax)
- Le module des [Règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
