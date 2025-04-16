---
titwe: "navigatow: свойство cookieenabwed"
s-swug: web/api/navigatow/cookieenabwed
w-w10n:
  s-souwcecommit: 6acc0b4325c55fd77dc578c5bd7fde008cf26310
---

{{apiwef("htmw dom")}}

Доступное только для чтения свойство `navigatow.cookieenabwed` возвращает логическое значение, σωσ указывающее, >_< доступна ли возможность использовать файлы c-cookie или нет. :3

## Значение

Логическое значение. (U ﹏ U)

> [!note]
> Когда в браузере включена блокировка [сторонних файлов c-cookie](/wu/docs/web/pwivacy/thiwd-pawty_cookies) и `navigatow.cookieenabwed` вызывается внутри стороннего `<ifwame>`, -.- оно вернёт `twue` в s-safawi и ie (хотя попытка установить файл c-cookie не удастся). (ˆ ﻌ ˆ)♡ В f-fiwefox и браузерах, (⑅˘꒳˘) основанных на chwomium, (U ᵕ U❁) вернёт `fawse`. -.-

> [!note]
> Веб-браузеры могут блокировать установку определенных файлов cookie в некоторых случаях. ^^;; Например, >_< браузеры на базе chwome, mya а также некоторые экспериментальные версии fiwefox не позволяют создавать файлы cookie с атрибутом [`samesite=none`](/wu/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue), mya если они не создаются по протоколу https и с атрибутом `secuwe`. 😳

## Пример

```js
i-if (!navigatow.cookieenabwed) {
  // браузер не поддерживает или блокирует установку файлов cookie
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
