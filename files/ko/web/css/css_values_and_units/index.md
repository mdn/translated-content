---
title: CSS 단위와 값
slug: Web/CSS/CSS_Values_and_Units
tags:
  - CSS
  - 값과 단위
  - 안내서
  - 참조
translation_of: Web/CSS/CSS_Values_and_Units
original_slug: Web/CSS/CSS_단위와_값
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">모든 CSS 선언은 속성 / 값 쌍을 포함합니다. 속성에 따라 값은 하나의 정수 또는 키워드, 여러 개의 키워드, 단위가 있거나 없는 값의 나열이 될 수 있습니다. CSS 속성에 허용되는 공통적인 자료형(단위와 값)의 집합이 있습니다.</span> 아래는 이들 자료형 대부분에 대한 개요입니다. 더 자세한 정보를 보려면 각 자료형의 페이지를 참고하세요.</p>

<h2 id="텍스트_자료형">텍스트 자료형</h2>

<ul>
 <li>{{cssxref("&lt;custom-ident&gt;")}}</li>
 <li><code>&lt;ident&gt;</code>로서 미리 정의된 키워드</li>
 <li>{{cssxref("&lt;string&gt;")}}</li>
 <li>{{cssxref("&lt;url&gt;")}}</li>
</ul>

<p>텍스트 자료형은 <code>&lt;string&gt;</code>이거나, 연속된 문자를 따옴표로 감싼 것, 또는 따옴표로 감싸지 않은 "CSS 식별자"인 <code>&lt;ident&gt;</code>가 될 수 있습니다. <code>&lt;string&gt;</code>은 작은따옴표 또는 큰따옴표로 감싸져야 합니다. 사양에서 <code>&lt;ident&gt;</code> 또는 <code>&lt;custom-ident&gt;</code>의 목록에 포함되어 있는 CSS 식별자는 따옴표로 감싸서는 안 됩니다.</p>

<p>CSS 사양에서는 웹 개발자가 정의할 수 있는 값들, 가령 키프레임 애니메이션이나 서체 가족의 이름, 그리드 영역 같은 것들을 {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}}, 또는 둘 다로서 목록에 표시합니다.</p>

<p>사용자가 정의한 텍스트 값을 따옴표로 감싸는 것과 감싸지 않는 것 모두가 허용되는 경우, 사양에서는 <code>&lt;custom-ident&gt; | &lt;string&gt;</code>로서 이를 목록에 표시하며, 이는 따옴표가 선택 사항임을 의미합니다. 애니메이션 이름이 바로 그런 경우입니다:</p>

<pre class="brush: css notranslate">@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}</pre>

<p>몇몇 텍스트 값은 따옴표로 감싸지 않는 경우 유효하지 않습니다. 예를 들어, {{cssxref("grid-area")}}의 값은 <code>&lt;custom-ident&gt;</code>일 수 있으므로, 만약 <code>content</code>라는 이름의 그리드 영역이 있을 때 아래처럼 이를 따옴표 없이 사용할 수 있습니다:</p>

<pre class="brush: css notranslate">.item {
  grid-area: content;
}
</pre>

<p>반면, {{cssxref("&lt;string&gt;")}}인 자료형의 경우, 예를 들어 {{cssxref("content")}} 속성의 문자열 값은 따옴표로 감싸져야 합니다:</p>

<pre class="brush: css notranslate">.item::after {
    content: "This is my content.";
}
</pre>

<p>일반적으로 이모지를 포함해 여러분이 원하는 아무 이름이나 만들 수 있지만, <code>none</code>, <code>unset</code>, <code>initial</code>, <code>inherit</code>, 숫자 또는 2개의 대시로 시작하는 이름은 식별자가 될 수 없으며, 대부분의 경우 미리 정의된 다른 CSS 키워드와 동일한 이름을 사용하고 싶지는 않을 것입니다. 더 자세한 내용을 보려면 {{cssxref("&lt;custom-ident&gt;")}}와 {{cssxref("&lt;string&gt;")}}의 참조 페이지를 확인하세요.</p>

<h3 id="미리_정의된_키워드_값">미리 정의된 키워드 값</h3>

<p>미리 정의된 키워드 값은 특정 속성의 사양에 정의된 텍스트 값입니다. 이 키워드들은 CSS 식별자이기도 해서 따옴표 없이 사용됩니다.</p>

<p>CSS 사양 또는 MDN의 속성 페이지에서 CSS 속성의 값에 대한 문법을 보면, 허용되는 키워드가 아래와 같은 형태로 나열됩니다. 아래는 {{cssxref("float")}}에 허용되는 미리 정의된 키워드 값입니다.</p>

<pre class="syntaxbox notranslate">left <a href="/en-US/docs/CSS/Value_definition_syntax#Single_bar" title="Single bar: exactly one of the entities must be present">|</a> right <a href="/en-US/docs/CSS/Value_definition_syntax#Single_bar" title="Single bar: exactly one of the entities must be present">|</a> none <a href="/en-US/docs/CSS/Value_definition_syntax#Single_bar" title="Single bar: exactly one of the entities must be present">|</a> inline-start <a href="/en-US/docs/CSS/Value_definition_syntax#Single_bar" title="Single bar: exactly one of the entities must be present">|</a> inline-end</pre>

<p>이런 값들은 따옴표 없이 사용됩니다:</p>

<pre class="brush: css notranslate"><code>.box {
    float: left;
}
</code></pre>

<h3 id="CSS_전체에_공유되는_값">CSS 전체에 공유되는 값</h3>

<p>한 속성의 사양의 일부로서 존재하는 미리 정의된 키워드와 더불어, 모든 CSS 속성은 CSS 전체에 걸쳐 공유되는 값인 {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}을 받아들일 수 있으며, 이들은 기본 동작을 명시적으로 지정합니다.</p>

<p><code>initial</code> 키워드는 속성의 초기 값으로 지정된 값을 표현합니다. <code>inherit</code> 키워드는 해당 요소의 부모에 적용된 동일 속성의 계산값을 표현하며, 해당 속성이 상속된다고 가정합니다.</p>

<p><code>unset</code> 키워드는 <code>inherit</code> 또는 <code>initial</code>처럼 동작하는데, 해당 속성이 상속되는 경우 전자, 아닌 경우 후자로 동작합니다.</p>

<p>네번째 값으로 {{cssxref("revert")}}가 Cascade Level 4 사양에 추가되었지만, 지금은 브라우저 지원 상태가 좋지 않습니다.</p>

<h3 id="URL">URL</h3>

<p>{{cssxref("&lt;url&gt;")}} 자료형은 함수 표기법을 사용하며, 함수가 URL에 해당하는 <code>&lt;string&gt;</code>을 받는 형태입니다. 이것은 절대 URL 또는 상대 URL일 수 있습니다. 예를 들어, 배경 이미지를 넣고 싶을 때 다음 중 아무거나 사용할 수 있습니다.</p>

<pre class="brush: css notranslate"><code>.box {
  background-image: url("images/my-background.png");
}</code>

<code>.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}</code>
</pre>

<p><code>url()</code> 의 매개변수는 따옴표로 감싸거나 감싸지 않을 수 있습니다. 감싸지 않는 경우, 이는 <code>&lt;url-token&gt;</code>으로 해석되어 특정 문자를 이스케이프하는 등의 추가적인 할 일이 생깁니다. 더 자세한 내용을 보려면 {{cssxref("&lt;url&gt;")}}를 확인하세요.</p>

<h2 id="숫자_자료형">숫자 자료형</h2>

<ul>
 <li>{{cssxref("&lt;integer&gt;")}}</li>
 <li>{{cssxref("&lt;number&gt;")}}</li>
 <li>{{cssxref("&lt;dimension&gt;")}}</li>
 <li>{{cssxref("&lt;percentage&gt;")}}</li>
</ul>

<h3 id="정수">정수</h3>

<p>정수는 1개 이상의 10진수 숫자(<code>0</code>부터 <code>9</code>)로, 예를 들어 <code>1024</code>나 <code>-55</code>가 이에 속합니다. 정수 앞에는 <code>+</code> 또는 <code>-</code> 기호를 덧붙일 수 있는데, 기호와 정수 사이에 공백이 없어야 합니다.</p>

<h3 id="숫자">숫자</h3>

<p>{{cssxref("&lt;number&gt;")}}는 실수를 나타내며, 소수점과 소수부분을 포함할 수도 있고 포함하지 않을 수도 있습니다. 예를 들어 <code>0.255</code>, <code>128</code>, <code>-1.2</code>가 이에 속합니다. 숫자 앞에도 <code>+</code>나 <code>-</code> 기호를 덧붙일 수 있습니다.</p>

<h3 id="치수">치수</h3>

<p>{{cssxref("&lt;dimension&gt;")}}은 <code>&lt;number&gt;</code>에 단위를 붙인 것으로, 예를 들면 <code>45deg</code>, <code>100ms</code>, <code>10px</code>가 이에 속합니다. 덧붙인 단위 식별자는 대소문자를 구별하지 않습니다. 숫자와 단위 식별자 사이에는 공백 또는 다른 문자가 들어갈 수 없습니다: 즉, <code>1 cm</code>는 유효하지 않습니다.</p>

<p>CSS는 치수를 사용해 아래와 같은 것들을 표시합니다:</p>

<ul>
 <li>{{cssxref("&lt;length&gt;")}} (거리 단위)</li>
 <li>{{cssxref("&lt;angle&gt;")}}</li>
 <li>{{cssxref("&lt;time&gt;")}}</li>
 <li>{{cssxref("&lt;frequency&gt;")}}</li>
 <li>{{cssxref("&lt;resolution&gt;")}}</li>
</ul>

<p>다음 절에서 이것들을 다룹니다.</p>

<h4 id="거리_단위">거리 단위</h4>

<p>거리 단위, 또는 길이가 값으로 허용되는 속성은 {{cssxref("&lt;length&gt;")}} 자료형으로 표시됩니다. CSS에는 2가지 종류의 길이가 있습니다: 상대적 길이와 절대적 길이입니다.</p>

<p>상대적 길이 단위는 다른 무언가와 비교해 상대적인 길이를 나타냅니다. 예를 들어, <code>em</code>은 해당 요소의 폰트 크기에 상대적이며 <code>vh</code>는 뷰포트의 높이에 상대적입니다.</p>

<table class="standard-table">
 <caption>
 <h4 id="상대적_길이_단위들">상대적 길이 단위들</h4>
 </caption>
 <thead>
  <tr>
   <th scope="col">단위</th>
   <th scope="col">비교의 대상</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>em</code></td>
   <td>해당 요소의 폰트 크기</td>
  </tr>
  <tr>
   <td><code>ex</code></td>
   <td>해당 요소의 폰트의 x높이</td>
  </tr>
  <tr>
   <td><code>cap</code></td>
   <td>해당 요소의 폰트의 대문자 높이(대문자의 공칭 높이)</td>
  </tr>
  <tr>
   <td><code>ch</code></td>
   <td>해당 요소의 폰트의 좁은 문자가 평균적으로 나아가는 길이, “0” (ZERO, U+0030) 문자로 대표됨.</td>
  </tr>
  <tr>
   <td><code>ic</code></td>
   <td>해당 요소의 폰트의 전각 문자가 평균적으로 나아가는 길이, “水” (CJK 물 표의 문자, U+6C34) 문자로 대표됨.</td>
  </tr>
  <tr>
   <td><code>rem</code></td>
   <td>루트 요소의 폰트 크기</td>
  </tr>
  <tr>
   <td><code>lh</code></td>
   <td>해당 요소의 줄 높이</td>
  </tr>
  <tr>
   <td><code>rlh</code></td>
   <td>루트 요소의 줄 높이</td>
  </tr>
  <tr>
   <td><code>vw</code></td>
   <td>뷰포트 너비의 1%</td>
  </tr>
  <tr>
   <td><code>vh</code></td>
   <td>뷰포트 높이의 1%</td>
  </tr>
  <tr>
   <td><code>vi</code></td>
   <td>루트 요소의 인라인 축 방향으로 뷰포트 길이의 1%</td>
  </tr>
  <tr>
   <td><code>vb</code></td>
   <td>루트 요소의 블록 축 방향으로 뷰포트 길이의 1%</td>
  </tr>
  <tr>
   <td><code>vmin</code></td>
   <td>뷰포트의 길이 중 더 짧은 것의 1%</td>
  </tr>
  <tr>
   <td><code>vmax</code></td>
   <td>뷰포트의 길이 중 더 긴 것의 1%</td>
  </tr>
 </tbody>
</table>

<p>절대적 길이 단위는 인치 또는 센티미터의 물리적 길이로 고정적입니다. 그래서 이 단위들의 다수는 인쇄물과 같은 고정된 크기의 매체로 출력되는 경우에 유용합니다. 예를 들어, <code>mm</code>는 물리적인 밀리미터, 즉 센티미터의 1/10입니다.</p>

<table class="standard-table">
 <caption>
 <h4 id="절대적_길이_단위">절대적 길이 단위</h4>
 </caption>
 <thead>
  <tr>
   <th scope="col">단위</th>
   <th scope="col">이름</th>
   <th scope="col">다음과 동일함</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>cm</code></td>
   <td>센티미터</td>
   <td>1cm = 96px/2.54</td>
  </tr>
  <tr>
   <td><code>mm</code></td>
   <td>밀리미터</td>
   <td>1mm = 1cm의 1/10</td>
  </tr>
  <tr>
   <td><code>Q</code></td>
   <td>쿼터-밀리미터</td>
   <td>1Q = 1cm의 1/40</td>
  </tr>
  <tr>
   <td><code>in</code></td>
   <td>인치</td>
   <td>1in = 2.54cm = 96px</td>
  </tr>
  <tr>
   <td><code>pc</code></td>
   <td>피카</td>
   <td>1pc = 1in의 1/16</td>
  </tr>
  <tr>
   <td><code>pt</code></td>
   <td>포인트</td>
   <td>1pt = 1in의 1/72</td>
  </tr>
  <tr>
   <td><code>px</code></td>
   <td>픽셀</td>
   <td>1px = 1in의 1/96</td>
  </tr>
 </tbody>
</table>

<p>길이 값을 포함할 때 길이가 <code>0</code>이면, 단위 식별자가 필요하지 않습니다. 그 외의 경우 단위 식별자가 필요합니다. 단위 식별자는 대소문자를 구별하지 않으며, 값의 숫자 부분 이후에 공백 없이 바로 나와야 합니다.</p>

<h4 id="각도_단위">각도 단위</h4>

<p>각도 값은 {{cssxref("&lt;angle&gt;")}} 자료형으로 표시되며 다음의 값이 허용됩니다:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">단위</th>
   <th scope="col">이름</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>deg</code></td>
   <td>도</td>
   <td>360도가 완전한 원을 이룹니다.</td>
  </tr>
  <tr>
   <td><code>grad</code></td>
   <td>그라디안</td>
   <td>400 그라디안이 완전한 원을 이룹니다.</td>
  </tr>
  <tr>
   <td><code>rad</code></td>
   <td>라디안</td>
   <td>2π 라디안이 완전한 원을 이룹니다.</td>
  </tr>
  <tr>
   <td><code>turn</code></td>
   <td>턴</td>
   <td>1턴이 완전한 원을 이룹니다.</td>
  </tr>
 </tbody>
</table>

<h4 id="시간_단위">시간 단위</h4>

<p>시간 단위는 {{cssxref("&lt;time&gt;")}} 자료형으로 표시됩니다. 시간 단위를 포함할 때는 단위 식별자인 <code>s</code> 또는 <code>ms</code>가 반드시 필요합니다. 아래의 값이 허용됩니다.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">단위</th>
   <th scope="col">이름</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>s</code></td>
   <td>초</td>
   <td></td>
  </tr>
  <tr>
   <td><code>ms</code></td>
   <td>밀리초</td>
   <td>1,000 밀리초는 1초와 같습니다.</td>
  </tr>
 </tbody>
</table>

<h4 id="진동수_단위">진동수 단위</h4>

<p>진동수 단위는 {{cssxref("&lt;frequency&gt;")}} 자료형으로 표시됩니다. 아래 값이 허용됩니다.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">단위</th>
   <th scope="col">이름</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Hz</code></td>
   <td>헤르츠</td>
   <td>1초당 발생한 횟수를 나타냅니다.</td>
  </tr>
  <tr>
   <td><code>kHz</code></td>
   <td>킬로헤르츠</td>
   <td>1 킬로헤르츠는 1000 헤르츠와 같습니다.</td>
  </tr>
 </tbody>
</table>

<p><code>1Hz</code>, 또는 <code>1hz</code>, <code>1HZ</code>는 초당 진동수입니다.</p>

<h4 id="해상도_단위">해상도 단위</h4>

<p>해상도 단위는 {{cssxref("&lt;resolution&gt;")}}로 표시됩니다. 이것들은 스크린과 같은 그래픽 표시에서 CSS 인치당, 센티미터당, 픽셀당 몇 개의 점을 포함할 수 있는지를 나타냄으로써 점 1개의 크기를 표현합니다. 다음의 값이 허용됩니다:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">단위</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>dpi</code></td>
   <td>인치당 점의 수.</td>
  </tr>
  <tr>
   <td><code>dpcm</code></td>
   <td>센티미터당 점의 수.</td>
  </tr>
  <tr>
   <td><code>dppx</code>, <code>x</code></td>
   <td>픽셀당 점의 수.</td>
  </tr>
 </tbody>
</table>

<h3 id="퍼센트">퍼센트</h3>

<p>{{cssxref("&lt;percentage&gt;")}}는 다른 값의 일부분을 표현하는 자료형입니다.</p>

<p>퍼센트 값은 언제나 다른 양, 예컨대 길이와 같은 것에 상대적입니다. 퍼센트를 허용하는 속성은 그 퍼센트가 참조하는 양 또한 정의합니다. 이 양은 같은 요소가 갖는 다른 속성의 값이거나, 조상 요소가 갖는 속성의 값이거나, 이 요소를 포함하는 블록의 치수 등이 될 수 있습니다.</p>

<p>예를 들면, 어떤 박스의 {{cssxref("width")}}를 퍼센트로 지정한 경우, 그 박스의 부모의 계산된 너비의 퍼센트를 참조합니다:</p>

<pre class="brush: css notranslate">.box {
  width: 50%;
}</pre>

<h3 id="퍼센트와_치수_함께_사용하기">퍼센트와 치수 함께 사용하기</h3>

<p>일부 속성은 두 자료형 중 하나를 선택해서, 예를 들면 <code>&lt;length&gt;</code> <strong>또는</strong> <code>&lt;percentage&gt;</code>를 골라서 치수를 지정할 수 있습니다. 이 경우 사양에는 허용되는 값이 {{cssxref("&lt;length-percentage&gt;")}}처럼 조합된 단위로 기술됩니다. 다음은 가능한 다른 조합입니다:</p>

<ul>
 <li>{{cssxref("&lt;frequency-percentage&gt;")}}</li>
 <li>{{cssxref("&lt;angle-percentage&gt;")}}</li>
 <li>{{cssxref("&lt;time-percentage&gt;")}}</li>
</ul>

<h3 id="특별한_자료형_다른_사양에서_정의된_것들">특별한 자료형 (다른 사양에서 정의된 것들)</h3>

<ul>
 <li>{{cssxref("&lt;color&gt;")}}</li>
 <li>{{cssxref("&lt;image&gt;")}}</li>
 <li>{{cssxref("&lt;position&gt;")}}</li>
</ul>

<h4 id="색깔">색깔</h4>

<p>{{cssxref("&lt;color&gt;")}} 값은 요소의 외관 색깔(예: 배경색)을 지정하며, <a href="https://drafts.csswg.org/css-color-3/">CSS Color Module</a>에 정의되어 있습니다.</p>

<h4 id="이미지">이미지</h4>

<p>{{cssxref("&lt;image&gt;")}} 값은 CSS에서 사용될 수 있는 다양한 종류의 이미지를 지정하며, <a href="https://www.w3.org/TR/css-images-4/">CSS Image Values and Replaced Content Module</a>에 정의되어 있습니다.</p>

<h4 id="위치">위치</h4>

<p>{{cssxref("&lt;position&gt;")}} 자료형은 배치 영역 안에서 객체의 2D 위치를, 예컨대 컨테이너 안에서 배경 이미지의 위치 같은 것을 정의합니다. 이 자료형은 {{cssxref("background-position")}}으로 해석되므로 <a href="https://www.w3.org/TR/css-backgrounds-3/">CSS Backgrounds and Borders specification</a>에 명시되어 있습니다.</p>

<h3 id="함수_표기법">함수 표기법</h3>

<ul>
 <li>{{cssxref("calc()")}}</li>
 <li>{{cssxref("min", "min()")}}</li>
 <li>{{cssxref("max", "max()")}}</li>
 <li>{{cssxref("clamp", "clamp()")}}</li>
 <li>{{cssxref("toggle", "toggle()")}}</li>
 <li>{{cssxref("attr", "attr()")}}</li>
</ul>

<p><a href="/en-US/docs/Web/CSS/CSS_Functionals">함수 표기법</a>은 더 복잡한 자료형을 표현하거나 CSS가 특별한 처리를 하도록 지시하는 자료형의 값입니다. 이 문법은 함수의 이름으로 시작해서 바로 왼쪽 괄호 <code>(</code>가 뒤따르고, 함수의 인자를 나열한 다음, 오른쪽 괄호 <code>)</code>로 끝납니다. 함수는 여러 개의 인자를 받을 수 있으며, CSS 속성 값과 비슷한 형식을 가집니다.</p>

<p>공백 문자는 허용되지만, 괄호 안에서는 선택 사항입니다. (단 <code>min()</code>, <code>max()</code>, <code>clamp()</code> 함수 페이지의 주의 사항에서 공백 문자에 대한 내용을 확인하세요.)</p>

<p><code>rgba()</code>와 같은 몇몇 레거시 함수 표기법이 콤마를 사용하지만, 일반적으로 콤마는 목록에서 아이템을 구분하기 위해 사용됩니다. 콤마가 인자를 구분하기 위해 사용된 경우, 콤마 전후의 공백 문자는 선택 사항입니다.</p>

<h2 id="사양">사양</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">사양</th>
   <th scope="col">상태</th>
   <th scope="col">비고</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS4 Values")}}</td>
   <td>{{Spec2("CSS4 Values")}}</td>
   <td><code>vi</code>, <code>vb</code>, <code>ic</code>, <code>cap</code>, <code>lh</code>, <code>rlh</code> 단위 추가.<br>
    <code>min()</code>, <code>max()</code>, <code>clamp()</code> 함수 표기법 추가<br>
    <code>toggle()</code> 추가</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Values")}}</td>
   <td>{{Spec2("CSS3 Values")}}</td>
   <td><code>calc()</code>, <code>ch</code>, <code>rem</code>, <code>vw</code>, <code>vw</code>, <code>vmin</code>, <code>vmax</code>, <code>Q</code> 추가</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS4 Colors")}}</td>
   <td>{{Spec2("CSS4 Colors")}}</td>
   <td><code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code> 함수에 콤마 없는 문법 추가. <code>rgb()</code>와 <code>hsl()</code>에 알파 값 허용하며 <code>rgba()</code>와 <code>hsla()</code>를 그것들의 (지원이 중단된) 별칭으로 전환.<br>
    색깔 키워드 <code>rebeccapurple</code> 추가. 4자리와 8자리의 16진수 색깔 값 추가, 마지막 숫자(들)이 알파 값을 의미함.<br>
    <code>hwb()</code>, <code>device-cmyk()</code>, <code>color()</code> 함수 추가.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Colors")}}</td>
   <td>{{Spec2("CSS3 Colors")}}</td>
   <td>system-colors를 지원 중단으로 표시. SVG 색깔 추가. <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code> 함수 추가.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS4 Images")}}</td>
   <td>{{Spec2("CSS4 Images")}}</td>
   <td>
    <p><code>element()</code>, <code>image()</code>, <code>image-set()</code>, <code>conic-gradient()</code> 추가</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Images")}}</td>
   <td>{{Spec2("CSS3 Images")}}</td>
   <td>이미지를 처음으로 정의함.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>첫번째 정의.</td>
  </tr>
 </tbody>
</table>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Types">CSS의 기본 자료형</a></li>
 <li><a href="/ko/docs/Learn/CSS/Introduction_to_CSS/Values_and_units">CSS 개론: 값과 단위</a></li>
</ul>
