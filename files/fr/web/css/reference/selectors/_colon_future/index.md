---
title: :future
slug: Web/CSS/Reference/Selectors/:future
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:future`** agit dans la dimension temporelle qui cible n'importe quel élément apparaissant entièrement après un élément correspondant à {{CSSxRef(":current")}}. Ce sélecteur peut par exemple servir dans le cas d'une vidéo ayant des sous-titres affichés à l'aide du format [WebVTT](/fr/docs/Web/API/WebVTT_API).

```css
:future(p, span) {
  display: none;
}
```

## Syntaxe

```css
:future {
  /* ... */
}
```

## Exemples

### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="Français"
    kind="subtitles"
    srclang="fr"
    src="subtitles.vtt"
    default />
</video>
```

### CSS

```css
:future(p, span) {
  display: none;
}
```

### WebVTT

```
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
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Format Web Video Text Tracks (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- La pseudo-classe {{CSSxRef(":current")}}
- La pseudo-classe {{CSSxRef(":past")}}
