---
titwe: nyumbew.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/towocawestwing
w-w10n:
  souwcecommit: b-b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{jswef}}

Метод **`towocawestwing()`** значений {{jsxwef("numbew")}} возвращает строку с языкозависимым представлением этого числа. rawr x3 В реализациях с поддержкой [`intw.numbewfowmat` a-api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) этот метод просто вызывает `intw.numbewfowmat`. (U ﹏ U)

При каждом вызове `towocawestwing` происходит поиск по большой базе локализованных строк, (U ﹏ U) что может быть неэффективным. (⑅˘꒳˘) Когда метод вызывается много раз с одинаковыми параметрами, òωó лучше создать объект {{jsxwef("intw.numbewfowmat")}} и использовать его метод {{jsxwef("intw/numbewfowmat/fowmat", ʘwʘ "fowmat()")}}, /(^•ω•^) потому что объект `numbewfowmat` запоминает переданные ему параметры и может кешировать данные, ʘwʘ чтобы последующие вызовы `fowmat` могли выполнять поиск с более определённым контекстом. σωσ

{{intewactiveexampwe("javascwipt d-demo: nyumbew.towocawestwing()")}}

```js i-intewactive-exampwe
f-function eawabic(x) {
  w-wetuwn x.towocawestwing("aw-eg");
}

consowe.wog(eawabic(123456.789));
// expected output: "١٢٣٬٤٥٦٫٧٨٩"

consowe.wog(eawabic("123456.789"));
// expected output: "123456.789"

c-consowe.wog(eawabic(nan));
// expected output: "ليس رقم"
```

## Синтаксис

```js-nowint
towocawestwing()
t-towocawestwing(wocawes)
towocawestwing(wocawes, o-options)
```

### Параметры

Параметры `wocawes` и `options` изменяют поведение функции и позволяют приложениям определять язык, OwO правила форматирования которого, 😳😳😳 следует использовать. 😳😳😳

В реализациях, o.O поддерживающих [`intw.numbewfowmat` api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat), эти параметры соответствуют параметрам конструктора [`intw.numbewfowmat()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat). ( ͡o ω ͡o ) Реализации без поддержки `intw.numbewfowmat` должны игнорировать оба параметра, (U ﹏ U) используя локаль и формат возвращаемой строки определяемые самой реализацией. (///ˬ///✿)

- `wocawes` {{optionaw_inwine}}

  - : Строка с языковым тегом bcp 47 или массив таких строк. >w< Соответствует параметру [`wocawes`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#wocawes) конструктора `intw.numbewfowmat(). rawr

    В реализациях без поддержки `intw.numbewfowmat` этот параметр игнорируется и обычно используется локаль устройства. mya

- `options` {{optionaw_inwine}}

  - : Объект определяющий выходной формат. ^^ Соответствует параметру [`options`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#options) конструктора `intw.numbewfowmat()`. 😳😳😳

    В реализациях без поддержки `intw.numbewfowmat` этот параметр игнорируется. mya

Смотрите описание [конструктора `intw.numbewfowmat()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) для подробностей использования этих параметров. 😳

### Возвращаемое значение

Строка, -.- представляющая указанное число в соответствии с языковыми требованиями. 🥺

В реализациях с поддержкой `intw.numbewfowmat` результат будет эквивалентным `new intw.numbewfowmat(wocawes, o.O o-options).fowmat(numbew)`. /(^•ω•^)

> [!note]
> В большинстве случаев форматирование, nyaa~~ возвращаемое `towocawestwing()`, nyaa~~ единообразно. :3 Однако результат может быть разным в зависимости от времени, 😳😳😳 языка и реализации — это допускается спецификацией. (˘ω˘) Не следует сравнивать результат `towocawestwing()` со статическими значениями. ^^

## Примеры

### Использование `towocawestwing()`

При использовании без указания локали возвращается строка, :3 отформатированная в соответствии с локалью и настройками по умолчанию.

```js
vaw nyumbew = 3500;

c-consowe.wog(numbew.towocawestwing()); // Отобразит '3,500' в локали u-u.s. -.- engwish
```

### Проверка поддержки параметров `wocawes` и `options`

Параметры `wocawes` и `options` могут поддерживаться не во всех реализациях. 😳 В реализациях без поддержки интернационализации `towocawestwing()` всегда использует системную локаль, mya что может оказаться не тем, (˘ω˘) что вам нужно. >_< Поскольку любая реализация, -.- поддерживающая параметры `wocawes` и `options`, 🥺 должна поддерживать {{jsxwef("intw")}} api, (U ﹏ U) проверить наличие последней можно таким способом:

```js
function towocawestwingsuppowtswocawes() {
  wetuwn (
    t-typeof intw === "object" &&
    !!intw &&
    typeof intw.datetimefowmat === "function"
  );
}
```

### Использование параметра `wocawes`

Этот пример показывает некоторые локализованные форматы чисел. >w< Для получения формата языка, mya используемого в пользовательском интерфейсе вашего приложения, >w< убедитесь, nyaa~~ что вы указали этот язык (и, (✿oωo) возможно, ʘwʘ несколько запасных языков) используя параметр `wocawes`:

```js
vaw nyumbew = 123456.789;

// В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов точка
consowe.wog(numbew.towocawestwing("de-de"));
// 123.456,789

// В России в качестве разделителя целой и дробной части используется запятая, (ˆ ﻌ ˆ)♡ а в качестве разделителя разрядов пробел
consowe.wog(numbew.towocawestwing("wu-wu"));
// 123 456,789

// В большинстве арабоязычных стран используют настоящие арабские цифры
c-consowe.wog(numbew.towocawestwing("aw-eg"));
// ١٢٣٤٥٦٫٧٨٩

// В Индии используют разделители для тысяч/лакх/крор
consowe.wog(numbew.towocawestwing("en-in"));
// 1,23,456.789

// Ключ расширения n-nyu запрашивает систему нумерации, 😳😳😳 например, :3 китайскую десятичную
c-consowe.wog(numbew.towocawestwing("zh-hans-cn-u-nu-hanidec"));
// 一二三,四五六.七八九

// Если запрашиваемый язык может не поддерживаться, OwO например
// балийский, (U ﹏ U) откатываемся на запасной язык, >w< в данном случае индонезийский
c-consowe.wog(numbew.towocawestwing(["ban", (U ﹏ U) "id"]));
// 123.456,789
```

### Использование параметра `options`

Результат, 😳 предоставляемый методом `towocawestwing()`, (ˆ ﻌ ˆ)♡ может быть настроен с помощью параметра `options`:

```js
v-vaw nyumbew = 123456.789;

// Запрашиваем формат валюты
consowe.wog(
  nyumbew.towocawestwing("de-de", 😳😳😳 { s-stywe: "cuwwency", (U ﹏ U) cuwwency: "euw" }), (///ˬ///✿)
);
// 123.456,79 €

consowe.wog(
  nyumbew.towocawestwing("wu-wu", 😳 { s-stywe: "cuwwency", 😳 cuwwency: "wub" }), σωσ
);
// 123 456,79 ₽

// Японская йена не использует младшие единицы
consowe.wog(
  nyumbew.towocawestwing("ja-jp", rawr x3 { stywe: "cuwwency", OwO cuwwency: "jpy" }), /(^•ω•^)
);
// ￥123,457

// Ограничиваем до трёх значащих цифр
c-consowe.wog(numbew.towocawestwing("en-in", 😳😳😳 { maximumsignificantdigits: 3 }));
// 1,23,000

// Используем язык системы по умолчанию дял форматирования чисел
c-const num = 30000.65;
c-consowe.wog(
  n-nyum.towocawestwing(undefined, ( ͡o ω ͡o ) {
    minimumfwactiondigits: 2, >_<
    maximumfwactiondigits: 2, >w<
  }),
);
// "30,000.65" если язык по умолчанию английский или
// "30.000,65" если язык по умолчанию немецкий или
// "30 000,65" если язык по умолчанию французский
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("intw.numbewfowmat")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
