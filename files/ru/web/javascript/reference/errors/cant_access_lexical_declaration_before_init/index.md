---
title: 'ReferenceError: can''t access lexical declaration`X'' before initialization'
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
tags:
  - Errors
  - JavaScript
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("ReferenceError")}}</p>

<h2 id="Что_случилось">Что случилось?</h2>

<p>Попытка доступа к лексической переменной до её инициализации. Это может произойти в любом блоке, если попытаться обратиться к переменной, объявленной с помощью ключевых слов <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code> или <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a></code> до того, как им было присвоено значение.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неправильно">Неправильно</h3>

<p>Здесь переменная "foo" заново объявляется внутри блока с помощью ключевого слова <code>let</code>.</p>

<pre class="brush: js example-bad">function test() {
  let foo = 33;
  if (true) {
    let foo = (foo + 55);
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
</pre>

<h3 id="Правильно">Правильно</h3>

<p>Чтобы изменить "foo" в теле выражения if, надо убрать ключевое слово <code>let</code> и таким образом избавиться от повторного объявления.</p>

<pre class="brush: js example-good">function test(){
   let foo = 33;
   if (true) {
      foo = (foo + 55);
   }
}
test();
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let">Temporal Dead Zone and errors with let</a></li>
</ul>
