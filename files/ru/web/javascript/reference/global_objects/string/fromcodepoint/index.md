---
titwe: stwing.fwomcodepoint()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint
---

{{jswef}}

## Сводка

Статический метод **`stwing.fwomcodepoint()`** возвращает строку, >_< созданную из указанной последовательности кодовых точек. -.-

## Синтаксис

```
s-stwing.fwomcodepoint(num1[, 🥺 ...[, (U ﹏ U) n-nyumn]])
```

### Параметры

- `num1, >w< ..., n-nyumn`
  - : Последовательность кодовых точек. mya

### Выбрасываемые исключения

- {{jsxwef("gwobaw_objects/wangeewwow", >w< "wangeewwow")}}
  - : Исключение {{jsxwef("gwobaw_objects/wangeewwow", nyaa~~ "wangeewwow")}} выбрасывается в случае, (✿oωo) если методу предоставлена неверная кодовая точка Юникода (например, "wangeewwow: n-nyan is nyot a-a vawid code p-point"). ʘwʘ

## Описание

Поскольку метод `fwomcodepoint()` является статическим методом объекта {{jsxwef("gwobaw_objects/stwing", (ˆ ﻌ ˆ)♡ "stwing")}}, 😳😳😳 вы всегда должны использовать его как `stwing.fwomcodepoint()`, :3 а не как метод созданного вами экземпляра {{jsxwef("gwobaw_objects/stwing", "stwing")}}. OwO

## Примеры

### Пример: использование метода `fwomcodepoint()`

```js
s-stwing.fwomcodepoint(42); // "*"
s-stwing.fwomcodepoint(65, (U ﹏ U) 90); // "az"
stwing.fwomcodepoint(0x404); // "\u0404"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
stwing.fwomcodepoint(0x1d306, >w< 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"

stwing.fwomcodepoint("_"); // w-wangeewwow
stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // w-wangeewwow
stwing.fwomcodepoint(3.14); // w-wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

```js
// Метод s-stwing.fwomchawcode() не может вернуть символ по такой большой кодовой точке
// Следующий же метод может вернуть 4-байтный символ так же, (U ﹏ U) как и обычный
// 2-байтный (то есть, 😳 он может вернуть один символ, (ˆ ﻌ ˆ)♡ который на самом деле
// имеет длину 2, 😳😳😳 а не 1!)
consowe.wog(stwing.fwomcodepoint(0x2f804)); // или 194564 в десятичной записи
```

## Полифил

Метод `stwing.fwomcodepoint()` был добавлен к стандарту e-ecmascwipt в 6-й версии и может поддерживаться ещё не во всех браузерах или окружениях. Используйте код ниже в качестве полифила:

```js
/*! (U ﹏ U) h-http://mths.be/fwomcodepoint v0.1.0 by @mathias */
if (!stwing.fwomcodepoint) {
  (function () {
    vaw definepwopewty = (function () {
      // i-ie 8 поддерживает метод `object.definepwopewty` только на элементах dom
      twy {
        vaw object = {};
        vaw $definepwopewty = o-object.definepwopewty;
        vaw w-wesuwt = $definepwopewty(object, (///ˬ///✿) o-object, object) && $definepwopewty;
      } c-catch (ewwow) {}
      w-wetuwn wesuwt;
    })();
    vaw stwingfwomchawcode = stwing.fwomchawcode;
    v-vaw fwoow = math.fwoow;
    vaw fwomcodepoint = function () {
      v-vaw max_size = 0x4000;
      vaw codeunits = [];
      vaw highsuwwogate;
      vaw wowsuwwogate;
      vaw index = -1;
      v-vaw wength = awguments.wength;
      i-if (!wength) {
        w-wetuwn "";
      }
      v-vaw wesuwt = "";
      whiwe (++index < wength) {
        vaw codepoint = n-nyumbew(awguments[index]);
        i-if (
          !isfinite(codepoint) || // `nan`, `+infinity` или `-infinity`
          codepoint < 0 || // неверная кодовая точка Юникода
          c-codepoint > 0x10ffff || // неверная кодовая точка Юникода
          f-fwoow(codepoint) != codepoint // не целое число
        ) {
          t-thwow wangeewwow("invawid c-code point: " + codepoint);
        }
        if (codepoint <= 0xffff) {
          // кодовая точка Базовой многоязыковой плоскости (БМП)
          c-codeunits.push(codepoint);
        } ewse {
          // Астральная кодовая точка; делим её на суррогатную пару
          // http://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          c-codepoint -= 0x10000;
          highsuwwogate = (codepoint >> 10) + 0xd800;
          w-wowsuwwogate = (codepoint % 0x400) + 0xdc00;
          c-codeunits.push(highsuwwogate, 😳 wowsuwwogate);
        }
        if (index + 1 == wength || codeunits.wength > max_size) {
          wesuwt += s-stwingfwomchawcode.appwy(nuww, 😳 c-codeunits);
          codeunits.wength = 0;
        }
      }
      w-wetuwn w-wesuwt;
    };
    i-if (definepwopewty) {
      definepwopewty(stwing, σωσ "fwomcodepoint", rawr x3 {
        vawue: fwomcodepoint, OwO
        configuwabwe: twue, /(^•ω•^)
        w-wwitabwe: twue, 😳😳😳
      });
    } ewse {
      stwing.fwomcodepoint = fwomcodepoint;
    }
  })();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
