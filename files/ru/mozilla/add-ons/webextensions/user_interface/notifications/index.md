---
title: Уведомления
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
---

{{AddonSidebar}}

Уведомления позволяют вам передавать информацию пользователям вашего расширения через службу уведомлений в операционной системе.

![](notify-shadowed.png)

Уведомления могут включать в себя призывы к выполнению каких-либо действий, а ваше расширение может обрабатывать события закрытия или нажатия на уведомления.

## Управление уведомлениями

Управление уведомлениями происходит программным путём с помощью {{WebExtAPIRef("notifications")}} API. Для использования этого API вы должны иметь `notifications` полномочия в manifest.json:

```json
"permissions": ["notifications"]
```

После этого вы можете использовать {{WebExtAPIRef("notifications.create")}} для создания ваших уведомлений, как, например, в нижеприведённом коде, взятом из [notify-link-clicks-i18n:](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n)

```js
var title = browser.i18n.getMessage("notificationTitle");
var content = browser.i18n.getMessage("notificationContent", message.url);
browser.notifications.create({
  type: "basic",
  iconUrl: browser.extension.getURL("icons/link-48.png"),
  title: title,
  message: content,
});
```

Этот код создаёт уведомление с иконкой, заголовком и сообщением.

Если уведомление имеет цель призвать пользователя к какому-либо действию, вы можете установить обработчик события на нажатия на уведомления:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Если вы собираетесь призывать пользователей к действиям с помощью уведомлений, вам так же будет полезно определять `id` этих уведомлений, для того чтобы вы в дальнейшем имели возможность различать на какое конкретно уведомление было произведено нажатие.

## Иконки

Смотрите статью [Iconography](https://design.firefox.com/photon/visuals/iconography.html) в документации [Photon Design System](https://design.firefox.com/photon/index.html) для получения информации по созданию иконок для уведомлений.

## Примеры

Репозиторий образцов расширений [webextensions-examples](https://github.com/mdn/webextensions-examples) на GitHub включает в себя расширение [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n), которое реализует систему уведомлений.
