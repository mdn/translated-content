---
title: :stalled
slug: Web/CSS/Reference/Selectors/:stalled
original_slug: Web/CSS/:stalled
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:stalled`** représente un élément qui est lisible, tel que {{htmlelement("audio")}} ou {{htmlelement("video")}}, lorsque la lecture est bloquée.
Une ressource est considérée comme étant bloquée si l'utilisateur·ice a demandé la lecture d'une position spécifique dans la ressource multimédia, mais qu'elle n'a pas réussi à recevoir de données pendant un certain temps.
Cela diffère de {{cssxref(":buffering")}} en ce sens que l'élément multimédia ne charge pas de données de manière inattendue lorsqu'il est bloqué (par exemple, en raison d'une erreur réseau) pendant environ 3 secondes (le temps exact dépend de l'[agent utilisateur](https://html.spec.whatwg.org/multipage/media.html#stall-timeout)).

> [!NOTE]
> Comme avec la pseudo-classe {{cssxref(":buffering")}}, l'élément est toujours considéré comme «&nbsp;en lecture&nbsp;» lorsqu'il est «&nbsp;bloqué&nbsp;».
> Si `:stalled` correspond à un élément, {{cssxref(":playing")}} correspondra également à cet élément.

## Syntaxe

```css
:stalled {
  /* ... */
}
```

## Exemples

### CSS

```css
:stalled {
  outline: 5px solid red;
}

audio:stalled {
  background-color: red;
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
- {{cssxref(":seeking")}}
- {{cssxref(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- L'événement [`stalled`](/fr/docs/Web/API/HTMLMediaElement/stalled_event)
