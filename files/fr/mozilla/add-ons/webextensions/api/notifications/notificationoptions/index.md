---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
tags:
  - AP
  - Add-ons
  - Extensions
  - Non-standard
  - NotificationOptions
  - Refere
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
---
{{AddonSidebar()}}

Ce type contient les données nécessaires pour :

- créer une notification avec {{WebExtAPIRef("notifications.create()")}},
- mettre à jour une notification avec {{WebExtAPIRef("notifications.update()")}}.

## Type

Les valeurs de ce type sont des objets qui contiennent les propriétés listées ci-dessous.

Les trois premières propriétés - `type`, `title`, `message` - sont obligatoires pour {{WebExtAPIRef("notifications.create()")}}, mais pas avec {{WebExtAPIRef("notifications.update()")}}. Firefox ne supporte que les propriétés `type`, `title`, `message`, et `iconUrl` pour le moment, et le seul `type` disponible est `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. Le type de notification que vous voulez. Selon votre choix ici, certaines propriétés seront soit nécéssaires, soit interdites.
- `message`
  - : `string`. Le contenu de la notification
- `title`
  - : `string`. Le titre de la notification
- `iconUrl`{{optional_inline}}
  - : `string`. Une URL correspondant vers une icône à afficher dans la notification. Ça peut être une URL de donnée, une URL blob, une URL http ou https, ou une [l'URL relative](/fr/Add-ons/WebExtensions/Chrome_incompatibilities#Relative_URLs) d'un fichier de l'extension.
- `contextMessage`{{optional_inline}}
  - : `string`. Du texte supplémentaire à afficher.
- `priority`{{optional_inline}}
  - : `number`. La priorité de cette notification. Ça peut être 0, 1, or 2. La valeur par défaut est 0.
- `eventTime`{{optional_inline}}
  - : `number`. Un timestamp en millisecondes pour cette notification [depuis le timestamp 0](https://fr.wikipedia.org/wiki/Temps_Unix).
- `buttons`{{optional_inline}}

  - : `array` de `button`. Un tableau pouvant contenir jusqu'à deux boutons à afficher dans la notification. Vous pouvez réagir aux clics sur ces boutons grâce à {{WebExtAPIRef("notifications.onButtonClicked")}}. Chaque bouton est un objet avec ces propriétés :

    - `title`
      - : `string`. Le texte du bouton.
    - `iconUrl`{{optional_inline}}
      - : `string`. Une URL pointant vers l'icône de ce bouton.

- `imageUrl`

  - : `string`. Une URL pointant vers une image à utiliser dans la notification. Ça peut être une URL de donnée, une URL blob, une URL http ou https, ou une [l'URL relative](/fr/Add-ons/WebExtensions/Chrome_incompatibilities#Relative_URLs) d'un fichier de l'extension.

    _Cette propriété est utilisable seuleument si le `type` de la notification est `'image'`. Dans ce cas, cette propriété sera obligatoire si l'objet `NotificationOptions` est utilisé avec {{WebExtAPIRef("notifications.create()")}}, mais optionel avec_ _{{WebExtAPIRef("notifications.update()")}}._

- `items`

  - : `array` of `item`. Un tableau d'éléments à inclure dans la notification. Selon les paramètres de notification du système d'exploitation, certains éléments que vous souhaitez afficher pourraient ne pas l'être. Chaque élément est un objet avec les propriétés suivantes :

    - `title`
      - : `string`. Le titre de cet élément.
    - `message`
      - : `string`. Le message à afficher pour cet élément.

    _Cette propriété est utilisable seuleument si le `type` de la notification est `'list'`. Dans ce cas, cette propriété sera obligatoire si l'objet `NotificationOptions` est utilisé avec {{WebExtAPIRef("notifications.create()")}}, mais optionel avec_ _{{WebExtAPIRef("notifications.update()")}}._

- `progress`
  - : `integer`. Une valeur entre 0 et 100, qui représente l'avancée actuelle d'un indicateur de progression. _Cette propriété est utilisable seuleument si le `type` de la notification est `'progress'`. Dans ce cas, cette propriété sera obligatoire si l'objet `NotificationOptions` est utilisé avec {{WebExtAPIRef("notifications.create()")}}, mais optionel avec_ _{{WebExtAPIRef("notifications.update()")}}._

Notez que les propriétés `appIconMaskUrl` et `isClickable` ne sont pas supportées.

## Compatibilité du navigateur

{{Compat("webextensions.api.notifications.NotificationOptions")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API chromium [`chrome.notifications`](https://developer.chrome.com/extensions/notifications).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
