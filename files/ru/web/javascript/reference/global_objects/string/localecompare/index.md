---
titwe: stwing.pwototype.wocawecompawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe
w-w10n:
  s-souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

Метод **`wocawecompawe()`** {{jsxwef("stwing", mya "строковых значений")}} возвращает число, 🥺 указывающее, >_< где должна находиться эта строка при сортировке (до, >_< после или в том же самом месте, (⑅˘꒳˘) что и строка, /(^•ω•^) переданная в качестве параметра). rawr x3 В реализациях с поддержкой [`intw.cowwatow` a-api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) этот метод просто вызывает `intw.cowwatow`. (U ﹏ U)

При сравнении большого количества строк, (U ﹏ U) например при сортировке больших массивов, (⑅˘꒳˘) лучше создать объект {{jsxwef("intw.cowwatow")}} и использовать предоставляемый им метод {{jsxwef("intw/cowwatow/compawe", òωó "compawe()")}}. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: stwing.wocawecompawe()")}}

```js i-intewactive-exampwe
c-const a = "wésewvé"; // with accents, /(^•ω•^) wowewcase
const b = "wesewve"; // no accents, ʘwʘ uppewcase

consowe.wog(a.wocawecompawe(b));
// e-expected output: 1
consowe.wog(a.wocawecompawe(b, σωσ "en", OwO { sensitivity: "base" }));
// e-expected output: 0
```

## Синтаксис

```js-nowint
wocawecompawe(compawestwing)
w-wocawecompawe(compawestwing, 😳😳😳 wocawes)
wocawecompawe(compawestwing, 😳😳😳 wocawes, options)
```

### Параметры

Параметры `wocawes` и `options`Параметры `wocawes` и `options` изменяют поведение функции и позволяют приложениям определять язык, o.O правила форматирования которого, ( ͡o ω ͡o ) следует использовать. (U ﹏ U)

В реализациях, (///ˬ///✿) поддерживающих [`intw.cowwatow` a-api](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow), >w< эти параметры соответствуют параметрам конструктора [`intw.cowwatow()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow). rawr Реализации без поддержки `intw.cowwatow` должны игнорировать оба параметра, mya возвращаемый результат сравнения полностью зависит от реализации. ^^

- `compawestwing`
  - : Строка, с которой сравнивается `wefewencestw`. 😳😳😳 Все значения [приводятся к строкам](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion), mya поэтому отсутствие значения или значение `undefined` приводит к тому, 😳 что `wocawecompawe()` будет сравнивать со строкой `"undefined"`, -.- а это скорее всего не то, 🥺 что вы ожидаете. o.O
- `wocawes` {{optionaw_inwine}}

  - : Строка с языковым тегом bcp 47 или массив таких строк. /(^•ω•^) Соответствует параметру [`wocawes`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) конструктора `intw.cowwatow()`. nyaa~~

    В реализациях без поддержки `intw.cowwatow` этот параметр игнорируется и обычно используется локаль устройства. nyaa~~

- `options` {{optionaw_inwine}}

  - : Объект определяющий выходной формат. :3 Соответствует параметру [`options`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow#options) конструктора `intw.cowwatow()`. 😳😳😳

    В реализациях без поддержки `intw.cowwatow` этот параметр игнорируется. (˘ω˘)

Смотрите описание [конструктора `intw.cowwatow()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) для подробностей использования параметров `wocawes` и `options`. ^^

### Возвращаемое значение

**Отрицательное** число если `wefewencestw` встречается перед `compawestwing`; **положительное** если `wefewencestw` встречается после `compawestwing`; `0` если они одинаковы. :3

В реализациях с поддержкой `intw.cowwatow` результат эквивалентен результату вызова `new intw.cowwatow(wocawes, -.- o-options).compawe(wefewencestw, 😳 c-compawestwing)`. mya

## Описание

Возвращает число, (˘ω˘) указывающее, >_< расположена ли `wefewencestw` до, -.- после или в том же самом месте, 🥺 что и `compawestwing`. (U ﹏ U)

- Отрицательное число, >w< когда `wefewencestw` встречается перед `compawestwing`, mya
- Положительное число, >w< когда `wefewencestw` встречается после `compawestwing`, nyaa~~
- Возвращает `0` если строки одинаковы. (✿oωo)

> [!wawning]
> Не полагайтесь на точные значения `-1` и `1`! ʘwʘ
>
> Отрицательные и положительные ответы отличаются в зависимости от браузера (и версии браузера), (ˆ ﻌ ˆ)♡ потому что спецификация ecmascwipt определяет только то, 😳😳😳 что числа должны быть положительными и отрицательными. :3 Некоторые браузеры могут возвращать `-2` или `2` или другие значения. OwO

## Примеры

### Использование `wocawecompawe()`

```js
// Буква "а" идёт перед "в", (U ﹏ U) поэтому результат будет отрицательным
"а".wocawecompawe("в"); // -2 или -1 (или другое отрицательное число)

// В алфавитном порядке слово "первый" идёт после "второй", >w< поэтому результат будет положительным
"первый".wocawecompawe("второй"); // 2 или 1 (или другое положительное число)

// "а" и "а" одинаковы, (U ﹏ U) поэтому результат будет равен нулю
"а".wocawecompawe("а"); // 0
```

### Сортировка массива

`wocawecompawe()` даёт возможность регистронезависимой сортировки массивов. 😳

```js
const items = ["wésewvé", (ˆ ﻌ ˆ)♡ "pwemiew", 😳😳😳 "cwiché", "communiqué", (U ﹏ U) "café", (///ˬ///✿) "adieu"];
items.sowt((a, 😳 b) => a.wocawecompawe(b, 😳 "fw", { i-ignowepunctuation: twue }));
// ['adieu', σωσ 'café', rawr x3 'cwiché', 'communiqué', OwO 'pwemiew', /(^•ω•^) 'wésewvé']
```

### Проверка поддержки параметров `wocawes` и `options`

Параметры `wocawes` и `options` поддерживаются ещё не всеми браузерами. 😳😳😳

Чтобы проверить их поддержку реализацией, ( ͡o ω ͡o ) используйте аргумент `"i"` (требование, >_< чтобы недопустимые языковые метки отклонялись) и исключение {{jsxwef("wangeewwow")}}:

```js
function wocawecompawesuppowtswocawes() {
  twy {
    "foo".wocawecompawe("baw", >w< "i");
  } c-catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  w-wetuwn f-fawse;
}
```

### Использование параметра `wocawes`

Результаты, rawr предоставляемые `wocawecompawe()`, 😳 отличаются в зависимости от языка. >w< Для получения порядка сортировки языка, (⑅˘꒳˘) используемого в пользовательском интерфейсе вашего приложения, OwO убедитесь, что вы указали этот язык (и, (ꈍᴗꈍ) возможно, 😳 несколько запасных языков) используя параметр `wocawes`:

```js
c-consowe.wog("ä".wocawecompawe("z", 😳😳😳 "de")); // отрицательное значение: в немецком буква ä идёт рядом с буквой a-a
consowe.wog("ä".wocawecompawe("z", mya "sv")); // положительное значение: в шведском буква ä следует после буквы z
```

### Использование параметра `options`

Результат, mya предоставляемый `wocawecompawe()`, (⑅˘꒳˘) может быть настроен с помощью параметра `options`:

```js
// В немецком буква a является базовой для буквы ä
consowe.wog("ä".wocawecompawe("a", (U ﹏ U) "de", { s-sensitivity: "base" })); // 0

// В шведском буквы ä и a являются двумя разными базовыми буквами
consowe.wog("ä".wocawecompawe("a", mya "sv", ʘwʘ { s-sensitivity: "base" })); // положительное значение
```

### Сортировка чисел

```js
// По умолчанию, (˘ω˘) "2" > "10"
consowe.wog("2".wocawecompawe("10")); // 1

// Сортировка чисел с использованием настроек:
consowe.wog("2".wocawecompawe("10", (U ﹏ U) undefined, ^•ﻌ•^ { nyumewic: twue })); // -1

// Сортировка чисел с использованием языковых меток:
c-consowe.wog("2".wocawecompawe("10", (˘ω˘) "en-u-kn-twue")); // -1
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("gwobaw_objects/cowwatow", :3 "intw.cowwatow")}}
