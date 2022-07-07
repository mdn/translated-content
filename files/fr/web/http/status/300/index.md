---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
translation_of: Web/HTTP/Status/300
---
{{HTTPSidebar}}

Le code de statut de réponse **`300 Multiple Choices`** indique qu'il existe plusieurs réponses possibles pour la requête. L'agent utilisateur ou l'utilisateur doit alors choisir l'une d'elles. Il n'y a pas de méthode standard pour choisir une des réponses disponibles et ce code de réponse est donc rarement utilisé.

Si le serveur à une préférence, il doit générer un en-tête [`Location`](/fr/docs/Web/HTTP/Headers/Location).

## Statut

```
300 Multiple Choices
```

## Exemples

Consultez [cette page de w3.org à propos des réponses à choix multiples](https://www.w3.org/Style/Examples/007/figures.ht).

## Spécifications

| Spécification                                                    | Titre                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| [RFC 7231, section 6.4.1: 300 Multiple Choices](https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1) | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [`301 Moved Permanently`](/fr/docs/Web/HTTP/Status/301)
- [`302 Found`](/fr/docs/Web/HTTP/Status/302), la redirection temporaire
- [`308 Permanent Redirect`](/fr/docs/Web/HTTP/Status/308)
