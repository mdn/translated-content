---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [redirection response](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) HTTP **`307 Temporary Redirect`** indique que la ressource demandée a été déplacée temporairement vers l'URL figurant dans l'en-tête {{HTTPHeader("Location")}}.

Un navigateur recevant ce statut demandera automatiquement la ressource à l'URL indiquée dans l'en-tête `Location`, redirigeant l'utilisateur·ice vers la nouvelle page.
Les moteurs de recherche recevant cette réponse n'attribueront pas les liens de l'URL d'origine à la nouvelle ressource, ce qui signifie qu'aucune valeur {{Glossary("SEO")}} n'est transférée vers la nouvelle URL.

La méthode et le corps de la requête d'origine sont réutilisés pour effectuer la requête redirigée.
Dans les cas où vous souhaitez que la méthode de la requête soit changée en {{HTTPMethod("GET")}}, utilisez plutôt {{HTTPStatus("303", "303 See Other")}}.
Ceci est utile lorsque vous souhaitez renvoyer une réponse à une requête {{HTTPMethod("PUT")}} réussie qui n'est pas la ressource téléchargée, mais un moniteur d'état ou un message de confirmation comme «&nbsp;Téléversement de XYZ réussi&nbsp;».

La différence entre `307` et {{HTTPStatus("302")}} est que `307` garantit que le client **ne changera pas** la méthode et le corps de la requête lorsque la requête redirigée est effectuée.
Avec `302`, les anciens clients changeaient incorrectement la méthode en {{HTTPMethod("GET")}}.
Les réponses `307` et `302` sont identiques lorsque la méthode de requête est {{HTTPMethod("GET")}}.

## Statut

```http
307 Temporary Redirect
```

## Exemples

### Réponse 307 pour une ressource déplacée

La requête {{HTTPMethod("GET")}} suivante est effectuée vers une ressource pour laquelle une redirection `307` est en place.
L'en-tête {{HTTPHeader("Location")}} fournit l'URL de la ressource redirigée.

```http
GET /fr/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /fr/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("302", "302 Found")}}, l'équivalent de `307`, mais peut modifier les méthodes non-{{HTTPMethod("GET")}}
- Le code de statut HTTP {{HTTPStatus("303", "303 See Other")}}, redirection temporaire qui modifie la méthode de la requête en {{HTTPMethod("GET")}}
- Le code de statut HTTP {{HTTPStatus("301", "301 Moved Permanently")}}, une redirection permanente
