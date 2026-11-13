---
title: "XMLHttpRequest : méthode send()"
short-title: send()
slug: Web/API/XMLHttpRequest/send
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`send()`** de l'interface {{DOMxRef("XMLHttpRequest")}} envoie la requête au serveur.

Si la requête est asynchrone (ce qui est le cas par défaut), cette méthode retourne dès que la requête est envoyée et le résultat est livré par des évènements. Si la requête est synchrone, cette méthode ne retourne pas avant que la réponse ne soit arrivée.

`send()` accepte un paramètre optionnel qui vous permet de définir le corps de la requête&nbsp;; cela est principalement utilisé pour des requêtes telles que {{HTTPMethod("PUT")}}. Si la méthode de la requête est {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, le paramètre `body` est ignoré et le corps de la requête est défini sur `null`.

Si aucun en-tête {{HTTPHeader("Accept")}} n'a été défini à l'aide de la méthode {{DOMxRef("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, un en-tête `Accept` avec le type `"*/*"` (tout type) est envoyé.

## Syntaxe

```js-nolint
send()
send(body)
```

### Paramètres

- `body` {{Optional_Inline}}
  - : Un corps de données à envoyer dans la requête XHR. Cela peut être&nbsp;:
    - Un objet {{DOMxRef("Document")}}, dans lequel cas il est sérialisé avant d'être envoyé.
    - Un objet `XMLHttpRequestBodyInit`, qui, [selon la spécification Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit), peut être un {{DOMxRef("Blob")}}, un {{JSxRef("ArrayBuffer")}}, un {{JSxRef("TypedArray")}}, un {{JSxRef("DataView")}}, un {{DOMxRef("FormData")}}, un {{DOMxRef("URLSearchParams")}}, ou une chaîne de caractères.
    - `null`

    Si aucune valeur n'est définie pour le corps, une valeur par défaut de `null` est utilisée.

La meilleure façon d'envoyer du contenu binaire (par exemple, lors de l'envoi de fichiers) est d'utiliser un objet {{JSxRef("TypedArray")}}, un objet {{JSxRef("DataView")}} ou un objet {{DOMxRef("Blob")}} en conjonction avec la méthode `send()`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si `send()` a déjà été invoquée pour la requête, et/ou celle-ci est complète.
- `NetworkError` {{DOMxRef("DOMException")}}
  - : Levée si le type de ressource à récupérer est un Blob, et que la méthode n'est pas `GET`.

## Exemple : GET

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.onload = () => {
  // Requête finie, traitement ici.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Exemple : POST

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "/server", true);

// Envoie les informations du header adaptées avec la requête
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = () => {
  // Appelle une fonction au changement d'état.
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // Requête finie, traitement ici.
  }
};
xhr.send("toto=truc&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
