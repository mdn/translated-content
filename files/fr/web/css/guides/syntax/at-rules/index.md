---
title: Règles @
slug: Web/CSS/Guides/Syntax/At-rules
original_slug: Web/CSS/CSS_syntax/At-rules
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Les **règles @** sont des [instructions CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#css_statements) qui indiquent au CSS comment se comporter. Elles commencent par un arobase, `@` (U+0040 COMMERCIAL AT), suivi d'un identifiant. Elles incluent tout ce qui va du mot-clé @ jusqu'au prochain point-virgule, `;` (U+003B SEMICOLON), ou au prochain [bloc CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#css_declaration_blocks), selon ce qui vient en premier.

Les règles @ servent à regrouper et structurer des règles de style et d'autres règles @, à déclarer des informations de style non directement associées au contenu sélectionné, et à gérer des constructions syntaxiques comme les imports et les mappages de mots-clés de namespace.

## Syntaxe

La règle @ est définie dans le module de [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax), chaque règle @ étant définie dans son module respectif. Elles prennent généralement l'une des deux formes suivantes selon la règle et son objectif&nbsp;: les règles @ de déclaration et les règles @ de bloc, qui peuvent contenir des règles qualifiées imbriquées, d'autres règles @ ou des déclarations.

### Règles @ de déclaration

```css
/* Structure générale */
@identifiant (RÈGLE);

/* Exemple&nbsp;: indique au navigateur d'utiliser l'encodage UTF-8 */
@charset "utf-8";
```

Les règles @ de déclaration se terminent par un point-virgule. Il existe plusieurs règles @ de déclaration, désignées par leur identifiant, chacune ayant une syntaxe différente&nbsp;:

- {{cssxref("@charset")}}
  - : Un algorithme (ayant la forme syntaxique d'une règle @, mais n'étant pas une définition) qui détermine l'encodage de secours utilisé par la feuille de style ([Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax)).
- {{cssxref("@import")}}
  - : Indique au moteur CSS d'inclure une feuille de style externe ([Cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Définit l'ordre de priorité en cas de couches de cascade multiples ([Cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)). Utilisée aussi comme [règle @ de bloc](#layer_2) pour définir les styles d'une couche.
- {{cssxref("@namespace")}}
  - : Définit un namespace par défaut pour une feuille de style ou un préfixe de namespace qu'un sélecteur ne correspond que si le namespace et les autres composants du sélecteur correspondent ([Namespaces CSS](/fr/docs/Web/CSS/Guides/Namespaces)).

### Règles @ de bloc

```css
@identifiant (RÈGLE) {
}
```

Les règles @ de bloc se terminent par un bloc `{}` qui contient des règles imbriquées, d'autres règles @, ou des déclarations de propriétés ou de descripteurs.

- {{cssxref("@counter-style")}}
  - : Définit des styles de compteur personnalisés et étend les styles de liste prédéfinis ([Styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)).
- {{cssxref("@container")}}
  - : Règle conditionnelle de groupe qui applique son contenu si le conteneur satisfait la [`<container-condition>`](/fr/docs/Web/CSS/Reference/At-rules/@container#container-condition) ([CSS containment](/fr/docs/Web/CSS/Guides/Containment)).
- {{cssxref("@font-face")}}
  - : Définit les emplacements des ressources de police, locales et externes, ainsi que les caractéristiques de style pour l'utilisation de ces ressources avec une {{cssxref("font-family")}} déclarée ([Polices CSS](/fr/docs/Web/CSS/Guides/Fonts)).
- {{cssxref("@font-feature-values")}} (ainsi que `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` et `@character-variant`)
  - : Contrôle l'affichage des polices par famille en définissant des variantes spécifiques ou des noms personnalisés pour les index de fonctionnalités dans {{cssxref("font-variant-alternates")}} en OpenType ([Polices CSS](/fr/docs/Web/CSS/Guides/Fonts)).
- {{cssxref("@keyframes")}} (et l'alias `@-webkit-keyframes`)
  - : Définit une animation nommée en décrivant les styles CSS pour les étapes intermédiaires (ou keyframes) de la séquence d'animation ([Animations CSS](/fr/docs/Web/CSS/Guides/Animations)).
- {{cssxref("@layer")}}
  - : Crée une couche de cascade nommée avec les règles CSS pour cette couche ([Cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)). Utilisée aussi comme [règle @ de déclaration](#layer) pour définir l'ordre de priorité en cas de couches multiples.
- {{cssxref("@media")}}
  - : Règle conditionnelle de groupe qui applique son contenu si le périphérique satisfait la condition définie par une _requête média_ ([Règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)).
- {{cssxref("@page")}}
  - : Spécifie les aspects d'une page à imprimer, comme ses dimensions, son orientation et ses marges ([Média paginé CSS](/fr/docs/Web/CSS/Guides/Paged_media)).
- {{cssxref("@position-try")}}
  - : Définit des options de position personnalisées pouvant servir à définir des options de positionnement et d'alignement de secours pour les éléments ancrés ([Positionnement d'ancre CSS](/fr/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Définit une [propriété personnalisée CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), permettant la vérification de type, la contrainte, la définition de valeurs par défaut et le contrôle de l'héritage ([Propriétés personnalisées pour les variables CSS](/fr/docs/Web/CSS/Guides/Cascading_variables)).
- {{cssxref("@scope")}}
  - : Définit une portée dans laquelle appliquer des styles à des éléments sélectionnés ([Cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Définit les valeurs de propriété initiales pour un élément lors de sa première mise à jour de style, par exemple lors d'une transition depuis `display: none` ([Transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)).
- {{cssxref("@supports")}}
  - : Règle conditionnelle de groupe qui applique son contenu si le navigateur prend en charge les fonctionnalités CSS de la condition donnée ([Règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Active la transition de vue pour le document courant ([API View Transition](/fr/docs/Web/API/View_Transition_API)), et pour le document de destination lors d'une navigation inter-document.

## Index

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@position-try")}}
- {{cssxref("@property")}}
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}
- {{cssxref("@view-transition")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Fonctions de règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [Imbrication des règles @ CSS](/fr/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Instructions CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#instructions_css)
- L'[interface CSSRule](/fr/docs/Web/API/CSSRule)
- Le module des [règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
- [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
