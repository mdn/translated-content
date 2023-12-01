---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
---

{{jsSidebar("Objects")}}

Глобальное свойство **`globalThis`** содержит значение глобального `this`, который является глобальным объектом.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html")}}

## Синтаксис

```
globalThis
```

## Описание

Исторически, для доступа к глобальному объекту использовался разный синтаксис в разных средах JavaScript. В вебе вы могли использовать {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}} или {{domxref("Window.frames", "frames")}}, но в [Worker](/ru/docs/Web/API/Worker) можно использовать только `self`. В Node.js ничего из этого не работает, поэтому вы должны использовать `global`.

Ключевое слово `this` можно использовать внутри функций в нестрогом режиме. Но в строгом режиме внутри функций и в Модулях `this` равняется `undefined`. Вы можете использовать `Function('return this')()`, но среды, которые отключают {{jsxref("eval", "eval()")}}, такие как {{Glossary('CSP')}} в браузерах, препятствуют использованию {{jsxref("Function")}} таким способом.

Свойство `globalThis` даёт возможность стандартного доступа к глобальному значению `this` (и как следствие, к глобальному объекту) вне зависимости от окружения. В отличии от похожих свойств, таких как `window` и `self`, оно гарантирует работу как в среде, где есть `window`, так и в среде, где его нет. Таким образом вы можете получить доступ к глобальному объекту даже не зная в какой среде будет запущен код. Чтобы помочь запомнить название, просто запомните, что глобальное значение `this` равно `globalThis`.

### HTML и WindowProxy

Во многих движках `globalThis` будет ссылкой на фактический глобальный объект, но в веб-браузерах из-за соображений безопасности iframe и cross-window он ссылается на {{jsxref ("Proxy")}} вокруг фактического глобального объекта (который вы не можете получить прямым доступом). Это различие редко актуально в обычном использовании, но его важно знать.

### Название

Некоторые другие популярные имена, такие как `self` и `global` были исключены из рассмотрения из-за того, что они могут нарушать совместимость с существующим кодом. Смотрите [документ по планированию именования](https://github.com/tc39/proposal-global/blob/master/NAMING.md) для большей информации.

## Примеры

До `globalThis` единственным кросс-платформенным путём получения глобального объекта в любой среде было `Function('return this')()`. Однако, это нарушает [CSP](/ru/docs/Web/HTTP/CSP) в некоторых случаях. Например, [es6-shim](https://github.com/paulmillr/es6-shim) делает такую проверку:

```js
var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== "function") {
  // в данном окружении не существует setTimeout!
}
```

С `globalThis` дополнительный поиск глобального объекта в разных средах больше не нужен:

```js
if (typeof globalThis.setTimeout !== "function") {
  // в данном окружении не существует setTimeout!
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
