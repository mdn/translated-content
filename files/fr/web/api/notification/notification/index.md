---
title: Notification()
slug: Web/API/Notification/Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

Le constructeur **`Notification()`** crée une nouvelle instance d'objet [`Notification`](/fr/docs/Web/API/notification), qui représente une notification utilisateur.

## Syntaxe

```js
const myNotification = new Notification(title, options);
```

### Paramètres

- `title`
  - : Définit un titre pour la notification, qui s'affiche en haut de la fenêtre de notification.
- `options` {{optional_inline}}

  - : Un objet d'options contenant tous les paramètres personnalisés que vous souhaitez appliquer à la notification. Les options possibles sont:

    - `dir`: La direction dans laquelle afficher la notification. La valeur par défaut est `auto`, qui adopte simplement le comportement du paramètre de langue du navigateur, mais vous pouvez remplacer ce comportement en définissant les valeurs de `ltr` et `rtl` (bien que la plupart des navigateurs semblent ignorer ces paramètres.)
    - `lang`: La langue de la notification, telle que spécifiée à l'aide d'un [`DOMString`](/fr/docs/Web/API/DOMString) représentant une [balise de langue BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Consultez la page des [codes de langue à 2 lettres ISO](https://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/) de Sitepoint pour une référence simple.
    - `badge`: Un [`USVString`](/fr/docs/Web/API/USVString) contenant l'URL de l'image utilisée pour représenter la notification lorsqu'il n'y a pas assez d'espace pour afficher la notification elle-même.
    - `body`: Un [`DOMString`](/fr/docs/Web/API/DOMString) représentant le corps du texte de la notification, qui est affiché sous le titre.
    - `tag`: Un [`DOMString`](/fr/docs/Web/API/DOMString) représentant un tag d'identification pour la notification.
    - `icon`: Une [`USVString`](/fr/docs/Web/API/USVString) contenant l'URL d'une icône à afficher dans la notification.
    - `image`: Une [`USVString`](/fr/docs/Web/API/USVString) contenant l'URL d'une image à afficher dans la notification.
    - `data`: Données arbitraires que vous souhaitez associer à la notification. Elles peuvent être de n'importe quel type de données.
    - `vibrate`: Un [modèle de vibration](/fr/docs/Web/Guide/API/Vibration#Vibration_patterns) que le matériel de vibration de l'appareil émet avec la notification.
    - `renotify`: Un [`Boolean`](/fr/docs/Web/API/Boolean) spécifiant si l'utilisateur doit être notifié après qu'une nouvelle notification remplace l'ancienne. La valeur par défaut est `false`, ce qui signifie qu'ils ne seront pas notifiés.
    - `requireInteraction`: Un [`Boolean`](/fr/docs/Web/API/Boolean) indiquant qu'une notification doit rester active jusqu'à ce que l'utilisateur clique dessus ou la rejette, plutôt que de se fermer automatiquement. La valeur par défaut est `false`.
    - `actions`: Un tableau de [`NotificationAction`](/fr/docs/Web/API/NotificationAction) représentant les actions disponibles pour l'utilisateur lorsque la notification est présentée. Ce sont des options parmi lesquelles l'utilisateur peut choisir pour agir sur l'action dans le contexte de la notification elle-même. Le nom de l'action est envoyé au gestionnaire de notifications du service worker pour lui faire savoir que l'action a été sélectionnée par l'utilisateur.
    - `silent`: Un [`Boolean`](/fr/docs/Web/API/Boolean) spécifiant si la notification est silencieuse (aucun son ni vibration émis), quels que soient les paramètres de l'appareil. La valeur par défaut est `false`, ce qui signifie qu'il ne sera pas silencieux.

## Exemple

Dans notre [démo Emogotchi](https://chrisdavidmills.github.io/emogotchi/) ([voir le code source](https://github.com/mdn/emogotchi)), nous exécutons une fonction `spawnNotification()` lorsque nous voulons déclencher une notification. La fonction reçoit des paramètres pour spécifier le corps, l'icône et le titre souhaités, puis elle crée l'objet `options` nécessaire et déclenche la notification à l'aide du constructeur `Notification()`.

```js
function spawnNotification(body, icon, title) {
  const options = {
    body: body,
    icon: icon,
  };
  const n = new Notification(title, options);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes Chrome

À partir de Chrome 49, les notifications ne fonctionnent pas en mode navigation privée.

Chrome pour Android lance une erreur `TypeError` lors de l'appel du constructeur `Notification`. Il ne prend en charge que la création de notifications à partir d'un service worker. Consultez le [Chromium issue tracker](https://bugs.chromium.org/p/chromium/issues/detail?id=481856) pour plus de détails.

### Notes Internet Explorer

La version 38.14352 et celles supérieure de MS Edge prend en charge l'`API Notification`. [Wikipédia - MS Edge](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history)
IE 11 et inférieur n'est pas pris en charge.

## Voir aussi

- [Utilisation de l'API Notifications](/fr/docs/Web/API/Notifications_API/Using_the_Notifications_API)
