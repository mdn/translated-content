---
title: Utiliser l'attribut aria-required
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-required
---
### Description

Cette technique présente l’utilisation de l’attribut [`aria-required`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-required).

L’attribut `aria-required` est utilisé pour indiquer que l’utilisateur doit obligatoirement remplir un champ de formulaire avant de le soumettre. Cet attribut peut être utilisé avec n’importe quel élément de formulaire HTML ; il n’est pas limité aux éléments auxquels a été assigné un `rôle` ARIA.

{{ HTMLVersionInline("5") }} a introduit l’attribut [`required`](/fr/docs/Web/HTML/Attributes), mais `aria-required` est toujours utile pour les agents utilisateurs qui ne prennent pas encore en charge HTML5.

### Valeurs

`true` ou `false` (Valeur par défaut : `false`)

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Les lecteurs d’écran devraient annoncer le champ comme étant obligatoire.

Remarquez que cet attribut ne changera pas automatiquement la présentation du champ.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1 : un formulaire simple

```html
<form action="post">
  <label for="prenom">Prénom&nbsp;:</label>
  <input id="prenom" type="text" aria-required="true">
  <br/>
  <label for="nom">Nom&nbsp;:</label>
  <input id="nom" type="text" aria-required="true">
  <br/>
  <label for="adresse">Adresse&nbsp;:</label>
  <input id="adresse" type="text">
</form>
```

### Notes

### Utilisé dans les rôles ARIA

- Combobox ;
- Gridcell ;
- Listbox ;
- Radiogroup ;
- Spinbutton ;
- [Textbox](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_textbox) ;
- Tree.

### Techniques ARIA connexes

- [Utiliser l’attribut `aria-invalid`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-invalid)

### Autres ressources

- [Spécification WAI-ARIA pour `aria-required`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-required) ;
- [WAI-ARIA Authoring Practices for forms](http://www.w3.org/TR/wai-aria-practices/#ariaform) (Règles WAI-ARIA de création de formulaires) ;
- [Validation de condition](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) en {{ HTMLVersionInline("5") }}.
