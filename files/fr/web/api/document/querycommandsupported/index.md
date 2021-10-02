---
title: Document.queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
tags:
  - API
  - Commandes
  - DOM
  - Document
  - Méthodes
  - editeur
translation_of: Web/API/Document/queryCommandSupported
---
{{ApiRef("DOM")}}

La méthode **`Document.queryCommandSupported()`** indique si la commande d'éditeur spécifiée est prise en charge par le navigateur.

## Syntaxe

    isSupported = document.queryCommandSupported(command);

### Paramètres

- `command`
  - : La commande pour laquelle on veut déterminer si elle est prise en charge.

### Valeur de retour

Renvoie un {{jsxref("Boolean")}} qui est `true` (_vrai_) si la commande est prise en charge et `false` (_faux_) sinon.

## Notes

La commande `'paste'` (_coller_) renvoie `false` (_faux_), pas seulement si la fonctionnalité n'est pas disponible, mais également si le script l'appelant a des privilèges insuffisants pour réaliser l'action [\[1\]](#note1).

## Exemple

```js
var flg = document.queryCommandSupported("SelectAll");

if(flg) {
  // ...Faire quelque chose
}
```

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire          |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML Editing','#querycommandsupported()','querycommandsupported')}} | {{Spec2('HTML Editing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Document.queryCommandSupported")}}

## Voir aussi

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandEnabled()")}}
