---
title: break
slug: Web/JavaScript/Reference/Statements/break
---

{{jsSidebar("Statements")}}

**Оператор `break`** прерывает выполнение текущего цикла, оператора множественного выбора {{jsxref("Statements/switch", "switch")}} или блочного {{jsxref("Statements/label", "выражения с меткой", "", 1)}}. Выполнение кода продолжается с конструкции, следующей за прерванной.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Синтаксис

```js
break [label];
```

- `label` {{optional_inline}}
  - : Идентификатор связанной метки. Если прерываемое выражение не цикл или {{jsxref("Statements/switch", "switch")}}, указание метки обязательно.

## Описание

С помощью оператора `break` можно прервать выполнение {{jsxref("Statements/block", "блочного выражения", "", 1)}} с меткой. В таком случае `break` должен находиться внутри блока кода с указанной меткой. Само блочное выражение может быть любым, а не только циклом.

Использование `break`, с меткой или без, невозможно внутри функции, которая вложена в прерываемые цикл, конструкцию {{jsxref("Statements/switch", "switch")}} или {{jsxref("Statements/block", "блочное выражение", "", 1)}} с меткой.

## Примеры

### break в цикле while

Следующая функция использует оператор `break` для выхода из цикла {{jsxref("Statements/while", "while")}}, когда `i` станет равно 3, и возвращает значение 3 \* `x`.

```js
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

### break в конструкции switch

В примере оператор `break` прервёт выполнение {{jsxref("Statements/switch", "switch")}} сразу после выполнения кода в совпавшем `case`.

```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

### break в блочном выражении с указанной меткой

В примере используется оператор `break` с меткой. В таком случае `break` обязательно должен быть вложен в блок кода с той же меткой. Обратите внимание, что `inner_block` вложен в `outer_block`.

```js
outer_block: {
  inner_block: {
    console.log("1");
    break outer_block; // break прервёт выполнение кода как в inner_block, так и в outer_block
    console.log(":-("); // не будет выполнено
  }
  console.log("2"); // не будет выполнено
}
```

### break вне блочного выражения с указанной меткой

В примере также используется `break` с меткой, но код будет выполнен с ошибкой `SyntaxError`, потому что `break` находится в блоке с меткой `block_1`, а прерывается выполнение блока кода с меткой `block_2`. Ещё раз, в таком случае `break` обязательно должен быть вложен в блок кода с меткой, выполнение которого требуется прервать.

```js
block_1: {
  console.log('1');
  break block_2; // SyntaxError: label not found
}

block_2: {
  console.log('2');
}
```

### break внутри функций

Код в примерах также будет выполнен с ошибкой `SyntaxError`, потому что в обоих случаях `break` находится в теле функции, вложенной в прерываемый цикл или прерываемое блочное выражение с меткой.

```js
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }

return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js
block_1: {
  console.log('1');
  ( function() {
    break block_1; // SyntaxError: Undefined label 'block_1'
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
