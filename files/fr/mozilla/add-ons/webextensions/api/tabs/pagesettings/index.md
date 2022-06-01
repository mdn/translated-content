---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
tags:
  - API
  - Add-ons
  - Extensions
  - PageSettings
  - Reference
  - Type
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
---
{{AddonSidebar}}

Le type **`tabs.PageSettings`** est utilisé pour contrôler le rendu d'un onglet au format PDF par la méthode  {{WebExtAPIRef("tabs.saveAsPDF()")}}.

Toutes ses propriétés sont facultatives.

Pour définir les en-têtes et les pieds de page, vous pouvez inclure certains caractères spéciaux dans les chaînes que vous fournissez. Ceux-ci seront remplacés dans la sortie rendue comme suit :

- "\&P": le numéro de page, comme "2"
- "\&PT": le numéro de page et le nombre total de pages, comme "2 su 3"
- "\&D": la date / heure actuelle
- "\&T": le titre de la page
- "\&U": l'URL de la page

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `edgeBottom` {{optional_inline}}
  - : `number`. L'espacement entre le bas des pieds et le bord inférieur du papier (pouces). Par défaut : 0.
- `edgeLeft` {{optional_inline}}
  - : `number`. L'espacement entre l'en-tête / pied de page gauche et le bord gauche du papier (pouces). Par défaut : 0
- `edgeRight` {{optional_inline}}
  - : `number`. L'espacement entre l'en-tête / pied droit et le bord gauche du papier (pouces). Par défaut : 0.
- `edgeTop` {{optional_inline}}
  - : `number`. L'espacement entre le haut des en-têtes et le bord supérieur du papier (pouces). Par défaut : 0
- `footerCenter` {{optional_inline}}
  - : `string`. Le texte du pied de page central de la page. Défaut : ''.
- `footerLeft` {{optional_inline}}
  - : `string`. Le texte pour le pied gauche de la page. Par défaut :  '\&PT'.
- `footerRight` {{optional_inline}}
  - : `string`. Le texte pour le pied droit de la page. Par défaut : '\&D'.
- `headerCenter` {{optional_inline}}
  - : `string`. Le texte de l'en-tête du centre de la page. Défaut : ''.
- `headerLeft` {{optional_inline}}
  - : `string`. Le texte de l'en-tête gauche de la page. Par défaut : '\&T'.
- `headerRight` {{optional_inline}}
  - : `string`. Le texte de l'en-tête de la page. Par défaut : '\&U'.
- `marginBottom` {{optional_inline}}
  - : `number`. La marge entre le contenu de la page et le bord inférieur du papier (pouces). Par défaut : 0.5.
- `marginLeft` {{optional_inline}}
  - : `number`. La marge entre le contenu de la page et le bord gauche du papier (pouces). Par défaut : 0.5.
- `marginRight` {{optional_inline}}
  - : `number`. La marge entre le contenu de la page et le bord droit du papier (en pouces). Par défaut : 0.5.
- `marginTop` {{optional_inline}}
  - : `number`. La marge entre le contenu de la page et le bord supérieur du papier (pouces). Par défaut : 0.5.
- `orientation` {{optional_inline}}
  - : `integer`. Orientation de la page: 0 signifie "portrait", 1 signifie "paysage". Par défaut : 0.
- `paperHeight` {{optional_inline}}
  - : `number`. La hauteur du papier dans les unités de format papier. Par défaut : 11.0.
- `paperSizeUnit` {{optional_inline}}
  - : `integer`. L'unité de format de papier: 0 = pouces, 1 = millimètres. Par défaut : 0.
- `paperWidth` {{optional_inline}}
  - : `number`. La largeur du papier dans les unités de format papier. Par défaut : 8.5.
- `scaling` {{optional_inline}}
  - : `number`. Facteur d'échelle du contenu de la page. 1 signifie 100% ou taille normale. Par défaut : 1.
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`. Si les couleurs d'arrière-plan de la page doivent être affichées. Par défaut : false.
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`. Si les images d'arrière-plan de la page doivent être affichées. Par défaut : false.
- `shrinkToFit` {{optional_inline}}
  - : `boolean`. Si le contenu de la page doit rétrécir pour s'adapter à la largeur de la page (remplace la mise à l'échelle). Par défaut : true.

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.PageSettings")}}

{{WebExtExamples}}
