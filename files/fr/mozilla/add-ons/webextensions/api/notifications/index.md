---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
---

{{AddonSidebar}}

Afficher les notifications à l'utilisateur, en utilisant le mécanisme de notification du système d'exploitation sous-jacent. Étant donné que cette API utilise le mécanisme de notification du système d'exploitation, les détails de l'apparence et du comportement des notifications peuvent varier en fonction du système d'exploitation et des paramètres de l'utilisateur.

Pour utiliser cette API, vous devez avoir la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "notifications".

La notification est identique sur tous les systèmes d'exploitation de bureau. Quelque chose comme :

![](notification.png)

## Types

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Définit le contenu d'une notification.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : Le type de notification Par exemple, cela définit si la notification peut contenir une image.

## Fonctions

- {{WebExtAPIRef("notifications.clear()")}}
  - : Effacer une notification spécifique, compte tenu de son identifiant.
- {{WebExtAPIRef("notifications.create()")}}
  - : Créez et affichez une nouvelle notification.
- {{WebExtAPIRef("notifications.getAll()")}}
  - : Recevez toutes les notifications
- {{WebExtAPIRef("notifications.update()")}}
  - : Mettre à jour une notification

## Evénements

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : Lancé lorsque l'utilisateur a cliqué sur un bouton dans la notification.
- {{WebExtAPIRef("notifications.onClicked")}}
  - : Lancé lorsque l'utilisateur a cliqué sur la notification, mais pas sur un bouton.
- {{WebExtAPIRef("notifications.onClosed")}}
  - : Lancé lorsqu'une notification est fermée, soit par le système, soit parce que l'utilisateur l'a rejeté..
- {{WebExtAPIRef("notifications.onShown")}}
  - : Lancé immédiatement après l'affichage d'une notification.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
