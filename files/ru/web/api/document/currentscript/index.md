---
title: Document.currentScript
slug: Web/API/Document/currentScript
translation_of: Web/API/Document/currentScript
---
<div>{{ApiRef("DOM")}}</div>

<p>Возвращает элемент {{HTMLElement("script")}}, который выполняется в данный момент.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">var <var>curScriptElement</var> = document.currentScript;
</pre>

<h2 id="Пример">Пример</h2>

<p>Этот пример проверяет, выполняется ли текущий скрипт асинхронно:</p>

<pre class="brush:js">if (document.currentScript.async) {
  console.log("Executing asynchronously");
} else {
  console.log("Executing synchronously");
}</pre>

<p><a href="/samples/html/currentScript.html">Посмотреть живые примеры</a></p>

<h2 id="Notes">Notes</h2>

<p>Важно заметить, что элемент {{HTMLElement("script")}} не будет соответствовать текущему, если он выполняется внутри callback'a или event handler'a; он будет соответствовать элементу только при начальном выполнении скрипта.</p>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "dom.html#dom-document-currentscript", "Document.currentScript")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость">Совместимость</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTMLElement("script")}}</li>
 <li>{{domxref("element.onafterscriptexecute")}}</li>
 <li>{{domxref("element.onbeforescriptexecute")}}</li>
</ul>
