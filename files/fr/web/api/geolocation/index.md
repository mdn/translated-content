---
title: Geolocation
slug: Web/API/Geolocation
tags:
  - API
  - Avancé
  - Géolocalisation API
  - Interface
  - Reference
translation_of: Web/API/Geolocation
---
{{APIRef("Geolocation API")}}

En intégrant l'interface **`Geolocation`**, on peut obtenir la position d'un ordinateur, d'un téléphone ou d'une tablette, ce qui permet aux contenus Web d'accéder à leur localisation. Un site internet ou une application mobile peut alors offrir divers services liés à la localisation de l'utilisateur.

On obtient un objet par le biais de cette interface avec la propriété {{domxref("NavigatorGeolocation.geolocation")}} proposée par l'objet {{domxref("Navigator")}} .

> **Note :** Pour des raisons de sécurité, quand une page web tente d'accéder aux données de localisation, l'utilisateur est prévenu, et son accord lui est demandé. Sachez que chaque navigateur a ses propres méthodes et politiques pour gérer les autorisations.

## Propriétés

_L'interface de géolocalisation n'utilise ou n'hérite d'aucune propriété._

## Méthodes

_L'interface de géolocalisation n'hérite d'aucune méthode._

- {{domxref("Geolocation.getCurrentPosition()")}}
  - : Determine la position actuelle de l'appareil et donne en retour l'objet {{domxref("Position")}} avec sa valeur.
- {{domxref("Geolocation.watchPosition()")}}
  - : Retourne une valeur `long` représentant la nouvelle fonction callback, créée pour être utilisée à chaque fois que la position de l'appareil change.
- {{domxref("Geolocation.clearWatch()")}}
  - : Supprime le lien créé par la précédente utilisation de `watchPosition()`.

## Spécifications

| Spécification                        | Statut                           | Commentaire             |
| ------------------------------------ | -------------------------------- | ----------------------- |
| {{SpecName('Geolocation')}} | {{Spec2('Geolocation')}} | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Geolocation")}}

## Voir aussi

- [Utiliser geolocation](/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
