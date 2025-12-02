---
title: Méthode de requête TRACE
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
original_slug: Web/HTTP/Methods/TRACE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`TRACE`** effectue un test de boucle de message le long du chemin vers la ressource cible.

Le destinataire final de la requête doit renvoyer le message tel qu'il a été reçu (en excluant tout champ susceptible de contenir des données sensibles) au client, comme corps de la réponse {{HTTPStatus("200", "200 OK")}} avec un {{HTTPHeader("Content-Type")}} de `message/http`.
Le destinataire final est soit le serveur d'origine, soit le premier serveur à recevoir une valeur {{HTTPHeader("Max-Forwards")}} de `0` dans la requête.

Le client ne doit pas envoyer de {{Glossary("HTTP Content", "contenu")}} dans la requête, ni générer d'en-têtes susceptibles de contenir des données sensibles comme des identifiants utilisateur·ice ou des cookies.
Tous les serveurs n'implémentent pas la méthode `TRACE`, et certain·e·s propriétaires de serveurs ont historiquement interdit l'utilisation de la méthode `TRACE` en raison de préoccupations de sécurité.
Dans de tels cas, une réponse d'erreur client {{HTTPStatus("405", "405 Method Not Allowed")}} [client error response](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) sera envoyée.

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

## Syntaxe

```http
TRACE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifie la ressource cible de la requête lorsqu'elle est combinée avec l'information fournie dans l'en-tête {{HTTPHeader("Host")}}.
    Il s'agit d'un chemin absolu (par exemple `/chemin/vers/fichier.html`) dans les requêtes vers un serveur d'origine, et d'une URL absolue dans les requêtes vers les serveurs mandataires (<i lang="en">proxies</i>) (par exemple `http://www.exemple.fr/chemin/vers/fichier.html`).
- `<query>` {{Optional_Inline}}
  - : Un fragment de requête optionnel précédé d'un point d'interrogation `?`.
    Souvent utilisé pour transmettre des informations sous la forme de paires `clé=valeur`.

## Exemples

### Requête TRACE réussie

Une requête `TRACE` peut être effectuée avec `curl`&nbsp;:

```bash
curl -v -X TRACE exemple.fr
```

Cela produit la requête HTTP suivante&nbsp;:

```http
TRACE / HTTP/1.1
Host: exemple.fr
User-Agent: curl/8.7.1
Accept: */*
```

Une réponse {{HTTPStatus("200", "200 OK")}} contenant les en-têtes de la requête dans le corps de la réponse est renvoyée au client&nbsp;:

```http
HTTP/1.1 200 OK
Content-Length: 123
Date: Wed, 04 Sep 2024 11:50:24 GMT
Server: Apache/2.4.59 (Unix)
Content-Type: message/http

TRACE / HTTP/1.1
Host: exemple.fr
User-Agent: curl/8.7.1
Accept: */*
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Le navigateur n'utilise pas la méthode `TRACE` pour les actions initiées par l'utilisateur·ice, donc la «&nbsp;compatibilité navigateur&nbsp;» ne s'applique pas.

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- [Cross-Site Tracing (XST) <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
