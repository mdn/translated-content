---
title: "XMLHttpRequest : évènement readystatechange"
short-title: readystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

L'évènement **`readystatechange`** est déclenché chaque fois que la propriété {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} d'un {{DOMxRef("XMLHttpRequest")}} change.

> [!WARNING]
> Il ne doit pas être utilisé avec des requêtes synchrones et ne doit pas être utilisé à partir de code natif.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("readystatechange", (event) => { })

onreadystatechange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique sans propriétés supplémentaires.

## Exemples

```js
const xhr = new XMLHttpRequest();
const methode = "GET";
const url = "https://developer.mozilla.org/";

xhr.open(methode, url, true);
xhr.onreadystatechange = () => {
  // Dans les fichiers locaux, le statut est 0 en cas de succès dans Mozilla Firefox
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const statut = xhr.status;
    if (statut === 0 || (statut >= 200 && statut < 400)) {
      // La requête a été complétée avec succès
      console.log(xhr.responseText);
    } else {
      // Oh non ! Il y a eu une erreur avec la requête !
    }
  }
};
xhr.send();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
