---
title: API Push
slug: Web/API/Push_API
l10n:
  sourceCommit: 5d19ba908628a2713c4ea9f30422dbd9563e1cf4
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

L'**API <i lang="en">Push</i>** permet aux applications web de recevoir des messages poussés depuis un serveur, que l'application soit active au premier plan, chargée, ou non. Ceci permet de fournir des notifications asynchrones et des alertes/mises à jour pour les personnes qui souhaitent en recevoir, créant l'opportunité d'être au courant rapidement.

## Concepts et usages de Push

> [!WARNING]
> Lorsqu'on implémente des abonnements via `PushManager`, il est primordial de se protéger contre les attaques CSRF/XSRF. Pour plus d'informations, voir les articles suivants&nbsp;:
>
> - [Anti-sèche pour se protéger contre les attaques CSRF (<i lang="en">Cross-Site Request Forgery</i>) (en anglais)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Prévenir les attaques CSRF et XSRF (en anglais)](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Pour qu'une application web puisse recevoir des messages <i lang="en">push</i>, elle doit disposer d'un [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API) actif. Quand le <i lang="en">service worker</i> est actif, on peut souscrire aux notifications <i lang="en">push</i> en utilisant [`PushManager.subscribe()`](/fr/docs/Web/API/PushManager/subscribe).

Cet abonnement fournira un objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) contenant toutes les informations dont l'application a besoin pour transmettre un message <i lang="en">push</i>&nbsp;: un point de terminaison et la clé de chiffrement nécessaire à l'envoi des données.

Le <i lang="en">service worker</i> sera alors démarré pour réceptionner les messages <i lang="en">push</i> via le gestionnaire d'évènement [`onpush`](/fr/docs/Web/API/ServiceWorkerGlobalScope/push_event). Ainsi, l'application peut réagir aux messages <i lang="en">push</i> reçus, par exemple en affichant une notification avec [`ServiceWorkerRegistration.showNotification()`](/fr/docs/Web/API/ServiceWorkerRegistration/showNotification).

Chaque abonnement est propre à un <i lang="en">service worker</i>. Le point d'accès correspondant pour l'abonnement est une [URL fonctionnelle (<i lang="en">capability URL</i>)](https://www.w3.org/TR/capability-urls/) unique. Il suffit de connaître ce point d'accès pour envoyer un message à votre application. L'URL du point d'accès doit donc rester secrète, afin d'éviter que d'autres applications puissent envoyer des messages <i lang="en">push</i> vers votre application.

L'activation d'un <i lang="en">service worker</i> nécessaire à la réception du message <i lang="en">push</i> peut accroître l'utilisation des ressources, particulièrement de la batterie. Chaque navigateur adopte une stratégie différente pour gérer cette consommation, sans qu'il y ait actuellement de mécanisme standard. Firefox impose un quota de messages <i lang="en">push</i> pouvant être envoyés à une application (cependant, les messages <i lang="en">push</i> utilisés pour les notifications sont exempts de cette limite). Le quota est réinitialisé à chaque visite sur le site. Chrome n'impose pas de limite particulière.

## Interfaces

- [`PushEvent`](/fr/docs/Web/API/PushEvent)
  - : Représente une action <i lang="en">push</i> envoyée à [la portée globale](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker). Elle contient les informations envoyées depuis le serveur d'application vers l'objet [`PushSubscription`](/fr/docs/Web/API/PushSubscription) responsable du traitement.
- [`PushManager`](/fr/docs/Web/API/PushManager)
  - : Permet de recevoir des notifications de serveurs tiers et de demander les URL pour les notifications <i lang="en">push</i>.
- [`PushMessageData`](/fr/docs/Web/API/PushMessageData)
  - : Fournit l'accès aux données transmises par le serveur, incluant des méthodes pour manipuler les données reçues.
- [`PushSubscription`](/fr/docs/Web/API/PushSubscription)
  - : Fournit l'URL de l'abonnement au point d'accès et permet également le désabonnement.
- [`PushSubscriptionOptions`](/fr/docs/Web/API/PushSubscriptionOptions)
  - : Représente les options associées à l'abonnement.

## Ajouts à l'API <i lang="en">Service Worker</i>

Les ajouts à [l'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API) suivants ont été spécifiés dans l'API <i lang="en">Push</i>, pour fournir un point d'entrée à l'utilisation de messages `Push` pour surveiller et répondre aux évènements de changement liés aux messages `Push` et aux souscriptions.

- [`ServiceWorkerRegistration.pushManager`](/fr/docs/Web/API/ServiceWorkerRegistration/pushManager) {{readonlyinline}}
  - : Fournit une référence à l'interface une référence de l'interface [`PushManager`](/fr/docs/Web/API/PushManager) permettant de gérer les abonnements <i lang="en">push</i> (créer un nouvel abonnement, obtenir l'abonnement existant, connaître l'état des permissions, se désabonner). Il s'agit du point d'entrée vers l'API <i lang="en">Push</i>.
- [`onpush`](/fr/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Un gestionnaire d'événement déclenché à chaque évènement [`push`](/fr/docs/Web/API/ServiceWorkerGlobalScope/push_event)&nbsp;; c'est-à-dire à chaque message <i lang="en">push</i> reçu depuis le serveur.
- [`onpushsubscriptionchange`](/fr/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Un gestionnaire d'événement déclenché à chaque évènement [`pushsubscriptionchange`](/fr/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)&nbsp;; par exemple, quand un abonnement <i lang="en">push</i> a été invalidé, ou va l'être (par exemple, quand un service <i lang="en">push</i> définit une durée d'expiration).

## Exemples

[Le livre de recettes pour les <i lang="en">service workers</i>](https://github.com/mdn/serviceworker-cookbook) contient différents exemples d'utilisation de l'API <i lang="en">Push</i>.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Envoyer des notifications WebPush identifiées avec VAPID grâce au service Push de Mozilla (en anglais)](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Démo API Push sur GitHub](https://github.com/gauntface/simple-push-demo)
- [Aperçu général des notifications <i lang="en">push</i> (en anglais)](https://web.dev/articles/push-notifications-overview)
- [L'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API)
