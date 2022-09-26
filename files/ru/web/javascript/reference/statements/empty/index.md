---
title: Пустая инструкция
slug: Web/JavaScript/Reference/Statements/Empty
tags:
  - 'Statement, инструкция, пустая инструкция'
translation_of: Web/JavaScript/Reference/Statements/Empty
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong>Пустая инструкция</strong> используется, когда инструкция не нужна, хотя синтаксис JavaScript будет предполагать её.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">;
</pre>

<h2 id="Описание">Описание</h2>

<p>Пустая инструкция - точка с запятой (;) оповещает о том, что ни одно выражение не будет выполняться, даже если синтаксис JavaScript ожидает этого.</p>

<p>Противоположное поведение, где вы хотите использовать несколько заявлений, но JavaScript позволяет только одно, можно сделать используя <a href="/ru/docs/Web/JavaScript/Reference/Statements/block"> блок</a>; он комбинирует несколько инструкций в одно.</p>

<h2 id="Примеры">Примеры</h2>

<p>Пустая инструкция используется в выражениях циклов. Смотрите следующий пример с пустым телом цикла:</p>

<pre class="brush: js">var arr = [1, 2, 3];

// Приравняет все значения массива к 0
for (i = 0; i &lt; arr.length; arr[i++] = 0) /* выражения */ ;

console.log(arr)
// [0, 0, 0]
</pre>

<p><strong>Заметьте:</strong> Это хорошая идея: комментировать намеренное использование пустых инструкций, т.к. не очевидно отличить их от нормальной точки с запятой. В следующем примере использование, вероятно, ненамеренное:</p>

<pre class="brush: js">if (condition);       // Внимание, этот if ничего не делает!
   killTheUniverse()  // Это всегда выполняется!!!
</pre>

<p>Другой пример: <a href="/ru/docs/Web/JavaScript/Reference/Statements/if...else"><code>if...else</code></a> без фигурных скобок  (<code>{}</code>). Если <code>three</code> истинно, ничего не произойдёт, <code>four</code> не важна, и функция <code>launchRocket()</code> тоже не запустится.</p>

<pre class="brush: js">if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-empty-statement', 'Empty statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-empty-statement', 'Empty statement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.3', 'Empty statement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-12.3', 'Empty statement')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-12.3', 'Empty statement')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Изначальное определение</td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Statements/block", "Блок")}}</li>
</ul>
