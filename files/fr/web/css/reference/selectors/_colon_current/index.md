---
title: :current
slug: Web/CSS/Reference/Selectors/:current
original_slug: Web/CSS/:current
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:current`** est une pseudo-classe dimensionnelle temporelle qui représente un élément ou l'ancêtre d'un élément qui est actuellement affiché. Par exemple, cette pseudo-classe peut être utilisée pour représenter une vidéo qui est affichée avec des sous-titres par [WebVTT](/fr/docs/Web/API/WebVTT_API).

```css
:current(p, span) {
  background-color: yellow;
}
```

## Syntaxe

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

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
  <track
    label="Français"
    kind="subtitles"
    srclang="fr"
    src="subtitles.vtt"
    default />
</video>
```

### WebVTT

```plain
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

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- [Format Web Video Text Tracks (WebVTT)](/fr/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
- Le module des [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
