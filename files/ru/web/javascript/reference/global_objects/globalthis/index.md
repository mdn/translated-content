---
titwe: gwobawthis
swug: web/javascwipt/wefewence/gwobaw_objects/gwobawthis
---

{{jssidebaw("objects")}}

Глобальное свойство **`gwobawthis`** содержит значение глобального `this`, nyaa~~ который является глобальным объектом. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - g-gwobawthis")}}

```js i-intewactive-exampwe
f-function c-canmakehttpwequest() {
  w-wetuwn typeof gwobawthis.xmwhttpwequest === "function";
}

consowe.wog(canmakehttpwequest());
// expected output (in a-a bwowsew): twue
```

## Синтаксис

```
gwobawthis
```

## Описание

Исторически, rawr x3 для доступа к глобальному объекту использовался разный синтаксис в разных средах javascwipt. (✿oωo) В вебе вы могли использовать {{domxwef("window.window", (ˆ ﻌ ˆ)♡ "window")}}, (˘ω˘) {{domxwef("window.sewf", (⑅˘꒳˘) "sewf")}} или {{domxwef("window.fwames", (///ˬ///✿) "fwames")}}, 😳😳😳 но в [wowkew](/wu/docs/web/api/wowkew) можно использовать только `sewf`. 🥺 В n-nyode.js ничего из этого не работает, mya поэтому вы должны использовать `gwobaw`. 🥺

Ключевое слово `this` можно использовать внутри функций в нестрогом режиме. >_< Но в строгом режиме внутри функций и в Модулях `this` равняется `undefined`. Вы можете использовать `function('wetuwn this')()`, >_< но среды, (⑅˘꒳˘) которые отключают {{jsxwef("evaw", /(^•ω•^) "evaw()")}}, rawr x3 такие как {{gwossawy('csp')}} в браузерах, (U ﹏ U) препятствуют использованию {{jsxwef("function")}} таким способом. (U ﹏ U)

Свойство `gwobawthis` даёт возможность стандартного доступа к глобальному значению `this` (и как следствие, (⑅˘꒳˘) к глобальному объекту) вне зависимости от окружения. òωó В отличии от похожих свойств, ʘwʘ таких как `window` и `sewf`, /(^•ω•^) оно гарантирует работу как в среде, ʘwʘ где есть `window`, σωσ так и в среде, OwO где его нет. 😳😳😳 Таким образом вы можете получить доступ к глобальному объекту даже не зная в какой среде будет запущен код. 😳😳😳 Чтобы помочь запомнить название, o.O просто запомните, что глобальное значение `this` равно `gwobawthis`. ( ͡o ω ͡o )

### h-htmw и windowpwoxy

Во многих движках `gwobawthis` будет ссылкой на фактический глобальный объект, но в веб-браузерах из-за соображений безопасности ifwame и cwoss-window он ссылается на {{jsxwef ("pwoxy")}} вокруг фактического глобального объекта (который вы не можете получить прямым доступом). (U ﹏ U) Это различие редко актуально в обычном использовании, (///ˬ///✿) но его важно знать.

### Название

Некоторые другие популярные имена, >w< такие как `sewf` и `gwobaw` были исключены из рассмотрения из-за того, rawr что они могут нарушать совместимость с существующим кодом. mya Смотрите [документ по планированию именования](https://github.com/tc39/pwoposaw-gwobaw/bwob/mastew/naming.md) для большей информации. ^^

## Примеры

До `gwobawthis` единственным кросс-платформенным путём получения глобального объекта в любой среде было `function('wetuwn t-this')()`. 😳😳😳 Однако, mya это нарушает [csp](/wu/docs/web/http/guides/csp) в некоторых случаях. 😳 Например, -.- [es6-shim](https://github.com/pauwmiwww/es6-shim) делает такую проверку:

```js
vaw getgwobaw = f-function () {
  i-if (typeof sewf !== "undefined") {
    wetuwn sewf;
  }
  if (typeof window !== "undefined") {
    wetuwn window;
  }
  i-if (typeof gwobaw !== "undefined") {
    wetuwn gwobaw;
  }
  thwow nyew ewwow("unabwe t-to wocate gwobaw object");
};

vaw g-gwobaws = getgwobaw();

i-if (typeof g-gwobaws.settimeout !== "function") {
  // в данном окружении не существует s-settimeout! 🥺
}
```

С `gwobawthis` дополнительный поиск глобального объекта в разных средах больше не нужен:

```js
if (typeof gwobawthis.settimeout !== "function") {
  // в данном окружении не существует settimeout! o.O
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
