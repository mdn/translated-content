---
title: Navigator.connection
slug: Web/API/Navigator/connection
tags:
  - API
  - Connexion
  - Expérimental(2)
  - Navigateur
  - Propriété
translation_of: Web/API/Navigator/connection
---
{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`Navigator.connection`** est une propriété en lecture seule, elle représente une {{domxref("NetworkInformation")}} qui contient les informations de la connexion du système, telles que la  bande passante actuelle du périphérique utilisateur ou si la connexion est mesurée. La propriété peut être utilisée pour sélectionner un contenu en haute ou basse définition, dépendant de la connexion de l'utilisateur.

## Syntaxe

    connexionInfo = navigator.connection

## Spécifications

| Spécification                                                                                                            | État                                         | Commentaire            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------------------- |
| {{SpecName('Network Information', '#h-the-connection-attribute', 'Navigator.connection')}} | {{Spec2('Network Information')}} | Spécification initiale |

## Compatibilité des navigateurs

{{Compat("api.Navigator.connection")}}

## Voir aussi

- [Évènements online et offline](/fr/docs/Web/API/NavigatorOnLine/Online_and_offline_events)
