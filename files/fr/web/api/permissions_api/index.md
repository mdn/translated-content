---
title: Permissions API
slug: Web/API/Permissions_API
---

{{DefaultAPISidebar("Permissions API")}}

L'API Permissions fournit une manière cohérente pour connaître, dans un programme, le statut des permissions dans le contexte courant. On pourra par exemple utiliser cette API afin de déterminer si la permission d'accéder à une API donnée a été accordée ou refusée.

> **Note :** Cette fonctionnalité est disponible via [les Web Workers](/fr/docs/Web/API/Web_Workers_API) bien que les versions actuelles de Firefox n'implémentent pas [WorkerNavigator.permissions](/fr/docs/Web/API/WorkerNavigator/permissions).

## Concepts et usages

Historiquement les differentes API géraient leurs propres permissions de façon peu cohérente. L'API [Notifications](/fr/docs/Web/API/Notifications_API) par exemple permet de vérifier explicitement l'état d'autorisation et de déclencher la demande de permission tandis que l'API [Geolocation](/fr/docs/Web/API/Geolocation) ne permet pas ce fonctionnement (ce qui peut poser problème lorsque l'utilisateur a refusé la requête de permission initiale). L'API Permissions fournit un ensemble d'outils pour permettre aux développeuses et développeurs d'implémenter une meilleure ergonomie en ce qui concerne les permissions.

La propriété `permissions` est accessible via l'objet [`Navigator`](/fr/docs/Web/API/Navigator), dans le contexte standard du navigateur et dans le contexte des <i lang="en">workers</i> ([`WorkerNavigator`](/fr/docs/Web/API/WorkerNavigator), ce qui permet de vérifier l'état des permissions depuis les <i lang="en">workers</i>). Cette propriété renvoie un objet [`Permissions`](/fr/docs/Web/API/Permissions) qui fournit l'accès aux fonctionalités de l'API Permissions.

Lorsque cet objet a été récupéré, on peut réaliser différentes opérations relatives aux permissions. On peut par exemple connaître l'état d'une permission en utilisant la méthode [`Permissions.query()`](/fr/docs/Web/API/Permissions/query) qui renvoie une promesse dont la résolution est un objet [`PermissionStatus`](/fr/docs/Web/API/PermissionStatus) renseignant sur l'état d'autorisation pour une API donnée.

L'API Permissions ne donne pas accès aux permissions de l'ensemble des API. Voici un sous-ensemble d'API qui peuvent fonctionner avec l'API Permissions :

- [L'API Clipboard (pour la gestion du presse-papiers)](/fr/docs/Web/API/Clipboard_API)
- [L'API Notifications](/fr/docs/Web/API/Notifications_API)
- [L'API Push](/fr/docs/Web/API/Push_API)
- L'API Web MIDI

À l'avenir, davantage d'API devraient être prises en charge par l'API Permissions.

## Exemples

Voici un exemple simple nommé <i lang="en">Location Finder</i>. Vous pouvez [lancer cet exemple en live ici](https://chrisdavidmills.github.io/location-finder-permissions-api/), ou [voir le code source sur GitHub](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages).

Vous pouvez également en lire plus sur le fonctionnement de cet exemple dans l'article [Utiliser l'API Permissions](/fr/docs/Web/API/Permissions_API/Using_the_Permissions_API).

## Interfaces

- [`Navigator.permissions`](/fr/docs/Web/API/Navigator/permissions) (respectivement [`WorkerNavigator.permissions`](/fr/docs/Web/API/WorkerNavigator/permissions)) {{readonlyinline}}
  - : Fournit un accès à l'objet [`Permissions`](/fr/docs/Web/API/Permissions) depuis le contexte principal (respectivement celui du worker).
- [`Permissions`](/fr/docs/Web/API/Permissions)
  - : Fournit les principales fonctionalités de l'API Permissions, telles que les méthodes de demande et de révocation des permissions.
- [`PermissionStatus`](/fr/docs/Web/API/PermissionStatus)
  - : Fournit l'accès à l'état actuel d'une permission ainsi qu'un gestionnaire d'évènements pour répondre aux changements d'état d'une permission.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Permissions](/fr/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- <i lang="en">Using the Permissions API to Detect How Often Users Allow or Deny Camera Access</i>

  [<i lang="en">Using the Permissions API to Detect How Often Users Allow or Deny Camera Access</i> (en anglais)](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)

- [`Notification.permission`](/fr/docs/Web/API/notification/permission)
- [Confidentialité, permissions et sécurité de l'information](/fr/docs/Web/Privacy)
