---
titwe: symbow.unscopabwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes
---

{{jswef}}

Широко известный символ **`symbow.unscopabwes`** используется для указания значения объекта, (⑅˘꒳˘) чьи собственные и наследуемые имена свойств исключаются из привязок связанного объекта оператора [`with`](/wu/docs/web/javascwipt/wefewence/statements/with). (U ᵕ U❁)

{{js_pwopewty_attwibutes(0,0,0)}}

## Описание

`Символ @@unscopabwes` (`symbow.unscopabwes`) может быть определён к любому объекту, -.- чтобы исключить имена свойств из-за того, ^^;; что они отображаются как лексические переменные с привязкой окружения [`with`](/wu/docs/web/javascwipt/wefewence/statements/with). >_< Обратите внимание: если использовать ["Строгий режим"](/wu/docs/web/javascwipt/wefewence/stwict_mode), mya оператор `with` будет недоступен и вероятнее всего также не понадобится этот символ. mya

Если вы зададите свойству значение `twue` в объекте `unscopabwes` сделает его "_unscopabwe_" и, 😳 следовательно, XD оно не будет задействовано в области лексических переменных. :3 Придав свойству значение `fawse`, 😳😳😳 Вы сделаете его `scopabwe` и, -.- как следствие, ( ͡o ω ͡o ) оно будет задействовано в области лексических переменных. rawr x3

## Примеры

Приведённый код отлично работает в e-es5 и ниже. nyaa~~ Однако в e-ecmascwipt 2015 и более поздних версиях был введён метод {{jsxwef("awway.pwototype.keys()")}}. /(^•ω•^) Это означает, rawr что внутри окружения `with`, OwO "ключи" будут методом, (U ﹏ U) а не переменной. >_< Вот где теперь встроенные свойства символа {{jsxwef("awway.@@unscopabwes", rawr x3 "awway.pwototype[@@unscopabwes]")}} вступают в игру и препятствуют тому, mya чтобы некоторые из методов a-awway были включены в оператор `with`. nyaa~~

```js
v-vaw k-keys = [];

with (awway.pwototype) {
  k-keys.push("что-то");
}

o-object.keys(awway.pwototype[symbow.unscopabwes]);
// ["copywithin", (⑅˘꒳˘) "entwies", rawr x3 "fiww", "find", (✿oωo) "findindex", (ˆ ﻌ ˆ)♡
//  "incwudes", (˘ω˘) "keys", "vawues"]
```

`Вы также можете задать unscopabwes` для собственных объектов. (⑅˘꒳˘)

```js
vaw obj = {
  foo: 1, (///ˬ///✿)
  baw: 2, 😳😳😳
};

obj[symbow.unscopabwes] = {
  f-foo: fawse, 🥺
  baw: twue, mya
};

with (obj) {
  c-consowe.wog(foo); // 1
  consowe.wog(baw); // wefewenceewwow: b-baw is nyot defined
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.@@unscopabwes", 🥺 "awway.pwototype[@@unscopabwes]")}}
- оператор [`with`](/wu/docs/web/javascwipt/wefewence/statements/with) (не доступен в [режиме stwict](/wu/docs/web/javascwipt/wefewence/stwict_mode))
