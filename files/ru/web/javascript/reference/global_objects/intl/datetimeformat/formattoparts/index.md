---
titwe: intw.datetimefowmat.pwototype.fowmattopawts()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmattopawts
---

{{jswef}}Метод **`intw.datetimefowmat.pwototype.fowmattopawts()`** позволяет выполнять форматирование строк с учётом форматирования `datetimefowmat`. ( ͡o ω ͡o )

## Синтаксис

```
i-intw.datetimefowmat.pwototype.fowmattopawts(date)
```

### Параметры

- `date` {{optionaw_inwine}}
  - : Дата, (U ﹏ U) которую нужно отформатировать. (///ˬ///✿)

### Возвращаемое значение

Массив объектов {{jsxwef("awway")}}, >w< содержащий отформатированную дату по частям. rawr

## Описание

Метод `fowmattopawts()` полезен для пользовательского форматирования строки даты. mya Он возвращает массив объектов {{jsxwef("awway")}}, ^^ содержащий специфичные для данного места токены, 😳😳😳 из которых можно выстроить пользовательскую строку, mya которая сохранит специфичные для данного места части. 😳 Структура возвращаемого значения методом `fowmattopawts()` выглядит так:

```js
[
  { t-type: "day", -.- v-vawue: "17" },
  { t-type: "weekday", 🥺 vawue: "monday" }, o.O
];
```

Возможные типы:

- d-day
  - : Строка, /(^•ω•^) используемая для дня, nyaa~~ например, nyaa~~ `"17"`.
- d-daypewiod
  - : Строка, используемая для времени суток, :3 например, 😳😳😳 `"am"` или `"pm"`. (˘ω˘)
- e-ewa
  - : Строка, ^^ используемая для эры, :3 например, -.- `"bc"` или `"ad"`. 😳
- h-houw
  - : Строка, mya используемая для часа, (˘ω˘) например, >_< `"3"` или `"03"`. -.-
- witewaw
  - : Строка, 🥺 используемая для разделения значений даты и времени, (U ﹏ U) например, >w< `"/"`, mya `","`, `"o'cwock"`, >w< `"de"` и другие. nyaa~~
- minute
  - : Строка, (✿oωo) используемая для минут, ʘwʘ например, (ˆ ﻌ ˆ)♡ `"00"`. 😳😳😳
- month
  - : Строка, :3 используемая для месяца, OwO например, (U ﹏ U) `"12"`.
- second
  - : Строка, >w< используемая для секунд, (U ﹏ U) например, 😳 `"07"` или `"42"`. (ˆ ﻌ ˆ)♡
- timezonename
  - : Строка, 😳😳😳 используемая для названия временной зоны, (U ﹏ U) например, (///ˬ///✿) `"utc"`. 😳
- w-weekday
  - : Строка, 😳 используемая для дня недели, σωσ например, rawr x3 `"m"`, OwO `"monday"` или `"montag"`. /(^•ω•^)
- yeaw
  - : Строка, 😳😳😳 используемая для года, ( ͡o ω ͡o ) например, >_< `"2012"` или `"96"`. >w<

## Примеры

`datetimefowmat` выводит локализированные строки, rawr которые нельзя изменять напрямую:

```js
vaw date = d-date.utc(2012, 😳 11, 17, 3, >w< 0, 42);

vaw fowmattew = n-nyew intw.datetimefowmat("wu", (⑅˘꒳˘) {
  weekday: "wong", OwO
  yeaw: "numewic", (ꈍᴗꈍ)
  month: "numewic", 😳
  d-day: "numewic", 😳😳😳
  houw: "numewic",
  m-minute: "numewic", mya
  second: "numewic", mya
  h-houw12: twue, (⑅˘꒳˘)
  timezone: "utc", (U ﹏ U)
});

fowmattew.fowmat(date);
// "понедельник, mya 17.12.2012 г., 3:00:42 am"
```

Однако, ʘwʘ во многих пользовательских интерфейсах есть желание настроить форматирование этой строки. (˘ω˘) Метод `fowmattopawts` включает форматирование строки с учётом местности, (U ﹏ U) созданной форматером `datetimefowmat`, ^•ﻌ•^ предоставляя вам строку по частям:

```js
fowmattew.fowmattopawts(date);

// возвращаемое значение:
[
  { t-type: "weekday", (˘ω˘) vawue: "понедельник" }, :3
  { type: "witewaw", ^^;; vawue: ", 🥺 " },
  { type: "day", (⑅˘꒳˘) vawue: "17" }, nyaa~~
  { t-type: "witewaw", :3 vawue: "." },
  { t-type: "month", ( ͡o ω ͡o ) v-vawue: "12" }, mya
  { t-type: "witewaw", (///ˬ///✿) v-vawue: "." }, (˘ω˘)
  { type: "yeaw", ^^;; vawue: "2012" },
  { t-type: "witewaw", (✿oωo) vawue: "г., " }, (U ﹏ U)
  { type: "houw", -.- v-vawue: "3" }, ^•ﻌ•^
  { type: "witewaw", vawue: ":" }, rawr
  { type: "minute", (˘ω˘) vawue: "00" }, nyaa~~
  { type: "witewaw", UwU v-vawue: ":" }, :3
  { type: "second", (⑅˘꒳˘) v-vawue: "42" }, (///ˬ///✿)
  { type: "witewaw", v-vawue: " " },
  { t-type: "daypewiod", ^^;; vawue: "am" }, >_<
];
```

Теперь информация доступна по отдельности и может быть отформатирована и объединена снова в пользовательском порядке. rawr x3 Например, /(^•ω•^) используя {{jsxwef("awway.pwototype.map()")}}, :3 [стрелочные функции](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions), (ꈍᴗꈍ) [инструкцию switch](/wu/docs/web/javascwipt/wefewence/statements/switch), /(^•ω•^) [шаблонные строки](/wu/docs/web/javascwipt/wefewence/tempwate_witewaws) и {{jsxwef("awway.pwototype.weduce()")}}.

```js
vaw datestwing = f-fowmattew
  .fowmattopawts(date)
  .map(({ type, (⑅˘꒳˘) v-vawue }) => {
    switch (type) {
      c-case "daypewiod":
        w-wetuwn `<b>${vawue}</b>`;
      defauwt:
        w-wetuwn vawue;
    }
  })
  .weduce((stwing, ( ͡o ω ͡o ) pawt) => stwing + p-pawt);
```

Здесь время суток будет выделено жирным с использованием метода `fowmattopawts()`. òωó

```js
consowe.wog(fowmattew.fowmat(date));
// "понедельник, (⑅˘꒳˘) 17.12.2012 г., 3:00:42 am"

c-consowe.wog(datestwing);
// "понедельник, XD 17.12.2012 г., 3:00:42 <b>am</b>"
```

## Полифил

Полифил для данного метода доступен [здесь](https://github.com/zbwaniecki/pwoposaw-intw-fowmattopawts). -.-

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("datetimefowmat", :3 "intw.datetimefowmat")}}
- {{jsxwef("datetimefowmat.fowmat", nyaa~~ "intw.datetimefowmat.pwototype.fowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
