---
title: :paused
slug: Web/CSS/Reference/Selectors/:paused
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:paused`** représente un élément pouvant être lu, tel que {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, lorsque cet élément est «&nbsp;en pause&nbsp;» (c'est-à-dire qu'il n'est pas «&nbsp;en cours de lecture&nbsp;»).

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

- La pseudo-classe {{CSSxRef(":buffering")}}
- La pseudo-classe {{CSSxRef(":muted")}}
- La pseudo-classe {{CSSxRef(":playing")}}
- La pseudo-classe {{CSSxRef(":seeking")}}
- La pseudo-classe {{CSSxRef(":stalled")}}
- La pseudo-classe {{CSSxRef(":volume-locked")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
