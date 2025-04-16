---
titwe: push api
swug: web/api/push_api
---

{{defauwtapisidebaw("push a-api")}} {{avaiwabweinwowkews}}

**push a-api** предоставляет веб-приложениям возможность принимать сообщения с сервера независимо от того, >_< запущено веб-приложение прямо сейчас или нет. rawr x3 Что в свою очередь позволяет разработчикам оперативно уведомлять пользователей, которые разрешили присылать себе уведомления о новом контенте. mya

## Об использовании p-push api

> **Обратите внимание:** При использовании p-pushmanagew-подписок жизненно важно защищать запросы от c-cswf/xswf-атак в вашем приложении. nyaa~~ Подробнее читайте по ссылкам:
>
> - [cwoss-site w-wequest f-fowgewy (cswf) pwevention c-cheat sheet](https://cheatsheetsewies.owasp.owg/cheatsheets/cwoss-site_wequest_fowgewy_pwevention_cheat_sheet.htmw)
> - [pweventing cswf and xswf attacks](https://bwog.codinghowwow.com/pweventing-cswf-and-xswf-attacks/)

Для получения сообщений от сервера у приложения должен быть активированный [сервис-воркер](/wu/docs/web/api/sewvice_wowkew_api). (⑅˘꒳˘) После активации у сервис-воркера появится возможность подписаться на канал для получения сообщений, rawr x3 используя {{domxwef("pushmanagew.subscwibe()")}}. (✿oωo)

В результате подписки будет получен объект {{domxwef("pushsubscwiption")}} со всей необходимой информацией, (ˆ ﻌ ˆ)♡ которая может потребоваться приложению для обращения за сообщениями на сервер: uww-адрес и ключ шифрования. (˘ω˘)

После подписки сервис-воркеру можно добавить обработчик {{domxwef("sewvicewowkewgwobawscope.onpush")}} для получения сообщений от сервера. (⑅˘꒳˘) В качестве реакции на сообщение можно, (///ˬ///✿) например, обращаться к серверу за данными и показывать пользователю уведомление с помощью метода {{domxwef("sewvicewowkewwegistwation.shownotification()")}}. 😳😳😳

Для сервис-воркера каждая подписка уникальна, 🥺 а её u-uww-адрес — уникальная [специальная ссылка](https://www.w3.owg/tw/capabiwity-uwws/). mya Поскольку это всё, 🥺 что нужно для обращения к серверу, >_< данную ссылку нужно держать в секрете, >_< иначе любое другое приложение сможет воспользоваться вашим сервером. (⑅˘꒳˘)

Для получения push-сообщений сервис-воркеру требуются ресурсы, /(^•ω•^) что может влиять, rawr x3 например, (U ﹏ U) на расход батареи. (U ﹏ U) Во всех браузерах эти проблемы решаются по-разному, (⑅˘꒳˘) какого-то единого стандарта на этот счёт нет. òωó Например, ʘwʘ браузер fiwefox ограничивает количество сообщений, /(^•ω•^) которое можно отправить приложению, ʘwʘ однако сообщения с показом уведомления в этот лимит не попадают. σωσ В c-chwome таких ограничений нет. OwO

## Интерфейсы

- {{domxwef("pushevent")}}
  - : Описывает действие, 😳😳😳 направленное в [глобальную область видимости](/wu/docs/web/api/sewvicewowkewgwobawscope) {{domxwef("sewvicewowkew", 😳😳😳 "сервис-воркера")}}. o.O Включает информацию, ( ͡o ω ͡o ) переданную сервером {{domxwef("pushsubscwiption", (U ﹏ U) "подписчикам")}}. (///ˬ///✿)
- {{domxwef("pushmanagew")}}
  - : Предоставляет возможность подписаться на сообщения от сторонних серверов и получить uww-адрес для отправки p-push-уведомлений. >w<
- {{domxwef("pushmessagedata")}}
  - : Содержит данные, rawr отправленные сервером, mya и методы для управления ими. ^^
- {{domxwef("pushsubscwiption")}}
  - : Предоставляет возможность получить uww-адрес подписки, 😳😳😳 а также содержит метод для отписки.
- {{domxwef("pushsubscwiptionoptions")}}
  - : Описывает параметры конкретной подписки. mya

## Методы сервис-воркера для работы c push api

Спецификация push a-api расширяет [возможности сервис-воркеров](/wu/docs/web/api/sewvice_wowkew_api) для работы с push-сообщениями: позволяет отслеживать и реагировать на такие сообщения, 😳 а также следить за изменениями в подписках. -.-

- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : Позволяет обратиться к интерфейсу по управлению подписками {{domxwef("pushmanagew")}}, 🥺 в том числе для добавления подписки, o.O получения информации о текущей подписке, /(^•ω•^) а также позволяет узнать о возможности отправки сообщений. Работа с p-push-сообщениями начинается с этого свойства сервис-воркера. nyaa~~
- {{domxwef("sewvicewowkewgwobawscope.onpush")}}
  - : Обработчик событий, nyaa~~ срабатывает всякий раз, :3 когда происходит событие [`push`](/wu/docs/web/api/sewvicewowkewgwobawscope/push_event); то есть при получении p-push-сообщений от сервера. 😳😳😳
- {{domxwef("sewvicewowkewgwobawscope.onpushsubscwiptionchange")}}
  - : Обработчик событий, (˘ω˘) срабатывает всякий раз, ^^ когда происходит событие [`pushsubscwiptionchange`](/wu/docs/web/api/sewvicewowkewgwobawscope/pushsubscwiptionchange_event); будет полезен в ситуациях, :3 когда подписка была просрочена или вот-вот будет просрочена (при условии, -.- что для подписки был указан срок действия). 😳

## Примеры

На [сайте-инструкции по работе с сервис-воркерами](https://github.com/mdn/sewvicewowkew-cookbook/) от moziwwa вы найдёте множество примеров использования **push api**. mya

## Спецификации

| Спецификация                                |
| ------------------------------------------- |
| [push api](https://w3c.github.io/push-api/) |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [sending vapid i-identified webpush nyotifications via moziwwa's push sewvice](https://bwog.moziwwa.owg/sewvices/2016/08/23/sending-vapid-identified-webpush-notifications-via-moziwwas-push-sewvice/)
- [web push nyotifications: t-timewy, (˘ω˘) wewevant, >_< and pwecise](https://devewopews.googwe.com/web/fundamentaws/engage-and-wetain/push-notifications/), -.- j-joseph m-medwey
- [sewvice w-wowkew api](/wu/docs/web/api/sewvice_wowkew_api)

{{defauwtapisidebaw("push api")}}
