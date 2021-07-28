---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
translation_of: Web/JavaScript/Reference/Global_Objects/String/toString
---
<div><font><font>{{JSRef}}</font></font></div>

<p><font><font>이 </font></font><strong><code>toString()</code></strong><font><font>메소드는 지정된 객체를 나타내는 문자열을 반환합니다.</font></font></p>

<div><font><font>{{EmbedInteractiveExample ( "pages / js / string-tostring.html")}}</font></font></div>

<h2 id="통사론"><font><font>통사론</font></font></h2>

<pre class="syntaxbox"><code><var>str</var>.toString()</code></pre>

<h3 id="반환_값"><font><font>반환 값</font></font></h3>

<p><font><font>호출 객체를 나타내는 문자열</font></font></p>

<h2 id="기술"><font><font>기술</font></font></h2>

<p><font><font>{{jsxref ( "String")}} 오브젝트 </font></font><code>toString()</code><font><font>는 {{jsxref ( "Object")}} 오브젝트 </font><font>의 </font><font>메소드를 </font><font>대체 </font><font>합니다. </font><font>{{jsxref ( "Object.prototype.toString ()")}}을 상속하지 않습니다. </font><font>{{jsxref ( "String")}} 오브젝트의 경우 </font></font><code>toString()</code><font><font>메소드는 </font><font>오브젝트 </font><font>의 문자열 표시를 리턴하며 {{jsxref ( "String.prototype.valueOf ()")}} 메소드와 동일합니다.</font></font></p>

<h2 id="예"><font><font>예</font></font></h2>

<h3 id="사용_toString"><font><font>사용 </font></font><code>toString()</code></h3>

<p><font><font>다음 예제는 {{jsxref ( "String")}} 오브젝트의 문자열 값을 표시합니다.</font></font></p>

<pre class="brush: js"><font><font>var x = new String ( 'Hello world');</font></font>
<font><font>
console.log (x.toString ()); </font><font>// 'Hello world'를 기록합니다.</font></font>
</pre>

<h2 id="명세서"><font><font>명세서</font></font></h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col"><font><font>사양</font></font></th>
  </tr>
  <tr>
   <td><font><font>{{SpecName ( 'ESDraft', '# sec-string.prototype.tostring', 'String.prototype.toString')}}}</font></font></td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성"><font><font>브라우저 호환성</font></font></h2>


<p><font><font>{{Compat ( "javascript.builtins.String.toString")}}</font></font></p>

<h2 id="또한보십시오"><font><font>또한보십시오</font></font></h2>

<ul>
 <li><font><font>{{jsxref ( "Object.prototype.toSource ()")}}</font></font></li>
 <li><font><font>{{jsxref ( "String.prototype.valueOf ()")}}</font></font></li>
</ul>
