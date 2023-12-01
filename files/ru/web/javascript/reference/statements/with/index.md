---
title: with
slug: Web/JavaScript/Reference/Statements/with
---

> **Предупреждение:** Использование оператора `with` не рекомендуемо, т.к. он может быть источником запутанных багов и проблем совместимости. Детальная информация в параграфе "Ambiguity Contra" раздела "Description".

{{jsSidebar("Statements")}}

Инструкция **with** расширяет цепочку областей видимости для инструкции.

## Синтаксис

```
with (expression)
  statement
```

- `expression`
  - : Добавляет данный exrpession в цепочку областей видимости используемое когда исследуется statement. Рекомендуется использовать круглые скобки вокруг выражения.
- `statement`
  - : Любое выражение. Чтобы использовать несколько выражений, используйте оператор [block](/ru/docs/Web/JavaScript/Reference/Statements/block) statement ({ ... }), чтобы сгруппировать их.

## Описание

JavaScript ищет unqualified имя, исследуя цепочку областей видимости, связанную с выполнением скрипта или функции, содержащих это unqualified имя. Оператор 'with' добавляет данный объект в начало цепочки областей видимости в ходе исследования тела его оператора. Если unqualified имя используемое в теле соответствует свойству в цепочке областей видимости, тогда имя привязывается к свойству и объекту, содержащему это свойство. В противном случае возвращается {{jsxref("ReferenceError")}}.

> **Примечание:** Использование оператора `with` не рекомендуется, и недопустимо в строгом режиме ([strict mode](/ru/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)) ECMAScript 5 . Рекомендуемой альтернативой может стать связывание объекта, чьи свойства Вы хотели получить, с коротким именем переменной.

### Performance pro & contra

**Pro:** Оператор **with** может помочь уменьшить размер файла, уменьшив необходимость повторять длинную ссылку на объект без снижения производительности. Изменение цепочки контекста, необходимое для 'with', не требует больших вычислительных затрат. Использование 'with' избавит интерпретатор от разбора повторных ссылок на объекты. Однако, обратите внимание, что во многих случаях это преимущество может быть достигнуто с помощью временной переменной для хранения ссылки на нужный объект.

**Contra:** Оператор **with** заставляет указанный объект быть найденным сначала среди всех имён поиска. Поэтому все идентификаторы, которые не относятся к указанному объекту, будут обнаруживаться медленнее в блоке «**with**. Там, где важна производительность, «with» следует использовать только для охвата блоков кода, которые обращаются к членам указанного объекта.

### Ambiguity contra

**Contra:** The `with` statement makes it hard for a human reader or JavaScript compiler to decide whether an unqualified name will be found along the scope chain, and if so, in which object. So given this example:

```js
function f(x, o) {
  with (o) {
    console.log(x);
  }
}
```

Only when `f` is called is `x` either found or not, and if found, either in `o` or (if no such property exists) in `f`'s activation object, where `x` names the first formal argument. If you forget to define `x` in the object you pass as the second argument, or if there's some similar bug or confusion, you won't get an error — just unexpected results.

**Contra:** Code using `with` may not be forward compatible, especially when used with something other than a plain object. Consider this example:

```js
function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
```

If you call `f([1,2,3], obj)` in an ECMAScript 5 environment, then the `values` reference inside the `with` statement will resolve to `obj`. However, ECMAScript 6 introduces a `values` property on [`Array.prototype`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype) (so that it will be available on every array). So, in a JavaScript environment that supports ECMAScript 6, the `values` reference inside the `with` statement will resolve to `[1,2,3].values`.

## Примеры

### Использование `with`

Последующее использование **`with`** указывает что Объект [`Math`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Math) является объектом по умолчанию. Следующие инструкции за **`with`** ссылаются на свойства `PI` и методы [`cos`]](/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) и [`sin`]](/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sin), без указания объекта. JavaScript предполагает Объект `Math` для этих справок.

```js
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{jsxref("Statements/block", "block")}}
- [Strict mode](/ru/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
