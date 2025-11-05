---
title: ::view-transition
slug: Web/CSS/Reference/Selectors/::view-transition
original_slug: Web/CSS/::view-transition
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::view-transition`** représente la racine de la superposition des [transitions de vue](/fr/docs/Web/API/View_Transition_API), qui contient tous les groupes de vue instantanées de transition de vue et se trouve au-dessus de tout le reste du contenu de la page.

Lors d'une transition de vue, `::view-transition` est inclus dans l'arbre des pseudo-éléments associés comme expliqué dans [L'arbre des pseudo-éléments de transition de vue](/fr/docs/Web/API/View_Transition_API/Using#larbre_des_pseudo-éléments_de_transition_de_vue). C'est le nœud de niveau supérieur de cet arbre, et il a un ou plusieurs {{cssxref("::view-transition-group()")}} comme enfants.

`::view-transition` reçoit le style par défaut suivant dans la feuille de style de l'agent utilisateur&nbsp;:

```css
:root::view-transition {
  position: fixed;
  inset: 0;
}
```

Tous les pseudo-éléments {{cssxref("::view-transition-group()")}} sont positionnés par rapport à la racine de la transition de vue.

## Syntaxe

```css
::view-transition {
  /* ... */
}
```

## Exemples

```css
::view-transition {
  background-color: rgb(0 0 0 / 25%);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API de transition de vue](/fr/docs/Web/API/View_Transition_API)
- [Transitions fluides avec l'API de transition de vue <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/view-transitions/)
