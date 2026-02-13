---
title: "WebSocket : méthode send()"
short-title: send()
slug: Web/API/WebSocket/send
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

La méthode **`send()`** de l'interface {{DOMxRef("WebSocket")}} place dans la file d'attente les données spécifiées pour qu'elles soient transmises au serveur via la connexion WebSocket, augmentant la valeur de `bufferedAmount` du nombre d'octets nécessaires pour contenir ces données. Si les données ne peuvent pas être envoyées (par exemple, parce qu'elles doivent être mises en tampon mais que le tampon est plein), le socket est automatiquement fermé.
Le navigateur lèvera une exception si vous appelez `send()` lorsque la connexion est dans l'état `CONNECTING`. Si vous appelez `send()` lorsque la connexion est dans les états `CLOSING` ou `CLOSED`, le navigateur ignorera silencieusement les données.

## Syntaxe

```js-nolint
send(data)
```

### Paramètres

- `data`
  - : Les données à envoyer au serveur. La valeur peut avoir un des types suivants&nbsp;:
    - `string`
      - : Une chaîne de caractères. Cette chaîne est ajoutée au tampon au format UTF-8 et la valeur de `bufferedAmount` est augmentée du nombre d'octets nécessaires pour représenter cette chaîne de caractères UTF-8.
    - {{JSxRef("ArrayBuffer")}}
      - : Les données binaires peuvent aussi être envoyées avec un tableau typé. Son contenu binaire est mis en tampon et la valeur de `bufferedAmount` est augmentée du nombre d'octets nécessaires.
    - {{DOMxRef("Blob")}}
      - : Définir un `Blob` place les données brutes du blob dans la file d'attente pour être transmises dans une trame (<i lang="en">frame</i> en anglais) binaire (le {{DOMxRef("Blob.type")}} est ignoré).
        La valeur de `bufferedAmount` est augmentée du nombre d'octets de ces données brutes.
    - {{JSxRef("TypedArray")}} ou un objet {{JSxRef("DataView")}}
      - : Il est possible d'envoyer n'importe quel objet étant [un tableau typé JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays) sous la forme d'une trame (<i lang="en">frame</i> en anglais) binaire. Le contenu des données binaires est rajouté à la queue dans le tampon et la valeur de `bufferedAmount` est augmentée du nombre d'octets correspondant.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si {{DOMxRef("WebSocket/readyState", "WebSocket.readyState")}} est à `CONNECTING`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
