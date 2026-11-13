---
title: "WebSocket : méthode close()"
short-title: close()
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

La méthode **`close()`** de l'interface {{DOMxRef("WebSocket")}} ferme la connexion {{DOMxRef("WebSocket")}} ou interrompt l'éventuelle tentative de connexion. Si la connexion est déjà fermée (état `CLOSED`), cette méthode ne fait rien.

> [!NOTE]
> Le processus de fermeture de la connexion commence par une [poignée de main de fermeture <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), et la méthode `close()` ne supprime pas les messages précédemment envoyés avant de commencer cette poignée de main de fermeture&nbsp;; même si l'agent utilisateur est encore occupé à envoyer ces messages, la poignée de main ne commence qu'après l'envoi des messages.

## Syntaxe

```js-nolint
close()
close(code)
close(code, reason)
```

### Paramètres

- `code` {{Optional_Inline}}
  - : Un entier représentant la [valeur de code de fermeture de connexion WebSocket <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc6455/#section-7.1.5) indiquant une raison de fermeture&nbsp;:
    - Si non défini, un code de fermeture pour la connexion est automatiquement attribué&nbsp;: `1000` pour une fermeture normale, ou sinon [une autre valeur standard dans la plage `1001`-`1015`](https://www.rfc-editor.org/info/rfc6455/#section-7.4.1) qui indique la raison réelle de la fermeture de la connexion.
    - Si défini, la valeur de ce paramètre `code` remplace l'attribution automatique du code de fermeture pour la connexion et définit à la place un code personnalisé.
      La valeur doit être un entier&nbsp;: soit `1000`, soit un code personnalisé de votre choix dans la plage `3000`-`4999`. Si vous indiquez une valeur pour `code`, vous devez également indiquer une valeur pour [`reason`](#reason).

- `reason` {{Optional_Inline}}
  - : Une chaîne de caractères fournissant une [raison personnalisée de fermeture de connexion WebSocket <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc6455/#section-7.1.6) (une explication concise et lisible par l'humain de la fermeture). La valeur ne doit pas dépasser 123 octets (encodée en UTF-8).

    > [!NOTE]
    > Comme {{Glossary("UTF-8", "UTF-8 utilise deux à quatre octets")}} pour encoder tout caractère non {{Glossary("ASCII")}}, une valeur `reason` de 123 caractères contenant des caractères non ASCII dépasse la limite de 123 octets.

    Si vous indiquez une valeur pour `reason`, vous devez également indiquer une valeur pour [`code`](#code).

### Valeur de retour

Aucun ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidAccessError` {{DOMxRef("DOMException")}}
  - : Levée si [`code`](#code) n'est ni un entier égal à `1000`, ni un entier dans la plage `3000` — `4999`.
- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur [`reason`](#reason) encodée en UTF-8 dépasse 123 octets.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [RFC 6455 <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc6455/) (la spécification du protocole WebSocket)
