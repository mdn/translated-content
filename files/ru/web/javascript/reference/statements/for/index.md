---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

## Введение

Оператор **for** создаёт цикл, состоящий из трех необязательных выражений, заключенных в круглые скобки и разделенных точкой с запятой, за которыми следует инструкция (часто [блок инструкций](/ru/docs/Web/JavaScript/Reference/Statements/block)), которая должна выполняться в цикле.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Синтаксис

```js-nolint
for ([инициализация]; [условие]; [финальное выражение])
  [инструкция]
```

- `инициализация` {{optional_inline}}

  - : Выражение (включая [выражения присваивания](/ru/docs/Web/JavaScript/Reference/Operators/Assignment)) или объявление переменной, вычисляемое один раз перед началом цикла. Обычно используется для инициализации переменной счетчика. Это выражение может опционально объявлять новые переменные с ключевыми словами `var` или `let`. Переменные, объявленные с помощью `var`, не являются локальными для цикла, т.е. они находятся в той же области видимости, что и цикл `for`. Переменные, объявленные с помощью `let`, являются локальными для оператора и не доступны за пределами цикла.

  Результат выполнения этого выражения отбрасывается.

- `условие` {{optional_inline}}

  - : Выражение, которое будет выполнятся перед каждой итерацией цикла. Если выражение [оценивается как true](/ru/docs/Glossary/Truthy), инструкция выполняется. Если выражение [оценивается как false](/ru/docs/Glossary/Falsy), выполнение выходит из цикла и переходит к первой инструкции после конструкции `for`.

  Условие не является обязательным. Если его нет, условие всегда всегда оценивается как `true`.

- `финальное выражение` {{optional_inline}}

  - : Выражение, выполняющееся в конце итерации цикла. Происходит до следующего выполнения условия. Обычно используется для обновления или увеличения переменной счётчика.

- инструкция
  - : Инструкция, которая выполняется, когда условие цикла истинно. Чтоб выполнить множество инструкций в цикле, используйте [блок инструкций](/ru/docs/JavaScript/Reference/Statements/block) (`{ ... }`) для группировки этих инструкций. Чтобы не выполнять никакой инструкции в цикле, используйте [пустую инструкцию](/ru/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Примеры

### Использование `for`

Следующий цикл `for` начинается объявлением переменной `i` и задания ей значения `0`. Затем проверяет, что `i` меньше девяти, выполняет инструкцию внутри блока инструкций и инкрементирует ([Инкремент](/ru/docs/Web/JavaScript/Reference/Operators/Increment)) `i` на каждой итерации.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // ещё какие-то инструкции
}
```

### Синтаксис блока инициализации

В блоке инициализации возможно как объявления переменных, так и более сложные выражения. Однако выражения не могут использовать оператор [`in`](/ru/docs/Web/JavaScript/Reference/Operators/in) без скобок, потому что это конфликтует с циклом [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in).

```js-nolint example-bad
for (let i = "start" in window ? window.start : 0; i < 9; i++) {
  console.log(i);
}
// SyntaxError: 'for-in' loop variable declaration may not have an initializer.
```

```js example-good
// Все выражение инициализации переменной взято в скобки
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}

// Выражение `in` взято в скобки
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
```

### Необязательные выражения в `for`

Все 3 выражения в цикле `for` не обязательны.

Например, в блоке инициализации не требуется определять переменные:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // ещё выражения
}
```

Как и блок инициализации, блок условия не обязателен. Если пропустите это выражение, вы должны быть уверены, что прервёте цикл где-то в теле, а не создадите бесконечный цикл.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // тут какой-то код
}
```

Вы можете пропустить все 3 блока. Снова убедитесь, что используете [`break`](/ru/docs/Web/JavaScript/Reference/Statements/break), чтоб закончить цикл, а также изменить счётчик, так что условие для break было истинно в нужный момент.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### Использование `for` без блока инструкций

Следующий цикл `for` вычисляет смещение позиции узла в секции `[финальное выражение]`, и, следовательно, не требует использования инструкции или [`блока инструкций`](/ru/docs/JavaScript/Reference/Statements/block) внутри цикла, вместо этого используется точка с запятой ([пустая инструкция](/ru/docs/Web/JavaScript/Reference/Statements/Empty)).

```js
function showOffsetPos(id) {
  let left = 0,
    top = 0;

  for (
    let itNode = document.getElementById(id); // инициализация
    itNode; // условие
    left += itNode.offsetLeft,
      top += itNode.offsetTop,
      itNode = itNode.offsetParent // финальное выражение
  ); // точка с запятой (пустая инструкция)

  console.log(
    `Смещение позиции элемента "${id}":
слева: ${left}px;
сверху: ${top}px;`,
  );
}

showOffsetPos("content");

// Выводит:
// Смещение позиции элемента "content":
// слева: 0px;
// сверху: 153px;"
```

> **Примечание:** В этом случае, когда вы не используете условие внутри цикла, **точка с запятой ставится сразу после выражения цикла.**

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [пустая инструкция](/ru/docs/Web/JavaScript/Reference/Statements/Empty)
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/empty", "empty")}}
- {{jsxref("Statements/while", "while")}}
- [`do...while`](/ru/docs/Web/JavaScript/Reference/Statements/do...while)
- [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of)
