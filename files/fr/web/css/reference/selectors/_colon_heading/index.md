---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
l10n:
  sourceCommit: 56d7fc5f9d1b010fc55d0384facd2b1477baee0c
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:heading`** correspond à tous les [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) dans un document.

## Syntaxe

```css
:heading {
  /* ... */
}
```

## Description

La pseudo-classe `:heading` permet de mettre en forme tous les titres en une seule fois, plutôt que de les cibler et de les mettre en forme individuellement.

Cette pseudo-classe ne correspond qu'aux éléments qui sont par défaut reconnus sémantiquement comme des titres (`<h1>` à `<h6>`). Les éléments avec [`role="heading"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) ne sont pas concernés&nbsp;; vous pouvez les sélectionner avec le [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[role="heading"]`.

La pseudo-classe `:heading` a la même [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity#détermination_de_la_spécificité) qu'un sélecteur de classe, c'est-à-dire `0-1-0`. Ainsi, `:heading` a une spécificité de `0-1-0`, tandis que `h1, h2, h3, h4, h5, h6` aurait une spécificité de `0-0-1` et `section:heading` aurait une spécificité de `0-1-1`.

## Exemples

### Mettre en forme de tous les titres

Le document dans cet exemple contient des titres à trois niveaux différents.

#### HTML

Le document contient des titres à trois niveaux différents, ainsi que des éléments de paragraphe {{HTMLElement("p")}}.

```html
<h1>Maîtriser CSS</h1>
<h2>Chapitre 1 : Sélecteurs</h2>
<p>
  Un sélecteur CSS est la partie d'une règle CSS qui décrit quels éléments d'un
  document la règle va correspondre.
</p>
<h3>1.1 Pseudo-classes</h3>
<p>
  Les pseudo-classes CSS permettent de sélectionner des éléments en fonction
  d'informations qui se trouvent en dehors de l'arborescence du document.
</p>
```

#### CSS

Nous définissons les éléments de titre en italique et en rouge tomate.

```css
:heading {
  color: tomato;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample("Mettre en forme de tous les titres", "", 170)}}

La pseudo-classe `:heading` applique {{CSSxRef("color")}} et {{CSSxRef("font-style")}} à tous les titres du document, mais pas aux paragraphes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction de pseudo-classe {{CSSxRef(":heading_function", ":heading()")}}
