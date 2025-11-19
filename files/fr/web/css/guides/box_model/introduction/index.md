---
title: Introduction au modèle de boîte CSS
short-title: Introduction
slug: Web/CSS/Guides/Box_model/Introduction
original_slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Lors de la mise en page d'un document, le moteur de rendu du navigateur représente chaque élément sous la forme d'une boîte rectangulaire selon le **modèle de boîte CSS de base**. CSS définit la taille, la position et les propriétés (couleur, arrière-plan, taille de la bordure, etc.) de ces boîtes.

Chaque boîte est composée de quatre parties (ou _zones_), définies par leurs bords respectifs&nbsp;: le _bord du contenu_, le _bord du remplissage_, le _bord de la bordure_ et le _bord de la marge_.

![Modèle de boîte CSS](boxmodel.png)

## Zone de contenu

La **zone de contenu**, délimitée par le bord du contenu, contient le contenu «&nbsp;réel&nbsp;» de l'élément, comme du texte, une image ou un lecteur vidéo. Ses dimensions sont la _largeur du contenu_ (ou _largeur de la boîte de contenu_) et la _hauteur du contenu_ (ou _hauteur de la boîte de contenu_). Elle possède souvent une couleur d'arrière-plan ou une image d'arrière-plan.

Si la propriété {{cssxref("box-sizing")}} est définie sur `content-box` (valeur par défaut) et si l'élément est un élément de type bloc, la taille de la zone de contenu peut être explicitement définie avec les propriétés {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} et {{cssxref("max-height")}}.

## Zone de remplissage

La **zone de remplissage**, délimitée par le bord du remplissage, étend la zone de contenu pour inclure le remplissage de l'élément. Ses dimensions sont la _largeur de la boîte de remplissage_ et la _hauteur de la boîte de remplissage_.

L'épaisseur du remplissage est déterminée par les propriétés {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} et la propriété abrégée {{cssxref("padding")}}.

## Zone de bordure

La **zone de bordure**, délimitée par le bord de la bordure, étend la zone de remplissage pour inclure les bordures de l'élément. Ses dimensions sont la _largeur de la boîte de bordure_ et la _hauteur de la boîte de bordure_.

L'épaisseur des bordures est déterminée par les propriétés {{cssxref("border-width")}} et la propriété abrégée {{cssxref("border")}}. Si la propriété {{cssxref("box-sizing")}} est définie sur `border-box`, la taille de la zone de bordure peut être explicitement définie avec les propriétés {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} et {{cssxref("max-height")}}. Lorsqu'un arrière-plan ({{cssxref("background-color")}} ou {{cssxref("background-image")}}) est défini sur une boîte, il s'étend jusqu'au bord extérieur de la bordure (c'est-à-dire qu'il passe sous la bordure dans l'ordre des couches). Ce comportement par défaut peut être modifié avec la propriété CSS {{cssxref("background-clip")}}.

## Zone de marge

La **zone de marge**, délimitée par le bord de la marge, étend la zone de bordure pour inclure une zone vide utilisée pour séparer l'élément de ses voisins. Ses dimensions sont la _largeur de la boîte de marge_ et la _hauteur de la boîte de marge_.

La taille de la zone de marge est déterminée par les propriétés {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} et la propriété abrégée {{cssxref("margin")}}. Lorsque la [fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing) se produit, la zone de marge n'est pas clairement définie car les marges sont partagées entre les boîtes.

Enfin, notez que pour les éléments en ligne non remplacés, l'espace occupé (la contribution à la hauteur de la ligne) est déterminé par la propriété {{cssxref('line-height')}}, même si les bordures et le remplissage sont toujours affichés autour du contenu.

## Voir aussi

- [Disposition et bloc conteneur](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Apprendre&nbsp;: Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Concepts clés de CSS&nbsp;:
  - [Syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Commentaires](/fr/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Modes de disposition](/fr/docs/Glossary/Layout_mode)
  - [Modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Valeurs&nbsp;:
    - [Valeurs initiales](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale)
    - [Valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée)
    - [Valeurs utilisées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée)
    - [Valeurs réelles](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
  - [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Propriétés abrégées](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced elements", "Éléments remplacés")}}
