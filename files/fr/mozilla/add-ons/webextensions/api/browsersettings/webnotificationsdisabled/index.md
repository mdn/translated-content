---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
---

{{AddonSidebar()}}

Un objet {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} qui peut être utilisé pour empêcher les sites Web d'afficher des [`Notifications`](/fr/docs/Web/API/Notifications_API) à l'aide de l'API Web de notifications.

L'API `Notifications` est utilisée pour afficher les notifications de bureau à l'utilisateur. Il existe trois niveaux d'autorisation pour les notifications : _allow_, _deny_, et _prompt_. Les utilisateurs peuvent définir cette autorisation pour chaque site. Si l'utilisateur n'a pas défini d'autorisation pour un site particulier, le navigateur reviendra à une autorisation globale, qui sera par défaut *invité*e.

Définir `browserSettings.webNotificationsDisabled` à `true` change l'autorisation globale à _refuser_.

Notez que cela n'affectera pas les sites pour lesquels l'utilisateur a défini une préférence par site. Par exemple, si l'utilisateur définit <https://example.org> pour _autoriser_, et une extension place ensuite `browserSettings.webNotificationsDisabled` à `true`, alors les pages sous [https://example.org](https://example.org) seront toujours autorisées à afficher des notifications..

Si vous définissez `browserSettings.webNotificationsDisabled` à `false` la valeur par défaut globale est rétablie.

Notez que ce paramètre n'a aucun effet sur les notifications créées par des extensions à l'aide de l'API de [`notifications`](/fr/Add-ons/WebExtensions/API/notifications).

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Basculer le paramètre :

```js
async function toggleWebNotifications() {
  let current = await browser.browserSettings.webNotificationsDisabled.get({});
  console.log(`Current value: ${current.value}`);
  browser.browserSettings.webNotificationsDisabled.set({
    value: !current.value,
  });
}

browser.browserAction.onClicked.addListener(() => {
  toggleWebNotifications();
});
```

{{WebExtExamples}}
