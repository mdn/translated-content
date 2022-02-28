---
title: XMLHttpRequest.open()
slug: Web/API/XMLHttpRequest/open
translation_of: Web/API/XMLHttpRequest/open
---
{{APIRef('XMLHttpRequest')}}

La méthode **`open()`** de {{domxref("XMLHttpRequest")}} instancie une nouvelle requête ou réinitialise un déjà existante.

> **Note :** Appeler cette méthode pour une requête déjà active (pour laquelle une méthode `open()` a déjà été appelée) est équivalent à appeler  {{domxref("XMLHttpRequest.abort", "abort()")}}.

## Syntaxe

    XMLHttpRequest.open(method, url)
    XMLHttpRequest.open(method, url, async)
    XMLHttpRequest.open(method, url, async, user)
    XMLHttpRequest.open(method, url, async, user, password)

### Paramètres

- `method`
  - : La méthode [de requête HTTP](/fr/docs/Web/HTTP/Methods) à utiliser telles que `GET`, `POST`, `PUT`, `DELETE`, etc. Ignorée pour les URL non-HTTP(S).
- `url`
  - : Une {{domxref("DOMString")}} représentant l'URL à laquelle envoyer la requête.
- `async` {{optional_inline}}

  - : Un booléen optionnel par défaut à `true`, indiquant s'il faut, ou pas, traiter la requête en asynchrone.  Si la valeur est à `false`, la méthode `send()` ne retourne rien tant qu'elle n'a pas reçu la réponse. Si la valeur est à  `true`, une notification de transaction complétée est fournie en utilisant un gestionnaire d'évènements. Le paramètre doit être sur "true" si l'attribut `multipart` est sur "true" aussi ou une exception sera levée.

    > **Note :** Les requêtes asynchrones sur le "thread" principal peuvent facilement dérouter l'utilisateur et devraient être évitées; En fait, de nombreux navigateurs ont un support XHR obsolète sur la totalité du "thread" principal. Les requêtes synchrones sont acceptées dans  {{domxref("Worker")}}.

- `user` {{optional_inline}}
  - : Le nom de l'utilisateur, optionnel, à utiliser dans un but d'authentification. Sa valeur par défaut est `null`.
- `password` {{optional_inline}}
  - : Le mot de passe, optionnel, à utiliser dans un but d'authentification. Sa valeur par défaut est `null`.

## Spécificités

| Specification                                                                        | Status                               | Comment                |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-open()-method', 'open()')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilité des navigateurs

{{Compat("api.XMLHttpRequest.open")}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- Méthodes {{domxref("XMLHttpRequest")}} en relation : {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}},{{domxref("XMLHttpRequest.send", "send()")}}, and {{domxref("XMLHttpRequest.abort", "abort()")}}
