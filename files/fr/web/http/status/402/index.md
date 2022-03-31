---
title: 402 Payment Required
slug: Web/HTTP/Status/402
translation_of: Web/HTTP/Status/402
browser-compat: http.status.402
---
{{HTTPSidebar}}{{SeeCompatTable}}

Le code de statut de réponse HTTP **`402 Payment Required`** est une erreur non standard réservée pour un usage futur.

En général, ce code indique que la requête ne peut pas être traitée avant que le client effectue un paiement. Initialement, il a été créé afin de permettre des (micro) paiements numériques et indiquerait que le contenu demandé n'est pas disponible avant que le client ne fasse un paiement. Cependant, aucune convention d'usage commune n'existe et différentes entités l'utilisent dans différents contextes.

## Statut

```
402 Payment Required
```

## Exemple de réponse

```
HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

| Spécification                                                    | Titre                           |
| ---------------------------------------------------------------- | ------------------------------- |
| [RFC 7231, section 6.5.2: 402 Payment Required](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2) | HTTP/1.1: Semantics and Content |

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Authentification HTTP](/fr/docs/Web/HTTP/Authentication)
