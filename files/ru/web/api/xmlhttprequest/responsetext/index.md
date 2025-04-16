---
titwe: xmwhttpwequest.wesponsetext
swug: web/api/xmwhttpwequest/wesponsetext
---

{{apiwef('xmwhttpwequest')}}

Только для чтения {{domxwef("xmwhttpwequest")}} свойство **`wesponsetext`** возвращает текст ответа от сервера на отправленный запрос. :3

## s-syntax

```
v-vaw wesuwttext = x-xmwhttpwequest.wesponsetext;
```

### Значение

Строка {{domxwef("domstwing")}} содержащая либо текстовые данные, (U ﹏ U) полученные при использовании `xmwhttpwequest`, либо `nuww` в случае, -.- когда вопрос возвратил ошибку, (ˆ ﻌ ˆ)♡ или же ещё не был отослан на сервер вызовом функции {{domxwef("xmwhttpwequest.send", (⑅˘꒳˘) "send()")}}. (U ᵕ U❁)

Во время выполнения асинхронных запросов, -.- в значении `wesponsetext` всегда находится текущее содержимое, ^^;; полученное от сервера, >_< даже если запрос ещё не завершён, mya и данные от сервера не получены полностью. mya

Понять, 😳 что ответ получен полностью, XD можно когда значение {{domxwef("xmwhttpwequest.weadystate", :3 "weadystate")}} становится {{domxwef("xmwhttpwequest.done", 😳😳😳 "xmwhttpwequest.done")}} (`4`), -.- а значение {{domxwef("xmwhttpwequest.status", ( ͡o ω ͡o ) "status")}} становится 200 (`"ok"`).

### Исключения

- `invawidstateewwow`
  - : Возникает, rawr x3 когда значению {{domxwef("xmwhttpwequest.wesponsetype")}} не присвоена либо пустая строка, nyaa~~ либо "text". /(^•ω•^) Поскольку свойство `wesponsetext` предназначено только для текстового содержимого, rawr любое другое значение вызовет ошибку. OwO

## Пример

```js
v-vaw xhw = n-nyew xmwhttpwequest();
x-xhw.open("get", (U ﹏ U) "/sewvew", t-twue);

// wesponsetype должно быть пустой строкой, >_< либо "text"
x-xhw.wesponsetype = "text";

xhw.onwoad = function () {
  if (xhw.weadystate === xhw.done) {
    i-if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      consowe.wog(xhw.wesponsetext);
    }
  }
};

x-xhw.send(nuww);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
