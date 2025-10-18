---
title: Méthode de requête OPTIONS
short-title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
original_slug: Web/HTTP/Methods/OPTIONS
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`OPTIONS`** est utilisée pour décrire les options de communication pour la ressource ciblée. Le client peut renseigner une URL spécifique pour la méthode OPTIONS, ou une astérisque (\*) pour interroger le serveur dans sa globalité.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans <a href="/fr/docs/Learn_web_development/Extensions/Forms">les formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

\* Bien qu'un message `OPTIONS` avec un corps de requête soit techniquement autorisé, il n'a pas de sémantique définie.
Vous pouvez inclure un corps dans un message `OPTIONS` tant que vous fournissez un en-tête {{HTTPHeader("Content-Type")}} valide, et uniquement si vous savez que le serveur l'attend, car le comportement dépend de l'implémentation.

## Syntaxe

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

La cible de la requête peut être soit sous «&nbsp;la forme d'une astérisque&nbsp;» `*` indiquant le serveur dans sa globalité, soit une cible de requête comme pour les autres méthodes&nbsp;:

- `*`
  - : Indique que le client souhaite demander `OPTIONS` pour le serveur dans sa globalité, par opposition à une ressource nommée spécifique de ce serveur.
- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie dans l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) dans les requêtes vers un serveur d'origine, et d'une URL absolue dans les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`.
    Souvent utilisé pour transmettre des informations sous la forme de paires `clé=valeur`.

## Exemples

### Identifier les méthodes HTTP autorisées

Pour connaître les méthodes de requête supportées par un serveur, vous pouvez utiliser le programme en ligne de commande `curl` pour envoyer une requête `OPTIONS`&nbsp;:

```bash
curl -X OPTIONS https://exemple.org -i
```

Cela génère la requête HTTP suivante&nbsp;:

```http
OPTIONS / HTTP/2
Host: exemple.org
User-Agent: curl/8.7.1
Accept: */*
```

La réponse contient un en-tête {{HTTPHeader("Allow")}} qui liste les méthodes autorisées&nbsp;:

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### Requêtes de pré-vérification en CORS

En [CORS](/fr/docs/Web/HTTP/Guides/CORS), une {{Glossary("Preflight_request", "requête de pré-vérification")}} est envoyée avec la méthode `OPTIONS` afin que le serveur indique si la requête est acceptable avec les paramètres spécifiés. Dans cet exemple, nous demandons l'autorisation pour ces paramètres&nbsp;:

- L'en-tête {{HTTPHeader("Access-Control-Request-Method")}} envoyé dans la requête de pré-vérification indique au serveur que lorsque la véritable requête sera envoyée, elle utilisera la méthode {{HTTPMethod("POST")}}.
- L'en-tête {{HTTPHeader("Access-Control-Request-Headers")}} indique au serveur que lorsque la véritable requête sera envoyée, elle comportera les en-têtes `X-PINGOTHER` et `Content-Type`.

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: toto.exemple
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://tata.exemple
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

Le serveur peut alors indiquer s'il accepte une requête dans ces conditions. Dans cet exemple, la réponse du serveur précise&nbsp;:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : L'origine `https://tata.exemple` est autorisée à demander l'URL `toto.exemple/resources/post-here/` selon les paramètres suivants&nbsp;:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} et `OPTIONS` sont des méthodes autorisées pour l'URL. (Cet en-tête est similaire à l'en-tête de réponse {{HTTPHeader("Allow")}}, mais utilisé uniquement dans le contexte [CORS](/fr/docs/Web/HTTP/Guides/CORS).)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` et `Content-Type` sont des en-têtes de requête autorisés pour l'URL.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Les autorisations ci-dessus peuvent être mises en cache pendant 86&nbsp;400 secondes (1 jour).

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://tata.exemple
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

> [!NOTE]
> Les codes d'état {{HTTPStatus("200", "200 OK")}} et {{HTTPStatus("204", "204 No Content")}} sont tous deux [autorisés <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#ref-for-ok-status), mais certains navigateurs considèrent à tort que `204 No Content` s'applique à la ressource et n'envoient pas de requête suivante pour la récupérer.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- L'en-tête {{HTTPHeader("Allow")}}
- [CORS](/fr/docs/Web/HTTP/Guides/CORS)
