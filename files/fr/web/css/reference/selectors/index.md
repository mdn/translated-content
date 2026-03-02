---
title: Sélecteurs CSS
short-title: Sélecteurs
slug: Web/CSS/Reference/Selectors
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Les **sélecteurs CSS** sont des modèles utilisés dans les [règles CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#ensembles_de_règles_css) pour cibler et sélectionner des éléments spécifiques à mettre en forme.

> [!NOTE]
> Cette page est un index de tous les sélecteurs CSS. La page [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors) présente le module qui définit certains, mais pas tous, de ces sélecteurs.

Par exemple, pour mettre en forme les paragraphes, vous utiliserez le [sélecteur de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) `p` pour sélectionner tous les éléments {{HTMLElement("p")}} et leur appliquer un style&nbsp;:

```css
/* Définit la taille de police sur tous les éléments <p> */
p {
  font-size: 12px;
  color: rebeccapurple;
}
```

## Syntaxe

```css
/* Sélectionne des éléments et applique des styles */
selecteur {
  propriete: valeur;
}
```

## Index des sélecteurs

- [& sélecteur d'imbrication](/fr/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [Sélecteurs d'identifiant](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Séparateur d'espace de noms (`|`)](/fr/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [Sélecteurs de pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Sélecteurs de pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Liste de sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Sélecteurs de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Sélecteurs universels](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors)

## Spécifications

{{Specifications}}

Consultez les pages [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#spécifications) et [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#spécifications) pour leurs tableaux de spécifications respectifs.

## Voir aussi

- Le module des [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Structure des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Combinateurs CSS](/fr/docs/Web/CSS/Reference/Selectors/Combinators)
- [Liste de sélecteurs](/fr/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Sélecteurs et combinateurs](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- Le module des [Pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
- Le module de l'[Imbrication CSS](/fr/docs/Web/CSS/Guides/Nesting)
- La [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
