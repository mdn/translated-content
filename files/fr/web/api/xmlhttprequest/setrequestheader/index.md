---
title: "XMLHttpRequest : méthode setRequestHeader()"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`setRequestHeader()`** de l'interface {{DOMxRef("XMLHttpRequest")}} permet de définir la valeur d'un en-tête de requête HTTP.
Lors de l'utilisation de `setRequestHeader()`, vous devez l'appeler après avoir appelé {{DOMxRef("XMLHttpRequest.open", "open()")}}, mais avant d'appeler {{DOMxRef("XMLHttpRequest.send", "send()")}}.
Si cette méthode est appelée plusieurs fois avec le même en-tête, les valeurs sont fusionnées en un seul en-tête de requête.

Chaque fois que vous appelez `setRequestHeader()` après la première fois, le texte défini est ajouté à la fin du contenu de l'en-tête existant.

Si aucun en-tête {{HTTPHeader("Accept")}} n'a été défini à l'aide de cette méthode, un en-tête `Accept` avec le type `"*/*"` est envoyé avec la requête lorsque {{DOMxRef("XMLHttpRequest.send", "send()")}} est appelé.

Pour des raisons de sécurité, il existe plusieurs {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}} dont les valeurs sont contrôlées par l'agent utilisateur. Toute tentative de définir une valeur pour l'un de ces en-têtes à partir du code JavaScript côté client est ignorée sans avertissement ni erreur.

De plus, l'en-tête HTTP [`Authorization`](/fr/docs/Web/HTTP/Reference/Headers/Authorization) peut être ajouté à une requête, mais est supprimé si la requête est redirigée vers un autre domaine.

> [!NOTE]
> Pour vos champs personnalisés, vous pouvez rencontrer une exception «&nbsp;**not allowed by Access-Control-Allow-Headers in preflight response**&nbsp;» lorsque vous envoyez des requêtes entre domaines.
> Dans cette situation, vous devez configurer le {{HTTPHeader("Access-Control-Allow-Headers")}} dans votre en-tête de réponse côté serveur.

## Syntaxe

```js-nolint
setRequestHeader(header, value)
```

### Paramètre

- `header`
  - : Le nom de l'en-tête dont la valeur doit être définie.
- `value`
  - : La valeur à définir comme corps de l'en-tête.

### Valeurs de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
