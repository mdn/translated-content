---
title: Utiliser l'attribut aria-valuetext
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuetext
---
### Description

L’attribut `aria-valuetext` est utilisé pour définir un texte alternatif, lisible par l'homme, de la valeur [`aria-valuenow`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow) d’un composant à intervalle tel qu’une barre de progression, un bouton rotatif `spinbutton` ou un curseur `slider`.

Les développeurs **DEVRAIENT** uniquement définir l’attribut `aria-valuetext` lorsque la valeur retournée ne peut pas être précisément représentée sous forme de nombre.

Par exemple, dans le cas d'un curseur qui peut retourner les valeurs `petite`, `moyenne`et `grand`, les valeurs de [`aria-valuenow`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow) pourraient aller de 1 à 3, indiquant ainsi la position de chaque valeur dans l’intervalle, mais la valeur de `aria-valuetext` sera l'une des chaînes suivantes&nbsp;: `petite`, `moyenne` ou `grande`.

### Valeurs

Représentation d’un nombre sous forme d'une chaîne

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Si l’attribut `aria-valuetext` est absent, les technologies d’assistance compteront uniquement sur l’attribut [`aria-valuenow`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow) pour la valeur courante. Si `aria-valuetext` est spécifié, les technologies d’assistance **DEVRAIENT** retourner cette valeur plutôt que celle de `aria-valuenow`.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;:

L’extrait de code ci-dessous montre un curseur simple de sélection d’un jour de la semaine. La valeur du curseur est numérique, et l’attribut `aria-valuetext` est utilisé pour fournir le nom de jour. L’application actualisera programmatiquement `aria-valuetext` selon la valeur de `aria-valuenow`.

```html
<div role="slider" aria-valuenow="1"
    aria-valuemin="1" aria-valuemax="7"
    aria-valuetext="Dimanche">
```

#### Exemples concrets&nbsp;:

### Notes

### Utilisé avec les rôles ARIA

- [progressbar](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_progressbar)&nbsp;;
- scrollbar&nbsp;;
- [slider](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider)
- spinbutton.

### Techniques ARIA connexes

- [aria-valuenow](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow).

### Autres ressources

- [Spécification WAI-ARIA pour l’attribut `aria-valuetext`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-valuetext).
