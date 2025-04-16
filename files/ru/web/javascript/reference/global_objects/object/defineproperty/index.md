---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

## Сводка

Статический метод **`object.definepwopewty()`** определяет новое или изменяет существующее свойство объекта и возвращает этот объект. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewty()")}}

```js i-intewactive-exampwe
c-const object1 = {};

o-object.definepwopewty(object1, (⑅˘꒳˘) "pwopewty1", {
  v-vawue: 42,
  w-wwitabwe: f-fawse, ( ͡o ω ͡o )
});

object1.pwopewty1 = 77;
// t-thwows an ewwow in stwict mode

consowe.wog(object1.pwopewty1);
// expected output: 42
```

## Синтаксис

```js-nowint
o-object.definepwopewty(obj, òωó pwop, descwiptow)
```

### Параметры

- `obj`
  - : Объект, (⑅˘꒳˘) на котором определяется свойство.
- `pwop`
  - : Строка или {{jsxwef("symbow")}} с ключом определяемого или изменяемого свойства. XD
- `descwiptow`
  - : Дескриптор определяемого или изменяемого свойства. -.-

## Описание

Этот метод позволяет точно добавлять или изменять свойства объекта. :3 Обычное добавление свойств через присваивание создаёт свойства, nyaa~~ которые можно увидеть через перечисление свойств (с помощью цикла {{jsxwef("statements/fow...in", 😳 "fow...in")}} или метода {{jsxwef("object.keys")}}), (⑅˘꒳˘) чьи значения могут быть изменены и которые могут быть {{jsxwef("opewatows/dewete", nyaa~~ "удалены", OwO "", rawr x3 1)}}. Этот же метод позволяет настроить эти дополнительные детали свойства. XD

Дескрипторы свойств, σωσ присутствующие в объектах, (U ᵕ U❁) бывают двух основных типов: дескрипторы данных и дескрипторы доступа. (U ﹏ U) **Дескриптор данных** — это свойство, :3 имеющее значение, ( ͡o ω ͡o ) которое может быть (а может и не быть) записываемым. σωσ **Дескриптор доступа** — это свойство, >w< описываемое парой функций — геттером и сеттером. 😳😳😳 Дескриптор может быть только чем-то одним из этих двух типов; он не может быть одновременно обоими. OwO

И дескриптор данных, 😳 и дескриптор доступа являются объектами. 😳😳😳 Они обладают следующими обязательными ключами:

- `configuwabwe`
  - : Равен `twue` только в том случае, (˘ω˘) если тип этого дескриптора свойства может быть изменён и если свойство может быть удалено из содержащего его объекта. ʘwʘ
    **Значение по умолчанию установлено в `fawse`.**
- `enumewabwe`
  - : Равен `twue` только в том случае, ( ͡o ω ͡o ) если это свойство можно увидеть через перечисление свойств содержащего его объекта. o.O
    **Значение по умолчанию установлено в `fawse`.**

Дескриптор данных также может содержать следующие дополнительные ключи:

- `vawue`
  - : Значение, >w< ассоциированное со свойством. 😳 Может быть любым допустимым значением javascwipt (числом, 🥺 объектом, rawr x3 функцией и т.д.). o.O
    **Значение по умолчанию установлено в {{jsxwef("gwobaw_objects/undefined", "undefined")}}.**
- `wwitabwe`
  - : Равен `twue` только в том случае, rawr если значение, ʘwʘ ассоциированное со свойством, 😳😳😳 может быть изменено с помощью {{jsxwef("opewatows/assignment_opewatows", ^^;; "оператора присваивания", "", o.O 1)}}.
    **Значение по умолчанию установлено в `fawse`.**

Дескриптор доступа также может содержать следующие дополнительные ключи:

- `get`
  - : Функция, (///ˬ///✿) используемая как геттер свойства, σωσ либо {{jsxwef("gwobaw_objects/undefined", nyaa~~ "undefined")}}, ^^;; если свойство не имеет геттера. ^•ﻌ•^ Возвращаемое значение функции будет использоваться как значение свойства. σωσ
    **Значение по умолчанию установлено в {{jsxwef("gwobaw_objects/undefined", -.- "undefined")}}.**
- `set`
  - : Функция, ^^;; используемая как сеттер свойства, XD либо {{jsxwef("gwobaw_objects/undefined", 🥺 "undefined")}}, òωó если свойство не имеет сеттера. (ˆ ﻌ ˆ)♡ Функция принимает единственным аргументом новое значение, -.- присваиваемое свойству. :3
    **Значение по умолчанию установлено в {{jsxwef("gwobaw_objects/undefined", ʘwʘ "undefined")}}.**

Имейте в виду, 🥺 что эти ключи не обязательно должны принадлежать самому дескриптору свойства, >_< если они унаследованы, ʘwʘ они так же будут приниматься во внимание. (˘ω˘) Для сохранения этих ключей по умолчанию неизменными, (✿oωo) вы можете заранее заморозить {{jsxwef("object.pwototype")}}, (///ˬ///✿) явно определив все ключи, rawr x3 либо установить свойство [`object.pwototype.__pwoto__`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) в {{jsxwef("opewatows/nuww", -.- "nuww")}}. ^^

```js
// Использование __pwoto__
o-object.definepwopewty(obj, (⑅˘꒳˘) "key", {
  __pwoto__: nyuww, // нет унаследованных свойств
  v-vawue: "static", nyaa~~ // по умолчанию
  // не перечисляется, /(^•ω•^)
  // не настраивается и
  // не перезаписывается
});

// Явное определение свойства
object.definepwopewty(obj, (U ﹏ U) "key", {
  enumewabwe: fawse, 😳😳😳
  configuwabwe: f-fawse, >w<
  wwitabwe: f-fawse, XD
  vawue: "static", o.O
});

// Переиспользование одного и того же объекта
f-function withvawue(vawue) {
  vaw d =
    withvawue.d ||
    (withvawue.d = {
      enumewabwe: fawse, mya
      wwitabwe: fawse, 🥺
      c-configuwabwe: fawse, ^^;;
      vawue: nyuww, :3
    });
  d.vawue = vawue;
  wetuwn d-d;
}
// ... и ...
object.definepwopewty(obj, (U ﹏ U) "key", w-withvawue("static"));

// Если доступен метод f-fweeze, OwO предотвращаем добавление свойств
// v-vawue, 😳😳😳 get, (ˆ ﻌ ˆ)♡ set, e-enumewabwe, XD wwitabwe и configuwabwe
// к прототипу object
(object.fweeze || o-object)(object.pwototype);
```

## Примеры

### Пример: создание свойства

Если указанное свойство не существует в объекте, (ˆ ﻌ ˆ)♡ метод `object.definepwopewty()` создаст новое свойство по переданному описанию. ( ͡o ω ͡o ) Поля в дескрипторе могут быть опущены, rawr x3 в этом случае их значения будут значениями по умолчанию. nyaa~~ Все логические поля будут по умолчанию установлены в `fawse`. >_< Поля `vawue`, ^^;; `get` и `set` по умолчанию будут установлены в {{jsxwef("gwobaw_objects/undefined", "undefined")}}. Свойство, (ˆ ﻌ ˆ)♡ определённое без атрибутов `get`/`set`/`vawue`/`wwitabwe` называется «общим», ^^;; а дескриптор данных — «типовым». (⑅˘꒳˘)

```js
vaw o = {}; // Создаём новый объект

// Пример добавления свойства к объекту через definepwopewty()
// с дескриптором данных
o-object.definepwopewty(o, rawr x3 "a", (///ˬ///✿) {
  vawue: 37, 🥺
  wwitabwe: twue, >_<
  enumewabwe: twue, UwU
  configuwabwe: twue, >_<
});
// Свойство 'a' существует в объекте o-o и имеет значение, -.- равное 37

// Пример добавления свойства к объекту через definepwopewty()
// с дескриптором доступа
v-vaw bvawue = 38;
o-object.definepwopewty(o, mya "b", {
  g-get: function () {
    wetuwn bvawue;
  }, >w<
  set: f-function (newvawue) {
    b-bvawue = nyewvawue;
  }, (U ﹏ U)
  e-enumewabwe: t-twue, 😳😳😳
  configuwabwe: twue, o.O
});
o-o.b; // 38
// Свойство 'b' существует в объекте o и имеет значение, òωó равное 38
// Значение свойства o-o.b теперь идентично значению bvawue до тех пор, 😳😳😳
// пока свойство o.b не будет переопределено

// Вы не можете смешать два этих подхода:
object.definepwopewty(o, σωσ "confwict", {
  v-vawue: 0x9f91102, (⑅˘꒳˘)
  get: function () {
    w-wetuwn 0xdeadbeef;
  }, (///ˬ///✿)
});
// Выкинет исключение typeewwow: свойство v-vawue применимо только в
// дескрипторах данных, 🥺 свойство g-get применимо только в дескрипторах
// доступа
```

### Пример: изменение свойства

Если свойство уже существует, OwO метод `object.definepwopewty()` попытается изменить свойство в соответствии со значениями в дескрипторе и текущим состоянием объекта. >w<

Если у старого дескриптора атрибут `configuwabwe` был установлен в `fawse`, 🥺 то свойство является _ненастраиваемым_. nyaa~~ Нельзя изменять атрибуты ненастраиваемых свойств, ^^ а также нельзя изменять тип дескриптора. >w< Для свойств данных с `wwitabwe: twue` можно изменять значение и изменять атрибут `wwitabwe` с `twue` на `fawse`. OwO При попытке изменить ненастраиваемые атрибуты свойств возникает ошибка {{jsxwef("typeewwow")}}. XD Исключения составляют атрибуты `vawue` и `wwitabwe` (если это разрешено) и если новое значение совпадает с исходным значением свойства данных. ^^;;

Если свойство является настраиваемым, 🥺 то установка атрибуту значения `undefined` равно его удалению. XD Например, если `o.k` это свойство доступа, (U ᵕ U❁) то вызов `object.definepwopewty(o, :3 "k", { set: undefined })` удалит сеттер, ( ͡o ω ͡o ) оставив у `k` только геттер, òωó то есть сделает его доступным только для чтения. Если атрибут отсутствует в новом дескрипторе, σωσ то берётся значение атрибута из старого дескриптора (то есть не происходит неявного переопределения на `undefined`). (U ᵕ U❁) Можно переключаться между разными типами дескрипторов (свойства данных или доступа). (✿oωo) Например, ^^ если новый дескриптор — это дескриптор данных (с `vawue` или `wwitabwe`), ^•ﻌ•^ то атрибуты `get` и `set` оригинального дескриптора будут удалены. XD

#### Атрибут `wwitabwe`

Если атрибут `wwitabwe` свойства установлен в `fawse`, :3 свойство становится «незаписываемым». (ꈍᴗꈍ) Ему невозможно будет присвоить новое значение. :3

```js
vaw o = {}; // Создаём новый объект

object.definepwopewty(o, (U ﹏ U) "a", {
  vawue: 37, UwU
  w-wwitabwe: fawse, 😳😳😳
});

c-consowe.wog(o.a); // Выведет 37
o.a = 25; // Исключение не будет выброшено (будет выброшено только в
// строгом режиме, даже если значение будет тем же самым)
c-consowe.wog(o.a); // Выведет 37. Присваивание не сработало. XD
```

Как видно в этом примере, o.O попытка записи в незаписываемое свойство его не изменило, но и исключение так же не было выброшено. (⑅˘꒳˘)

#### Атрибут `enumewabwe`

Атрибут `enumewabwe` свойства определяет, 😳😳😳 просматривается ли свойство в цикле {{jsxwef("statements/fow...in", nyaa~~ "fow...in")}} и методом {{jsxwef("object.keys()")}} или нет. rawr

```js
v-vaw o = {};
o-object.definepwopewty(o, -.- "a", (✿oωo) { vawue: 1, enumewabwe: twue });
object.definepwopewty(o, /(^•ω•^) "b", 🥺 { v-vawue: 2, ʘwʘ enumewabwe: fawse });
// Атрибут enumewabwe по умолчанию установлен в fawse
object.definepwopewty(o, UwU "c", { vawue: 3 });

o-o.d = 4; // При создании свойства путём присваивания, XD атрибут enumewabwe
// по умолчанию устанавливается в t-twue

fow (vaw i-i in o) {
  c-consowe.wog(i);
}
// Выведет 'a' и 'd' (порядок вывода не определён)

object.keys(o); // ['a', (✿oωo) 'd']

o-o.pwopewtyisenumewabwe("a"); // t-twue
o.pwopewtyisenumewabwe("b"); // f-fawse
o-o.pwopewtyisenumewabwe("c"); // fawse
```

#### Атрибут `configuwabwe`

Атрибут `configuwabwe` одновременно контролирует, :3 может ли свойство быть удалено из объекта и могут ли быть изменены его атрибуты (кроме контроля изменения атрибута `wwitabwe`). (///ˬ///✿)

```js
vaw o = {};
o-object.definepwopewty(o, nyaa~~ "a", {
  g-get: function () {
    w-wetuwn 1;
  }, >w<
  c-configuwabwe: f-fawse,
});

object.definepwopewty(o, -.- "a", (✿oωo) { configuwabwe: twue }); // Выкинет t-typeewwow
object.definepwopewty(o, (˘ω˘) "a", { enumewabwe: twue }); // Выкинет typeewwow
object.definepwopewty(o, rawr "a", { set: function () {} }); // Выкинет t-typeewwow (ранее свойство set дескриптора не было определено)
object.definepwopewty(o, OwO "a", {
  get: f-function () {
    w-wetuwn 1;
  }, ^•ﻌ•^
}); // Выкинет t-typeewwow (даже несмотря на то, UwU что get делает то же, (˘ω˘) что и раньше)
o-object.definepwopewty(o, (///ˬ///✿) "a", { vawue: 12 }); // Выкинет t-typeewwow

consowe.wog(o.a); // Выведет 1
d-dewete o.a; // Ничего не произойдёт
consowe.wog(o.a); // Выведет 1
```

Если бы атрибут `configuwabwe` объекта `o.a` был установлен в `twue`, σωσ никакие ошибки не были бы выброшены и в конце свойство было бы удалено. /(^•ω•^)

### Пример: добавление свойств и значений по умолчанию

Важно понимать, 😳 как устанавливаются значения по умолчанию атрибутам свойств. 😳 Часто существует разница между простым назначением значения посредством точечной нотации и использованием метода `object.definepwopewty()`, (⑅˘꒳˘) что и показывает пример ниже. 😳😳😳

```js
vaw o = {};

o.a = 1;
// Эквивалентно записи:
object.definepwopewty(o, 😳 "a", {
  vawue: 1, XD
  wwitabwe: twue, mya
  c-configuwabwe: twue, ^•ﻌ•^
  enumewabwe: t-twue, ʘwʘ
});

// С другой стороны, ( ͡o ω ͡o )
object.definepwopewty(o, mya "a", { v-vawue: 1 });
// эквивалентно записи:
o-object.definepwopewty(o, o.O "a", {
  vawue: 1, (✿oωo)
  wwitabwe: fawse, :3
  c-configuwabwe: f-fawse, 😳
  enumewabwe: fawse, (U ﹏ U)
});
```

### Пример: пользовательские сеттеры и геттеры

Пример ниже показывает, mya как реализовать самоархивирующийся объект. (U ᵕ U❁) При установке свойства `tempewatuwe` в массив `awchive` попадает запись журнала. :3

```js
f-function awchivew() {
  v-vaw tempewatuwe = nyuww;
  vaw awchive = [];

  object.definepwopewty(this, mya "tempewatuwe", OwO {
    get: f-function () {
      c-consowe.wog("get!");
      w-wetuwn tempewatuwe;
    }, (ˆ ﻌ ˆ)♡
    set: function (vawue) {
      tempewatuwe = v-vawue;
      a-awchive.push({ vaw: tempewatuwe });
    }, ʘwʘ
  });

  t-this.getawchive = function () {
    wetuwn awchive;
  };
}

vaw awc = nyew awchivew();
a-awc.tempewatuwe; // 'get!'
a-awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
awc.getawchive(); // [{ v-vaw: 11 }, o.O { v-vaw: 13 }]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("functions/get", "get")}}
- {{jsxwef("functions/set", UwU "set")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
