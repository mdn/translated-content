---
title: "::cue"
slug: Web/CSS/::cue
---

{{CSSRef}}

Le pseudo-élément CSS **`::cue`** permet de cibler les indications textuelles [WebVTT](/fr/docs/Web/API/WebVTT_API) d'un élément. Ce pseudo-élément peut être utilisé afin de mettre en forme [les légendes et autres indications textuelles](/fr/docs/Web/API/WebVTT_API#styling_webtt_cues) pour les médias avec des pistes VTT.

```css
::cue {
  color: yellow;
  font-weight: bold;
}
```

## Propriétés autorisées

Seul un sous-ensemble des propriétés CSS peut être utilisé avec le pseudo-élément `::cue` :

- {{CSSxRef("background")}} et les propriétés détaillées associées
- {{CSSxRef("color")}}
- {{CSSxRef("font")}} et les propriétés détaillées associées
- {{CSSxRef("line-height")}}
- {{CSSxRef("opacity")}}
- {{CSSxRef("outline")}} et les propriétés détaillées associées
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration")}} et les propriétés détaillées associées
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("white-space")}}

Les propriétés sont appliquées à l'ensembles des indications (comme si celles-ci formaient un seul ensemble). Seule `background` (ou les propriétés raccourcies associées) s'appliquent à chaque indication séparément (afin d'éviter de créer des boîtes qui masqueraient de grandes zones sur le média).

## Syntaxe

{{csssyntax}}

## Exemples

La règle CSS suivante permet d'avoir les indications textuelles dans un texte blanc et sur un arrière-plan qui est une boîte noire transparent.

```css
::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Web Video Tracks Format (WebVTT)](/fr/docs/Web/API/WebVTT_API)
