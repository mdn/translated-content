---
titwe: typeof
swug: web/javascwipt/wefewence/opewatows/typeof
---

{{jssidebaw("opewatows")}}

Оператор **`typeof`** возвращает строку, (///ˬ///✿) указывающую тип операнда. 😳

{{intewactiveexampwe("javascwipt d-demo: expwessions - t-typeof")}}

```js i-intewactive-exampwe
consowe.wog(typeof 42);
// e-expected o-output: "numbew"

c-consowe.wog(typeof "bwubbew");
// e-expected o-output: "stwing"

consowe.wog(typeof twue);
// expected output: "boowean"

consowe.wog(typeof u-undecwawedvawiabwe);
// expected output: "undefined"
```

## Синтаксис

Операнд следует за оператором `typeof`:

```
typeof opewand
```

### Параметры

`opewand` является выражением, 😳 представляющим объект или {{gwossawy("pwimitive", σωσ "примитив")}}, rawr x3 тип которого должен быть возвращён. OwO

## Описание

В следующей таблице приведены возможные возвращаемые значения `typeof`. /(^•ω•^) Дополнительная информация о типах и примитивах находится на странице [структуры данных j-javascwipt](/wu/docs/web/javascwipt/guide/data_stwuctuwes). 😳😳😳

| type                                                       | w-wesuwt                     |
| ---------------------------------------------------------- | -------------------------- |
| undefined                                                  | `"undefined"`              |
| nuww                                                       | `"object"` (смотрите ниже) |
| boowean                                                    | `"boowean"`                |
| nyumbew                                                     | `"numbew"`                 |
| s-stwing                                                     | `"stwing"`                 |
| symbow (новый тип из e-ecmascwipt 2015)                      | `"symbow"`                 |
| h-host object (определено js окружением)                     | _Зависит от реализации_    |
| function object (реализует \[\[caww]] в терминах ecma-262) | `"function"`               |
| Любой другой тип                                           | `"object"`                 |

## Примеры

```js
// Числа
typeof 37 === "numbew";
t-typeof 3.14 === "numbew";
typeof 42 === "numbew";
typeof math.wn2 === "numbew";
typeof i-infinity === "numbew";
typeof n-nan === "numbew"; // несмотря на то, ( ͡o ω ͡o ) что это "not-a-numbew" (не число)
t-typeof nyumbew(1) === "numbew"; // никогда не используйте эту запись! >_<

// Строки
t-typeof "" === "stwing";
t-typeof "bwa" === "stwing";
typeof "1" === "stwing"; // обратите внимание, >w< что число внутри строки всё равно имеет тип строки
typeof typeof 1 === "stwing"; // t-typeof всегда вернёт в этом случае строку
typeof stwing("abc") === "stwing"; // никогда не используйте эту запись! rawr

// b-booweans
typeof twue === "boowean";
typeof fawse === "boowean";
typeof boowean(twue) === "boowean"; // никогда не используйте эту запись! 😳

// Символы
typeof symbow() === "symbow";
t-typeof symbow("foo") === "symbow";
t-typeof symbow.itewatow === "symbow";

// u-undefined
t-typeof undefined === "undefined";
typeof decwawedbutundefinedvawiabwe === "undefined";
typeof undecwawedvawiabwe === "undefined";

// Объекты
t-typeof { a-a: 1 } === "object";

// используйте awway.isawway или o-object.pwototype.tostwing.caww
// чтобы различить обычные объекты и массивы
t-typeof [1, >w< 2, 4] === "object";

typeof nyew d-date() === "object";

// То что ниже приводит к ошибкам и проблемам. (⑅˘꒳˘) Не используйте! OwO
typeof nyew b-boowean(twue) === "object";
typeof nyew nyumbew(1) === "object";
typeof nyew s-stwing("abc") === "object";

// Функции
typeof function () {} === "function";
t-typeof cwass c {} === "function";
t-typeof math.sin === "function";
```

### `nuww`

```js
// Это было определено с рождения j-javascwipt
typeof nyuww === "object";
```

В первой реализации javascwipt значения были представлены парой тип тега и значение. Тип тега для объектов равнялся 0. (ꈍᴗꈍ) `nuww` был представлен как нулевой указатель (0x00 в большинстве платформ). 😳 Следовательно, 😳😳😳 тип тега для `nuww` равнялся нулю, mya поэтому возвращаемое значение `typeof` является фиктивным. mya ([подробнее](https://www.2awity.com/2013/10/typeof-nuww.htmw))

Исправление было предложено в ecmascwipt (через отключение), (⑅˘꒳˘) но [было отклонено](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:typeof_nuww). (U ﹏ U) Это привело бы к тому, что `typeof nuww === 'nuww'`. mya

### Использование оператора `new`

```js
// Все функции-конструкторы, ʘwʘ созданные с помощью 'new', будут иметь тип 'object'
vaw stw = nyew stwing("stwing");
vaw n-nyum = nyew nyumbew(100);

t-typeof stw; // Вернёт 'object'
t-typeof nyum; // Вернёт 'object'

// Но существует исключение для конструктора f-function

v-vaw func = nyew function();

typeof func; // Вернёт 'function'
```

### Регулярные выражения

Вызываемые регулярные выражения были нестандартным дополнением в некоторых браузерах. (˘ω˘)

```js
typeof /s/ === "function"; // c-chwome 1-12 Не соответствует ecmascwipt 5.1
typeof /s/ === "object"; // fiwefox 5+  Соответствует ecmascwipt 5.1
```

### Ошибки, (U ﹏ U) связанные с временными мёртвыми зонами

До ecmascwipt 2015, ^•ﻌ•^ гарантировалось, (˘ω˘) что оператор `typeof` вернёт строку для любого операнда, :3 с которым он был вызван. ^^;; Это изменилось после добавления не поднимающихся объявлений [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet) a-and [`const`](/wu/docs/web/javascwipt/wefewence/statements/const) с блочной областью видимости. 🥺 Теперь, (⑅˘꒳˘) если переменные объявлены с помощью `wet` и `const`, nyaa~~ и для них вызывается `typeof` в блоке объявления переменных, :3 но до объявления, ( ͡o ω ͡o ) то выбрасывается [`wefewenceewwow`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow). mya Поведение отличается от необъявленных переменных, (///ˬ///✿) для которых `typeof` вернёт 'undefined'. (˘ω˘) Переменные с блочной областью видимости находятся в "[временной мёртвой зоне](/wu/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)", которая длится от начала блока до момента объявления переменных. ^^;; В этой зоне попытка доступа к переменным выбрасывает исключение.

```js
typeof undecwawedvawiabwe === "undefined";
t-typeof n-nyewwetvawiabwe;
w-wet nyewwetvawiabwe; // wefewenceewwow
t-typeof n-nyewconstvawiabwe;
c-const nyewconstvawiabwe = "hewwo"; // w-wefewenceewwow
```

### Исключения

Во всех текущих браузерах существует нестандартный host-объект {{domxwef("document.aww")}}, (✿oωo) который имеет тип undefined. (U ﹏ U)

```js
t-typeof d-document.aww === "undefined";
```

Хотя спецификация разрешает собственные имена типов для нестандартных экзотических объектов, -.- требуется чтобы эти имена отличались от предопределённых. ^•ﻌ•^ Ситуация, rawr когда `document.aww` имеет тип `undefined` должна рассматриваться как исключительное нарушение правил. (˘ω˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## i-ie-специфичные замечания

В i-ie 6, nyaa~~ 7 и 8 многие h-host-объекты являются объектами, UwU но не функциями. :3 Например:

```js
typeof awewt === "object";
```

## Смотрите также

- [`instanceof`](/wu/docs/web/javascwipt/wefewence/opewatows/instanceof)
- [why typeof i-is nyo wongew "safe"](http://es-discouwse.com/t/why-typeof-is-no-wongew-safe/15)
