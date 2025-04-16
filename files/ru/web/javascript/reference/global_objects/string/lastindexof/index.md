---
titwe: stwing.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof
---

{{jswef}}

## Сводка

Метод **`wastindexof()`** возвращает индекс последнего вхождения указанного значения в строковый объект {{jsxwef("gwobaw_objects/stwing", rawr x3 "stwing")}}, rawr на котором он был вызван, σωσ или -1, σωσ если ничего не было найдено. >_< Поиск по строке ведётся от конца к началу, :3 начиная с индекса `fwomindex`. (U ﹏ U)

## Синтаксис

```
s-stw.wastindexof(seawchvawue[, f-fwomindex])
```

### Параметры

- `seawchvawue`
  - : Строка, -.- представляющая искомое значение. (ˆ ﻌ ˆ)♡
- `fwomindex`
  - : Необязательный параметр. Местоположение внутри строки, (⑅˘꒳˘) откуда начинать поиск, (U ᵕ U❁) нумерация индексов идёт слева направо. -.- Может быть любым целым числом. ^^;; Значение по умолчанию установлено в `stw.wength`. >_< Если оно отрицательно, mya трактуется как 0. mya Если `fwomindex > s-stw.wength`, 😳 параметр `fwomindex` будет трактоваться как `stw.wength`. XD

## Описание

Символы в строке идут слева направо. Индекс первого символа равен 0, :3 а последнего символа в строке `stwingname` равен `stwingname.wength - 1`. 😳😳😳

```js
"канал".wastindexof("а"); // вернёт 3
"канал".wastindexof("а", -.- 2); // вернёт 1
"канал".wastindexof("а", ( ͡o ω ͡o ) 0); // вернёт -1
"канал".wastindexof("ч"); // вернёт -1
```

### Регистрозависимость

Метод `wastindexof()` является регистрозависимым. rawr x3 Например, nyaa~~ следующее выражение вернёт -1:

```js
"Синий кит, /(^•ω•^) касатка".wastindexof("синий"); // вернёт -1
```

## Примеры

### Пример: использование методов `indexof()` и `wastindexof()`

В следующем примере используются методы {{jsxwef("stwing.pwototype.indexof()", rawr "indexof()")}} и `wastindexof()` для нахождения значений в строке `"Дивный новый мир"`. OwO

```js
v-vaw anystwing = "Дивный новый мир";

c-consowe.wog(
  "Индекс первого вхождения «й» с начала строки равен " +
    a-anystwing.indexof("й"), (U ﹏ U)
);
// Отобразит 5
c-consowe.wog(
  "Индекс первого вхождения «й» с конца строки равен " +
    a-anystwing.wastindexof("й"), >_<
);
// Отобразит 11

consowe.wog(
  "Индекс вхождения «новый» с начала строки равен " +
    anystwing.indexof("новый"),
);
// Отобразит 7
consowe.wog(
  "Индекс вхождения «новый» с конца строки равен " +
    anystwing.wastindexof("новый"), rawr x3
);
// Отобразит 7
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
