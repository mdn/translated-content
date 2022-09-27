---
title: Порядок выполнения и обработка ошибок
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
---
<p>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</p>

<div class="summary">
<p>JavaScript поддерживает компактный набор инструкций, особенно управляющих инструкций, которые вы можете использовать, чтобы реализовать интерактивность в вашем приложении. В данной главе даётся обзор этих инструкций.</p>
</div>

<p>Более подробная информация об инструкциях, рассмотренных в данной главе, содержится в <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements">справочнике по JavaScript</a>. Точка с запятой ( <code>;</code> ) используется для разделения инструкций в коде.</p>

<p>Любое выражение (expression) в JavaScript является также инструкцией (statement). Чтобы получить более подробную информацию о выражениях, прочитайте <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators">Выражения и операторы</a>.</p>

<h2 id="Инструкция_block">Инструкция block</h2>

<p>Инструкция block является фундаментальной и используется для группировки других инструкций. Блок ограничивается фигурными скобками:</p>

<pre>{ statement_1; statement_2; ... statement_n; }</pre>

<p>Блок обычно используется с управляющими инструкциями (например, <code>if</code>, <code>for</code>, <code>while</code>).</p>

<pre class="brush: js">while (x &lt; 10) { x++; }</pre>

<p>В вышеприведённом примере <code>{ x++; }</code> является блоком.</p>

<p><strong>Обратите внимание:</strong> в JavaScript <strong>отсутствует</strong> область видимости блока до ECMAScript2015. Переменные, объявленные внутри блока, имеют область видимости функции (или скрипта), в которой находится данный блок, вследствие чего они сохранят свои значения при выходе за пределы блока. Другими словами, блок не создаёт новую область видимости. "Автономные" (standalone) блоки в JavaScript могут продуцировать полностью отличающийся результат, от результата в языках C или Java. Например:</p>

<pre class="brush: js">var x = 1;
{
  var x = 2;
}
console.log(x); // выведет 2</pre>

<p>В вышеприведённом примере инструкция <code>var x</code> внутри блока находится в той же области видимости, что и инструкция <code>var x</code> перед блоком. В C или Java эквивалентный код выведет значение 1.</p>

<p>Начиная с ECMAScript 6, оператор <code>let</code> позволяет объявить переменную в области видимости блока. Чтобы получить более подробную информацию, прочитайте {{jsxref("Statements/let", "let")}}.</p>

<h2 id="Условные_инструкции">Условные инструкции</h2>

<p>Условная инструкция — это набор команд, которые выполняются, если указанное условие является истинным. JavaScript поддерживает две условные инструкции: <code>if...else</code> и <code>switch</code>.</p>

<h3 id="Инструкция_if...else">Инструкция if...else</h3>

<p>Используйте оператор <code>if</code> для выполнения инструкции, если логическое условия истинно. Используйте опциональный <code>else</code>, для выполнения инструкции, если условие ложно. Оператор if выглядит так:</p>

<pre class="brush: js">if (condition) {
    statement_1;
} else {
    statement_2;
}</pre>

<p>  Здесь <code>condition</code> может быть любым выражением, вычисляемым как истинное (true) или ложное (false). Чтобы получить более подробную информацию о значениях <code>true </code>и <code>false</code>, прочитайте <a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description">Boolean</a>. Если условие оценивается как<code> true</code>, то выполняется <code>statement_1</code>, в противном случае -<code> statement_2</code>. Блоки <code>statement_1 </code>и<code> statement_2</code> могут быть любыми блоками, включая также вложенные инструкции <code>if</code>.</p>

<p>Также вы можете объединить несколько инструкций, пользуясь <code>else if</code> для получения последовательности проверок условий:</p>

<pre class="syntaxbox">if (condition_1) { statement_1;} else if (condition_2) { statement_2;} else if (condition_n) { statement_n; } else { statement_last;}</pre>

<p>В случае нескольких условий только первое логическое условие, которое вычислится истинным (true), будет выполнено. Используйте блок ( <code>{ ... }</code> ) для группировки нескольких инструкций. Применение блоков является хорошей практикой, особенно когда используются вложенные инструкции <code>if</code>:</p>

<pre>if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}</pre>

<p>Нежелательно использовать простые присваивания в условном выражении, т.к. присваивание может быть спутано с равенством при быстром просмотре кода. Например, не используйте следующий код:</p>

<pre class="brush: js">if (x = y) { /* ... */ }
</pre>

<p>Если вам нужно использовать присваивание в условном выражении, то распространённой практикой является заключение операции присваивания в дополнительные скобки. Например:</p>

<pre class="brush: js">if ( (x = y) ) { /* ... */ }</pre>

<h4 id="Ложные_значения">Ложные значения</h4>

<p>Следующие значения являются {{Glossary("Falsy", "ложными")}}:</p>

<ul>
 <li><code>false</code></li>
 <li><code>undefined</code></li>
 <li><code>null</code></li>
 <li><code>0</code></li>
 <li><code>NaN</code></li>
 <li>пустая строка ( <code>""</code> )</li>
</ul>

<p>Все остальные значения, включая все объекты, будут восприняты как истина при передаче в условное выражение.</p>

<p>Не путайте примитивные логические значения <code>true</code> и <code>false</code> со значениями true и false объекта {{jsxref("Boolean")}}. Например:</p>

<pre class="brush: js">var b = new Boolean(false);
if (b) // это условие true
if (b == true) // это условие false
</pre>

<p>В следующем примере функция <code>checkData</code> возвращает <code>true</code>, если число символов в объекте <code>Text</code> равно трём; в противном случае функция отображает окно alert и возвращает <code>false</code>.</p>

<pre class="brush: js">function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
    document.form1.threeChar.value + " is not valid.");
    return false;
  }
}</pre>

<h3 id="Инструкция_switch">Инструкция switch</h3>

<p>Инструкция <code>switch</code> позволяет сравнить значение выражения с различными вариантами и при совпадении выполнить соответствующий код. Инструкция имеет следующий вид:</p>

<pre>switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_default
      [break;]
}
</pre>

<p>Сначала производится поиск ветви <code>case</code> с меткой <code>label</code>, совпадающей со значением выражения <code>expression</code>. Если совпадение найдено, то соответствующий данной ветви код выполняется до оператора <code>break</code>, который прекращает выполнение <code>switch</code> и передаёт управление дальше. В противном случае управление передаётся необязательной ветви <code>default</code> и выполняется соответствующий ей код. Если ветвь <code>default</code> не найдена, то программа продолжит выполняться со строчки, следующей за инструкцией <code>switch</code>. По соглашению ветвь <code>default</code> является последней ветвью, но следовать этому соглашению необязательно.</p>

<p>Если оператор <code>break</code> отсутствует, то после выполнения кода, который соответствует выбранной ветви, начнётся выполнение кода, который следует за ней.</p>

<p>В следующем примере если <code>fruittype</code> имеет значение <code>"Bananas"</code>, то будет выведено сообщение<code> "Bananas are $0.48 a pound."</code> и оператор <code>break</code> прекратит выполнение <code>switch</code>. Если бы оператор <code>break</code> отсутствовал, то был бы также выполнен код, соответствующий ветви <code>"Cherries"</code>, т.е. выведено сообщение <code>"Cherries are $3.00 a pound."</code>.</p>

<pre class="brush: js">switch (fruittype) {
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
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
   console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");</pre>

<h2 id="Инструкции_обработки_исключений">Инструкции обработки исключений</h2>

<p>Инструкция <code>throw</code> используется, чтобы выбросить исключение, а инструкция <code>try...catch</code>, чтобы его обработать.</p>

<h3 id="Типы_исключений">Типы исключений</h3>

<p>Практически любой объект может быть выброшен как исключение. Тем не менее, не все выброшенные объекты создаются равными. Обычно числа или строки выбрасываются как исключения, но часто более эффективным является использование одного из типов исключений, специально созданных для этой цели:</p>

<ul>
 <li><a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types">Исключения ECMAScript</a></li>
 <li>{{domxref("DOMException")}} и {{domxref("DOMError")}}</li>
</ul>

<h3 id="Инструкция_throw">Инструкция throw</h3>

<p>Используйте инструкцию <code>throw</code>, чтобы выбросить исключение. При выбросе исключения нужно указать выражение, содержащее значение, которое будет выброшено:</p>

<pre>throw expression;</pre>

<p>Вы можете выбросить любое выражение, а не только выражения определённого типа. В следующем примере выбрасываются исключения различных типов:</p>

<pre class="brush: js">throw "Error2";                                              // string
throw 42;                                                    // number
throw true;                                                  // boolean
throw { toString: function() { return "I'm an object!"; } }; // object</pre>

<div class="note"><strong>Примечание:</strong> Вы можете выбросить объект как исключение. Вы можете обращаться к свойствам данного объекта в блоке <code>catch</code>.</div>

<p class="note">В следующем примере объект <code>UserException</code> выбрасывается как исключение:</p>

<pre class="brush: js">function UserException (message) {
  this.message = message;
  this.name = "UserException";
}

UserException.prototype.toString = function () {
  return this.name + ': "' + this.message + '"';
}

throw new UserException("Value too high");</pre>

<h3 id="Инструкция_try...catch">Инструкция try...catch</h3>

<p>Инструкция <code>try...catch</code> состоит из блока <code>try</code>, который содержит одну или несколько инструкций, и блок <code>catch</code>, которые содержит инструкции, определяющие порядок действий при выбросе исключения в блоке <code>try</code>. Иными словами, если в блоке <code>try</code> будет выброшено исключение, то управление будет передано в блок <code>catch</code>. Если в блоке <code>try</code> не возникнет исключений, то блок <code>catch</code> будет пропущен. Блок <code>finally</code> будет выполнен после окончания работы блоков <code>try</code> и <code>catch</code>, вне зависимости от того, было ли выброшено исключение.</p>

<p>В следующем примере вызывается функция <code>getMonthName</code>, которая возвращает название месяца по его номеру. Если месяца с указанным номером не существует, то функция выбросит исключение <code>"InvalidMonthNo"</code>, которое будет перехвачено в блоке <code>catch</code>:</p>

<pre class="brush: js">function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler -&gt; your own
}

</pre>

<h4 id="The_catch_Block">Блок <code>catch</code></h4>

<p>Используйте блок <code>catch</code>, чтобы обработать исключения, сгенерированные в блоке <code>try</code>.</p>

<pre>catch (catchID) { statements }</pre>

<p>JavaScript создаёт идентификатор <code>catchID</code>, которому присваивается перехваченное исключение, при входе в блок <code>catch</code>; данный идентификатор доступен только в пределах блока <code>catch</code> и уничтожается при выходе из него.</p>

<p>В следующем примере выбрасывается исключение, которое перехватывается в блоке <code>catch</code>:</p>

<pre class="brush: js">try {
  throw "myException"
} catch (e) {
  console.error(e);
}</pre>

<h4 id="Блок_finally">Блок <code>finally</code></h4>

<p>Блок <code>finally</code> содержит код, который будет выполнен после окончания работы блоков <code>try</code> и <code>catch</code>, но до того, как будет выполнен код, который следует за инструкцией <code>try...catch</code>. Блок <code>finally</code> выполняется вне зависимости от того, было ли выброшено исключение. Блок <code>finally</code> выполняется даже в том случае, если исключение не перехватывается в блоке <code>catch</code>.</p>

<p>В следующем примере открывается файл, затем в блоке <code>try</code> происходит вызов функции <code>writeMyFile</code>, который может выбросить исключение. Если возникает исключение, то оно обрабатывается в блоке <code>catch</code>. В любом случае файл будет закрыт функцией <code>closeMyFile</code>, вызов которой находится в блоке <code>finally</code>.</p>

<pre class="brush: js">openMyFile();
try {
  writeMyFile(theData);
} catch(e) {
  handleError(e);
} finally {
  closeMyFile();
}</pre>

<p>Если блок <code>finally</code> возвращает значение, то данное значение становится возвращаемым значением всей связки <code>try-catch-finally</code>. Значения, возвращаемые блоками <code>try</code> и <code>catch</code>, будут проигнорированы.</p>

<pre class="brush: js">function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true;    // приостанавливается до завершения блока `finally`
    console.log(2); // не выполняется
  } finally {
    console.log(3);
    return false;   // заменяет предыдущий `return`
    console.log(4); // не выполняется
  }
  // `return false` выполняется сейчас
  console.log(5);  // не выполняется
}
f();               // отображает 0, 1, 3 и возвращает `false`</pre>

<p>Замена возвращаемых значений блоком <code>finally</code> распространяется в том числе и на исключения, которые выбрасываются или перевыбрасываются в блоке <code>catch</code>:</p>

<pre class="brush: js">function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e;      // приостанавливается до завершения блока `finally`
  } finally {
    return false; // заменяет предыдущий `throw`
  }
  // `return false` выполняется сейчас
}

try {
  f();
} catch(e) {
  // Не выполняется, т.к. `throw` в `catch `заменяется на `return` в `finally`
  console.log('caught outer "bogus"');
}

// В результате отображается сообщение caught inner "bogus"
// и возвращается значение `false`</pre>

<h4 id="Nesting_try...catch_Statements">Вложенные инструкции <code>try...catch</code></h4>

<p>Вы можете вкладывать инструкции <code>try...catch</code> друг в друга. Если внутренняя инструкция <code>try...catch</code> не имеет блока <code>catch</code>, то она должна иметь блок finally, кроме того исключение будет перехвачено во внешнем блоке <code>catch</code>. Для получения большей информации ознакомьтесь с вложенными <a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks">try-блоками</a>.</p>

<h3 id="Использование_объекта_Error">Использование объекта Error</h3>

<p>В зависимости от типа ошибки вы можете использовать свойства <code>name</code> и <code>message</code>, чтобы получить более подробную информацию. Свойство <code>name</code> содержит название ошибки (например, <code>DOMException</code> или <code>Error</code>), свойство <code>message</code> — описание ошибки.</p>

<p>Если вы выбрасываете собственные исключения, то чтобы получить преимущество, которое предоставляют эти свойства (например, если ваш блок <code>catch</code> не делает различий между вашими исключениями и системными), используйте конструктор <code>Error</code>. Например:</p>

<pre class="brush: js">function doSomethingErrorProne () {
  if ( ourCodeMakesAMistake() ) {
    throw ( new Error('The message') );
  } else {
    doSomethingToGetAJavascriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  console.log(e.name);    // 'Error'
  console.log(e.message); // 'The message' или JavaScript error message
}</pre>

<h2 id="Объект_Promise">Объект Promise</h2>

<p>Начиная с ECMAScript2015, JavaScript поддерживает объект {{jsxref("Promise")}}, который используется для отложенных и асинхронных операций.</p>

<p>Объект <code>Promise</code> может находиться в следующих состояниях:</p>

<ul>
 <li><em>ожидание (pending)</em>: начальное состояние, не выполнено и не отклонено.</li>
 <li><em>выполнено (fulfilled)</em>: операция завершена успешно.</li>
 <li><em>отклонено (rejected)</em>: операция завершена с ошибкой.</li>
 <li><em>заданный (settled)</em>: промис выполнен или отклонен, но не находится в состоянии ожидания.</li>
</ul>

<p><img alt="" src="https://mdn.mozillademos.org/files/8633/promises.png"></p>

<h3 id="Загрузка_изображения_при_помощи_XHR">Загрузка изображения при помощи XHR</h3>

<p>Простой пример использования объектов <code>Promise</code> и <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> для загрузки изображения доступен в репозитории MDN <a href="https://github.com/mdn/js-examples/tree/master/promises-test">promise-test</a> на GitHub. Вы также можете <a href="https://mdn.github.io/js-examples/promises-test/">посмотреть его в действии</a>. Каждый шаг прокомментирован, что позволяет вам разобраться в архитектуре <code>Promise</code> и XHR. Здесь приводится версия без комментариев:</p>

<pre class="brush: js">function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:'
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}</pre>

<p>{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}</p>
