---
titwe: date.pwototype.setminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setminutes
---

{{jswef}}

## Сводка

Метод **`setminutes()`** устанавливает минуты указанной даты по местному времени. ( ͡o ω ͡o )

## Синтаксис

```
d-dateobj.setminutes(minutesvawue[, UwU s-secondsvawue[, rawr x3 m-msvawue]])
```

### Версия до j-javascwipt 1.3

```
d-dateobj.setminutes(minutesvawue)
```

### Параметры

- `minutesvawue`
  - : Целое число от 0 до 59, rawr представляющее минуты. σωσ
- `secondsvawue`
  - : Необязательный параметр. σωσ Целое число от 0 до 59, представляющее секунды. >_< Если вы определите параметр `secondsvawue`, :3 вы также должны определить параметр `minutesvawue`. (U ﹏ U)
- `msvawue`
  - : Необязательный параметр. -.- Целое число от 0 до 999, (ˆ ﻌ ˆ)♡ представляющее миллисекунды. (⑅˘꒳˘) Если вы определите параметр `msvawue`, (U ᵕ U❁) вы также должны определить параметры `minutesvawue` и `secondsvawue`. -.-

### Возвращаемое значение

Количество миллисекунд между 1 января 1970 00:00:00 u-utc и обновлённой датой. ^^;;

## Описание

Если вы не определите значения параметров `secondsvawue` и `msvawue`, >_< будут использоваться значения, mya возвращаемые методами {{jsxwef("date.pwototype.getseconds()", mya "getseconds()")}} и {{jsxwef("date.pwototype.getmiwwiseconds()", 😳 "getmiwwiseconds()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, XD метод `setminutes()` попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxwef("gwobaw_objects/date", :3 "date")}}. Например, 😳😳😳 если в качестве `secondsvawue` передать значение 100, -.- минуты увеличатся на 1 (`minutesvawue + 1`), ( ͡o ω ͡o ) а в качестве секунд будет использоваться значение 40. rawr x3

## Примеры

### Пример: использование метода `setminutes()`

```js
v-vaw t-thebigday = nyew date();
thebigday.setminutes(45);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
