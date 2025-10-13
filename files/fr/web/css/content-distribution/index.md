---
title: <content-distribution>
slug: Web/CSS/content-distribution
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [type de données](/fr/docs/Web/CSS/CSS_values_and_units/CSS_data_types) {{glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<content-distribution>`** est utilisé par les propriétés {{cssxref("justify-content")}} et {{cssxref("align-content")}}, ainsi que par le raccourci {{cssxref("place-content")}}, pour répartir l'espace supplémentaire d'un conteneur entre ses {{glossary("alignment subject", "sujets d'alignement")}}.

## Syntaxe

```plain
<content-distribution> = space-between | space-around | space-evenly | stretch
```

## Valeurs

Les mots-clés suivants sont représentés par le terme de grammaire `<content-distribution>`&nbsp;:

- `space-between`
  - : Répartit uniformément les {{glossary("alignment subject", "sujets d'alignement")}} dans le {{glossary("alignment container", "conteneur d'alignement")}}. Le premier élément est placé contre le bord de début du conteneur, le dernier élément contre le bord de fin, et les éléments restants sont répartis de façon à ce que l'espacement entre chaque paire d'éléments adjacents soit identique. L'alignement de repli par défaut pour `space-between` est `safe flex-start` pour le modèle flex, et `start` sinon. S'il n'y a qu'un seul élément, il sera collé au bord de début.

- `space-around`
  - : Les éléments sont répartis uniformément dans le conteneur, avec un espace de demi-taille aux extrémités. L'espacement entre chaque paire d'éléments adjacents est identique, et l'espacement avant le premier et après le dernier élément est égal à la moitié des autres espacements. L'alignement de repli par défaut pour `space-around` est `safe center`. Si le conteneur n'a qu'un seul enfant, l'élément sera centré.

- `space-evenly`
  - : Les éléments sont répartis uniformément dans le conteneur, avec un espace de taille complète aux extrémités. L'espacement entre chaque paire d'éléments adjacents, avant le premier élément et après le dernier, est identique. L'alignement de repli par défaut pour `space-evenly` est `safe center`. Si le conteneur n'a qu'un seul enfant, l'élément sera centré.

- `stretch`
  - : Si la taille combinée des éléments est inférieure à celle du conteneur, tous les éléments pouvant grandir verront leur taille augmenter de façon égale (et non proportionnelle), tout en respectant les contraintes imposées par {{cssxref("max-height")}}, {{cssxref("max-width")}} ou une fonctionnalité équivalente, de sorte que la taille totale des éléments remplisse exactement le conteneur. L'alignement de repli par défaut pour `stretch` est `flex-start` en flexbox, et `start` dans les autres modes de mise en page. S'il n'y a qu'un seul élément, et qu'il peut grandir, il occupera tout l'espace du conteneur.

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Autres types de données d'alignement de boîte&nbsp;: {{cssxref("baseline-position")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}} et {{cssxref("self-position")}}
- Le module [d'Alignement des boîtes CSS](/fr/docs/Web/CSS/CSS_box_alignment)
- Le module [Flexbox CSS](/fr/docs/Web/CSS/CSS_flexible_box_layout)
- Le module de [Grille CSS](/fr/docs/Web/CSS/CSS_grid_layout)
