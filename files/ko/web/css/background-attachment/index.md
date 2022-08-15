---
title: background-attachment
slug: Web/CSS/background-attachment
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/background-attachment
---
<div>{{CSSRef}}</div>

<p><a href="/en-US/docs/CSS">CSS</a> <strong><code>background-attachment</code></strong> 속성은 배경 이미지를 {{glossary("viewport", "뷰포트")}} 내에서 고정할지, 아니면 자신의 컨테이닝 블록과 함께 스크롤할지 지정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/background-attachment.html")}}</div>



<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush: css no-line-numbers notranslate">/* 키워드 값 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* 전역 값 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
</pre>

<p><code>background-attachment</code> 속성은 다음 목록의 키워드 중 하나를 선택해 지정할 수 있습니다.</p>

<h3 id="값">값</h3>

<dl>
 <dt><code>fixed</code></dt>
 <dd>배경을 뷰포트에 대해 고정합니다. 요소에 스크롤이 존재해도 배경은 함께 스크롤되지 않습니다. 이 값은 {{cssxref("background-clip", "background-clip: text", "#text")}}와 호환되지 않습니다.</dd>
 <dt><code>local</code></dt>
 <dd>배경을 요소 콘텐츠에 대해 고정합니다. 요소에 스크롤이 존재하면 배경은 콘텐츠와 함께 스크롤됩니다. 배경 페인트 영역과 배경 위치 영역은 테두리 틀이 아닌 스크롤 가능 영역을 기준점으로 삼습니다.</dd>
 <dt><code>scroll</code></dt>
 <dd>배경을 요소 자체에 대해 고정합니다. 요소에 스크롤이 존재해도 배경은 함께 스크롤되지 않습니다. 즉 요소의 테두리에 배경 이미지를 부착한 것과 같은 효과입니다.</dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">예제</h2>

<h3 id="간단한_예제">간단한 예제</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush:css; highlight:[3]; notranslate">p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif");
  background-attachment: fixed;
}
</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample("간단한_예제")}}</p>

<h3 id="다중_배경_이미지">다중 배경 이미지</h3>

<p><code>background-attachment</code>는 다중 배경 이미지를 지원합니다. 각 배경에 대해 <code>&lt;attachment&gt;</code>를 지정하려면 쉼표로 구분하여 다수의 값을 제공하세요. 주어진 순서대로 배경에 적용합니다.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;
  There were doors all round the hall, but they were all locked; and when
  Alice had been all the way down one side and up the other, trying every
  door, she walked sadly down the middle, wondering how she was ever to
  get out again.

  Suddenly she came upon a little three-legged table, all made of solid
  glass; there was nothing on it except a tiny golden key, and Alice's
  first thought was that it might belong to one of the doors of the hall;
  but, alas! either the locks were too large, or the key was too small,
  but at any rate it would not open any of them. However, on the second
  time round, she came upon a low curtain she had not noticed before, and
  behind it was a little door about fifteen inches high: she tried the
  little golden key in the lock, and to her great delight it fitted!
&lt;/p&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush:css; highlight:[3]; notranslate">p {
  background-image: url("https://mdn.mozillademos.org/files/12057/starsolid.gif"),
      url("https://mdn.mozillademos.org/files/12059/startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}</pre>

<h4 id="결과_2">결과</h4>

<p>{{EmbedLiveSample("다중_배경_이미지")}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.background-attachment")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">한 번에 여러 배경 사용하기</a></li>
</ul>
