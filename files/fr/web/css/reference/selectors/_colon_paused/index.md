---
title: :paused
slug: Web/CSS/Reference/Selectors/:paused
original_slug: Web/CSS/:paused
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:paused`** représente un élément pouvant être lu, tel que {{htmlelement("audio")}} ou {{htmlelement("video")}}, lorsque cet élément est «&nbsp;en pause&nbsp;» (c'est-à-dire qu'il n'est pas «&nbsp;en cours de lecture&nbsp;»).

Une ressource est mise en pause si l'utilisateur·ice l'a explicitement mise en pause, ou si elle est dans un état non activé ou autre état de non-lecture, tel que «&nbsp;chargée, mais pas encore activée&nbsp;». Cela diffère des états `:buffering` ou `:stalled`, qui surviennent alors que la ressource est considérée comme «&nbsp;en cours de lecture&nbsp;».

## Syntaxe

```css
:paused {
  /* ... */
}
```

## Exemples

### CSS

```css
:paused {
  border: 5px solid orange;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
