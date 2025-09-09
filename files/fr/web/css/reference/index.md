---
title: Référence CSS
slug: Web/CSS/Reference
---

{{CSSRef}}

Cette **référence CSS** fournit un **[index alphabétique](#index_des_mots-clés)** de toutes les propriétés [CSS](/fr/docs/Web/CSS) standards, des [pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes), des [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements), des [types de données](/fr/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) et des [règles @](/fr/docs/Web/CSS/CSS_syntax/At-rule). Vous pouvez également trouver une liste alphabétique de tous les **[sélecteurs CSS par type](#sélecteurs)** et une liste des **[concepts clés de CSS](#concepts)**. Enfin est inclus un bref sommaire de **[référence sur DOM-CSS / CSSOM](#dom-css_cssom)**.

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

Comme la structure des règles @ varie grandement, veuillez consulter [règle @](/fr/docs/Web/CSS/CSS_syntax/At-rule) pour trouver la syntaxe que vous souhaitez.

## Index des mots-clés

> [!NOTE]
> Les noms de propriétés de cet index n'incluent **pas** les [noms de l'API DOM JavaScript](/fr/docs/Web/CSS/Reference#index_des_mots-clés) lorsqu'ils sont différents des noms standards CSS.

{{CSS_Ref}}

## Sélecteurs

Sont indiqués dans ce qui suit les divers [sélecteurs](/fr/docs/Web/CSS/CSS_selectors), qui permettent aux styles d'être appliqués de façon conditionnelle selon diverses caractéristiques des éléments présents dans le DOM.

### [Sélecteurs simples](/fr/docs/Web/CSS/CSS_selectors#les_s%c3%a9lecteurs_simples/fr/docs/web/css/s%c3%a9lecteurs_css)

Les sélecteurs simples sont des sélecteurs fondamentaux. Ce sont les sélecteurs les plus élémentaires qui sont fréquemment combinés pour créer d'autres sélecteurs plus complexes.

- [Sélecteur de type](/fr/docs/Web/CSS/Type_selectors) `nomElement`
- [Sélecteur de classe](/fr/docs/Web/CSS/Class_selectors) `.nomClasse`
- [Sélecteur d'identifiant](/fr/docs/Web/CSS/ID_selectors) `#nomID`
- [Sélecteur universel](/fr/docs/Web/CSS/Universal_selectors) **`*`**, `ns|*`, **`*|*`**, **`|*`**
- [Sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors) `[attr=valeur]`

### Sélecteur de groupe

- [Sélecteur de conjonction](/fr/docs/Web/CSS/Selector_list) `A, B`
  - : Indique que les éléments des sélecteurs `A` et `B` doivent être sélectionnés. Il s'agit d'une méthode de groupement pour sélectionner des éléments selon plusieurs critères.

### [Combinateurs](/fr/docs/Web/CSS/CSS_selectors#les_combinateurs)

Les combinateurs sont des sélecteurs qui établissent une relation entre deux sélecteurs ou plus, tel que "A est un enfant de B" ou "A est adjacent à B".

- [Combinateur de voisin direct](/fr/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Indique que les éléments sélectionnés par `A` et par `B` ont le même parent et que celui sélectionné par `B` suit immédiatement celui sélectionné par `A`.
- [Combinateur de voisin général](/fr/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
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

> [!CALLOUT]
>
> See also [Selectors in the Selectors Level 4 specification](https://www.w3.org/TR/selectors/#overview).

## Concepts

### Syntaxe et sémantique

- [Syntaxe CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started)
- [Règles @ (_at-rules_)](/fr/docs/Web/CSS/CSS_syntax/At-rule)
- [Cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Commentaires](/fr/docs/Web/CSS/CSS_syntax/Comments)
- [Descripteurs](/fr/docs/Glossary/CSS_Descriptor)
- [Héritage](/fr/docs/Web/CSS/CSS_cascade/Inheritance)
- [Propriétés raccourcies](/fr/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Spécificité](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#spécificité)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Unités et valeurs CSS](/fr/docs/Web/CSS/CSS_Values_and_Units)

### Valeurs

- [Valeur réelle](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
- [Valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing)
- [Valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc)
- [Valeur résolue](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
- [Valeur spécifiée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa)
- [Valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)

### Disposition

- [Contexte de formatage de bloc](/fr/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Bloc englobant](/fr/docs/Web/CSS/CSS_display/Containing_block)
- [Modes de disposition](/fr/docs/Glossary/Layout_mode)
- [Fusion des marges](/fr/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Éléments remplacés](/fr/docs/Web/CSS/CSS_images/Replaced_element_properties)
- [Contexte d'empilement](/fr/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Modèle de mise en forme visuelle](/fr/docs/Web/CSS/CSS_display/Visual_formatting_model)

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
