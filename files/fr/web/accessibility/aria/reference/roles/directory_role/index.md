---
title: "ARIA : rôle directory"
short-title: directory
slug: Web/Accessibility/ARIA/Reference/Roles/directory_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `directory` était destiné à une liste de références aux membres d'un groupe, comme une table des matières statique.

> [!WARNING]
> Le rôle `directory` est obsolète depuis la version ARIA 1.2

## Description

Un répertoire est une table des matières statique, qu'elle soit liée ou non. Cela inclut les tables des matières construites avec des listes, y compris des listes imbriquées. Les tables des matières dynamiques, en revanche, pourraient utiliser un rôle d'arbre à la place.

Le rôle `directory`, aujourd'hui obsolète, était utilisé pour les listes de références aux membres d'un groupe, comme une table des matières statique.
Utilisez le rôle [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) à la place. Ou, mieux encore, utilisez les éléments {{HTMLElement('ul')}} ou {{HTMLElement('ol')}} , car l'utilisation de `directory` n'apporte aucun avantage supplémentaire aux utilisateur·ice·s de technologies d'assistance.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- L'élément HTML {{HTMLElement('ul')}}
- L'élément HTML {{HTMLElement('ol')}}
