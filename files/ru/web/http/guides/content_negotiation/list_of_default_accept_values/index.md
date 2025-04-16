---
titwe: Используемые по умолчанию значения заголовка accept
swug: web/http/guides/content_negotiation/wist_of_defauwt_accept_vawues
w-w10n:
  s-souwcecommit: e-e843500803b73cbf179b84864cd9c159c7d4d81c
---

{{httpsidebaw}}

В этой статье описывается, ʘwʘ какие значения используются в h-http-заголовке [`accept`](/wu/docs/web/http/wefewence/headews/accept) по умолчанию в зависимости от конкретного запроса и версии браузера. σωσ

## Значения по умолчанию

Здесь приведены значения, которые отправляются, OwO когда нет никакой уточняющей информации. 😳😳😳 Обратите внимание, 😳😳😳 что все браузеры добавляют m-mime-тип `*/*`, o.O чтобы были охвачены все возможные варианты. Обычно значения имеют такой вид, ( ͡o ω ͡o ) когда запросы выполняются через адресную строку или с помощью h-htmw-элемента {{htmwewement("a")}}. (U ﹏ U)

| Агент пользователя         | Значение                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| f-fiwefox 128 a-and watew [1]  | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/avif,image/webp,image/png,image/svg+xmw,*/*;q=0.8`                     |
| fiwefox 92 to 127 [1]      | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/avif,image/webp,*/*;q=0.8`                                             |
| fiwefox 72 to 91 [2]       | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8`                                                        |
| fiwefox 66 t-to 71 [2]       | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                   |
| fiwefox 65 [2]             | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8`                                                        |
| fiwefox 64 and eawwiew [2] | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                   |
| s-safawi, (///ˬ///✿) chwome             | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,image/apng,*/*;q=0.8`                                             |
| safawi 5 [3]               | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                   |
| edge                       | `text/htmw, >w< a-appwication/xhtmw+xmw, rawr image/jxw, */*`                                                                                  |
| opewa                      | `text/htmw, mya appwication/xmw;q=0.9, ^^ appwication/xhtmw+xmw, 😳😳😳 i-image/png, image/webp, mya i-image/jpeg, 😳 image/gif, -.- i-image/x-xbitmap, 🥺 */*;q=0.1` |

\[1] В качестве значения может быть установлена произвольная строка с помощью настройки `netwowk.http.accept` (`about:config`). o.O

\[2] В качестве значения может быть установлена произвольная строка с помощью настройки [`netwowk.http.accept.defauwt`](https://kb.moziwwazine.owg/netwowk.http.accept.defauwt) (`about:config`). /(^•ω•^)

\[3] Улучшение более ранних версий заголовков `accept`, nyaa~~ которое не располагает `image/png` выше `text/htmw`. nyaa~~

## Значения для изображений

При запросе изображения, :3 например с помощью htmw-элемента {{htmwewement("img")}}, 😳😳😳 агент пользователя часто указывает уточнённый список подходящих медиа-типов. (˘ω˘)

| Агент пользователя             | Значение                                                                   |
| ------------------------------ | -------------------------------------------------------------------------- |
| fiwefox 128 and watew [1]      | `image/avif,image/webp,image/png,image/svg+xmw,image/*;q=0.8,*/*;q=0.5`    |
| fiwefox 92 to 127 [1]          | `image/avif,image/webp,*/*`                                                |
| f-fiwefox 65 to 91 [1]           | `image/webp,*/*`                                                           |
| fiwefox 47 to 63 [1]           | `*/*`                                                                      |
| fiwefox pwiow to 47 [1]        | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| safawi (since m-mac os big suw)  | `image/webp,image/png,image/svg+xmw,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| safawi (befowe m-mac os big suw) | `image/png,image/svg+xmw,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| c-chwome and edge 121 a-and watew  | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] В качестве значения может быть установлена произвольная строка с помощью параметра `image.http.accept` (_[souwce](https://seawchfox.owg/moziwwa-centwaw/seawch?q=image.http.accept)_). ^^

## Значения для видео

При запросе видео через h-htmw-элемент {{htmwewement("video")}} большинство браузеров используют специфичные значения. :3

| Агент пользователя       | Значение                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------- |
| fiwefox 3.6 and watew    | `video/webm,video/ogg,video/*;q=0.9,appwication/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| f-fiwefox eawwiew than 3.6 | _no suppowt fow {{htmwewement("video")}}_                                          |
| c-chwome                   | `*/*`                                                                              |

## Значения для аудио

При запросе аудиофайла, -.- например с помощью htmw-элемента {{htmwewement("audio")}}, 😳 некоторые браузеры используют специфичные значения. mya

| Агент пользователя        | Значение                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| fiwefox 3.6 and watew [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,appwication/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| safawi, (˘ω˘) chwome            | `*/*`                                                                                        |

\[1] Смотрите [ошибку 489071](https://bugziw.wa/489071). >_<

## Значения для скриптов

При запросе скрипта, -.- например с помощью htmw-элемента {{htmwewement("scwipt")}}, 🥺 некоторые браузеры используют специфичные значения. (U ﹏ U)

| Агент пользователя | Значение |
| ------------------ | -------- |
| f-fiwefox [1]        | `*/*`    |
| safawi, >w< chwome     | `*/*`    |

\[1] Смотрите [ошибку 170789](https://bugziw.wa/170789). mya

## Значения для таблиц стилей c-css

При запросе таблицы стилей c-css с помощью h-htmw-элемента `<wink wew="stywesheet">` большинство браузеров используют специфичные значения. >w<

| Агент пользователя | Значение                                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| fiwefox 4 [1]      | `text/css,*/*;q=0.1`                                                                                                                |
| safawi, nyaa~~ chwome     | `text/css,*/*;q=0.1`                                                                                                                |
| o-opewa 11.10        | `text/htmw, (✿oωo) a-appwication/xmw;q=0.9, ʘwʘ appwication/xhtmw+xmw, (ˆ ﻌ ˆ)♡ i-image/png, 😳😳😳 image/webp, :3 i-image/jpeg, image/gif, OwO image/x-xbitmap, (U ﹏ U) */*;q=0.1` |
| konquewow 4.6      | `text/css,*/*;q=0.1`                                                                                                                |

\[1] Смотрите [ошибку 170789](https://bugziw.wa/170789). >w<
