---
title: Référence CSS
slug: Web/CSS/Reference
---

Cette **référence CSS** fournit un **[index alphabétique](#index_des_mots-clés)** de toutes les propriétés [CSS](/fr/docs/Web/CSS) standards, des [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes), des [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), des [types de données](/fr/docs/Web/CSS/Reference/Values/Data_types) et des [règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules). Vous pouvez également trouver une liste alphabétique de tous les **[sélecteurs CSS par type](#sélecteurs)** et une liste des **[concepts clés de CSS](#concepts)**. Enfin est inclus un bref sommaire de **[référence sur DOM-CSS / CSSOM](#dom-css_cssom)**.

## Syntaxe de règle basique

### Syntaxe de style basique

```
règle-de-style-basique ::=
    liste-de-sélecteurs {
      liste-de-propriétés
    }
```

... où :

```
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

Pour une introduction à la syntaxe des sélecteurs CSS, consultez [ce tutoriel](/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started). Soyez conscient que n'importe quelle erreur de [syntaxe CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started) dans une définition de règle l'invalide entièrement. Les règles non validées sont ignorées par le navigateur. Note : les définitions de règles CSS sont intégralement [basées sur du texte](https://www.w3.org/TR/css-syntax-3/#intro) (ASCII) alors que DOM-CSS / CSSOM (le système de gestion des règles) est [basé sur des objets](https://www.w3.org/TR/cssom/#introduction).

### Syntaxe des règles @

Comme la structure des règles @ varie grandement, veuillez consulter [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) pour trouver la syntaxe que vous souhaitez.

## Index des mots-clés

> [!NOTE]
> Les noms de propriétés de cet index n'incluent **pas** les [noms de l'API DOM JavaScript](/fr/docs/Web/CSS/Reference#index_des_mots-clés) lorsqu'ils sont différents des noms standards CSS.

{{CSS_Ref}}

## Sélecteurs

Sont indiqués dans ce qui suit les divers [sélecteurs](/fr/docs/Web/CSS/Guides/Selectors), qui permettent aux styles d'être appliqués de façon conditionnelle selon diverses caractéristiques des éléments présents dans le DOM.

### [Sélecteurs simples](/fr/docs/Web/CSS/Guides/Selectors#les_sélecteurs_simples)

Les sélecteurs simples sont des sélecteurs fondamentaux. Ce sont les sélecteurs les plus élémentaires qui sont fréquemment combinés pour créer d'autres sélecteurs plus complexes.

- [Sélecteur de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) `nomElement`
- [Sélecteur de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) `.nomClasse`
- [Sélecteur d'identifiant](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors) `#nomID`
- [Sélecteur universel](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors) **`*`**, `ns|*`, **`*|*`**, **`|*`**
- [Sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=valeur]`

### Sélecteur de groupe

- [Sélecteur de conjonction](/fr/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : Indique que les éléments des sélecteurs `A` et `B` doivent être sélectionnés. Il s'agit d'une méthode de groupement pour sélectionner des éléments selon plusieurs critères.

### [Combinateurs](/fr/docs/Web/CSS/Guides/Selectors#les_combinateurs)

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
> See also [Selectors in the Selectors Level 4 specification](https://www.w3.org/TR/selectors/#overview).

## Concepts

### Syntaxe et sémantique

- [Syntaxe CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started)
- [Règles @ (_at-rules_)](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- [Cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Commentaires](/fr/docs/Web/CSS/Guides/Syntax/Comments)
- [Descripteurs](/fr/docs/Glossary/CSS_Descriptor)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Propriétés raccourcies](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Spécificité](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#spécificité)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [Unités et valeurs CSS](/fr/docs/Web/CSS/Guides/Values_and_units)

### Valeurs

- [Valeur réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- [Valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)
- [Valeur initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)
- [Valeur résolue](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_résolue)
- [Valeur définie](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_définie)
- [Valeur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée)

### Disposition

- [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- [Modes de disposition](/fr/docs/Glossary/Layout_mode)
- [Fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Éléments remplacés](/fr/docs/Web/CSS/Guides/Images/Replaced_element_properties)
- [Contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Modèle de mise en forme visuelle](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)

## DOM-CSS / CSSOM

### Principaux types d'objets

- {{DOMxRef("Document.styleSheets")}}
- `{{DOMxRef("StyleSheetList", "styleSheets", "", 1)}}[i].{{DOMxRef("CSSRuleList", "cssRules", "", 1)}}`
- `cssRules[i].{{DOMxRef("CSSRule.cssText", "cssText", "", 1)}}` (sélecteur et style)
- `cssRules[i].{{DOMxRef("CSSStyleRule.selectorText", "selectorText", "", 1)}}`
- {{DOMxRef("HTMLElement.style")}}
- `HTMLElement.style.{{DOMxRef("CSSStyleDeclaration.cssText", "cssText", "", 1)}}` (style uniquement)
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}

### Méthodes importantes

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## Voir aussi

- [Extensions spécifiques de Mozilla à CSS](/fr/docs/Web/CSS/Reference/Mozilla_extensions) (préfixées avec `-moz-`)
- [Extensions spécifiques de WebKit à CSS](/fr/docs/Web/CSS/Reference/Webkit_extensions) (préfixées pour la plupart avec `-webkit-`)
- [Extensions spécifiques de Microsoft à CSS](/fr/docs/Web/CSS/Microsoft_Extensions) (préfixées pour la plupart avec `-ms-`)
