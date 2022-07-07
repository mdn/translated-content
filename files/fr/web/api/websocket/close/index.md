---
title: WebSocket.close()
slug: Web/API/WebSocket/close
browser-compat: api.WebSocket.close
---
{{APIRef("Web Sockets API")}}

La méthode **`WebSocket.close()`** ferme la connexion [`WebSocket`](/fr/docs/Web/API/WebSocket) ou interrompt l'éventuelle tentative de connexion. Si la connexion est déjà fermée (état `CLOSED`), cette méthode ne fait rien.

## Syntaxe

```js
WebSocket.close();
```

```js
WebSocket.close(code);
```

```js
WebSocket.close(reason);
```

```js
WebSocket.close(code, reason);
```

### Paramètres

- `code` {{optional_inline}}
  - : Une valeur numérique indiquant le code de statut qui explique pourquoi la connexion est fermée. Si ce paramètre n'est pas fourni, 1005 sera la valeur par défaut. Voir [la liste des codes de statut](/fr/docs/Web/API/CloseEvent#status_codes) de [`CloseEvent`](/fr/docs/Web/API/CloseEvent) pour les valeurs autorisées.
- `reason` {{optional_inline}}
  - : Une chaîne de caractères, lisible et compréhensible par un humain qui explique pourquoi la connexion est fermée. Cette chaîne ne doit pas être plus longue que 123 octets de texte UTF-8 (attention, **cela ne signifie pas** 123 caractères).

### Exceptions levées

- `INVALID_ACCESS_ERR`
  - : Un code invalide a été fourni avec `code`.
- `SYNTAX_ERR`

  - : La chaîne de caractères pour `reason` est trop longue ou contient des

    <i lang="en">surrogates</i>

    non appairés.

> **Note :** Avant Gecko 8.0, cette méthode ne prenait en charge aucun paramètre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
