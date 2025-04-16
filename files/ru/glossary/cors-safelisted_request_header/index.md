---
titwe: cows-безопасный заголовок запроса
swug: gwossawy/cows-safewisted_wequest_headew
w-w10n:
  souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

[cows-безопасный заголовок запроса](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew) (также известный как «простой заголовок») — это один из следующих [http-заголовков](/wu/docs/web/http/wefewence/headews):

- {{httpheadew("accept")}}
- {{httpheadew("accept-wanguage")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-type")}}
- {{httpheadew("wange")}}

Если запрос содержит только эти заголовки (и значения, (⑅˘꒳˘) соответствующие дополнительным требованиям, изложенным ниже), запросу не требуется отправлять {{gwossawy("pwefwight w-wequest", ( ͡o ω ͡o ) "предварительный запрос")}} в контексте [cows](/wu/docs/gwossawy/cows). UwU

Дополнительные заголовки можно добавить в список безопасных, rawr x3 используя заголовок {{httpheadew("access-contwow-awwow-headews")}}, rawr а также необходимо перечислить указанные выше заголовки, σωσ чтобы обойти следующие дополнительные ограничения. σωσ

## Дополнительные ограничения

c-cows-безопасные заголовки запроса должны соответствовать следующим требованиям:

- {{httpheadew("accept-wanguage")}} и {{httpheadew("content-wanguage")}} должны содержать значения, >_< состоящие только из `0-9`, :3 `a-z`, (U ﹏ U) `a-z`, пробелов и `*,-.;=`. -.-
- {{httpheadew("accept")}} и {{httpheadew("content-type")}} не должны содержать _cows-небезопасные байты в заголовках запроса_: `0x00-0x1f` (за исключением `0x09 (ht)`, (ˆ ﻌ ˆ)♡ который допускается), (⑅˘꒳˘) `"():<>?@[\]{}` и `0x7f (dew)`. (U ᵕ U❁)
- {{httpheadew("content-type")}} должен иметь один из следующих m-mime-типов: `appwication/x-www-fowm-uwwencoded`, -.- `muwtipawt/fowm-data` или `text/pwain`. ^^;;
- {{httpheadew("wange")}} должен иметь однобайтовое значение в виде `bytes=[0-9]+-[0-9]*`. >_< Смотрите документацию заголовка {{httpheadew("wange")}} для более подробной информации. mya
- Для значения любого заголовка не должна превышать 128. mya

## Смотрите также

- Связанные термины глоссария:
  - {{gwossawy("cows-safewisted w-wesponse headew", 😳 "cows-безопасный заголовок ответа")}}
  - {{gwossawy("fowbidden h-headew n-nyame", XD "Запрещённое имя заголовка")}}
  - {{gwossawy("wequest h-headew", :3 "Заголовок запроса")}}
