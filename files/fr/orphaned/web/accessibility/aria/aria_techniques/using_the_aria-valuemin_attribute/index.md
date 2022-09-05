---
title: Utiliser l'attribut aria-valuemin
slug: >-
  orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute
---
### Description

L’attribut `aria-valuemin` est utilisé pour définir la valeur minimale autorisée pour un composant à intervalle tel qu’une barre de progression `progressbar`, un bouton rotatif `spinbutton` ou un curseur `slider`. Si [`aria-valuenow`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow) a des valeurs limites connues (minimum et maximum), le développeur devrait spécifier les propriétés de [`aria-valuemax`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemax) et `aria-valuemin`. La valeur de `aria-valuemin` **DOIT** être inférieure ou égale à celle de [`aria-valuemax`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemax).

`aria-valuemin` est un attribut **obligatoire** des rôles [slider](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider), [scrollbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_scrollbar) et [spinbutton](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_spinbutton).

### Valeurs

Représentation d’un nombre sous forme d'une chaîne

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Si `aria-valuemin` n’est pas inférieure ou égale à la valeur de `aria-valuemax`, cela créera une condition d’erreur qui sera gérée par la technologie d’assistance.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;:

L’extrait de code ci-dessous montre un curseur basique avec une valeur minimale de 1.

```html
<div role="slider" aria-valuenow="4" aria-valuemin="1" aria-valuemax="10">
```

### Notes

### Utilisé avec les rôles ARIA

- [progressbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_progressbar)&nbsp;;
- [scrollbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_scrollbar)&nbsp;;
- [slider](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider)&nbsp;;
- [spinbutton](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_spinbutton).

### Techniques ARIA connexes

- [aria-valuemax](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuemax)&nbsp;;
- [aria-valuenow](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow)&nbsp;;
- [aria-valuetext](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuetext).

### Autres ressources

- [Spécification WAI-ARIA pour l’attribut `aria-valuemin`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemin).
