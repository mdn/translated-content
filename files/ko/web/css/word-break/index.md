---
title: word-break
slug: Web/CSS/word-break
tags:
  - CSS
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/word-break
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>word-break</code></strong> 속성은 텍스트가 자신의 콘텐츠 박스 밖으로 오버플로 할 때 줄을 바꿀 지 지정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/word-break.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers notranslate">/* 키워드 값 */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* 사용 안함 */

/* 전역 값 */
word-break: inherit;
word-break: initial;
word-break: unset;
</pre>

<p><code>word-break</code> 속성은 아래의 값 중 하나를 선택해서 지정할 수 있습니다.</p>

<h3 class="brush:css" id="값">값</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>기본 줄 바꿈 규칙을 사용합니다.</dd>
 <dt><code>break-all</code></dt>
 <dd>오버플로를 방지하기 위해서는 어떠한 두 문자 사이에서도 줄 바꿈이 발생할 수 있습니다. (한중일 텍스트 제외)</dd>
 <dt><code>keep-all</code></dt>
 <dd>한중일(CJK) 텍스트에서는 줄을 바꿀 때 단어를 끊지 않습니다. 비 CJK 텍스트에서는 <code>normal</code>과 동일합니다.</dd>
 <dt><code>break-word</code> {{Deprecated_inline}}</dt>
 <dd>실제 {{cssxref("overflow-wrap")}} 속성에 상관하지 않고, <code>word-break: normal</code>과 <code>overflow-wrap: anywhere</code>를 설정한 것과 같은 효과를 냅니다.</dd>
</dl>

<div class="note">
<p><strong>참고:</strong> <code>word-break: break-word</code>와 <code>overflow-wrap: break-word</code>({{cssxref("overflow-wrap")}} 참고)와 달리, <code>word-break: break-all</code>은 텍스트의 오버플로가 시작하는 정확한 지점에서 줄을 바꿉니다. 단어 전체를 다음 줄로 이동하면 중간을 끊지 않아도 될 상황에서도 마찬가지입니다.</p>
</div>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;1. &lt;code&gt;word-break: normal&lt;/code&gt;&lt;/p&gt;
&lt;p class="normal narrow"&gt;This is a long and
 Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;

&lt;p&gt;2. &lt;code&gt;word-break: break-all&lt;/code&gt;&lt;/p&gt;
&lt;p class="breakAll narrow"&gt;This is a long and
 Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;

&lt;p&gt;3. &lt;code&gt;word-break: keep-all&lt;/code&gt;&lt;/p&gt;
&lt;p class="keepAll narrow"&gt;This is a long and
 Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;

&lt;p&gt;4. &lt;code&gt;word-break: break-word&lt;/code&gt;&lt;/p&gt;
&lt;p class="breakWord narrow"&gt;This is a long and
  Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
 グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.narrow {
  padding: 5px;
  border: 1px solid;
  display: table;
  max-width: 100%;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
</pre>

<p>{{EmbedLiveSample('예제', '100%', 600)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.word-break")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{cssxref("overflow-wrap")}}</li>
</ul>
