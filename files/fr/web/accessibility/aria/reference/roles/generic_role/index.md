---
title: "ARIA : rôle generic"
short-title: generic
slug: Web/Accessibility/ARIA/Reference/Roles/generic_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `generic` crée un élément conteneur sans nom qui n'a pas de signification sémantique en soi.

> [!NOTE]
> Le rôle `generic` est le rôle implicite des éléments génériques utilisés par les agents utilisateurs. Il est inclus ici pour compléter la documentation. Il ne doit pas être utilisé par les développeur·euse·s web.

## Description

Bien que l'ARIA soit principalement utilisée pour exprimer la sémantique, il existe certains éléments qui ne devraient pas exposer de nom sémantique aux technologies d'assistance. Le rôle `generic` indique que le rôle d'un élément est équivalent à celui des éléments non sémantiques {{HTMLElement('div')}} et {{HTMLElement('span')}}.

Le rôle `generic` est destiné à être utilisé comme le rôle implicite des éléments génériques dans les langages hôtes pour une utilisation uniquement par les agents utilisateurs&nbsp;; pas pour une utilisation par les développeur·euse·s. Au lieu de cela, pour supprimer les sémantiques d'accessibilité implicites, utilisez [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ou `none`, les éléments {{HTMLElement('div')}} et {{HTMLElement('span')}} qui n'ont pas de signification sémantique, ou des rôles de conteneur sémantiques tels que [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) pour regrouper sémantiquement les descendants dans un conteneur nommé.

Comme un élément avec le rôle `presentation`, un élément avec `role="generic"` peut fournir un nombre limité d'états et de propriétés accessibles pour ses descendants, tels que les attributs [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live). Cependant, contrairement aux éléments avec le rôle `presentation`, les éléments `generic` sont exposés dans les API d'accessibilité afin que les technologies d'assistance puissent recueillir certaines propriétés telles que la mise en page et les limites.

Comme le rôle `generic` n'a pas de nom, les attributs [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) et [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sont interdits. Comme le rôle est générique, les attributs [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) et [`aria-brailleroledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) sont également interdits.

> [!NOTE]
> L'élément avec `role="generic"` ne doit pas avoir de nom accessible ou de description de rôle.

### Propriétés, états et rôles WAI-ARIA associés

Aucun. Si un état et une propriété ARIA globaux sont définis, `generic` ou `none` seront ignorés, et le rôle implicite de l'élément sera utilisé.

## Exemples

Ce rôle est destiné à être utilisé par les agents utilisateurs et non par les développeur·euse·s. En tant que tel, aucun exemple approprié n'existe.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('div')}}
- L'élément HTML {{HTMLElement('span')}}
- [ARIA&nbsp;: rôle `presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [ARIA&nbsp;: rôle `group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
