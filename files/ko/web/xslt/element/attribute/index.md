---
title: attribute
slug: Web/XSLT/Element/attribute
tags:
  - XSLT_Reference
translation_of: Web/XSLT/Element/attribute
original_slug: Web/XSLT/attribute
---
<p>{{ XsltRef() }}</p>
<p><code>&lt;xsl:attribute&gt;</code> 요소는 스타일시트에서 접근할 수 있는 어떤 값을 써서 출력 문서에 속성을 만듭니다. 요소는 속성값을 자리 잡게 하는 출력 문서 요소 안에 정의한 것 가운데 처음이어야 합니다.</p>
<h3 id=".EB.AC.B8.EB.B2.95" name=".EB.AC.B8.EB.B2.95">문법</h3>
<pre>&lt;xsl:attribute name=NAME namespace=URI&gt;
	TEMPLATE
&lt;/xsl:attribute&gt;</pre>
<h3 id=".ED.95.84.EC.88.98_.EC.86.8D.EC.84.B1" name=".ED.95.84.EC.88.98_.EC.86.8D.EC.84.B1">필수 속성</h3>
<dl>
 <dt>
  <code>name</code></dt>
 <dd>
  출력 문서에 만들려는 속성에 이름을 지정합니다. 이름은 유효한 QName이어야 합니다.</dd>
</dl>
<h3 id=".EC.84.A0.ED.83.9D_.EC.86.8D.EC.84.B1" name=".EC.84.A0.ED.83.9D_.EC.86.8D.EC.84.B1">선택 속성</h3>
<dl>
 <dt>
  <code>namespace</code></dt>
 <dd>
  출력 문서에 이 속성을 위한 이름공간(namespace) URI를 정의합니다. 이 요소와 관련된 이름공간 접두사를 설정할 수 없습니다.</dd>
</dl>
<h3 id=".ED.83.80.EC.9E.85" name=".ED.83.80.EC.9E.85">타입</h3>
<p>명령, 템플릿이나 <code>&lt;xsl:attribute-set&gt;</code> 요소 안에 나타남.</p>
<h3 id=".EC.A0.95.EC.9D.98" name=".EC.A0.95.EC.9D.98">정의</h3>
<p><a class="external" href="http://www.w3.org/TR/xslt#creating-attributes">XSLT section 7.1.3, Creating Attributes with xsl:attribute</a></p>
<h3 id="Gecko_.EC.A7.80.EC.9B.90" name="Gecko_.EC.A7.80.EC.9B.90">Gecko 지원</h3>
<p>지원함.</p>
