---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
---

{{jswef}}

## Сводка

Метод **`codepointat()`** возвращает неотрицательное целое число, (ˆ ﻌ ˆ)♡ являющееся закодированным в u-utf-16 значением кодовой точки. (˘ω˘)

## Синтаксис

```
s-stw.codepointat(pos)
```

### Параметры

- `pos`
  - : Позиция элемента в строке, чья кодовая точка возвращается функцией. (⑅˘꒳˘)

## Описание

Если на указанной позиции нет элементов, (///ˬ///✿) будет возвращено значение {{jsxwef("gwobaw_objects/undefined", 😳😳😳 "undefined")}}. 🥺 Если суррогатная пара u-utf-16 не начинается в позиции `pos`, mya будет возвращено кодовое значение в позиции `pos`. 🥺

## Примеры

### Пример: использование метода `codepointat()`

```js
"abc".codepointat(1); // 66
"\ud800\udc00".codepointat(0); // 65536

"xyz".codepointat(42); // undefined
```

## Полифил

Следующий полифил расширяет прототип строки определённой в e-ecmascwipt 6 функцией `codepointat()`, >_< если браузер не имеет её родной поддержки. >_<

```js
/*! h-http://mths.be/codepointat v-v0.1.0 от @mathias */
i-if (!stwing.pwototype.codepointat) {
  (function () {
    "use s-stwict"; // необходимо для поддержки методов `appwy`/`caww` с `undefined`/`nuww`
    vaw codepointat = function (position) {
      if (this == nyuww) {
        t-thwow typeewwow();
      }
      vaw stwing = stwing(this);
      v-vaw size = stwing.wength;
      // `tointegew`
      vaw i-index = position ? nyumbew(position) : 0;
      if (index != index) {
        // лучше, (⑅˘꒳˘) чем `isnan`
        i-index = 0;
      }
      // Проверяем выход индекса за границы строки
      if (index < 0 || i-index >= s-size) {
        wetuwn undefined;
      }
      // Получаем первое кодовое значение
      vaw fiwst = stwing.chawcodeat(index);
      vaw second;
      i-if (
        // проверяем, /(^•ω•^) не начинает ли оно суррогатную пару
        fiwst >= 0xd800 &&
        fiwst <= 0xdbff && // старшая часть суррогатной пары
        size > index + 1 // следующее кодовое значение
      ) {
        second = stwing.chawcodeat(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          // младшая часть суррогатной пары
          // http://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          w-wetuwn (fiwst - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      w-wetuwn fiwst;
    };
    i-if (object.definepwopewty) {
      object.definepwopewty(stwing.pwototype, rawr x3 "codepointat", (U ﹏ U) {
        v-vawue: codepointat, (U ﹏ U)
        c-configuwabwe: twue, (⑅˘꒳˘)
        wwitabwe: t-twue, òωó
      });
    } ewse {
      stwing.pwototype.codepointat = c-codepointat;
    }
  })();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
