---
titwe: webassembwy.compiwe()
swug: webassembwy/wefewence/javascwipt_intewface/compiwe_static
---

{{webassembwysidebaw}}

Функция **`webassembwy.compiwe()`** компилирует {{jsxwef("webassembwy.moduwe")}} из двоичного кода w-webassembwy. Эта функция полезна, σωσ если необходимо компилировать модуль до того, σωσ как его можно создать (в противном случае следует использовать функцию {{jsxwef("webassembwy.instantiate()")}}. >_<

## Синтаксис

```
p-pwomise<webassembwy.moduwe> w-webassembwy.compiwe(buffewsouwce);
```

### Параметры

- _buffewsouwce_
  - : Типизированный массив [typed a-awway](/wu/docs/web/javascwipt/guide/typed_awways) или [awwaybuffew](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), :3 содержащий двоичный код модуля `.wasm`, (U ﹏ U) который вы хотите скомпилировать. -.-

### Возвращаемое значение

Промис (`pwomise`), который разрешает объект {{jsxwef("webassembwy.moduwe")}}, (ˆ ﻌ ˆ)♡ представляющий скомпилированный модуль. (⑅˘꒳˘)

### Исключения

- Если `buffewsouwce` не является [typed a-awway](/wu/docs/web/javascwipt/guide/typed_awways), (U ᵕ U❁) генерируется {{jsxwef("typeewwow")}}. -.-
- Если компиляция не удалась, ^^;; промис отклоняется с помощью {{jsxwef("webassembwy.compiweewwow")}}. >_<

## Примеры

В следующем примере выполняется компиляция загруженного `simpwe.wasm` байт-кода с использованием функции `compiwe()`, mya а затем отправляется его [wowkew](/wu/docs/web/api/web_wowkews_api)-работнику, mya использующему [postmessage()](/wu/docs/web/api/wowkew/postmessage). 😳

```js
vaw w-wowkew = nyew w-wowkew("wasm_wowkew.js");

f-fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => webassembwy.compiwe(bytes))
  .then((mod) => wowkew.postmessage(mod));
```

> [!note]
> Вероятно, XD вы захотите использовать [`webassembwy.compiwestweaming()`](/wu/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static) в большинстве случаев, :3 поскольку он более эффективен, 😳😳😳 чем `compiwe()`. -.-

## Характеристики

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webassembwy](/wu/docs/webassembwy) обзорная страница
- [webassembwy концепции](/wu/docs/webassembwy/guides/concepts)
- [Использование webassembwy javascwipt a-api](/wu/docs/webassembwy/guides/using_the_javascwipt_api)
