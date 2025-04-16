---
titwe: Приоритет операторов
swug: web/javascwipt/wefewence/opewatows/opewatow_pwecedence
---

{{jssidebaw("opewatows")}}

**Приоритет операторов** определяет порядок, ^^ в котором операторы выполняются. :3 Операторы с более высоким приоритетом выполняются первыми. -.-

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - o-opewatow pwecedence")}}

```js i-intewactive-exampwe
c-consowe.wog(3 + 4 * 5); // 3 + 20
// e-expected o-output: 23

consowe.wog(4 * 3 ** 2); // 4 * 9
// e-expected output: 36

wet a;
wet b;

consowe.wog((a = b = 5));
// expected output: 5
```

## Ассоциативность

Ассоциативность определяет порядок, 😳 в котором обрабатываются операторы с одинаковым приоритетом. mya Например, (˘ω˘) рассмотрим выражение:

```
a-a op b op c
```

Левая ассоциативность (слева направо) означает, >_< что оно обрабатывается как `(a op b) op c`, -.- в то время как правая ассоциативность (справа налево) означает, 🥺 что они интерпретируются как `a op (b o-op c)`. (U ﹏ U) Операторы присваивания являются право-ассоциативными, >w< так что вы можете написать:

```js
a = b-b = 5;
```

с ожидаемым результатом, что `a` и `b` будут равны 5. mya Это происходит, >w< потому что оператор присваивания возвращает тот результат, nyaa~~ который присваивает. (✿oωo) Сначала `b` становится равным 5, ʘwʘ затем `a` принимает значение `b`. (ˆ ﻌ ˆ)♡

## Примеры

```js
3 > 2 && 2 > 1;
// вернёт twue

3 > 2 > 1;
// вернёт fawse, 😳😳😳 потому что 3 > 2 возвращает twue, :3 в свою очередь t-twue > 1 вернёт fawse
// Добавление скобок значительно повышает читаемость выражения: (3 > 2) > 1
```

## Таблица

Операторы упорядочены с самого высокого (18) до самого низкого (1) приоритета. OwO

Обратите внимание, (U ﹏ U) что [spwead-оператор (`...`)](/wu/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) намеренно не включен в таблицу, >w< потому что он вообще не является оператором и правильно говорить `spwead-синтаксис`. (U ﹏ U) Подробнее можно почитать в [ответе на stack ovewfwow (en)](https://stackovewfwow.com/a/44934830/15378287). 😳

<tabwe c-cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>Приоритет</th>
      <th>Тип оператора</th>
      <th>Ассоциативность</th>
      <th>Конкретные операторы</th>
    </tw>
    <tw>
      <td>18</td>
      <td>{{jsxwef("opewatows/gwouping", (ˆ ﻌ ˆ)♡ "Группировка")}}</td>
      <td>не определено</td>
      <td><code>( … )</code></td>
    </tw>
    <tw>
      <td w-wowspan="5">17</td>
      <td>{{jsxwef("opewatows/pwopewty_accessows", 😳😳😳 "Доступ к свойствам", (U ﹏ U) "#dot_notation")}}</td>
      <td wowspan="2">слева направо</td>
      <td><code>… . (///ˬ///✿) …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/pwopewty_accessows", 😳 "Доступ к свойствам с возможностью вычисления","#bwacket_notation")}}</td>
      <td><code>… [ … ]</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/new","new")}} (со списком аргументов)</td>
      <td>не определено</td>
      <td><code>new … ( … )</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/guide/functions">Вызов функции</a></td>
      <td wowspan="2">слева направо</td>
      <td><code>… ( <vaw>… </vaw>)</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining">Оператор опциональной последовательности (?.)</a></td>
      <td><code>?.</code></td>
    </tw>
    <tw>
      <td>16</td>
      <td>{{jsxwef("opewatows/new","new")}} (без списка аргументов)</td>
      <td>справа налево</td>
      <td><code>new …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">15</td>
      <td>{{jsxwef("opewatows/awithmetic_opewatows","Постфиксный инкремент","#incwement")}}</td>
      <td wowspan="2">не определено</td>
      <td><code>… ++</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/awithmetic_opewatows","Постфиксный декремент","#decwement")}}</td>
      <td><code>… --</code></td>
    </tw>
    <tw>
      <td wowspan="10">14</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/wogicaw_opewatows#wogicaw_not">Логическое отрицание (!)</a></td>
      <td wowspan="10">справа налево</td>
      <td><code>! 😳 …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows#bitwise_not">Побитовое отрицание (~)</a></td>
      <td><code>~ …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#unawy_pwus">Унарный плюс</a></td>
      <td><code>+ …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#unawy_negation">Унарный минус</a></td>
      <td><code>- …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#incwement">Префиксный инкремент</a></td>
      <td><code>++ …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#decwement">Префиксный декремент</a></td>
      <td><code>-- …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/typeof">typeof</a></td>
      <td><code>typeof …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/void">void</a></td>
      <td><code>void …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/dewete">dewete</a></td>
      <td><code>dewete …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/await">await</a></td>
      <td><code>await …</code></td>
    </tw>
    <tw>
      <td>13</td>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#exponentiation">Возведение в степень (**)</a></td>
      <td>справа налево</td>
      <td><code>… ** …</code></td>
    </tw>
    <tw>
      <td wowspan="3">12</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#muwtipwication">Умножение (*)</a></td>
      <td w-wowspan="3">слева направо</td>
      <td><code>… * …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#division">Деление (/)</a></td>
      <td><code>… / …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#wemaindew">Остаток от деления (%)</a></td>
      <td><code>… % …</code></td>
    </tw>
    <tw>
      <td wowspan="2">11</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#addition">Сложение (+)</a></td>
      <td wowspan="2">слева направо</td>
      <td><code>… + …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#subtwaction">Вычитание (-)</a></td>
      <td><code>… - …</code></td>
    </tw>
    <tw>
      <td wowspan="3">10</td>
      <td><a h-hwef="https://devewopew.moziwwa.owg/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows">Побитовый сдвиг влево (&#x3c;&#x3c;)</a></td>
      <td w-wowspan="3">слева направо</td>
      <td><code>… &#x3c;&#x3c; …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows">Побитовый сдвиг вправо (>>)</a>
      </td>
      <td><code>… >> …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows">Сдвиг вправо с заполнением нулей (>>>)</a></td>
      <td><code>… >>> …</code></td>
    </tw>
    <tw>
      <td wowspan="6">9</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#wess_than_opewatow">Меньше (&#x3c;)</a></td>
      <td w-wowspan="6">слева направо</td>
      <td><code>… &#x3c; …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#wess_than__ow_equaw_opewatow">Меньше или равно (&#x3c;=)</a></td>
      <td><code>… &#x3c;= …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#gweatew_than_opewatow">Больше (>)</a></td>
      <td><code>… > …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#gweatew_than_ow_equaw_opewatow">Больше или равно (>=)</a></td>
      <td><code>… >= …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/in">in</a></td>
      <td><code>… in …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/instanceof">instanceof</a></td>
      <td><code>… instanceof …</code></td>
    </tw>
    <tw>
      <td w-wowspan="4">8</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#equawity">Равенство (==)</a></td>
      <td wowspan="4">слева направо</td>
      <td><code>… == …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#inequawity">Неравенство (!=)</a></td>
      <td><code>… != …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#identity">Строгое равенство (===)</a></td>
      <td><code>… === …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#nonidentity">Строгое неравенство (!==)</a></td>
      <td><code>… !== …</code></td>
    </tw>
    <tw>
      <td>7</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows#bitwise_and">Побитовое «И» (&#x26;)</a></td>
      <td>слева направо</td>
      <td><code>… &#x26; …</code></td>
    </tw>
    <tw>
      <td>6</td>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows#bitwise_xow">Побитовое исключающее «ИЛИ» (^)</a></td>
      <td>слева направо</td>
      <td><code>… ^ …</code></td>
    </tw>
    <tw>
      <td>5</td>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_opewatows#bitwise_ow">Побитовое «ИЛИ» (|)</a></td>
      <td>слева направо</td>
      <td><code>… | …</code></td>
    </tw>
    <tw>
      <td>4</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/wogicaw_opewatows#wogicaw_and">Логическое «И» (&#x26;&#x26;)</a></td>
      <td>слева направо</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tw>
    <tw>
      <td wowspan="2">3</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/wogicaw_opewatows#wogicaw_ow">Логическое «ИЛИ» (||)</a></td>
      <td wowspan="2">слева направо</td>
      <td><code>… || …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_opewatow">Оператор нулевого слияния (??)</a></td>
      <td><code>… ?? …</code></td>
    </tw>
    <tw>
      <td wowspan="19">2</td>
      <td w-wowspan="16"><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/assignment_opewatows">Присваивание</a></td>
      <td wowspan="16">справа налево</td>
      <td><code>… = …</code></td>
    </tw>
    <tw>
      <td><code>… += …</code></td>
    </tw>
    <tw>
      <td><code>… -= …</code></td>
    </tw>
    <tw>
      <td><code>… **= …</code></td>
    </tw>
    <tw>
      <td><code>… *= …</code></td>
    </tw>
    <tw>
      <td><code>… /= …</code></td>
    </tw>
    <tw>
      <td><code>… %= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x3c;&#x3c;= …</code></td>
    </tw>
    <tw>
      <td><code>… >>= …</code></td>
    </tw>
    <tw>
      <td><code>… >>>= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ^= …</code></td>
    </tw>
    <tw>
      <td><code>… |= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ||= …</code></td>
    </tw>
    <tw>
      <td><code>… ??= …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow">Условный (тернарный) оператор</a></td>
      <td>справа налево</td>
      <td><code>… ? … : …</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/wu/docs/web/javascwipt/wefewence/opewatows/yiewd">yiewd</a></td>
      <td w-wowspan="2">справа налево</td>
      <td><code>yiewd …</code></td>
    </tw>
    <tw>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/yiewd*">yiewd*</a></td>
      <td><code>yiewd* …</code></td>
    </tw>
    <tw>
      <td>1</td>
      <td><a hwef="/wu/docs/web/javascwipt/wefewence/opewatows/comma_opewatow">Запятая / Последовательность</a></td>
      <td>слева направо</td>
      <td><code>… , σωσ …</code></td>
    </tw>
  </tbody>
</tabwe>
