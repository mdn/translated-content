---
title: API Geolocation (géolocalisation)
slug: Web/API/Geolocation_API
translation_of: Web/API/Geolocation_API
---
{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

L'**API <i lang="en">Geolocation</i>** permet à une personne, si elle le veut, de fournir sa position géographique à une application web. Pour respecter la vie privée, la permission est demandée auprès de l'utilisatrice ou de l'utilisateur avant la récupération des informations de géolocalisation.

Les extensions web qui souhaitent utiliser l'objet `Geolocation` doivent ajouter la permission `geolocation` à leur manifeste. Le système d'exploitation demandera alors à la personne la permission d'accéder à l'emplacement lors de la première fois.

## Concepts et utilisation

On souhaite parfois utiliser les informations géographiques d'une personne, par exemple pour indiquer son emplacement sur une carte, ou pour afficher des informations pertinentes par rapport au lieu actuel.

L'API <i lang="en">Geolocation</i> s'utilise en appelant [`navigator.geolocation`](/fr/docs/Web/API/Navigator/geolocation). Cela va déclencher la demande de permission avec le navigateur. Lorsque la permission est donnée d'accéder aux données de géolocalisation, le navigateur utilisera le meilleur outil à sa disposition sur l'appareil pour déterminer cette position (par exemple, le GPS).

La position géographique peut alors être utilisée dans le code avec&nbsp;:

- [`Geolocation.getCurrentPosition()`](/fr/docs/Web/API/Geolocation/getCurrentPosition)
  - : Qui récupère l'emplacement actuel de l'appareil.
- [`Geolocation.watchPosition()`](/fr/docs/Web/API/Geolocation/watchPosition)
  - : Qui enregistre une fonction de rappel qui sera appelée à chaque fois que l'emplacement évolue, en renvoyant la position à jour.

Dans les deux cas, ces méthodes utilisent jusqu'à trois arguments&nbsp;:

- Une fonction de rappel obligatoire pour les cas de succès.
  - Si la récupération des informations d'emplacement s'est déroulée sans problème, la fonction de rappel est appelée avec un seul paramètre qui est un objet [`GeolocationPosition`](/fr/docs/Web/API/GeolocationPosition) qui fournit un accès aux données d'emplacement.
- Une fonction de rappel optionnelle pour les cas d'erreur.
  - Si la récupération des informations d'emplacement a échoué, la fonction de rappel est appelée avec un seul paramètre qui est un objet [`GeolocationPositionError`](/fr/docs/Web/API/GeolocationPositionError) qui fournit des informations sur l'erreur.
- Un objet optionnel qui fournit des options pour la récupération des données d'emplacement.

Pour plus d'informations sur l'utilisation de cette API, nous vous conseillons de lire le guide [Utiliser l'API <i lang="en">Geolocation</i>](/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Interfaces

- [`Geolocation`](/fr/docs/Web/API/Geolocation)
  - : Il s'agit de la classe principale de cette API. Elle contient des méthodes pour récupérer la position actuelle, suivre les modifications de position, arrêter de suivre les déplacements.
- [`GeolocationPosition`](/fr/docs/Web/API/GeolocationPosition)
  - : Représente la position d'une personne. Une instance de `GeolocationPosition` est renvoyée lors d'un appel réussi à l'une des méthodes de [`Geolocation`](/fr/docs/Web/API/Geolocation), dans une fonction de rappel de réussite. Il contient un horodatage et une instance de [`GeolocationCoordinates`](/fr/docs/Web/API/GeolocationCoordinates).
- [`GeolocationCoordinates`](/fr/docs/Web/API/GeolocationCoordinates)
  - : Représente les coordonnées de la position d'une personne. Une instance de `GeolocationCoordinates` contient les informations de latitude, longitude et d'autres informations importantes relatives à l'emplacement.
- [`GeolocationPositionError`](/fr/docs/Web/API/GeolocationPositionError)
  - : Un objet `GeolocationPositionError` est renvoyé par un des appels infructueux à l'une des méthodes de [`Geolocation`](/fr/docs/Web/API/Geolocation), dans une fonction de rappel en cas d'erreur. Il contient un code d'erreur et un message.
- [`Navigator.geolocation`](/fr/docs/Web/API/Navigator/geolocation)
  - : Le point d'entrée pour cette API. Elle renvoie une instance de [`Geolocation`](/fr/docs/Web/API/Geolocation) à partir de laquelle on peut accéder aux autres fonctionnalités.

## Exemples

Voir le guide [Utiliser l'API <i lang="en">Geolocation</i>](/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#exemples) pour un exemple de code.

## Spécifications

{{Specifications("api.Geolocation")}}

## Compatibilité des navigateurs

{{Compat("api.Geolocation")}}

### Disponibilité

Comme la détermination de l'emplacement à partir des réseaux Wi-Fi souvent fournie par Google, l'API <i lang="en">Geolocation</i> de base pourrait être indisponible en Chine. Auquel cas, vous pouvez utiliser des fournisseurs tiers comme [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation), ou [Tencent](https://lbs.qq.com/tool/component-geolocation.html). Ces services utilisent l'adresse IP de la personne et/ou une application locale pour déterminer l'emplacement.

## Voir aussi

- [Utiliser l'API <i lang="en">Geolocation</i>](/fr/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [L'API <i lang="en">Geolocation</i> sur w3.org](https://www.w3.org/TR/geolocation-API/)
- [Billet sur le blog Hacks&nbsp;: Qui a déplacé ma géolocalisation&nbsp;? (en anglais)](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/)
