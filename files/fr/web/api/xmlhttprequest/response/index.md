---
title: "XMLHttpRequest : propriété response"
short-title: response
slug: Web/API/XMLHttpRequest/response
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`response`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne le contenu du corps de la réponse sous forme de {{JSxRef("ArrayBuffer")}}, de {{DOMxRef("Blob")}}, de {{DOMxRef("Document")}}, d'un {{JSxRef("Object")}} JavaScript ou d'une chaîne de caractères, en fonction de la valeur de la propriété {{DOMxRef("XMLHttpRequest.responseType", "responseType")}} de la requête.

## Valeur

Un objet approprié en fonction de la valeur de {{DOMxRef("XMLHttpRequest.responseType", "responseType")}}.
Vous pouvez tenter de demander que les données soient fournies dans un format spécifique en définissant la valeur de `responseType` après avoir appelé {{DOMxRef("XMLHttpRequest.open", "open()")}} pour initialiser la requête, mais avant d'appeler {{DOMxRef("XMLHttpRequest.send", "send()")}} pour envoyer la requête au serveur.

La valeur est `null` si la requête n'est pas encore terminée ou a échoué, à l'exception du cas où l'on lit des données textuelles en utilisant un `responseType` de `"text"` ou la chaîne de caractères vide (`""`), la réponse peut contenir la réponse partielle tant que la requête est encore dans l'état `LOADING` {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} (3).

## Exemples

Cet exemple présente une fonction, `charger()`, qui charge et traite une page depuis le serveur. Elle fonctionne en créant un objet {{DOMxRef("XMLHttpRequest")}} et en créant un écouteur pour les évènements {{DOMxRef("XMLHttpRequest/readystatechange_event", "readystatechange")}} de sorte que lorsque `readyState` passe à `DONE` (4), la `response` est obtenue et transmise à la fonction de rappel fournie à `charger()`.

Le contenu est traité comme des données textuelles brutes (puisque rien ici ne remplace la valeur par défaut de {{DOMxRef("XMLHttpRequest.responseType", "responseType")}}).

```js
const url = "unePage.html"; // Une page locale

function charger(url, fonctionRappel) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      fonctionRappel(xhr.response);
    }
  };

  xhr.open("GET", url, true);
  xhr.send("");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Obtenir du texte et des données HTML/XML&nbsp;: {{DOMxRef("XMLHttpRequest.responseText")}} et
  {{DOMxRef("XMLHttpRequest.responseXML")}}
