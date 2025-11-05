---
title: :past
slug: Web/CSS/Reference/Selectors/:past
original_slug: Web/CSS/:past
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:past`** est une pseudo-classe temporelle qui correspondra à tout élément apparaissant entièrement avant un élément correspondant à {{cssxref(":current")}}. Par exemple, dans une vidéo avec des sous-titres affichés par [WebVTT](/fr/docs/Web/API/WebVTT_API).

```css
:past(p, span) {
  display: none;
}
```

## Syntaxe

```css
:past {
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
:past(p, span) {
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

- [Format des pistes de texte vidéo Web (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- {{cssxref(":current")}}
- {{cssxref(":future")}}
