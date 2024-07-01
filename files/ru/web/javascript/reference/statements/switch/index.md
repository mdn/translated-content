---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
---

{{jsSidebar("Statements")}}

## Сводка

**Инструкция switch** сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.

## Синтаксис

```
switch (expression) {
  case value1:
    //Здесь выполняются инструкции, если результат выражения равен value1
    [break;]
  case value2:
    //Инструкции, соответствующие value2
    [break;]
  ...
  case valueN:
    //Инструкции, соответствующие значению valueN
    //statementsN
    [break;]
  default:
    //Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
    //statements_def
    [break;]
}
```

- `expression`
  - : Выражение, значение которого сравнивается со всеми случаями.
- `case valueN`
  - : Случай, который проверяется на соответствие выражению (`expression`).
- `statementsN`
  - : Инструкции, которые выполняются, если `expression` соответствуют случаю.
- `statements_def`
  - : Инструкции, выполняемые если `expression` не соответствует ни одному случаю.

## Описание

Если выражение соответствует какому-то случаю, то выполняются инструкции этого случая. Если несколько случаев соответствуют значению, только первый случай будет использован.

Сначала программа пытается найти подходящий случай, значение которого равно значению искомого выражения (используется [строгое сравнение](/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), `===)` и затем выполняет инструкции, соответствующие случаю. Если подходящего случая нет, ищется случай по умолчанию (`default`), который не является обязательным. Если случая по умолчанию нет, выполнение продолжается на инструкции, следующей сразу после `switch`. По соглашению, случай `default` описывается последним, но это не является строгим правилом.

Опциональная инструкция [`break`](/ru/docs/Web/JavaScript/Reference/Statements/break) выполняет выход из блока `switch`. Она может располагаться в каждом из случаев, но не является обязательной. Если её нет, то выполняется следующая инструкция из блока `switch`.

## Примеры

### Пример: Использование `switch`

В этом примере, если `expr` равно "Bananas", программа находит случай "Bananas" и выполняет соответствующие инструкции. При выполнении инструкции `break`, выполнение продолжится за пределами `switch`. Если бы `break` не было, то выполнились бы инструкции случая "Cherries".

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}

console.log("Is there anything else you'd like?");
```

### Пример: Что случится, если не использовать break?

Если вы не использовали инструкцию `break`, то будут выполнены инструкции следующего случая. И проверка на соответствие выражению не будет выполняться.

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // foo равно 0, случай соответствует выражению и эти инструкции будут выполнены
    console.log(0);
  // ПРИМЕЧАНИЕ: здесь могла находиться забытая инструкция break
  case 1: // В случае 'case 0:' не было break, инструкции данного случая также будут выполнены
    console.log(1);
    break; // В конце расположен break, поэтому выполнение не перейдёт к случаю 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

### Цепочки case

#### Одна операция

Этот метод использует тот факт, что после `case` нет прерывания и продолжится
выполнение следующего `case` независимо от того, соответствует ли `case`
предоставленному условию. Подробнее в примере "Что случится, если не использовать break?.

Это пример `case` с одной операцией, где четыре разных значения отрабатывают одинаково.

```js
var Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
```

#### Цепочка операций

Это пример множественных операций внутри `case`, где в зависимости от
предоставленного числа можно увидеть разный вывод. Здесь показывается, что операции
отрабатывают в том порядке, в котором расположены `case`. При этом
числовая последовательность может не соблюдаться. Также возможно примешать в
`case` строки.

```js
var foo = 1;
var output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

Вывод этого примера:

| Значение                                              | Лог                               |
| ----------------------------------------------------- | --------------------------------- |
| `foo` is `NaN` or not `1`, `2`, `3`, `4`, `5`, or `0` | Please pick a number from 0 to 5! |
| `0`                                                   | Output: So What Is Your Name?     |
| `1`                                                   | Output: What Is Your Name?        |
| `2`                                                   | Output: Your Name?                |
| `3`                                                   | Output: Name?                     |
| `4`                                                   | Output: ?                         |
| `5`                                                   | Output: !                         |

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`if...else`](/ru/docs/Web/JavaScript/Reference/Statements/if...else)
