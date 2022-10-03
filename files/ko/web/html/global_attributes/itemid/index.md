---
title: itemid
slug: Web/HTML/Global_attributes/itemid
tags:
  - Global attribute
  - HTML
  - HTML Microdata
  - Microdata
  - Reference
  - 마이크로데이터
translation_of: Web/HTML/Global_attributes/itemid
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p><code><strong>itemid</strong></code> <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>은 아이템의 고유한 전역 식별자의 형태로 마이크로데이터를 제공합니다. <code>itemid</code> 특성은 {{htmlattrxref("itemscope")}}, {{htmlattrxref("itemtype")}} 특성 모두 가진 요소에만 지정할 수 있습니다. 또한 <code>itemscope</code> 특성에 대응하는 <code>itemtype</code>이 전역 식별자 어휘를 참조하거나 정의해야 합니다.</p>

<p><code>itemtype</code>의 전역 식별자에 대한 정확한 의미는 지정한 어휘 내에서의 해당 식별자 정의가 제공합니다. 어휘는 동일한 전역 식별자를 가지는 여러 아이템이 공존할 수 있는지, 공존한다면 동일한 식별자를 가진 아이템을 어떻게 처리할 것인지를 정의합니다.</p>

<p class="note"><strong>참고:</strong> {{glossary("WHATWG")}} 명세는 <code>itemid</code>가 반드시 {{glossary("URL")}}이어야 한다고 되어 있습니다. 하지만, 다음 예제에서는 {{glossary("URN")}} 역시 사용 가능하다는 것을 명확히 보여주고 있습니다. 이런 불일치는 마이크로데이터 명세의 불완전성을 반영한다고 볼 수 있습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;dl itemscope
    itemtype="http://vocab.example.net/book"
    itemid="urn:isbn:0-330-34032-8"&gt;
&lt;dt&gt;Title &lt;dd itemprop="title"&gt;The Reality Dysfunction
&lt;dt&gt;Author &lt;dd itemprop="author"&gt;Peter F. Hamilton
&lt;dt&gt;Publication date
&lt;dd&gt;&lt;time itemprop="pubdate" datetime="1996-01-26"&gt;26 January 1996&lt;/time&gt; &lt;/dl&gt;</pre>

<h3 id="구조화된_데이터">구조화된 데이터</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <td colspan="1" rowspan="14">itemscope</td>
   <td>itemtype: itemid</td>
   <td colspan="2" rowspan="1">
    <div class="jyrRxf-eEDwDf jcd3Mb IZ65Hb-hUbt4d">http://vocab.example.net/book: urn:isbn:0-330-34032-8</div>
   </td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>title</td>
   <td>The Reality Dysfunction</td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>author</td>
   <td>
    <div class="jyrRxf-eEDwDf jcd3Mb">Peter F. Hamilton</div>
   </td>
  </tr>
  <tr>
   <td>itemprop</td>
   <td>pubdate</td>
   <td>1996-01-26</td>
  </tr>
 </tbody>
</table>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제")}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.global_attributes.itemid")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>모든 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>.</li>
 <li>마이크로데이터 관련 다른 전역 특성:
  <ul>
   <li>{{htmlattrxref("itemprop")}}</li>
   <li>{{htmlattrxref("itemref")}}</li>
   <li>{{htmlattrxref("itemscope")}}</li>
   <li>{{htmlattrxref("itemtype")}}</li>
  </ul>
 </li>
</ul>
