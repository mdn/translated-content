---
title: 303 See Other
slug: Web/HTTP/Status/303
tags:
  - Code de statut
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/303
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`303`\*\***` See Other`\*\*, généralement renvoyé comme résultat d'une opération {{HTTPMethod("PUT")}} ou {{HTTPMethod("POST")}}, indique que la redirection ne fait pas le lien vers la ressource nouvellement téléversé mais vers une autre page (par exemple une page de confirmation ou qui affiche l'avancement du téléversement). La méthode utilisée pour afficher la page redirigée est toujours {{HTTPMethod("GET")}}.

## Statut

    303 See Other

## Spécifications

| Spécification                                            | Titre                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "303 See Other" , "6.4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "303")}}

## Voir aussi

- {{HTTPStatus("302")}} `Found`, la redirection temporaire.
