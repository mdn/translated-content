---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
---

{{HTTPSidebar}}

Le code de statut de réponse HTTP **`405 Method Not Allowed`** indique que la méthode utilisée pour la requête est connue du serveur mais qu'elle n'est pas supportée par la ressource ciblée.

Le serveur doit générer un en-tête **`Allow`** en cas de réponse 405, contenant la liste des méthodes supportées par la ressource ciblée.

## Statut

```
405 Method Not Allowed
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Allow`](/fr/docs/Web/HTTP/Headers/Allow)
- [HTTP/1.1&nbsp;: Définitions des codes de statut (en anglais)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [Comment corriger l'erreur `405 Method Not Allowed`](https://kinsta.com/fr/blog/erreur-405-method-not-allowed/)
- [Résoudre l'erreur HTTP 405](https://docs.microsoft.com/fr-fr/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
