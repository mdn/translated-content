---
title: Clipboard.write()
slug: Web/API/Clipboard/write
translation_of: Web/API/Clipboard/write
---
{{APIRef("Clipboard API")}}

La methode **`write()`** de {{domxref("Clipboard")}} écrie des données arbitraire, comme des images, vers le presse-papier. Elle peut être utilisé pour implémenter une fonctionalité de copier coller.

Avant de pouvoir écrire dans le presse-papier, vous devez utiliser [Permissions API](/en-US/docs/Web/API/Permissions_API) pour avoir l'autorisation `"clipboard-write"`.

> **Note :** Browser support for the asynchronous clipboard APIs is still in the process of being implemented. Be sure to check the {{anch("Browser compatibility", "compatibility table")}} as well as {{SectionOnPage("/en-US/docs/Web/API/Clipboard", "Clipboard availability")}} for more information.

## Syntax

    var promise = navigator.clipboard.write(dataTransfer)

### Paramètres

- `dataTransfer`
  - : Un objet {{domxref("DataTransfer")}} contenant les données à écrire dans le presse-papier.

### Return value

Une {{jsxref("Promise")}} qui sera résolut quand les données seront écrite dans le presse papier. Cette promesse est rejetée si l'accés au presse-papier échoue.

## Exemple

Cette fonction d'exemple remplace l'actuel contenut du presse-papier par le texte spécifié en paramètre.

```js
function setClipboard(text) {
  let data = new DataTransfer();

  data.items.add(text, "text/plain");
  navigator.clipboard.write(data).then(function() {
    /* success */
  }, function() {
    /* failure */
  });
}
```

Le code commence par la creation d'un nouveau objet {{domxref("DataTransfer")}} dans lequel le texte est placé pour être envoyé au presse-papier. {{domxref("DataTransferItemList.add()")}} est appelé pour ajouté le texte à`DataTransfer`, ensuite `write()` est appelé, en spécifiant une function d'accomplissement et une fonction d'erreur.

## Specifications

| Specification                                                                            | Status                               | Comment             |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Clipboard API','#h-clipboard-write-data','write()')}} | {{Spec2('Clipboard API')}} | Initial definition. |

## Browser compatibility

{{Compat("api.Clipboard.write")}}
