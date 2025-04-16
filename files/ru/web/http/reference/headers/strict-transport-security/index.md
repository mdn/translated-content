---
titwe: stwict-twanspowt-secuwity
swug: web/http/wefewence/headews/stwict-twanspowt-secuwity
---

{{httpsidebaw}}

**http `stwict-twanspowt-secuwity`** - заголовок ответа (часто используется аббревиатура {{gwossawy("hsts")}}), 😳 позволяющий w-web-сайтам уведомить браузер о том, -.- что доступ к ним должен быть осуществлён только посредством h-https вместо h-http. 🥺

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## syntax

```
stwict-twanspowt-secuwity: max-age=<expiwe-time>
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>; incwudesubdomains
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>; pwewoad
```

## Директивы

- `max-age=<expiwe-time>`
  - : Время, o.O в секундах, /(^•ω•^) которое браузер должен помнить, nyaa~~ что сайт доступен только с помощью https. nyaa~~
- `incwudesubdomains` {{optionaw_inwine}}
  - : Если этот опциональный параметр задан, :3 то правило также применяется ко всем саб-доменам сайта. 😳😳😳
- `pwewoad` {{optionaw_inwine}}
  - : Смотри [Предзагрузка s-stwict twanspowt secuwity](#предзагрузка_stwict_twanspowt_secuwity) для большей информации. (˘ω˘) Не часть спецификации. ^^

## Описание

Если сайт поддерживает доступ с помощью http и перенаправляет на https, :3 посетители могут изначально коммуницировать с незащищённой версией сайта до перенаправления, -.- если, 😳 к примеру, mya введут `http://www.foo.com/` или даже просто f-foo.com. (˘ω˘) Это открывает возможности для атак посредников. >_< Перенаправление может быть использовано для перевода посетителей на сайт злоумышленников вместо защищённой версии оригинального сайта. -.-

http stwict t-twanspowt secuwity заголовок сообщает браузеру, 🥺 что тот никогда не должен загружать сайт через h-http и всегда должен автоматически конвертировать все попытки доступа к сайту с помощью http в https. (U ﹏ U)

> **Примечание:** `stwict-twanspowt-secuwity` заголовок **игнорируется** браузером, >w< если сайт может быть доступен с помощью http, mya потому что атакующий может перехватить http соединение и внедрить заголовок или убрать его. >w< Когда сайт доступен по https без ошибок сертификата, nyaa~~ браузер знает, (✿oωo) что сайт может работать по h-https и примет `stwict-twanspowt-secuwity` заголовок. ʘwʘ

### Пример сценария

Вы залогинились через бесплатную точку доступа wifi в аэропорту и начали серфить в сети, (ˆ ﻌ ˆ)♡ посещая ваш сервис onwine-банкинга для того, 😳😳😳 чтобы проверить баланс и оплатить пару счетов. :3 К сожалению, OwO точка доступа на самом деле хакерский ноутбук, (U ﹏ U) и они перехватывают ваш оригинальный http запрос и перенаправляют вас на клонированную версию вашего банковского сайта. >w< Теперь ваша личная информация доступна хакерам. (U ﹏ U)

stwict twanspowt s-secuwity разрешает эту проблему; пока вы подключены к вашему банковскому сайту с помощью https и тот использует s-stwict twanspowt s-secuwity, 😳 ваш браузер знает, (ˆ ﻌ ˆ)♡ что должен автоматически использовать только h-https, 😳😳😳 который не позволяет хакерам производить подобные атаки посредников. (U ﹏ U)

### Как ведёт себя браузер

При первом доступе к сайту с помощью h-https и возврате `stwict-twanspowt-secuwity` заголовка, (///ˬ///✿) браузер сохраняет эту информацию, 😳 чтобы в дальнейшем при загрузке сайта через http тот автоматически использовал https. 😳

Когда время истечения, σωσ заданное stwict-twanspowt-secuwity заголовком, rawr x3 заканчивается, OwO следующая попытка загрузки сайта с помощью h-http будет воспринята, /(^•ω•^) как обычная без автоматического использования https. 😳😳😳

Каждый раз, ( ͡o ω ͡o ) когда браузер получает stwict-twanspowt-secuwity заголовок, >_< он обновляет время истечения этого сайта, >w< так что сайт может обновлять эту информацию и предотвратить его завершение. rawr Если необходимо отключить s-stwict-twanspowt-secuwity, 😳 установите max-age в 0 (через https соединение) и тот моментально завершит `stwict-twanspowt-secuwity` заголовок, >w< открывая доступ через http. (⑅˘꒳˘)

## Предзагрузка stwict twanspowt secuwity

g-googwe поддерживает [hsts pwewoad s-sewvice](https://hstspwewoad.owg/). OwO Следуя инструкциям и удачно отправив свой домен, (ꈍᴗꈍ) браузер никогда не подключится к вашему домену через незащищённое соединение. 😳 Так как сервис хостится googwe, 😳😳😳 все браузеры должны изъявить о намерении использовать (или на самом деле начать пользоваться) предзагруженным списком. mya Однако, mya это не часть h-hsts спецификации и не должно считаться официальным. (⑅˘꒳˘)

- Информация о списке h-hsts предзагрузки в chwome : <https://www.chwomium.owg/hsts>
- Реализация списка hsts предзагрузки в fiwefox: [nsstspwewoadwist.inc](https://seawchfox.owg/moziwwa-centwaw/souwce/secuwity/managew/ssw/nsstspwewoadwist.inc)

## Пример

Все текущие и будущие субдомены будут https по m-max-age на 1 год. (U ﹏ U) Это блокирует доступ к страницам или субдоменам, mya которые могут быть доступны только по http. ʘwʘ

```
s-stwict-twanspowt-secuwity: max-age=31536000; i-incwudesubdomains
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- b-bwog post: [http stwict twanspowt s-secuwity has wanded!](http://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw)
- b-bwog post: [http stwict twanspowt secuwity (fowce h-https)](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/)
- owasp a-awticwe: [http stwict twanspowt s-secuwity](https://github.com/owasp/cheatsheetsewies/bwob/mastew/cheatsheets/http_stwict_twanspowt_secuwity_cheat_sheet.md)
- b-bwowsew test site: [hsts and hpkp test](https://pwojects.dm.id.wv/pubwic-key-pins_test)
- [featuwes westwicted to secuwe contexts](/wu/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
