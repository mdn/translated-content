---
title: :buffering
slug: Web/CSS/Reference/Selectors/:buffering
original_slug: Web/CSS/:buffering
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:buffering`** correspond à un élément qui peut être lu, tel que {{htmlelement("audio")}} ou {{htmlelement("video")}}, lorsque l'élément lisible est en train de mettre en mémoire tampon une ressource multimédia.

Un élément est considéré comme étant en mémoire tampon lorsque cet élément ne peut pas continuer à lire parce qu'il essaie de charger des données multimédias mais n'a pas encore suffisamment de données pour commencer ou continuer la lecture.
Pour plus d'informations, consultez le guide [Mise en mémoire tampon, recherche et plages temporelles des médias](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Un élément est toujours considéré comme {{cssxref(":playing")}} lorsqu'il est «&nbsp;en mémoire tampon&nbsp;».
> Si `:buffering` trouve un élément, `:playing` trouvera également à cet élément.

## Syntaxe

```css
:buffering {
  /* ... */
}
```

## Exemples

### CSS

```css
:buffering {
  outline: 5px solid red;
}

video:buffering {
  outline: 5px solid blue;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
