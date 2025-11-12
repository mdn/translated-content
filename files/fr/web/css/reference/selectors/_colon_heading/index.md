---
title: :heading
slug: Web/CSS/Reference/Selectors/:heading
original_slug: Web/CSS/:heading
l10n:
  sourceCommit: 1a1fe4efc4bfa6147f084aad12cf9908130f76ab
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:heading`** correspond à tous les [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) dans un document. Cela vous permet de mettre en forme tous les titres en même temps, plutôt que de les correspondre et de les mettre en forme individuellement.

Cette pseudo-classe ne correspond qu'aux éléments qui sont par défaut reconnus comme des titres (`<h1>` à `<h6>`). Les éléments avec [`role="heading"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) ne sont pas correspondus ; vous pouvez sélectionner ceux-ci en utilisant le [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[role="heading"]`.

> [!NOTE]
> La pseudo-classe `:heading` a la même [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated) qu'un sélecteur de classe, c'est-à-dire `0-1-0`. Ainsi, `:heading` aurait une spécificité de `0-1-0`, et `section:heading` aurait une spécificité de `0-1-1`.

## Syntaxe

```css
:heading {
  /* ... */
}
```

## Exemples

### Mise en forme de tous les titres

Le document dans cet exemple contient des titres à trois niveaux différents.

```html
<h1>Maîtriser CSS</h1>
<h2>Chapitre 1 : Sélecteurs</h2>
<h3>1.1 Pseudo-classes</h3>
```

```css
:heading {
  color: tomato;
}
```

La pseudo-classe `:heading` applique la `color` à tous les titres du document :

{{EmbedLiveSample("Mise_en_forme_de_tous_les_titres", "", "170")}}

La pseudo-classe `:heading` applique la `color` à tous les titres du document.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSXRef(":heading_function", ":heading()")}}
