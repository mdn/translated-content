---
title: Héritage
slug: Web/CSS/Guides/Cascade/Inheritance
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

En CSS, **l'héritage** contrôle ce qui se produit lorsqu'aucune valeur n'est indiquée pour une propriété d'un élément.

Les propriétés CSS peuvent être rangées dans deux catégories&nbsp;:

- **Les propriétés héritées**, qui prennent par défaut [la valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) de leur élément parent.
- **Les propriétés non-héritées**, qui prennent par défaut [la valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) de la propriété.

Voyez sur [les pages des différentes propriétés CSS dans la référence](/fr/docs/Web/CSS/Reference#index_des_mots-clés) la définition qui indique si une propriété donnée hérite par défaut («&nbsp;Héritée&nbsp;: oui&nbsp;») ou non («&nbsp;Héritée&nbsp;: non&nbsp;»).

## Propriétés héritées

Lorsqu'aucune valeur n'a été fournie pour une **propriété héritée** sur un élément, celle-ci utilise [la valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing) de la propriété sur l'élément parent. Seul l'élément racine du document récupère [la valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) indiquée dans le résumé de la propriété.

Un exemple caractéristique de propriété héritée est la propriété {{CSSxRef("color")}}. Prenons la règle et le fragment de document suivants&nbsp;:

```css
p {
  color: green;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("Propriétés héritées", "", 40)}}

Les mots «&nbsp;du texte en emphase&nbsp;» apparaissent en vert, car l'élément `<em>` a hérité de la valeur de la propriété {{CSSxRef("color")}} de l'élément `<p>`. Il _n'utilise pas_ la valeur initiale de la propriété (ici, il s'agit de la couleur utilisée pour l'élément racine lorsque la page n'indique pas de couleur).

## Propriétés non-héritées

Lorsqu'aucune valeur n'est fournie pour une **propriété non-héritée** sur un élément, celle-ci utilise [la valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) (indiquée dans le résumé de la propriété).

Un exemple caractéristique de propriété non-héritée est la propriété {{CSSxRef("border")}}. Prenons la règle et le fragment de document suivants&nbsp;:

```css
p {
  border: medium solid;
}
```

```html
<p>Ce paragraphe a <em>du texte en emphase</em> à l'intérieur.</p>
```

{{EmbedLiveSample("Propriétés non-héritées", "", 40)}}

Les mots «&nbsp;du texte en emphase&nbsp;» n'ont pas de bordure _en plus_ (car la valeur initiale de {{CSSxRef("border-style")}} est `none`).

## Notes

Le mot-clé {{CSSxRef("inherit")}} permet d'indiquer explicitement l'héritage et fonctionne sur les propriétés héritées comme sur les propriétés non-héritées.

Il est possible de contrôler l'héritage de l'ensemble des propriétés d'un coup en utilisant la propriété raccourcie {{CSSxRef("all")}}, qui applique sa valeur à toutes les propriétés. Par exemple&nbsp;:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Cela réinitialise le style des paragraphes pour la propriété {{CSSxRef("font")}} avec la valeur par défaut de l'agent utilisateur (à moins qu'une feuille de style de l'utilisatrice ou de l'utilisateur·ice existe et indique une police, qui est alors utilisée). Ensuite, la taille de la police est doublée et on applique un niveau de graisse {{CSSxRef("font-weight")}} à `bold` pour mettre en gras.

### Surcharger l'héritage, un exemple

Si on reprend l'exemple précédent avec {{CSSxRef("border")}} et qu'on impose l'héritage explicitement avec `inherit`, voici ce qu'on obtient&nbsp;:

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

{{EmbedLiveSample("Surcharger l'héritage, un exemple", "", 40)}}

On voit ici la bordure supplémentaire autour du texte en emphase.

## Voir aussi

- Les valeurs CSS qui contrôlent l'héritage&nbsp;: {{CSSxRef("inherit")}}, {{CSSxRef("initial")}}, {{CSSxRef("revert")}}, {{CSSxRef("revert-layer")}} et {{CSSxRef("unset")}}
- Le module [de cascade et d'héritage CSS cascading and inheritance](/fr/docs/Web/CSS/Guides/Cascade)
- [Gestion des erreurs CSS](/fr/docs/Web/CSS/Guides/Syntax/Error_handling)
- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Apprendre&nbsp;: Gestion des conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Apprendre&nbsp;: Couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Introduction à la syntaxe CSS&nbsp;: déclarations, règles et instructions](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Les règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- Valeurs&nbsp;: [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), [utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) et [réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- Le module [d'imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting)
