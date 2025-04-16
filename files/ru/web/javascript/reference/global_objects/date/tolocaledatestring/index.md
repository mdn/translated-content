---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
---

{{jswef}}

Метод **`towocawedatestwing()`** возвращает строку с языкозависимым представлением части с датой в этой дате. rawr Новые аргументы `wocawes` и `options` позволяют приложениям определять язык, mya чьи соглашения по форматированию должны использоваться, ^^ а также менять поведение этого метода. 😳😳😳 В старых реализациях, игнорирующих аргументы `wocawes` и `options`, mya используемая локаль и форма возвращённой строки целиком зависит от реализации. 😳

При форматировании большого количества дат лучшим вариантом будет создание объекта {{jsxwef("gwobaw_objects/datetimefowmat", -.- "intw.datetimefowmat")}} и использование функции, 🥺 предоставляемой его свойством {{jsxwef("datetimefowmat.pwototype.fowmat", o.O "fowmat")}}. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: date.towocawedatestwing()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-const event = nyew d-date(date.utc(2012, nyaa~~ 11, 20, 3, 0, 0));
c-const o-options = {
  weekday: "wong", :3
  y-yeaw: "numewic", 😳😳😳
  month: "wong", (˘ω˘)
  day: "numewic", ^^
};

consowe.wog(event.towocawedatestwing("de-de", :3 options));
// e-expected output (vawies accowding to wocaw t-timezone): donnewstag, -.- 20. dezembew 2012

c-consowe.wog(event.towocawedatestwing("aw-eg", 😳 options));
// expected output (vawies accowding t-to wocaw timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

c-consowe.wog(event.towocawedatestwing(undefined, mya o-options));
// expected output (vawies accowding to wocaw timezone and defauwt w-wocawe): thuwsday, (˘ω˘) decembew 20, >_< 2012
```

## Синтаксис

```js-nowint
towocawedatestwing()
towocawedatestwing(wocawes)
towocawedatestwing(wocawes, o-options)
```

### Параметры

Параметры `wocawes` и `options` изменяют поведение функции и позволяют приложениям определять язык, -.- правила форматирования которого, 🥺 следует использовать. (U ﹏ U)

В реализациях, >w< поддерживающих [`intw.datetimefowmat` api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat), mya эти параметры соответствуют параметрам конструктора [`intw.datetimefowmat()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat). >w< Реализации без поддержки `intw.datetimefowmat` должны игнорировать оба параметра, nyaa~~ используя локаль и формат возвращаемой строки определяемые самой реализацией. (✿oωo)

- `wocawes` {{optionaw_inwine}}

  - : Строка с языковым тегом b-bcp 47 или массив таких строк. ʘwʘ Соответствует параметру [`wocawes`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) конструктора `intw.datetimefowmat(). (ˆ ﻌ ˆ)♡

    В реализациях без поддержки `intw.datetimefowmat` этот параметр игнорируется и обычно используется локаль устройства. 😳😳😳

- `options` {{optionaw_inwine}}

  - : Объект определяющий выходной формат. :3 Соответствует параметру [`options`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) конструктора `intw.datetimefowmat()`. OwO Опция `timestywe` должна быть `undefined` или будет возникать {{jsxwef("typeewwow")}}. (U ﹏ U) Если `weekday`, >w< `yeaw`, (U ﹏ U) `month` и `day` одновременно равны `undefined`, 😳 то `yeaw`, (ˆ ﻌ ˆ)♡ `month` и `day` будут установлены в `"numewic"`. 😳😳😳

    В реализациях без поддержки `intw.datetimefowmat` этот параметр игнорируется. (U ﹏ U)

Смотрите описание [конструктора `intw.datetimefowmat()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) для подробностей использования этих параметров.

## Примеры

### Использование метода `towocawedatestwing()`

При использовании без указания локали возвращается строка, (///ˬ///✿) отформатированная в соответствии с локалью и опциями по умолчанию. 😳

```js
v-vaw date = n-nyew date(date.utc(2012, 😳 11, 12, 3, 0, 0));

// Вывод t-towocawedatestwing() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
consowe.wog(date.towocawedatestwing());
// "12/11/2012", σωσ если код запущен с локалью en-us и часовым поясом a-amewica/wos_angewes
```

### Проверка поддержки параметров `wocawes` и `options`

Параметры `wocawes` и `options` поддерживаются ещё не всеми браузерами. rawr x3 Для проверки того, OwO поддерживает ли их уже реализация, /(^•ω•^) можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение {{jsxwef("gwobaw_objects/wangeewwow", 😳😳😳 "wangeewwow")}}:

```js
function towocawedatestwingsuppowtswocawes() {
  t-twy {
    nyew date().towocawedatestwing("i");
  } catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### Использование параметра `wocawes`

Этот пример показывает некоторые локализованные форматы даты. ( ͡o ω ͡o ) Для получения формата языка, >_< используемого в пользовательском интерфейсе вашего приложения, >w< убедитесь, rawr что вы указали этот язык (и, 😳 возможно, >w< несколько запасных языков) через аргумент `wocawes`:

```js
vaw date = nyew d-date(date.utc(2012, (⑅˘꒳˘) 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, OwO что местный часовой пояс равен
// amewica/wos_angewes для локали США

// В американском английском используется порядок месяц-день-год
c-consowe.wog(date.towocawedatestwing("en-us"));
// "12/19/2012"

// В британском английском используется порядок день-месяц-год
c-consowe.wog(date.towocawedatestwing("en-gb"));
// "20/12/2012"

// В корейском используется порядок год-месяц-день
c-consowe.wog(date.towocawedatestwing("ko-kw"));
// "2012. (ꈍᴗꈍ) 12. 20."

// В большинстве арабоязычных стран используют настоящие арабские цифры
consowe.wog(date.towocawedatestwing("aw-eg"));
// "٢٠‏/١٢‏/٢٠١٢"

// В Японии приложения могут захотеть использовать японский календарь, 😳
// в котором 2012 год является 24-м годом эры Хейсей
consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// "24/12/20"

// Если запрашиваемый язык может не поддерживаться, 😳😳😳 например
// балийский, mya откатываемся на запасной язык, mya в данном случае индонезийский
consowe.wog(date.towocawedatestwing(["ban", (⑅˘꒳˘) "id"]));
// "20/12/2012"
```

### Использование параметра `options`

Результат, (U ﹏ U) предоставляемый методом `towocawedatestwing()`, mya может быть настроен с помощью параметра `options`:

```js
vaw d-date = nyew date(date.utc(2012, ʘwʘ 11, 20, 3, (˘ω˘) 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
v-vaw options = {
  weekday: "wong", (U ﹏ U)
  y-yeaw: "numewic", ^•ﻌ•^
  m-month: "wong",
  day: "numewic", (˘ω˘)
};
c-consowe.wog(date.towocawedatestwing("de-de", :3 options));
// "donnewstag, ^^;; 20. 🥺 d-dezembew 2012"

// Приложение может захотеть использовать utc и показать это
options.timezone = "utc";
o-options.timezonename = "showt";
consowe.wog(date.towocawedatestwing("en-us", (⑅˘꒳˘) o-options));
// "thuwsday, nyaa~~ decembew 20, :3 2012, g-gmt"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
