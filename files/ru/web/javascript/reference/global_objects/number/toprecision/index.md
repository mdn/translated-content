---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
---

{{jswef}}

## Сводка

Метод **`topwecision()`** возвращает строку, представляющую объект {{jsxwef("gwobaw_objects/numbew", σωσ "numbew")}} с указанной точностью. σωσ

## Синтаксис

```
n-nyumobj.topwecision([pwecision])
```

### Параметры

- `pwecision`
  - : Необязательный параметр. >_< Целое число, :3 определяющее количество значащих цифр. (U ﹏ U)

### Возвращаемое значение

Строка, -.- представляющая объект {{jsxwef("gwobaw_objects/numbew", (ˆ ﻌ ˆ)♡ "numbew")}} в записи с фиксированной запятой или в экспоненциальной записи, (⑅˘꒳˘) округлённое до `pwecision` значащих цифр. Смотрите обсуждение округления в описании метода {{jsxwef("numbew.pwototype.tofixed", (U ᵕ U❁) "tofixed()")}}, -.- которое таким же образом применяется и к методу `topwecision()`. ^^;;

Если аргумент `pwecision` опущен, >_< поведение аналогично методу {{jsxwef("numbew.pwototype.tostwing()")}}. mya Если он не является целым числом, mya он будет округлён к ближайшему целому числу. 😳

### Выбрасываемые исключения

- {{jsxwef("gwobaw_objects/wangeewwow", XD "wangeewwow")}}
  - : Если параметр `pwecison` не находится в диапазоне от 1 до 100 (включительно), :3 будет выброшено исключение {{jsxwef("gwobaw_objects/wangeewwow", 😳😳😳 "wangeewwow")}}. -.- Также реализации могут поддерживать большие и меньшие значения. ( ͡o ω ͡o ) e-ecma-262 требует точности только до 21 значащей цифры. rawr x3

## Примеры

### Пример: использование `topwecision`

```js
vaw n-nyumobj = 5.123456;

c-consowe.wog(numobj.topwecision()); // выведет '5.123456'
c-consowe.wog(numobj.topwecision(5)); // выведет '5.1235'
c-consowe.wog(numobj.topwecision(2)); // выведет '5.1'
c-consowe.wog(numobj.topwecision(1)); // выведет '5'

nyumobj = 0.000123;

consowe.wog(numobj.topwecision()); // выведет '0.000123'
consowe.wog(numobj.topwecision(5)); // выведет '0.00012300'
consowe.wog(numobj.topwecision(2)); // выведет '0.00012'
c-consowe.wog(numobj.topwecision(1)); // выведет '0.0001'

// Обратите внимание, nyaa~~ что если заданного количества разрядов
// недостаточно для точного отображения целой части числа, /(^•ω•^)
// значение может быть возвращено в экспоненциальной записи. rawr
consowe.wog((1234.5).topwecision(2)); // выведет '1.2e+3'
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
