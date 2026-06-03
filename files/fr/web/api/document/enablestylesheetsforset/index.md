---
title: "Document : méthode enableStyleSheetsForSet()"
short-title: enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

La méthode **`enableStyleSheetsForSet()`** de l'interface {{DOMxRef("Document")}} active les feuilles de styles correspondant au nom spécifié dans l'ensemble de feuilles de styles en cours et désactive toutes les autres (à l'exception de celles sans titre qui sont toujours activées).

## Syntaxe

```js-nolint
enableStyleSheetsForSet(name)
```

### Paramètres

- `name`
  - : Le nom des feuilles de style à activer. Toutes les feuilles de style dont le titre correspond à ce nom seront activées, tandis que toutes les autres qui ont un titre seront désactivées.
    Définissez une chaîne de caractères pour le paramètre _name_ afin de désactiver toutes les feuilles de style alternatives et préférées (mais pas les feuilles de style persistantes&nbsp;; c'est-à-dire celles qui n'ont pas d'attribut `title`).

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Notes

- Les correspondances de titre sont sensibles à la casse.
- L'appel de cette méthode avec un `name` qui vaut `null` n'a pas d'effet&nbsp;; si vous voulez désactiver toutes les feuilles de styles alternatives et préférées, vous **devez** utiliser `""`, la chaîne de caractères vide.
- Les feuilles de styles qui n'ont pas de titre ne sont jamais affectées par cette méthode.
- Cette méthode n'affecte jamais les valeurs de {{DOMxRef("document.lastStyleSheetSet")}} ou {{DOMxRef("document.preferredStyleSheetSet")}}.

## Exemples

```js
document.enableStyleSheetsForSet("Un nom de jeu de feuilles de style");
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Stylesheet")}}
- La propriété {{DOMxRef("Document.styleSheets")}}
- La propriété {{DOMxRef("Document.lastStyleSheetSet")}}
- La propriété {{DOMxRef("Document.preferredStyleSheetSet")}}
- La propriété {{DOMxRef("Document.selectedStyleSheetSet")}}
