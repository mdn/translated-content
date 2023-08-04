---
title: Héritage
slug: Web/CSS/Inheritance
---

{{CSSRef}}

En CSS, **l'héritage** contrôle ce qui se produit lorsqu'aucune valeur n'est indiquée pour une propriété d'un élément.

Les propriétés CSS peuvent être rangées dans deux catégories&nbsp;:

- **Les propriétés héritées**, qui prennent par défaut [la valeur calculée](/fr/docs/Web/CSS/computed_value) de leur élément parent.
- **Les propriétés non-héritées**, qui prennent par défaut [la valeur initiale](/fr/docs/Web/CSS/initial_value) de la propriété.

Voyez sur [les pages des différentes propriétés CSS dans la référence](/fr/docs/Web/CSS/Reference#index_des_mots-clés) la définition qui indique si une propriété donnée hérite par défaut («&nbsp;Héritée&nbsp;: oui&nbsp;») ou non («&nbsp;Héritée&nbsp;: non&nbsp;»).

## Propriétés héritées

Lorsqu'aucune valeur n'a été fournie pour une **propriété héritée** sur un élément, celle-ci utilise [la valeur calculée](/fr/docs/Web/CSS/computed_value) de la propriété sur l'élément parent. Seul l'élément racine du document récupère [la valeur initiale](/fr/docs/Web/CSS/initial_value) indiquée dans le résumé de la propriété.

Un exemple caractéristique de propriété héritée est la propriété [`color`](/fr/docs/Web/CSS/color). Prenons la règle et le fragment de document suivants&nbsp;:

```css
p {
  color: green;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("")}}

Les mots «&nbsp;du texte en emphase&nbsp;» apparaissent en vert, car l'élément `<em>` a hérité de la valeur de la propriété [`color`](/fr/docs/Web/CSS/color) de l'élément `<p>`. Il _n'utilise pas_ la valeur initiale de la propriété (ici, il s'agirait de la couleur utilisée pour l'élément racine lorsque la page n'indique pas de couleur).

## Propriétés non-héritées

Lorsqu'aucune valeur n'est fournie pour une **propriété non-héritée** sur un élément, celle-ci utilise [la valeur initiale](/fr/docs/Web/CSS/initial_value) (indiquée dans le résumé de la propriété).

Un exemple caractéristique de propriété non-héritée est la propriété [`border`](/fr/docs/Web/CSS/border). Prenons la règle et le fragment de document suivants&nbsp;:

```css
p {
  border: medium solid;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("")}}

Les mots «&nbsp;du texte en emphase&nbsp;» n'ont pas de bordure _en plus_ (car la valeur initiale de [`border-style`](/fr/docs/Web/CSS/border-style) est `none`).

## Notes

Le mot-clé [`inherit`](/fr/docs/Web/CSS/inherit) permet d'indiquer explicitement l'héritage et fonctionne sur les propriétés héritées comme sur les propriétés non-héritées.

Il est possible de contrôler l'héritage de l'ensemble des propriétés d'un coup en utilisant la propriété raccourcie [`all`](/fr/docs/Web/CSS/all), qui applique sa valeur à toutes les propriétés. Par exemple&nbsp;:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Cela réinitialisera le style des paragraphes pour la propriété [`font`](/fr/docs/Web/CSS/font) avec la valeur par défaut de l'agent utilisateur (à moins qu'une feuille de style de l'utilisatrice ou de l'utilisateur existe et indique une police, qui sera alors utilisée). Ensuite, la taille de la police est doublée et on applique un niveau de graisse [`font-weight`](/fr/docs/Web/CSS/font-weight) à `bold` pour mettre en gras.

### Surcharger l'héritage, un exemple

Si on reprend l'exemple précédent avec [`border`](/fr/docs/Web/CSS/border) et qu'on impose l'héritage explicitement avec `inherit`, voici ce qu'on obtient&nbsp;:

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("")}}

On voit ici la bordure supplémentaire autour du texte en emphase.

## Voir aussi

- Les valeurs CSS qui contrôlent l'héritage&nbsp;:
  - [`inherit`](/fr/docs/Web/CSS/inherit)
  - [`initial`](/fr/docs/Web/CSS/initial)
  - [`revert`](/fr/docs/Web/CSS/revert)
  - [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
  - [`unset`](/fr/docs/Web/CSS/unset)
- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Cascade)
- [La cascade et l'héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- Concepts clés de CSS&nbsp;:
  - [Syntaxe CSS](/fr/docs/Web/CSS/Syntax)
  - [Règles-at](/fr/docs/Web/CSS/At-rule)
  - [Commentairess](/fr/docs/Web/CSS/Comments)
  - [Spécificité](/fr/docs/Web/CSS/Specificity)
  - [Modèle de boîte](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Modes d'affichage](/fr/docs/Web/CSS/Layout_mode)
  - [Modèles de formatage visuel](/fr/docs/Web/CSS/Visual_formatting_model)
  - [Fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Valeurs
    - [Initiales](/fr/docs/Web/CSS/initial_value)
    - [Calculées](/fr/docs/Web/CSS/computed_value)
    - [Utilisées](/fr/docs/Web/CSS/used_value)
    - [Effectives](/fr/docs/Web/CSS/actual_value)
  - [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Value_definition_syntax)
  - [Propriétés raccourcies](/fr/docs/Web/CSS/Shorthand_properties)
  - [Éléments remplacés](/fr/docs/Web/CSS/Replaced_element)
