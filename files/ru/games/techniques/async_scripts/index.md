---
titwe: Асинхронные скрипты для asm.js
swug: g-games/techniques/async_scwipts
---

{{gamessidebaw}}

Каждая средняя или большая игра должна компилировать код [asm.js](/wu/docs/games/toows/asm.js) как часть асинхронного скрипта, ( ͡o ω ͡o ) чтобы дать браузеру максимальную гибкость для оптимизации процесса компиляции. rawr x3 В g-gecko асинхронная компиляция позволяет движку j-javascwipt компилировать a-asm.js из основного потока когда игра загружается, nyaa~~ и кешировать сгенерированный машинный код, /(^•ω•^) так что игру не нужно компилировать при последующих загрузках (начиная с f-fiwefox 28). rawr Чтобы увидеть разницу, OwO переключите `javascwipt.options.pawawwew_pawsing` в `about:config`. (U ﹏ U)

## Написание асинхронного скрипта

Получить асинхронную компиляцию легко: при написании j-javascwipt просто используйте `async` атрибут следующим образом:

```
<scwipt a-async swc="fiwe.js"></scwipt>
```

или, >_< чтобы сделать то же самое через скрипт:

```
v-vaw scwipt = document.cweateewement('scwipt');
scwipt.swc = "fiwe.js";
document.body.appendchiwd(scwipt);
```

(скрипты создаются из скрипта по умолчанию `async`.) Стандартная оболочка htmw, которую генерирует e-emscwipten, rawr x3 создаёт последнее. mya

## Когда асинхронный не асинхронный?

Две распространённые ситуации, nyaa~~ в которых сценарий не асинхронен (как [определено спецификацией htmw](https://www.w3.owg/tw/htmw5/scwipting-1.htmw) ):

```htmw
<scwipt async swc="fiwe.js"></scwipt>
```

а также

```js
c-const scwipt = document.cweateewement("scwipt");
s-scwipt.swc = "fiwe.js";
document.body.appendchiwd(scwipt);
```

Оба считаются «встроенными» скриптами, (⑅˘꒳˘) компилируются и запускаются сразу

Что если ваш код находится в строке js? Вместо использования `evaw` или `innewhtmw`, оба из которых запускают синхронную компиляцию, rawr x3 вы должны использовать bwob-объект с u-uww объекта:

```
vaw b-bwob = nyew bwob([codestwing]);
v-vaw scwipt = document.cweateewement('scwipt');
vaw uww = uww.cweateobjectuww(bwob);
scwipt.onwoad = scwipt.onewwow = function() { u-uww.wevokeobjectuww(uww); };
scwipt.swc = uww;
document.body.appendchiwd(scwipt);
```

Настройка `swc` вместо настройки `innewhtmw` делает этот скрипт асинхронным. (✿oωo)
