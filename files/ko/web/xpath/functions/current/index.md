---
title: current
slug: Web/XPath/Functions/current
tags:
  - XSLT_Reference
translation_of: Web/XPath/Functions/current
---
<p>{{ XsltRef() }}</p>

<p><code>current</code> 함수는 XSLT 명령에서 문맥 노드를 얻는 데 쓸 수 있습니다.</p>

<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>

<pre class="eval">current()
</pre>

<h3 id=".EB.B0.98.ED.99.98" name=".EB.B0.98.ED.99.98">반환</h3>

<p>오직 현재 노드만을 포함하는 노드 집합.</p>

<h3 id=".EC.A3.BC.EC.9D.98" name=".EC.A3.BC.EC.9D.98">주의</h3>

<p>이 함수는 XPath에 더한 XSLT 고유 추가분입니다. 기본 XPath 함수 라이브러리의 일부가 아닙니다.</p>

<article>
<p>For an outermost expression (an expression not occurring within another expression), the current node is always the same as the context node (which will be returned by the <code>.</code> or <code>self</code> syntax). The following two are symantically equivalent.</p>

<pre><code>&lt;xsl:value-of select="current()"/&gt;</code></pre>

<pre><code>&lt;xsl:value-of select="."/&gt;</code></pre>

<p>In an inner expression (e.g. in square brackets), the current node is still the same as it would have been in an outermost expression. Thus within all of the following three expressions the <code>current</code> function (not the entire expressions) returns the same node. Moreover, the latter two are semantically equivalent.</p>

<pre><code>&lt;xsl:value-of select="current()"/&gt;</code></pre>

<pre><code>&lt;xsl:value-of select="foo/bar[current() = X]"/&gt;</code></pre>

<pre><code>&lt;xsl:variable name="current" select="current()"/&gt;
&lt;xsl:value-of select="foo/bar[$current = X]"/&gt;</code></pre>

<p>And the next code is also semantically equivalent to the latter two, since the <code>.</code> occurs in an outermost expression.</p>

<pre><code>&lt;xsl:variable name="current" select="."/&gt;
&lt;xsl:value-of select="foo/bar[$current = X]"/&gt;</code></pre>

<p>But the <code>.</code> always relate to the narrowest context. Thus in</p>

<pre><code>&lt;xsl:value-of select="foo/bar[. = X]"/&gt;</code></pre>

<p>the <code>.</code> returns the <code>bar</code> node, which may be different from the current node.</p>
</article>

<p> </p>

<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>

<p><a class="external" href="http://www.w3.org/TR/xslt#function-current">XSLT 1.0 12.4</a></p>

<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>

<p>지원함.</p>
