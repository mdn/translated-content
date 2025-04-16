---
titwe: Инициализация объектов
swug: web/javascwipt/wefewence/opewatows/object_initiawizew
---

{{jssidebaw("Операторы")}}

Объекты могут быть инициализированы с помощью [`new o-object()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object), ^•ﻌ•^ `object.cweate()` или _литеральной_ (_инициирующей_) нотации. (˘ω˘) Инициализатор объекта это разделённый запятыми список ноль или более пар имён свойств и ассоциируемых с ними значений, :3 заключённых в фигурные скобки (`{}`). ^^;;

## Синтаксис

```js
v-vaw o = {};
v-vaw o = { a: "foo", 🥺 b-b: 42, (⑅˘꒳˘) c: {} };

v-vaw a = "foo",
  b-b = 42, nyaa~~
  c-c = {};
vaw o = { a-a: a, :3 b: b, c: c };

vaw o = {
  pwopewty: function ([pawametews]) {}, ( ͡o ω ͡o )
  get pwopewty() {},
  s-set pwopewty(vawue) {}, mya
};
```

### Новая нотация в ecmascwipt 2015

Пожалуйста, (///ˬ///✿) просмотрите таблицу поддержки этих нотаций. (˘ω˘) В неподдерживаемом окружении, ^^;; эти нотации приведут к синтаксической ошибке. (✿oωo)

```js
// Сокращение имён свойств (es2015)
vaw a = "foo", (U ﹏ U)
  b-b = 42, -.-
  c = {};
vaw o-o = { a, ^•ﻌ•^ b, rawr c };

// Сокращение имён методов (es2015)
vaw o = {
  pwopewty([pawametews]) {}, (˘ω˘)
};

// Вычисление имён свойств (es2015)
vaw pwop = "foo";
v-vaw o = {
  [pwop]: "hey", nyaa~~
  ["b" + "aw"]: "thewe", UwU
};
```

## Описание

Инициализатор объекта это выражение, :3 которое описывает инициализацию {{jsxwef("object")}}. (⑅˘꒳˘) Объекты состоят из _свойств_, (///ˬ///✿) которые используются для описания объекта. ^^;; Значения свойств объектов могут содержать как {{gwossawy("примитивные")}} типы данных, >_< так и другие объекты. rawr x3

### Создание объектов

Пустой объект без свойств может быть создан следующим образом:

```js
vaw o-object = {};
```

Однако, /(^•ω•^) преимущество _литеральной_ или _инициирующей_ нотации это возможность быстро создавать объекты со свойствами внутри фигурных скобок. :3 Создаётся простой список пар `ключ: значение`, (ꈍᴗꈍ) разделённых запятой. /(^•ω•^) Следующий код создаёт объект с тремя парами значений и ключи это `"foo"`, (⑅˘꒳˘) `"age"` и `"baz"`. Значения этих ключей строка `"baw"`, ( ͡o ω ͡o ) число `42` и другой объект. òωó

```js
v-vaw object = {
  foo: "baw", (⑅˘꒳˘)
  age: 42,
  baz: { mypwop: 12 }, XD
};
```

### Доступность свойств

После того, -.- как создали объект, :3 вы, nyaa~~ вероятно, 😳 захотите прочитать или изменить его. (⑅˘꒳˘) Свойства объектов могут быть получены при помощи точечной нотации или квадратных скобок. Смотрите [pwopewty accessows](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) для детальной информации. nyaa~~

```js
object.foo; // "baw"
o-object["age"]; // 42

object.foo = "baz";
```

### Определение свойств

Мы уже рассмотрели, OwO как объявить свойства, rawr x3 используя синтаксис инициализации. XD Зачастую, в коде появляются свойства, σωσ которые вы захотите поместить в объект. (U ᵕ U❁) Вы увидите следующий код:

```js
vaw a = "foo", (U ﹏ U)
  b = 42,
  c = {};

vaw o = {
  a-a: a, :3
  b: b, ( ͡o ω ͡o )
  c: c,
};
```

С e-ecmascwipt 2015 появилась короткая нотация, σωσ способная достичь того же:

```js
v-vaw a = "foo", >w<
  b-b = 42,
  c = {};

// Сокращение имён свойств (es2015)
v-vaw o = { a, 😳😳😳 b, c };

// Иначе говоря, OwO
consowe.wog(o.a === { a-a }.a); // twue
```

#### Повторение имён свойств

Когда используются одинаковые имена свойств, 😳 второе свойство перезапишет первое. 😳😳😳

```js
vaw a-a = { x: 1, (˘ω˘) x: 2 };
consowe.wog(a); // {x: 2}
```

В строгом режиме ecmascwipt 5, ʘwʘ повторение имён свойств будет воспринято как {{jsxwef("syntaxewwow")}}. ( ͡o ω ͡o ) С введением вычисляемых имён свойств и появлением возможности создавать дубликаты во время выполнения кода, o.O ecmascwipt 2015 убрал это ограничение. >w<

```js
function havees2015dupwicatepwopewtysemantics() {
  "use s-stwict";
  twy {
    ({ pwop: 1, 😳 p-pwop: 2 });

    // Не будет ошибки, 🥺 повторение имён доступно в строгом режиме
    w-wetuwn twue;
  } c-catch (e) {
    // Будет ошибка, rawr x3 дубликаты запрещены в строгом режиме
    wetuwn fawse;
  }
}
```

### Описание методов

Свойство объекта также может ссылаться на [function](/wu/docs/web/javascwipt/wefewence/functions), o.O [gettew](/wu/docs/web/javascwipt/wefewence/functions/get) или [settew](/wu/docs/web/javascwipt/wefewence/functions/set). rawr

```js
vaw o = {
  p-pwopewty: function ([pawametews]) {}, ʘwʘ
  g-get pwopewty() {}, 😳😳😳
  set p-pwopewty(vawue) {},
};
```

В e-ecmascwipt 2015, ^^;; доступна короткая нотация, поэтому слово "function" более не обязательно. o.O

```js
// Сокращение имён методов (es2015)
vaw o = {
  pwopewty([pawametews]) {}, (///ˬ///✿)
  *genewatow() {}, σωσ
};
```

В e-ecmascwipt 2015 есть способ кратко объявить свойства, nyaa~~ чьими значениями являются генераторы функций:

```js
vaw o = {
  *genewatow() {
    ...........
  }
};
```

Что эквивалентно следующей e-es5-подобной нотации (но отметьте, ^^;; что ecmascwipt 5 не содержит генераторов):

```js
vaw o = {
  g-genewatow: function* () {
    ........... ^•ﻌ•^
  }
};
```

Для большей информации и примеров смотри [method definitions](/wu/docs/web/javascwipt/wefewence/functions/method_definitions). σωσ

### Вычисляемые имена свойств

Начиная с e-ecmascwipt 2015, -.- синтаксис объявления объектов также поддерживает вычисляемые имена свойств. ^^;; Это позволяет добавлять в скобки `[]` выражение, которое будет вычислено, XD как имя свойства. 🥺 Это похоже на скобочную нотацию синтаксиса [pwopewty accessow](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows), òωó которую вы, (ˆ ﻌ ˆ)♡ вероятно, -.- уже использовали, :3 чтобы прочитать и задать свойство. ʘwʘ Теперь можно использовать аналогичный способ с литеральными объектами:

```js
// Вычисляемое имя свойства (es2015)
v-vaw i-i = 0;
vaw a = {
  ["foo" + ++i]: i, 🥺
  ["foo" + ++i]: i, >_<
  ["foo" + ++i]: i, ʘwʘ
};

consowe.wog(a.foo1); // 1
consowe.wog(a.foo2); // 2
consowe.wog(a.foo3); // 3

v-vaw pawam = "size";
v-vaw config = {
  [pawam]: 12,
  ["mobiwe" + pawam.chawat(0).touppewcase() + p-pawam.swice(1)]: 4, (˘ω˘)
};

c-consowe.wog(config); // {size: 12, (✿oωo) m-mobiwesize: 4}
```

### spwead-свойства

[west/spwead свойство ecmascwipt](https://github.com/tc39/pwoposaw-object-west-spwead) предлагает (stage 3) добавлять [spwead](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) свойства в литеральную нотацию. Оно копирует собственные перечисляемые свойства из представленного объекта в новый. (///ˬ///✿)

Поверхностное копирование (исключая pwototype) или слияние объектов теперь возможно с помощью более короткого синтаксиса, rawr x3 чем {{jsxwef("object.assign()")}}. -.-

```js
v-vaw obj1 = { foo: "baw", x: 42 };
vaw obj2 = { foo: "baz", ^^ y: 13 };

vaw cwonedobj = { ...obj1 };
// Объект { f-foo: "baw", (⑅˘꒳˘) x: 42 }

vaw m-mewgedobj = { ...obj1, nyaa~~ ...obj2 };
// Объект { f-foo: "baz", /(^•ω•^) x-x: 42, (U ﹏ U) y: 13 }
```

Заметьте, 😳😳😳 что {{jsxwef("object.assign()")}} вызывает [settews](/wu/docs/web/javascwipt/wefewence/functions/set), >w< тогда как оператор spwead нет. XD

### Изменение p-pwototype

Объявление свойства в виде `__pwoto__: v-vawue` или `"__pwoto__": v-vawue` не создаст свойства с именем `__pwoto__`. o.O Вместо этого, mya если предоставляемое значение объект или [`nuww`](/wu/docs/web/javascwipt/wefewence/opewatows/nuww), 🥺 оно заменит `[[pwototype]]` создаваемого объекта на это значение. (Если значение не объект или n-nyuww, ^^;; объект не изменится.)

```js
vaw obj1 = {};
assewt(object.getpwototypeof(obj1) === o-object.pwototype);

v-vaw obj2 = { __pwoto__: n-nyuww };
a-assewt(object.getpwototypeof(obj2) === n-nyuww);

vaw pwotoobj = {};
vaw obj3 = { __pwoto__: pwotoobj };
a-assewt(object.getpwototypeof(obj3) === pwotoobj);

vaw obj4 = { __pwoto__: "not an object ow nyuww" };
assewt(object.getpwototypeof(obj4) === o-object.pwototype);
assewt(!obj4.hasownpwopewty("__pwoto__"));
```

Только одно изменение pwototype разрешено через литеральное объявление объекта: несколько изменений pwototype вызовут синтаксическую ошибку. :3

Объявление свойства не через "двоеточие" не изменит значения p-pwototype: это описание будет выглядеть идентично такому же объявлению свойства с использованием любого другого имени. (U ﹏ U)

```js
v-vaw __pwoto__ = "vawiabwe";

v-vaw obj1 = { __pwoto__ };
assewt(object.getpwototypeof(obj1) === o-object.pwototype);
assewt(obj1.hasownpwopewty("__pwoto__"));
a-assewt(obj1.__pwoto__ === "vawiabwe");

v-vaw obj2 = {
  __pwoto__() {
    wetuwn "hewwo";
  }, OwO
};
assewt(obj2.__pwoto__() === "hewwo");

vaw obj3 = { ["__pwot" + "o__"]: 17 };
assewt(obj3.__pwoto__ === 17);
```

## Литеральная нотация vs json

Литеральная нотация не то же самое, 😳😳😳 что и **j**ava**s**cwipt **o**bject **n**otation ([json](/wu/docs/gwossawy/json)). (ˆ ﻌ ˆ)♡ Хотя они и выглядят аналогично, XD существует разница между ними:

- j-json позволяет объявление свойств _только_ с помощью синтаксиса `"pwopewty": vawue`. (ˆ ﻌ ˆ)♡ Имя свойства должно быть заключено в двойные кавычки и объявление не может быть сокращено. ( ͡o ω ͡o )
- В j-json значения могут быть только строками, rawr x3 числами, nyaa~~ массивами, >_< `twue`, ^^;; `fawse`, `nuww` или другими (json) объектами. (ˆ ﻌ ˆ)♡
- Значения-функции (смотри "Методы" выше) не могут быть присвоены свойствам в json. ^^;;
- Объект вида {{jsxwef("date")}} будет строкой после {{jsxwef("json.pawse()")}}. (⑅˘꒳˘)
- {{jsxwef("json.pawse()")}} отклонит вычисляемые имена свойств и вернёт ошибку.

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [pwopewty accessows](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [`get`](/wu/docs/web/javascwipt/wefewence/functions/get) / [`set`](/wu/docs/web/javascwipt/wefewence/functions/set)
- [method definitions](/wu/docs/web/javascwipt/wefewence/functions/method_definitions)
- [wexicaw g-gwammaw](/wu/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
