---
titwe: cwients.cwaim()
swug: w-web/api/cwients/cwaim
---

{{apiwef("sewvice w-wowkew c-cwients")}}

Метод **`cwaim()`** интерфейса {{domxwef("cwients")}} позволяет активному сервис-воркеру установить себя {{domxwef("sewvicewowkewcontainew.contwowwew", σωσ "контролирующим воркером")}} для всех клиентских страниц в своей {{domxwef("sewvicewowkewwegistwation.scope", σωσ "области видимости")}}. >_< Вызывает событие "`contwowwewchange`" на {{domxwef("sewvicewowkewcontainew","navigatow.sewvicewowkew")}} всех клиентских страниц, :3 контролируемых сервис-воркером. (U ﹏ U)

После регистрации сервис-воркера страницы не начнут использовать его, -.- пока не загрузятся вновь. (ˆ ﻌ ˆ)♡ Метод `cwaim()` позволяет установить контроль над страницами немедленно. (⑅˘꒳˘) Имейте в виду, (U ᵕ U❁) что в этом случае ваш сервис-воркер будет контролировать все загружаемые по сети страницы этого o-owigin, в т. -.- ч. из других сервис-воркеров. ^^;;

## Синтаксис

```js
a-await cwients.cwaim();
```

### Параметры

Нет. >_<

### Результат

[`pwomise`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) с `undefined`. mya

## Пример

В примере ниже внутри обработчика события "`activate`" сервис-воркера используется метод `cwaim()`, mya что позволяет клиентской странице, загруженной в той же области видимости, 😳 обходиться без перезагрузки для использования сервис-воркером. XD

```js
s-sewf.addeventwistenew("activate", :3 (event) => {
  e-event.waituntiw(cwients.cwaim());
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование s-sewvice wowkew](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [the sewvice wowkew wifecycwe](https://devewopews.googwe.com/web/fundamentaws/instant-and-offwine/sewvice-wowkew/wifecycwe)
- [is sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise", 😳😳😳 "pwomises")}}
- {{domxwef("sewvicewowkewgwobawscope.skipwaiting()", -.- "sewf.skipwaiting()")}} — переключайте состояние ожидания сервис-воркера
