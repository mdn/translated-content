---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/431
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`431 Request Header Fields Too Large`** indique que le serveur n'est pas disposé à traiter la requête, car les champs d'en-têtes sont trop grands. La requête peut être renvoyée une fois que les champs des en-têtes de la requête auront été réduits.

Ce code peut être utilisé lorsque tous les champs sont trop grands ou qu'un seul champ est trop grand. Cette erreur ne devrait pas se produire pour les systèmes en production mais peut être employée lorsqu'on teste un nouveau système pour lequel tous les contrôles n'ont pas encore été mis en place.

## Statut

    431 Request Header Fields Too Large

## Spécifications

| Spécification                                                                    | Titre                        |
| -------------------------------------------------------------------------------- | ---------------------------- |
| {{RFC("6585", "431 Request Header Fields Too Large" , "5")}} | Additional HTTP Status Codes |

## Voir aussi

- {{Glossary("En-tête")}}
