---
title: Modèle de boîte
slug: Web/CSS/CSS_Box_Model
tags:
  - Aperçu
  - CSS
  - CSS Box Model
  - Overview
  - Reference
translation_of: Web/CSS/CSS_Box_Model
original_slug: Web/CSS/Modèle_de_boîte_CSS
---
{{CSSRef}}

**Le modèle de boîte CSS** (_Basic Box Model_ en anglais) est un module CSS qui définit les boîtes rectangulaires (y compris leurs zones de remplissage (_padding_) et de marges) qui sont générées pour disposer les éléments selon leur modèle de mise en forme visuelle.

## Référence

### Propriétés

#### Les propriétés qui définissent le flux du contenu dans une boîte

- {{cssxref("overflow")}}
- {{cssxref("overflow-x")}}
- {{cssxref("overflow-y")}}

#### Les propriétés qui définissent la taille d'une boîte

- {{cssxref("height")}}
- {{cssxref("width")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}

#### Les propriétés qui définissent les marges d'une boîte

- {{cssxref("margin")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{CSSxRef("margin-trim")}} {{Experimental_Inline}}

#### Les propriétés qui définissent le remplissage (_padding_) d'une boîte

- {{cssxref("padding")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-top")}}

#### Les autres propriétés

- {{cssxref("box-shadow")}}
- {{cssxref("visibility")}}

## Guides

- [Une introduction au modèle de boîte CSS](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte)
  - : Cet article explique un des concepts clé de CSS : le modèle de boîte. Il définit notamment les notions de marge, de remplissage (_padding_) ainsi que les différentes zones qui forment une boîte.
- [Maîtriser la fusion des marges](/fr/docs/Web/CSS/Fusion_des_marges)
  - : Dans certains cas, deux marges adjacentes sont fusionnées en une seule. Cet article explique quand cela se produit et comment contrôler ce comportement.
- [Le modèle de mise en forme visuel](/fr/docs/Web/CSS/Modèle_de_mise_en_forme_visuelle)
  - : Cet article explique le modèle de mise en forme visuel.

## Spécifications

| Spécification                                | État                         | Commentaires         |
| -------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS3 Box")}}             | {{Spec2("CSS3 Box")}} | Added `margin-trim`  |
| {{SpecName("CSS2.1", "box.html")}} | {{Spec2("CSS2.1")}}     |                      |
| {{SpecName("CSS1")}}                 | {{Spec2("CSS1")}}     | Définition initiale. |
