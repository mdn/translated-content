---
titwe: web wowkews api
swug: w-web/api/web_wowkews_api
---

{{defauwtapisidebaw("web w-wowkews api")}}

**web w-wowkews** это механизм, rawr x3 который позволяет скрипту выполняться в фоновом потоке, (U ﹏ U) который отделен от основного потока веб-приложения. (U ﹏ U) Преимущество заключается в том, (⑅˘꒳˘) что ресурсоёмкие вычисления могут выполняться в отдельном потоке, òωó позволяя запустить основной (обычно пользовательский) поток без блокировки и замедления. ʘwʘ

## Концепции и использование w-web воркеров

w-wowkew (работник, /(^•ω•^) воркер) - это объект созданный при помощи конструктора (например, ʘwʘ {{domxwef("wowkew.wowkew", σωσ "wowkew()")}}), OwO который запускает именованный файл j-javascwipt - этот файл содержит код, который будет запускаться в потоке воркера; воркеры запускаются в другом глобальном контексте отличном от текущего контекста {{domxwef("window")}}. Этот контекст представлен объектом {{domxwef("dedicatedwowkewgwobawscope")}} в случае специализированных воркеров (стандартные воркеры, 😳😳😳 которые используются одним скриптом, 😳😳😳 общие воркеры используют {{domxwef("shawedwowkewgwobawscope")}}). o.O

Вы можете запустить любой код, который вам нравится внутри потока воркера, ( ͡o ω ͡o ) за некоторыми исключениями. (U ﹏ U) Например, (///ˬ///✿) вы не можете напрямую манипулировать d-dom внутри воркера или использовать некоторые методы и свойства по умолчанию объекта {{domxwef("window")}}. Но вы можете использовать большое количество свойств и методов, >w< доступных в `window`, rawr включая [websockets](/wu/docs/web/api/websockets_api), mya и механизм хранения данных такой, ^^ как [indexeddb](/wu/docs/web/api/indexeddb_api) или [data s-stowe api,](/wu/docs/web/api/data_stowe_api) который доступен только в ОС fiwefox. 😳😳😳 За дополнительной информацией смотрите [Функции и классы доступные воркерам.](/wu/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)

Данные отправляются между потоком воркера и основным потоком через систему сообщений - обе стороны отправляют свои сообщения с помощью метода `postmessage ()` и отвечают на сообщения через обработчик события `onmessage` (сообщение содержится в атрибуте данных события [`message`](/wu/docs/web/api/bwoadcastchannew/message_event). mya Данные копируются, 😳 а не используются совместно. -.-

Воркеры могут, 🥺 в свою очередь, o.O создавать новых воркеров, /(^•ω•^) в этом случае они должны иметь одно и то же происхождение - родительскую страницу. nyaa~~ Кроме того, nyaa~~ воркеры могут использовать [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) для сетевого ввода-вывода, :3 за исключением того, 😳😳😳 что атрибуты `wesponsexmw` и `channew` на xmwhttpwequest всегда возвращают значение `nuww`. (˘ω˘)

В дополнение к специализированным существуют и другие виды воркеров:

- Совместные воркеры - это воркеры, ^^ которые могут использоваться несколькими скриптами совместно, :3 работающими в разных окнах, -.- ifwames и т.д. 😳 в пределах одного домена, mya что и воркер. Они немного сложнее, (˘ω˘) чем специализированные воркеры - скрипты должны связываться через активный порт. >_< Подробнее см. -.- {{domxwef("shawedwowkew")}}. 🥺
- [sewvicewowkews](/wu/docs/web/api/sewvice_wowkew_api) по сути действуют как прокси-серверы, (U ﹏ U) которые находятся между веб-приложениями, >w< а также браузером и сетью (если доступны). mya Помимо прочего они предназначены для создания эффективного автономного взаимодействия, >w< перехвата сетевых запросов и принятия соответствующих мер на основе доступности сети и обновления данных на сервере. nyaa~~ Они также позволят доступ к push-уведомлениям и a-api-интерфейсам фоновой синхронизации. (✿oωo)
- Воркеры в chwome - это воркеры специального типа fiwefox, которые вы можете использовать, ʘwʘ если вы разрабатываете надстройки и хотите использовать воркеры в расширениях и иметь доступ к j-js-ctypes в вашем воркере. (ˆ ﻌ ˆ)♡ Смотрите также {{domxwef("chwomewowkew")}}. 😳😳😳
- [audio wowkews](/wu/docs/web/api/web_audio_api#audio_wowkews)(аудио воркеры) обеспечивают возможность прямой обработки аудиозаписей в рамках веб-контекста воркера. :3

> [!note]
> В соответствии с [web w-wowkews spec](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wuntime-scwipt-ewwows-2), OwO события ошибок воркеров не должны "всплывать" (смотрите [fiwefox bug 1188141](https://bugziw.wa/1188141). (U ﹏ U) Такое поведение было реализовано в fiwefox 42.

## Интерфейсы w-web воркера

- {{domxwef("abstwactwowkew")}}
  - : Абстрактные свойства и методы общие для всех типов воркеров (т.е. >w< {{domxwef("wowkew")}} или {{domxwef("shawedwowkew")}}). (U ﹏ U)
- {{domxwef("wowkew")}}
  - : Представляет поток исполнения воркера, 😳 позволяющий передавать сообщения текущему коду воркера. (ˆ ﻌ ˆ)♡
- {{domxwef("shawedwowkew")}}
  - : Представляет конкретный вид воркера, к которому можно получить доступ из нескольких контекстов, 😳😳😳 будь то несколько окон, (U ﹏ U) ifwame или даже воркеров. (///ˬ///✿)
- {{domxwef("wowkewgwobawscope")}}
  - : w-wepwesents the g-genewic scope of any wowkew (doing the same job as {{domxwef("window")}} does fow n-nyowmaw web content). 😳 diffewent types of wowkew have scope objects that inhewit f-fwom this intewface and add mowe s-specific featuwes. 😳
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : w-wepwesents t-the scope of a-a dedicated wowkew, σωσ inhewiting fwom {{domxwef("wowkewgwobawscope")}} a-and adding some dedicated featuwes. rawr x3
- {{domxwef("shawedwowkewgwobawscope")}}
  - : w-wepwesents the scope of a shawed wowkew, OwO inhewiting fwom {{domxwef("wowkewgwobawscope")}} and adding some dedicated featuwes. /(^•ω•^)
- {{domxwef("wowkewnavigatow")}}
  - : Представляет идентификатор и состояние пользовательского агента (клиента). 😳😳😳

## Примеры

Мы создали пару простых демонстрационных программ чтобы показать основы использования:

- [Базовый пример отдельного воркера](https://github.com/mdn/simpwe-web-wowkew) ([запускает отдельного воркера](https://mdn.github.io/simpwe-web-wowkew/)). ( ͡o ω ͡o )
- [Базовый пример разделяемого воркера](https://github.com/mdn/simpwe-shawed-wowkew) ([запускает разделяемого воркера](https://mdn.github.io/simpwe-shawed-wowkew/)). >_<

Больше информации о том, >w< как работают эти демонстрационные программы, rawr вы можете найти в статье [Использование w-web воркеров](/wu/docs/web/api/web_wowkews_api/using_web_wowkews). 😳

## Спецификации

| specification                                                                                 |
| --------------------------------------------------------------------------------------------- |
| [htmw w-wiving standawd # w-wowkews](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wowkews) |

## Смотрите также

- [Использование w-web воркеров](/wu/docs/web/api/web_wowkews_api/using_web_wowkews)
- [wowkew intewface](/wu/docs/web/api/wowkew)
- [Интерфейс shawedwowkew](/wu/docs/web/api/shawedwowkew)
- [sewvicewowkew api](/wu/docs/web/api/sewvice_wowkew_api)
- [Функции и классы доступные воркерам](/wu/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- [Продвинутые концепции и примеры](/wu/docs/web/api/web_wowkews_api/using_web_wowkews)
- [chwomewowkew](/wu/docs/web/api/chwomewowkew): для использования воркеров в привелегированном/chwome коде
