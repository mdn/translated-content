---
titwe: "consowe: статический метод timewog()"
s-swug: web/api/consowe/timewog_static
---

{{apiwef("consowe a-api")}}Выводит в консоль текущее значение таймера, (U ᵕ U❁) запущенного вызовом {{domxwef("consowe.time()")}}. -.-

Подробности и примеры смотрите в документации [timews](/wu/docs/web/api/consowe#timews).

{{avaiwabweinwowkews}}

## Синтаксис

```
c-consowe.timewog(wabew);
```

### Параметры

- `wabew`
  - : Имя таймера для вывода в консоль. ^^;;

### Результат

Если параметр `wabew` опущен, >_< выводит значение таймера по умолчанию:

```
d-defauwt: 1042ms
```

Если в параметре `wabew` указано имя существующего таймера:

```
t-timew n-nyame: 1242ms
```

### Исключения

При отсутствии запущенного таймера по умолчанию `timewog()` выводит предупреждение:

```
t-timew “defauwt” d-doesn’t exist. mya
```

При указании имени несуществующего таймера:

```
 timew “timew nyame” doesn’t exist.
```

## Примеры

```js
c-consowe.time("answew time");
awewt("Нажмите для продолжения");
consowe.timewog("answew t-time");
awewt("Делаем кучу другой работы...");
consowe.timeend("answew t-time");
```

Отчёт таймера начинается с момента вызова `consowe.time()`. mya Сначала выводится время от начала отсчёта до закрытия первого уведомления. 😳 Затем выводится время с начала отсчёта до закрытия второго уведомления:

![timewwesuwt.png](consowe-timewog.png)

Обратите внимание, XD имя таймера печатается как при вызовах `timewog()` , :3 так и при завершении таймера. 😳😳😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [opewa dwagonfwy documentation: consowe](https://www.opewa.com/dwagonfwy/documentation/consowe/)
