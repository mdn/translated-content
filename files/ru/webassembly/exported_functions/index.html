---
title: Экспортируемые функции WebAssembly
slug: WebAssembly/Exported_functions
tags:
  - JavaScript
  - WebAssembly
  - wasm
  - Экспортированные функции
translation_of: WebAssembly/Exported_functions
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">Экспортированные функции WebAssembly - это функции вашего модуля доступные в JavaScript. В этой статье более подробно описывается, что они из себя представляют.</p>

<h2 id="Экспортированные…_что">Экспортированные… что?</h2>

<p>Экспортированные функции это просто JavaScript обёртки, которые вызывают функции модуля WebAssembly. При их использовании происходит неявное преобразование типов аргументов функции в типы, с которыми может работать WebAssembly (например, преобразование number в int32). Дальше эти аргументы передаются функции вашего модуля и она вызывается. Результат также преобразовывается и возвращается в JavaScript.</p>

<p>Вы можете получить список экспортированных функций двумя способами:</p>

<ul>
 <li>Вызовите <code><a href="/en-US/docs/WebAssembly/API/Table/get">Table.prototype.get()</a></code> у существующей таблице;</li>
 <li>Через <code><a href="/en-US/docs/WebAssembly/API/Instance/exports">Instance.exports</a></code> существующего экземпляра модуля.</li>
</ul>

<p>В любом случае вы получаете одну и туже обёртку функции вашего модуля. С точки зрения JavaScript, все экспортированные функции wasm являются функциями JavaScript, но они инкапсулированы экземпляром модуля wasm, и имеют только ограниченный способ доступа к ним.</p>

<h2 id="Пример">Пример</h2>

<p>Давайте посмотрим на пример, чтобы прояснить ситуацию (вы можете найти его на GitHub как <a href="https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html">table-set.html</a> или <a href="https://mdn.github.io/webassembly-examples/other-examples/table-set.html">запустить в своём браузере</a>, и посмотреть <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat">текстовое представление модуля wasm</a>):</p>

<pre class="brush: js">var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(obj =&gt; {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
  otherTable.set(0,tbl.get(0));
  otherTable.set(1,tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});</pre>

<p>Здесь мы создаём таблицу (<code>otherTable</code>) из JavaScript используя конструктор {{jsxref("WebAssembly.Table")}}, после этого мы загружаем модуль <code>table.wasm</code> при помощи функции {{jsxref("WebAssembly.instantiateStreaming()")}}.</p>

<p>Затем мы получаем объект содержащий все функции, экспортированные из экземпляра модуля. Извлекаем ссылки на эти функции через  <code><a href="/en-US/docs/WebAssembly/API/Table/get">tbl.get()</a>,</code> вызываем их и выводим результат работы в консоль. Затем мы используем <code>set()</code> чтобы таблица  <code>otherTable</code> содержала ссылки на те же функции, что и таблица <code>tbl</code>.</p>

<p>Чтобы доказать это, мы получаем ссылки на функции из таблицы  <code>otherTable</code> и вызываем их. При выводе в консоль они дают такие же результаты.</p>

<h2 id="Они_являются_настоящими_функциями">Они являются настоящими функциями</h2>

<p>В предыдущем примере возвращаемое значение каждого вызова <code><a href="/en-US/docs/WebAssembly/API/Table/get">Table.prototype.get()</a></code> является экспортированной функцией WebAssembly — это именно то, о чем мы говорили.</p>

<p>Стоит заметить что помимо того что они являются обёртками для функций WebAssembly, это обычные функции JavaScript. Если вы загрузите приведённый выше пример в <a href="/en-US/docs/WebAssembly#Browser_compatibility">браузере с поддержкой WebAssembly</a>, и запустите следующие строки в консоли:</p>

<pre class="brush: js">var testFunc = otherTable.get(0);
typeof testFunc;</pre>

<p>результатом выполнения будет <code>function</code>. Вы можете сделать с ней все тоже самое что и с другими <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">функциями</a> в JavaScript — <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind()</a> </code>и т.д. Вызов <code>testFunc.toString()</code> возвращает интересный результат:</p>

<pre class="brush: js">function 0() {
    [native code]
}</pre>

<p>Это наводит на мысль о том что эта функция является обёрткой.</p>

<p>Дополнительные сведения которые нужно знать при работе с экспортированными функциями:</p>

<ul>
 <li>Их свойство <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length">length</a> это количество аргументов указанных в сигнатуре wasm функции.</li>
 <li>Их свойство <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name">name</a> является результатом вызова <code>toString()</code> индекса функции в модуле wasm.</li>
 <li>Если вы попытаетесь вызвать экспортированную функцию wasm, которая принимает или возвращает значение типа i64, то это приведёт к ошибке, поскольку в настоящее время JavaScript не имеет точного способа представления i64. Однако в дальнейшем это может измениться - новый тип int64 рассматривается для будущих стандартов, который затем может использоваться wasm.</li>
</ul>
