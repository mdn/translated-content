---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/switch
---
<div>{{jsSidebar("Statements")}}</div>

<h2 id="Сводка">Сводка</h2>

<p><strong>Инструкция switch</strong> сравнивает выражение со случаями, перечисленными <font face="Courier New, Andale Mono, monospace">внутри неё</font>, а затем выполняет соответствующие инструкции.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox">switch (expression) {
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
}</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>Выражение, значение которого сравнивается со всеми случаями.</dd>
 <dt><code>case valueN</code></dt>
 <dd>Случай, который проверяется на соответствие выражению (<code>expression</code>).</dd>
 <dt><code>statementsN</code></dt>
 <dd>Инструкции, которые выполняются, если <code>expression</code> соответствуют случаю.</dd>
 <dt><code>statements_def</code></dt>
 <dd>Инструкции, выполняемые если <code>expression</code> не соответствует ни одному случаю.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Если выражение соответствует какому-то случаю, то выполняются инструкции этого случая. Если несколько случаев соответствуют значению, только первый случай будет использован.</p>

<p>Сначала программа пытается найти подходящий случай, значение которого равно значению искомого выражения (используется <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">строгое сравнение</a>, <code>===)</code> и затем выполняет инструкции, соответствующие случаю. Если подходящего случая нет, ищется случай по умолчанию (<code>default</code>), который не является обязательным. Если случая по умолчанию нет, выполнение продолжается на инструкции, следующей сразу после <code>switch</code>. По соглашению, случай <code>default</code> описывается последним, но это не является строгим правилом.</p>

<p>Опциональная инструкция <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/break" title="JavaScript/Reference/Statements/break">break</a></code> выполняет выход из блока <code>switch</code>. Она может располагаться в каждом из случаев, но не является обязательной. Если её нет, то выполняется следующая инструкция из блока <code>switch</code>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example_Using_switch">Пример: Использование <code>switch</code></h3>

<p>В этом примере, если <code>expr</code> равно "Bananas", программа находит случай "Bananas" и выполняет соответствующие инструкции. При выполнении инструкции <code>break</code>, выполнение продолжится за пределами <code>switch</code>. Если бы <code>break</code> не было, то выполнились бы инструкции случая "Cherries".</p>

<pre class="brush: js">switch (expr) {
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
</pre>

<h3 id="What_happens_if_I_forgot_a_break">Пример: Что случится, если не использовать break?</h3>

<p>Если вы не использовали инструкцию <code>break</code>, то будут выполнены инструкции следующего случая. И проверка на соответствие выражению не будет выполняться.</p>

<pre class="brush: js">var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // foo равно 0, случай соответствует выражению и эти инструкции будут выполнены
        console.log(0)
        // ПРИМЕЧАНИЕ: здесь могла находиться забытая инструкция break
    case 1: // В случае 'case 0:' не было break, инструкции данного случая также будут выполнены
        console.log(1);
        break; // В конце расположен break, поэтому выполнение не перейдёт к случаю 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}</pre>

<h3 id="Methods_for_Multi-criteria_Case">Цепочки case</h3>

<h4 id="Одна_операция">Одна операция</h4>

<p>
  Этот метод использует тот факт, что после <code>case</code> нет прерывания и продолжится
  выполнение следующего <code>case</code> независимо от того, соответствует ли <code>case</code> 
  предоставленному условию. Подробнее в примере "Что случится, если не использовать break?.
</p>

<p>
  Это пример <code>case</code> с одной операцией, где четыре разных значения отрабатывают одинаково.
</p>

<pre class="brush: js">var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}</pre>

<h4 id="Цепочка_операций">Цепочка операций</h4>

<p>
  Это пример множественных операций внутри <code>case</code>, где в зависимости от 
  предоставленного числа можно увидеть разный вывод. Здесь показывается, что операции 
  отрабатывают в том порядке, в котором расположены <code>case</code>. При этом
  числовая последовательность может не соблюдаться. Также возможно примешать в 
  <code>case</code> строки.
</p>

<pre class="brush: js">var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}</pre>


Вывод этого примера:
<table>
  <tr>
    <th>Значение</th>
    <th>Лог</th>
  </tr>
  <tr><td>`foo` is `NaN` or not `1`, `2`, `3`, `4`, `5`, or `0`</td><td>Please pick a number from 0 to 5!</td></tr>
  <tr><td>`0`</td><td>Output: So What Is Your Name?</td></tr>
  <tr><td>`1`</td><td>Output: What Is Your Name?</td></tr>
  <tr><td>`2`</td><td>Output: Your Name?</td></tr>
  <tr><td>`3`</td><td>Output: Name?</td></tr>
  <tr><td>`4`</td><td>Output: ?</td></tr>
  <tr><td>`5`</td><td>Output: !</td></tr>
</table>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>



<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/JavaScript/Reference/Statements/if...else" lang="ru"><code>if...else</code></a></li>
</ul>
