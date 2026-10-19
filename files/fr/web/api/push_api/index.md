---
title: API Push
slug: Web/API/Push_API
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

L'API **Push** permet aux applications web de recevoir des messages poussés depuis un serveur, que l'application soit active au premier plan, chargée, ou non. Ceci permet de fournir des notifications asynchrones et des alertes/mises à jour pour les personnes qui souhaitent en recevoir, créant l'opportunité d'être au courant rapidement.

## Concepts et usages de Push

> [!WARNING]
> Lorsqu'on implémente des abonnements avec `PushManager`, il est primordial de se protéger contre les attaques CSRF/XSRF. Pour plus d'informations, voir les articles suivants&nbsp;:
>
> - [Anti-sèche pour se protéger contre les attaques CSRF (<i lang="en">Cross-Site Request Forgery</i>) <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Prévenir les attaques CSRF et XSRF <sup>(angl.)</sup>](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Pour qu'une application web puisse recevoir des messages <i lang="en">push</i>, elle doit disposer d'un [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API) actif. Quand le <i lang="en">service worker</i> est actif, on peut souscrire aux notifications <i lang="en">push</i> en utilisant {{DOMxRef("PushManager.subscribe()")}}.

Cet abonnement fournit un objet {{DOMxRef("PushSubscription")}} contenant toutes les informations dont l'application a besoin pour transmettre un message <i lang="en">push</i>&nbsp;: un point de terminaison et la clé de chiffrement nécessaire à l'envoi des données.

Le <i lang="en">service worker</i> est alors démarré pour réceptionner les messages <i lang="en">push</i> avec le gestionnaire d'évènement {{DOMxRef("ServiceWorkerGlobalScope.push_event", "onpush")}}. Ainsi, l'application peut réagir aux messages <i lang="en">push</i> reçus, par exemple en affichant une notification avec {{DOMxRef("ServiceWorkerRegistration.showNotification()")}}.

Chaque abonnement est propre à un <i lang="en">service worker</i>. Le point d'accès correspondant pour l'abonnement est une [URL fonctionnelle (<i lang="en">capability URL</i>) <sup>(angl.)</sup>](https://w3ctag.github.io/capability-urls/) unique&nbsp;; il suffit de connaître ce point d'accès pour envoyer un message à votre application. L'URL du point d'accès doit donc rester secrète, afin d'éviter que d'autres applications puissent envoyer des messages <i lang="en">push</i> vers votre application.

L'activation d'un <i lang="en">service worker</i> nécessaire à la réception du message <i lang="en">push</i> peut accroître l'utilisation des ressources, particulièrement de la batterie. Chaque navigateur adopte une stratégie différente pour gérer cette consommation, sans qu'il y ait actuellement de mécanisme standard. Firefox impose un quota de messages <i lang="en">push</i> pouvant être envoyés à une application (cependant, les messages <i lang="en">push</i> utilisés pour les notifications sont exempts de cette limite). Le quota est réinitialisé à chaque visite sur le site. Chrome n'impose pas de limite particulière.

## Interfaces

- {{DOMxRef("PushEvent")}}
  - : Représente une action <i lang="en">push</i> envoyée à [la portée globale](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un {{DOMxRef("ServiceWorker")}}. Elle contient les informations envoyées depuis le serveur d'application vers l'objet {{DOMxRef("PushSubscription")}} responsable du traitement.
- {{DOMxRef("PushManager")}}
  - : Permet de recevoir des notifications de serveurs tiers et de demander les URL pour les notifications <i lang="en">push</i>.
- {{DOMxRef("PushMessageData")}}
  - : Fournit l'accès aux données transmises par le serveur, incluant des méthodes pour manipuler les données reçues.
- {{DOMxRef("PushSubscription")}}
  - : Fournit l'URL de l'abonnement au point d'accès et permet également le désabonnement.
- {{DOMxRef("PushSubscriptionOptions")}}
  - : Représente les options associées à l'abonnement.

## Ajouts à l'API <i lang="en">Service Worker</i>

Les ajouts à [l'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API) suivants ont été spécifiés dans l'API <i lang="en">Push</i>, pour fournir un point d'entrée à l'utilisation de messages `Push` pour surveiller et répondre aux évènements de changement liés aux messages `Push` et aux souscriptions.

- {{DOMxRef("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : Fournit une référence à l'interface une référence de l'interface [`PushManager`](/fr/docs/Web/API/PushManager) permettant de gérer les abonnements <i lang="en">push</i> (créer un nouvel abonnement, obtenir l'abonnement existant, connaître l'état des permissions, se désabonner). Il s'agit du point d'entrée vers l'API <i lang="en">Push</i>.
- {{DOMxRef("ServiceWorkerGlobalScope.push_event", "onpush")}}
  - : Un gestionnaire d'évènement déclenché à chaque évènement {{DOMxRef("ServiceWorkerGlobalScope/push_event", "push")}}&nbsp;; c'est-à-dire à chaque message <i lang="en">push</i> reçu depuis le serveur.
- {{DOMxRef("ServiceWorkerGlobalScope.pushsubscriptionchange_event", "onpushsubscriptionchange")}}
  - : Un gestionnaire d'évènement déclenché à chaque évènement {{DOMxRef("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}&nbsp;; par exemple, quand un abonnement <i lang="en">push</i> a été invalidé, ou va l'être (par exemple, quand un service <i lang="en">push</i> définit une durée d'expiration).

## Exemples

[Le livre de recettes pour les <i lang="en">service workers</i> <sup>(angl.)</sup>](https://github.com/mdn/serviceworker-cookbook) contient différents exemples d'utilisation de l'API <i lang="en">Push</i>.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Envoyer des notifications WebPush identifiées avec VAPID grâce au service Push de Mozilla <sup>(angl.)</sup>](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Démo API Push sur GitHub <sup>(angl.)</sup>](https://github.com/gauntface/simple-push-demo)
- [Aperçu général des notifications <i lang="en">push</i> <sup>(angl.)</sup>](https://web.dev/articles/push-notifications-overview)
- [L'API <i lang="en">Service Worker</i>](/fr/docs/Web/API/Service_Worker_API)
