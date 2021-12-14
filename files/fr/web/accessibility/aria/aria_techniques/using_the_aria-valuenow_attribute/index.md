---
title: Utiliser l'attribut aria-valuenow
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-valuenow
---
L'attribut `aria-valuenow` est utilisé pour définir la valeur courante de l'intervalle d'un composant tel qu'un curseur, un bouton tournant (potentiomètre) ou une barre de progression. Si la valeur courante n'est pas connue, l'attribut `aria-valuenow` ne devrait pas être défini. Si `aria-valuenow` a des valeurs minimale et maximale connues, on devrait définir les attributs [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute).

Lorsque la valeur rendue ne peut être précisément représentée par un nombre, les développeuses et développeurs **DEVRAIENT** utiliser l'attribut [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute) en conjonction avec `aria-valuenow` pour fournir une représentation humainement lisible de la valeur courante. Par exemple, un curseur peut avoir des valeurs retournées comme `"petite"`, `"moyenne"` et `"grande"`. Dans ce cas, les valeurs de `aria-valuenow` peuvent varier de 1 à 3, ce qui indique la position de chaque valeur dans l'espace de valeurs, mais la valeur de [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute) sera l'une des chaînes : `"petite"`, `"moyenne"` ou `"grande"`.

L'attribut `aria-valuenow` est **obligatoire** pour les rôles [`slider`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role), [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_scrollbar_role) et [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_spinbutton_role).

## Valeur

Une chaîne de caractères qui représente le nombre.

## Effets possibles sur les agents utilisateurs et les technologies d'assistance

Pour les éléments possédant les rôles [`progressbar`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role) et [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_scrollbar_role), les technologies d'assistance **DEVRAIENT** renvoyer la valeur courante sous forme de pourcentage, calculée comme étant la position dans l'intervalle compris entre [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute) si les deux sont définies, sinon la valeur actuelle avec un pourcentage.

Pour les éléments possédant les rôles [`slider`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role) et [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_spinbutton_role), les technologies d'assistance **DEVRAIENT** retourner la valeur courante à l'utilisateur.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d'assistance devraient traiter cette technique. L'information fournie ci-dessus est l'une de ces opinions et n'est pas normative.

## Exemples

### Exemple 1

L'extrait de code ci-dessous affiche un curseur simple avec une valeur courante de 4.

```html
<div role="slider" aria-valuenow="4" aria-valuemin="1" aria-valuemax="10">
```

### Exemples concrets

- `progressbar`

  - [Deque Code Library of Accessibility Examples: Progress Bar (Bounded)](https://dequeuniversity.com/library/aria/progress-bar-bounded)
  - [Deque Code Library of Accessibility Examples: Progress Bar (Unbounded)](https://dequeuniversity.com/library/aria/progress-bar-unbounded)

- `slider`

  - [WAI-ARIA Authoring Practices: Horizontal Multi-Thumb Slider Example](https://w3c.github.io/aria-practices/examples/slider/multithumb-slider.html)
  - [Deque Code Library of Accessibility Examples: Slider](https://dequeuniversity.com/library/aria/slider)
  - [Deque Code Library of Accessibility Examples: Slider (Multirange)](https://dequeuniversity.com/library/aria/slider-multirange)

- `spinbutton`

  - [WAI-ARIA Authoring Practices: Date Picker Spin Button Example](https://w3c.github.io/aria-practices/examples/spinbutton/datepicker-spinbuttons.html)
  - [WAI-ARIA Authoring Practices: Toolbar Example](https://w3c.github.io/aria-practices/examples/toolbar/toolbar.html)

## Rôles ARIA concernés

- [`progressbar`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_scrollbar_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_spinbutton_role)

## Techniques ARIA connexes

- [aria-valuemax](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute) ;
- [aria-valuemin](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute) ;
- [aria-valuetext](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute).

## Compatibilité

À définir : ajouter les informations de prise en charge pour les combinaisons les plus courantes d'agents utilisateurs et de produits de technologies d'assistance.

## Autres ressources

- [Spécification WAI-ARIA pour l'attribut `aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow).
