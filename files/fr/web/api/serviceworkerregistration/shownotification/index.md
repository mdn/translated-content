---
title: ServiceWorkerRegistration.showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
tags:
  - API
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerRegistration
  - showNotification
translation_of: Web/API/ServiceWorkerRegistration/showNotification
---
{{APIRef("Service Workers API")}}

La méthode **`showNotification()`** de l'interface {{domxref("ServiceWorkerRegistration")}} crée une notification dans un service worker actif.

> **Note :** Cette fonctionnalité est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

    ​serviceWorkerRegistration.showNotification(title, [options])

### Paramètres

- `title`
  - : Définit un titre pour la notification, qui s'affiche en haut de la fenêtre de notification.
- `options` {{optional_inline}}

  - : Un objet d'options contenant tous les paramètres personnalisés que vous souhaitez appliquer à la notification. Les options possibles sont:

    - `actions`: Un tableau de {{domxref ("NotificationAction")}} représentant les actions disponibles pour l'utilisateur lorsque la notification est présentée. Ce sont des options parmi lesquelles l'utilisateur peut choisir pour agir sur l'action dans le contexte de la notification elle-même. Le nom de l'action est envoyé au gestionnaire de notifications du service worker pour lui faire savoir que l'action a été sélectionnée par l'utilisateur. Les membres du tableau doivent être un objet. Il peut contenir les valeurs suivantes:

      - action: Une {{domxref("DOMString")}}  représentant une action utilisateur à afficher sur la notification.
      - title: Une {{domxref("DOMString")}} contenant le texte d'action à montrer à l'utilisateur.
      - icon: Une {{domxref("USVString")}} contenant l'URL d'une icône à afficher avec l'action.

      Les réponses appropriées sont construites à l'aide de `event.action` dans l'événement {{event("notificationclick")}}.

    - `badge`: Un {{domxref ("USVString")}} contenant l'URL de l'image utilisée pour représenter la notification lorsqu'il n'y a pas assez d'espace pour afficher la notification elle-même.
    - `body`: Un {{domxref ("DOMString")}} représentant le corps du texte de la notification, qui est affiché sous le titre.
    - `data`: Données arbitraires que vous souhaitez associer à la notification. Elles peuvent être de n'importe quel type de données.
    - `dir`: La direction dans laquelle afficher la notification. La valeur par défaut est `auto`, qui adopte simplement le comportement du paramètre de langue du navigateur, mais vous pouvez remplacer ce comportement en définissant les valeurs de `ltr` et `rtl` (bien que la plupart des navigateurs semblent ignorer ces paramètres.)
    - `icon`: Une {{domxref ("USVString")}} contenant l'URL d'une icône à afficher dans la notification.
    - `image`: Une {{domxref ("USVString")}} contenant l'URL d'une image à afficher dans la notification.
    - `lang`: La langue de la notification, telle que spécifiée à l'aide d'un {{domxref ("DOMString")}} représentant une [balise de langue BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Consultez la page des [codes de langue à 2 lettres ISO](http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/) de Sitepoint pour une référence simple.
    - `renotify`: Un {{domxref ("Boolean", "Booléen")}} spécifiant si l'utilisateur doit être notifié après qu'une nouvelle notification remplace l'ancienne. La valeur par défaut est `false`, ce qui signifie qu'ils ne seront pas notifiés.
    - `requireInteraction`: Un {{domxref ("Boolean", "Booléen")}} indiquant qu'une notification doit rester active jusqu'à ce que l'utilisateur clique dessus ou la rejette, plutôt que de se fermer automatiquement. La valeur par défaut est `false`.
    - `silent`: Un {{domxref ("Boolean", "Booléen")}} spécifiant si la notification est silencieuse (aucun son ni vibration émis), quels que soient les paramètres de l'appareil. La valeur par défaut est `false`, ce qui signifie qu'il ne sera pas silencieux.
    - `tag`: Un {{domxref ("DOMString")}} représentant un tag d'identification pour la notification.
    - `timestamp`: Un {{domxref ("DOMTimeStamp")}} représentant l'heure à laquelle la notification a été créée. Il peut être utilisé pour indiquer l'heure à laquelle une notification est réelle. Par exemple, cela peut se produire dans le passé lorsqu'une notification est utilisée pour un message qui n'a pas pu être envoyé immédiatement parce que l'appareil était hors ligne, ou dans le futur pour une réunion sur le point de commencer.
    - `vibrate`: Un [modèle de vibration](/fr/docs/Web/Guide/API/Vibration#Vibration_patterns) que le matériel de vibration de l'appareil émet avec la notification. Un modèle de vibration peut être un réseau avec aussi peu qu'un membre. Les valeurs sont des temps en millisecondes où les indices pairs (0, 2, 4, etc.) indiquent la durée de vibration et les indices impairs indiquent la durée de la pause. Par exemple, \[300, 100, 400] vibrerait 300 ms, mettrait en pause 100 ms, puis vibrerait 400 ms.

### Valeur de retour

Un {{jsxref('Promise')}} qui se résout en `undefined`.

## Exemples

```js
navigator.serviceWorker.register('sw.js')

function showNotification() {
  Notification.requestPermission((result) => {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        })
      })
    }
  })
}
```

Pour appeler la fonction ci-dessus à un moment approprié, vous pouvez utiliser le gestionnaire d'événements {{domxref ("ServiceWorkerGlobalScope.onnotificationclick")}}.

Vous pouvez également récupérer les détails des {{domxref ("Notification", "Notifications")}} qui ont été déclenchés par le service worker actuel en utilisant {{domxref ("ServiceWorkerRegistration.getNotifications()")}}.

## Spécifications

| Spécification                                                                                                                                | État                                     | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Web Notifications','#dom-serviceworkerregistration-shownotification','showNotification()')}} | {{Spec2('Web Notifications')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.ServiceWorkerRegistration.showNotification")}}
