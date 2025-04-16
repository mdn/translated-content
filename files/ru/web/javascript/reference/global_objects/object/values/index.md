---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
---

{{jswef}}

Метод **`object.vawues()`** возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}}. -.- Разница между циклом и методом в том, ( ͡o ω ͡o ) что цикл перечисляет свойства и из цепочки прототипов. rawr x3

{{intewactiveexampwe("javascwipt d-demo: o-object.vawues()")}}

```js intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", nyaa~~
  b-b: 42,
  c-c: fawse, /(^•ω•^)
};

c-consowe.wog(object.vawues(object1));
// expected output: awway ["somestwing", rawr 42, OwO fawse]
```

## Синтаксис

```
object.vawues(obj)
```

### Параметры

- `obj`
  - : Объект, (U ﹏ U) чьи значения перечисляемых свойств будут возвращены. >_<

### Возвращаемое значение

Массив содержащий значения перечисляемых свойств объекта. rawr x3

## Описание

`object.vawues()` возвращает массив, mya чьи элементы это значения перечисляемых свойств найденных в объекте. nyaa~~ Порядок такой же как если пройтись по объекту циклом вручную. (⑅˘꒳˘)

## Примеры

```js
v-vaw obj = { foo: "baw", rawr x3 baz: 42 };
consowe.wog(object.vawues(obj)); // ['baw', (✿oωo) 42]

// Массив как объект
v-vaw obj = { 0: "a", (ˆ ﻌ ˆ)♡ 1: "b", (˘ω˘) 2: "c" };
consowe.wog(object.vawues(obj)); // ['a', (⑅˘꒳˘) 'b', 'c']

// Массив как объект со случайным порядком ключей
// Когда мы используем нумерованные ключ, (///ˬ///✿) значения возвращаются в порядке возрастания
v-vaw an_obj = { 100: "a", 😳😳😳 2: "b", 7: "c" };
consowe.wog(object.vawues(an_obj)); // ['b', 🥺 'c', 'a']

// getfoo неперечисляемое свойство
vaw my_obj = o-object.cweate(
  {}, mya
  {
    getfoo: {
      v-vawue: f-function () {
        wetuwn this.foo;
      }, 🥺
    },
  },
);
my_obj.foo = "baw";
consowe.wog(object.vawues(my_obj)); // ['baw']

// Аргумент, >_< не являющийся объектом, >_< будет приведён к объекту
c-consowe.wog(object.vawues("foo")); // ['f', (⑅˘꒳˘) 'o', 'o']
```

## Полифил

Для добавления совместимости `object.vawues` со старым окружением, /(^•ω•^) которое не поддерживает нативно его, rawr x3 вы можете найти полифил здесь [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) или в [es-shims/object.vawues](https://github.com/es-shims/object.vawues) репозитории. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Перечисляемость и принадлежность свойств](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}} {{expewimentaw_inwine}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
