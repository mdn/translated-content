---
title: 'URIError: malformed URI sequence'
slug: Web/JavaScript/Reference/Errors/Malformed_URI
translation_of: Web/JavaScript/Reference/Errors/Malformed_URI
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("URIError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Декодирование или кодирование URI не было успешным. Аргумент переданный функциям {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}},  или {{jsxref("decodeURIComponent")}} был недопустимым, из-за этого функция не смогла выполнить кодирование или декодирование.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Кодирование">Кодирование</h3>

<p>Кодирование заменяет каждое вхождение конкретного символа одним, двумя, тремя или четырьмя управляющими последовательностями, представленными  стандартом UTF-8. {{jsxref("URIError")}} возникнет, при попытке кодирования суррогата, не являющегося частью high-low пары, например:</p>

<pre class="brush: js example-bad">encodeURI('\uD800');
// "URIError: malformed URI sequence"

encodeURI('\uDFFF');
// "URIError: malformed URI sequence"
</pre>

<p>Нормальная high-low пара. Например:</p>

<pre class="brush: js example-good">encodeURI('\uD800\uDFFF');
// "%F0%90%8F%BF"</pre>

<h3 id="Декодирование">Декодирование</h3>

<p>Декодирование заменяет каждую управляющую последовательность в закодированном URI компоненте символом, который она представляет. Если такого символа нет, возникнет ошибка:</p>

<pre class="brush: js example-bad">decodeURIComponent('%E0%A4%A');
// "URIError: malformed URI sequence"
</pre>

<p>Правильный вариант обычно выглядит так:</p>

<pre class="brush: js example-good">decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "JavaScript_шеллы"</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("URIError")}}</li>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("encodeURIComponent")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
