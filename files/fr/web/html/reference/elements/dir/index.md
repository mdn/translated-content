---
title: "<dir> : l'élément de répertoire"
slug: Web/HTML/Reference/Elements/dir
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<dir>`** est utilisé comme conteneur pour un répertoire de fichiers et/ou de dossiers, éventuellement avec des styles et des icônes appliqués par l'{{Glossary("user agent", "agent utilisateur")}}. N'utilisez pas cet élément obsolète&nbsp;; utilisez plutôt l'élément {{HTMLElement("ul")}} pour les listes, y compris les listes de fichiers.

> [!WARNING]
> N'utilisez pas cet élément. Bien qu'il figure dans les premières spécifications HTML, il a été déprécié dans HTML 4, et a depuis été supprimé.

## Interface DOM

Cet élément implémente l'interface `HTMLDirectoryElement`.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Cet attribut booléen indique que la liste doit être rendue avec un affichage compact. L'interprétation de cet attribut dépend de l'agent utilisateur. Il ne fonctionne pas dans tous les navigateurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML utilisés pour les listes&nbsp;: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}} et {{HTMLElement("menu")}}.
- Les propriétés CSS qui peuvent être utilisées pour mettre en forme l'élément `<dir>`&nbsp;:
  - La propriété {{CSSxRef('list-style')}} est utile pour choisir l'apparence des puces.
  - [Les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) sont utiles pour gérer des listes imbriquées complexes.
  - La propriété {{CSSxRef('line-height')}} est utile pour reproduire l'attribut déprécié [`compact`](#compact).
  - La propriété {{CSSxRef('margin')}} est utile pour contrôler l'indentation de la liste.
