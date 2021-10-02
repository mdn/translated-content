---
title: StyleSheet
slug: Web/API/StyleSheet
tags:
  - API
  - CSS
  - DOM
  - Interface
  - StyleSheet
translation_of: Web/API/StyleSheet
---
{{APIRef("CSSOM")}}

Un objet qui implémente l'interface `StyleSheet` représente une seule feuille de style. Les feuilles de style CSS implémenteront également l'interface plus spécialisée {{domxref("CSSStyleSheet")}}.

## Propriétés

- {{domxref("StyleSheet.disabled")}}
  - : Un booléen ({{domxref("Boolean")}}) indiquant si la feuille de style est appliquée ou non.
- {{domxref("StyleSheet.href")}} {{readonlyInline}}
  - : Une chaîne de caractères ({{domxref("DOMString")}}) représentant l'emplacement de la feuille de style.
- {{domxref("StyleSheet.media")}} {{readonlyInline}}
  - : Une {{domxref("MediaList")}} représentant le média de destination pour les informations de style.
- {{domxref("StyleSheet.ownerNode")}} {{readonlyInline}}
  - : Un objet {{domxref("Node")}} qui représente le nœud associant cette feuille de style avec le document courant.
- {{domxref("StyleSheet.parentStyleSheet")}} {{readonlyInline}}
  - : Un objet {{domxref("StyleSheet")}} qui inclut l'objet courant si ce dernier possède un parent ou `null` s'il n'y en a pas.
- {{domxref("StyleSheet.title")}} {{readonlyInline}}
  - : Une chaîne de caractères ({{domxref("DOMString")}}) indiquant le titre indicatif de la feuille de style courante.
- {{domxref("StyleSheet.type")}} {{readonlyInline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} indiquant le langage de représentation pour cette feuille de style.

## Spécifications

| Spécification                                                                                                    | État                             | Commentaire                                                    |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| {{SpecName('CSSOM', '#stylesheet', 'StyleSheet')}}                                             | {{Spec2('CSSOM')}}         | Pas de changement depuis {{SpecName('DOM2 Style')}}. |
| {{SpecName('DOM2 Style', 'stylesheets.html#StyleSheets-StyleSheet', 'StyleSheet')}} | {{Spec2('DOM2 Style')}} | Définition initiale.                                           |

## Compatibilité des navigateurs

{{Compat("api.StyleSheet")}}

## Voir aussi

- {{domxref("CSSStyleSheet")}}
