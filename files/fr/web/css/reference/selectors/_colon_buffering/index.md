---
title: Pseudo-classe CSS `:buffering`
short-title: :buffering
slug: Web/CSS/Reference/Selectors/:buffering
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:buffering`** correspond à un élément qui peut être lu, tel que {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, lorsque l'élément lisible est en train de mettre en mémoire tampon une ressource multimédia.

Un élément est considéré comme étant en mémoire tampon lorsque cet élément ne peut pas continuer à lire parce qu'il essaie de charger des données multimédias mais n'a pas encore suffisamment de données pour commencer ou continuer la lecture.
Pour plus d'informations, consultez le guide [Mise en mémoire tampon, recherche et plages temporelles des médias](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

> [!NOTE]
> Un élément est toujours considéré comme {{CSSxRef(":playing")}} lorsqu'il est «&nbsp;en mémoire tampon&nbsp;».
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

- La pseudo-classe {{CSSxRef(":muted")}}
- La pseudo-classe {{CSSxRef(":paused")}}
- La pseudo-classe {{CSSxRef(":playing")}}
- La pseudo-classe {{CSSxRef(":seeking")}}
- La pseudo-classe {{CSSxRef(":stalled")}}
- La pseudo-classe {{CSSxRef(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
