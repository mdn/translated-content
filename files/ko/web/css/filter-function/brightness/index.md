---
title: brightness()
slug: Web/CSS/filter-function/brightness
tags:
  - CSS
  - CSS Function
  - Filter Effects
  - Reference
translation_of: Web/CSS/filter-function/brightness()
original_slug: Web/CSS/filter-function/brightness()
---
<div>{{cssref}}</div>

<p><span class="seoSummary"><strong><code>brightness()</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> 함수는 주어진 이미지에 선형 계수를 적용해 더 밝거나 어둡게 만듭니다.</span> 반환 값은 {{cssxref("&lt;filter-function&gt;")}}입니다.</p>

<div>{{EmbedInteractiveExample("pages/css/function-brightness.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">brightness(<em>amount</em>)</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>amount</code></dt>
 <dd>{{cssxref("&lt;number&gt;")}} 또는 {{cssxref("&lt;percentage&gt;")}}로 지정한, 결과물의 밝기. <code>100%</code> 미만의 값은 이미지를 어둡게 만들고, <code>100%</code>를 초과하는 값은 밝게 합니다. <code>0%</code>는 이미지를 완전한 검은색으로 바꾸고 <code>100%</code>는 주어진 입력 이미지를 그대로 반환합니다. 보간 시, 누락 값은 <code>1</code>입니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<pre class="brush: css">brightness(0%)   /* 완전한 검정 */
brightness(0.4)  /* 40% 밝기 */
brightness(1)    /* 변화 없음 */
brightness(200%) /* 두 배 밝기 */</pre>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{cssxref("&lt;filter-function&gt;")}}</li>
</ul>
