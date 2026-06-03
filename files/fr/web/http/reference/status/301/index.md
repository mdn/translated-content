---
title: 301 Moved Permanently
slug: Web/HTTP/Reference/Status/301
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) **`301 Moved Permanently`** indique que la ressource a définitivement été déplacée à l'URL contenue dans l'en-tête {{HTTPHeader("Location")}}.

Un navigateur recevant ce statut va automatiquement demander la ressource à l'URL indiquée dans l'en-tête `Location`, redirigeant ainsi l'utilisateur·ice vers la nouvelle page.
Les moteurs de recherche qui reçoivent cette réponse attribuent les liens de l'URL d'origine à la ressource redirigée, transmettant le classement {{Glossary("SEO")}} à la nouvelle URL.

> [!NOTE]
> Dans le [standard de Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#http-redirect-fetch), lorsqu'un agent utilisateur reçoit un code `301` en réponse à une requête {{HTTPMethod("POST")}}, il utilise la méthode {{HTTPMethod("GET")}} pour la requête de redirection suivante, comme le permet la [spécification HTTP](#spécifications).
> Pour éviter que l'agent utilisateur ne modifie la requête, utilisez plutôt un code {{HTTPStatus("308", "308 Permanent Redirect")}}&nbsp;: après une réponse `308`, il est interdit de changer la méthode.

## Statut

```http
301 Moved Permanently
```

## Examples

### Réponse 301 pour une ressource déplacée

La requête {{HTTPMethod("GET")}} suivante est effectuée vers une ressource qui déclenche une redirection `301`.

```http
GET /fr/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

La réponse inclut le statut `301` ainsi que l'en-tête {{HTTPHeader("Location")}} qui indique l'URL vers laquelle la ressource a été déplacée.

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /fr/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Déplacé de façon permanente. Redirection vers /fr/docs/Learn_web_development/Core/Scripting/Network_requests
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("308", "308 Permanent Redirect")}} équivalent à `301`, mais la méthode de requête n'est pas modifiée
- Le code de statut HTTP {{HTTPStatus("302", "302 Found")}} redirection temporaire
