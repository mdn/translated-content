---
title: Utilisation du rôle checkbox
slug: Web/Accessibility/ARIA/Roles/checkbox_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/Roles/checkbox_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_checkbox
---
### Description

Cette technique présente l’utilisation du rôle [checkbox](http://www.w3.org/TR/wai-aria/roles#checkbox).

Le rôle `checkbox` est utilisé pour des contrôles interactifs à cocher. Si un élément utilise `role="checkbox",` il est obligatoire pour cet élément d’avoir également un attribut `aria-checked` qui présente l’état de la case à cocher aux technologies d’assistance. Alors que le contrôle de formulaire HTML natif `checkbox` ne peut avoir que deux états (« coché » ou « décoché »), un élément avec le rôle `role=checkbox` peut présenter trois états pour l'attribut `aria-checked` :

- `aria-checked="true"` : la case est cochée ;
- `aria-checked="false"` : la case est décochée ;
- `aria-checked="mixed"` : la case est partiellement cochée.

Le développeur doit modifier dynamiquement la valeur de l’attribut `aria-checked` lorsque la case est cochée.

Comme une case à cocher est un contrôle interactif, elle doit pouvoir recevoir le focus et être accessible au clavier. Si le rôle est appliqué à un élément qui ne peut recevoir le focus, l’attribut `tabindex` devra être utilisé pour corriger cela. Le raccourci clavier attendu pour activer une case à cocher est la barre d’espace.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `checkbox` est ajouté à un élément, l’agent utilisateur devrait suivre les étapes suivantes :

- Présenter l’élément comme ayant un rôle de case à cocher à l’API d’accessibilité du système d’exploitation ;
- Lorsque la valeur de l’attribut `aria-checked` change, envoyer un événement accessible de changement d’état.

Les technologies d’assistance doivent faire la chose suivante :

- Les lecteurs d’écran devraient annoncer l’élément comme une case à cocher, et, éventuellement, fournir des instructions sur les façons de l’activer.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1 : Ajout du rôle ARIA `checkbox`

```html
<span role="checkbox" aria-checked="false" tabindex="0" id="chk1"></span>
<label for="chk1">Enregistrer mes préférences</label>
```

#### Exemples concrets :

- <http://test.cita.uiuc.edu/aria/checkbox/checkbox1.php>

### Notes

### Attributs ARIA utilisés

- [checkbox](http://www.w3.org/TR/wai-aria/roles#checkbox)
- [aria-checked](http://www.w3.org/TR/wai-aria/states_and_properties#aria-checked)

### Techniques ARIA connexes

### Autres ressources
