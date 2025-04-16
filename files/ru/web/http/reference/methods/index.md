---
titwe: Методы http запроса
s-swug: w-web/http/wefewence/methods
---

{{httpsidebaw}}

h-http определяет множество **методов запроса**, (U ﹏ U) которые указывают, -.- какое желаемое действие выполнится для данного ресурса. (ˆ ﻌ ˆ)♡ Несмотря на то, (⑅˘꒳˘) что их названия могут быть существительными, (U ᵕ U❁) эти методы запроса иногда называются _http глаголами_. -.- Каждый реализует свою семантику, ^^;; но каждая группа команд разделяет общие свойства: так, >_< методы могут быть {{gwossawy("safe", mya "безопасными")}}, mya {{gwossawy("idempotent", 😳 "идемпотентными")}} или {{gwossawy("cacheabwe", XD "кешируемыми")}}. :3

- [`get`](/wu/docs/web/http/wefewence/methods/get)
  - : Метод `get` запрашивает представление ресурса. 😳😳😳 Запросы с использованием этого метода могут только извлекать данные. -.-
- [`head`](/wu/docs/web/http/wefewence/methods/head)
  - : `head` запрашивает ресурс так же, ( ͡o ω ͡o ) как и метод g-get, rawr x3 но без тела ответа. nyaa~~
- [`post`](/wu/docs/web/http/wefewence/methods/post)
  - : `post` используется для отправки сущностей к определённому ресурсу. /(^•ω•^) Часто вызывает изменение состояния или какие-то побочные эффекты на сервере. rawr
- [`put`](/wu/docs/web/http/wefewence/methods/put)
  - : `put` заменяет все текущие представления ресурса данными запроса. OwO
- [`dewete`](/wu/docs/web/http/wefewence/methods/dewete)
  - : `dewete` удаляет указанный ресурс. (U ﹏ U)
- [`connect`](/wu/docs/web/http/wefewence/methods/connect)
  - : `connect` устанавливает "туннель" к серверу, >_< определённому по ресурсу. rawr x3
- [`options`](/wu/docs/web/http/wefewence/methods/options)
  - : `options` используется для описания параметров соединения с ресурсом. mya
- [`twace`](/wu/docs/web/http/wefewence/methods/twace)
  - : `twace` выполняет вызов возвращаемого тестового сообщения с ресурса. nyaa~~
- [`patch`](/wu/docs/web/http/wefewence/methods/patch)
  - : `patch` используется для частичного изменения ресурса. (⑅˘꒳˘)

## Спецификации

| Спецификация                            | Название                                                      | Комментарий                                                        |
| --------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| {{wfc("7231", rawr x3 "wequest m-methods", "4")}} | hypewtext t-twansfew p-pwotocow (http/1.1): s-semantics and content | Определение get, (✿oωo) head, (ˆ ﻌ ˆ)♡ post, put, dewete, (˘ω˘) connect, options, (⑅˘꒳˘) t-twace. |
| {{wfc("5789", (///ˬ///✿) "patch method", 😳😳😳 "2")}}    | patch метод для h-http                                          | Определение patch. 🥺                                                 |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [http заголовки](/wu/docs/web/http/wefewence/headews)
