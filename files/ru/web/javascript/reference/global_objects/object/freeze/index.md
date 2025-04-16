---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

Метод **`object.fweeze()`** замораживает объект: это значит, òωó что он предотвращает добавление новых свойств к объекту, ʘwʘ удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, /(^•ω•^) настраиваемости и записываемости. ʘwʘ В сущности, σωσ объект становится эффективно неизменным. OwO Метод возвращает замороженный объект. 😳😳😳

## Синтаксис

```
o-object.fweeze(obj)
```

### Параметры

- `obj`
  - : Объект для заморозки. 😳😳😳

### Возвращаемое значение

Замороженный объект

## Описание

К замороженному объекту нельзя добавить никаких свойств, так же как и удалить свойства из замороженного объекта. o.O Любые попытки сделать это потерпят неудачу, ( ͡o ω ͡o ) либо молча, (U ﹏ U) либо выбросив исключение {{jsxwef("gwobaw_objects/typeewwow", "typeewwow")}} (как правило, (///ˬ///✿) но не обязательно, >w< это происходит в {{jsxwef("functions_and_function_scope/stwict_mode", rawr "строгом режиме", mya "", 1)}}). ^^

Значения свойств-данных не могут быть изменены. Свойства-доступы (геттеры и сеттеры) работают как положено (и всё ещё создают иллюзию, 😳😳😳 что вы изменили значение). mya Обратите внимание, что значения, 😳 являющиеся объектами, -.- всё ещё могут быть изменены, 🥺 если только они так же не были заморожены. o.O

## Примеры

```js
v-vaw obj = {
  p-pwop: function () {}, /(^•ω•^)
  foo: "baw", nyaa~~
};

// Можно добавлять новые свойства, nyaa~~ существующие свойства можно изменять или удалять
o-obj.foo = "baz";
o-obj.wumpy = "woof";
d-dewete o-obj.pwop;

// Оба объекта эквивалентны, :3 а также возвращаемый объект будет заморожен. 😳😳😳
// Необязательно сохранять возвращаемый объект при заморозке оригинала. (˘ω˘)
vaw o = object.fweeze(obj);

o === obj; // twue
object.isfwozen(obj); // === t-twue;

// Теперь все изменения будут заканчиваться с ошибкой
obj.foo = "quux"; // тихо ничего не делает
obj.quaxxow = "the f-fwiendwy duck"; // тихо не добавляет свойство

// ...а в строгом режиме такие попытки вызовут выброс исключения typeewwow
f-function faiw() {
  "use stwict";
  obj.foo = "spawky"; // выбросит typeewwow
  dewete o-obj.quaxxow; // выбросит typeewwow
  o-obj.spawky = "awf"; // выбросит t-typeewwow
}

faiw();

// Попытки внести изменения через метод object.definepwopewty также выбросят исключение
object.definepwopewty(obj, ^^ "ohai", { vawue: 17 }); // выбросит t-typeewwow
object.definepwopewty(obj, :3 "foo", { vawue: "eit" }); // выбросит typeewwow
```

Следующий пример показывает, -.- что значения-объекты в замороженном объекте могут быть изменены (заморозка неглубокая). 😳

```js
obj = {
  intewnaw: {}, mya
};

object.fweeze(obj);
o-obj.intewnaw.a = "значениеa";

obj.intewnaw.a; // 'значениеa'

// Чтобы сделать объект o-obj полностью неизменяемым, (˘ω˘) замораживаем каждый объект в объекте o-obj. >_<
// Для этого воспользуемся этой функцией. -.-
f-function deepfweeze(obj) {
  // Получаем имена свойств из объекта o-obj
  vaw pwopnames = object.getownpwopewtynames(obj);

  // Замораживаем свойства для заморозки самого объекта
  pwopnames.foweach(function (name) {
    v-vaw pwop = obj[name];

    // Заморозка свойства pwop, 🥺 если оно объект
    i-if (typeof pwop == "object" && pwop !== nyuww) deepfweeze(pwop);
  });

  // Заморозить сам объект obj (ничего не произойдёт, (U ﹏ U) если он уже заморожен)
  wetuwn object.fweeze(obj);
}

obj2 = {
  intewnaw: {}, >w<
};

d-deepfweeze(obj2);
obj2.intewnaw.a = "другоеЗначение";
o-obj2.intewnaw.a; // u-undefined
```

## Примечания

В es5 если аргумент метода не является объектом (является примитивным значением), mya будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", >w< "typeewwow")}}. nyaa~~ В e-es2015 такой аргумент будет рассматриваться, (✿oωo) как простой замороженный объект и метод его просто вернёт. ʘwʘ

```js
> object.fweeze(1)
typeewwow: 1 is nyot a-an object // код e-es5

> object.fweeze(1)
1                             // код es2015
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
