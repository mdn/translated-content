---
title: translate
slug: Web/XPath/Functions/translate
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/translate
---
<p>{{ XsltRef() }}</p>
<p><br>
 <code>translate</code> 함수는 문자열과 번역할 문자 집합을 평가하고 번역된 문자열을 반환합니다.</p>
<h3 id=".EA.B5.AC.EB.AC.B8" name=".EA.B5.AC.EB.AC.B8">구문</h3>
<pre class="eval">translate(<i>string</i> ,<i>abc</i> ,<i>XYZ</i> )
</pre>
<h3 id=".EC.9D.B8.EC.88.98" name=".EC.9D.B8.EC.88.98">인수</h3>
<dl>
 <dt>
  <i>
   <code>string</code></i>
 </dt>
 <dd>
  평가할 문자열.</dd>
</dl>
<dl>
 <dt>
  <i>
   <code>abc</code></i>
 </dt>
 <dd>
  바꿀 문자열.</dd>
</dl>
<dl>
 <dt>
  <i>
   <code>XYZ</code></i>
 </dt>
 <dd>
  교체에 쓰는 문자열.
  <i>
   <code>XYZ</code></i>
  에서 첫 문자는
  <i>
   <code>string</code></i>
  에서 나타나는
  <i>
   <code>abc</code></i>
  의 첫 문자가 나타날 때마다 교체합니다.</dd>
</dl>
<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>
<p>번역된 문자열.</p>
<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>
<p>XPath는 translate 함수가 모든 언어에서 대/소문자 변환에 sufficient solution이 아니다라고 기록합니다. XPath의 future 버전은 대/소문자 변환을 위해 추가 함수를 제공할 지도 모릅니다.</p>
<p>그러나, 이 함수는 현재 문자열을 대/소문자로 변환할 수 있는 함수에 가장 가깝습니다.</p>
<p>예</p>
<pre class="eval">&lt;xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" /&gt;
</pre>
<p>출력</p>
<pre class="eval">THE QUICK BROWN FOX.
</pre>
<ul>
 <li>만약
  <i>
   <code>abc</code></i>
  가
  <i>
   <code>XYZ</code></i>
  보다 길면,
  <i>
   <code>XYZ</code></i>
  에서 대응하는 문자가 없는
  <i>
   <code>abc</code></i>
  의 문자는 출현 때마다 제거됩니다.</li>
</ul>
<p>예</p>
<pre class="eval">&lt;xsl:value-of select="translate('The quick brown fox.', 'brown', 'red'" /&gt;
</pre>
<p>출력</p>
<pre class="eval">The quick red fdx.
</pre>
<ul>
 <li>만약
  <i>
   <code>XYZ</code></i>
  가
  <i>
   <code>abc</code></i>
  보다 더 많은 문자를 포함하면, 여분 문자는 무시됩니다.</li>
</ul>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xpath#function-translate">XPath 1.0 4.2</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
