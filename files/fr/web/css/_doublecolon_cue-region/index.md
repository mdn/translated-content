---
title: "::cue-region"
slug: Web/CSS/::cue-region
---

{{CSSRef}}{{SeeCompatTable}}

Le pseudo-élément CSS **`::cue-region`** correspond à une piste {{DOMxRef("WebVTT API", "WebVTT", "", 1)}} de l'élément ciblé. Il peut être utilisé afin de [mettre en forme des sous-titres et autres indications textuelles](/fr/docs/Web/API/WebVTT_API#Styling_WebTT_cues) de pistes VTT.

```css
::cue-region {
  color: yellow;
  font-weight: bold;
}
```

## Propriétés autorisées

Les règles utilisant `::cue-region` sont limitées aux propriétés CSS suivantes :

- {{CSSxRef("background")}} ainsi que les propriétés détaillées correspondantes
- {{CSSxRef("color")}}
- {{CSSxRef("font")}} ainsi que les propriétés détaillées correspondantes
- {{CSSxRef("line-height")}}
- {{CSSxRef("opacity")}}
- {{CSSxRef("outline")}} ainsi que les propriétés détaillées correspondantes
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration")}} ainsi que les propriétés détaillées correspondantes
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("white-space")}}

Les propriétés sont appliquées à l'intégralité des indications textuelles comme si celles-ci formaient une seule unité. La seulle exception à ce comportement est l'application de `background` (et/ou des propriétés détaillées correspondantes) : cette propriété s'applique distinctement à chaque partie du texte séparément afin d'éviter de masquer ou d'obscurcir de grandes zones de texte sur le média.

## Syntaxe

{{CSSSyntax}}

## Exemples

> **Note :** Un exemple doit être construit pour cette page, n'hésitez pas à le faire sur la version anglaise d'abord avant de le reporter ici.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres sélecteurs {{DOMxRef("WebVTT API", "WebVTT", "", 1)}} :

  - {{CSSxRef("::cue")}}
  - {{CSSxRef(":past")}}
  - {{CSSxRef(":future")}}
