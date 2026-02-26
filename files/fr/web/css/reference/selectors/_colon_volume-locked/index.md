---
title: :volume-locked
slug: Web/CSS/Reference/Selectors/:volume-locked
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le sélecteur de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:volume-locked`** représente un élément capable de produire du son, tel que {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, mais pour lequel le volume de l'élément multimédia est actuellement «&nbsp;verrouillé&nbsp;» par l'utilisateur·ice.

Les agents utilisateurs peuvent définir les valeurs [`muted`](/fr/docs/Web/API/HTMLMediaElement/muted) ou [`volume`](/fr/docs/Web/API/HTMLMediaElement/volume) des médias en fonction des préférences de l'utilisateur·ice (par exemple, en mémorisant la dernière valeur définie entre les sessions, par site, ou autrement).
Un élément qui est `:volume-locked` ne peut pas être mis en sourdine, réactivé ou voir son volume modifié via JavaScript. Le statut verrouillé est une préférence du système d'exploitation ou de l'agent utilisateur.

## Syntaxe

```css
:volume-locked {
  /* ... */
}
```

## Exemples

### CSS

```css
:volume-locked {
  border: 5px solid green;
}

video:volume-locked {
  border: 5px solid aqua;
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
- La pseudo-classe {{CSSxRef(":seeking")}}
- La pseudo-classe {{CSSxRef(":stalled")}}
- Les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- La propriété [`volume`](/fr/docs/Web/API/HTMLMediaElement/volume) de l'objet {{DOMxRef("HTMLMediaElement")}}
