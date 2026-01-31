---
title: :seeking
slug: Web/CSS/Reference/Selectors/:seeking
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:seeking`** représente un élément qui est lisible, tel que {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, lorsque l'élément lisible recherche une position de lecture dans la ressource multimédia.
Une ressource est considérée comme étant en cours de recherche si l'utilisateur·ice a demandé la lecture d'une position spécifique dans la ressource multimédia, mais que l'élément multimédia n'a pas encore atteint cette position.

La recherche est différente de {{CSSxRef(":buffering")}} en ce sens que l'élément multimédia ne charge pas actuellement de données, mais passe plutôt à une nouvelle position dans la ressource multimédia.
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

- La pseudo-classe {{CSSxRef(":buffering")}}
- La pseudo-classe {{CSSxRef(":muted")}}
- La pseudo-classe {{CSSxRef(":paused")}}
- La pseudo-classe {{CSSxRef(":playing")}}
- La pseudo-classe {{CSSxRef(":stalled")}}
- La pseudo-classe {{CSSxRef(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
