---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) HTTP **`308 Permanent Redirect`** indique que la ressource demandée a été définitivement déplacée vers l'URL indiquée dans l'en-tête {{HTTPHeader("Location")}}.

Un navigateur recevant ce statut demandera automatiquement la ressource à l'URL figurant dans l'en-tête `Location`, redirigeant ainsi l'utilisateur·ice vers la nouvelle page. Les moteurs de recherche recevant cette réponse mettront à jour leurs liens vers la ressource et transféreront le classement de référencement ({{Glossary("SEO")}}) vers la nouvelle URL.

La méthode de requête et son corps **ne sont pas modifiés** par le client lors de la requête redirigée. Un {{HTTPStatus("301", "301 Moved Permanently")}} exige que la méthode et le corps restent inchangés lors d'une redirection, mais cela est incorrectement géré par d'anciens clients qui utilisent à la place la méthode {{HTTPMethod("GET")}}.

> [!NOTE]
> Certaines applications Web peuvent utiliser `308 Permanent Redirect` de façon non standard et pour d'autres usages.
> Par exemple, Google Drive utilise la réponse `308 Resume Incomplete` pour indiquer au client qu'un téléversement inachevé est bloqué.
> Voir [Effectuer un téléchargement résumable <sup>(angl.)</sup>](https://developers.google.com/workspace/drive/api/guides/manage-uploads) dans la documentation Google Drive pour plus d'informations.

## Statut

```http
308 Permanent Redirect
```

## Exemples

### Réponse 308 pour une ressource déplacée

```http
GET /featured HTTP/1.1
Host: www.exemple.org
```

```http
HTTP/1.1 308 Permanent Redirect
Location: http://www.exemple.com/featured
Content-Length: 0
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes d'état de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, l'équivalent de ce code d'état, qui peut modifier la méthode de la requête lorsqu'il ne s'agit pas d'une {{HTTPMethod("GET")}}
- {{HTTPStatus("302", "302 Found")}}, une redirection temporaire
