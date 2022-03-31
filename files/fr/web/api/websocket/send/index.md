---
title: WebSocket.send()
slug: Web/API/WebSocket/send
browser-compat: api.WebSocket.send
---
{{APIRef("Web Sockets API")}}

La méthode **`WebSocket.send()`** rajoute les données indiquées à la queue pour transmission au serveur via la connexion WebSocket, augmentant ainsi la valeur de `bufferedAmount` du nombre d'octets nécessaires pour les données. Si les données ne peuvent être envoyées (par exemple parce qu'elles doivent être mises en tampon mais que la mémoire tampon est pleine), la socket est fermée automatiquement.

## Syntaxe

```js
WebSocket.send("Coucou serveur !");
```

### Paramètres

- `data`

  - : Les données à envoyer au serveur. La valeur peut avoir un des types suivants :

    - [`USVString`](/fr/docs/Web/API/USVString)
      - : Une chaîne de caractères. Cette chaîne est ajoutée au tampon au format UTF-8 et la valeur de `bufferedAmount` est augmentée du nombre d'octets nécessaires pour représenter cette chaîne de caractères UTF-8.
    - [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
      - : Les données binaires peuvent aussi être envoyées avec un tableau typé. Son contenu binaire est mis en tampon et la valeur de `bufferedAmount` est augmentée du nombre d'octets nécessaires.
    - [`Blob`](/fr/docs/Web/API/Blob)

      - : Lorsqu'une valeur `Blob` est fournie, les données brutes du blob sont rajoutées à la queue pour être transmises dans une

        <i lang="en">frame</i>

        binaire. La valeur de `bufferedAmount` est augmentée du nombre d'octets utilisés pour représenter ces données brutes.

    - [`ArrayBufferView`](/fr/docs/Web/API/ArrayBufferView)

      - : Il est possible d'envoyer n'importe quel objet étant [un tableau typé JavaScript](/fr/docs/Web/JavaScript/Typed_arrays) sous la forme d'une

        <i lang="en">frame</i>

        binaire. Le contenu des données binaires est rajouté à la queue dans le tampon et la valeur de `bufferedAmount` est augmentée du nombre d'octets correspondant.

### Exceptions levées

- `INVALID_STATE_ERR`
  - : La connexion n'est pas ouverte actuellement.
- `SYNTAX_ERR`

  - : Les données sont une chaîne de caractères pour laquelle il existe des

    <i lang="en">surrogates</i>

    non appairés.

> **Note :** Pour Gecko 6.0, l'implémentation de `send()` varie de la spécification : le moteur renvoie un booléen indiquant si la connexion est toujours ouverte (par extension, cela indique si les données ont été correctement rajoutées à la queue ou transmises). Ce comportement a été corrigé avec Gecko 8.0.
>
> Avec Gecko 11.0, la prise en charge des [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) est implémentée mais pas celle pour les objets [`Blob`](/fr/docs/Web/API/Blob).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
