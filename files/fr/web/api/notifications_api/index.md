---
title: API de Notifications
slug: Web/API/Notifications_API
tags:
  - API Notifications
  - Notifications
  - permission
  - système
translation_of: Web/API/Notifications_API
---
{{DefaultAPISidebar("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

L'API Notifications permet aux pages Web de contrôler l'affichage des notifications système de l'utilisateur final. Ceux-ci sont en dehors de la fenêtre du contexte de navigation de niveau supérieur, ils peuvent donc être affichés même lorsque l'utilisateur a changé d'onglet ou déplacé vers une autre application. L'API est conçue pour être compatible avec les systèmes de notification existants, sur différentes plates-formes.

## Concepts et utilisation

Sur les plates-formes prises en charge, l'affichage d'une notification système implique généralement deux choses. Tout d'abord, l'utilisateur doit accorder l'autorisation à l' {{glossary("Origin","origine")}} actuelle pour afficher les notifications système, ce qui est généralement effectué lorsque l'application ou le site s'initialise, à l'aide de la méthode {{domxref ("Notification.requestPermission()")}}. Cela doit être fait en réponse à un geste de l'utilisateur, tel que cliquer sur un bouton, par exemple:

```js
btn.addEventListener('click', () => {
  let promise = Notification.requestPermission()
  // wait for permission
})
```

> **Note :** Il ne s'agit pas seulement d'une bonne pratique - vous ne devriez pas envoyer de spam aux utilisateurs avec des notifications qu'ils n'acceptent pas - mais les navigateurs suivants interdiront explicitement les notifications non déclenchées en réponse à un geste de l'utilisateur. Firefox le fait déjà depuis la version 72, par exemple.

Cela créera une boîte de dialogue, proche de cette apparence:

![](screen_shot_2019-12-11_at_9.59.14_am.png)

De là, l'utilisateur peut choisir d'autoriser les notifications de cette origine ou de les bloquer. Une fois le choix effectué, le paramètre persistera généralement pour la session en cours.

> **Note :** Depuis Firefox 44, les autorisations pour les notifications et le push ont été fusionnées. Si l'autorisation est accordée pour les notifications, le push sera également activé.

Ensuite, une nouvelle notification est créée à l'aide du constructeur {{domxref ("Notification.Notification", "Notification ()")}}. Auquel on doit passé un titre en argument et il peut éventuellement recevoir un objet d'options pour personnalisés la notification, telles que la direction du texte, le corps du texte, l'icône à afficher, le son de notification à lire, etc.

En outre, la spécification de l'API Notifications spécifie un certain nombre d'ajouts à l'[API ServiceWorker](/fr/docs/Web/API/ServiceWorker_API), pour permettre aux service worker de déclencher des notifications.

> **Note :** Pour en savoir plus sur l'utilisation des notifications dans votre propre application, lisez [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API).

## Les interfaces de Notifications

- {{domxref("Notification")}}
  - : Définit un objet `Notification`.

### Ajout de service worker

- {{domxref("ServiceWorkerRegistration")}}
  - : Inclut les méthodes {{domxref ("ServiceWorkerRegistration.showNotification()")}} et {{domxref ("ServiceWorkerRegistration.getNotifications()")}}, pour contrôler l'affichage des notifications.
- {{domxref("ServiceWorkerGlobalScope")}}
  - : Inclut le gestionnaire {{domxref ("ServiceWorkerGlobalScope.onnotificationclick")}}, pour déclencher des fonctions personnalisées lorsqu'un utilisateur clique sur une notification.
- {{domxref("NotificationEvent")}}
  - : Un type spécifique d'objet événement, basé sur {{domxref ("ExtendableEvent")}}, qui représente une notification qui s'est déclenchée.

## Spécifications

| Spécification                                | État                                     | Commentaire     |
| -------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification")}}

## Voir également

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
