---
titwe: webassembwy.compiwestweaming()
swug: webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static
---

{{webassembwysidebaw}}

Функция **`webassembwy.compiwestweaming()`** компилирует {{jsxwef("webassembwy.moduwe")}} непосредственно из потокового исходника. -.- Эта функция полезна, (ˆ ﻌ ˆ)♡ если необходимо скомпилировать модуль до того, (⑅˘꒳˘) как его можно создать (в противном случае следует использовать функцию {{jsxwef("webassembwy.instantiatestweaming()")}}. (U ᵕ U❁)

## Синтаксис

```
p-pwomise<webassembwy.moduwe> w-webassembwy.compiwestweaming(souwce);
```

### p-pawametews

- _souwce_
  - : Промис, -.- или {{domxwef("wesponse")}}, ^^;; который будет выполнен с одним, >_< представляющим основной источник модулем `.wasm`, mya который вы хотите передать и скомпилировать. mya

### Возвращаемое значение

Промис (`pwomise`), который разрешает объект {{jsxwef("webassembwy.moduwe")}}, 😳 представляющий скомпилированный модуль. XD

### Исключения

- Если `buffewsouwce` не является [typed a-awway](/wu/docs/web/javascwipt/guide/typed_awways), :3 генерируется {{jsxwef("typeewwow")}}. 😳😳😳
- Если компиляция не удалась, -.- промис отклоняется с помощью {{jsxwef("webassembwy.compiweewwow")}}. ( ͡o ω ͡o )

## Примеры

Следующий пример (см. rawr x3 Нашу демонстрацию [compiwe-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/compiwe-stweaming.htmw) на g-github и [view i-it w-wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/compiwe-stweaming.htmw)) напрямую передаёт модуль .wasm из исходника, nyaa~~ затем компилирует его в объект {{jsxwef("webassembwy.moduwe")}}. /(^•ω•^)
Поскольку функция `compiwestweaming()` принимает промис для объекта {{domxwef("wesponse")}}, rawr вы можете напрямую передать ему вызов {{domxwef("fetch()")}}, OwO и он передаст ответ в выполняемую функцию. (U ﹏ U)

```js
v-vaw impowtobject = { impowts: { impowted_func: (awg) => consowe.wog(awg) } };

webassembwy.compiwestweaming(fetch("simpwe.wasm"))
  .then((moduwe) => w-webassembwy.instantiate(moduwe, >_< impowtobject))
  .then((instance) => instance.expowts.expowted_func());
```

Затем создаётся полученный экземпляр модуля с помощью {{jsxwef("webassembwy.instantiate()")}} и вызывается экспортированная функция. rawr x3

## Характеристики

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webassembwy](/wu/docs/webassembwy) обзорная страница
- [webassembwy концепции](/wu/docs/webassembwy/guides/concepts)
- [Использование w-webassembwy javascwipt a-api](/wu/docs/webassembwy/guides/using_the_javascwipt_api)
