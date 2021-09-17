---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Server error
  - Status code
translation_of: Web/HTTP/Status/511
---
{{HTTPSidebar}}

Le code de réponse HTTP d'erreur serveur **`511 Network Authentication Required`** indique que le client a besoin de s'authentifier pour obtenir l'accès au réseau.

Ce statut n'est pas généré par le serveur d'origine mais par un proxy interceptant qui contrôle l'accès au réseau.

Les responsables des réseaux demandent parfois de s'authentifier, d'accepter des conditions d'utilisation ou autres avant d'avoir accès à Internet (par exemple dans un cybercafé ou un aéroport). Les clients qui n'ont pas rempli ces obligations sont souvent identifiés via leur adresse ({{Glossary("MAC")}}).

## Statut

    511 Network Authentication Required

## Spécifications

| Spécification                                                                    | Titre                        |
| -------------------------------------------------------------------------------- | ---------------------------- |
| {{RFC("6585", "511 Network Authentication Required" , "6")}} | Additional HTTP Status Codes |

## Voir aussi

- {{Glossary("Proxy")}}
