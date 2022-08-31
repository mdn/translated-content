---
title: Utiliser l'attribut aria-label
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
  - aria-label
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
---
L’attribut `aria-label` est utilisé pour définir une légende non-visible associée à un élément HTML dont le sens est transmis uniquement par le visuel. Par exemple, une croix pour fermer une fenêtre modale.

## Contexte

Pour la plupart des usagers, le contexte et l'apparence d'un élément suffisent à déterminer son rôle. Par exemple, une croix pour fermer une fenêtre modale ou une icône de hamburger pour ouvrir un menu.

En revanche, certains usagers tels que les aveugles et malvoyants ne peuvent pas faire de même. Cet attribut permet aux développeurs d'indiquer une alternative textuelle à ces contrôles visuels, qui sera lue par les technologies d'assistance. En revanche, le contenu de l'attribut `aria-label` ne sera pas visible pour les autres usagers.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

Les lecteurs d'écran lisent le contenu textuel de cet attribut.

## Usage

L’attribut `aria-label` ne doit être utilisé que lorsque le texte d’un label _n’est pas_ visible à l’écran. Si le texte du label de l’élément existe et est visible, utilisez plutôt l’attribut [aria-labelledby](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby).

Cet attribut peut être utilisé avec n’importe quel élément HTML. Néanmoins, il n'est pas nécessaire de l'utiliser si l'élément possède déjà un mécanisme pour légender son contenu. Par exemple l'élément `<label>` pour les éléments de formulaire, ou l'attribut `alt` pour les images.

### Valeur

Une légende sous forme de chaîne de caractère.

## Exemples

### Un bouton sans contenu textuel explicite

Dans l’exemple ci-dessous, un bouton est stylé pour ressembler à un bouton «&nbsp;*Fermer*&nbsp;» classique, avec un `X` en son centre. Comme il n’existe aucune information indiquant que la fonction du bouton est de fermer la boîte de dialogue, l’attribut `aria-label` est utilisé pour fournir un label aux technologies d’assistance.

```html
 <button aria-label="Fermer" onclick="myDialog.close()">X</button>
```

### Un champ de saisie utilisant contentEditable

Pour proposer une expérience d'édition plus personnalisée, on pourrait utiliser une `div` avec l'attribut `contenteditable` à la place d'un élément de formulaire natif comme `<textarea>`. Cette situation ne permettrait pas d'associer un `<label>` à ce champ de saisie. Ainsi on pourrait utiliser `aria-label` à la place.

## Pour aller plus loin

### Notes

L’affectation d’_API accessibilité_ la plus courante pour un label est la propriété de _nom accessible_.

### Utilisé par les rôles ARIA

Tous les éléments de balisage de base.

### Techniques ARIA connexes

- [Utiliser l’attribut `aria-labelledby`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby).

### Autres ressources

- [Spécification WAI-ARIA pour aria-label](https://www.w3.org/TR/wai-aria/#aria-label).
