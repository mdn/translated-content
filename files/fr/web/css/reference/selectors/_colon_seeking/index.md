---
title: :seeking
slug: Web/CSS/Reference/Selectors/:seeking
original_slug: Web/CSS/:seeking
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:seeking`** représente un élément qui est lisible, tel que {{htmlelement("audio")}} ou {{htmlelement("video")}}, lorsque l'élément lisible recherche une position de lecture dans la ressource multimédia.
Une ressource est considérée comme étant en cours de recherche si l'utilisateur·ice a demandé la lecture d'une position spécifique dans la ressource multimédia, mais que l'élément multimédia n'a pas encore atteint cette position.

La recherche est différente de {{cssxref(":buffering")}} en ce sens que l'élément multimédia ne charge pas actuellement de données, mais passe plutôt à une nouvelle position dans la ressource multimédia.
Pour plus d'informations, consultez le guide [Mise en mémoire tampon, recherche et plages temporelles des médias](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable).

## Syntaxe

```css
:seeking {
  /* ... */
}
```

## Exemples

### CSS

```css
:seeking {
  outline: 5px solid red;
}

video:seeking {
  outline: 5px solid blue;
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
- {{cssxref(":playing")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
