---
title: WebSocket()
slug: Web/API/WebSocket/WebSocket
---

{{APIRef("Web Sockets API")}}

Le constructeur **`WebSocket()`** renvoie un nouvel objet [`WebSocket`](/fr/docs/Web/API/WebSocket).

## Syntaxe

```js
var aWebSocket = new WebSocket(url [, protocols]);
```

### Paramètres

- `url`
  - : L'URL à laquelle se connecter. Cela devrait être l'URL à laquelle le serveur WebSocket répondra.
- `protocols` {{optional_inline}}
  - : Une valeur qui est une chaîne de caractères représentant un seul protocole ou un tableau de chaînes de caractères représentant une liste de protocoles. Ces chaînes de caractères indiquent des sous-protocoles : un serveur donné pourra implémenter différents sous-protocoles WebSocket (on peut vouloir qu'un serveur soit capable de gérér différents types d'interaction selon le `protocol` indiqué). Si cette valeur est absence, c'est un tableau vide qui est utilisé par défaut : `[]`.

### Exceptions levées

- `SECURITY_ERR`
  - : Le port ciblé par la tentative de connexion est bloqué.
- [SyntaxError](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - : L'URL est invalide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
