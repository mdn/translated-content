---
title: Héritage
slug: Web/CSS/Guides/Cascade/Inheritance
original_slug: Web/CSS/CSS_cascade/Inheritance
---

En CSS, **l'héritage** contrôle ce qui se produit lorsqu'aucune valeur n'est indiquée pour une propriété d'un élément.

Les propriétés CSS peuvent être rangées dans deux catégories&nbsp;:

- **Les propriétés héritées**, qui prennent par défaut [la valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) de leur élément parent.
- **Les propriétés non-héritées**, qui prennent par défaut [la valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) de la propriété.

Voyez sur [les pages des différentes propriétés CSS dans la référence](/fr/docs/Web/CSS/Reference#index_des_mots-clés) la définition qui indique si une propriété donnée hérite par défaut («&nbsp;Héritée&nbsp;: oui&nbsp;») ou non («&nbsp;Héritée&nbsp;: non&nbsp;»).

## Propriétés héritées

Lorsqu'aucune valeur n'a été fournie pour une **propriété héritée** sur un élément, celle-ci utilise [la valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) de la propriété sur l'élément parent. Seul l'élément racine du document récupère [la valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) indiquée dans le résumé de la propriété.

Un exemple caractéristique de propriété héritée est la propriété [`color`](/fr/docs/Web/CSS/Reference/Properties/color). Prenons la règle et le fragment de document suivants&nbsp;:

```css
p {
  color: green;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("")}}

Les mots «&nbsp;du texte en emphase&nbsp;» apparaissent en vert, car l'élément `<em>` a hérité de la valeur de la propriété [`color`](/fr/docs/Web/CSS/Reference/Properties/color) de l'élément `<p>`. Il _n'utilise pas_ la valeur initiale de la propriété (ici, il s'agirait de la couleur utilisée pour l'élément racine lorsque la page n'indique pas de couleur).

## Propriétés non-héritées

Lorsqu'aucune valeur n'est fournie pour une **propriété non-héritée** sur un élément, celle-ci utilise [la valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) (indiquée dans le résumé de la propriété).

Un exemple caractéristique de propriété non-héritée est la propriété [`border`](/fr/docs/Web/CSS/Reference/Properties/border). Prenons la règle et le fragment de document suivants&nbsp;:

```css
p {
  border: medium solid;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("")}}

Les mots «&nbsp;du texte en emphase&nbsp;» n'ont pas de bordure _en plus_ (car la valeur initiale de [`border-style`](/fr/docs/Web/CSS/Reference/Properties/border-style) est `none`).

## Notes

Le mot-clé [`inherit`](/fr/docs/Web/CSS/Reference/Values/inherit) permet d'indiquer explicitement l'héritage et fonctionne sur les propriétés héritées comme sur les propriétés non-héritées.

Il est possible de contrôler l'héritage de l'ensemble des propriétés d'un coup en utilisant la propriété raccourcie [`all`](/fr/docs/Web/CSS/Reference/Properties/all), qui applique sa valeur à toutes les propriétés. Par exemple&nbsp;:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Cela réinitialisera le style des paragraphes pour la propriété [`font`](/fr/docs/Web/CSS/Reference/Properties/font) avec la valeur par défaut de l'agent utilisateur (à moins qu'une feuille de style de l'utilisatrice ou de l'utilisateur existe et indique une police, qui sera alors utilisée). Ensuite, la taille de la police est doublée et on applique un niveau de graisse [`font-weight`](/fr/docs/Web/CSS/Reference/Properties/font-weight) à `bold` pour mettre en gras.

### Surcharger l'héritage, un exemple

Si on reprend l'exemple précédent avec [`border`](/fr/docs/Web/CSS/Reference/Properties/border) et qu'on impose l'héritage explicitement avec `inherit`, voici ce qu'on obtient&nbsp;:

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
  - [`inherit`](/fr/docs/Web/CSS/Reference/Values/inherit)
  - [`initial`](/fr/docs/Web/CSS/Reference/Values/initial)
  - [`revert`](/fr/docs/Web/CSS/Reference/Values/revert)
  - [`revert-layer`](/fr/docs/Web/CSS/revert-layer)
  - [`unset`](/fr/docs/Web/CSS/Reference/Values/unset)
- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [La cascade et l'héritage](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Concepts clés de CSS&nbsp;:
  - [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Règles-at](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Commentairess](/fr/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
  - [Modes d'affichage](/fr/docs/Glossary/Layout_mode)
  - [Modèles de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Valeurs
    - [Initiales](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)
    - [Calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)
    - [Utilisées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée)
    - [Réelles](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
  - [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Propriétés raccourcies](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - [Éléments remplacés](/fr/docs/Web/CSS/Guides/Images/Replaced_element_properties)
