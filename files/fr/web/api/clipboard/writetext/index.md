---
title: Clipboard.writeText()
slug: Web/API/Clipboard/writeText
translation_of: Web/API/Clipboard/writeText
---
{{APIRef("Clipboard API")}}

La méthode **`writeText()`** de l’interface {{domxref("Clipboard")}} écrit le texte spécifié dans le presse-papiers du système.

> **Note :** La spécification requiert que l’[API Permissions](/en-US/docs/Web/API/Permissions_API) soit utilisée pour obtenir la permission `"clipboardWrite"` avant d’écrire dans le presse-papiers. Cependant, les prérequis exacts varient de navigateur en navigateur, car c’est une API récente. Consultez la {{anch("Browser compatibility", "table de compatibilité")}} et {{SectionOnPage("/docs/Web/API/Clipboard", "Clipboard availability")}} pour plus de détails.

## Syntaxe

    var promesse = navigator.clipboard.writeText(nouveauTexte)

### Paramètres

- `nouveauTexte`
  - : La {{domxref("DOMString")}} devant être écrite dans le presse-papiers.

### Valeur de retour

Une {{jsxref("Promise")}} qui sera résolue une fois que le contenu du presse-papiers aura été mis à jour. La promesse est rejetée si le code appelant n’a pas la permission d’écrire dans le presse-papiers.

## Exemple

Cet exemple définit le contenu du presse-papiers comme la chaîne "\<presse-papiers vide>".

```js
navigator.clipboard.writeText("<presse-papiers vide>").then(function() {
  /* presse-papiers modifié avec succès */
}, function() {
  /* échec de l’écriture dans le presse-papiers */
});
```

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Clipboard API','#h-clipboard-writetext-data','writeText()')}} | {{Spec2('Clipboard API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Clipboard.writeText")}}
