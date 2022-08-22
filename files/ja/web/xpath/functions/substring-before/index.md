---
title: substring-before
slug: Web/XPath/Functions/substring-before
tags:
  - Function
  - XSLT
  - XSLT_Reference
  - substring-before
translation_of: Web/XPath/Functions/substring-before
---
<p>{{ XsltRef() }}</p>

<p><code>substring-before</code> 関数は、与えられた文字列内で、与えられた部分文字列よりも前にある部分の文字列を返します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre class="eval">substring-before(<em>haystack</em> ,<em>needle</em> )
</pre>

<h3 id="Arguments" name="Arguments">引数</h3>

<dl>
 <dt><em><code>haystack</code></em></dt>
 <dd>評価される文字列。この文字列の一部が返される。</dd>
</dl>

<dl>
 <dt><em><code>needle</code></em></dt>
 <dd>検索する文字列。<em><code>haystack</code></em> 内で最初に見つかった<em><code>needle</code></em> よりも前にあるすべての文字が返される。</dd>
</dl>

<h3 id="Returns" name="Returns">返値</h3>

<p>文字列。</p>

<h3 id="Examples" name="Examples">例</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>XPath の例</th>
   <th>出力</th>
  </tr>
  <tr>
   <td><code>substring-before('aa-bb','-')</code></td>
   <td><code>aa</code></td>
  </tr>
  <tr>
   <td><code>substring-before('aa-bb','a')</code></td>
   <td><code>(空文字列)</code></td>
  </tr>
  <tr>
   <td><code>substring-before('aa-bb','b')</code></td>
   <td><code>aa-</code></td>
  </tr>
  <tr>
   <td><code>substring-before('aa-bb','q')</code></td>
   <td>(空文字列)</td>
  </tr>
 </tbody>
</table>

<h3 id="Defined" name="Defined">定義元</h3>

<p><a class="external" href="http://www.w3.org/TR/xpath#function-substring-before">XPath 1.0 4.2</a></p>

<h3 id="Gecko_support" name="Gecko_support">Gecko の対応</h3>

<p>対応済み。</p>
