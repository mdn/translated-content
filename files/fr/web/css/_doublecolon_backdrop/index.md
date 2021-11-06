---
title: '::backdrop'
slug: Web/CSS/::backdrop
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::backdrop
---
{{CSSRef}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-%C3%A9l%C3%A9ments) **`::backdrop`** est une boîte de la taille de la zone d'affichage (_viewport_) qui est affichée immédiatement sous un élément lorsque ce dernier est affiché en plein écran. Cela correspond aux éléments passés en plein écran via l'[API Fullscreen](/fr/docs/Web/API/Fullscreen_API) et aux éléments {{HTMLElement("dialog")}}.

Lorsque plusieurs éléments sont en plein écran, ce pseudo-élément est dessiné derrière l'élément qui est le plus en avant et par dessus les autres éléments.

```css
// Cette ombre n'est affichée que lorsque la boîte de dialogue
// est ouverte avec dialog.showModal()
dialog::backdrop {
  background: rgba(255,0,0,.25);
}
```

> **Note :** L'élément `::backdrop` peut être utilisé comme un arrière-plan/masque pour l'élément afin de cacher le document en-dessous lorsque l'élément est affiché en plein écran selon la spécification.

Ce pseudo-élément n'hérite d'aucun autre élément et aucun autre élément n'hérite de ce pseudo-élément. Aucune restriction ne s'applique pour les propriétés qui peuvent être appliquées à ce pseudo-élément.

## Syntaxe

{{CSSSyntax}}

## Exemples

Dans cet exemple, on indique que l'ombre derrière la vidéo en plein écran doit être bleu-gris plutôt que noire.

```css
video::backdrop {
  background-color: #448;
}
```

Voici le résultat obtenu :

![](bbb-backdrop.png)

On peut voir ici les bandes bleu-gris au dessus et en dessous de la vidéo alors que la zone est normalement noire.

Vous pouvez [voir cette démonstration en _live_](https://fullscreen-requestfullscreen-demo.glitch.me/) ou [voir et modifier le code sur Glitch](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo).

## Spécifications

| Spécification                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Fullscreen', '#::backdrop-pseudo-element', '::backdrop')}} | {{Spec2('Fullscreen')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.backdrop")}}

## Voir aussi

- La pseudo-classe {{cssxref(":fullscreen")}}
- L'élément HTML {{HTMLElement("dialog")}}
- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
