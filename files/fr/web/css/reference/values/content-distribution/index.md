---
title: <content-distribution>
slug: Web/CSS/Reference/Values/content-distribution
original_slug: Web/CSS/content-distribution
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<content-distribution>`** est utilisé par les propriétés {{CSSxRef("justify-content")}} et {{CSSxRef("align-content")}}, ainsi que par le raccourci {{CSSxRef("place-content")}}, pour répartir l'espace supplémentaire d'un conteneur entre ses {{Glossary("alignment subject", "sujets d'alignement")}}.

## Syntaxe

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Valeurs

Les mots-clés suivants sont représentés par le terme de grammaire `<content-distribution>`&nbsp;:

- `space-between`
  - : Répartit uniformément les {{Glossary("alignment subject", "sujets d'alignement")}} dans le {{Glossary("alignment container", "conteneur d'alignement")}}. Le premier élément est placé contre le bord de début du conteneur, le dernier élément contre le bord de fin, et les éléments restants sont répartis de façon à ce que l'espacement entre chaque paire d'éléments adjacents soit identique. L'alignement de repli par défaut pour `space-between` est `safe flex-start` pour le modèle flex, et `start` sinon. S'il n'y a qu'un seul élément, il sera collé au bord de début.

- `space-around`
  - : Les éléments sont répartis uniformément dans le conteneur, avec un espace de demi-taille aux extrémités. L'espacement entre chaque paire d'éléments adjacents est identique, et l'espacement avant le premier et après le dernier élément est égal à la moitié des autres espacements. L'alignement de repli par défaut pour `space-around` est `safe center`. Si le conteneur n'a qu'un seul enfant, l'élément sera centré.

- `space-evenly`
  - : Les éléments sont répartis uniformément dans le conteneur, avec un espace de taille complète aux extrémités. L'espacement entre chaque paire d'éléments adjacents, avant le premier élément et après le dernier, est identique. L'alignement de repli par défaut pour `space-evenly` est `safe center`. Si le conteneur n'a qu'un seul enfant, l'élément sera centré.

- `stretch`
  - : Si la taille combinée des éléments est inférieure à celle du conteneur, tous les éléments pouvant grandir verront leur taille augmenter de façon égale (et non proportionnelle), tout en respectant les contraintes imposées par {{CSSxRef("max-height")}}, {{CSSxRef("max-width")}} ou une fonctionnalité équivalente, de sorte que la taille totale des éléments remplisse exactement le conteneur. L'alignement de repli par défaut pour `stretch` est `flex-start` en flexbox, et `start` dans les autres modes de mise en page. S'il n'y a qu'un seul élément, et qu'il peut grandir, il occupera tout l'espace du conteneur.

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{CSSxRef("align-content")}}, {{CSSxRef("justify-content")}}, {{CSSxRef("place-content")}}
- Autres types de données d'alignement de boîte&nbsp;: {{CSSxRef("baseline-position")}}, {{CSSxRef("content-position")}}, {{CSSxRef("overflow-position")}} et {{CSSxRef("self-position")}}
- Le module [d'Alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Le module [Flexbox CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module de [Grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
