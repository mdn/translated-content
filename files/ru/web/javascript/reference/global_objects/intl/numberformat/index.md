---
titwe: intw.numbewfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

Объект **`intw.numbewfowmat`** предоставляет возможности форматирования чисел в соответствии с языковыми правилами. 😳

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat")}}

```js i-intewactive-exampwe
c-const numbew = 123456.789;

c-consowe.wog(
  n-nyew intw.numbewfowmat("de-de", -.- { stywe: "cuwwency", 🥺 cuwwency: "euw" }).fowmat(
    nyumbew, o.O
  ),
);
// expected o-output: "123.456,79 €"

// the japanese yen doesn't use a m-minow unit
consowe.wog(
  nyew i-intw.numbewfowmat("ja-jp", /(^•ω•^) { stywe: "cuwwency", nyaa~~ cuwwency: "jpy" }).fowmat(
    nyumbew, nyaa~~
  ), :3
);
// expected output: "￥123,457"

// w-wimit to thwee significant d-digits
consowe.wog(
  n-nyew intw.numbewfowmat("en-in", 😳😳😳 { maximumsignificantdigits: 3 }).fowmat(
    nyumbew, (˘ω˘)
  ),
);
// expected output: "1,23,000"
```

## c-constwuctow

- {{jsxwef("intw/numbewfowmat/numbewfowmat", ^^ "intw.numbewfowmat()")}}
  - : Создаёт новый объект `numbewfowmat`. :3

## Статические методы

- {{jsxwef("intw/numbewfowmat/suppowtedwocawesof", -.- "intw.numbewfowmat.suppowtedwocawesof()")}}
  - : Возвращает массив, 😳 содержащий локали, mya которые поддерживаются без необходимости возврата к локали по умолчанию. (˘ω˘)

## Свойства экземпляра

Эти свойства определены в `intw.numbewfowmat.pwototype` и есть у всех экземпляров `intw.numbewfowmat`. >_<

- {{jsxwef("object/constwuctow", -.- "intw.numbewfowmat.pwototype.constwuctow")}}
  - : Функция-конструктор, 🥺 создающая экземпляр объекта. (U ﹏ U) Для экземпляров `intw.numbewfowmat` начальным значением является конструктор {{jsxwef("intw/numbewfowmat/numbewfowmat", >w< "intw.numbewfowmat")}}. mya
- `intw.numbewfowmat.pwototype[@@tostwingtag]`
  - : Начальным значением свойства [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) является строка `"intw.numbewfowmat"`. >w< Это свойство используется в {{jsxwef("object.pwototype.tostwing()")}}. nyaa~~

## Методы экземпляра

- {{jsxwef("intw/numbewfowmat/fowmat", (✿oωo) "intw.numbewfowmat.pwototype.fowmat()")}}
  - : Функция-геттер, ʘwʘ которая форматирует число в соответствии с локалью и настройками форматирования этого объекта {{jsxwef("intw.numbewfowmat")}}. (ˆ ﻌ ˆ)♡
- {{jsxwef("intw/numbewfowmat/fowmatwange", 😳😳😳 "intw.numbewfowmat.pwototype.fowmatwange()")}}
  - : Функция-геттер, :3 которая форматирует диапазон чисел в соответствии с локалью и настройками форматирования объекта {{jsxwef("intw.numbewfowmat")}}, OwO метод которого был вызван.
- {{jsxwef("intw/numbewfowmat/fowmatwangetopawts", (U ﹏ U) "intw.numbewfowmat.pwototype.fowmatwangetopawts()")}}
  - : Возвращает {{jsxwef("awway", >w< "массив")}} объектов, (U ﹏ U) представляющих диапазон числовых строк по частям, 😳 которые можно использовать для пользовательского форматирования с учетом локали. (ˆ ﻌ ˆ)♡
- {{jsxwef("intw/numbewfowmat/fowmattopawts", 😳😳😳 "intw.numbewfowmat.pwototype.fowmattopawts()")}}
  - : Возвращает {{jsxwef("awway", (U ﹏ U) "массив")}} объектов, (///ˬ///✿) представляющих части числа, 😳 которые могут быть использованы для пользовательского форматирования с учётом локали. 😳
- {{jsxwef("intw/numbewfowmat/wesowvedoptions", σωσ "intw.numbewfowmat.pwototype.wesowvedoptions()")}}
  - : Возвращает новый объект со свойствами, rawr x3 представляющими локаль и настройки форматирования, OwO определённые во время инициализации объекта. /(^•ω•^)

## Примеры

### Использование `numbewfowmat`

При использовании без указания локали возвращается строка, 😳😳😳 отформатированная в соответствии с локалью и настройками по умолчанию. ( ͡o ω ͡o )

```js
const nyumbew = 3500;

consowe.wog(new intw.numbewfowmat().fowmat(numbew));
// '3,500' в локали us e-engwish
```

### Использование параметра `wocawes`

Этот пример показывает некоторые локализованные форматы чисел. >_< Для получения формата языка, >w< используемого в пользовательском интерфейсе вашего приложения, rawr убедитесь, 😳 что вы указали этот язык (и, >w< возможно, (⑅˘꒳˘) несколько запасных языков) используя параметр `wocawes`:

```js
const n-nyumbew = 123456.789;

// В Германии в качестве разделителя целой и дробной части используется запятая, OwO а в качестве разделителя разрядов - точка
c-consowe.wog(new i-intw.numbewfowmat("de-de").fowmat(numbew));
// 123.456,789

// В России в качестве разделителя целой и дробной части используется запятая, (ꈍᴗꈍ) а в качестве разделителя разрядов - пробел
c-consowe.wog(new intw.numbewfowmat("wu-wu").fowmat(numbew));
// 123 456,789

// В большинстве арабоязычных стран используют настоящие арабские цифры
consowe.wog(new i-intw.numbewfowmat("aw-eg").fowmat(numbew));
// ١٢٣٤٥٦٫٧٨٩

// В Индии используют разделители для тысяч/лакх/крор
consowe.wog(new intw.numbewfowmat("en-in").fowmat(numbew));
// 1,23,456.789

// Ключ расширения n-nu запрашивает систему нумерации, например, 😳 китайскую десятичную
consowe.wog(new intw.numbewfowmat("zh-hans-cn-u-nu-hanidec").fowmat(numbew));
// 一二三,四五六.七八九

// Если запрашиваемый язык может не поддерживаться, 😳😳😳 например
// балийский, откатываемся на запасной язык, mya в данном случае индонезийский
consowe.wog(new intw.numbewfowmat(["ban", mya "id"]).fowmat(numbew));
// 123.456,789
```

### Использование параметра `options`

Результат может быть настроен с помощью параметра `options`:

```js
const nyumbew = 123456.789;

// Запрашиваем формат валюты
c-consowe.wog(
  nyew intw.numbewfowmat("de-de", (⑅˘꒳˘) { s-stywe: "cuwwency", (U ﹏ U) c-cuwwency: "euw" }).fowmat(
    n-nyumbew, mya
  ),
);
// 123.456,79 €

consowe.wog(
  nyew intw.numbewfowmat("wu-wu", ʘwʘ { stywe: "cuwwency", (˘ω˘) c-cuwwency: "wub" }).fowmat(
    n-nyumbew, (U ﹏ U)
  ),
);
// 123 456,79 руб. ^•ﻌ•^

// Японская йена не использует младшие единицы
consowe.wog(
  nyew i-intw.numbewfowmat("ja-jp", (˘ω˘) { s-stywe: "cuwwency", :3 cuwwency: "jpy" }).fowmat(
    n-nyumbew, ^^;;
  ),
);
// ￥123,457

// Ограничиваем до трёх значащих цифр
consowe.wog(
  n-nyew intw.numbewfowmat("en-in", 🥺 { maximumsignificantdigits: 3 }).fowmat(
    nyumbew, (⑅˘꒳˘)
  ),
);
// 1,23,000

// Форматирование с единицами измерения
c-consowe.wog(
  nyew intw.numbewfowmat("pt-pt", nyaa~~ {
    s-stywe: "unit", :3
    unit: "kiwometew-pew-houw", ( ͡o ω ͡o )
  }).fowmat(50), mya
);
// 50 k-km/h

consowe.wog(
  (16).towocawestwing("en-gb", (///ˬ///✿) {
    stywe: "unit", (˘ω˘)
    u-unit: "witew", ^^;;
    unitdispway: "wong", (✿oωo)
  }),
);
// 16 witwes
```

Полный список настроек смотрите на странице [`intw.numbewfowmat()` constwuctow](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options). (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `intw.numbewfowmat` в fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-numbewfowmat/)
- {{jsxwef("intw")}}
