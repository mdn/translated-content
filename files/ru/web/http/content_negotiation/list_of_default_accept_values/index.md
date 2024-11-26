---
title: Используемые по умолчанию значения заголовка Accept
slug: Web/HTTP/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: e843500803b73cbf179b84864cd9c159c7d4d81c
---

{{HTTPSidebar}}

В этой статье описывается, какие значения используются в HTTP-заголовке [`Accept`](/ru/docs/Web/HTTP/Headers/Accept) по умолчанию в зависимости от конкретного запроса и версии браузера.

## Значения по умолчанию

Здесь приведены значения, которые отправляются, когда нет никакой уточняющей информации. Обратите внимание, что все браузеры добавляют MIME-тип `*/*`, чтобы были охвачены все возможные варианты. Обычно значения имеют такой вид, когда запросы выполняются через адресную строку или с помощью HTML-элемента {{HTMLElement("a")}}.

| Агент пользователя         | Значение                                                                                                                            |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 128 and later [1]  | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                     |
| Firefox 92 to 127 [1]      | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                             |
| Firefox 72 to 91 [2]       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 66 to 71 [2]       | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Firefox 65 [2]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 64 and earlier [2] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Safari, Chrome             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                             |
| Safari 5 [3]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                  |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |

\[1] В качестве значения может быть установлена произвольная строка с помощью настройки `network.http.accept` (`about:config`).

\[2] В качестве значения может быть установлена произвольная строка с помощью настройки [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) (`about:config`).

\[3] Улучшение более ранних версий заголовков `Accept`, которое не располагает `image/png` выше `text/html`.

## Значения для изображений

При запросе изображения, например с помощью HTML-элемента {{HTMLElement("img")}}, агент пользователя часто указывает уточнённый список подходящих медиа-типов.

| Агент пользователя             | Значение                                                                   |
| ------------------------------ | -------------------------------------------------------------------------- |
| Firefox 128 and later [1]      | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`    |
| Firefox 92 to 127 [1]          | `image/avif,image/webp,*/*`                                                |
| Firefox 65 to 91 [1]           | `image/webp,*/*`                                                           |
| Firefox 47 to 63 [1]           | `*/*`                                                                      |
| Firefox prior to 47 [1]        | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (since Mac OS Big Sur)  | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (before Mac OS Big Sur) | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome and Edge 121 and later  | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] В качестве значения может быть установлена произвольная строка с помощью параметра `image.http.accept` (_[source](https://searchfox.org/mozilla-central/search?q=image.http.accept)_).

## Значения для видео

При запросе видео через HTML-элемент {{HTMLElement("video")}} большинство браузеров используют специфичные значения.

| Агент пользователя       | Значение                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Firefox 3.6 and later    | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox earlier than 3.6 | _no support for {{HTMLElement("video")}}_                                          |
| Chrome                   | `*/*`                                                                              |

## Значения для аудио

При запросе аудиофайла, например с помощью HTML-элемента {{HTMLElement("audio")}}, некоторые браузеры используют специфичные значения.

| Агент пользователя        | Значение                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 and later [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome            | `*/*`                                                                                        |

\[1] Смотрите [ошибку 489071](https://bugzil.la/489071).

## Значения для скриптов

При запросе скрипта, например с помощью HTML-элемента {{HTMLElement("script")}}, некоторые браузеры используют специфичные значения.

| Агент пользователя | Значение |
| ------------------ | -------- |
| Firefox [1]        | `*/*`    |
| Safari, Chrome     | `*/*`    |

\[1] Смотрите [ошибку 170789](https://bugzil.la/170789).

## Значения для таблиц стилей CSS

При запросе таблицы стилей CSS с помощью HTML-элемента `<link rel="stylesheet">` большинство браузеров используют специфичные значения.

| Агент пользователя | Значение                                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]      | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome     | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10        | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6      | `text/css,*/*;q=0.1`                                                                                                                |

\[1] Смотрите [ошибку 170789](https://bugzil.la/170789).
