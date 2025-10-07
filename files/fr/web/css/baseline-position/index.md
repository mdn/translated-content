---
title: <baseline-position>
slug: Web/CSS/baseline-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La valeur {{glossary("enumerated", "énumérée")}} **`<baseline-position>`** représente le type de valeur pour le mot-clé `baseline` ainsi que les modificateurs `first` et `last`, utilisés pour les propriétés {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} et {{cssxref("justify-self")}}, ainsi que pour les propriétés raccourcies {{cssxref("place-content")}}, {{cssxref("place-items")}} et {{cssxref("place-self")}}.

Les valeurs `first` et `last` donnent à une boîte une préférence d'alignement sur la ligne de base, avec `first` comme valeur par défaut si le modificateur est omis.

## Syntaxe

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Valeurs

Le type de valeur énumérée `<baseline-position>` s'utilise avec un modificateur optionnel `first` ou `last` associé à la valeur `baseline`. Si une boîte n'appartient pas à un contexte d'alignement partagé, alors l'alignement de repli est utilisé. L'alignement de repli sert aussi à aligner le groupe partageant la ligne de base dans son {{glossary("alignment container", "conteneur d'alignement")}}.

- `baseline`
  - : Se calcule en «&nbsp;première ligne de base&nbsp;» (`first baseline`), comme défini ci-dessous.

- `first baseline`
  - : Aligne la ligne de base d'alignement de la première ligne de base (`first baseline`) de la boîte avec la ligne de base correspondante de son groupe partageant la ligne de base. L'alignement de repli est `safe self-start` pour l'auto-alignement ou `safe start` pour la distribution du contenu.

- `last baseline`
  - : Aligne la ligne de base d'alignement de la dernière ligne de base (`last baseline`) de la boîte avec la ligne de base correspondante de son groupe partageant la ligne de base. L'alignement de repli est `safe self-end` pour l'auto-alignement ou `safe end` pour la distribution du contenu.

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;:
  - {{cssxref("align-content")}}
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-content")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}
- Autres types de données d'alignement de boîte&nbsp;:
  - {{cssxref("content-distribution")}}
  - {{cssxref("content-position")}}
  - {{cssxref("overflow-position")}}
  - {{cssxref("self-position")}}
- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/CSS_box_alignment)
- Le module [de disposition flexible CSS](/fr/docs/Web/CSS/CSS_flexible_box_layout)
- Le module [de disposition en grille CSS](/fr/docs/Web/CSS/CSS_grid_layout)
