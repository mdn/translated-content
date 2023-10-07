---
title: Syntaxe
slug: Web/CSS/Syntax
l10n:
  sourceCommit: 71c4bc0b6329ec40ddbefd8d3124547e91cfa612
---

{{CSSRef}}

L'objectif fondamental du langage <i lang="en">Cascading Style Sheets</i> ([CSS](/fr/docs/Web/CSS)) est de permettre à un moteur de navigation d'associer des fonctionnalités spécifiques, comme les couleurs, le positionnement ou les décorations à des éléments de la page. La _syntaxe CSS_ reflète cet objectif et ses éléments de base sont&nbsp;:

- La **propriété** est un identifiant, c'est-à-dire un _nom_ compréhensible par un être humain, qui définit quelle fonctionnalité est ciblée.
- La **valeur** décrit comment la fonctionnalité doit être gérée par le moteur. Chaque propriété a un ensemble de valeurs valides, définies par une grammaire formelle, ainsi qu'une signification sémantique, implémentées par le moteur du navigateur.

## Déclarations CSS

La définition des propriétés CSS sur des valeurs spécifiques est la fonction principale du langage CSS. Une paire de propriété et de valeur s'appelle une **déclaration**, et tout moteur CSS calcule quelles déclarations s'appliquent à chaque élément d'une page afin de la mettre en page de manière appropriée et de la styliser.

Les propriétés et les valeurs sont insensibles à la casse par défaut dans CSS. La paire est séparée par deux-points, '`:`' (`U+003A COLON`), et les espaces blancs avant, entre et après les propriétés et les valeurs, mais pas nécessairement à l'intérieur, sont ignorés.

![css syntax - declaration.png](css_syntax_-_declaration.png)

Il existe plus de [100 propriétés différentes](/fr/docs/Web/CSS/Reference) en CSS et un nombre quasi infini de valeurs différentes. Toutes les paires de propriétés et de valeurs ne sont pas autorisées et chaque propriété définit les valeurs valides. Lorsqu'une valeur n'est pas valide pour une propriété donnée, la déclaration est considérée comme _invalide_ et est totalement ignorée par le moteur CSS.

## Blocs de déclaration CSS

Les déclarations sont regroupées en **blocs**, c'est-à-dire dans une structure délimitée par une accolade d'ouverture, '`{`' (`U+007B LEFT CURLY BRACKET`), et de fermeture, '`}`' (`U +007D CROCHET DROITE`). Les blocs peuvent parfois être imbriqués, les accolades ouvrantes et fermantes doivent donc correspondre.

![css syntax - block.png](css_syntax_-_block.png)

Ces blocs sont naturellement appelés **blocs de déclaration** et les déclarations à l'intérieur sont séparées par un point-virgule, '`;`' (`U+003B SEMICOLON`). Un bloc de déclaration peut être vide, c'est-à-dire contenir une déclaration nulle. Les espaces blancs autour des déclarations sont ignorés. La dernière déclaration d'un bloc n'a pas besoin d'être terminée par un point-virgule, bien que faire ainsi soit considéré comme une bonne pratique (cela évite d'oublier de l'ajouter lors de l'extension du bloc avec une autre déclaration).

Un bloc de déclaration CSS est visualisé dans le schéma ci-dessous.

![css syntax - declarations block.png](declaration-block.png)

> **Note :** Le contenu d'un bloc de déclaration CSS, c'est-à-dire une liste de déclarations séparées par des points-virgules, sans les accolades d'ouverture et de fermeture, peut être placé dans un attribut HTML [`style`](/fr/docs/Web/HTML/Global_attributes#attr-style).

## Ensembles de règles CSS

Si les feuilles de style ne pouvaient appliquer qu'une déclaration à chaque élément d'une page Web, elles seraient plutôt inutiles. Le véritable objectif est d'appliquer différentes déclarations à différentes parties du document.

Le CSS permet cela en associant des conditions à des blocs de déclarations. Chaque bloc de déclaration (valide) est précédé d'un ou plusieurs [**sélecteurs**](/fr/docs/Web/CSS/CSS_Selectors) séparés par des virgules, qui sont des conditions sélectionnant certains éléments de la page. Un [<i lang="en">groupe de sélecteurs</i>](/fr/docs/Web/CSS/Selector_list) et un bloc de déclarations associé, ensemble, forment ce qu'on appelle une **règle** (en anglais, le terme formel est <i lang="en">ruleset</i>, mais <i lang="en">rule</i> est également usité).

Une règle CSS est visualisé dans le diagramme ci-dessous.

![css syntax - ruleset.png](ruleset.png)

Comme un élément de la page peut correspondre à plusieurs sélecteurs, et donc par plusieurs règles contenant potentiellement plusieurs fois une même propriété, avec des valeurs différentes, la norme CSS définit laquelle a priorité sur l'autre et doit être appliquée&nbsp;: c'est ce qu'on appelle la [cascade](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

> **Note :** Même si on peut utiliser une règle utilisant un groupe de sélecteurs afin d'éviter de dupliquer une même règle pour chaque sélecteur distinct de ce groupe, cela n'a pas exactement le même effet. En effet, si on utilise un groupe de sélecteurs contenant un sélecteur invalide, c'est tout le groupe qui sera invalide et la règle sera ignoré. Si on utilise plusieurs règles pour chacun des sélecteurs individuels, seule celle du sélecteur invalide ne sera pas appliquée.

## Instructions CSS

Les ensembles de règles sont les principaux éléments constitutifs d'une feuille de style, qui se compose souvent d'une longue liste de ceux-ci. Mais il y a d'autres informations qu'on peut transmettre dans la feuille de style, comme le jeu de caractères, d'autres feuilles de style externes à importer, les descriptions des polices de caractères ou des compteurs de liste et bien d'autres. On utilisera alors d'autres types d'instructions spécifiques.

Une **instruction** est un bloc de construction qui commence par n'importe quel caractère autre qu'un espace et se termine à la première accolade ou point-virgule fermant (en dehors d'une chaîne, sans échappement et qui ne soit pas inclus dans une autre paire d'accolades (`{}`), de parenthèses (`()`), ou de crochets (`[]`)).

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

Il existe deux types de déclarations&nbsp;:

- Les **règles** qui associent une collection de déclarations CSS à une condition décrite par un [sélecteur](/fr/docs/Web/CSS/CSS_Selectors).
- Les **règles @** qui commencent par une arobase, '`@`' (`U+0040 COMMERCIAL AT`), suivie d'un identifiant et se poursuivant jusqu'à la fin de l'instruction, c'est-à-dire jusqu'à au prochain point-virgule (;) en dehors d'un bloc, ou à la fin du bloc suivant. Chaque type de [règles @](/fr/docs/Web/CSS/At-rule), défini par l'identifiant, peut avoir sa propre syntaxe interne, et bien sûr sa sémantique. Ils sont utilisés pour transmettre des informations de métadonnées (comme [`@charset`](/fr/docs/Web/CSS/@charset) ou [`@import`](/fr/docs/Web/CSS/@import)), des informations conditionnelles (comme [`@media`](/fr/docs/Web/CSS/@media) ou [`@document`](/fr/docs/Web/CSS/@document)), ou des informations descriptives (comme [`@font-face`](/fr/docs/Web/CSS/@font-face)).

Toute instruction qui n'est pas une règle ou une règle @ est invalide et ignorée.

### Instructions imbriquées

Il existe un autre groupe d'instructions&nbsp;: les **instructions imbriquées**. Ce sont des instructions qui peuvent être utilisées dans un sous-ensemble spécifique de règles @&nbsp;: les _[règles de groupe conditionnelles](/fr/docs/Web/CSS/At-rule#les_règles_de_groupe_conditionnelles)_. Ces déclarations ne s'appliquent que si une condition spécifique est satisfaite. Par exemple, le contenu d'une règle @ `@media` est appliqué uniquement si l'appareil sur lequel le navigateur s'exécute correspond à la condition exprimée.

## Voir aussi

- Concepts clés CSS&nbsp;:
  - **Syntaxe CSS**
  - [Commentaires](/fr/docs/Web/CSS/Comments)
  - [Spécificité](/fr/docs/Web/CSS/Specificity)
  - [Héritage](/fr/docs/Web/CSS/inheritance)
  - [Modèle de boîte](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Mode de mise en page](/fr/docs/Web/CSS/Layout_mode)
  - [Modèle de mise en forme visuelles](/fr/docs/Web/CSS/Visual_formatting_model)
  - [Fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Valeurs
    - [Valeur initiale](/fr/docs/Web/CSS/initial_value)
    - [Valeur calculée](/fr/docs/Web/CSS/computed_value)
    - [Valeur utilisée](/fr/docs/Web/CSS/used_value)
    - [Valeur réelle](/fr/docs/Web/CSS/actual_value)
  - [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Value_definition_syntax)
  - [Propriétés raccourcies](/fr/docs/Web/CSS/Shorthand_properties)
  - [Élément remplacé](/fr/docs/Web/CSS/Replaced_element)
