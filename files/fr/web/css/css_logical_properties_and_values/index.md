---
title: CSS Logical Properties
slug: Web/CSS/CSS_logical_properties_and_values
---

{{CSSRef}}

**_CSS Logical Properties_** (les propriétés logiques CSS) est un module CSS qui définit une correspondance logique vers les propriétés physiques de contrôle de la mise en page selon le sens de lecture et l'orientation du texte. On aura deux directions logiques : _block_ et _inline_, perpendiculaires, qui dépendent du sens de l'orientation du document.

Ce module définit également les propriétés logiques et les valeurs pour les propriétés précédemment définies avec CSS 2.1. Les propriétés logiques sont des propriétés dont l'orientation est relative au mode d'écriture du document et possèdent des propriétés physiques équivalentes.

### Dimension de bloc ou de ligne

Les propriétés et valeurs logiques utilisent les termes abstraits _bloc_ (_block_) ou ligne (_inline_) afin de décrire leur direction. La signification physique de ces termes dépend du [mode d'écriture](/fr/docs/Web/CSS/CSS_Writing_Modes).

- Dimension de bloc
  - : C'est la dimension perpendiculaire au flux du texte sur une ligne. Autrement dit, il s'agit de la dimension verticale lorsque le texte est écrit dans un mode horizontal et de la dimension horizontale lorsque le texte est écrit verticalement (pour le français, cette dimension correspond donc à l'axe vertical).
- Dimension en ligne
  - : C'est la dimension parallèle au flux du texte sur une ligne. Autrement dit, il s'agit de la dimension horizontale lorsque le texte est écrit dans un mode horizontal et de la dimension verticale lorsque le texte est écrit verticalement (pour le français, cette dimension correspond donc à l'axe horizontal).

## Référence

### Propriétés relatives au dimensionnement

- {{CSSxRef("block-size")}} {{Experimental_Inline}}
- {{CSSxRef("inline-size")}} {{Experimental_Inline}}
- {{CSSxRef("max-block-size")}} {{Experimental_Inline}}
- {{CSSxRef("max-inline-size")}} {{Experimental_Inline}}
- {{CSSxRef("min-block-size")}} {{Experimental_Inline}}
- {{CSSxRef("min-inline-size")}} {{Experimental_Inline}}

### Propriétés relatives aux marges, bordures et remplissages

- {{CSSxRef("border-block")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-color")}} (mot-clé `logical` {{Experimental_Inline}})
- {{CSSxRef("border-inline")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-start-start-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-start-end-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-end-start-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-end-end-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-style")}} (mot-clé `logical` {{Experimental_Inline}})
- {{CSSxRef("border-width")}} (mot-clé `logical` {{Experimental_Inline}})
- {{CSSxRef("margin")}} (mot-clé `logical` {{Experimental_Inline}})
- {{CSSxRef("margin-block")}} {{Experimental_Inline}}
- {{CSSxRef("margin-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("margin-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline-start")}} {{Experimental_Inline}}
- {{CSSxRef("padding")}} (mot-clé `logical` {{Experimental_Inline}})
- {{CSSxRef("padding-block")}} {{Experimental_Inline}}
- {{CSSxRef("padding-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("padding-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline-start")}} {{Experimental_Inline}}

### Propriétés relatives aux flottements et au positionnement

- {{CSSxRef("clear")}} (mots-clés `inline-end` {{Experimental_Inline}} et `inline-start` {{Experimental_Inline}})
- {{CSSxRef("float")}} (mots-clés `inline-end` {{Experimental_Inline}} et `inline-start` {{Experimental_Inline}})
- {{CSSxRef("inset")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}}

### Autres propriétés

- {{CSSxRef("caption-side")}} (mots-clés `inline-end` {{Experimental_Inline}} et `inline-start` {{Experimental_Inline}})
- {{CSSxRef("overflow-block")}} {{Experimental_Inline}}
- {{CSSxRef("overflow-inline")}} {{Experimental_Inline}}
- {{CSSxRef("resize")}} {{Experimental_Inline}} (mots-clés `block` {{Experimental_Inline}} et `inline` {{Experimental_Inline}})
- {{CSSxRef("text-align")}} (mots-clés `end` {{Experimental_Inline}} et `start` {{Experimental_Inline}})

### Propriétés dépréciées

- {{CSSxRef("inset-block-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (désormais {{CSSxRef("inset-block-end")}} {{Experimental_Inline}})
- {{CSSxRef("inset-block-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (désormais {{CSSxRef("inset-block-start")}} {{Experimental_Inline}})
- {{CSSxRef("inset-inline-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (désormais {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}})
- {{CSSxRef("inset-inline-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} (désormais {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}})

## Guides

- [Concepts de base pour les propriétés logiques et les valeurs logiques](/fr/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)
- [Les propriétés logiques utiles au dimensionnement](/fr/docs/Web/CSS/CSS_Logical_Properties/Sizing)
- [Les propriétés logiques utiles aux marges, bordures et remplissage (_padding_)](/fr/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding)
- [Les propriétés logiques utiles aux flottements et au positionnement](/fr/docs/Web/CSS/CSS_Logical_Properties/Floating_and_positioning)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Pour des informations précises sur chaque propriété, se référer au tableau de compatibilité des pages des propriétés.
