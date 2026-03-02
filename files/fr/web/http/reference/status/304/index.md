---
title: 304 Not Modified
slug: Web/HTTP/Reference/Status/304
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) HTTP **`304 Not Modified`** indique qu'il n'est pas nécessaire de retransmettre les ressources demandées.

Ce code de réponse est envoyé lorsque la requête est une requête [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests) {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} avec un en-tête {{HTTPHeader("If-None-Match")}} ou {{HTTPHeader("If-Modified-Since")}} et que la condition s'évalue à «&nbsp;faux&nbsp;».
Il confirme que la ressource en cache côté client est toujours valide et que le serveur aurait envoyé une réponse {{HTTPStatus("200", "200 OK")}} avec la ressource si la condition s'était évaluée à «&nbsp;vrai&nbsp;».
Voir [mise en cache HTTP](/fr/docs/Web/HTTP/Guides/Caching) pour plus d'informations.

La réponse ne doit pas contenir de corps et doit inclure les en-têtes qui auraient été envoyés dans une réponse {{HTTPStatus("200")}} équivalente, tels que&nbsp;:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Vary")}}

> [!NOTE]
> De nombreux [panneaux réseau des outils de développement <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) des navigateurs créent des requêtes supplémentaires menant à des réponses `304`, afin que l'accès au cache local soit visible pour les développeur·euse·s.

## Statut

```http
304 Not Modified
```

## Exemples

### Réponse 304 à des requêtes conditionnelles

Les exemples ci-dessous montrent des requêtes {{HTTPMethod("GET")}} effectuées avec [curl <sup>(angl.)</sup>](https://curl.se/) et des en-têtes conditionnels.
L'option `--http1.1` est utilisée pour forcer le protocole HTTP/1.1 afin d'améliorer la lisibilité.

La première requête utilise une condition `If-Modified-Since` avec une date future du 21 novembre 2050.
Cette condition doit être évaluée à `false`, car la ressource ne peut pas avoir été mise à jour après une date qui n'est pas encore arrivée&nbsp;:

```bash
curl --http1.1 -I --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/fr/
```

Cela produira la requête HTTP suivante&nbsp;:

```http
GET /fr/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT
```

La réponse serait {{HTTPStatus("200", "200 OK")}} avec la version actuelle de la ressource si celle-ci avait été modifiée après l'horodatage dans l'en-tête {{HTTPHeader("If-Modified-Since")}}.
À la place, on obtient une réponse `304` qui inclut les en-têtes {{HTTPHeader("ETag")}}, {{HTTPHeader("Age")}} et {{HTTPHeader("Expires")}}, indiquant que la version en cache de la ressource est toujours à jour&nbsp;:

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 09:52:35 GMT
Expires: Wed, 28 Aug 2024 10:01:53 GMT
Age: 3279
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

Lancez maintenant une autre commande `curl` en utilisant la valeur `etag` de la réponse précédente avec la condition {{HTTPHeader("If-None-Match")}} (puisque ce `etag` est la version actuelle de la ressource sur le serveur, nous nous attendons à recevoir une réponse `304 Not Modified`)&nbsp;:

```bash
curl --http1.1 -I --header 'If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"' \
 https://developer.mozilla.org/fr/
```

Il en résultera la requête HTTP suivante&nbsp;:

```http
GET /fr/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"
```

Parce que la valeur `etag` correspond au moment de la requête, le tag de l'entité échoue la condition, et une réponse `304` est retournée&nbsp;:

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 10:36:35 GMT
Expires: Wed, 28 Aug 2024 11:02:17 GMT
Age: 662
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

## Spécifications

{{Specifications}}

### Notes de compatibilité

Les différents navigateurs se comportent différemment lorsque la réponse contient, incorrectement, un corps pour les connexions persistantes.
Voir {{HTTPStatus("204", "204 No Content")}} pour plus de détails.

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Les requêtes conditionnelles HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- L'en-tête HTTP {{HTTPHeader("If-Modified-Since")}}
- L'en-tête HTTP {{HTTPHeader("If-None-Match")}}
