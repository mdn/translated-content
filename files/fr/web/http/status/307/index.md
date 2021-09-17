---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
tags:
  - Code de statut
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/307
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`307`\*\***` Temporary Redirect`\*\* indique que la ressource est temporairement déplacée vers l'URL contenue dans l'en-tête {{HTTPHeader("Location")}}. Un navigateur redirige vers cette page mais les moteurs de recherche ne mettent pas à jour leurs liens vers la ressource (en termes de référencement, cela indique que le flux de référencement n'est pas envoyé vers la nouvelle URL).

La méthode et le corps de la requête original sont réutilisés pour réaliser la requête redirigée. Si vous souhaitez que la méthode utilisée soit changée {{HTTPMethod("GET")}}, il faut alors utiliser le code  {{HTTPStatus("303")}} `See Also` à la place. Ceci s'avère utile lorsqu'on souhaite donner une réponse à une méthode {{HTTPMethod("PUT")}} et que cette réponse n'est pas la ressource téléversée mais un message de confirmation (par exemple "Vous avez téléversé avec succès XYZ").

La seule différence entre le code `307` et le code {{HTTPStatus("302")}} réside dans le fait que le statut `307` garantit que la méthode et le corps ne seront pas modifiés lorsque la requête redirigée aura lieu. Avec `302`, quelques anciens clients changent, incorrectement, la méthode vers {{HTTPMethod("GET")}} : ce comportement, avec les méthodes différentes de `GET` et `302`, est imprédictible sur le Web. En revanche; celui de `307` est bien prédictible. Pour la requête `GET`, leurs comportements respectifs sont identiques.

## Statut

    307 Temporary Redirect

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "307 Temporary Redirect" , "6.4.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "307")}}

## Voir aussi

- {{HTTPStatus("302")}} `Found`, l'équivalent de ce code de statut, mais qui peut modifier la méthode utilisée lorsqu'il ne s'agit pas d'un {{HTTPMethod("GET")}}.
- {{HTTPStatus("303")}} `See Also`, une redirection temporaire qui change la méthode utilisée en {{HTTPMethod("GET")}}.
- {{HTTPStatus("301")}} `Moved Permanently`, la redirection permanente
