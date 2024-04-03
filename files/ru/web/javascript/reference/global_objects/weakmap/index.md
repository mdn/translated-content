---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

{{JSRef}}

**`WeakMap`** — это коллекция пар ключ-значение. В качестве ключей могут быть использованы только объекты и [незарегистрированные символы](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol#разделяемые_символы_в_глобальном_символьном_реестре), а значения могут быть произвольных [типов](/ru/docs/Web/JavaScript/Data_structures).

## Описание

Ключи в WeakMap должны поддерживать сборку мусора. Большинство {{Glossary("Primitive", "примитивных типов данных")}} могут не иметь времени жизни, поэтому они не могут быть использованы в качестве ключей. Объекты и [незарегистрированные символы](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol#разделяемые_символы_в_глобальном_символьном_реестре) могут быть ключами потому что они поддерживают сборку мусора.

### Почему WeakMap?

Опытный JavaScript разработчик заметит, что map API можно реализовать на JavaScript c помощью двух массивов (один для ключей, второй для значений) и четырёх общих API методов. Установка элементов в этот map должна будет одновременно запушить ключи и значения. В результате индексы ключа и значения будут корректными. Получение значений с map потребует итерирование ключей, чтобы найти совпадение, а затем использование индекса этого соответствия для извлечения соответствующего значения из массива значений.

У такой реализации было бы два главных неудобства. Первым является O(n) поиск (где n — количество ключей в map), так как обе операции требуют итерирование списка ключей для нахождения совпадения. Вторым — проблема утечки памяти. В словарях, написанных вручную, массив с ключами будет хранить ссылки на объекты-ключи, не давая им быть помеченными сборщиком мусора. В нативных `WeakMap`, ссылки на объекты-ключи хранятся «слабо», что означает то, что они не предотвратят сборку мусора в том случае, если других ссылок на объект не будет.

WeakMaps имеют "weak" («слабые») обращения к ключам объекта, а следовательно непрепятствие сборщику мусора, когда мы больше не имеем объекта-ключа. WeakMaps могут быть особенно полезными конструкциями при сопоставлении ключей с информацией о ключе, который ценен, только если ключ не был собран сборщиком мусора (Garbage collector).

Из-за того, что ссылки являются слабыми, ключи `WeakMap` не перечисляемы (то есть нет метода, который возвращает список ключей). Иначе список бы зависел от состояния сбора мусора, представляя индетерминизм. Если вы хотите иметь список ключей, вам следует поддерживать его самостоятельно.

## Конструктор

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Создаёт новый объект `WeakMap`.

## Свойства экземпляра

Эти свойства определены в `WeakMap.prototype` и есть у всех экземпляров `WeakMap`.

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `WeakMap` начальным значением является конструктор {{jsxref("WeakMap/WeakMap", "WeakMap")}}.
- `WeakMap.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"WeakMap"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

- {{jsxref("WeakMap.prototype.delete()")}}
  - : Удаляет значение, связанное с ключом `key`. После этого `WeakMap.prototype.has(key)` будет возвращать `false`.
- {{jsxref("WeakMap.prototype.get()")}}
  - : Возвращает значение, связанное с ключом `key` или `undefined` если его нет.
- {{jsxref("WeakMap.prototype.has()")}}
  - : Возвращает булево значение, показывающее связано ли значение с ключом `key` в объекте `WeakMap` или нет.
- {{jsxref("WeakMap.prototype.set()")}}
  - : Устанавливает значение `value` для ключа `key` в объекте `WeakMap`. Возвращает объект `WeakMap`.

## Примеры

### Использование `WeakMap`

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "Привет");
wm2.set(o1, o2); // значением может быть что угодно, включая объект или функцию
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // ключами и значениями могут быть объекты и даже WeakMap (!)

wm1.get(o2); // "Привет"
wm2.get(o2); // undefined, потому что такое значение было установлено
wm2.get(o3); // undefined, потому что в wm2 нет ключа o3

wm1.has(o2); // true
wm2.has(o2); // true (даже если само значение равно 'undefined')
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### Пример: Реализация класса WeakMap-подобных классов с методом .clear()

```js
class ClearableWeakMap {
  #wm;
  constructor(init) {
    this.#wm = new WeakMap(init);
  }
  clear() {
    this.#wm = new WeakMap();
  }
  delete(k) {
    return this.#wm.delete(k);
  }
  get(k) {
    return this.#wm.get(k);
  }
  has(k) {
    return this.#wm.has(k);
  }
  set(k, v) {
    this.#wm.set(k, v);
    return this;
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `WeakMap` в `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Коллекции](/ru/docs/Web/JavaScript/Guide/Keyed_collections#тип_weakmap)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
