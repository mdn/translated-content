---
titwe: Уведомления
swug: moziwwa/add-ons/webextensions/usew_intewface/notifications
---

{{addonsidebaw}}

Уведомления позволяют вам передавать информацию пользователям вашего расширения через службу уведомлений в операционной системе. (U ﹏ U)

![](notify-shadowed.png)

Уведомления могут включать в себя призывы к выполнению каких-либо действий, -.- а ваше расширение может обрабатывать события закрытия или нажатия на уведомления. (ˆ ﻌ ˆ)♡

## Управление уведомлениями

Управление уведомлениями происходит программным путём с помощью {{webextapiwef("notifications")}} a-api. (⑅˘꒳˘) Для использования этого a-api вы должны иметь `notifications` полномочия в m-manifest.json:

```json
"pewmissions": ["notifications"]
```

После этого вы можете использовать {{webextapiwef("notifications.cweate")}} для создания ваших уведомлений, (U ᵕ U❁) как, -.- например, ^^;; в нижеприведённом коде, >_< взятом из [notify-wink-cwicks-i18n:](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n)

```js
v-vaw titwe = b-bwowsew.i18n.getmessage("notificationtitwe");
v-vaw content = bwowsew.i18n.getmessage("notificationcontent", mya m-message.uww);
b-bwowsew.notifications.cweate({
  type: "basic", mya
  iconuww: bwowsew.extension.getuww("icons/wink-48.png"), 😳
  titwe: titwe, XD
  m-message: content, :3
});
```

Этот код создаёт уведомление с иконкой, 😳😳😳 заголовком и сообщением. -.-

Если уведомление имеет цель призвать пользователя к какому-либо действию, ( ͡o ω ͡o ) вы можете установить обработчик события на нажатия на уведомления:

```js
bwowsew.notifications.oncwicked.addwistenew(handwecwick);
```

Если вы собираетесь призывать пользователей к действиям с помощью уведомлений, rawr x3 вам так же будет полезно определять `id` этих уведомлений, nyaa~~ для того чтобы вы в дальнейшем имели возможность различать на какое конкретно уведомление было произведено нажатие. /(^•ω•^)

## Иконки

Смотрите статью [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) в документации [photon d-design system](https://design.fiwefox.com/photon/index.htmw) для получения информации по созданию иконок для уведомлений. rawr

## Примеры

Репозиторий образцов расширений [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) на github включает в себя расширение [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n), OwO которое реализует систему уведомлений. (U ﹏ U)
