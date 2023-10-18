---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef("Global_Objects", "JSON")}}

## Сводка

Метод **`JSON.stringify()`** возвращает JavaScript-значение, преобразованное в JSON-строку. Возможна замена значений, если как `replacer` передана функция, или включение только определённых свойств, если как `replacer` указан массив.

## Синтаксис

```
JSON.stringify(value[, replacer[, space]])
```

### Параметры

- `value`
  - : Значение, преобразуемое в строку JSON.
- `replacer` {{optional_inline}}
  - : Если является функцией, преобразует значения и свойства по ходу их преобразования в строку; если является массивом, определяет набор свойств, включаемых в объект в окончательной строке.
    Подробное описание функции `replacer` даётся в статье [Использование родного объекта `JSON`](/ru/docs/Web/JavaScript/Guide/Using_native_JSON#The_replacer_parameter) руководства по JavaScript.
- `space` {{optional_inline}}
  - : Делает результат красиво отформатированным (расставляя пробелы).

## Описание

Метод `JSON.stringify()` преобразует значение в представляющую его нотацию JSON со следующими оговорками:

- Порядок преобразования в строку свойств объектов, не являющихся массивами, не гарантируется. Не полагайтесь на порядок свойств во время преобразования.
- Объекты {{jsxref("Boolean")}}, {{jsxref("Number")}} и {{jsxref("String")}} преобразуются в соответствующие примитивные значения, в соответствии с традиционным соглашением о семантике преобразований.
- Значение {{jsxref("undefined")}}, функция или символ, встреченные во время преобразования, будут либо опущены (если они найдены в объекте), либо превращены в {{jsxref("null")}} (если они найдены в массиве).
- Все свойства, имеющие ключ в виде символа, будут полностью проигнорированы, даже при использовании функции `replacer`.

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

// Символы:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "символ";
  }
});
// '{}'
```

### Параметр `space`

Параметр `space` может использоваться для управления форматированием отступов в конечной строке. Если он числовой, каждый последующий уровень вложенности будет дополнен отступом из пробелов, количество которых соответствует уровню (вплоть до десятого уровня). Если он строковый, каждый последующий уровень вложенности будет предваряться этой строкой (или её первыми десятью символами).

```js
JSON.stringify({ a: 2 }, null, " ");
// '{
//  "a": 2
// }'
```

Использование символа табуляции имитирует стандартное красивое форматирование:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, "\t");
// вернёт строку:
// '{
//   "uno": 1,
//   "dos": 2
// }'
```

### Поведение метода `toJSON()`

Если преобразуемый в строку объект имеет свойство с именем `toJSON` и значением свойства, установленным в функцию, то этот метод `toJSON()` изменит стандартное поведение преобразования в JSON: вместо преобразования объекта будет использоваться значение, возвращаемое методом `toJSON()`. Например:

> **Предупреждение:** Функции не являются допустимыми данными в JSON, так что они не будут работать. Кроме того, некоторые объекты, например, объект {{jsxref("Date")}}, станут строками после применения {{jsxref("JSON.parse()")}}.

```js
var obj = {
  foo: "foo",
  toJSON: function () {
    return "bar";
  },
};
JSON.stringify(obj); // '"bar"'
JSON.stringify({ x: obj }); // '{"x":"bar"}'
```

### Пример использования метода `JSON.stringify()` вместе с `localStorage`

В случае, если вы хотите сохранить объект таким образом, чтобы его можно было восстановить даже после закрытия браузера, имеет смысл воспользоваться следующим примером, демонстрирующим применение метода `JSON.stringify()`:

```js
// Создаём некоторый объект
var session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "экранА", width: 450, height: 250 });
session.screens.push({ name: "экранБ", width: 650, height: 350 });
session.screens.push({ name: "экранВ", width: 750, height: 120 });
session.screens.push({ name: "экранГ", width: 250, height: 60 });
session.screens.push({ name: "экранД", width: 390, height: 120 });
session.screens.push({ name: "экранЕ", width: 1240, height: 650 });

// Преобразуем его в строку JSON с помощью метода JSON.stringify(),
// затем сохраняем его в localStorage под именем session
localStorage.setItem("session", JSON.stringify(session));

// Пример того, как можно преобразовать строку, полученную с помощью метода
// JSON.stringify() и сохранённую в localStorage обратно в объект
var restoredSession = JSON.parse(localStorage.getItem("session"));

// Переменная restoredSession содержит объект, который был сохранён
// в localStorage
console.log(restoredSession);
```

### Пример использования параметра `replacer`

```js
var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

JSON.stringify(foo, function (key, value) {
  if (typeof value === "string") {
    return undefined; // удаляем все строковые свойства
  }
  return value;
}); // '{"week":45,"month":7}'

JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', сохранились только свойства week и month
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование родного объекта `JSON`](/ru/docs/Web/JavaScript/Guide/Using_native_JSON)
- {{jsxref("JSON.parse()")}}
