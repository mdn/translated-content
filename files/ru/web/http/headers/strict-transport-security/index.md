---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
---

{{HTTPSidebar}}

**HTTP `Strict-Transport-Security`** - заголовок ответа (часто используется аббревиатура {{Glossary("HSTS")}}), позволяющий web-сайтам уведомить браузер о том, что доступ к ним должен быть осуществлён только посредством HTTPS вместо HTTP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## Директивы

- `max-age=<expire-time>`
  - : Время, в секундах, которое браузер должен помнить, что сайт доступен только с помощью HTTPS.
- `includeSubDomains` {{optional_inline}}
  - : Если этот опциональный параметр задан, то правило также применяется ко всем саб-доменам сайта.
- `preload` {{optional_inline}}
  - : Смотри [Предзагрузка Strict Transport Security](#предзагрузка_strict_transport_security) для большей информации. Не часть спецификации.

## Описание

Если сайт поддерживает доступ с помощью HTTP и перенаправляет на HTTPS, посетители могут изначально коммуницировать с незащищённой версией сайта до перенаправления, если, к примеру, введут `http://www.foo.com/` или даже просто foo.com. Это открывает возможности для атак посредников. Перенаправление может быть использовано для перевода посетителей на сайт злоумышленников вместо защищённой версии оригинального сайта.

HTTP Strict Transport Security заголовок сообщает браузеру, что тот никогда не должен загружать сайт через HTTP и всегда должен автоматически конвертировать все попытки доступа к сайту с помощью HTTP в HTTPS.

> **Примечание:** `Strict-Transport-Security` заголовок **игнорируется** браузером, если сайт может быть доступен с помощью HTTP, потому что атакующий может перехватить HTTP соединение и внедрить заголовок или убрать его. Когда сайт доступен по HTTPS без ошибок сертификата, браузер знает, что сайт может работать по HTTPS и примет `Strict-Transport-Security` заголовок.

### Пример сценария

Вы залогинились через бесплатную точку доступа WiFi в аэропорту и начали серфить в сети, посещая ваш сервис online-банкинга для того, чтобы проверить баланс и оплатить пару счетов. К сожалению, точка доступа на самом деле хакерский ноутбук, и они перехватывают ваш оригинальный HTTP запрос и перенаправляют вас на клонированную версию вашего банковского сайта. Теперь ваша личная информация доступна хакерам.

Strict Transport Security разрешает эту проблему; пока вы подключены к вашему банковскому сайту с помощью HTTPS и тот использует Strict Transport Security, ваш браузер знает, что должен автоматически использовать только HTTPS, который не позволяет хакерам производить подобные атаки посредников.

### Как ведёт себя браузер

При первом доступе к сайту с помощью HTTPS и возврате `Strict-Transport-Security` заголовка, браузер сохраняет эту информацию, чтобы в дальнейшем при загрузке сайта через HTTP тот автоматически использовал HTTPS.

Когда время истечения, заданное Strict-Transport-Security заголовком, заканчивается, следующая попытка загрузки сайта с помощью HTTP будет воспринята, как обычная без автоматического использования HTTPS.

Каждый раз, когда браузер получает Strict-Transport-Security заголовок, он обновляет время истечения этого сайта, так что сайт может обновлять эту информацию и предотвратить его завершение. Если необходимо отключить Strict-Transport-Security, установите max-age в 0 (через https соединение) и тот моментально завершит `Strict-Transport-Security` заголовок, открывая доступ через http.

## Предзагрузка Strict Transport Security

Google поддерживает [HSTS preload service](https://hstspreload.org/). Следуя инструкциям и удачно отправив свой домен, браузер никогда не подключится к вашему домену через незащищённое соединение. Так как сервис хостится Google, все браузеры должны изъявить о намерении использовать (или на самом деле начать пользоваться) предзагруженным списком. Однако, это не часть HSTS спецификации и не должно считаться официальным.

- Информация о списке HSTS предзагрузки в Chrome : <https://www.chromium.org/hsts>
- Консультация о списке HSTS предзагрузки от Firefox: [nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## Пример

Все текущие и будущие субдомены будут HTTPS по max-age на 1 год. Это блокирует доступ к страницам или субдоменам, которые могут быть доступны только по HTTP.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Specifications

| Specification        | Status            | Comment            |
| -------------------- | ----------------- | ------------------ |
| {{SpecName('HSTS')}} | {{Spec2('HSTS')}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- Blog post: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog post: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Article: [HTTP Strict Transport Security](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.md)
- Browser test site: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
- [Features restricted to secure contexts](/ru/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
