---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
---
<div>{{jsSidebar("Functions")}}</div>

<p>Свойство <code><strong>callee</strong> псевдомассива <strong>arguments</strong></code> хранит ссылку на функцию-родитель.</p>

<h2 id="Описание">Описание</h2>

<div class="warning"><strong>Внимание:</strong> В ES5 <a href="/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode" title="/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode">strict mode</a> использование <code>arguments.callee</code> запрещено.</div>

<h3 id="Зачем_вообще_использовать_arguments.callee">Зачем вообще использовать <code>arguments.callee</code>?</h3>

<p>В ранних версиях javaScript отсутствовала такая фишка, как <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/function#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5">Named Function Expression </a>и единственным спасением было свойство <strong>callee</strong>. К примеру:</p>

<pre class="brush: js">var f = function test() {
    alert(typeof test); //undefined
    alert(typeof arguments.callee); //function
}
</pre>

<p>В нынешние времена, когда мы уже можем работать с <em>NFE</em>, надобность в использовании свойства <strong>callee </strong>сама собой отпадает<strong>.</strong></p>

<pre class="brush: js">var f = function test(){
   alert(typeof test); //function
}</pre>

<p>Действительно незаменимым оно остаётся всего в одной ситуации. Когда мы создаём анонимную функцию напрямую через конструктор <em>Function.</em></p>

<pre class="brush: js">var b = new Function("", "alert(typeof arguments.callee)");</pre>

<h2 id="Пример_использования">Пример использования</h2>

<h3 id="Использование_arguments.callee_для_создания_рекурсии">Использование <code>arguments.callee</code> для создания рекурсии</h3>

<pre class="brush: js">var factorial = function(n) {
  return n == 1 ? 1 : n * arguments.callee(n-1);
};

factorial(7);
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Initial definition. Implemented in JavaScript 1.2</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
</ul>
