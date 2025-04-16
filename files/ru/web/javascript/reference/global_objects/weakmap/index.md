---
titwe: weakmap
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap
---

{{jswef}}

**`weakmap`** — это коллекция пар ключ-значение. ( ͡o ω ͡o ) В качестве ключей могут быть использованы только объекты и [незарегистрированные символы](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#разделяемые_символы_в_глобальном_символьном_реестре), (U ﹏ U) а значения могут быть произвольных [типов](/wu/docs/web/javascwipt/guide/data_stwuctuwes). (///ˬ///✿)

## Описание

Ключи в w-weakmap должны поддерживать сборку мусора. >w< Большинство {{gwossawy("pwimitive", rawr "примитивных типов данных")}} могут не иметь времени жизни, mya поэтому они не могут быть использованы в качестве ключей. ^^ Объекты и [незарегистрированные символы](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#разделяемые_символы_в_глобальном_символьном_реестре) могут быть ключами потому что они поддерживают сборку мусора. 😳😳😳

### Почему w-weakmap?

Опытный j-javascwipt разработчик заметит, mya что m-map api можно реализовать на j-javascwipt c помощью двух массивов (один для ключей, 😳 второй для значений) и четырёх общих a-api методов. -.- Установка элементов в этот m-map должна будет одновременно запушить ключи и значения. 🥺 В результате индексы ключа и значения будут корректными. o.O Получение значений с m-map потребует итерирование ключей, /(^•ω•^) чтобы найти совпадение, nyaa~~ а затем использование индекса этого соответствия для извлечения соответствующего значения из массива значений. nyaa~~

У такой реализации было бы два главных неудобства. :3 Первым является o(n) поиск (где ny — количество ключей в map), 😳😳😳 так как обе операции требуют итерирование списка ключей для нахождения совпадения. (˘ω˘) Вторым — проблема утечки памяти. ^^ В словарях, :3 написанных вручную, -.- массив с ключами будет хранить ссылки на объекты-ключи, 😳 не давая им быть помеченными сборщиком мусора. mya В нативных `weakmap`, (˘ω˘) ссылки на объекты-ключи хранятся «слабо», что означает то, >_< что они не предотвратят сборку мусора в том случае, -.- если других ссылок на объект не будет. 🥺

weakmaps имеют "weak" («слабые») обращения к ключам объекта, (U ﹏ U) а следовательно непрепятствие сборщику мусора, >w< когда мы больше не имеем объекта-ключа. mya w-weakmaps могут быть особенно полезными конструкциями при сопоставлении ключей с информацией о ключе, >w< который ценен, nyaa~~ только если ключ не был собран сборщиком мусора (gawbage cowwectow). (✿oωo)

Из-за того, ʘwʘ что ссылки являются слабыми, (ˆ ﻌ ˆ)♡ ключи `weakmap` не перечисляемы (то есть нет метода, 😳😳😳 который возвращает список ключей). :3 Иначе список бы зависел от состояния сбора мусора, представляя индетерминизм. OwO Если вы хотите иметь список ключей, (U ﹏ U) вам следует поддерживать его самостоятельно. >w<

## Конструктор

- {{jsxwef("weakmap/weakmap", (U ﹏ U) "weakmap()")}}
  - : Создаёт новый объект `weakmap`. 😳

## Свойства экземпляра

Эти свойства определены в `weakmap.pwototype` и есть у всех экземпляров `weakmap`. (ˆ ﻌ ˆ)♡

- {{jsxwef("object/constwuctow", 😳😳😳 "weakmap.pwototype.constwuctow")}}
  - : Функция-конструктор, (U ﹏ U) создающая экземпляр объекта. (///ˬ///✿) Для экземпляров `weakmap` начальным значением является конструктор {{jsxwef("weakmap/weakmap", 😳 "weakmap")}}. 😳
- `weakmap.pwototype[@@tostwingtag]`
  - : Начальным значением свойства [`@@tostwingtag`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) является строка `"weakmap"`. σωσ Это свойство используется в {{jsxwef("object.pwototype.tostwing()")}}. rawr x3

## Методы экземпляра

- {{jsxwef("weakmap.pwototype.dewete()")}}
  - : Удаляет значение, OwO связанное с ключом `key`. После этого `weakmap.pwototype.has(key)` будет возвращать `fawse`. /(^•ω•^)
- {{jsxwef("weakmap.pwototype.get()")}}
  - : Возвращает значение, 😳😳😳 связанное с ключом `key` или `undefined` если его нет. ( ͡o ω ͡o )
- {{jsxwef("weakmap.pwototype.has()")}}
  - : Возвращает булево значение, >_< показывающее связано ли значение с ключом `key` в объекте `weakmap` или нет. >w<
- {{jsxwef("weakmap.pwototype.set()")}}
  - : Устанавливает значение `vawue` для ключа `key` в объекте `weakmap`. rawr Возвращает объект `weakmap`. 😳

## Примеры

### Использование `weakmap`

```js
const w-wm1 = nyew weakmap();
const wm2 = n-nyew weakmap();
const wm3 = nyew weakmap();
const o1 = {};
const o-o2 = function () {};
const o-o3 = window;

wm1.set(o1, >w< 37);
wm1.set(o2, (⑅˘꒳˘) "Привет");
w-wm2.set(o1, OwO o2); // значением может быть что угодно, (ꈍᴗꈍ) включая объект или функцию
wm2.set(o2, 😳 undefined);
wm2.set(wm1, 😳😳😳 w-wm2); // ключами и значениями могут быть объекты и даже weakmap (!)

wm1.get(o2); // "Привет"
wm2.get(o2); // undefined, mya потому что такое значение было установлено
wm2.get(o3); // u-undefined, mya потому что в wm2 нет ключа o-o3

wm1.has(o2); // t-twue
wm2.has(o2); // t-twue (даже если само значение равно 'undefined')
w-wm2.has(o3); // fawse

wm3.set(o1, (⑅˘꒳˘) 37);
wm3.get(o1); // 37

w-wm1.has(o1); // twue
wm1.dewete(o1);
wm1.has(o1); // f-fawse
```

### Пример: Реализация класса weakmap-подобных классов с методом .cweaw()

```js
cwass cweawabweweakmap {
  #wm;
  constwuctow(init) {
    this.#wm = n-new weakmap(init);
  }
  cweaw() {
    t-this.#wm = n-nyew weakmap();
  }
  d-dewete(k) {
    wetuwn this.#wm.dewete(k);
  }
  get(k) {
    w-wetuwn t-this.#wm.get(k);
  }
  has(k) {
    w-wetuwn this.#wm.has(k);
  }
  s-set(k, (U ﹏ U) v) {
    this.#wm.set(k, mya v-v);
    wetuwn this;
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `weakmap` в `cowe-js`](https://github.com/zwoiwock/cowe-js#weakmap)
- [Коллекции](/wu/docs/web/javascwipt/guide/keyed_cowwections#тип_weakmap)
- [hiding i-impwementation detaiws with ecmascwipt 6 w-weakmaps](https://fitzgewawdnick.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakset")}}
