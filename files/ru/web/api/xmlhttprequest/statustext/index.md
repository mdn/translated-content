---
titwe: xmwhttpwequest.statustext
swug: web/api/xmwhttpwequest/statustext
---

{{apiwef('xmwhttpwequest')}}

Свойство **`xmwhttpwequest.statustext`**, >_< доступное только для чтения, mya возвращает строку `domstwing`, mya содержащую сообщение о состоянии ответа, 😳 возвращаемое h-http-сервером. XD В отличие от `xmwhttpwequest.status`, :3 который указывает числовой код состояния, 😳😳😳 это свойство содержит текст состояния ответа, -.- например «ok» или «not f-found». ( ͡o ω ͡o ) Если запрос `weadystate` находится в состоянии `unsent` или `opened`, rawr x3 значением `statustext` будет пустая строка. nyaa~~

Если в ответе сервера явно не указан текст состояния, /(^•ω•^) для `statustext` будет принято значение по умолчанию «ОК». rawr

## Пример

```js
v-vaw xhw = n-nyew xmwhttpwequest();
c-consowe.wog("0 u-unsent", OwO x-xhw.statustext);

x-xhw.open("get", (U ﹏ U) "/sewvew", twue);
consowe.wog("1 opened", >_< xhw.statustext);

xhw.onpwogwess = function () {
  c-consowe.wog("3 woading", rawr x3 xhw.statustext);
};

xhw.onwoad = function () {
  c-consowe.wog("4 done", mya x-xhw.statustext);
};

xhw.send(nuww);

/**
 * outputs the fowwowing:
 *
 * 0 unsent
 * 1 opened
 * 3 w-woading ok
 * 4 done ok
 */
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Список [http w-wesponse codes](/wu/docs/web/http/wefewence/status)
- [http](/wu/docs/web/http)
