---
title: "<font> : l'élément de police"
slug: Web/HTML/Reference/Elements/font
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<font>`** définit la taille, la couleur et la police de son contenu.

> [!WARNING]
> N'utilisez pas cet élément. Utilisez les propriétés CSS de [polices](/fr/docs/Web/CSS/Guides/Fonts) pour mettre en forme le texte.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : Cet attribut définit la couleur du texte en utilisant soit une couleur nommée, soit une couleur indiquée par le format hexadécimal #RRGGBB.
- `face` {{Deprecated_Inline}}
  - : Cet attribut contient une liste d'une ou plusieurs polices, séparées par des virgules. Le texte est affiché avec la première police que le navigateur supporte. Si aucune des polices listées n'est installée sur le système, le navigateur prend habituellement la police proportionnelle, ou à taille fixe par défaut, du système.
- `size` {{Deprecated_Inline}}
  - : Cet attribut indique la taille de la police soit par une valeur numérique, soit par une valeur relative. Les valeurs numériques vont de `1` à `7`, `1` étant la plus petite et `3` la valeur par défaut. Il peut être défini en utilisant une valeur relative, comme `+2` ou `-3`, qui la fixe par rapport à `3`, la valeur par défaut.

## Interface DOM

Cet élément implément l'interface {{DOMxRef("HTMLFontElement")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
