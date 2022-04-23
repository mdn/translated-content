---
title: Utiliser l'attribut aria-valuemax
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemax
---
### Description

Cette technique présente l’utilisation de l’attribut [aria-valuemax](http://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemax).

L’attribut `aria-valuemax` est utilisé pour définir la valeur maximale autorisée pour un composant à intervalle tels qu’une barre de progression `progressbar`, un bouton rotatif `spinbutton` ou un curseur `slider`. Si [`aria-valuenow`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow) a des valeurs minimale et maximale connues, le développeur devrait fournir les propriétés de `aria-valuemax` et [`aria-valuemin`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemin). La valeur de `aria-valuemax` **DOIT** être supérieure ou égale à celle de [`aria-valuemin`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemin).

`aria-valuemax` est un attribut **obligatoire** des rôles [slider](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider), [scrollbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_scrollbar) et [spinbutton](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_spinbutton).

### Valeurs

Représentation d’un nombre par une chaîne

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Si la valeur `aria-valuemax` n’est pas déterminée, ou si `aria-valuemin` n’est pas inférieure ou égale à la valeur de `aria-valuemax`, cela créera une condition d’erreur qui sera gérée par la technologie d’assistance.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1:

L’extrait de code ci-dessous montre un curseur basique avec une valeur maximale de 10.

```html
<div role="slider" aria-valuenow="4" aria-valuemin="1" aria-valuemax="10">
```

### Notes

### Utilisés avec les rôles ARIA

- [progressbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_progressbar)&nbsp;;
- [scrollbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_scrollbar)&nbsp;;
- [slider](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider)&nbsp;;
- [spinbutton](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_spinbutton).

### Techniques ARIA connexes

- [aria-valuemin](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemin)&nbsp;;
- [aria-valuenow](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow)&nbsp;;
- [aria-valuetext](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuetext).

### Autres ressources

- [Spécification WAI-ARIA pour l’attribut `aria-valuemax`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemax).
