---
title: EventSource.close()
slug: Web/API/EventSource/close
tags:
  - API
  - EventSource
  - Evénement serveur
  - Fonction
  - Méthode
  - Reference
  - Server-sent events
  - close
translation_of: Web/API/EventSource/close
---
{{APIRef('WebSockets API')}}

La fonction **`close()`** de l'interface {{domxref("EventSource")}} coupe la connection, si existante, et affecte à la variable {{domxref("EventSource.readyState")}} la valeur `2` (closed).

> **Note :** Si la connexion est déjà fermé, la fonction n'agit pas.

## Syntaxe

    eventSource.close();

### Paramètres

Aucun.

### Valeur de retour

Nulle.

## Exemples

```js
var bouton = document.querySelector('button');
var evtSource = new EventSource('sse.php');

bouton.onclick = function() {
  console.log('Connection fermée');
  evtSource.close();
}
```

> **Note :** Vous pouvez trouver un exemple complet sur GitHub — voir [Demo simple de SSE utilisant PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Spécifications

| Specification                                                                                        | Status                           | Comment            |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', "comms.html#dom-eventsource-close", "close()")}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.EventSource.close")}}

## Voir aussi

- {{domxref("EventSource")}}
