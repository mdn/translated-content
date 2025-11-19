---
title: :muted
slug: Web/CSS/Reference/Selectors/:muted
original_slug: Web/CSS/:muted
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:muted`** représente un élément capable de produire du son, tel que {{htmlelement("audio")}} ou {{htmlelement("video")}}, mais qui est muet (silencieux de force).

La pseudo-classe `:muted` est différente de {{cssxref(":volume-locked")}} en ce sens que l'auteur·ice de la page a le contrôle sur la possibilité de couper ou de rétablir le son d'un élément multimédia.
Les agents utilisateurs peuvent définir la valeur `muted` des médias en fonction des préférences d'utilisation (par exemple, en mémorisant la dernière valeur définie entre les sessions, sur une base par site, ou autrement).
Un élément qui est `:volume-locked` ne peut pas être coupé, rétabli ou avoir son volume modifié via JavaScript en raison d'une préférence du système d'exploitation ou de l'agent utilisateur.

## Syntaxe

```css
:muted {
  /* ... */
}
```

## Exemples

### CSS

```css
:muted {
  outline: 5px solid red;
}

video:muted {
  outline: 5px solid blue;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":buffering")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- Propriété [`muted`](/fr/docs/Web/API/HTMLMediaElement/muted) des objets {{domxref("HTMLMediaElement")}}
