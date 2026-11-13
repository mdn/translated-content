---
title: Immuable
slug: Glossary/Immutable
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une valeur **immuable** est une valeur dont le contenu ne peut pas être modifié sans créer une toute nouvelle valeur, par opposition aux {{Glossary("mutable", "valeurs mutables")}}.

En {{Glossary("JavaScript")}}, les {{Glossary("primitive", "valeurs primitives")}} sont immuables&nbsp;: une fois qu'une valeur primitive est créée, elle ne peut pas être modifiée, même si la variable qui la contient peut être réaffectée à une autre valeur.
À l'inverse, les {{Glossary("Object", "objets")}} et les {{Glossary("Array", "tableaux")}} sont mutables par défaut&nbsp;: leurs propriétés et éléments peuvent être modifiés sans réaffecter une nouvelle valeur.

Utiliser des objets immuables présente plusieurs avantages&nbsp;:

- Améliorer les performances (pas besoin d'anticiper les modifications futures de l'objet)
- Réduire l'utilisation de la mémoire (utiliser des {{Glossary("object reference", "références d'objet")}} au lieu de cloner tout l'objet)
- Sécurité lors de l'exécution concurrente (plusieurs threads peuvent référencer le même objet sans interférer entre eux)
- Réduire la charge cognitive des développeur·euse·s (l'état de l'objet ne change pas et son comportement reste toujours cohérent)

Notez qu'il est facile de prouver la mutabilité&nbsp;: un objet est mutable tant qu'il existe un moyen de modifier ses propriétés. À l'inverse, _l'immutabilité_ est difficile à prouver s'il n'existe pas de sémantique de langage pour la garantir&nbsp;: cela relève du contrat entre développeur·euse·s. Par exemple, {{JSxRef("Object.freeze()")}} est une méthode au niveau du langage permettant de rendre un objet immuable en JavaScript.

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Mutable", "Mutable")}}
- [Objet immuable](https://fr.wikipedia.org/wiki/Objet_immuable) sur Wikipédia
