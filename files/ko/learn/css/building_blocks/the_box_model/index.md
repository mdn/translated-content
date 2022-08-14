---
title: 상자 모델
slug: Learn/CSS/Building_blocks/The_box_model
tags:
  - CSS
  - 디스플레이
  - 상자 모델
  - 여백
  - 초보자
  - 테두리
  - 패딩
  - 학습
translation_of: Learn/CSS/Building_blocks/The_box_model
original_slug: Learn/CSS/Building_blocks/상자_모델
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}</div>

<p>CSS에 포함되는 모든 요소의 외장은 박스이며, 이 박스를 이해하는 것은 CSS을 통해 레이아웃을 생성하거나, 아이템과 다른 아이템을 정렬하는 것을 가능하게 하는 열쇠입니다. 이번 단원에서 우리는 CSS 박스<em>모델</em>을 제대로 살펴보겠습니다. 박스의 작동 방식과 박스와 관련된 용어를 이해함으로써 더 복잡한 레이아웃 작업으로 넘어갈 수 있도록합니다.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">선결 사항:</th>
   <td>기본 컴퓨터 활용 능력<a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software">기본 소프트웨어 설치</a>, <a href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files">파일 작업에 대한 기본 지식</a>, HTML 기본기 (<a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">HTML</a> 학습), CSS 작동 방식에 대한 개념 (<a href="/en-US/docs/Learn/CSS/First_steps">CSS 첫 단계</a> 학습.) 등에 대한 기본 지식</td>
  </tr>
  <tr>
   <th scope="row">목표:</th>
   <td>CSS 박스 모델, 박스 모델을 구성하고 대체 모델로 전환하는 방법에 대해 학습합니다.</td>
  </tr>
 </tbody>
</table>

<h2 id="블록_및_인라인_박스">블록 및 인라인 박스</h2>

<p>CSS에는 크게 두 가지 박스(<strong>블록 박스</strong>와 <strong>인라인 박스</strong>) 유형이 있습니다. 이러한 특성은 박스가 페이지 대열 측면 및 페이지의 다른 박스와 관련하여 박스의 작동 방식을 나타냅니다.</p>

<p>박스가 블록으로 정의되면 다음과 같은 방식으로 동작합니다:</p>

<ul>
 <li>박스는 인라인 방향으로 연장되어 상위 콘테이너에서 사용 가능한 공간을 채웁니다. 대부분은 경우 이것은 박스가 사용 가능한 공간을 100%로 채우면서 상위 콘테이너 너비만큼 된다는 의미입니다.</li>
 <li>박스는 새 줄로 행갈이를 합니다.</li>
 <li>{{cssxref("width")}}와 {{cssxref("height")}} 속성은 존중됩니다.</li>
 <li>패딩과 여백, 테두리로 인해 다른 요소들이 박스로부터 밀려납니다.</li>
</ul>

<p>여러분이 디스플레이 유형은 인라인으로 변경하지 않는 한 머리글(<code>&lt;h1&gt;</code>)과 <code>&lt;p&gt;</code>)와 같은 요소는 모두 기본값으로 외부 디스플레이 유형을 <code>block</code> 사용합니다.</p>

<p>박스의 외부 디스플레이 유형이 <code>inline</code>일 경우:</p>

<ul>
 <li>박스는 새 줄로 행갈이를 하지 않습니다.</li>
 <li>{{cssxref("width")}}와 {{cssxref("height")}} 속성은 적용되지 않습니다.</li>
 <li>패딩과 여백, 테두리는 다른 인라인 박스들이 당 박스로부터 멀어지지게 하지 않습니다.</li>
</ul>

<p>링크용 <code>&lt;a&gt;</code> 요소와 <code>&lt;span&gt;</code>, <code>&lt;em&gt;</code> 및 <code>&lt;strong&gt;</code> 요소는 모두 기본적으로 인라인으로 표시됩니다.</p>

<p>요소에 적용되는 박스 유형은 <code>block</code> 및 <code>inline</code>과 같은 {{cssxref("display")}} 속성 값으로 정의되며. 아울러 그것은 <code>display</code>의 <strong>outer</strong> 값과 관련이 있습니다.</p>

<h2 id="구분_내부_및_외부_디스플레이_유형">구분: 내부 및 외부 디스플레이 유형</h2>

<p>이 시점에 우리는 <strong>내부</strong> 및 <strong>외부</strong> 디스플레이 유형에 대해 설명하는 게 좋겠습니다. 위에서 언급했듯이 CSS의 박스는 <em>외부</em> 디스플레이 유형을 가지며, 이는 박스가 블록인지 인라인인지를 자세히 설명합니다.</p>

<p>그러나 박스에는 <em>내부</em> 디스플레이 유형도 있으며 당 박스 내부의 요소가 배치되는 방법을 나타냅니다. 기본적으로 박스 내부의 요소는 <strong><a href="/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow">일반 대열</a></strong>로 배치되며, 이는 (위에서 설명한 바와 같이) 여타 블록 및 인라인 요소와 마찬가지로 작동한다는 것을 의미합니다.</p>

<p>그러나 여러분은 <code>flex</code>과 같은 <code>display</code> 값을 사용하여 내부 디스플레이 유형을 변경할 수 있습니다. 어떤 요소에 우리가 <code>display: flex;</code>를 설정하면 외부 디스플레이 유형은 블록이지만 내부 디스플레이 유형은 <ruby><code>flex</code><rp> (</rp><rt>가변</rt><rp>) </rp></ruby>으로 변경됩니다. 이 박스의 직계 자식은 가변 항목이 되고, 나중에 익히게 될 <a href="/ko/docs/Learn/CSS/CSS_layout/Flexbox">가변박스</a> 규격에 명시된 규칙에 따라 배치됩니다.</p>

<div class="blockIndicator note">
<p><strong>참고</strong>: 디스플레이 속성 값 및 박스가 블록 및 인라인 레이아웃에서 작동하는 방법에 대해 자세히 보려면 <a href="/ko/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">블록 및 인라인 레이아웃</a>에 대한 모질라 개발자 네트워크 가이드를 참조하십시오.</p>
</div>

<p>CSS 레이아웃에 대해 자세한 내용을 배우려면 다음번에는 예로 <code>flex</code>나 <code><a href="/ko/docs/Learn/CSS/CSS_layout/Grids">grid</a></code>같은 박스가 취할 수 있는 그 밖의 다양한 내부 속성 값을 마주치게 될 겁니다.</p>

<p>그러나 블록 및 인라인 레이아웃이 웹상에 사물이 행동하는 기본값입니다. 앞서 언급했듯이 그럴 일컬어 <ruby><em>normal flow</em><rp> (</rp><rt>일반 대열</rt><rp>) </rp></ruby>이라고 합니다. 그렇게 부르는 까닭은 다른 지시 사항이 없으면 박스는 블록 또는 인라인 박스로 배치되기 때문입니다.</p>

<h2 id="서로_다른_디스플레이_유형의_예">서로 다른 디스플레이 유형의 예</h2>

<p>계속해서 몇 가지 예를 살펴보겠습니다. 아래에 우리는 세 개의 서로 다른 HTML 요소가 있으며, 모두 외부 디스플레이 유형이 <code>block</code>입니다. 첫 번째 단락은 CSS에 테두리가 추가된 단락입니다. 브라우저는 이걸 블록 박스로 렌더링하므로 단락은 새 줄에서 시작되며 확보된 너비 전체까지 확장할 겁니다.</p>

<p>두 번째는 <code>display: flex</code> 사용해 배치된 목록입니다. 이 예제는 컨테이너 내부의 항목에 대해 가변 레이아웃을 수립하지만, 목록 자체는 블록 박스이며 단락과 같이 전체 컨테이너 너비로 확장되어 새 줄로 행갈이를 합니다.</p>

<p>바로 아래에 우리는 블록 수준 단락을 하나 갖고 있으며 그 안에 두 개의 <code>&lt;span&gt;</code> 요소가 있습니다. 이들 요소는 보통 <code>inline</code>이겠지만, 그 중 하나에 블록 클래스에 있습니다. 우리가 그걸 미리 <code>display: block</code>로 설정했으니까요.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1000)}}</p>

<p>우리는 다음 예제에서 <code>inline</code> 요소가 어떻게 동작하는지 볼 수 있습니다. 첫 번째 단락에서 <code>&lt;span&gt;</code>는 기본값으로 인라인으므로 새 줄 행갈이를 강제하지 않습니다.</p>

<p><code>display: inline-flex</code>로 설정된 <code>&lt;ul&gt;</code> 요소도 갖고 있는데, 이는 몇 가지 가변 항목 주변에 인라인 박스를 생성합니다.</p>

<p>마지막으로 <code>display: inline</code>으로 설정된 두 단락이 있습니다. 인라인 가변 컨테이너와 단락은 모두 하나의 라인에서 하나로 진행하지 블록 수준 요소처럼 표시하기 위해 새 줄로 행갈이를 하지 않습니다.</p>

<p><strong>예제에서 여러분은 <code>display: inline</code> 부분을 <code>display: block</code>으로, 또는 <code>display: inline-flex</code>를 <code>display: flex</code>로 디스플레이 모드 사이를 전환할 수 있습니다.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1000)}}</p>

<p>나중에 해당 단원에서 가변 레이아웃과 같은 것들을 접하게 될 것입니다. 당장 기억해야 할 핵심은 <code>display</code> 속성 값을 변경하면 박스의 외부 디스플레이 유형이 블록인지 인라인인지를 변경하여, 레이아웃 속 다른 요소 주위에 자신을 표시하는 방법이 달라진다는 것입니다.</p>

<p>나머지 수업에서는 외부 디스플레이 유형에 집중할 것이다.</p>

<h2 id="CSS_Box_Model이란_무엇인가">CSS Box Model이란 무엇인가?</h2>

<p>전체 CSS box model은 블록 박스에 적용되며, 인라인 박스는 박스 모델에 정의된 일부 동작만 사용합니다. 이 모델은 당신이 페이지에서 볼 수 있는 박스를 생성하기 위해 박스의 서로 다른 부분인 여백, 테두리, 패딩 및 콘텐츠등이 어떻게 함께 작동할 것인지를 정의합니다. 몇 가지 복잡성을 추가하기 위해 표준 및 대체 박스 모델이 있습니다.</p>

<h3 id="Box의_구성">Box의 구성</h3>

<p>CSS 블록 박스 구성하기 위한 우리의 준비물은:</p>

<ul>
 <li><strong>콘텐츠 박스</strong>: 당신의 콘텐츠가 표시되는 영역으로 그 크기는 {{cssxref("width")}} and {{cssxref("height")}}와 같은 속성을 사용해서 정할 수 있습니다.</li>
 <li><strong>패딩 박스</strong>: 패딩은 콘텐츠 주변을 마치 공백처럼 자리잡습니다. 패딩의 크기는 {{cssxref("padding")}}와 관련 속성을 사용해 제어할 수 있습니다.</li>
 <li><strong>테두리 박스</strong>: 테두리 박스는 콘텐츠와 패딩까지 둘러쌉니다. 테두리의 크기와 스타일은 {{cssxref("border")}}와 관련 속성을 사용하여 제어할 수 있습니다.</li>
 <li><strong>여백 박스</strong>: 여백은 가장 바깥 쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싸면서 당 박스와 다른 요소 사이 공백 역할을 합니다. 여백 박스의 크기는 {{cssxref("margin")}}와 관련 속성을 사용하여 제어될 수 있습니다.</li>
</ul>

<p>아래 도표는 이들 레이어를 보여줍니다.</p>

<p><img alt="Diagram of the box model" src="https://mdn.mozillademos.org/files/16558/box-model.png" style="height: 300px; width: 544px;"></p>

<h3 id="표준_CSS_box_model">표준 CSS box model</h3>

<p>표준 box model에서 box에서 <code>width</code>와 <code>height</code>를 부여하면 <em>content box</em>의 너비와 높이가 정의됩니다. 그런 다음 패딩과 테두리는 박스의 너비와 높이에 추가되여 박스가 점유하는 전체 크기가 정해집니다. 그 내용이 아래 이미지에서 제시되었습니다.</p>

<p>우리는 박스의 <code>width</code>와 <code>height</code>, <code>margin</code>과 <code>border</code> 및 <code>padding</code> CSS 값이 다음과 같이 지정되어 있다고 간주합니다:</p>

<pre class="brush: css notranslate">.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
</pre>

<p>표준 박스 모델을 사용하여 박스가 차지하는 공간은 실제로 너비 410px(350 + 25 + 25 + 5 + 5), 높이 210px(150 + 25 + 25 + 5 + 5)가 될 것인데, 양쪽 패딩과 테두리는 콘텐츠 박스에 사용되는 너비에 더해지기 때문입니다.</p>

<p><img alt="Showing the size of the box when the standard box model is being used." src="https://mdn.mozillademos.org/files/16559/standard-box-model.png" style="height: 300px; width: 500px;"></p>

<div class="blockIndicator note">
<p><strong>참고</strong>: 여백은 박스의 실제 크기에 포함되지 않습니다. 물론 여백은 박스가 페이지에서 차지하는 총 공간에 영향을 미치지만, 박스의 외부 공간에만 영향을 미칩니다. 박스의 영역은 테두리에서 멈추게 됩니다. 여백으로 확장되지 않습니다.</p>
</div>

<h3 id="대체_CSS_box_model">대체 CSS box model</h3>

<p>박스의 실제 크기를 얻기 위해 테두리와 패딩을 추가하는 것이 다소 불편하다고 생각할 수 있습니다. 당신 말이 옳을 것입니다! 이러한 이유로 CSS는 표준 박스 모델 이후 머지않아 대체 박스 모델이 도입되었습니다. 이 모델을 사용한다면 너비는 페이지에서 표시되는 박스 너비이므로 콘텐츠 영역 너비는 너비에서 패딩 및 테두리 너비를 뺀 너비입니다. 위에서 사용된 것과 동일한 CSS를 아래 결과에 대입하면(폭 = 350px, 높이 = 150px)가 됩니다.</p>

<p><img alt="Showing the size of the box when the alternate box model is being used." src="https://mdn.mozillademos.org/files/16557/alternate-box-model.png" style="height: 240px; width: 440px;"></p>

<p>기본값으로 브라우저는 기본 박스 모델을 사용합니다. 요소에 대체 모델을 활성화하려면 거기에 <code>box-sizing: border-box</code>를 설정하여 그렇게 할 수 있습니다. 이렇게 하면 당신이 설정한 크기에 따라 정의된 영역만큼 테두리 박스가 점유하도록 브라우저에 전달할 수 있습니다.</p>

<pre class="brush: css notranslate"><code>.box {
  box-sizing: border-box;
} </code></pre>

<p>모든 요소가 대체 박스 모델을 사용하길 원한다면, (그것이 개발자들의 흔한 선택이기도 합니다) <code>&lt;html&gt;</code> 요소에 <code>box-sizing</code> 속성을 설정한 다음 아래의 소예제에서 볼 수 있듯이 다른 모든 요소가 해당 값을 상속하도록 설정하십시요. 이런 내용의 뒷배경이 되는 생각을 이해하고 싶다면 <a href="https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/">박스 크기에 관한 CSS 요령</a> 문서를 참조하십시오.</p>

<pre class="brush: css notranslate"><code class="language-css"><span class="selector token">html</span> <span class="punctuation token">{</span>
  <span class="property token">box-sizing</span><span class="punctuation token">:</span> border-box<span class="punctuation token">;</span>
<span class="punctuation token">}</span>
<span class="selector token">*, *<span class="pseudo-element token">::before</span>, *<span class="pseudo-element token">::after</span></span> <span class="punctuation token">{</span>
  <span class="property token">box-sizing</span><span class="punctuation token">:</span> inherit<span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<div class="blockIndicator note">
<p><strong>참고</strong>: 흥미로운 기록이 있습니다. 인터넷 익스플로러는 기본적으로 대체 박스 모델로 사용되었으며 전환할 수있는 메커니즘이 없습니다.</p>
</div>

<h2 id="박스_모델_부리기">박스 모델 부리기</h2>

<p>아래 예제에서 당신은 박스 2개를 확인할 수 있습니다. 둘 다 <code>.box</code> 클래스에 해당하며 <code>width</code>, <code>height</code>, <code>margin</code>, <code>border</code>, <code>padding</code>에 대해 동일한 값이 주어졌습니다. 유일한 차이라면 두 번째 박스는 대체 박스 모델을 사용하도록 설정되었다는 겁니다.</p>

<p><strong>당신은 (<code>.alternate</code> 클래스를 CSS에 추가해) 두 번째 박스 크기를 변경해 첫 번째 박스의 너비와 높이와 일치하도록 할 수 있습니까?</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1000)}}</p>

<div class="blockIndicator note">
<p><strong>참조</strong>: <a href="https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-box-model">여러분은 이곳에서 동 질문에 대한 답변을 확인할 수 있습니다.</a>.</p>
</div>

<h3 id="브라우저_개발자도구를_사용해_박스_모델_보기">브라우저 개발자도구를 사용해 박스 모델 보기</h3>

<p><a href="/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">브라우저 개발자 도구</a>를 사용하면 박스 모델을 훨씬 쉽게 이해할 수 있습니다. 파이어폭스의 개발자 도구에서 요소를 검사하면 요소의 크기와 여백, 패딩 및 테두리를 볼 수 있습니다. 이 방법으로 요소를 검사하면 실제로 그것이 당신이 생각하는 크기인지를 알아낼 수 있어 좋은 방법입니다.</p>

<p><img alt="Inspecting the box model of an element using Firefox DevTools" src="https://mdn.mozillademos.org/files/16560/box-model-devtools.png" style="height: 683px; width: 1150px;"></p>

<h2 id="여백과_패딩과_테두리">여백과 패딩과 테두리</h2>

<p>상술한 예제에서 여러분은 이미 {{cssxref("margin")}}과 {{cssxref("padding")}}, 그리고 {{cssxref("border")}}를 보았습니다. 이번 예제에서 사용된 속성은 <ruby><strong>약칭</strong><rp>(</rp><rt>shorthands</rt><rp>)</rp></ruby>으로 한꺼번에 박스의 사방면을 설정할 수 있게 해줍니다. 해당 약칭은 또한 동명의 정식 명칭 속성도 있어 박스의 사방면을 개별적으로 제어할 수 있도록 해줍니다.</p>

<p>해당 속성에 대한 자세한 내용을 탐구해 봅시다.</p>

<h3 id="여백">여백</h3>

<p>여백은 박스 주변에 보이지 않는 공간입니다. 여백은 박스로부터 다른 요소를 밀어냅니다. 여백은 양수값 또는 음수값을 가질 수 있습니다. 박스 한쪽 측면에 음수값 여백을 설정하면 페이지의 다른 부분과 공백이 겹칠 수 있습니다. 여러분이 표준 또는 대체 박스 모델을 사용하든지 관계없이 표시되는 박스의 크기를 계산한 후에 항상 여백이 추가됩니다.</p>

<p>우리는 {{cssxref("margin")}} 속성을 사용하여 요소의 사방 여백을 한번에 제어할 수 있으며, 마찬가지로 동명의 정식 명칭 속성을 사용하며 각변의 여백을 제어할 수 있습니다.</p>

<ul>
 <li>{{cssxref("margin-top")}}</li>
 <li>{{cssxref("margin-right")}}</li>
 <li>{{cssxref("margin-bottom")}}</li>
 <li>{{cssxref("margin-left")}}</li>
</ul>

<p><strong>아래 예제에서 여백 값을 변경하여 당 요소와 상위 컨테이너 요소 사이의 여백 생성 또는 공간 제거(음의 여백인 경우)로 인해 박스가 어떻게 밀려나는지 확인하십시오.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 1000)}}</p>

<h4 id="여백_축소">여백 축소</h4>

<p>여백 이해의 핵심은 여백 축소에 대한 개념입니다. 여백이 서로 맞닿은 두 개의 요소가 있으면 해당 여백은 합쳐져 하나의 여백이 됩니다. 그 중 가장 큰 여백의 크기가 됩니다.</p>

<p>아래 예제에는 단락 두 개가 있습니다. 상위 단락은 <code>margin-bottom</code> 값이 50픽셀이 주어졌습니다. 두 번째 단락은 <code>margin-top</code> 값이 30픽셀이 주어졌습니다. 전체 여백은 합쳐져 축소되면서 실제 박스 사이 여백은 50픽셀이며, 두 가지 여백을 합계가 되지 않습니다.</p>

<p><strong>여러분은 2번째 단락의 <code>margin-top</code> 값을 0으로 설정해 이를 시험해 볼 수 있습니다. 두 단락 사이 표시되는 여백은 변경되지 않을 것이며, 첫 번째 단락의 <code>bottom-margin</code>에 설정된 50픽셀은 유지됩니다.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 1000)}}</p>

<p>여백이 축소될 때와 축소되지 않을 때를 말해주는 여러 가지 규칙이 있습니다. 자세한 내용은 <a href="/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">여백 축소 정복</a>에 대한 자세한 페이지를 참조하십시오. 당장 기억해야 할 주안점은 마진 축소란 것이 벌어지고 있다는 점이다. 여백이 있는 공간을 생성하고도 여러분이 기대하는 만큼의 공간을 얻지 못한다면, 아마도 그것은 여백 축소 현상일 것입니다.</p>

<h3 id="테두리">테두리</h3>

<p>테두리는 박스의 여백과 패딩 사이에 그려집니다. 표준 박스 모델을 사용하는 경우 테두리의 크기가 박스의 <code>width</code>과 <code>height</code>에 추가됩니다. 대체 박스 모델을 사용하고 있는 경우, 테두리의 크기는 사용 가능한 <code>width</code>와 <code>height</code>의 일부를 점유함으로 콘텐츠 박스가 더 작아지게 됩니다.</p>

<p>테두리를 스타일링의 경우 많은 속성이 있습니다. 4개의 테두리, 각 테두리에는 스타일, 너비 및 색상 등 당신이 변경하고 싶을만한 것들이 있습니다.</p>

<p>당산은 당장에 {{cssxref("border")}} 속성을 사용해 4개의 테두리 스타일과 너비, 색상을 지정할 수 있습니다.</p>

<p>테두리 사방면에 각각 너비와 색상, 스타일을 설정할 수 있습니다:</p>

<ul>
 <li>{{cssxref("border-top")}}</li>
 <li>{{cssxref("border-right")}}</li>
 <li>{{cssxref("border-bottom")}}</li>
 <li>{{cssxref("border-left")}}</li>
</ul>

<p>테두리 사방면에 색상, 스타일, 너비를 설정하려면 다음과 같이 사용하십시요:</p>

<ul>
 <li>{{cssxref("border-width")}}</li>
 <li>{{cssxref("border-style")}}</li>
 <li>{{cssxref("border-color")}}</li>
</ul>

<p>테두리 일방 면만 색상과 스타일, 너비를 설정하려면 세분화된 정식명칙 속성 중의 하나를 사용할 수 있습니다.</p>

<ul>
 <li>{{cssxref("border-top-width")}}</li>
 <li>{{cssxref("border-top-style")}}</li>
 <li>{{cssxref("border-top-color")}}</li>
 <li>{{cssxref("border-right-width")}}</li>
 <li>{{cssxref("border-right-style")}}</li>
 <li>{{cssxref("border-right-color")}}</li>
 <li>{{cssxref("border-bottom-width")}}</li>
 <li>{{cssxref("border-bottom-style")}}</li>
 <li>{{cssxref("border-bottom-color")}}</li>
 <li>{{cssxref("border-left-width")}}</li>
 <li>{{cssxref("border-left-style")}}</li>
 <li>{{cssxref("border-left-color")}}</li>
</ul>

<p><strong>아래 예제에서 테두리를 생성하기 위해 다양한 약칭과 정식 명칭을 사용했습니다. 그것들의 작동 방식을 파악하기 위해 서로 다른 속성을 마음대로 부려보십시요. 테두리 속성에 대한 모질라 개발자 네트워크 페이지 페이지는 당신이 선택할 수 있는 다양한 테두리 스타일에 대한 정보를 제공합니다.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 1000)}}</p>

<h3 id="패딩">패딩</h3>

<p>패딩은 테두리와 콘텐츠 영역 사이에 위치합니다. 여백과는 다르게 패딩은 음수의 크기를 가질 수 없어, 그 값은 0 또는 양수 값이여야 합니다. 여러분의 요소에 적용된 배경은 패딩 뒤에 표시됩니다.패딩의 전형적인 용도는 테두리에서 콘텐츠를 밀어내는 겁니다.</p>

<p>우리는 {{cssxref("padding")}} 속성을 사용하여 요소의 사방면 패딩을 개별적으로 제어할 수 있으며, 마찬가지로 정식 명칭 속성을 사용하며 각변의 패딩을 제어할 수 있습니다.</p>

<ul>
 <li>{{cssxref("padding-top")}}</li>
 <li>{{cssxref("padding-right")}}</li>
 <li>{{cssxref("padding-bottom")}}</li>
 <li>{{cssxref("padding-left")}}</li>
</ul>

<p><strong>아래 예제에서 <code>.box</code>클래스에 대한 패딩값을 변경하면 박스와 관계하여 텍스트가 시작되는 지점이 달라지는지 볼 수 있습니다.</strong></p>

<p><strong>여러분은 또한 <code>.container,</code> 클래스에 대한 패딩을 변경하여 컨테이너와 박스 사이 공간을 만들 수 있습니다. 패딩 변경은 모든 요소에 가능하며 테두리와 요소 내부 공간 사이에 공간을 만듭니다.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 800)}}</p>

<h2 id="박스_모델과_인라인_박스">박스 모델과 인라인 박스</h2>

<p>상술한 모든 내용은 블록 박스에도 100% 적용됩니다. 상술한 속성 중의 일부는 인라인 박스에도 적용할 수 있습니다. 예를 들어 <code>&lt;span&gt;</code>에 의해 생성된 속성도 그렇습니다.</p>

<p>아래 예제에 한 단락 내부에 <code>&lt;span&gt;</code>가 있고 거기에 <code>width</code>와 <code>height</code>, 그리고 <code>margin</code>와 <code>border</code>를 적용했습니다. 여러분이 보시다시피 너비와 높이는 무시됩니다. 여백, 패딩 및 테두리는 존치되지만 다른 콘텐츠와 인라인 박스아의 관계를 변경하지 않으므로 패딩 및 테두리는 단락의 다른 단어와 겹칩니다.</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 800)}}</p>

<h2 id="인라인_블록_디스플레이_사용하기">인라인 블록 디스플레이 사용하기</h2>

<p><code>inline</code>와 <code>block</code> 사이 중립 지대를 제공하는 <code>display</code> 속성의 하나로 특별한 값이 있습니다. 이 속성은 항목이 새 줄로 넘어가는 행갈이를 원치않지만, <code>width</code>와 <code>height</code>가 존중되고 앞서 보았듯이 겹침 현상을 피하길 원하는 경우에 유용합니다.</p>

<p><code>display: inline-block</code> 속성이 딸린 요소는 우리가 이미 파악했던 것 블록 요소의 하위 집합입니다.</p>

<ul>
 <li><code>width</code>와 <code>height</code> 속성은 존중됩니다.</li>
 <li><code>padding</code>와 <code>margin</code>과 <code>border</code> 속성으로 인해 다른 요소가 박스에서 밀려납니다.</li>
</ul>

<p>그러나 새 줄로 행갈이를 하지 않고, <code>width</code>와 <code>height</code> 속성을 명시적으로 추가하는 경우에만 해당 요소의 콘텐츠보다 (동 박스가) 더 커질 뿐입니다.</p>

<p><strong>다음 예제에서 우리는 <code>&lt;span&gt;</code> 요소에 <code>display: inline-block</code>를 추가했습니다. 스팬 요소 속성을 <code>display: block</code>로 변경하던가 추가했던 라인을 제거한 뒤 디스플레이 모델의 차이를 확인해 보십시요.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}</p>

<p>여러분이 <code>padding</code>를 추가해 링크에 적중 영역을 확대하길 원하는 경우 이것이 유용할 수 있습니다. <code>&lt;a&gt;</code>는 <code>&lt;span&gt;</code>처럼 인라인 요소입니다. 여러분은 해당 요소에 <code>display: inline-block</code>을 사용해 패딩을 설정할 수 있으므로 사용자가 링크를 클릭할 수 있습니다.</p>

<p>탐색 (메뉴)모음에서 꽤 자주 사용되는 것을 볼겁니다. 아래 탐색 모음은 가변박스를 사용해 행으로 표시되었으며, <code>&lt;a&gt;</code>를 마우스로 가리킬 때 <code>background-color</code>를 변경할 수 있도록 <code>&lt;a&gt;</code> 요소에 패딩 추기했습니다. 패딩은 <code>&lt;ul&gt;</code> 요소의 테두리와 겹치는 것처럼 보입니다. 그렇게 된 까닭은 <code>&lt;a&gt;</code>가 인라인 요소이기 때문입니다.</p>

<p><strong><code>.links-list a</code> 선택기에 딸린 규칙에 <code>display: inline-block</code>를 추가하면, 다른 요소에 의한 패딩이 존중되므로 여러분은 이(겹치는) 문제가 해결되는 것을 보게될 것입니다.</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 600)}}</p>

<h2 id="요약정리">요약정리</h2>

<p>박스 모델에 대해 이해해야 할 내용의 대부분입니다. 박스들이 레이아웃에 어떻게 포함된 것인지 혼란스러워지면, 향후 여러분은 이번 단원을 다시 찾게을 수 있습니다.</p>

<p>다음 단원에서는 <a href="/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">배경과 테두리</a>를 사용하여 평범한 보이는 박스를 더욱 흥미롭게 보이려면 어떤 방법이 있는지 살펴보겠습니다.</p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}</p>

<h2 id="이번_단위에는">이번 단위에는</h2>

<ol>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">계단식 나열과 상속</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">CSS 선택기</a>
  <ul>
   <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">유형과 클레스, 아이디 선택기 selectors</a></li>
   <li><a href="/ko/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">딸린 속성 선택기</a></li>
   <li><a href="/ko/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">의사 클래스와 의사 요소</a></li>
   <li><a href="/ko/docs/Learn/CSS/Building_blocks/Selectors/Combinators">조합기</a></li>
  </ul>
 </li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/%EC%83%81%EC%9E%90_%EB%AA%A8%EB%8D%B8">박스 모델</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">배경 및 테두리</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">서로 다른 텍스트 방향 처리</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Overflowing_content">대열이탈 콘텐츠</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Values_and_units">속성값과 단위</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">CSS 항목 크기 설정</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Images_media_form_elements">이미지와 미디아, 양식 요소</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Styling_tables">테이블 스타일링</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Debugging_CSS">CSS 디버깅</a></li>
 <li><a href="/ko/docs/Learn/CSS/Building_blocks/Organizing">CSS 체계화</a></li>
</ol>
