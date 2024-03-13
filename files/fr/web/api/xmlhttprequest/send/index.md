---
title: XMLHttpRequest.send()
slug: Web/API/XMLHttpRequest/send
---

{{APIRef('XMLHttpRequest')}}

La méthode {{domxref("XMLHttpRequest")}} **`send()`** envoie la requête au serveur. Si la requête est asynchrone (elle l'est par défaut), la méthode envoie un retour dés que la requête est partie et le résultat est intégré en utilisant les évènements. En cas de requête synchrone, elle ne renvoie rien tant que la réponse n'est pas retournée.

`send()` accepte un paramètre optionnel qui vous permet de spécifier le corps de la requête; c'est principalement utilisé pour les requêtes comme {{HTTPMethod("PUT")}}. Si la méthode est {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, le paramètre `body` est ignoré et le corps de la requête est fixé à `null`.

Si aucun "header"{{HTTPHeader("Accept")}} n'a été paramétré dans {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, un "header" `Accept` avec le type `"*/*"` (tous types) est envoyé.

## Syntaxe

```js
XMLHttpRequest.send(body);
```

### Paramètres

- `body` {{optional_inline}}

  - : Le corps des données à envoyer dans la requête XHR. Cela peut être :

    - Un {{domxref("Document")}}, dans quel cas il est sérialisé avant d'être envoyé.
    - Un `XMLHttpRequestBodyInit` qui, selon [la spécification `Fetch` (en anglais)](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit), peut être un [`Blob`](/fr/docs/Web/API/Blob), [`BufferSource`](/fr/docs/Web/API/BufferSource), [`FormData`](/fr/docs/Web/API/FormData), [`URLSearchParams`](/fr/docs/Web/API/URLSearchParams) ou un objet [`USVString`](/fr/docs/Web/API/USVString).
    - `null`

    Si la valeur du corps n'est pas spécifiée, la valeur par défaut `null` est employée.

La meilleure manière d'envoyer du contenu binaire (par exemple dans l'upload de fichiers) est d'utiliser un {{domxref("ArrayBufferView")}} ou {{domxref("Blob")}} en conjonction avec la méthode `send()`.

### Valeur de retour

`undefined`.

### Exceptions

| Exception           | Description                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | `send()` a déjà été invoquée pour la requête, et/ou celle-ci est incomplète.                               |
| `NetworkError`      | Le type de ressource à récupérer est un **BLOB**, _(binary large object_) , et la méthode n'est pas `GET`. |

## Exemple: GET

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.onload = function () {
  // Requête finie, traitement ici.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Example: POST

```js
var xhr = new XMLHttpRequest();
xhr.open("POST", "/server", true);

//Envoie les informations du header adaptées avec la requête
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
  //Appelle une fonction au changement d'état.
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    // Requête finie, traitement ici.
  }
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'utilisation de XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
