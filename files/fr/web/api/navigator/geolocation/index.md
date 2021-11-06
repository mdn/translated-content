---
title: Navigator.geolocation
slug: Web/API/Navigator/geolocation
tags:
  - API
  - Géolocalisation API
  - Navigateur
  - Propriété
  - Reference
translation_of: Web/API/Navigator/geolocation
---
{{APIRef("Geolocation API")}}

**`Navigator.geolocation`** est une propriété en lecture seule, qui retoune un objet {{domxref("Geolocation")}} donnant accès aux contenus web de localisation de l'appareil. Ceci permet à un site Internet ou à une application d'offrir des résultats personnalisés basés sur la localisation des utilisateurs.

> **Note :** Pour des raisons de sécurité, quand une page web essaie d'accéder aux informations de localisation, l'utilisateur reçoit une notification qui lui demande la permission d'activer cette fonctionnalité. Chaque navigateur a sa propre politique et ses propres méthodes pour demander cette permission.

## Syntaxe

    geo = navigator.geolocation

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire        |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('Geolocation', '#navi-geo', 'Navigator.geolocation')}} | {{Spec2('Geolocation')}} | Initial definition |

## Compatibilité navigateur

{{Compat("api.Navigator.geolocation")}}

## Voir aussi

- [Utiliser la géolocalisation](/fr/docs/WebAPI/Using_geolocation)
