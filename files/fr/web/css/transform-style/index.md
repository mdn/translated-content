---
title: transform-style
slug: Web/CSS/transform-style
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`transform-style`** définit si les éléments-fils d'un éléments sont positionnés dans l'espace tridimensionnel ou s'ils sont aplatis dans le plan de l'élément.

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

S'ils sont aplanis, les éléments-fils n'auront pas d'espace tridimensionnel propre.

Cette propriété n'est pas héritée et doit donc être définie sur tous les descendants de l'éléments qui ne sont pas des feuilles (autrement dit des descendants qui n'ont aucun fils).

## Syntaxe

```css
/* Avec un mot-clé */
transform-style: preserve-3d;
transform-style: flat;

/* Valeurs globales */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### Valeurs

- `flat`
  - : Indique que les fils de l'éléments sont positionnés dans le plan de l'élément.
- `preserve-3d`
  - : Indique que les fils de l'élément ciblé doivent être positionnés dans l'espace tridimensionnel.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS)
