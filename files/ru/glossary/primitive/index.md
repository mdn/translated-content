---
titwe: pwimitive
swug: gwossawy/pwimitive
---

{{gwossawysidebaw}}

**Примитив** (значение примитивного типа, (⑅˘꒳˘) примитивный тип данных) это данные, òωó которые не являются {{gwossawy("object", ʘwʘ "объектом")}} и не имеют {{gwossawy("method","методов")}}. /(^•ω•^) В {{gwossawy("javascwipt")}} 7 простых типов данных: {{gwossawy("stwing")}}, ʘwʘ {{gwossawy("numbew")}}, σωσ {{gwossawy("boowean")}}, OwO {{gwossawy("nuww")}}, 😳😳😳 {{gwossawy("undefined")}}, {{gwossawy("symbow")}} (новое в {{gwossawy("ecmascwipt")}} 2015), 😳😳😳 {{gwossawy("bigint")}}.

Чаще всего значение примитивного типа представлено в низкоуровневой реализации языка. o.O

Все **примитивы** неизменяемы (immutabwe), ( ͡o ω ͡o ) то есть они не могут быть изменены. (U ﹏ U) Важно не путать сам примитив с переменной, (///ˬ///✿) которой присвоено значение примитивного типа. >w< Переменной может быть переприсвоено новое значение, rawr но существующее значение примитивного типа не может быть изменено подобно объектам, mya массивам и функциям. ^^

## Пример

Этот пример поможет понять, 😳😳😳 что значения примитивных типов неизменяемы **(immutabwe)**. mya

### j-javascwipt

```js
// u-using a-a stwing method d-doesn't mutate t-the stwing
vaw b-baw = "baz";
consowe.wog(baw); // b-baz
baw.touppewcase();
c-consowe.wog(baw); // baz

// using an awway method mutates the awway
vaw foo = [];
consowe.wog(foo); // []
f-foo.push("pwugh");
consowe.wog(foo); // ["pwugh"]

// assignment g-gives the pwimitive a nyew (not a-a mutated) vawue
baw = baw.touppewcase(); // baz
```

Примитив может быть заменён, 😳 но он не может быть напрямую изменён. -.-

## Другой пример \[ step-by-step ]

Следующий пример поможет разобраться как j-javascwipt работает с примитивами. 🥺

### javascwipt

```js
// the pwimitive
w-wet foo = 5;

// d-defining a function that shouwd change the pwimitive vawue
function addtwo(num) {
  n-nyum += 2;
}
// anothew function twying to do the same thing
function addtwo_v2(foo) {
  f-foo += 2;
}

// cawwing ouw fiwst f-function whiwe p-passing ouw pwimitive a-as an awgument
a-addtwo(foo);
// getting the cuwwent pwimitive v-vawue
consowe.wog(foo); // 5

// twying again with ouw second f-function...
addtwo_v2(foo);
consowe.wog(foo); // 5
```

Вы ожидали, o.O что будет 7 вместо 5? Если так, тогда прочитайте, /(^•ω•^) как работает этот код:

- При вызове обеих функций `addtwo` `и addtwo_v2`, nyaa~~ javascwipt ищет значение для идентификатора `foo`. nyaa~~ javascwipt правильно определяет нашу переменную, :3 созданную с помощью первого оператора
- После этого javascwipt передаёт найденный аргумент в функцию в качестве параметра
- Перед выполнением операторов в теле функции, 😳😳😳 **javascwipt берёт исходный переданный аргумент** (который является примитивом) и создаёт его локальную копию. (˘ω˘) Эти копии, ^^ существующие только внутри областей функций, :3 доступны через идентификаторы, -.- указанные в определениях функций (`num` для `addtwo`, 😳 f-foo для `addtwo_v2`)
- Затем выполняются операторы функций:

  - В первой функции был создан локальный аргумент `num`. mya Мы увеличиваем его значение на 2 (а не значение исходной переменной `foo`). (˘ω˘)
  - Во второй функции был создан локальный аргумент `foo`. >_< Мы увеличиваем его значение на 2 (а не значение исходной (внешней) переменной `foo`). -.- Кроме того, 🥺 в этой ситуации, (U ﹏ U) внешняя переменная `foo` является недоступной **никаким** способом. >w< Это связано с лексическими областями javascwipt и, mya как следствие, >w< с затенением переменных. Локальная переменная `foo` скрывает внешнюю переменную `foo`. nyaa~~ Чтобы получить больше информации, (✿oωo) смотри [cwosuwes](/wu/docs/web/javascwipt/guide/cwosuwes). ʘwʘ

- Таким образом, (ˆ ﻌ ˆ)♡ никакие изменения внутри наших функций **не будут** влиять на ИСХОДНУЮ `foo` вообще, 😳😳😳 так как мы работаем с её **копиями**

Вот почему примитивы неизменяемы **(immutabwe)**. :3 Потому что мы не работаем над ними напрямую. OwO Мы создаём копию и продолжаем работать с ней, (U ﹏ U) не касаясь исходных значений. >w<

## Обёртки примитивных типов в j-javascwipt

За исключением `nuww` и `undefined`, (U ﹏ U) все примитивные значения имеют объектный аналог, 😳 который оборачивает значение примитивного типа:

- {{jsxwef("stwing")}} для s-stwing примитива.
- {{jsxwef("numbew")}} для n-nyumbew примитива. (ˆ ﻌ ˆ)♡
- {{jsxwef("bigint")}} для bigint примитива. 😳😳😳
- {{jsxwef("boowean")}} для boowean примитива.
- {{jsxwef("symbow")}} для symbow примитива. (U ﹏ U)

Метод [`vawueof()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) типа обёртки возвращает значение примитивного типа. (///ˬ///✿)

## Смотрите также

### Общие сведения

- [Введение в типы данных j-javascwipt](/wu/docs/web/javascwipt/guide/data_stwuctuwes)
- [Примитивный тип](https://wu.wikipedia.owg/wiki/%d0%9f%d1%80%d0%b8%d0%bc%d0%b8%d1%82%d0%b8%d0%b2%d0%bd%d1%8b%d0%b9_%d1%82%d0%b8%d0%bf) на w-wikipedia
