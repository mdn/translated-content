---
title: <blend-mode>
slug: Web/CSS/blend-mode
tags:
  - CSS
  - CSS Data Type
  - Reference
  - 블렌드 모드
  - 혼합 모드
translation_of: Web/CSS/blend-mode
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS </a><strong><code>&lt;blend-mode&gt;</code></strong> <a href="/ko/docs/Web/CSS/CSS_Types">자료형</a>은 요소가 겹칠 경우 색상이 어떻게 나타나야 하는지 정의합니다. {{cssxref("background-blend-mode")}}와 {{cssxref("mix-blend-mode")}} 속성에서 사용합니다.</p>

<p>최종 색상은 혼합 모드를 적용한 레이어 각각의 픽셀 하나씩에 대해 전경색과 배경색을 취한 후 모드에 따라 계산을 수행하여 나온 새로운 값입니다.</p>

<h2 id="구문">구문</h2>

<p><code>&lt;blend-mode&gt;</code> 자료형은 다음 키워드 값 중 하나를 선택해 지정합니다.</p>

<h3 id="값">값</h3>

<dl>
 <dt><code><a id="normal" name="normal">normal</a></code></dt>
 <dd>
 <p>배경색에 상관하지 않고 최상단 색을 사용합니다.<br>
  두 장의 불투명한 종이를 겹친 것과 같습니다.</p>

 <div id="normal_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: normal;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('normal_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="multiply" name="multiply">multiply</a></code></dt>
 <dd>
 <p>최종 색은 전경과 배경색을 곱한 값입니다.<br>
  검은 레이어는 최종 레이어를 검은 색으로 만들고, 하얀 레이어는 아무런 변화도 주지 않습니다.<br>
  투명한 필름에 프린트한 이미지를 서로 겹친 것과 같습니다.</p>

 <div id="multiply_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: multiply;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('multiply_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="screen" name="screen">screen</a></code></dt>
 <dd>
 <p>최종 색은 전경과 배경색을 각각 반전한 후 서로 곱해 나온 값을 다시 반전한 값입니다.<br>
  검은 레이어는 아무런 변화도 주지 않고, 하얀 레이어는 최종 레이어를 하얗게 만듭니다.<br>
  프로젝터 두 대로 이미지를 겹친 것과 같습니다.</p>

 <div id="screen_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: screen;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('screen_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="overlay" name="overlay">overlay</a></code></dt>
 <dd>배경색이 더 어두운 경우 <code>multiply</code>, 더 밝은 경우 <code>screen</code>을 적용합니다.<br>
 <code>hard-light</code>와 같지만 배경과 전경을 뒤집은 것입니다.
 <div id="overlay_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: overlay;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('overlay_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="darken" name="darken">darken</a></code></dt>
 <dd>
 <p>최종 색은 각각의 색상 채널에 대해 제일 어두운 값을 취한 결과입니다.</p>

 <div id="darken_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: darken;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('darken_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="lighten" name="lighten">lighten</a></code></dt>
 <dd>
 <p>최종 색은 각각의 색상 채널에 대해 제일 밝은 값을 취한 결과입니다.</p>

 <div id="lighten_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: lighten;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('lighten_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="color-dodge" name="color-dodge">color-dodge</a></code></dt>
 <dd>
 <p>최종 색은 배경색을 전경색의 역으로 나눈 결과입니다.<br>
  검은 전경색은 아무런 변화도 주지 않습니다. 전경색이 배경색의 역인 경우 제일 밝은 색이 됩니다.<br>
  <code>screen</code>과 유사하지만, 전경색의 밝기가 배경색과 동일하기만 해도 최대의 밝기를 가진 색을 반환합니다.</p>

 <div id="color-dodge_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: color-dodge;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('color-dodge_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="color-burn" name="color-burn">color-burn</a></code></dt>
 <dd>
 <p>최종 색은 배경색을 반전한 후 전경색으로 나누고, 다시 반전한 결과입니다.<br>
  하얀 전경색은 아무런 변화도 주지 않습니다. 전경색이 배경색의 역인 경우 결과는 검은색입니다.<br>
  <code>multiply</code>와 유사하지만, 전경색의 밝기가 배경색의 역과 동일하기만 해도 검은색을 반환합니다.</p>

 <div id="color-burn_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: color-burn;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('color-burn_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="hard-light" name="hard-light">hard-light</a></code></dt>
 <dd>
 <p>전경색이 더 어두운 경우 <code>multiply</code>, 더 밝은 경우 <code>screen</code>을 적용합니다.<br>
  <code>overlay</code>와 같지만 배경과 전경을 뒤집은 것입니다.<br>
  배경색에 스포트라이트를 "강렬하게" 비춘 효과와 유사합니다.</p>

 <div id="hard-light_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: hard-light;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('hard-light_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="soft-light" name="soft-light">soft-light</a></code></dt>
 <dd>
 <p><code>hard-light</code>와 유사하지만 더 부드럽습니다.<br>
  <code>hard-light</code>와 비슷하게 동작합니다.<br>
  배경색에 스포트라이트를 산란시켜 비춘 효과와 유사합니다.</p>

 <div id="soft-light_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: soft-light;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('soft-light_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="difference" name="difference">difference</a></code></dt>
 <dd>
 <p>최종 색은 두 색상 중 더 어두운 색을 밝은 색에서 뺀 결과입니다.<br>
  검은 레이어는 아무런 변화도 주지 않고, 흰 레이어로는 다른 레이어의 색을 반전한 효과를 냅니다.</p>

 <div id="difference_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: difference;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('difference_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="exclusion" name="exclusion">exclusion</a></code></dt>
 <dd>
 <p><code>difference</code>와 유사하지만 더 적은 대비를 가진 색을 반환합니다.<br>
  <code>difference</code>와 마찬가지로 검은 레이어는 아무런 변화도 주지 않고, 흰 레이어로는 다른 레이어의 색을 반전한 효과를 냅니다.</p>

 <div id="exclusion_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: exclusion;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('exclusion_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="hue" name="hue">hue</a></code></dt>
 <dd>
 <p>최종 색은 전경색의 색조를 가지며 배경색의 채도와 밝기를 가집니다.</p>

 <div id="hue_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: hue;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('hue_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="saturation" name="saturation">saturation</a></code></dt>
 <dd>
 <p>최종 색은 전경색의 채도를 가지며 배경색의 색조와 밝기를 가집니다.<br>
  색조 없는 순수한 회색 배경으로는 아무런 효과도 없습니다.</p>

 <div id="saturation_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: saturation;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('saturation_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="color" name="color">color</a></code></dt>
 <dd>
 <p>최종 색은 전경색의 색조와 채도를 가지며 배경색의 밝기를 가집니다.<br>
  회색조를 유지하므로 전경을 색칠할 때 사용할 수 있습니다.</p>

 <div id="color_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: color;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('color_example', "300", "300") }}</p>
 </dd>
 <dt><code><a id="luminosity" name="luminosity">luminosity</a></code></dt>
 <dd>
 <p>최종 색은 전경색의 밝기를 가지며 배경색의 색조와 채도를 가집니다.<br>
  <code>color</code>와 동일하지만 배경과 전경을 뒤집은 것입니다.</p>

 <div id="luminosity_example">
 <div class="hidden">
 <pre class="brush: html">&lt;div id="div"&gt;&lt;/div&gt;</pre>

 <pre class="brush: css">#div {
  width: 300px;
  height: 300px;
  background: url('https://mdn.mozillademos.org/files/8543/br.png'),
              url('https://mdn.mozillademos.org/files/8545/tr.png');
  background-blend-mode: luminosity;
}</pre>
 </div>
 </div>

 <p>{{ EmbedLiveSample('luminosity_example', "300", "300") }}</p>
 </dd>
</dl>

<h2 id="혼합_모드의_보간">혼합 모드의 보간</h2>

<p>혼합 모드는 보간 대상이 아니며 모든 변경점은 즉시 발생합니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>

<p>{{Compat("css.types.blend-mode")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><code>&lt;blend-mode&gt;</code>를 사용하는 속성: {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}</li>
</ul>

<p>각각의 혼합 모드에 대한 설명을 다루는 외부 웹 페이지:</p>

<ul>
 <li>위키백과 <a href="https://ko.wikipedia.org/wiki/%EB%B8%94%EB%A0%8C%EB%93%9C_%EB%AA%A8%EB%93%9C">블렌드 모드</a></li>
 <li>Adobe <a href="https://helpx.adobe.com/kr/photoshop/using/blending-modes.html">Adobe Photoshop에서의 혼합 모드</a></li>
</ul>
