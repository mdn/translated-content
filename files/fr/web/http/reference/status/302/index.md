---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#messages_de_redirection) HTTP **`302 Found`** indique que la ressource demandée a été temporairement déplacée vers l'URL indiquée dans l'en-tête {{HTTPHeader("Location")}}.

Un navigateur recevant ce statut demandera automatiquement la ressource à l'URL de l'en-tête `Location`, redirigeant l'utilisateur·ice vers la nouvelle page.
Les moteurs de recherche recevant cette réponse n'attribueront pas les liens de l'URL d'origine à la nouvelle ressource, ce qui signifie qu'aucune valeur de {{Glossary("SEO")}} n'est transférée à la nouvelle URL.

> [!NOTE]
> Dans le [standard de Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#http-redirect-fetch), lorsqu'un agent utilisateur reçoit un code `302` en réponse à une requête {{HTTPMethod("POST")}}, il utilise la méthode {{HTTPMethod("GET")}} dans la requête de redirection suivante, comme le permet la [spécification HTTP](#spécifications).
> Pour éviter que les agents utilisateurs ne modifient la requête, utilisez plutôt {{HTTPStatus("307", "307 Temporary Redirect")}}, car la modification de la méthode après une réponse `307` est interdite.
>
> Si vous souhaitez que n'importe quelle méthode de requête soit changée en {{HTTPMethod("GET")}}, utilisez {{HTTPStatus("303", "303 See Other")}}.
> Ceci est utile lorsque vous souhaitez donner une réponse à une méthode {{HTTPMethod("PUT")}} qui n'est pas la ressource téléversée, mais un message de confirmation tel que&nbsp;: «&nbsp;Vous avez téléversé avec succès XYZ&nbsp; ».

## Statut

```http
302 Found
```

## Exemples

### Réponse 302 avec une nouvelle URL

```http
GET /profile HTTP/1.1
Host: www.exemple.com
```

```http
HTTP/1.1 302 Found
Location: https://www.exemple.com/url-nouveau-profil
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("307", "307 Temporary Redirect")}}, équivalent à `302` mais la méthode de la requête n'est pas modifiée
- Le code de statut HTTP {{HTTPStatus("303", "303 See Other")}}, une redirection temporaire qui change la méthode en {{HTTPMethod("GET")}}
- Le code de statut HTTP {{HTTPStatus("301", "301 Moved Permanently")}}, une redirection permanente.
