---
title: Utiliser l'attribut aria-orientation
slug: >-
  orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute
---
### Description

Cette technique présente l’utilisation de l’attribut [aria-orientation](http://www.w3.org/TR/wai-aria/states_and_properties#aria-orientation).

L’attribut `aria-orientation` est utilisé pour indiquer si un élément est orienté verticalement ou horizontalement.

### Valeurs

Vocabulaire

- vertical
  - : L’élément est orienté verticalement.
- horizontal (défaut)
  - : L’élément est orienté horizontalement.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;:

L’extrait de code ci-dessous présente un curseur simple orienté verticalement.

```html
<a href="#" id="handle_zoomSlider"
  role="slider"
  aria-orientation="vertical"
  aria-valuemin="0"
  aria-valuemax="17"
  aria-valuenow="14" >
    <span>11</span>
</a>
```

### Notes

### Utilisé avec les rôles ARIA

- scrollbar&nbsp;;
- [slider](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_slider_role)&nbsp;;
- separator.

### Autres ressources

- [Spécification WAI-ARIA pour l’attribut `aria-orientation`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-orientation).
