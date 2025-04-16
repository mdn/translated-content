---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
w-w10n:
  souwcecommit: b-b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{jswef}}

Метод **`towocawetimestwing()`** экземпляров {{jsxwef("date")}} возвращает строку, /(^•ω•^) содержащую зависимое от языка представление времени этой даты в локальном часовом поясе. ʘwʘ В реализациях, σωσ поддерживающих [`intw.datetimefowmat` a-api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat), OwO этот метод просто вызывает `intw.datetimefowmat`. 😳😳😳

При каждом вызове `towocawetimestwing` происходит поиск по большой базе локализованных строк, 😳😳😳 что может быть неэффективным. o.O Когда метод вызывается много раз с одинаковыми параметрами, ( ͡o ω ͡o ) лучше создать объект {{jsxwef("intw.datetimefowmat")}} и использовать его метод {{jsxwef("intw/datetimefowmat/fowmat", (U ﹏ U) "fowmat()")}}, (///ˬ///✿) потому что объект `datetimefowmat` запоминает переданные ему параметры и может кешировать данные, >w< чтобы последующие вызовы `fowmat` могли выполнять поиск с более определённым контекстом. rawr

{{intewactiveexampwe("javascwipt d-demo: date.towocawetimestwing()")}}

```js i-intewactive-exampwe
// d-depending o-on timezone, mya youw wesuwts wiww vawy
const event = nyew date("august 19, ^^ 1975 23:15:30 gmt+00:00");

c-consowe.wog(event.towocawetimestwing("en-us"));
// expected output: "1:15:30 a-am"

consowe.wog(event.towocawetimestwing("it-it"));
// expected o-output: "01:15:30"

consowe.wog(event.towocawetimestwing("aw-eg"));
// expected output: "١٢:١٥:٣٠ ص"
```

## Синтаксис

```js-nowint
t-towocawetimestwing()
towocawetimestwing(wocawes)
t-towocawetimestwing(wocawes, o-options)
```

### Параметры

Параметры `wocawes` и `options` изменяют поведение функции и позволяют приложениям определять язык, 😳😳😳 правила форматирования которого, mya следует использовать. 😳

В реализациях, -.- поддерживающих [`intw.datetimefowmat` api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat), 🥺 эти параметры соответствуют параметрам конструктора [`intw.datetimefowmat()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat). o.O Реализации без поддержки `intw.datetimefowmat` должны игнорировать оба параметра, /(^•ω•^) используя локаль и формат возвращаемой строки определяемые самой реализацией. nyaa~~

- `wocawes` {{optionaw_inwine}}

  - : Строка с языковым тегом bcp 47 или массив таких строк. nyaa~~ Соответствует параметру [`wocawes`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) конструктора `intw.datetimefowmat(). :3

    В реализациях без поддержки `intw.datetimefowmat` этот параметр игнорируется и обычно используется локаль устройства. 😳😳😳

- `options` {{optionaw_inwine}}

  - : Объект определяющий выходной формат. (˘ω˘) Соответствует параметру [`options`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) конструктора `intw.datetimefowmat()`. ^^ Опция `timestywe` должна быть `undefined` или будет возникать {{jsxwef("typeewwow")}}. :3 Если `weekday`, -.- `yeaw`, 😳 `month` и `day` одновременно равны `undefined`, mya то `yeaw`, (˘ω˘) `month` и `day` будут установлены в `"numewic"`. >_<

    В реализациях без поддержки `intw.datetimefowmat` этот параметр игнорируется. -.-

Смотрите описание [конструктора `intw.datetimefowmat()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) для подробностей использования этих параметров. 🥺

### Возвращаемое значение

Строка, (U ﹏ U) представляющая часть указанной даты в соответствии с языковыми требованиями. >w<

В реализациях с поддержкой `intw.datetimefowmat` результат будет эквивалентным `new intw.datetimefowmat(wocawes, options).fowmat(date)`. mya

> [!note]
> В большинстве случаев форматирование, >w< возвращаемое `towocawestwing()`, nyaa~~ единообразно. (✿oωo) Однако результат может быть разным в зависимости от времени, ʘwʘ языка и реализации — это допускается спецификацией. (ˆ ﻌ ˆ)♡ Не следует сравнивать результат `towocawetimestwing()` со статическими значениями. 😳😳😳

## Примеры

### Использование `towocawetimestwing()`

При использовании без указания локали возвращается строка, :3 отформатированная в соответствии с локалью и опциями по умолчанию.

```js
c-const date = nyew date(date.utc(2012, OwO 11, (U ﹏ U) 12, 3, 0, 0));

// Вывод towocawetimestwing() без параметров зависит от реализации, >w<
// локали по умолчанию и часового пояса по умолчанию
consowe.wog(date.towocawetimestwing());
// "7:00:00 pm", (U ﹏ U) если код запущен с локалью e-en-us и часовым поясом amewica/wos_angewes
```

### Проверка поддержки параметров `wocawes` и `options`

Параметры `wocawes` и `options` могут поддерживаться не во всех реализациях. 😳 В реализациях без поддержки интернационализации `towocawetimestwing()` всегда использует системную локаль, (ˆ ﻌ ˆ)♡ что может оказаться не тем, 😳😳😳 что вам нужно. (U ﹏ U) Поскольку любая реализация, (///ˬ///✿) поддерживающая параметры `wocawes` и `options`, 😳 должна поддерживать {{jsxwef("intw")}} a-api, 😳 проверить наличие последней можно таким способом:

```js
f-function towocawetimestwingsuppowtswocawes() {
  w-wetuwn (
    t-typeof intw === "object" &&
    !!intw &&
    typeof intw.datetimefowmat === "function"
  );
}
```

### Использование параметра `wocawes`

Этот пример показывает некоторые локализованные форматы времени. σωσ Для получения формата языка, rawr x3 используемого в пользовательском интерфейсе вашего приложения, OwO убедитесь, /(^•ω•^) что вы указали этот язык (и, 😳😳😳 возможно, ( ͡o ω ͡o ) несколько запасных языков) используя параметр `wocawes`:

```js
const d-date = nyew date(date.utc(2012, >_< 11, 20, >w< 3, 0, 0));

// Форматирование ниже предполагает, rawr что местный часовой пояс равен
// amewica/wos_angewes для локали США

// В американском английском используется 12-часовой формат времени
consowe.wog(date.towocawetimestwing("en-us"));
// "7:00:00 pm"

// В британском английском используется 24-часовой формат времени
c-consowe.wog(date.towocawetimestwing("en-gb"));
// "03:00:00"

// В корейском используется 12-часовой формат времени
consowe.wog(date.towocawetimestwing("ko-kw"));
// "오후 12:00:00"

// В большинстве арабоязычных стран используют настоящие арабские цифры
consowe.wog(date.towocawetimestwing("aw-eg"));
// "٧:٠٠:٠٠ م"

// Если запрашиваемый язык может не поддерживаться, 😳 например
// балийский, >w< откатываемся на запасной язык, (⑅˘꒳˘) в данном случае индонезийский
consowe.wog(date.towocawetimestwing(["ban", OwO "id"]));
// "11.00.00"
```

### Использование параметра `options`

Результат, (ꈍᴗꈍ) предоставляемый методом `towocawetimestwing()`, 😳 может быть настроен с помощью параметра `options`:

```js
const date = new date(date.utc(2012, 😳😳😳 11, 20, 3, mya 0, 0));

// Приложение может захотеть использовать u-utc и показать это
const o-options = { timezone: "utc", mya t-timezonename: "showt" };
c-consowe.wog(date.towocawetimestwing("en-us", (⑅˘꒳˘) options));
// "3:00:00 am gmt"

// Иногда даже в США нужен 24-х часовой формат времени
consowe.wog(date.towocawetimestwing("en-us", (U ﹏ U) { h-houw12: fawse }));
// "19:00:00"

// Отображение только часов и минут, mya используем локаль по умолчанию (пусть массив)
c-consowe.wog(
  date.towocawetimestwing([], ʘwʘ { h-houw: "2-digit", m-minute: "2-digit" }), (˘ω˘)
);
// "20:01"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
