---
title: "Navigator: свойство cookieEnabled"
slug: Web/API/Navigator/cookieEnabled
l10n:
  sourceCommit: 6acc0b4325c55fd77dc578c5bd7fde008cf26310
---

{{APIRef("HTML DOM")}}

Доступное только для чтения свойство `navigator.cookieEnabled` возвращает логическое значение, указывающее, доступна ли возможность использовать файлы cookie или нет.

## Значение

Логическое значение.

> [!NOTE]
> Когда в браузере включена блокировка [сторонних файлов cookie](/ru/docs/Web/Privacy/Third-party_cookies) и `navigator.cookieEnabled` вызывается внутри стороннего `<iframe>`, оно вернёт `true` в Safari и IE (хотя попытка установить файл cookie не удастся). В Firefox и браузерах, основанных на Chromium, вернёт `false`.

> [!NOTE]
> Веб-браузеры могут блокировать установку определенных файлов cookie в некоторых случаях. Например, браузеры на базе Chrome, а также некоторые экспериментальные версии Firefox не позволяют создавать файлы cookie с атрибутом [`SameSite=None`](/ru/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value), если они не создаются по протоколу HTTPS и с атрибутом `Secure`.

## Пример

```js
if (!navigator.cookieEnabled) {
  // браузер не поддерживает или блокирует установку файлов cookie
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
