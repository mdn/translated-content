---
title: <length>
slug: Web/CSS/length
tags:
  - CSS
  - CSS Data Type
  - Layout
  - Reference
  - Web
  - length
translation_of: Web/CSS/length
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS </a><strong><code>&lt;length&gt;</code></strong> <a href="/ko/docs/Web/CSS/CSS_Types">자료형</a>은 거리 값을 나타냅니다. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}}, {{Cssxref("text-shadow")}} 등 다양한 속성에 사용할 수 있습니다.</p>

<div class="note">
<p><strong>참고:</strong> {{cssxref("&lt;percentage&gt;")}} 값을 일부 속성의 <code>&lt;length&gt;</code> 값으로 사용할 수는 있지만 <code>&lt;percentage&gt;</code>와 <code>&lt;length&gt;</code> 는 다릅니다. {{cssxref("&lt;length-percentage&gt;")}}를 참고하세요.</p>
</div>

<h2 id="구문">구문</h2>

<p><code>&lt;length&gt;</code> 자료형은 {{cssxref("&lt;number&gt;")}} 다음에 아래 나열한 단위 중 하나를 붙여 구성합니다. 다른 CSS 단위와 마찬가지로 숫자와 단위 문자 사이에 공백은 존재하지 않습니다. 숫자 <code>0</code> 뒤에는 단위를 붙이지 않아도 됩니다.</p>

<div class="note">
<p><strong>참고:</strong> 일부 속성은 음의 <code>&lt;length&gt;</code>를 받지만 다른 속성은 그렇지 않습니다.</p>
</div>

<h3 id="단위">단위</h3>

<h4 id="상대길이_단위">상대길이 단위</h4>

<p>상대길이는 어떤 다른 거리와의 상대적 비율을 표현합니다. 어떤 다른 거리란 단위에 따라 특정 문자, {{cssxref("line-height")}}, 아니면 {{glossary("viewport", "뷰포트")}}일 수 있습니다.</p>

<h5 id="글꼴_상대_길이">글꼴 상대 길이</h5>

<p>글꼴 상대 길이는 <code>&lt;length&gt;</code> 값을 특정 문자나 현재 요소가 사용하는 글꼴의 특정 속성을 기준으로 설정합니다.</p>

<div class="note">
<p><strong>참고:</strong> 아래 단위들, 특히 <code>em</code>과 <code>rem</code>은 사용자가 글꼴 크기를 늘려도 <a href="https://24ways.org/2006/compose-to-a-vertical-rhythm">페이지의 수직 흐름을 유지</a>하는, 확대 가능한 레이아웃을 만들기 위해 많이 쓰입니다.</p>
</div>

<dl>
 <dt><code><a id="cap" name="cap">cap</a></code> {{experimental_inline}}</dt>
 <dd>요소 {{cssxref("font")}}의 "cap height"(영문 대문자의 평균 높이 값)를 나타냅니다.</dd>
 <dt><code><a id="ch" name="ch">ch</a></code></dt>
 <dd>요소 {{cssxref("font")}}의 문자 "0"(영, 유니코드 U+0030)의 너비를 나타냅니다.</dd>
 <dd>문자 "0"의 너비를 측정하는 것이 불가능하거나 실용적이지 않은 경우 너비 0.5em에 높이 1em이라고 가정해야 합니다.</dd>
 <dt><code><a id="em" name="em">em</a></code></dt>
 <dd>요소 {{cssxref("font-size")}}의 계산값. 요소의 {{cssxref("font-size")}} 속성에 사용한다면 상속받는 <code>font-size</code> 값을 나타냅니다.</dd>
 <dt><code><a id="ex" name="ex">ex</a></code></dt>
 <dd>요소 {{cssxref("font")}}의 <a href="https://ko.wikipedia.org/wiki/X%EB%86%92%EC%9D%B4">x높이</a>를 나타냅니다. "x"문자를 가진 글꼴에서는 보통 소문자 높이와 같습니다. 많은 글꼴에서 <code>1ex ≈ 0.5em</code>입니다.</dd>
 <dt><code><a id="ic" name="ic">ic</a></code> {{experimental_inline}}</dt>
 <dd>"水" (한중일 한자 "물", U+6C34) 문자를 렌더링할 때 사용하는 글꼴에서의 너비를 나타냅니다.</dd>
 <dt><code><a id="lh" name="lh">lh</a></code> {{experimental_inline}}</dt>
 <dd>요소가 {{cssxref("line-height")}}를 가지고 있는 경우, <code>line-height</code>의 계산값을 절대 길이로 변환해 나타냅니다.</dd>
 <dt><code><a id="rem" name="rem">rem</a></code></dt>
 <dd>루트 요소(보통 {{HTMLElement("html")}})의 {{cssxref("font-size")}}를 나타냅니다. 루트 요소의 <code>font-size</code>에 사용할 경우 최초값(보통 브라우저 기본값은 <code>16px</code>이나 사용자 설정으로 변할 수 있음)을 나타냅니다.</dd>
 <dt><code><a id="rlh" name="rlh">rlh</a></code> {{experimental_inline}}</dt>
 <dd>루트 요소(보통 {{HTMLElement("html")}})의 {{cssxref("line-height")}}를 절대 길이로 변환해 나타냅니다. 루트 요소의 {{cssxref("font-size")}}나 <code>line-height</code>에 사용할 경우 최초값을 나타냅니다.</dd>
</dl>

<h5 id="뷰포트_백분율_길이">뷰포트 백분율 길이</h5>

<p>뷰포트 백분율 길이는 <code>&lt;length&gt;</code> 값을 {{glossary("viewport", "뷰포트")}}, 즉 문서에서 볼 수 있는 부분의 크기를 기준으로 설정합니다. 뷰포트 길이는 {{cssxref("@page")}} 선언 블록에서는 유효하지 않습니다.</p>

<dl>
 <dt><code><a id="vh" name="vh">vh</a></code></dt>
 <dd>뷰포트의 초기 <a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> 높이 1%와 같습니다.</dd>
 <dt><code><a id="vw" name="vw">vw</a></code></dt>
 <dd>뷰포트의 초기 <a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> 너비 1%와 같습니다.</dd>
 <dt><code><a id="vi" name="vi">vi</a></code> {{experimental_inline}}</dt>
 <dd>초기 컨테이닝 블록의 <a href="/ko/docs/Web/CSS/CSS_Logical_Properties#인라인_치수">인라인 축</a> 크기 1%와 같습니다.</dd>
 <dt><code><a id="vb" name="vb">vb</a></code> {{experimental_inline}}</dt>
 <dd>초기 컨테이닝 블록의 <a href="/ko/docs/Web/CSS/CSS_Logical_Properties#블록_치수">블록 축</a> 크기 1%와 같습니다.</dd>
 <dt><code><a id="vmin" name="vmin">vmin</a></code></dt>
 <dd><code>vw</code>와 <code>vh</code> 중 작은 것과 같습니다.</dd>
 <dt><code><a id="vmax" name="vmax">vmax</a></code></dt>
 <dd><code>vw</code>와 <code>vh</code> 중 큰 것과 같습니다.</dd>
</dl>

<h4 id="절대길이_단위">절대길이 단위</h4>

<p>절대길이 단위는 프린트 등 출력 수단의 크기를 알 수 있을 때의 물리적 측정 거리를 나타냅니다. 구현은 어떤 단위를 물리적인 실제 거리에 맞춰 기준으로 삼고, 나머지 단위를 상대적으로 계산해 설정합니다. 기준 단위는 화면 등 저해상도 장치와 프린터 등 고해상도 장치에서 다릅니다.</p>

<p>저해상도 장치에서 <code>px</code> 단위는 물리적인 픽셀을 의미하며 나머지는 이에 상대적입니다. 따라서 <code>1in</code>은 <code>96px</code>로 정의하며 이는 <code>72pt</code>와 동일합니다. 그러나 인치(<code>in</code>), 센티미터(<code>cm</code>), 밀리미터(<code>mm</code>) 등 이렇게 정의하는 단위가 같은 이름을 가진 물리적인 측정 단위와 일치하지 않을 수 있다는 문제점이 있습니다.</p>

<p>고해상도 장치에서 인치(<code>in</code>), 센티미터(<code>cm</code>), 밀리미터(<code>mm</code>)가 기준이 되어 물리적 거리와 동일합니다. 그래서 px 단위도 이에 맞춰 1인치의 1/96로 정의합니다.</p>

<div class="note">
<p><strong>참고:</strong> 많은 사용자가 {{glossary("user agent", "사용자 에이전트")}}의 기본 글꼴 크기를 늘려 읽기 쉽도록 설정합니다. 절대길이는 사용자 설정을 따르지 않기 때문에 접근성 문제를 유발할 수 있습니다. 따라서 <code>font-size</code>를 설정할 땐 <code>em</code>, <code>rem</code> 등 상대길이를 선택하세요.</p>
</div>

<dl>
 <dt><code><a id="px" name="px">px</a></code></dt>
 <dd>1 픽셀. 화면에서는 전통적으로 하나의 장치 픽셀(점)을 의미했지만, 프린터나 고해상도 화면에서는 1/96 <code>in</code>을 맞출 수 있도록 여러 개의 장치 픽셀을 의미합니다.</dd>
 <dt><code><a id="cm" name="cm">cm</a></code></dt>
 <dd>1 센티미터, <code>1cm</code> = <code>96px/2.54</code>.</dd>
 <dt><code><a id="mm" name="mm">mm</a></code></dt>
 <dd>1 밀리미터, <code>1mm</code> = 1/10 <code>cm</code>.</dd>
 <dt><code><a id="q" name="q">Q</a></code> {{experimental_inline}}</dt>
 <dd>1/4 밀리미터, <code>1Q</code> = 1/40 <code>cm</code>.</dd>
 <dt><code><a id="in" name="in">in</a></code></dt>
 <dd>1 인치, <code>1in</code> = <code>2.54cm</code> = <code>96px</code>.</dd>
 <dt><code><a id="pc" name="pc">pc</a></code></dt>
 <dd>1 피카, <code>1pc</code> = <code>12pt</code> = 1/6<code>1in</code>.</dd>
 <dt><code><a id="pt" name="pt">pt</a></code></dt>
 <dd>One point. <code>1pt</code> = 1/72nd of <code>1in</code>.</dd>
</dl>

<h2 id="보간">보간</h2>

<p>애니메이션에서 <code>&lt;length&gt;</code> 자료형의 값은 부동소수점 실수로 간주하며 보간은 <a href="/ko/docs/Web/CSS/computed_value">계산값</a>을 사용합니다. 보간 속도는 애니메이션에 연결된 <a href="/ko/docs/Web/CSS/single-transition-timing-function">타이밍 함수</a>가 결정합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="길이_단위_비교">길이 단위 비교</h3>

<p>아래 데모에서는 주어진 하나의 입력 칸에 <code>300px</code>, <code>50%</code>, <code>30vw</code> 등 <code>&lt;length&gt;</code> 값을 입력한 후 <kbd>Return</kbd>을 누르면 그 길이만큼의 막대를 생성합니다.</p>

<p>서로 다른 길이 단위를 입력하고 비교해보세요.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="outer"&gt;
  &lt;div class="input-container"&gt;
    &lt;label&gt;길이:&lt;/label&gt;
    &lt;input type="text" id="length"&gt;
  &lt;/div&gt;
  &lt;div class="inner"&gt;

  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="results"&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255,255,255,0.5),
              inset -3px -3px 5px rgba(0,0,0,0.5);
}

.result {
  height: 20px;
  background-color: #999;
  box-shadow: inset 3px 3px 5px rgba(255,255,255,0.5),
              inset -3px -3px 5px rgba(0,0,0,0.5);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">const inputDiv = document.querySelector('.inner');
const inputElem = document.querySelector('input');
const resultsDiv = document.querySelector('.results');

inputElem.addEventListener('change', () =&gt; {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement('div');
  result.className = 'result';
  result.style.width = inputElem.value;
  result.innerHTML = `&lt;code&gt;너비: ${inputElem.value}&lt;/code&gt;`;
  resultsDiv.appendChild(result);

  inputElem.value = '';
  inputElem.focus();
})</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('길이_단위_비교','100%', 700)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.types.length")}}</p>
