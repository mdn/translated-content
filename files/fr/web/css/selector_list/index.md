---
title: Liste de sélecteurs
slug: Web/CSS/Selector_list
tags:
  - CSS
  - Sélecteur
translation_of: Web/CSS/Selector_list
---
{{CSSRef}}

**Une liste de sélecteurs** (`,`) permet de cibler tous les nœuds correspondants à l'une des conditions.

```css
/* Cible tous les éléments correspondants */
span,
div {
  border: red 2px solid;
}
```

Afin de réduire la taille d'une feuille de style, on peut grouper les sélecteurs dans une liste séparée par des virgules.

## Syntaxe

    element, element, element { propriétés de style }

## Exemples

### Groupement sur une seule ligne

On peut grouper les sélecteurs sur une seule ligne :

```css
h1, h2, h3, h4, h5, h6 { font-family: helvetica; }
```

### Groupement sur plusieurs lignes

On peut grouper les sélecteurs sur plusieurs lignes :

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

### Invalidation d'une liste de sélecteurs

Un inconvénient des listes de sélecteurs est la non-équivalence des deux blocs suivants :

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
h1, h2:maybe-unsupported, h3 { font-family: sans-serif }
```

En effet, un seul sélecteur vous manque et tout est dépeuplé. Enfin, un seul sélecteur invalide rend l'ensemble de la règle invalide.

Pour éviter cet effet indésirable, on pourra utiliser le sélecteur {{CSSxRef(":is", ":is()")}} qui ignore les sélecteurs invalides parmi ses arguments. Par contre, tous les sélecteurs passés en arguments auront la même spécificité.

```css
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```

```css
:is(h1, h2:maybe-unsupported, h3) { font-family: sans-serif }
```

## Spécifications

| Spécification                                                                    | État                                 | Commentaires                        |
| -------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------- |
| {{SpecName("CSS4 Selectors", "#grouping", "Selector Lists")}} | {{Spec2("CSS4 Selectors")}} | Renommage en « liste de sélecteur » |
| {{SpecName('CSS1', '#grouping', 'grouping')}}                     | {{Spec2('CSS1')}}             | Définition initiale.                |

## Compatibilité des navigateurs

{{Compat("css.selectors.list")}}

## Voir aussi

- Les pseudo-classes {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} et {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} qui n'ont pas ce problème historique d'invalidation des listes de sélecteurs.
