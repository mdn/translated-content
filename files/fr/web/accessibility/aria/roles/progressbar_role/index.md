---
title: Utiliser le rôle progressbar
slug: Web/Accessibility/ARIA/Roles/progressbar_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
---
### Description

Cette technique présente l’utilisation du rôle [`progressbar`](https://www.w3.org/TR/wai-aria/#progressbar).

Le rôle `progressbar` devrait être utilisé pour un élément qui affiche la progression d’un tâche prenant un certain temps ou s’effectuant en plusieurs étapes.

Une barre de progression indique que la requête de l’utilisateur a été prise en compte et que l’application progresse vers la finalisation de l’action demandée. Si la valeur courante de la barre de progression peut être connue, le développeur pourra indiquer la progression à l’aide des attributs [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow), [`aria-valuemin`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) et [`aria-valuemax`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax). Si la valeur de progression est indéterminée, le développeur peut omettre l’attribut [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow).

Lorsqu’une tâche progresse, la valeur `aria-valuenow` doit être dynamiquement actualisée pour indiquer la progression aux produits de technologies d’assistance.

Si le rôle `progressbar` décrit la progression du chargement d’une zone particulière d’une page, l’auteur **DOIT** utiliser l’attribut [`aria-describedby`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) pour pointer vers l’état courant, et définir l’attribut [`aria-busy`](https://www.w3.org/TR/wai-aria-1.1/#aria-busy) à `true` pour la zone jusqu’à la fin du chargement. Il n’est pas possible à l’utilisateur de modifier la valeur de `progressbar` car elle est toujours en lecture seule.

> **Note :** généralement les technologies d’assistance retourneront la valeur de l’attribut [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) sous la forme d’un pourcentage d’une plage de valeurs comprise entre [`aria-valuemin`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) et [`aria-valuemax`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax), sauf si [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext) est spécifié. Il est préférable de définir les valeurs pour les attributs `aria-valuemin`, `aria-valuemax` et `aria-valuenow` de façon appropriée pour ce calcul.

> **Note :** les éléments possédant le rôle `progressbar` ont une valeur `aria-readonly` implicite définie à `true`.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Les lecteurs devraient annoncer les mises à jour de la progression dès qu’elles se produisent. Si la barre de progression a un label, il devrait également être mentionné.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: barre de progression simple avec pourcentage de progression

```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>
```

#### Exemple 2&nbsp;: Utilisation de `aria-valuetext`

```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuetext="Étape 2&nbsp;: Copie des fichiers…" aria-valuemax="100">
  Étape 2&nbsp;: Copie des fichiers…
</div>
```

#### Exemples concrets&nbsp;:

### Notes

### Attributs ARIA utilisés

- [progressbar](https://www.w3.org/TR/wai-aria/#progressbar)
- [aria-valuenow](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow)
- [aria-valuemin](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin)
- [aria-valuemax](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax)
- [aria-valuetext](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext)
