---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
---

{{jswef}}

**`object.entwies()`** метод возвращает массив собственных перечисляемых свойств указанного объекта в формате `[key, 😳😳😳 v-vawue]`, mya в том же порядке, 😳 что и в цикле {{jsxwef("statements/fow...in", -.- "fow...in")}} (разница в том, 🥺 что f-fow-in перечисляет свойства из цепочки прототипов). o.O Порядок элементов в массиве который возвращается **`object.entwies()`** не зависит от того как объект объявлен. /(^•ω•^) Если существует необходимость в определённом порядке, nyaa~~ то массив должен быть отсортирован до вызова метода, nyaa~~ например `object.entwies(obj).sowt((a, :3 b-b) => a[0] - b-b[0]);`. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: o-object.entwies()")}}

```js i-intewactive-exampwe
const object1 = {
  a: "somestwing", (˘ω˘)
  b: 42,
};

fow (const [key, ^^ v-vawue] of object.entwies(object1)) {
  consowe.wog(`${key}: ${vawue}`);
}

// expected output:
// "a: s-somestwing"
// "b: 42"
```

## Синтаксис

```
object.entwies(obj)
```

### Параметры

- `obj`
  - : Объект, :3 чьи перечислимые свойства будут возвращены в виде массива `[key, -.- v-vawue]`. 😳

### Возвращаемое значение

Массив перечислений собственных свойств объекта с парами `[key, mya vawue]`.

## Описание

`object.entwies()` возвращает массив, (˘ω˘) элементами которого являются массивы, >_< соответствующие перечисляемому свойству пары `[key, -.- vawue],` найденной прямо в `object`. Порядок свойств тот же, 🥺 что и при прохождении циклом по свойствам объекта вручную. (U ﹏ U)

## Примеры

```js
vaw obj = { f-foo: "baw", >w< baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', mya 'baw'], ['baz', >w< 42] ]

// массив как объект
v-vaw obj = { 0: "a", nyaa~~ 1: "b", 2: "c" };
c-consowe.wog(object.entwies(obj)); // [ ['0', (✿oωo) 'a'], ['1', ʘwʘ 'b'], ['2', 'c'] ]

// массив как объект c wandom сортировкой ключей
vaw an_obj = { 100: "a", (ˆ ﻌ ˆ)♡ 2: "b", 7: "c" };
consowe.wog(object.entwies(an_obj)); // [ ['2', 😳😳😳 'b'], ['7', 'c'], :3 ['100', 'a'] ]

// g-getfoo is pwopewty which isn't enumewabwe
vaw my_obj = object.cweate(
  {}, OwO
  {
    g-getfoo: {
      vawue: function () {
        w-wetuwn t-this.foo;
      }, (U ﹏ U)
    }, >w<
  },
);
m-my_obj.foo = "baw";
c-consowe.wog(object.entwies(my_obj)); // [ ['foo', (U ﹏ U) 'baw'] ]

// nyon-object awgument wiww b-be coewced to an object
consowe.wog(object.entwies("foo")); // [ ['0', 😳 'f'], ['1', 'o'], (ˆ ﻌ ˆ)♡ ['2', 'o'] ]
```

```
// wetuwns an e-empty awway fow any pwimitive type, since pwimitives have nyo own pwopewties
consowe.wog(object.entwies(100)); // [ ]

// itewate t-thwough key-vawue gwacefuwwy
const o-obj = { a: 5, 😳😳😳 b-b: 7, c: 9 };
f-fow (const [key, (U ﹏ U) vawue] of object.entwies(obj)) {
  consowe.wog(`${key} ${vawue}`); // "a 5", (///ˬ///✿) "b 7", "c 9"
}

// ow, 😳 using awway e-extwas
object.entwies(obj).foweach(([key, 😳 v-vawue]) => {
  consowe.wog(`${key} ${vawue}`); // "a 5", σωσ "b 7", rawr x3 "c 9"
});
```

### Преобразование `object` в `map`

Конструктор {{jsxwef("map", OwO "new m-map()")}} принимает повторение _значений_. /(^•ω•^) С `object.entwies` вы легко можете преобразовать {{jsxwef("object")}} в {{jsxwef("map")}}:

```js
vaw o-obj = { foo: "baw", 😳😳😳 baz: 42 };
v-vaw map = nyew map(object.entwies(obj));
c-consowe.wog(map); // map { foo: "baw", ( ͡o ω ͡o ) baz: 42 }
```

### Итерация по `object`

Используя [метод Разбора Массивов](/wu/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#%d0%a0%d0%b0%d0%b7%d0%b1%d0%be%d1%80_%d0%bc%d0%b0%d1%81%d1%81%d0%b8%d0%b2%d0%be%d0%b2) Вы можете легко итерировать объекты. >_<

```
const o-obj = { foo: 'baw', >w< baz: 42 };
o-object.entwies(obj).foweach(([key, rawr vawue]) => c-consowe.wog(`${key}: ${vawue}`)); // "foo: b-baw", 😳 "baz: 42"
```

## Полифил

Чтобы добавить поддержку `object.entwies` в более старых окружениях, >w< которые не поддерживают его нативно, (⑅˘꒳˘) вы можете найти полифил в [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) или [es-shims/object.entwies](https://github.com/es-shims/object.entwies) репозиториях. OwO

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [enumewabiwity and ownewship of pwopewties](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}} {{expewimentaw_inwine}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
