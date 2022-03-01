---
title: Push API
slug: Web/API/Push_API
tags:
  - API
  - Chargement
  - Experimental
  - Notifications
  - Push
  - Reference
  - Service Workers
translation_of: Web/API/Push_API
---
{{DefaultAPISidebar("Push API")}}{{SeeCompatTable}}

L' **API Push**  donne aux applications web la possibilité de recevoir des messages qui leur sont poussés depuis un serveur, qu'il s'agisse ou non d'une application active au premier plan, ou même actuellement chargée, sur un agent utilisateur. Ceci permet aux développeurs de délivrer des notifications asynchrones et des mises-à-jour aux utilisateurs qui le choisissent, entrainant un meilleur engagement \[de l'utilisateur] avec du nouveau contenu au moment opportun.

> **Note :** Cette documentation couvre les spécifications W3C de l'API Push; si vous recherchez la documentation du système propriétaire de Push de Firefox OS, merci de vous reporter à [Simple Push](/fr/docs/Web/API/Simple_Push_API).

## Concepts et usages de Push

> **Attention :** Lors de la mise en œuvre des abonnements PushManager, il est d'une importance vitale de se protéger contre les problèmes de CSRF/XSRF dans votre application. Voir les articles suivants pour plus d'informations :
>
> - [Feuille de prévention contre les Cross-Site Request Forgery (CSRF)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Prévention conte les attaques CSRF et XSRF](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Pour qu'une application web puisse recevoir des messages Push, elle doit avoir un [service worker](/en-US/docs/Web/API/ServiceWorker_API) actif. Quand le service worker est actif, on peut souscrire aux notifications Push en utilisant {{domxref("PushManager.subscribe()")}}.

L'élément {{domxref("PushSubscription")}} qui en résulte inclut toutes les informations dont l'application a besoin pour transmettre un message Push: un point de terminaison et la clé de chiffrement nécessaire à l'envoi des données.

Le service worker sera démarré, comme nécessaire, pour réceptionner les messages Push, qui sont délivrés au gestionnaire d'évènement {{domxref("ServiceWorkerGlobalScope.onpush")}}. Ceci permet aux applications de réagir au message Push reçu, par exemple en affichant une notification (en utilisant {{domxref("ServiceWorkerRegistration.showNotification()")}}.)

Chaque souscription est unique à un service worker. Le point de terminaison de la souscription est une [URL fonctionnelle](http://www.w3.org/TR/capability-urls/) unique: la connaissance du point de terminaison est tout ce qui est nécessaire pour envoyer un message à votre application. L'URL du point de terminaison doit cependant rester secrète, sinon d'autres applications seront capables d'envoyer des messages Push à votre application.

Activer un service worker pour délivrer un message Push peut accroître l'utilisation des ressources, particulièrement de la batterie. Les différents navigateurs ont des régimes différents pour gèrer ça — Il n'y a pas de mécanisme standard. Firefox permet à un nombre limité (quota) de messages Push d'être envoyé à une application, cependant les messages Push qui générent les notifications sont exempts de cette limite. La limite est rafraichie chaque fois que le site est visité. En comparaison, Chrome n'applique pas de limites mais nécessite que chaque message Push lance une notification pour pouvoir être affiché.

> **Note :** Comme pour Gecko 44, le quota de messages Push par application n'est pas incrémenté quand une nouvelle notification se lance et qu'une autre est déjà visible, pendant une période de 3 secondes. Cela permet de gèrer le cas où une rafale de messages Push est reçue et qu'ils n'afficheraient pas tous une notification.

> **Note :** Chrome nécessite actuellement de configurer un projet sur [Google Cloud Messaging](https://developers.google.com/cloud-messaging/) pour envoyer des messages Push et utilise le numero du projet associé ainsi que la clé durant l'envoi des messages Push. Il requiert aussi un manifeste applicatif avec des paramètres spéciaux pour utiliser ce service. Nous espérons que cette restriction sera supprimée dans le futur..

## Interfaces

- {{domxref("PushEvent")}}
  - : Représente une action push envoyée à l'élément de [portée global](/en-US/docs/Web/API/ServiceWorkerGlobalScope) (global scope) d'un {{domxref("ServiceWorker")}}. Elle contient les informations envoyées depuis l'application à un {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Fournit un moyen de recevoir des notifications de serveurs tiers ainsi que de demander les URL pour les notifications Push. Cette interface remplace les fonctionnalités obsolètes de l'interface {{domxref("PushRegistrationManager")}}.
- {{domxref("PushMessageData")}}
  - : Fournit l'accès pour pousser des données transmises par un serveur et inclut des méthodes pour manipuler les données reçues.
- {{domxref("PushSubscription")}}
  - : Fournit une URL de point de terminaison et permet la désinscription à un service Push.

## Complément au Service worker

Les ajouts à [l'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API) suivants ont été spécifiés dans l'API <i lang="en">Push</i>, pour fournir un point d'entrée à l'utilisation de messages `Push` pour surveiller et répondre aux évènements de changement liés aux messages `Push` et aux souscriptions.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Retourne une référence de l'interface {{domxref("PushManager")}} pour gèrer les souscriptions push incluant la souscription, récupèrer une souscription existante, et accèder au statut des permissions push. C'est le point d'entrée dans l'utilisation de la communication push.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : Un gestionnaire d'événement lancé chaque fois qu'un événement {{Event("push")}} se produit ; c'est à chaque fois qu'un message push du serveur est reçu.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : Un gestionnaire d'événement lancé chaque fois qu'un événement {{Event("pushsubscriptionchange")}} se produit; par exemple, quand une souscription push a été invalidée, ou va être invalidée (c.à.d. quand un service push définit une durée d'expiration).

## Spécifications

| Spécification                    | Statut                       | Commentaire         |
| -------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("Push API")}} | {{Spec2("Push API")}} | Définition initiale |

## Compatibilité des navigateurs

### `PushEvent`

{{Compat("api.PushEvent")}}

### `PushMessageData`

{{Compat("api.PushMessageData")}}

## Voir aussi

- [Using the Push API \[EN\]](/en-US/docs/Web/API/Push_API/Using_the_Push_API)
- [Démo API Push](https://github.com/chrisdavidmills/push-api-demo), sur Github
- [Push Notifications on the Open Web](http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web), Matt Gaunt
- [API Service Worker](/fr/docs/Web/API/Service_Worker_API)
