---
title: Выражения и операторы
slug: Web/JavaScript/Reference/Operators
---

{{jsSidebar("Operators")}}

Эта глава описывает все операторы, выражения и ключевые слова языка JavaScript.

## Выражения и операторы по категориям

Алфавитный список смотрите в боковой панели слева.

### Первичные выражения

Базовые ключевые слова и общие выражения в JavaScript.

- {{jsxref("Operators/this", "this")}}
  - : Ключевое слово `this` ссылается на контекст выполняемой функции.
- {{jsxref("Operators/function", "function")}}
  - : Ключевое слово `function` определяет выражение функции.
- {{jsxref("Operators/class", "class")}}
  - : Ключевое слово `class` определяет выражение класса.
- {{jsxref("Operators/function*", "function*")}}
  - : Ключевое слово `function*` (со звёздочкой) определяет функцию-генератор.
- {{jsxref("Operators/yield", "yield")}}
  - : Пауза или продолжение выполнения функции-генератора.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Делегирует выполнение другому генератору итерируемому объекту.
- {{experimental_inline}} {{jsxref("Operators/async_function", "async function*")}}
  - : `async function` определяет выражение асинхронной функции.
- {{experimental_inline}} {{jsxref("Operators/await", "await")}}
  - : Пауза и продолжение выполнения асинхронной функции и ожидание [Promise](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) (результата выполнения) с результатом разрешено/отклонено.
- {{jsxref("Global_Objects/Array", "[]")}}
  - : Синтаксис создания инициализатора/литерала массива.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Синтаксис создания инициализатора/литерала объекта
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : Синтаксис создания литерала регулярного выражения.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Оператор группировки.

### Левосторонние выражения

Значения слева являются назначением присваивания.

- {{jsxref("Operators/Property_accessors", "Доступ к свойству", "", 1)}}
  - : Операторы доступа к членам предоставляют доступ к свойству или методу объекта
    (`object.property` и `object['property']`).
- {{jsxref("Operators/new", "new")}}
  - : Оператор `new` создаёт экземпляр объекта с использованием конструктора.
- [new.target](/ru/docs/Web/JavaScript/Reference/Operators/new.target)
  - : Свойство `new.target` ссылается на конструктор или функцию, который был вызван через оператор {{jsxref("Operators/new", "new")}}.
- {{jsxref("Operators/super", "super")}}
  - : Ключевое слово `super` вызывает конструктор родительского класса.
- {{jsxref("Operators/Spread_operator", "...obj")}}
  - : Оператор распространения позволяет развернуть выражение в местах, где ожидается несколько аргументов (при вызове функций) или несколько элементов (при создании литералов массива).

### Инкремент и декремент

Операторы постфиксного/префиксного инкремента и декремента.

- {{jsxref("Operators/Arithmetic_Operators", "A++", "#Increment")}}
  - : Оператор постфиксного инкремента.
- {{jsxref("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
  - : Оператор постфиксного декремента.
- {{jsxref("Operators/Arithmetic_Operators", "++A", "#Increment")}}
  - : Оператор префиксного инкремента. _(Значение переменной, сначала, увеличивается на 1, а затем используется в выражении)_
- {{jsxref("Operators/Arithmetic_Operators", "--A", "#Decrement")}}
  - : Оператор префиксного декремента.

### Унарные операторы

Унарные операции — это операции с одним операндом.

- {{jsxref("Operators/delete", "delete")}}
  - : Оператор `delete` удаляет свойство из объекта.
- {{jsxref("Operators/void", "void")}}
  - : Оператор `void` отбрасывает возвращаемое значение выражения.
- {{jsxref("Operators/typeof", "typeof")}}
  - : Оператор `typeof` определяет тип переданного объекта.
- {{jsxref("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
  - : Оператор унарного плюса преобразует свой операнд в тип {{jsxref("Global_Objects/Number", "Number")}}.
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
  - : Оператор унарного минуса преобразует свой операнд в тип {{jsxref("Global_Objects/Number", "Number")}}, а затем меняет его знак.
- {{jsxref("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
  - : Оператор побитового НЕ.
- {{jsxref("Operators/Logical_Operators", "!", "#Logical_NOT")}}
  - : Оператор логического НЕ.

### Арифметические операторы

Арифметические операторы своими операндами принимают числовые значения (литералы или переменные) и возвращают одно числовое значение.

- {{jsxref("Operators/Arithmetic_Operators", "+", "#Addition")}}
  - : Оператор сложения.
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
  - : Оператор вычитания.
- {{jsxref("Operators/Arithmetic_Operators", "/", "#Division")}}
  - : Оператор деления.
- {{jsxref("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
  - : Оператор умножения.
- {{jsxref("Operators/Arithmetic_Operators", "%", "#Remainder")}}
  - : Оператор взятия остатка от деления.
- {{jsxref("Operators/Arithmetic_Operators", "**", "#Exponentiation")}}
  - : Оператор возведения в степень.

### Реляционные операторы

Реляционные операторы (операторы отношения) сравнивают свои операнды и возвращают значение типа {{jsxref("Global_Objects/Boolean", "Boolean")}}, зависящее от того, был ли результат сравнения истинным или ложным.

- {{jsxref("Operators/in", "in")}}
  - : Оператор `in` определяет, содержит ли объект указанное свойство.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : Оператор `instanceof` определяет, является ли объект экземпляром потомком Prototype (или экземпляром) другого объекта.
- {{jsxref("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
  - : Оператор меньше.
- {{jsxref("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
  - : Оператор больше.
- {{jsxref("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
  - : Оператор меньше или равно.
- {{jsxref("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}
  - : Оператор больше или равно.

> **Примечание:** => это не оператор. Это нотация для [Стрелочных функций](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Операторы равенства

Результат вычисления оператора равенства всегда имеет тип {{jsxref("Global_Objects/Boolean", "Boolean")}} и значение, зависящее от того, был ли результат проверки истинным или ложным.

- {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}
  - : Оператор проверки на равенство.
- {{jsxref("Operators/Comparison_Operators", "!=", "#Inequality")}}
  - : Оператор проверки на неравенство.
- {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}
  - : Оператор проверки на идентичность.
- {{jsxref("Operators/Comparison_Operators", "!==", "#Nonidentity")}}
  - : Оператор проверки на неидентичность.

### Операторы побитового сдвига

Операции для сдвига всех битов операнда.

- {{jsxref("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
  - : Оператор побитового сдвига влево.
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
  - : Оператор знакового побитового сдвига вправо.
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}
  - : Оператор беззнакового побитового сдвига вправо.

### Бинарные побитовые операторы

Побитовые операторы трактуют свои операнды как набор из 32 битов (нулей и единиц) и возвращают стандартные числовые значения JavaScript.

- {{jsxref("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
  - : Оператор побитового И.
- {{jsxref("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
  - : Оператор побитового ИЛИ.
- {{jsxref("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}
  - : Оператор побитового ИСКЛЮЧАЮЩЕГО ИЛИ.

### Бинарные логические операторы

Логические операторы обычно используются вместе с булевыми (логическими) значениями и в сочетании с ними они возвращают булево значение.

- {{jsxref("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
  - : Оператор логического И.
- {{jsxref("Operators/Logical_Operators", "||", "#Logical_OR")}}
  - : Оператор логического ИЛИ.

### Условный (тернарный) оператор

- {{jsxref("Operators/Conditional_Operator", "(условие ? ifTrue : ifFalse)")}}
  - : Условный оператор возвращает одно значение из двух данных в зависимости от логического значения условия.

### Операторы присваивания

Операторы присваивания присваивают значение своему левому операнду, зависящее от значения их правого операнда.

- {{jsxref("Operators/Assignment_Operators", "=", "#Assignment")}}
  - : Оператор присваивания.
- {{jsxref("Operators/Assignment_Operators", "*=", "#Multiplication_assignment")}}
  - : Оператор присваивания с умножением.
- {{jsxref("Operators/Assignment_Operators", "/=", "#Division_assignment")}}
  - : Оператор присваивания с делением.
- {{jsxref("Operators/Assignment_Operators", "%=", "#Remainder_assignment")}}
  - : Оператор присваивания с взятием остатка от деления.
- {{jsxref("Operators/Assignment_Operators", "+=", "#Addition_assignment")}}
  - : Оператор присваивания со сложением.
- {{jsxref("Operators/Assignment_Operators", "-=", "#Subtraction_assignment")}}
  - : Оператор присваивания с вычитанием.
- {{jsxref("Operators/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
  - : Оператор присваивания со сдвигом влево.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
  - : Оператор присваивания со знаковым сдвигом вправо.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
  - : Оператор присваивания с беззнаковым сдвигом вправо.
- {{jsxref("Operators/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
  - : Оператор присваивания с побитовым И.
- {{jsxref("Operators/Assignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
  - : Оператор присваивания с побитовым ИСКЛЮЧАЮЩИМ ИЛИ.
- {{jsxref("Operators/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
  - : Оператор присваивания с побитовым ИЛИ.
- {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : Деструктурирующее присваивание позволяет вам присваивать свойства массива или объекта переменным с использованием синтаксиса, очень похожего на объявление литералов массива или объекта.

### Оператор запятая

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : Оператор запятая позволяет вычислять несколько выражений в одном операторе и возвращает результат вычисления последнего выражения.

### Нестандартные особенности

- {{non-standard_inline}} {{jsxref("Operators/Legacy_generator_function", "Legacy generator function", "", 1)}}

  - : Ключевое слово `function` может быть использовано для определения устаревших функций-генераторов в одном выражении. Для того, чтобы сделать такую функцию, её тело должно содержать хотя бы одно выражение {{jsxref("Operators/yield", "yield")}}.

- {{non-standard_inline}} {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}}
  - : Синтаксис закрытого выражения для сокращённого написания простейших функций.
- {{non-standard_inline}} {{jsxref("Operators/Array_comprehensions", "[for (x of y) x]")}}
  - : Упрощённый синтаксис создания массива.
- {{non-standard_inline}} {{jsxref("Operators/Generator_comprehensions", "(for (x of y) y)")}}
  - : Упрощённый синтаксис создания генератора.

## Спецификации

| Спецификация                                                                                        | Статус               | Комментарии                                                                              |
| --------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------- |
| {{SpecName('ES1', '#sec-11', 'Expressions')}}                                                       | {{Spec2('ES1')}}     | Изначальное определение.                                                                 |
| {{SpecName('ES5.1', '#sec-11', 'Expressions')}}                                                     | {{Spec2('ES5.1')}}   |                                                                                          |
| {{SpecName('ES6', '#sec-ecmascript-language-expressions', 'ECMAScript Language: Expressions')}}     | {{Spec2('ES6')}}     | Новое: Оператор распространения, деструктурирующее присваивание, ключевое слово `super`. |
| {{SpecName('ESDraft', '#sec-ecmascript-language-expressions', 'ECMAScript Language: Expressions')}} | {{Spec2('ESDraft')}} |                                                                                          |

## Смотрите также

- {{jsxref("Operators/Operator_Precedence", "Приоритеты операторов", "", 1)}}
