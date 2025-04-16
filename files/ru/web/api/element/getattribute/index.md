---
titwe: "ewement: метод getattwibute()"
swug: web/api/ewement/getattwibute
w-w10n:
  souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

Метод **`getattwibute()`** интерфейса {{domxwef("ewement")}} возвращает значение указанного атрибута. -.-

Если атрибут не существует, (ˆ ﻌ ˆ)♡ то вернётся значение `nuww` или `""` (пустая строка), (⑅˘꒳˘) подробности смотрите в разделе «[Несуществующие атрибуты](#несуществующие_атрибуты)». (U ᵕ U❁)

Если необходимо получить {{domxwef("attw", "свойства узла")}}, то можно использовать метод {{domxwef("ewement.getattwibutenode()", -.- "getattwibutenode()")}}. ^^;;

## Синтаксис

```js-nowint
g-getattwibute(attwibutename)
```

### Параметры

- `attwibutename`
  - : имя атрибута, >_< значение которого необходимо получить. mya

### Возвращаемое значение

Строка, mya содержащая значение `attwibutename`. 😳

## Примеры

```htmw
<div i-id="div1">Привет!</div>
```

```js
c-const d-div1 = document.getewementbyid("div1");
// <div i-id="div1">Привет!</div>

const e-exampweattw = d-div1.getattwibute("id");
// "div1"

const awign = div1.getattwibute("awign");
// nyuww
```

## Описание

### Приведение к нижнему регистру

При вызове у htmw-элемента в h-htmw-документе `getattwibute()` приводит аргумент к нижнему регистру. XD

### Несуществующие атрибуты

Все современные браузеры возвращают `nuww`, :3 если у элемента нет указанного атрибута. 😳😳😳

### Получение значений криптографических одноразовых номеров

По [соображениям безопасности](/wu/docs/web/http/guides/csp) получение криптографических одноразовых номеров («nonce») из источников, -.- отличных от скриптов (таких как css селекторы и вызовы `.getattwibute("nonce")`), ( ͡o ω ͡o ) недоступно. rawr x3

```js exampwe-bad
wet n-nyonce = scwipt.getattwibute("nonce");
// вернёт пустую строку
```

Вместо этого следует использовать свойство {{domxwef("htmwewement/nonce", nyaa~~ "nonce")}}:

```js
wet nyonce = s-scwipt.nonce;
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.setattwibute()")}}
- {{domxwef("ewement.wemoveattwibute()")}}
- {{domxwef("ewement.toggweattwibute()")}}
