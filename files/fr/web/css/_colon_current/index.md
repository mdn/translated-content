---
title: ':current'
slug: Web/CSS/:current
translation_of: Web/CSS/:current
browser-compat: css.selectors.current
---
{{CSSRef}}

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:current`** est une pseudo-classe agissant dans la dimension temporelle et représentant l'élément actuellement affiché, ou un ancêtre de cet élément. Ce sélecteur peut par exemple servir dans le cas d'une vidéo ayant des sous-titres affichés à l'aide du format [WebVTT](/fr/docs/Web/API/WebVTT_API).

```css
:current(p, span) {
  background-color: yellow;
}
```

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track label="Français" kind="subtitles" srclang="fr" src="subtitles.vtt" default>
</video>
```

### WebVTT

    FICHIER WEBVTT

    1
    00:00:03.500 --> 00:00:05.000
    Voici le premier sous-titre

    2
    00:00:06.000 --> 00:00:09.000
    Voici le second sous-titre

    3
    00:00:11.000 --> 00:00:19.000
    Voici le troisième sous-titre

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Web Video Text Tracks Format (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
