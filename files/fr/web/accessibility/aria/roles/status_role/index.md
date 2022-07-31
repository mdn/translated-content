---
title: Utiliser le rôle status
slug: Web/Accessibility/ARIA/Roles/status_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
---
### Description

Cette technique présente l’utilisation du rôle [status](http://www.w3.org/TR/wai-aria/roles#status) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `status` est un type de [zone live](http://www.w3.org/WAI/PF/aria/terms#def_liveregion) et un conteneur dont le contenu est un message d’informations destiné à l’utilisateur. Ce message n’est pas assez important pour justifier une [alerte](http://www.w3.org/TR/wai-aria/roles#alert). Il est souvent présenté comme une barre d’état. Lorsque le rôle est ajouté à un élément, le navigateur émettra un événement `status` accessible aux produits de technologies d’assistance qui pourront alors le notifier à l’utilisateur.

Le contenu des informations d’état doit être fourni dans un objet d’état et il faut s’assurer que cet objet ne reçoive pas le focus. Si une autre partie de la page contrôle ce qui s’affiche dans l’objet d’état, la relation doit être explicitement définie à l’aide de l’attribut [aria-controls](http://www.w3.org/TR/wai-aria/states_and_properties#aria-controls).

Les technologies d’assistance devraient réserver des cellules dans la grille Braille pour rendre l’état.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `status` est ajouté à un élément, ou qu’un tel élément devient visible, l’agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l’élément ayant un rôle de `status` à l’API d’accessibilité du système d’exploitation&nbsp;;
- Déclencher un événement `status` accessible à l’aide l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Les technologies d’assistance devraient être à l’écoute de tels événements et les notifier à l’utilisateur en conséquence&nbsp;:

- Les lecteurs d’écran peuvent fournir une touche spécifique pour annoncer l’état actuel et ce dernier devrait présenter les contenus des états des zones live. Cela devrait être annoncé lorsque l'utilisateur est inactif, à moins que l'attribut `aria-live=”assertive”` soit défini dans quel cas l'utilisateur peut être interrompu&nbsp;;
- Les loupes d’écran devraient agrandir l’objet d’état.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: ajout du rôle `status` dans le code HTML

L’extrait de code ci-dessous montre comment le rôle `status` est ajouté directement dans le code source HTML.

```html
<p role="status">Vos modifications ont été automatiquement enregistrées.</p>
```

#### Exemples concrets&nbsp;:

### Notes

### Attributs ARIA utilisés

- [status](http://www.w3.org/TR/wai-aria/roles#status).

### Techniques ARIA connexes

- Rôle [alert](http://www.w3.org/TR/wai-aria/roles#alert).

### Autres ressources

- Bonnes pratiques ARIA – Implémentation des zones live&nbsp;: [#LiveRegions](http://www.w3.org/TR/wai-aria-practices/#LiveRegions).
