---
title: Document.enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
tags:
  - API
  - Activation
  - CSS
  - DOM
  - Feuilles de styles
  - Méthode
translation_of: Web/API/Document/enableStyleSheetsForSet
---
{{ APIRef("DOM") }}

Active les feuilles de styles correspondant au nom spécifié dans l'ensemble de feuilles de styles en cours et désactive toutes les autres (à l'exception de celles sans titre qui sont toujours activées).

## Syntaxe

    document.enableStyleSheetsForSet(name)

### Paramètres

- `name`
  - : Le nom des feuilles de styles à activer. Toutes les feuilles de styles dont le titre correspond à ce nom seront activées, tandis que toutes celles possédant un autre titre seront désactivées. Spécifiez une chaîne vide dans le paramètre `name` pour supprimer toutes les feuilles de styles alternatives et préférées (mais pas les feuilles de styles persistantes, c'est-à-dire, celles sans attribut `title` (_titre_)).

## Notes

- Les correspondances de titre sont sensibles à la casse.
- L'appel de cette méthode avec un `name`  `null` n'a pas d'effet ; si vous voulez désactiver toutes les feuilles de styles alternatives et préférées, vous **devez** utiliser "",  la chaîne vide.
- Les feuilles de styles qui n'ont pas de titre ne sont jamais affectées par cette méthode.
- Cette méthode n'affecte jamais les valeurs de {{ domxref("document.lastStyleSheetSet") }} ou {{ domxref("document.preferredStyleSheetSet") }}.

## Exemple

    document.enableStyleSheetsForSet("Some style sheet set name");

## Spécifications

- [HTML5 : Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)

## Voir aussi

- {{ domxref("Stylesheet") }}
- {{ domxref("document.styleSheets") }}
- {{ domxref("document.lastStyleSheetSet") }}
- {{ domxref("document.preferredStyleSheetSet") }}
- {{ domxref("document.selectedStyleSheetSet") }}
- {{ domxref("document.enableStyleSheetsForSet()") }}
- [Utiliser des titres corrects avec des feuilles de styles externes](/fr/docs/Archive/Standards_du_Web/Utiliser_des_titres_corrects_avec_des_feuilles_de_styles_externes)
