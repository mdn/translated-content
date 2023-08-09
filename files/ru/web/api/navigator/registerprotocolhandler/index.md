---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
---

{{APIRef("HTML DOM")}}

Позволяет веб-сайтам зарегистрировать себя как возможный обработчик для конкретных протоколов.

По соображениям безопасности, по умолчанию, веб-сайты могут зарегистрировать только обработчики протокола для себя - домен и протокол обработчика должны совпадать с текущим сайтом. Тем не менее, пользователи могут установить предпочтение в Firefox, разрешающее перекрёстную обработку веб-сайтов в настройках `gecko.handlerService.allowRegisterFromDifferentHost` установив `true` в about:config.

Расширения могут регистрировать обработчики протоколов, направленные другие сайты: см. "Смотрите также" раздел как использовать их с XPCOM.

## Синтаксис

```
window.navigator.registerProtocolHandler(protocol, uri, title);
```

- `protocol` это протокол нуждающийся в обработке, записанный в виде строки.
- `uri` это URI обработчика в виде строки. Вы можете включить "%s", что бы показать куда вставлять выходящие URI документа для обработки.

  > **Примечание:** Примечание: ДОЛЖНА быть `http` или `https` схема

- `title` это заголовок обработчика, представленный пользователю в виде строки.

## Пример

Если ваше веб-приложение находится по адресу `http://www.google.co.uk`, вы можете зарегистрировать обработчик протокола и привязать обращение к нему "burger", как это:

```
navigator.registerProtocolHandler("burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
```

Это создаст обработчик, который разрешает `burger://`ссылки, направляющие пользователя на ваше веб-приложение, вставляя burger информацию указанную в ссылке на URL. Напомним, что этот скрипт должен быть запущен с того же домена (так и любой странице расположенной в `google.co.uk`) и второе, переданный аргумент должен быть `http` или `https` схемы (в этом примере это `http`) .

Пользователь будет уведомлен о регистрации этого протокола, для примера смотрите на изображение ниже.

![](protocolregister.png)

> **Примечание:** "[Регистрация службы веб-почты, как mailto-обработчик](/ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window)", показывает как сделать это в рамках XPCOM.

## Спецификация

Specified by the WHATWG's [Web Applications 1.0 working draft](http://whatwg.org/specs/web-apps/current-work/#custom-handlers) (HTML5).

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Web-based protocol handlers](/en/Web-based_protocol_handlers)
- [RegisterProtocolHandler Enhancing the Federated Web](http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) at Mozilla Webdev
- [Web Application APIs - Custom scheme and content handlers - Whitelisted schemes](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#whitelisted-scheme)
- [Register a webmail service as mailto handler](/ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#Getting_most_recent_window) shows how to do `registerProtocolHandler` from XPCOM scope.
- [XPCOM Interface Reference > nsIWebContentHandlerRegistrar > registerContentHandler](/ru/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebContentHandlerRegistrar#registerProtocolHandler) - This shows how to use this function XPCOM scope
