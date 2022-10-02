---
title: apply-templates
slug: Web/XSLT/Element/apply-templates
tags:
  - XSLT_Reference
translation_of: Web/XSLT/Element/apply-templates
original_slug: Web/XSLT/apply-templates
---
<p>{{ XsltRef() }}</p>
<p><code>&lt;xsl:apply-templates&gt;</code> 요소는 입력 트리 안 노드 집합을 선택하고 그 집합에 알맞은 템플릿을 적용하도록 처리기에게 지시합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre>&lt;xsl:apply-templates select=EXPRESSION mode=NAME&gt;
	&lt;xsl:with-param&gt; [optional]
	&lt;xsl:sort&gt; [optional]
&lt;/xsl:apply-templates&gt;</pre>
<h3 id=".ED.95.84.EC.88.98_.EC.86.8D.EC.84.B1" name=".ED.95.84.EC.88.98_.EC.86.8D.EC.84.B1">필수 속성</h3>
<p>없음.</p>
<h3 id=".EC.84.A0.ED.83.9D_.EC.86.8D.EC.84.B1" name=".EC.84.A0.ED.83.9D_.EC.86.8D.EC.84.B1">선택 속성</h3>
<dl>
 <dt>
  <code>select</code></dt>
 <dd>
  처리할 노드를 지정하는 XPath 식을 씁니다. 별표(<code>*</code>)는 전체 노드 집합을 선택합니다. 이 속성이 없으면, 현재 노드의 모든 자식 노드를 선택합니다.</dd>
 <dt>
  <code>mode</code></dt>
 <dd>
  같은 노드를 정의하는 다양한 처리 방법이 있다면, 그 방법들을 구별합니다.</dd>
</dl>
<h3 id=".ED.83.80.EC.9E.85" name=".ED.83.80.EC.9E.85">타입</h3>
<p>명령, 템플릿 안에 나타남</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xslt#section-Applying-Template-Rules">XSLT section 5.4, Applying Template Rules</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
