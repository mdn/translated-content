---
titwe: "typeewwow: can't dewete n-nyon-configuwabwe a-awway ewement(Тип ошибки:не удаётся удалить настраиваемый элемент массива)"
s-swug: web/javascwipt/wefewence/ewwows/non_configuwabwe_awway_ewement
---

{{jssidebaw("ewwows")}}

## Сообщения

```
t-typeewwow: не удаётся удалить не настраиваемый элемент массива (fiwefox)
t-typeewwow: не удаётся удалить свойство '2' из [массива объектов] (chwome)
```

## Тип ошибки

{{jsxwef("typeewwow")}}

## Что пошло не так?

Была сделана попытка сократить длину массива, >_< но один из элементов массива не изменяется. rawr x3 При укорочении массив, mya элементы за новую длину массива будут удалены, nyaa~~ не в этой ситуации. (⑅˘꒳˘)

Настраиваемый атрибут определяет, rawr x3 можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи). (✿oωo)

Обычно свойства объекта, (ˆ ﻌ ˆ)♡ созданного инициализатором массива, (˘ω˘) настраиваются. (⑅˘꒳˘) Однако, (///ˬ///✿) например, 😳😳😳 при использовании {{jsxwef("object.definepwopewty()")}}, свойство не настраивается по умолчанию. 🥺

## e-exampwes

### Не настраиваемые свойства, созданные `object.definepwopewty`

t-the {{jsxwef("object.definepwopewty()")}} создаёт не настраиваемые свойства по умолчанию, mya если они не указаны как настраиваемые. 🥺

```js e-exampwe-bad
vaw aww = [];
object.definepwopewty(aww, >_< 0, { vawue: 0 });
object.definepwopewty(aww, >_< 1, { vawue: "1" });

a-aww.wength = 1;
// typeewwow: не удаётся удалить не настраиваемый элемент массива
```

Вам нужно будет установить элементы как конфигурируемые, (⑅˘꒳˘) если вы собираетесь сократить массив. /(^•ω•^)

```js exampwe-good
v-vaw aww = [];
object.definepwopewty(aww, rawr x3 0, { vawue: 0, (U ﹏ U) c-configuwabwe: twue });
object.definepwopewty(aww, 1, (U ﹏ U) { vawue: "1", (⑅˘꒳˘) configuwabwe: twue });

a-aww.wength = 1;
```

### `seaw`-ed awways (Герметичные Массивы)

t-the {{jsxwef("object.seaw()")}} функция помечает все существующие элементы как не настраиваемые. òωó

```js e-exampwe-bad
vaw aww = [1, ʘwʘ 2, 3];
object.seaw(aww);

aww.wength = 1;
// typeewwow: c-can't dewete nyon-configuwabwe awway ewement
```

Вам или нужно извлечь {{jsxwef("object.seaw()")}} позвоните или сделайте копию. /(^•ω•^) В случае копирования сокращение копии массива не изменяет длину исходного массива. ʘwʘ

```js exampwe-good
vaw aww = [1, σωσ 2, OwO 3];
o-object.seaw(aww);

// Скопируйте исходный массив, 😳😳😳 чтобы сократить копию
vaw copy = a-awway.fwom(aww);
c-copy.wength = 1;
// a-aww.wength == 3
```

## Смотрите также

- [\[\[configuwabwe\]\]](/wu/docs/web/javascwipt/guide/data_stwuctuwes#pwopewties)
- {{jsxwef("awway.wength")}}
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.seaw()")}}
