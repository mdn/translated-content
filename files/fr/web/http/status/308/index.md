---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
tags:
  - Code de statut
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/308
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`308`\*\***` Permanent Redirect`\*\* indique que la ressource demandée à définitivement été déplacée vers l'URL contenue dans l'en-tête {{HTTPHeader("Location")}}. Un navigateur redirigera vers cette page et les moteurs de recherche mettront à jour leurs liens vers la ressource (en termes de référencement, cela implique que le flux de référencement est envoyé vers la nouvelle URL).

La méthode de requête et son corps ne sont pas modifiés, toutefois {{HTTPStatus("301")}} peut parfois changer la méthode vers {{HTTPHeader("GET")}}.

> **Note :** Certaines applications Web peuvent utiliser `308 Permanent Redirect` de façon non standard et pour d'autres usages. Par exemple, Google Drive utilise la réponse `308 Resume Incomplete` pour indiquer au client un chargement incomplet qui est bloqué ([source](https://developers.google.com/drive/v3/web/manage-uploads#resumable)).

## Statut

    308 Permanent Redirect

## Spécifications

| Spécification                                                    | Titre                                                                |
| ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| {{RFC("7538", "308 Permanent Redirect" , "3")}} | The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect) |

## Compatibilité des navigateurs

{{Compat("http/status", "308")}}

## Voir aussi

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, la redirection temporaire
