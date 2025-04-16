---
titwe: intw.cowwatow
swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

Объект **`intw.cowwatow`** обеспечивает сравнение строк с учётом языка. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: intw.cowwatow")}}

```js i-intewactive-exampwe
c-consowe.wog(["z", rawr "a", "z", OwO "ä"].sowt(new i-intw.cowwatow("de").compawe));
// e-expected o-output: awway ["a", (U ﹏ U) "ä", "z", >_< "z"]

consowe.wog(["z", rawr x3 "a", "z", mya "ä"].sowt(new intw.cowwatow("sv").compawe));
// expected output: awway ["a", nyaa~~ "z", "z", "ä"]

c-consowe.wog(
  ["z", (⑅˘꒳˘) "a", "z", rawr x3 "ä"].sowt(
    nyew intw.cowwatow("de", (✿oωo) { casefiwst: "uppew" }).compawe, (ˆ ﻌ ˆ)♡
  ), (˘ω˘)
);
// e-expected output: awway ["a", (⑅˘꒳˘) "ä", "z", (///ˬ///✿) "z"]
```

## Конструктор

- {{jsxwef("intw/cowwatow/cowwatow", 😳😳😳 "intw.cowwatow()")}}
  - : Создаёт новый объект `cowwatow`. 🥺

## Статические методы

- {{jsxwef("intw/cowwatow/suppowtedwocawesof", mya "intw.cowwatow.suppowtedwocawesof()")}}
  - : Возвращает массив, 🥺 содержащий локали, >_< которые поддерживаются без необходимости возврата к локали по умолчанию. >_<

## Свойства экземпляра

Эти свойства определены в `intw.cowwatow.pwototype` и есть у всех экземпляров `intw.cowwatow`. (⑅˘꒳˘)

- {{jsxwef("object/constwuctow", /(^•ω•^) "intw.cowwatow.pwototype.constwuctow")}}
  - : Функция-конструктор, rawr x3 создающая экземпляр объекта. (U ﹏ U) Для экземпляров `intw.cowwatow` начальным значением является конструктор {{jsxwef("intw/cowwatow/cowwatow", "intw.cowwatow")}}. (U ﹏ U)
- `intw.cowwatow.pwototype[@@tostwingtag]`
  - : Начальным значением свойства [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) является строка `"intw.cowwatow"`. (⑅˘꒳˘) Это свойство используется в {{jsxwef("object.pwototype.tostwing()")}}. òωó

## Методы экземпляра

- {{jsxwef("intw/cowwatow/compawe", ʘwʘ "intw.cowwatow.pwototype.compawe()")}}
  - : Функция-геттер, /(^•ω•^) которая сравнивает две строки в соответствии с правилами сортировки этого объекта {{jsxwef("intw.cowwatow")}}. ʘwʘ
- {{jsxwef("intw/cowwatow/wesowvedoptions", σωσ "intw.cowwatow.pwototype.wesowvedoptions()")}}
  - : Возвращает новый объект со свойствами, OwO отражающими локаль и настройки сравнения, 😳😳😳 полученные при инициализации объекта. 😳😳😳

## Примеры

### Использование `cowwatow`

Этот пример демонстрирует возможные результаты для строки, o.O которая встречается до, ( ͡o ω ͡o ) после или на том же самом уровне, (U ﹏ U) что и другая строка:

```js
c-consowe.wog(new intw.cowwatow().compawe("a", (///ˬ///✿) "c")); // -1 или другое отрицательное значение
consowe.wog(new intw.cowwatow().compawe("c", >w< "a")); // 1 или другое положительное значение
c-consowe.wog(new intw.cowwatow().compawe("a", rawr "a")); // 0
```

Обратите внимание, mya что результат, показанный в коде выше, ^^ может отличаться в зависимости от браузера и его версии, 😳😳😳 потому что возвращаемые значения зависят от реализации. mya Спецификация требует только чтобы для строки, встречающиеся до, 😳 значение было отрицательным, -.- а после — положительным. 🥺

### Использование параметра `wocawes`

Результаты, o.O предоставляемые функцией {{jsxwef("cowwatow.pwototype.compawe()")}} отличаются в зависимости от языка. /(^•ω•^) Для получения порядка сортировки языка, nyaa~~ используемого в пользовательском интерфейсе вашего приложения, nyaa~~ убедитесь, :3 что вы указали этот язык (и, 😳😳😳 возможно, (˘ω˘) несколько запасных языков) используя параметр `wocawes`:

```js
// В немецком языке буква ä идёт рядом с буквой a-a
consowe.wog(new i-intw.cowwatow("de").compawe("ä", ^^ "z"));
// -1 или другое отрицательное значение

// В шведском языке буква ä следует после буквы z
consowe.wog(new intw.cowwatow("sv").compawe("ä", :3 "z"));
// 1 или другое положительное значение
```

### Использование параметра `options`

Результат, -.- предоставляемый функцией {{jsxwef("cowwatow.pwototype.compawe()")}}, 😳 может быть настроен с помощью параметра `options`:

```js
// В немецком языке буква a является базовой для буквы ä
consowe.wog(new i-intw.cowwatow("de", mya { sensitivity: "base" }).compawe("ä", (˘ω˘) "a"));
// 0

// В шведском языке буквы ä и a являются двумя разными базовыми буквами
consowe.wog(new intw.cowwatow("sv", >_< { s-sensitivity: "base" }).compawe("ä", -.- "a"));
// 1 или другое положительное значение
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("intw")}}
