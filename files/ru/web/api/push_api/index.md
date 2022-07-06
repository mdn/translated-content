---
title: Push API
slug: Web/API/Push_API
tags:
  - API
  - Push
  - Landing
  - Сервис-воркеры
  - Экспериментальная технология
  - Уведомления
  - Определение
---
{{ApiRef("Push API")}}

**Push API** предоставляет веб-приложениям возможность принимать сообщения с сервера независимо от того, запущено веб-приложение прямо сейчас или нет. Что в свою очередь позволяет разработчикам оперативно уведомлять пользователей, которые разрешили присылать себе уведомления о новом контенте.

## Об использовании Push API

> **Обратите внимание:** При использовании PushManager-подписок жизненно важно защищать запросы от CSRF/XSRF-атак в вашем приложении. Подробнее читайте по ссылкам:
>
> - [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [Preventing CSRF and XSRF Attacks](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

Для получения сообщений от сервера у приложения должен быть активированный [сервис-воркер](/ru/docs/Web/API/Service_Worker_API). После активации у сервис-воркера появится возможность подписаться на канал для получения сообщений, используя {{domxref("PushManager.subscribe()")}}.

В результате подписки будет получен объект {{domxref("PushSubscription")}} со всей необходимой информацией, которая может потребоваться приложению для обращения за сообщениями на сервер: URL-адрес и ключ шифрования.

После подписки сервис-воркеру можно добавить обработчик {{domxref("ServiceWorkerGlobalScope.onpush")}} для получения сообщений от сервера. В качестве реакции на сообщение можно, например, обращаться к серверу за данными и показывать пользователю уведомление с помощью метода {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Для сервис-воркера каждая подписка уникальна, а её URL-адрес — уникальная [специальная ссылка](https://www.w3.org/TR/capability-urls/). Поскольку это всё, что нужно для обращения к серверу, данную ссылку нужно держать в секрете, иначе любое другое приложение сможет воспользоваться вашим сервером.

Для получения push-сообщений сервис-воркеру требуются ресурсы, что может влиять, например, на расход батареи. Во всех браузерах эти проблемы решаются по-разному, какого-то единого стандарта на этот счёт нет. Например, браузер Firefox ограничивает количество сообщений, которое можно отправить приложению, однако сообщения с показом уведомления в этот лимит не попадают. В Chrome таких ограничений нет.

## Интерфейсы

- {{domxref("PushEvent")}}
  - : Описывает действие, направленное в [глобальную область видимости](/en-US/docs/Web/API/ServiceWorkerGlobalScope) {{domxref("ServiceWorker", "сервис-воркера")}}. Включает информацию, переданную сервером {{domxref("PushSubscription", "подписчикам")}}.
- {{domxref("PushManager")}}
  - : Предоставляет возможность подписаться на сообщения от сторонних серверов и получить URL-адрес для отправки push-уведомлений.
- {{domxref("PushMessageData")}}
  - : Содержит данные, отправленные сервером, и методы для управления ими.
- {{domxref("PushSubscription")}}
  - : Предоставляет возможность получить URL-адрес подписки, а также содержит метод для отписки.
- {{domxref("PushSubscriptionOptions")}}
  - : Описывает параметры конкретной подписки.

## Методы сервис-воркера для работы c Push API

Спецификация Push API расширяет [возможности сервис-воркеров](/ru/docs/Web/API/Service_Worker_API) для работы с push-сообщениями: позволяет отслеживать и реагировать на такие сообщения, а также следить за изменениями в подписках.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Позволяет обратиться к интерфейсу по управлению подписками {{domxref("PushManager")}}, в том числе для добавления подписки, получения информации о текущей подписке, а также позволяет узнать о возможности отправки сообщений. Работа с push-сообщениями начинается с этого свойства сервис-воркера.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : Обработчик событий, срабатывает всякий раз, когда происходит событие {{Event("push")}}; то есть при получении push-сообщений от сервера.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : Обработчик событий, срабатывает всякий раз, когда происходит событие {{Event("pushsubscriptionchange")}}; будет полезен в ситуациях, когда подписка была просрочена или вот-вот будет просрочена (при условии, что для подписки был указан срок действия).

## Примеры

На [сайте-инструкции по работе с сервис-воркерами](https://serviceworke.rs/) от Mozilla вы найдёте множество примеров использования **Push API**.

## Спецификации

| Спецификация                                |
| ------------------------------------------- |
| [Push API](https://w3c.github.io/push-api/) |

## Поддержка браузерами

### `PushEvent`

{{Compat("api.PushEvent")}}

### `PushMessageData`

{{Compat("api.PushMessageData")}}

## Смотрите также

- [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/), Joseph Medley
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)

{{DefaultAPISidebar("Push API")}}
