---
title: Приоритет операторов
slug: Web/JavaScript/Reference/Operators/Operator_precedence
---

{{jsSidebar("Operators")}}

**Приоритет операторов** определяет порядок, в котором операторы выполняются. Операторы с более высоким приоритетом выполняются первыми.

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## Ассоциативность

Ассоциативность определяет порядок, в котором обрабатываются операторы с одинаковым приоритетом. Например, рассмотрим выражение:

```
a OP b OP c
```

Левая ассоциативность (слева направо) означает, что оно обрабатывается как `(a OP b) OP c`, в то время как правая ассоциативность (справа налево) означает, что они интерпретируются как `a OP (b OP c)`. Операторы присваивания являются право-ассоциативными, так что вы можете написать:

```js
a = b = 5;
```

с ожидаемым результатом, что `a` и `b` будут равны 5. Это происходит, потому что оператор присваивания возвращает тот результат, который присваивает. Сначала `b` становится равным 5, затем `a` принимает значение `b`.

## Примеры

```js
3 > 2 && 2 > 1;
// вернёт true

3 > 2 > 1;
// вернёт false, потому что 3 > 2 возвращает true, в свою очередь true > 1 вернёт false
// Добавление скобок значительно повышает читаемость выражения: (3 > 2) > 1
```

## Таблица

Операторы упорядочены с самого высокого (19) до самого низкого (1) приоритета.

Обратите внимание, что [spread-оператор (`...`)](/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax) намеренно не включен в таблицу, потому что он вообще не является оператором и правильно говорить `spread-синтаксис`. Подробнее можно почитать в [ответе на Stack Overflow (en)](https://stackoverflow.com/a/44934830/15378287).

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Приоритет</th>
      <th>Тип оператора</th>
      <th>Ассоциативность</th>
      <th>Конкретные операторы</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        {{jsxref("Operators/Grouping", "Группировка")}}
      </td>
      <td>не определено</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "Доступ к свойствам", "#Dot_notation")}}
      </td>
      <td rowspan="2">слева направо</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "Доступ к свойствам с возможностью вычисления","#Bracket_notation")}}
      </td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/new","new")}} (со списком аргументов)
      </td>
      <td>не определено</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Guide/Functions">Вызов функции</a>
      </td>
      <td rowspan="2">слева направо</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >Оператор опциональной последовательности (?.)</a
        >
      </td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (без списка аргументов)
      </td>
      <td>справа налево</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        {{jsxref("Operators/Arithmetic_Operators","Постфиксный инкремент","#Increment")}}
      </td>
      <td rowspan="2">не определено</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Arithmetic_Operators","Постфиксный декремент","#Decrement")}}
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT"
          >Логическое отрицание (!)</a
        >
      </td>
      <td rowspan="10">справа налево</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT"
          >Побитовое отрицание (~)</a
        >
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus"
          >Унарный плюс</a
        >
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation"
          >Унарный минус</a
        >
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment"
          >Префиксный инкремент</a
        >
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement"
          >Префиксный декремент</a
        >
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>
      </td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/void">void</a>
      </td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/delete">delete</a>
      </td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/await">await</a>
      </td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation"
          >Возведение в степень (**)</a
        >
      </td>
      <td>справа налево</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication"
          >Умножение (*)</a
        >
      </td>
      <td rowspan="3">слева направо</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division"
          >Деление (/)</a
        >
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder"
          >Остаток от деления (%)</a
        >
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition"
          >Сложение (+)</a
        >
      </td>
      <td rowspan="2">слева направо</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction"
          >Вычитание (-)</a
        >
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        <a
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"
          >Побитовый сдвиг влево (&#x3C;&#x3C;)</a
        >
      </td>
      <td rowspan="3">слева направо</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"
          >Побитовый сдвиг вправо (>>)</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators"
          >Сдвиг вправо с заполнением нулей (>>>)</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator"
          >Меньше (&#x3C;)</a
        >
      </td>
      <td rowspan="6">слева направо</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator"
          >Меньше или равно (&#x3C;=)</a
        >
      </td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator"
          >Больше (>)</a
        >
      </td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator"
          >Больше или равно (>=)</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td><a href="/ru/docs/Web/JavaScript/Reference/Operators/in">in</a></td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/instanceof"
          >instanceof</a
        >
      </td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality"
          >Равенство (==)</a
        >
      </td>
      <td rowspan="4">слева направо</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality"
          >Неравенство (!=)</a
        >
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity"
          >Строгое равенство (===)</a
        >
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity"
          >Строгое неравенство (!==)</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND"
          >Побитовое «И» (&#x26;)</a
        >
      </td>
      <td>слева направо</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR"
          >Побитовое исключающее «ИЛИ» (^)</a
        >
      </td>
      <td>слева направо</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR"
          >Побитовое «ИЛИ» (|)</a
        >
      </td>
      <td>слева направо</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND"
          >Логическое «И» (&#x26;&#x26;)</a
        >
      </td>
      <td>слева направо</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR"
          >Логическое «ИЛИ» (||)</a
        >
      </td>
      <td rowspan="2">слева направо</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
          >Оператор нулевого слияния (??)</a
        >
      </td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >Условный (тернарный) оператор</a
        >
      </td>
      <td>справа налево</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        <a
          href="/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators"
          >Присваивание</a
        >
      </td>
      <td rowspan="16">справа налево</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/yield">yield</a>
      </td>
      <td rowspan="2">справа налево</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a>
      </td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a href="/ru/docs/Web/JavaScript/Reference/Operators/Comma_Operator"
          >Запятая / Последовательность</a
        >
      </td>
      <td>слева направо</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
