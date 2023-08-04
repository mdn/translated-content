---
title: Référence CSS
slug: Web/CSS/Reference
---

{{CSSRef}}

Cette **référence CSS** fournit un **[index alphabétique](#index_des_mots-clés)** de toutes les propriétés [CSS](/fr/docs/Web/CSS) standards, des [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes), des [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements), des [types de données](/fr/docs/Web/CSS/CSS_Types) et des [règles @](/fr/docs/Web/CSS/At-rule). Vous pouvez également trouver une liste alphabétique de tous les **[sélecteurs CSS par type](#sélecteurs)** et une liste des **[concepts clés de CSS](#concepts)**. Enfin est inclus un bref sommaire de **[référence sur DOM-CSS / CSSOM](#dom-css_cssom)**.

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

Pour une introduction à la syntaxe des sélecteurs CSS, consultez [ce tutoriel](/fr/docs/Apprendre/CSS/Introduction_à_CSS/La_syntaxe). Soyez conscient que n'importe quelle erreur de [syntaxe CSS](/fr/docs/Learn/CSS/First_steps/How_CSS_is_structured) dans une définition de règle l'invalide entièrement. Les règles non validées sont ignorées par le navigateur. Note : les définitions de règles CSS sont intégralement [basées sur du texte](https://www.w3.org/TR/css-syntax-3/#intro) (ASCII) alors que DOM-CSS / CSSOM (le système de gestion des règles) est [basé sur des objets](https://www.w3.org/TR/cssom/#introduction).

### Syntaxe des règles @

Comme la structure des règles @ varie grandement, veuillez consulter [règle @](/fr/docs/Web/CSS/At-rule) pour trouver la syntaxe que vous souhaitez.

## Index des mots-clés

> **Note :** Les noms de propriétés de cet index n'incluent **pas** les [noms de l'API DOM JavaScript](/fr/docs/Web/CSS/CSS_Properties_Reference) lorsqu'ils sont différents des noms standards CSS.

{{CSS_Ref}}

## Sélecteurs

Sont indiqués dans ce qui suit les divers [sélecteurs](/fr/docs/Web/CSS/CSS_Selectors), qui permettent aux styles d'être appliqués de façon conditionnelle selon diverses caractéristiques des éléments présents dans le DOM.

### [Sélecteurs simples](/fr/docs/Web/CSS/CSS_Selectors#les_sélecteurs_simples/fr/docs/web/css/sélecteurs_css)

Les sélecteurs simples sont des sélecteurs fondamentaux. Ce sont les sélecteurs les plus élémentaires qui sont fréquemment combinés pour créer d'autres sélecteurs plus complexes.

- [Sélecteur de type](/fr/docs/Web/CSS/Type_selectors) `nomElement`
- [Sélecteur de classe](/fr/docs/Web/CSS/Class_selectors) `.nomClasse`
- [Sélecteur d'identifiant](/fr/docs/Web/CSS/ID_selectors) `#nomID`
- [Sélecteur universel](/fr/docs/Web/CSS/Universal_selectors) **`*`**, `ns|*`, **`*|*`**, **`|*`**
- [Sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors) `[attr=valeur]`

### Sélecteur de groupe

- [Sélecteur de conjonction](/fr/docs/Web/CSS/Selector_list) `A, B`
  - : Indique que les éléments des sélecteurs `A` et `B` doivent être sélectionnés. Il s'agit d'une méthode de groupement pour sélectionner des éléments selon plusieurs critères.

### [Combinateurs](/fr/docs/Web/CSS/CSS_Selectors#les_combinateurs)

Les combinateurs sont des sélecteurs qui établissent une relation entre deux sélecteurs ou plus, tel que "A est un enfant de B" ou "A est adjacent à B".

- [Combinateur de voisin direct](/fr/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - : Indique que les éléments sélectionnés par `A` et par `B` ont le même parent et que celui sélectionné par `B` suit immédiatement celui sélectionné par `A`.
- [Combinateur de voisin général](/fr/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - : Indique que les éléments sélectionnés par `A` et par `B` ont le même parent et que celui sélectionné par `B` suit celui sélectionné par `A`, mais pas nécessairement immédiatement après lui.
- [Combinateur d'enfant](/fr/docs/Web/CSS/Child_combinator) `A > B`
  - : Indique que l'élément sélectionné par `B` est un enfant direct de l'élément sélectionné par `A`.
- [Combinateur de descendant](/fr/docs/Web/CSS/Descendant_combinator) `A B`
  - : Indique que l'élément sélectionné par `B` est un descendant de l'élément sélectionné par `A`, mais n'en est pas nécessairement un enfant direct.
- [Combinateur de colonne](/fr/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Indique que l'élément sélectionné par `B` est situé dans la colonne de table indiquée par `A`. Les éléments qui s'étendent sur des colonnes multiples sont considérés comme étant membres de chacune de ces colonnes.

### Pseudo

- [Pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes) `:`
  - : Définit un état spécial pour le ou les éléments ciblés.
- [Pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) `::`
  - : Représente des entités qui ne sont pas incluses en HTML.

> **Remarque :**
>
> See also [Selectors in the Selectors Level 4 specification](https://www.w3.org/TR/selectors/#overview).

## Concepts

### Syntaxe et sémantique

- [Syntaxe CSS](/fr/docs/Learn/CSS/First_steps/How_CSS_is_structured)
- [Règles @ (_at-rules_)](/fr/docs/Web/CSS/At-rule)
- [Cascade](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Commentaires](/fr/docs/Web/CSS/Comments)
- [Descripteurs](</fr/docs/Glossary/Descriptor_(CSS)>)
- [Héritage](/fr/docs/Web/CSS/inheritance)
- [Propriétés raccourcies](/fr/docs/Web/CSS/Shorthand_properties)
- [Spécificité](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#spécificité)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Value_definition_syntax)
- [Unités et valeurs CSS](/fr/docs/Web/CSS/CSS_Values_and_Units)

### Valeurs

- [Valeur réelle](/fr/docs/Web/CSS/actual_value)
- [Valeur calculée](/fr/docs/Web/CSS/computed_value)
- [Valeur initiale](/fr/docs/Web/CSS/initial_value)
- [Valeur résolue](/fr/docs/Web/CSS/resolved_value)
- [Valeur spécifiée](/fr/docs/Web/CSS/specified_value)
- [Valeur utilisée](/fr/docs/Web/CSS/used_value)

### Disposition

- [Contexte de formatage de bloc](/fr/docs/Web/Guide/CSS/Block_formatting_context)
- [Modèle de boîte](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
- [Bloc englobant](/fr/docs/Web/CSS/Containing_block)
- [Modes de disposition](/fr/docs/Web/CSS/Layout_mode)
- [Fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [Éléments remplacés](/fr/docs/Web/CSS/Replaced_element)
- [Contexte d'empilement](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [Modèle de mise en forme visuelle](/fr/docs/Web/CSS/Visual_formatting_model)

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

- [Extensions spécifiques de Mozilla à CSS](/fr/docs/Web/CSS/Mozilla_Extensions) (préfixées avec `-moz-`)
- [Extensions spécifiques de WebKit à CSS](/fr/docs/Web/CSS/WebKit_Extensions) (préfixées pour la plupart avec `-webkit-`)
- [Extensions spécifiques de Microsoft à CSS](/fr/docs/Web/CSS/Microsoft_Extensions) (préfixées pour la plupart avec `-ms-`)
