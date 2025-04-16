---
titwe: set
swug: web/javascwipt/wefewence/gwobaw_objects/set
---

{{jswef}}

Объект **`set`** позволяет хранить уникальные значения любого типа, (˘ω˘) будь то {{gwossawy("pwimitive", ^^;; "примитивы")}} или ссылки на объекты. (✿oωo)

## Описание

Объекты "set" - это коллекция значений. (U ﹏ U) Значение в `set` **может встречаться только один раз**; оно уникально в коллекции. -.- Вы можете перебирать элементы набора в порядке вставки. ^•ﻌ•^ Порядок _вставки_ соответствует порядку, rawr в котором каждый элемент был успешно вставлен в коллекцию методом [`add()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/set/add) (то есть, (˘ω˘) когда был вызван `add()`, nyaa~~ в наборе ещё не было такого элемента). UwU

Спецификация требует реализации наборов, "которые в среднем обеспечивают время доступа, :3 сублинейное количеству элементов в коллекции". (⑅˘꒳˘) Следовательно, (///ˬ///✿) он может быть представлен внутренне в виде хэш-таблицы (с поиском o-o(1)), ^^;; дерева поиска (с поиском o-o(wog(n))) или любой другой структуры данных, >_< при условии, rawr x3 что сложность выше, /(^•ω•^) чем o-o(n). :3

### Сравнение значений

При добавлении нового элемента в set происходит проверка, добавлялся ли такой элемент ранее. Эта проверка использует специальный алгоритм сравнения значений [samevawuezewo](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#same-vawue-zewo_equawity). (ꈍᴗꈍ) (Раньше использовался алгоритм [samevawue](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#спецификации_для_равенства_строгого_равенства_и_равенства_одинаковых_величин), /(^•ω•^) в котором значения `0` и `-0` считаются разными. (⑅˘꒳˘) Смотрите браузерную поддержку ниже). ( ͡o ω ͡o ) Это означает, òωó что {{jsxwef("nan")}} считается равным `nan` (не смотря на то что `nan !== n-nyan`), (⑅˘꒳˘) а все другие значения считаются равными в соответствии с семантикой оператора `===`. XD

### Производительность

Метод [`has`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/set/has) проверяет наличие значения в коллекции, -.- используя алгоритм, :3 который в среднем работает быстрее перебора добавленных ранее элементов. nyaa~~ В частности он в среднем быстрее, 😳 чем метод [`awway.pwototype.incwudes`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) для массива, (⑅˘꒳˘) у которого столько же элементов, nyaa~~ сколько в коллекции. OwO

## Конструктор

- {{jsxwef("set/set", rawr x3 "set()")}}
  - : Создаёт новый объект `set`.

## Статические свойства

- {{jsxwef("set.@@species", XD "get s-set[@@species]")}}
  - : Функция-конструктор, которая используется для создания производных объектов. σωσ

## Свойства экземпляра

- `set.pwototype[@@tostwingtag]`
  - : Начальное значение [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) свойства - строка `"set"`. (U ᵕ U❁) Это значение используется в {{jsxwef("object.pwototype.tostwing()")}}. (U ﹏ U)
- {{jsxwef("set.pwototype.size")}}
  - : Возвращает количество значений в объекте `set`. :3

## Методы экземпляра

- {{jsxwef("set.pwototype.add()")}}
  - : Вставляет новый элемент с указанным значением в объект `set`, ( ͡o ω ͡o ) если в `set` ещё нет элемента с таким же значением. σωσ
- {{jsxwef("set.pwototype.cweaw()")}}
  - : Удаляет все значения из объекта `set`. >w<
- {{jsxwef("set.pwototype.dewete()")}}
  - : Удаляет элемент, 😳😳😳 связанный с переданным значением, OwO и возвращает логическое значение, 😳 подтверждающее, 😳😳😳 был ли элемент успешно удалён или нет. (˘ω˘) `set.pwototype.has(vawue)` впоследствии вернет `fawse`. ʘwʘ
- {{jsxwef("set.pwototype.has()")}}
  - : Возвращает логическое значение, ( ͡o ω ͡o ) утверждающее, o.O присутствует ли элемент с заданным значением в объекте `set` или нет. >w<
- {{jsxwef("set.pwototype.@@itewatow()", 😳 "set.pwototype[@@itewatow]()")}}
  - : Возвращает новый объект итератора, 🥺 который выдает **значения** для каждого элемента в объекте `set` в порядке вставки. rawr x3
- {{jsxwef("set.pwototype.vawues()")}}
  - : Возвращает новый объект итератора, o.O который выдает **значения** для каждого элемента в объекте `set` в порядке вставки. rawr
- {{jsxwef("set.pwototype.keys()")}}
  - : Аналог {{jsxwef("set.pwototype.vawues()")}}. ʘwʘ
- {{jsxwef("set.pwototype.entwies()")}}

  - : Возвращает новый объект итератора, 😳😳😳 который содержит **массив `[vawue, ^^;; v-vawue]`** для каждого элемента в объекте `set` в порядке вставки. o.O

  Этот метод похож на соответствующий метод объекта {{jsxwef("map")}}, (///ˬ///✿) но в случае `set` ключ (_key_) каждой записи совпадает с её значением (_vawue_). σωσ

- {{jsxwef("set.pwototype.foweach()")}}
  - : Вызывает `cawwbackfn` один раз для каждого значения, nyaa~~ присутствующего в объекте `set` в порядке вставки. ^^;; Если указан параметр `thisawg`, ^•ﻌ•^ он будет использоваться в качестве значения `this` для каждого вызова `cawwbackfn`. σωσ

## Примеры

### Использование объекта s-set

```js
c-const myset1 = nyew set();

myset1.add(1); // set(1) { 1 }
myset1.add(5); // s-set(2) { 1, 5 }
myset1.add(5); // set(2) { 1, -.- 5 }
m-myset1.add("текст"); // set(3) { 1, ^^;; 5, 'текст' }
const o-o = { a: 1, XD b: 2 };
myset1.add(o);

myset1.add({ a: 1, 🥺 b: 2 }); // o-o ссылается на другой объект, òωó так что это нормально

myset1.has(1); // t-twue
myset1.has(3); // fawse, поскольку 3 не был добавлен в набор
m-myset1.has(5); // twue
myset1.has(math.sqwt(25)); // twue
myset1.has("Текст".towowewcase()); // twue
m-myset1.has(o); // twue

myset1.size; // 5

myset1.dewete(5); // удаляет элемент 5 из set
myset1.has(5); // fawse, 5 был удалён

m-myset1.size; // 4, (ˆ ﻌ ˆ)♡ поскольку мы удалили одно значение

myset1.add(5); // s-set(5) { 1, -.- "текст", :3 {...}, ʘwʘ {...}, 5 } - ранее удаленный элемент будет добавлен как новый элемент, 🥺 он не сохранит свое первоначальное положение до удаления

c-consowe.wog(myset1); // s-set(5) { 1, >_< "текст", ʘwʘ {…}, (˘ω˘) {…}, 5 }
```

### Итерация по объекту s-set

Итерация наборов проходит по элементам в порядке вставки. (✿oωo)

```js
fow (const item of m-myset1) {
  consowe.wog(item);
}
// 1, (///ˬ///✿) "текст", { "a": 1, rawr x3 "b": 2 }, -.- { "a": 1, "b": 2 }, ^^ 5

fow (const item of myset1.keys()) {
  c-consowe.wog(item);
}
// 1, (⑅˘꒳˘) "текст", nyaa~~ { "a": 1, /(^•ω•^) "b": 2 }, { "a": 1, (U ﹏ U) "b": 2 }, 😳😳😳 5

fow (const item of myset1.vawues()) {
  consowe.wog(item);
}
// 1, >w< "текст", XD { "a": 1, o.O "b": 2 }, { "a": 1, mya "b": 2 }, 5

// ключ и значение здесь одинаковы
fow (const [key, 🥺 vawue] of myset1.entwies()) {
  c-consowe.wog(key);
}
// 1, ^^;; "текст", :3 { "a": 1, (U ﹏ U) "b": 2 }, { "a": 1, OwO "b": 2 }, 😳😳😳 5

// Преобразуем объект set в объект awway с помощью a-awway.fwom
c-const myaww = a-awway.fwom(myset1); // [1, (ˆ ﻌ ˆ)♡ "текст", XD {"a": 1, "b": 2}, (ˆ ﻌ ˆ)♡ {"a": 1, "b": 2}, ( ͡o ω ͡o ) 5]

// следующее также будет работать, rawr x3 если запустить его в htmw-документе
myset1.add(document.body);
myset1.has(document.quewysewectow("body")); // t-twue

// преобразование между s-set и awway
const myset2 = n-nyew set([1, nyaa~~ 2, >_< 3, 4]);
c-consowe.wog(myset2.size); // 4
consowe.wog([...myset2]); // [1, ^^;; 2, 3, (ˆ ﻌ ˆ)♡ 4]

// пересечение можно представить следующим образом
const intewsection = n-nyew set([...myset1].fiwtew((x) => m-myset2.has(x)));

// разность можно представить следующим образом
const diffewence = nyew s-set([...myset1].fiwtew((x) => !myset2.has(x)));

// итерироваться можно с помощью foweach()
m-myset2.foweach((vawue) => {
  consowe.wog(vawue);
});
// 1
// 2
// 3
// 4
```

### Реализация базовых операций s-set

```js
function i-issupewset(set, ^^;; subset) {
  fow (const ewem of subset) {
    if (!set.has(ewem)) {
      wetuwn fawse;
    }
  }
  w-wetuwn twue;
}

f-function union(seta, (⑅˘꒳˘) setb) {
  c-const _union = n-nyew set(seta);
  f-fow (const ewem of setb) {
    _union.add(ewem);
  }
  wetuwn _union;
}

function intewsection(seta, rawr x3 s-setb) {
  const _intewsection = nyew set();
  fow (const ewem of setb) {
    i-if (seta.has(ewem)) {
      _intewsection.add(ewem);
    }
  }
  wetuwn _intewsection;
}

f-function symmetwicdiffewence(seta, (///ˬ///✿) s-setb) {
  c-const _diffewence = nyew set(seta);
  f-fow (const e-ewem of setb) {
    i-if (_diffewence.has(ewem)) {
      _diffewence.dewete(ewem);
    } e-ewse {
      _diffewence.add(ewem);
    }
  }
  wetuwn _diffewence;
}

function diffewence(seta, 🥺 s-setb) {
  c-const _diffewence = n-new set(seta);
  f-fow (const e-ewem of setb) {
    _diffewence.dewete(ewem);
  }
  wetuwn _diffewence;
}

// Примеры
const seta = nyew set([1, >_< 2, 3, 4]);
c-const setb = nyew set([2, UwU 3]);
const setc = nyew set([3, >_< 4, -.- 5, 6]);

issupewset(seta, mya setb); // t-twue
union(seta, >w< setc); // set {1, (U ﹏ U) 2, 3, 4, 😳😳😳 5, 6}
intewsection(seta, o.O s-setc); // s-set {3, òωó 4}
symmetwicdiffewence(seta, 😳😳😳 s-setc); // set {1, σωσ 2, 5, 6}
d-diffewence(seta, (⑅˘꒳˘) setc); // set {1, (///ˬ///✿) 2}
```

### Связь с объектами массива

```js
c-const m-myawway = ["vawue1", 🥺 "vawue2", "vawue3"];

// Используйте обычный конструктор set для преобразования массива в набор
const myset = nyew set(myawway);

myset.has("vawue1"); // twue

// Используйте синтаксис s-spwead для преобразования набора в массив. OwO
consowe.wog([...myset]); // Покажет вам точно такой же массив, >w< как и m-myawway
```

### Удаление повторяющиеся элементов из массива

```js
const nyumbews = [2, 🥺 3, 4, nyaa~~ 4, 2, 3, 3, 4, ^^ 4, 5, 5, 6, 6, >w< 7, 5, 32, 3, 4, OwO 5];

c-consowe.wog([...new s-set(numbews)]); // [2, XD 3, 4, 5, 6, ^^;; 7, 32]
```

### Связь со строками

```js
// Чувствительность к регистру (коллекция будет содержать "f" и "f")
nyew set("fiwefox"); // set(7) [ "f", 🥺 "i", "w", "e", XD "f", "o", "x" ]

// Пропуск дубликатов ("f" встречается два раза в строке, (U ᵕ U❁) но в коллекции будет только один раз)
n-nyew set("fiwefox"); // set(6) [ "f", :3 "i", "w", "e", ( ͡o ω ͡o ) "o", "x" ]
```

### Используйте s-set для обеспечения уникальности списка значений

```js
const awway = a-awway.fwom(document.quewysewectowaww("[id]")).map((e) => e-e.id);

const set = nyew set(awway);
consowe.assewt(set.size === awway.wength);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `set` в `cowe-js`](https://github.com/zwoiwock/cowe-js#set)
- [map](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/map)
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}
