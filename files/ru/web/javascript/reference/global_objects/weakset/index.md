---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 10387e1345e60f93e939b873e953b8ae85557362
---

{{JSRef}}

**`WeakSet`** — это набор значений, поддерживающих сборку мусора, включая объекты и [незарегистрированные символы](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol#разделяемые_символы_в_глобальном_символьном_реестре). Каждое значение в `WeakSet` может встречаться только один раз, оно уникально в коллекции `WeakSet`.

## Описание

Значения в WeakSet должны поддерживать сборку мусора. Большинство {{Glossary("Primitive", "примитивных типов данных")}} могут не иметь времени жизни, поэтому они не могут быть сохранены. Объекты и [незарегистрированные символы](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol#разделяемые_символы_в_глобальном_символьном_реестре) могут быть сохранены потому что они поддерживают сборку мусора.

Ключевые отличия от {{jsxref("Set")}}:

- `WeakSet` — это набор только **объектов и символов**. В отличие от {{jsxref("Set")}} он не может содержать произвольные значения любого типа.
- `WeakSet` является _слабым_ в том смысле, что ссылки на объекты в `WeakSet` хранятся _слабо_. Если нет других ссылок на значение, хранящееся в `WeakSet`, эти значения могут быть удалены сборщиком мусора.

  > [!NOTE]
  > Это также означает, что нет списка текущих значений сохранённых в наборе. Объекты `WeakSet` не перечислимы.

### Вариант использования: обнаружение циклических ссылок

Функциям, которые вызывают себя рекурсивно, необходим способ защиты от циклических структур данных путём отслеживания того, какие объекты уже были обработаны.

Объекты `WeakSet` идеально подходят для этого:

```js
// Выполняем `fn` для всего, что хранится внутри объекта.
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Избегаем бесконечно рекурсии
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Циклическая ссылка!
execRecursively((obj) => console.log(obj), foo);
```

Здесь `WeakSet` создаётся при первом запуске и передаётся вместе с каждым последующим вызовом функции (с использованием внутреннего параметра `_refs`).

Количество объектов или порядок их обхода не имеют значения, поэтому использование `WeakSet` более эффективно, чем {{jsxref("Set")}} для отслеживания ссылок на объекты, особенно если задействовано очень большое количество объектов.

## Конструктор

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Создаёт новый объект `WeakSet`.

## Свойств экземпляра

Эти свойства определены в `WeakSet.prototype` и есть у всех экземпляров `WeakSet`.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `WeakSet` начальным значением является конструктор {{jsxref("WeakSet/WeakSet", "WeakSet")}}.
- `WeakSet.prototype[@@toStringTag]`
  - : Начальным значением свойства [`@@toStringTag`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) является строка `"WeakSet"`. Это свойство используется в {{jsxref("Object.prototype.toString()")}}.

## Методы экземпляра

- {{jsxref("WeakSet.prototype.add()")}}
  - : Добавляет `value` в объект `WeakSet`.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Удаляет `value` из `WeakSet`. После этого `WeakSet.prototype.has(value)` будет возвращать `false`.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Возвращает булево значение, показывающее присутствует ли `value` в объекте `WeakSet` или нет.

## Примеры

### Использование `WeakSet`

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // удаляем foo из набора
ws.has(foo); // false, foo был удалён
ws.has(bar); // true, bar сохранился
```

Обратите внимание, что `foo !== bar`. Хотя это похожие объекты, _это не **один и тот же объект**_. И поэтому они оба добавляются в набор.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `WeakSet` в `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
