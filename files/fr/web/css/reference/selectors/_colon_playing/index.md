---
title: :playing
slug: Web/CSS/Reference/Selectors/:playing
original_slug: Web/CSS/:playing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:playing`** est une pseudo-classe d'état d'une ressource audio, vidéo ou autre type de ressource capable d'être lue ou mise en pause lorsque cet élément est lu.
Une ressource est lue même si elle se trouve en mémoire tampon ou mise en pause pour une raison autre que l'interaction du visiteur qui aurait déclenché sa mise en pause.

## Syntaxe

```css
:playing {
  /* ... */
}
```

## Exemples

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
