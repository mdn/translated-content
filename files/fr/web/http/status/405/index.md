---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
translation_of: Web/HTTP/Status/405
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`405 Method Not Allowed`** indique que la méthode utilisée pour la requête est connue du serveur mais qu'elle n'est pas supportée par la ressource ciblée.

Le serveur doit générer un champ **`Allow`** dans le header en cas de réponse 405, contenant la liste des méthodes supportées par la ressource ciblée.

## Statut

```
405 Method Not Allowed
```

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "405 Method Not Allowed" , "6.5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [`Allow`](/fr/docs/Web/HTTP/Headers/Allow)
- [HTTP/1.1&nbsp;: Définitions des codes de statut (en anglais)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [How to Fix 405 Method Not Allowed (en anglais)](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405 (en anglais)](https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
