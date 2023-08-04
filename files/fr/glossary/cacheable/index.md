---
title: Apte à être mis en cache
slug: Glossary/Cacheable
---

Une réponse apte à être mise en cache (_cacheable_) est une réponse HTTP qui peut être mise en cache, qui est stockée pour être récupérée et utilisée plus tard, en enregistrant une nouvelle requête sur le serveur. Toutes les réponses HTTP ne peuvent pas être mises en cache, les contraintes suivantes sont requises pour qu'une réponse HTTP soit mise en cache :

- La méthode utilisée dans la requête peut elle-même être mise en cache, c'est une méthode {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}. Une réponse de la méthode {{HTTPMethod("POST")}} peut aussi être mise en cache si le rafraîchissement est indiqué, mais c'est rarement implémenté. D'autres méthodes comme {{HTTPMethod("PUT")}} ou {{HTTPMethod("DELETE")}} ne peuvent pas être mises en cache et leur résultat pas davantage.
- Le code d'état de la réponse est connu par la mise en cache de l'application et il est considéré comme apte à être mis en cache. Les codes d'état suivants peuvent être mis en cache : {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, et {{HTTPStatus("501")}}.
- Il n'y a pas d'en-tête spécifique dans la réponse, comme {{HTTPHeader("Cache-Control")}}, qui empêche la mise en cache.

Notez que certaines requêtes / réponses ne pouvant être mises en cache à un URI spécifique peuvent invalider des réponses précédemment mises en cache sur le même URI. Par exemple, un {{HTTPMethod("PUT")}} à pageX.html invalidera toutes les requêtes {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} dans le même URI.

Lorsque les deux, la méthode de la requête et l'état de la réponse, peuvent être mis en cache, la réponse à la requête peut être mise en cache :

```
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Une requête {{HTTPMethod("PUT")}} ne peut pas être mise en cache. De plus, elle invalide les données mises en cache pour une requête au même URI via {{HTTPMethod("HEAD")}} ou {{HTTPMethod("GET")}} :

```
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

Un en-tête spécifique {{HTTPHeader("Cache-Control")}} dans la réponse peut empêcher la mise en cache :

```
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## Voir aussi

### Culture générale

- Définition de [cacheable](https://tools.ietf.org/html/rfc7231#section-4.2.3) dans la spécification HTTP.

### Références techniques

- Description de méthodes courantes pouvant être mises en cache : {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- Description de méthodes courantes ne pouvant pas être mises en cache : {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}} et souvent {{HTTPMethod("POST")}}
