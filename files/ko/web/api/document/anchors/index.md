---
title: document.anchors
slug: Web/API/Document/anchors
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/Document/anchors
---
<div>{{APIRef("DOM")}} {{deprecated_header()}}</div>

<p>{{domxref("Document")}} 인터페이스의 <strong><code>anchors</code></strong> 읽기 전용 속성은 문서 내의 모든 앵커 목록을 반환합니다.</p>

<h2 id="Example" name="Example">예제</h2>

<pre class="brush: html">if ( document.anchors.length &gt;= 5 ) {
    dump("dump found too many anchors");
    window.location = "http<span class="nowiki">:</span>//www.google.com";
}
</pre>

<h2 id="Notes" name="Notes">알아두기</h2>

<p>이전 버전과의 호환성을 제공하기 위해, 반환된 anchor들의 목록은 <code>name</code> 속성(attribute)으로 생성된 anchors들만 포함하고 <code>id</code> 속성(attribute)으로 생성된 것들은 포함하지 않습니다.</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Document.anchors")}}</p>
