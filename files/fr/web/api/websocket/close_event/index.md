---
title: "WebSocket : évènement close"
short-title: close
slug: Web/API/WebSocket/close_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

L'évènement `close` de l'interface {{DOMxRef("WebSocket")}} est déclenché lorsqu'une connexion avec une `WebSocket` est fermée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou assignez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("CloseEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("CloseEvent")}}

## Propriétés de l'évènement

_En plus des propriétés listées ci-dessous, les propriétés de l'interface parente, {{DOMxRef("Event")}}, sont disponibles._

- {{DOMxRef("CloseEvent.code", "code")}} {{ReadOnlyInline}}
  - : Retourne une valeur de type `unsigned short` contenant le code de fermeture envoyé par le serveur.
- {{DOMxRef("CloseEvent.reason", "reason")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères indiquant la raison pour laquelle le serveur a fermé la connexion. Ceci est spécifique au serveur et au sous-protocole concernés.
- {{DOMxRef("CloseEvent.wasClean", "wasClean")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne indiquant si la connexion a été fermée proprement ou non.

## Exemples

Vous pourriez vouloir savoir quand la connexion a été fermée afin de mettre à jour l'interface utilisateur ou, peut-être, enregistrer des données concernant la connexion fermée. En supposant que vous ayez une variable appelée `socketExemple` qui fait référence à une `WebSocket` ouverte, ce gestionnaire permettrait de gérer la situation où la socket a été fermée.

```js
socketExemple.addEventListener("close", (event) => {
  console.log("La connexion a été fermée avec succès.");
});
```

On peut effectuer les mêmes actions avec la propriété de gestion d'évènement correspondante&nbsp;:

```js
socketExemple.onclose = (event) => {
  console.log("La connexion a été fermée avec succès.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket&nbsp;: évènement `error`](/fr/docs/Web/API/WebSocket/error_event)
- [WebSocket&nbsp;: évènement `message`](/fr/docs/Web/API/WebSocket/message_event)
- [WebSocket&nbsp;: évènement `open`](/fr/docs/Web/API/WebSocket/open_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
