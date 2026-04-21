---
title: Référence CSS
short-title: Référence
slug: Web/CSS/Reference
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Cette **référence CSS** fournit un [index alphabétique](#index) de toutes les [propriétés](/fr/docs/Web/CSS/Reference/Properties), [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes), [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), [types de données](/fr/docs/Web/CSS/Reference/Values/Data_types), [notations fonctionnelles](/fr/docs/Web/CSS/Reference/Values/Functions) et [règles @](/fr/docs/Web/CSS/Reference/At-rules) des standards [CSS](/fr/docs/Web/CSS). Vous pouvez également trouver une liste alphabétique de tous les [sélecteurs CSS par type](#sélecteurs) et une liste des [concepts clés de CSS](#concepts). Enfin est inclus un bref sommaire de [référence sur DOM-CSS / CSSOM](#dom-css_cssom).

## Syntaxe de règle basique

### Syntaxe de style basique

```plain
règle-de-style-basique ::=
    liste-de-sélecteurs {
      liste-de-propriétés
    }
```

... où :

```plain
liste-de-sélecteurs ::=
    sélecteur[:pseudo-classe] [::pseudo-élément]
    [, liste-de-sélecteurs]

liste-de-propriétés ::=
    [propriété : valeur] [; liste-de-propriétés]
```

Voir aussi les [_sélecteurs_](#sélecteurs), [_pseudo-classes_](#pseudo-classes), et _[pseudo-éléments](#pseudo-éléments)_ listés ci-dessous. La syntaxe des _valeurs_ dépend du type de données attendu pour chaque _propriété_ indiquée.

#### Exemples de règle de style

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Pour une introduction à la syntaxe des sélecteurs, consultez [ce guide des sélecteurs CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Soyez conscient que n'importe quelle erreur de [syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction) dans une définition de règle l'invalide entièrement. Les règles non validées sont ignorées par le navigateur. Note : les définitions de règles CSS sont intégralement [basées sur du texte <sup>(angl.)</sup>](https://drafts.csswg.org/css-syntax/#intro) (ASCII) alors que DOM-CSS / CSSOM (le système de gestion des règles) est [basé sur des objets <sup>(angl.)</sup>](https://drafts.csswg.org/cssom/#introduction).

### Syntaxe des règles @

Comme la structure des règles @ varie grandement, veuillez consulter [règle @](/fr/docs/Web/CSS/Reference/At-rules) pour trouver la syntaxe que vous souhaitez.

## Index

> [!NOTE]
> Cet index n'inclut pas les attributs de présentation exclusifs à SVG, qui peuvent être utilisés comme propriétés CSS sur les éléments [SVG](/fr/docs/Web/SVG).

> [!NOTE]
> Les noms de propriétés dans cet index n'incluent **pas** les noms JavaScript, qui diffèrent des noms standards CSS.

{{CSS_Ref}}

## Sélecteurs

Sont indiqués dans ce qui suit les divers [sélecteurs](/fr/docs/Web/CSS/Reference/Selectors), qui permettent aux styles d'être appliqués de façon conditionnelle selon diverses caractéristiques des éléments présents dans le DOM.

### Sélecteurs simples

Les **sélecteurs simples** sont des sélecteurs fondamentaux&nbsp;; ce sont les sélecteurs les plus élémentaires qui sont fréquemment combinés pour créer d'autres sélecteurs plus complexes.

- [Sélecteur universel](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors) `*`
- [Sélecteur de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) `nomElement`
- [Sélecteur de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) `.nomClasse`
- [Sélecteur d'identifiant](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors) `#nomID`
- [Sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=valeur]`

### Sélecteur de groupe

- [Sélecteur de conjonction](/fr/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : Indique que les éléments des sélecteurs `A` et `B` doivent être sélectionnés. Il s'agit d'une méthode de groupement pour sélectionner des éléments selon plusieurs critères.

### Combinateurs

Les combinateurs sont des sélecteurs qui établissent une relation entre deux sélecteurs ou plus, tel que "A est un enfant de B" ou "A est adjacent à B".

- [Combinateur de voisin direct](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - : Indique que les éléments sélectionnés par `A` et par `B` ont le même parent et que celui sélectionné par `B` suit immédiatement celui sélectionné par `A`.
- [Combinateur de voisin général](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - : Indique que les éléments sélectionnés par `A` et par `B` ont le même parent et que celui sélectionné par `B` suit celui sélectionné par `A`, mais pas nécessairement immédiatement après lui.
- [Combinateur d'enfant](/fr/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - : Indique que l'élément sélectionné par `B` est un enfant direct de l'élément sélectionné par `A`.
- [Combinateur de descendant](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`
  - : Indique que l'élément sélectionné par `B` est un descendant de l'élément sélectionné par `A`, mais n'en est pas nécessairement un enfant direct.
- [Combinateur de colonne](/fr/docs/Web/CSS/Reference/Selectors/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Indique que l'élément sélectionné par `B` est situé dans la colonne de table indiquée par `A`. Les éléments qui s'étendent sur des colonnes multiples sont considérés comme étant membres de chacune de ces colonnes.

### Pseudo

- [Pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - : Définit un état spécial pour le ou les éléments ciblés.
- [Pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
  - : Représente des entités qui ne sont pas incluses en HTML.

> [!CALLOUT]
>
> Voir aussi [les sélecteurs dans la spécification Selectors <sup>(angl.)</sup>](https://drafts.csswg.org/selectors/) et la [spécification des pseudo-éléments <sup>(angl.)</sup>](https://drafts.csswg.org/css-pseudo/).

## Concepts

### Syntaxe et sémantique

- [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Règles @ (_at-rules_)](/fr/docs/Web/CSS/Reference/At-rules)
- [Cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Commentaires](/fr/docs/Web/CSS/Guides/Syntax/Comments)
- {{Glossary("CSS_Descriptor", "Descripteurs")}}
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Propriétés raccourcies](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Valeurs](/fr/docs/Web/CSS/Reference/Values)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [Unités et valeurs CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Notations fonctionnelles CSS](/fr/docs/Web/CSS/Reference/Values/Functions)

### Valeurs

- [Valeur réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- [Valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)
- [Valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)
- [Valeur résolue](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue)
- [Valeur définie](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_définie)
- [Valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée)

### Disposition

- [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- [Bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- {{Glossary("Layout mode", "Modes de disposition")}}
- [Fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{Glossary("Replaced elements", "Éléments remplacés")}}
- [Contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Modèle de mise en forme visuelle](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)

## DOM-CSS / CSSOM

### Principaux types d'objets

- {{DOMxRef("Document.styleSheets")}}
- {{DOMxRef("HTMLElement.style")}}
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}

### Méthodes importantes

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## Voir aussi

- [Extensions CSS préfixées par le vendeur Firefox (-moz-)](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- [Extensions CSS préfixées par le vendeur WebKit (-webkit-)](/fr/docs/Web/CSS/Reference/Webkit_extensions)

## Liens externes

- [Index CSS <sup>(angl.)</sup>](https://www.w3.org/TR/css/#indices)
