---
title: EventSource.close()
slug: Web/API/EventSource/close
---

{{APIRef('WebSockets API')}}

La fonction **`close()`** de l'interface {{domxref("EventSource")}} coupe la connection, si existante, et affecte à la variable {{domxref("EventSource.readyState")}} la valeur `2` (closed).

> **Note :** Si la connexion est déjà fermé, la fonction n'agit pas.

## Syntaxe

```js
eventSource.close();
```

### Paramètres

Aucun.

### Valeur de retour

Nulle.

## Exemples

```js
var bouton = document.querySelector("button");
var evtSource = new EventSource("sse.php");

bouton.onclick = function () {
  console.log("Connection fermée");
  evtSource.close();
};
```

> **Note :** Vous pouvez trouver un exemple complet sur GitHub — voir [Demo simple de SSE utilisant PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("EventSource")}}
