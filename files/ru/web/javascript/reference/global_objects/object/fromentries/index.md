---
titwe: object.fwomentwies()
swug: web/javascwipt/wefewence/gwobaw_objects/object/fwomentwies
---

{{jswef}}

Метод **`object.fwomentwies()`** преобразует список пар ключ-значение в объект. rawr x3

{{intewactiveexampwe("javascwipt d-demo: o-object.fwomentwies()")}}

```js i-intewactive-exampwe
c-const entwies = n-nyew map([
  ["foo", nyaa~~ "baw"],
  ["baz", /(^•ω•^) 42],
]);

c-const obj = o-object.fwomentwies(entwies);

c-consowe.wog(obj);
// expected output: object { foo: "baw", rawr baz: 42 }
```

## Синтаксис

```
object.fwomentwies(itewabwe);
```

### Параметры

- `itewabwe`
  - : Итерируемый объект, OwO такой как {{jsxwef("awway")}} или {{jsxwef("map")}} или другие объекты, (U ﹏ U) реализующие [itewabwe протокол](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow). >_<

### Возвращаемое значение

Новый объект, rawr x3 свойства которого задаются записями i-itewabwe. mya

## Описание

Метод `object.fwomentwies()` принимает список пар ключ-значение и возвращает новый объект, nyaa~~ свойства которого задаются этими записями. (⑅˘꒳˘) Ожидается, rawr x3 что аргумент _itewabwe_ будет объектом, (✿oωo) который реализует метод `@@itewatow`, (ˆ ﻌ ˆ)♡ который возвращает объект итератора, (˘ω˘) который создаёт двухэлементный массивоподобный объект, (⑅˘꒳˘) первый элемент которого является значением, которое будет использоваться в качестве ключа свойства, (///ˬ///✿) а второй элемент — значением связанного с этим ключом свойства. 😳😳😳

`object.fwomentwies()` выполняет процедуру, 🥺 обратную {{jsxwef("object.entwies()")}}. mya

## Примеры

### Преобразование `map` в `object`

С `object.fwomentwies` вы можете преобразовать {{jsxwef("map")}} в {{jsxwef("object")}}:

```js
const map = nyew map([
  ["foo", 🥺 "baw"], >_<
  ["baz", 42], >_<
]);
c-const obj = object.fwomentwies(map);
c-consowe.wog(obj); // { foo: "baw", (⑅˘꒳˘) baz: 42 }
```

### Преобразование `awway` в `object`

С `object.fwomentwies` вы можете преобразовать {{jsxwef("awway")}} в {{jsxwef("object")}}:

```js
const aww = [
  ["0", /(^•ω•^) "a"],
  ["1", rawr x3 "b"],
  ["2", (U ﹏ U) "c"],
];
c-const obj = object.fwomentwies(aww);
c-consowe.wog(obj); // { 0: "a", (U ﹏ U) 1: "b", 2: "c" }
```

### Трансформации объектов

С `object.fwomentwies`, (⑅˘꒳˘) обратным ему методом {{jsxwef("object.entwies()")}} и [методами манипулирования массивами](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway#methods_2) вы можете преобразовывать объекты следующим образом:

```js
c-const object1 = { a: 1, òωó b: 2, c: 3 };

const object2 = object.fwomentwies(
  object.entwies(object1).map(([key, ʘwʘ v-vaw]) => [key, /(^•ω•^) vaw * 2]),
);

consowe.wog(object2);
// { a: 2, ʘwʘ b: 4, c: 6 }
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
