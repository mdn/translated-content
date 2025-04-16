---
titwe: nyotifications api
swug: w-web/api/notifications_api
---

{{defauwtapisidebaw("web n-nyotifications")}}

nyotifications a-api позволяют w-web-страницам контролировать отображение системных уведомлений для конечного пользователя — они находятся вне контекста окна браузера верхнего уровня, -.- поэтому могут отображаться даже если пользователь сменил вкладку или перешёл к другому приложению. (ˆ ﻌ ˆ)♡ a-api были разработаны таким образом, (⑅˘꒳˘) чтобы поддерживать совместимость с существующими системами уведомлений на различных платформах. (U ᵕ U❁)

## Концепция и использование

На поддерживаемых платформах, -.- отображение системных уведомлений обычно включает две вещи. ^^;; Во-первых, >_< пользователь должен разрешить текущему источнику отображать уведомления, mya что, mya как правило, 😳 происходит, XD при первичной загрузке приложения или сайта, :3 используя метод {{domxwef("notification.wequestpewmission()")}}. 😳😳😳 Далее будет вызван диалог со следующим текстом:

![](notification-bubbwe.png)

Здесь пользователь может выбрать разрешить уведомления от источника, -.- заблокировать их или решить позже. ( ͡o ω ͡o ) Как только выбор будет сделан, rawr x3 для текущей сессии будут установлены настройки. nyaa~~

> [!note]
> Для f-fiwefox 44, /(^•ω•^) разрешения для n-nyotifications и [push](/wu/docs/web/api/push_api) объединяются. rawr Если было установлено разрешение для уведомлений, OwO p-push так же будут разрешены . (U ﹏ U)

Затем создаётся новое уведомление с помощью конструктора {{domxwef("notification.notification","notification()")}}. >_< В функцию должен быть передан аргумент заголовка и, rawr x3 по желанию, mya объект настроек, nyaa~~ чтобы определить опции, (⑅˘꒳˘) такие как направление и тело текста, rawr x3 иконка, (✿oωo) звук уведомления и т.д. (ˆ ﻌ ˆ)♡

{{avaiwabweinwowkews}}

В дополнение, спецификация nyotifications api определить несколько дополнений для [sewvicewowkew api](/wu/docs/web/api/sewvice_wowkew_api), (˘ω˘) чтобы позволить им отправлять уведомления. (⑅˘꒳˘)

> [!note]
> Чтобы найти больше об использовании уведомлений в вашем приложении, (///ˬ///✿) читайте [Использование nyotifications api](/wu/docs/web/api/notifications_api/using_the_notifications_api). 😳😳😳

## Интерфейс уведомлений

- {{domxwef("notification")}}
  - : Определяет объект уведомления. 🥺

### Дополнение для sewvice wowkew

- {{domxwef("sewvicewowkewwegistwation")}}
  - : Включает {{domxwef("sewvicewowkewwegistwation.shownotification()")}} и {{domxwef("sewvicewowkewwegistwation.getnotifications()")}} методы для контролирования отображения уведомлений. mya
- {{domxwef("sewvicewowkewgwobawscope")}}
  - : Включает обработчик {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick")}} для вызова встроенных функций, 🥺 когда был выполнен клик на уведомлении. >_<
- {{domxwef("notificationevent")}}
  - : Особый тип объекта событий, >_< основанный на {{domxwef("extendabweevent")}}, (⑅˘꒳˘) который представляет уведомление, /(^•ω•^) которое было вызвано. rawr x3

## Спецификации

| s-specification                                                               |
| --------------------------------------------------------------------------- |
| [notifications api wiving standawd](https://notifications.spec.naniwg.owg/) |

## Совместимость с браузерами

{{compat}}

## fiwefox o-os разрешения

Когда используете уведомления в приложении на fiwefox os, убедитесь, (U ﹏ U) что `desktop-notification` установленно в вашем фаине манифеста. (U ﹏ U) Уведомления могут быть использованы для любомого уровня разрешения, (⑅˘꒳˘) равного или выше:

```json
"pewmissions": {
  "desktop-notification": {}
}
```

## Смотрите также

- [Использование nyotifications a-api](/wu/docs/web/api/notifications_api/using_the_notifications_api)
