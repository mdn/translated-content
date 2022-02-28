---
title: Document.styleSheets
slug: Web/API/Document/styleSheets
translation_of: Web/API/DocumentOrShadowRoot/styleSheets
translation_of_original: Web/API/Document/styleSheets
original_slug: Web/API/DocumentOrShadowRoot/styleSheets
---
{{APIRef}}

La propriété **`Document.styleSheets`** est en lecture seule et retourne une liste [`StyleSheetList`](/fr/docs/Web/API/StyleSheetList) d'objets [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet), qui font référence à l'ensemble des feuilles de style contenues ou embarquées dans le document.

## Syntaxe

    var styleSheetList = document.styleSheets;

L'objet retourné est une liste {{domxref("StyleSheetList")}}.

Il s'agit d'une collection ordonnée d'objets [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet). `styleSheetList.item(index)` ou `styleSheetList[index]` retourne un seul objet stylesheet par son `index` (`index` débute par 0).

## Spécification

| Spécification                                                                                                                        | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('CSSOM', '#dom-document-stylesheets', 'styleSheets')}}                                             | {{Spec2('CSSOM')}}         |             |
| {{SpecName('DOM2 Style', 'stylesheets.html#StyleSheets-DocumentStyle-styleSheets', 'styleSheets')}} | {{Spec2('DOM2 Style')}} |             |

## Voir aussi

- {{Link("/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information")}}

<!---->

- [DOM Level 2 Style: styleSheets](http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-DocumentStyle-styleSheets)
