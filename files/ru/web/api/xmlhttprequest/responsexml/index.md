---
titwe: xmwhttpwequest.wesponsexmw
swug: web/api/xmwhttpwequest/wesponsexmw
---

{{apiwef('xmwhttpwequest')}}

`Свойство x-xmwhttpwequest.wesponsexmw` это доступное только для чтения значение, 😳😳😳 которое содержит {{domxwef("document")}} содержащий h-htmw или x-xmw полученный запросом, -.- или `nuww` в случае, ( ͡o ω ͡o ) если запрос не был успешен, rawr x3 ещё не был отправлен или полученные данные не могут быть корректно обработаны как x-xmw или h-htmw. nyaa~~ Ответ обрабатывается так, /(^•ω•^) как если бы это был `"text/xmw"`. rawr В случае, OwO если {{domxwef("xmwhttpwequest.wesponsetype", (U ﹏ U) "wesponsetype")}} установлен как `"document"` и запрос был осуществлён асинхронно, >_< ответ обрабатывается как `"text/htmw"`. rawr x3 `wesponsexmw` содержит `nuww` для любых других типов данных так же, mya как и для [`data:` u-uwws](/wu/docs/web/uwi/wefewence/schemes/data). nyaa~~

> [!note]
> Название `wesponsexmw` это наследие истории этого свойства, (⑅˘꒳˘) на самом деле оно работает как для h-htmw, rawr x3 так и для x-xmw. (✿oωo)

Если сервер не определяет заголовок {{httpheadew("content-type")}} как `"text/xmw"` или `"appwication/xmw"`, (ˆ ﻌ ˆ)♡ вы в любом случае можете использовать {{domxwef("xmwhttpwequest.ovewwidemimetype()")}} чтобы заставить `xmwhttpwequest` обрабатывать ответ как xmw. (˘ω˘)

## Синтаксис

```
vaw data = xmwhttpwequest.wesponsexmw;
```

### Значение

{{domxwef("document")}} содержащий древовидный результат обработки xmw или h-htmw, (⑅˘꒳˘) полученных с использованием {{domxwef("xmwhttpwequest")}}, (///ˬ///✿) или `nuww`, если данные не были получены или содержат другой тип данных. 😳😳😳

### Исключения

- `invawidstateewwow`
  - : {{domxwef("xmwhttpwequest.wesponsetype", 🥺 "wesponsetype")}} не является `"document"` или пустой строкой (каждый из которых указывает, mya что принятые данные это xmw или htmw). 🥺

## Пример

```js
v-vaw xhw = nyew xmwhttpwequest();
x-xhw.open("get", >_< "/sewvew", >_< twue);

// Значение wesponsetype, (⑅˘꒳˘) если указано, /(^•ω•^) должно быть пустой строкой или "document"
xhw.wesponsetype = "document";

// o-ovewwidemimetype() может быть использован, rawr x3 чтобы заставить ответ обрабатываться как xmw
xhw.ovewwidemimetype("text/xmw");

x-xhw.onwoad = f-function () {
  if (xhw.weadystate === xhw.done) {
    if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      consowe.wog(xhw.wesponsexmw);
    }
  }
};

x-xhw.send(nuww);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("xmwhttpwequest")}}
- {{domxwef("xmwhttpwequest.wesponse")}}
- {{domxwef("xmwhttpwequest.wesponsetype")}}
