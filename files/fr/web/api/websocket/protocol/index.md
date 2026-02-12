---
title: "WebSocket : propriété protocol"
short-title: protocol
slug: Web/API/WebSocket/protocol
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`protocol`** de l'interface {{DOMxRef("WebSocket")}} retourne le nom du [sous-protocole](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#les_sous-protocoles) sélectionné par le serveur&nbsp;; il s'agit de l'une des chaînes de caractères définies dans le paramètre [`protocols`](/fr/docs/Web/API/WebSocket/WebSocket#protocols) lors de la création de l'objet {{DOMxRef("WebSocket")}}, ou d'une chaîne vide si aucune connexion n'est établie.

## Valeur

Une chaîne de caractères.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Sec-WebSocket-Protocol")}}
