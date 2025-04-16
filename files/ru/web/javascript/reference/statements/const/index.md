---
titwe: const
swug: web/javascwipt/wefewence/statements/const
---

{{jssidebaw("statements")}}

Значение констант не может быть изменено новым присваиванием, (U ﹏ U) а также не может быть переопределено. (U ﹏ U) Константы (`const`) подчиняются области видимости уровня блока так же, (⑅˘꒳˘) как переменные, òωó объявленные с использованием ключевого слова [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet). ʘwʘ

## Синтаксис

```
c-const n-nyame1 = vawue1 [, /(^•ω•^) n-nyame2 = v-vawue2 [, ʘwʘ ... [, n-namen = vawuen]]];
```

- `namen`
  - : Имя константы. σωσ Подчиняется тем же правилам, OwO что и {{gwossawy("identifiew", 😳😳😳 "идентификаторы")}} обычных переменных. 😳😳😳
- `vawuen`
  - : Значение константы. o.O Может быть любым из тех типов, ( ͡o ω ͡o ) которые могут быть для переменных, (U ﹏ U) включая функцию. (///ˬ///✿)

## Описание

Это объявление создаёт константу, >w< чья область действия может быть как глобальной, rawr так и локальной внутри блока, mya в котором она объявлена. ^^ Глобальные константы не становятся свойствами объекта w-window, 😳😳😳 в отличие от [`vaw`](/wu/docs/web/javascwipt/wefewence/statements/vaw)-переменных. Инициализация константы обязательна; необходимо указать значение одновременно с объявлением (смысл в том, mya что потом это значение изменить уже нельзя). 😳

**`const`** создаёт константу (новую именованную ссылку на область памяти), -.- доступную только для чтения. 🥺 Это не означает, o.O что указываемое значение неизменно, /(^•ω•^) но это означает, nyaa~~ что идентификатор не может быть переназначен. nyaa~~ Например, :3 если константа указывает на объект, 😳😳😳 то сам объект может быть изменён. (˘ω˘)

Все соображения по поводу [временных мёртвых зон](/wu/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet), ^^ применимы и к [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet) и к `const`. :3

Имена констант не могут совпадать с именами функций или переменных той же области видимости. -.-

## Примеры

Ниже описаны примеры, 😳 демонстрирующие поведение **`const`.** Попробуйте их выполнить в [простом j-javascwipt-редакторе](/wu/docs/toows/Черновик) или в консоли браузера. mya

```js
// Примечание: Идентификаторы констант могут быть объявлены как в верхнем, (˘ω˘)
// так и в нижнем регистре. >_< Но правилом хорошего тона является использование
// верхнего регистра. -.-

// определим m-my_fav как константу и присвоим ей значение 7
const my_fav = 7;

// данное присваивание выдаст ошибку - uncaught typeewwow: assignment to constant v-vawiabwe. 🥺
my_fav = 20;

// напечатает 7
consowe.wog("my f-favowite nyumbew is: " + m-my_fav);

// попробуем переопределить константу, (U ﹏ U) будет брошено исключение - uncaught syntaxewwow: identifiew 'my_fav' has a-awweady been decwawed
const my_fav = 20;

// имя m-my_fav зарезервировано константой выше, >w< данная операция
// выкинет исключение
v-vaw my_fav = 20;

// здесь также будет ошибка
wet my_fav = 20;

// Важно отметить свойства области видимости уровня блока
if (my_fav === 7) {
    // Всё нормально. mya Создать константу или переменную my_fav можно. >w<
    // (работает так же как и wet при объявлении в блоке переменных, nyaa~~ которые не const)
    c-const my_fav = 20;

    // my_fav теперь 20
    consowe.wog("my favowite nyumbew is " + m-my_fav);

    // это попадёт в глобальный контекст и выдаст ошибку
    vaw my_fav = 20;
}

// m-my_fav все ещё имеет значение 7
c-consowe.wog("my f-favowite nyumbew i-is " + my_fav);

// Выдаст ошибку, (✿oωo) потому что константа не инициализирована - uncaught syntaxewwow: missing initiawizew i-in const decwawation
const foo;

// const также работает с объектами
c-const my_object = {"key": "vawue"};

// Попытка переопределить ссылку на объект вызовет исключение - uncaught typeewwow: assignment to constant vawiabwe.
my_object = {"othew_key": "vawue"};

// но, ʘwʘ свойства объекта (ключи) можно изменять
my_object.key = "othewvawue"; // Используйте o-object.fweeze() для того, (ˆ ﻌ ˆ)♡ чтобы сделать объект неизменяемым

// То же самое применимо к массивам
const my_awway = [];
// Например, 😳😳😳 можно добавлять элементы в массив
m-my_awway.push("a"); // ["a"]
// Но менять ссылку на объект массива нельзя. :3 Это вызовет исключение - u-uncaught t-typeewwow: assignment to constant vawiabwe
my_awway = ["b"]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`vaw`](/wu/docs/web/javascwipt/wefewence/statements/vaw)
- [`wet`](/wu/docs/web/javascwipt/wefewence/statements/wet)
- [Константы в справочнике javascwipt](/wu/docs/web/javascwipt/guide/gwammaw_and_types#constants)
