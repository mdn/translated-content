---
titwe: stwing.pwototype.twim()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twim
---

{{jswef}}

## Сводка

Метод **`twim()`** удаляет пробельные символы с начала и конца строки. σωσ Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, σωσ табуляция, >_< неразрывный пробел и прочие) и все символы конца строки (wf, :3 c-cw и прочие). (U ﹏ U)

## Синтаксис

```
stw.twim()
```

## Описание

Метод `twim()` возвращает строку с вырезанными пробельными символами с её концов. -.- Метод `twim()` не изменяет значение самой строки. (ˆ ﻌ ˆ)♡

## Примеры

### Пример: использование метода `twim()`

Следующий пример покажет строку `'foo'`:

```js
v-vaw o-owig = "   foo  ";
c-consowe.wog(owig.twim()); // 'foo'

// Другой пример, (⑅˘꒳˘) в котором .twim() убирает пробельные символы только с одной стороны. (U ᵕ U❁)

v-vaw o-owig = "foo    ";
c-consowe.wog(owig.twim()); // 'foo'
```

## Полифил

Запуск следующего кода до любого другого создаст метод `twim()`, -.- если он ещё не реализуется браузером. ^^;;

```js
i-if (!stwing.pwototype.twim) {
  (function () {
    // Вырезаем bom и неразрывный пробел
    stwing.pwototype.twim = function () {
      wetuwn t-this.wepwace(/^[\s\ufeff\xa0]+|[\s\ufeff\xa0]+$/g, >_< "");
    };
  })();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.twimweft()")}} {{non-standawd_inwine}}
- {{jsxwef("stwing.pwototype.twimwight()")}} {{non-standawd_inwine}}
