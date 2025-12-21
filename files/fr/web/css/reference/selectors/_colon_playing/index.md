---
title: :playing
slug: Web/CSS/Reference/Selectors/:playing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
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

- La pseudo-classe {{CSSxRef(":buffering")}}
- La pseudo-classe {{CSSxRef(":muted")}}
- La pseudo-classe {{CSSxRef(":paused")}}
- La pseudo-classe {{CSSxRef(":seeking")}}
- La pseudo-classe {{CSSxRef(":stalled")}}
- La pseudo-classe {{CSSxRef(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
