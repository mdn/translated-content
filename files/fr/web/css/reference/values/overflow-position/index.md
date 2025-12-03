---
title: <overflow-position>
slug: Web/CSS/Reference/Values/overflow-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<overflow-position>`** définit comment un sujet d'alignement (<i lang="en">alignment subject</i> en anglais) plus grand que son conteneur d'alignement (<i lang="en">alignment container</i> en anglais) déborde de ce dernier. Par exemple, si des éléments centrés sont plus larges que leur conteneur, le débordement peut s'afficher au‑delà du bord de début de la zone d'affichage (<i lang="en">viewport</i> en anglais), bord vers lequel il est impossible de défiler. La valeur `<overflow-position>` précise si le mode d'alignement doit être remplacé pour garantir que le contenu soit visible (`safe`) ou si le mode d'alignement doit être respecté (`unsafe`).

Ce type de données est valide pour les propriétés {{CSSxRef("align-content")}}, {{CSSxRef("align-items")}}, {{CSSxRef("align-self")}}, {{CSSxRef("justify-items")}} et {{CSSxRef("justify-self")}}, ainsi que pour les propriétés raccourcies {{CSSxRef("place-content")}}, {{CSSxRef("place-items")}} et {{CSSxRef("place-self")}}. Si elle est omise, l'alignement par défaut du débordement est un mélange de `safe` et `unsafe`.

## Syntaxe

```plain
<overflow-position> = unsafe | safe
```

## Valeurs

Les mots-clés suivants sont représentés par le terme de grammaire `<overflow-position>`&nbsp;:

- `safe`
  - : Si la taille du {{Glossary("alignment subject", "sujet d'alignement")}} déborde du {{Glossary("alignment container", "conteneur d'alignement")}}, le sujet d'alignement est alors aligné comme si le mode d'alignement était `start`.

- `unsafe`
  - : Quelle que soit la taille relative du {{Glossary("alignment subject", "sujet d'alignement")}} et du {{Glossary("alignment container", "conteneur d'alignement")}}, la valeur d'alignement donnée est respectée.

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de données&nbsp;: {{CSSxRef("align-content")}}, {{CSSxRef("align-items")}}, {{CSSxRef("align-self")}}, {{CSSxRef("justify-content")}}, {{CSSxRef("justify-items")}}, {{CSSxRef("justify-self")}}, {{CSSxRef("place-content")}}, {{CSSxRef("place-items")}} et {{CSSxRef("place-self")}}
- Autres types de données d'alignement de boîte&nbsp;: {{CSSxRef("content-distribution")}}, {{CSSxRef("content-position")}}, {{CSSxRef("baseline-position")}} et {{CSSxRef("self-position")}}
- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Le module [de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
