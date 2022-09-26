---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>encodeURIComponent()</strong></code> - метод, кодирующий компонент универсального идентификатора ресурса (URI) заменой каждой определённой последовательности символов одной, двумя, тремя или четырьмя последовательностями символов, представленных в кодировке UTF-8  (будет только 4 управляющих последовательности для символов, состоящих из 2 "суррогатных" символов).</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">encodeURIComponent(str);</pre>

<h3 id="Параметры">Параметры</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>Строка. Компонент URI.</dd>
</dl>

<h2 id="Описание">Описание</h2>

<p><code>encodeURIComponent</code> изменяет все символы, за исключением следующих: латинские буквы, десятичные цифры, <code>- _ . ! ~ * ' ( )</code></p>

<p>Замечание: {{jsxref("URIError")}} будет брошена, если попытаться закодировать суррогат, который не является частью высоко-низкой пары, например:</p>

<pre class="brush: js">// низко-высокая пара - нормально
console.log(encodeURIComponent('\uD800\uDFFF'));

// один высокий суррогат бросит "URIError: malformed URI sequence"
console.log(encodeURIComponent('\uD800'));

// один низкий суррогат бросит "URIError: malformed URI sequence"
console.log(encodeURIComponent('\uDFFF'));
</pre>

<p>Чтоб избежать неожиданных запросов к серверу, вам следует вызывать <code>encodeURIComponent</code> для любых вводимых пользователем параметров, используемых как часть URI. Например, он мог написать "<code>Thyme &amp;time=again</code>" для переменной <code>comment</code>. Неиспользование <code>encodeURIComponent</code> для неё даст <code>comment=Thyme%20&amp;time=again</code>. Заметьте, что амперсанд и знак равно выделяют новую пару ключ-значение. Так что вместо комментария "<code>Thyme &amp;time=again</code>", вы получите два POST параметра, один -  "<code>Thyme </code>", а другой (<code>time</code>) равный "<code>again"</code>.</p>

<p><code>Для <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm">application/x-www-form-urlencoded</a></code> пробелы должны быть заменены на "+", поэтому вам может понадобиться <code>encodeURIComponent</code> с дополнительной заменой "%20" на "+".</p>

<p>Чтобы строго соблюдать <a class="external" href="http://tools.ietf.org/html/rfc3986">RFC 3986</a> (который резервирует !, ', (, ), и *), даже не смотря на то, что символы не используют сформированных URI разделителей, можно безопасно использовать следующие:</p>

<pre class="brush: js">function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
</pre>

<h2 id="Примеры">Примеры</h2>

<p>Пример представляет специальное кодирование, требуемое для заголовков сервера в UTF-8: <code>Content-Disposition</code> и <code>Link </code>(к примеру, имена файлов в UTF-8):</p>

<pre class="brush: js">var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''"
             + encodeRFC5987ValueChars(fileName);

console.log(header);
// логирует "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"


function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // Замечание: хотя RFC3986 резервирует "!", RFC5987 это не делает, так что нам не нужно избегать этого
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // Следующее не требуется для кодирования процентов для RFC5987, так что мы можем разрешить немного больше читаемости через провод: |`^
            replace(/%(?:7C|60|5E)/g, unescape);
}
</pre>

<h2 id="Спецификации">Спецификации</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.3.4', 'encodeURIComponent')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-encodeuricomponent-uricomponent', 'encodeURIComponent')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
