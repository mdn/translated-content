---
title: "XMLHttpRequest : méthode open()"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`open()`** de l'interface {{DOMxRef("XMLHttpRequest")}} instancie une nouvelle requête ou réinitialise un déjà existante.

> [!NOTE]
> Appeler cette méthode pour une requête déjà active (pour laquelle une méthode `open()` a déjà été appelée) est équivalent à appeler {{DOMxRef("XMLHttpRequest.abort", "abort()")}}.

## Syntaxe

```js-nolint
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### Paramètres

- `method`
  - : La méthode [de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods) à utiliser telles que `GET`, `POST`, `PUT`, `DELETE`, etc. Ignorée pour les URL non-HTTP(S).
- `url`
  - : Une chaîne de caractères représentant l'URL ou tout autre objet avec un {{Glossary("stringifier", "convertisseur en chaîne de caractères")}} — y compris un objet {{DOMxRef("URL")}} — qui fournit l'URL de la ressource à laquelle envoyer la requête.
- `async` {{Optional_Inline}}
  - : Un paramètre booléen optionnel, dont la valeur par défaut est `true`, indiquant si l'opération doit être effectuée de manière asynchrone ou non. Si cette valeur est `false`, la méthode `send()` ne retourne pas tant que la réponse n'a pas été reçue. Si elle est `true`, la notification de la fin de la transaction est fournie à l'aide des écouteurs d'évènements. Cela _doit_ être vrai si l'attribut `multipart` est `true`, sinon une exception est levée.

    > [!NOTE]
    > Les requêtes synchrones sur le fil principal peuvent facilement perturber l'expérience utilisateur·ice et doivent être évitées&nbsp;; en fait, de nombreux navigateurs ont complètement supprimé le support des XHR synchrones sur le fil principal.
    > Les requêtes synchrones sont autorisées dans les {{DOMxRef("Worker")}}.

- `user` {{Optional_Inline}}
  - : Un nom d'utilisateur·ice optionnel à utiliser pour l'authentification&nbsp;; par défaut, il s'agit de la valeur `null`.
- `password` {{Optional_Inline}}
  - : Le mot de passe optionnel à utiliser pour l'authentification&nbsp;; par défaut, il s'agit de la valeur `null`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Les méthodes {{DOMxRef("XMLHttpRequest")}} associées&nbsp;:
  {{DOMxRef("XMLHttpRequest.setRequestHeader","setRequestHeader()")}},
  {{DOMxRef("XMLHttpRequest.send", "send()")}} et
  {{DOMxRef("XMLHttpRequest.abort", "abort()")}}
