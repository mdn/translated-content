---
title: XMLHttpRequest.responseText
slug: Web/API/XMLHttpRequest/responseText
translation_of: Web/API/XMLHttpRequest/responseText
---
{{draft}}{{APIRef('XMLHttpRequest')}}

La lecture seule {{domxref("XMLHttpRequest")}} propriété **`responseText`** renvoie le texte reçu d'un serveur suite à l'envoi d'une requête.

## Syntax

    var resultText = XMLHttpRequest.responseText;

### Value

A {{domxref("DOMString")}} qui contient soit les données textuelles reçues à l'aide du`XMLHttpRequest` ou `null` si la demande a échoué ou `""` si la demande n'a pas encore été envoyée en appelant {{domxref("XMLHttpRequest.send", "send()")}}.

Lors du traitement d'une requête asynchrone, la valeur de `responseText` reçoit toujours le contenu actuel du serveur, même s'il est incomplet car les données n'ont pas encore été complètement reçues.

Vous savez que tout le contenu a été reçu lorsque la valeur de {{domxref("XMLHttpRequest.readyState", "readyState")}} deviens {{domxref("XMLHttpRequest.DONE", "XMLHttpRequest.DONE")}} (`4`), et {{domxref("XMLHttpRequest.status", "status")}} becomes 200 (`"OK"`).

### Exceptions

- `InvalidStateError`
  - : Le {{domxref("XMLHttpRequest.responseType")}} n'est défini ni sur la chaîne vide ni sur "texte". Étant donné que la propriété responseText n'est valide que pour le contenu texte, toute autre valeur est une condition d'erreur.

## Example

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);
```

## Specifications

| Specification                                                                    | Status                               | Comment                |
| -------------------------------------------------------------------------------- | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-responsetext-attribute')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Browser compatibility

{{Compat("api.XMLHttpRequest.responseText")}}
