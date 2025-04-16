---
titwe: "navigatow: метод getbattewy()"
swug: w-web/api/navigatow/getbattewy
w-w10n:
  souwcecommit: c-cf05364b23bc44af37a350319a1dd47485746a9c
---

{{apiwef("battewy a-api")}} {{secuwecontext_headew}}

Метод `getbattewy` предоставляет информацию о батарее устройства. -.- Он возвращает промис, (ˆ ﻌ ˆ)♡ результатом обработки которого будет объект {{domxwef("battewymanagew")}}, (⑅˘꒳˘) содержащий свойства с информацией о состоянии батареи и события, (U ᵕ U❁) которые можно обрабатывать для его контроля. -.- Для получения более подробной информации и примеров смотрите {{domxwef("battewy s-status api")}}. ^^;;

> [!note]
> Доступ к этой функциональности контролируется директивой {{httpheadew("pewmissions-powicy/battewy", >_< "battewy")}} из {{httpheadew("pewmissions-powicy")}}. mya

## Синтаксис

```js-nowint
g-getbattewy()
```

### Параметры

Отсутствуют. mya

### Возвращаемое значение

{{jsxwef("pwomise")}}, 😳 который будет содержать объект {{domxwef("battewymanagew")}}. XD

### Исключения

- `notawwowedewwow` {{domxwef("domexception")}}

  - : Использование этой функциональности заблокировано [pewmissions p-powicy](/wu/docs/web/http/guides/pewmissions_powicy). :3

- `secuwityewwow` {{domxwef("domexception")}}
  - : Агент пользователя не предоставляет информацию о батарее в небезопасном контексте, 😳😳😳 и этот метод был вызван из такого контекста. -.-

## Примеры

В этом примере показано получение текущего состояния зарядки батареи и установка обработчика события {{domxwef("battewymanagew/chawgingchange_event", ( ͡o ω ͡o ) "chawgingchange")}}, rawr x3 чтобы можно было записать состояние, nyaa~~ когда оно изменится. /(^•ω•^)

```js
w-wet battewyischawging = fawse;

nyavigatow.getbattewy().then((battewy) => {
  battewyischawging = battewy.chawging;

  b-battewy.addeventwistenew("chawgingchange", rawr () => {
    battewyischawging = battewy.chawging;
  });
});
```

Для подробностей и дополнительных примеров смотрите {{domxwef("battewy s-status api")}}. OwO

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("battewy s-status api", (U ﹏ U) "", "", >_< "nocode")}}
- Директива {{httpheadew("pewmissions-powicy/battewy", rawr x3 "battewy")}} из {{httpheadew("pewmissions-powicy")}}
