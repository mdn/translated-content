---
title: 단축 속성
slug: Web/CSS/Shorthand_properties
tags:
  - CSS
  - Guide
  - Layout
  - Reference
  - Web
  - 단축 속성
translation_of: Web/CSS/Shorthand_properties
---
<div>{{cssref}}</div>

<p><strong>단축 속성</strong>은 서로 다른 여러 가지 CSS 속성의 값을 지정할 수 있는 CSS 속성입니다. 단축 속성을 사용하면 간결한 (그리고 읽기도 좋은) 스타일 시트를 작성해 시간과 체력을 아낄 수 있습니다.</p>

<p>CSS 명세는 같은 주제를 가진 여러 공통 속성을 묶기 위해 단축 속성을 정의합니다. 가령 CSS {{cssxref("background")}} 속성은 {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}}, {{cssxref("background-position")}} 값을 정의할 수 있는 단축 속성입니다. 마찬가지로, 가장 흔히 쓰이는 글꼴 관련 속성은 {{cssxref("font")}} 단축 속성으로, 박스 주위의 바깥 여백은 {{cssxref("margin")}} 단축 속성으로 지정할 수 있습니다.</p>

<h2 id="Tricky_edge_cases" name="Tricky_edge_cases">까다로운 예외상황</h2>

<p>단축 속성은 사용하기 매우 편리하지만, 염두해야 할 예외상황이 몇 가지 있습니다.</p>

<ol>
 <li>단축 속성에 지정하지 않은 값은 초깃값이 됩니다. 별거 아닌 듯 보일 수 있지만, 사실 이전에 정의한 값도 초깃값으로 <strong>재정의</strong>합니다. 따라서,

  <pre class="brush:css notranslate">background-color: red;
background: url(images/bg.gif) no-repeat top right;
</pre>
  을 적한 요소의 배경 색은 <code>red</code>가 아니라, {{cssxref("background-color")}}의 기본값인 <code>transparent</code>가 됩니다. 두 번째 규칙이 우선하기 때문입니다.</li>
 <li>개별 속성값만 상속할 수 있습니다. 빠진 값에는 초깃값을 대입하므로, 어떤 속성의 값을 상속받고자 단축 속성의 해당 부분을 비우는 것은 불가능합니다. <code>inherit</code> 키워드 역시 속성 값으로 온전히 사용해야 하며 값의 일부(<code>red <em>inherit</em> top right</code>처럼)로는 사용할 수 없습니다. 따라서 어떤 속성을 상속하고 싶다면 <code>inherit</code>을 지정한 본디 속성(longhand property)을 추가할 수밖에 없습니다.</li>
 <li>단축 속성은 값의 순서를 되도록 제한하지 않습니다. 특히 각 값의 자료형이 서로 다르면 순서가 중요하지 않습니다. 하지만 일부 속성이 동일한 자료형의 값을 가질 수 있을 때는 잘 동작하지 않습니다. 이런 경우의 처리는 여러 범주로 나뉩니다:
  <ol>
   <li>{{cssxref("border-style")}}, {{cssxref("margin")}}, {{cssxref("padding")}}처럼 박스의 모서리와 관련된 속성을 다루는 단축 속성은 항상 같은 쪽의 모서리를 가리키는 1~4 값 구문을 사용합니다:
    <table>
     <tbody>
      <tr>
       <td style="width: 79px;"><img alt="border1.png" src="/files/3646/border1.png"></td>
       <td>1개 값 구문: <code>border-width: 1em</code> — 유일한 값이 모든 변을 나타냅니다.</td>
      </tr>
      <tr>
       <td><img alt="border2.png" src="/files/3647/border2.png"></td>
       <td>2개 값 구문: <code>border-width: 1em 2em</code> — 첫 번째 값은 세로(상하)변을, 두 번째는 가로(좌우)변을 나타냅니다.</td>
      </tr>
      <tr>
       <td><img alt="border3.png" src="/files/3648/border3.png"></td>
       <td>3개 값 구문: <code>border-width: 1em 2em 3em</code> — 첫 번째 값은 상변을, 두 번째는 가로변, 세 번째는 하변을 나타냅니다.</td>
      </tr>
      <tr>
       <td><img alt="border4.png" src="/files/3649/border4.png"></td>
       <td>
        <p>4개 값 구문: <code>border-width: 1em 2em 3em 4em</code> — 네 값이 각각 상, 우, 하, 좌변을 나타냅니다. 상변에서 시작하여 시계 방향으로, 항상 같은 순서를 사용합니다.</p>
       </td>
      </tr>
     </tbody>
    </table>
   </li>
   <li>비슷하게, {{cssxref("border-radius")}} 같은 박스의 꼭짓점과 관련된 속성을 다루는 단축 속성은 항상 같은 쪽의 꼭짓점을 가리키는 1-4-값 구문을 사용합니다:
    <table>
     <tbody>
      <tr>
       <td style="width: 69px;"><img alt="corner1.png" src="/files/3650/corner1.png"></td>
       <td>1개 값 구문: <code>border-radius: 1em</code> — 유일한 값이 모든 귀를 나타냅니다.</td>
      </tr>
      <tr>
       <td><img alt="corner2.png" src="/files/3651/corner2.png"></td>
       <td>2개 값 구문: <code>border-radius: 1em 2em</code> — 첫 번째 값은 좌상 및 우하귀, 두 번째는 우상 및 좌하귀를 나타냅니다.</td>
      </tr>
      <tr>
       <td><img alt="corner3.png" src="/files/3652/corner3.png"></td>
       <td>3개 값 구문: <code>border-radius: 1em 2em 3em</code> — 첫 번째 값은 좌상귀, 두 번째는 우상 및 좌하귀, 세 번째 값은 우하귀를 나타냅니다.</td>
      </tr>
      <tr>
       <td><img alt="corner4.png" src="/files/3653/corner4.png"></td>
       <td>
        <p>4개 값 구문: <code>border-radius: 1em 2em 3em 4em</code> — 네 값은 각각 좌상, 우상, 우하 및 좌하귀를 나타냅니다. 좌상귀에서 시작하여 시계 방향으로, 항상 같은 순서를 사용합니다.</p>
       </td>
      </tr>
     </tbody>
    </table>
   </li>
  </ol>
 </li>
</ol>

<h2 id="Background_Properties" name="Background_Properties">배경 속성</h2>

<p>아래와 같은 속성을 가지는 배경은...</p>

<pre class="brush:css notranslate">background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;</pre>

<p>다음과 같이 선언 단 하나를 사용해서 단축할 수 있습니다.</p>

<pre class="brush:css notranslate">background: #000 url(images/bg.gif) no-repeat top right;</pre>

<p>(단축 형은 실제로 <code>background-attachment: scroll</code> 및 CSS3의 일부 부가 속성이 더해진 위 본디 속성과 같습니다.)</p>

<p>{{cssxref("background")}}에서 CSS3 속성을 포함한 더 자세한 정보를 확인할 수 있습니다.</p>

<h2 id="Font_Properties" name="Font_Properties">글꼴 속성</h2>

<p>아래와 같은 속성을 가지는 글꼴은...</p>

<pre class="brush:css notranslate">font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;</pre>

<p>다음처럼 단축할 수 있습니다.</p>

<pre class="brush:css notranslate">font: italic bold .8em/1.2 Arial, sans-serif;</pre>

<p>이 단축 선언은 실제로 <code>font-variant: normal</code> 및 <code>font-size-adjust: none</code> (CSS2.0 / CSS3), <code>font-stretch: normal</code> (CSS3)이 더해진 위 본디 속성과 같습니다.</p>

<h2 id="Border_Properties" name="Border_Properties">테두리 속성</h2>

<p>테두리의 너비, 색상, 스타일을 하나의 선언으로 단축할 수 있습니다. 즉 아래와 같은 CSS를...</p>

<pre class="brush:css notranslate">border-width: 1px;
border-style: solid;
border-color: #000;</pre>

<p>다음처럼 단축할 수 있습니다.</p>

<pre class="brush:css notranslate">border: 1px solid #000;</pre>

<h2 id="Margin_and_Padding_Properties" name="Margin_and_Padding_Properties">여백 속성</h2>

<p>바깥과 안쪽 여백의 단축 속성도 똑같이 동작합니다. 바깥 여백, <code>margin</code> 속성은 한 개, 두 개, 세 개, 네 개의 값을 사용해 지정합니다. 아래 CSS 선언은...</p>

<pre class="brush:css notranslate">margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;</pre>

<p>다음의 네 값 구문 단축 속성을 사용한 선언과 같습니다. 방향이 시계 방향임을 기억하세요. 각 값은 위, 오른쪽, 아래, 왼쪽을 나타냅니다.</p>

<pre class="brush:css notranslate">margin: 10px 5px 10px 5px;</pre>

<p>바깥 여백의 한 개, 두 개, 세 개, 네 개 값 선언 규칙은 다음과 같습니다.</p>

<ul>
 <li><strong>한 개의 값</strong>은 모든 네 면의 여백을 설정합니다.</li>
 <li><strong>두 개의 값</strong>을 지정하면 첫 번째는 <strong>위와 아래</strong>, 두 번째는 <strong>왼쪽과 오른쪽</strong> 여백을 설정합니다.</li>
 <li><strong>세 개의 값</strong>을 지정하면 첫 번째는 <strong>위</strong>, 두 번째는 <strong>왼쪽과 오른쪽,</strong> 세 번째 값은 <strong>아래</strong> 여백을 설정합니다.</li>
 <li><strong>네 개의 값</strong>을 지정하면 각각 <strong>상, 우, 하, 좌</strong> 순서로 여백을 지정합니다. (시계방향)</li>
</ul>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li>단축 속성: {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("text-decoration")}}, {{cssxref("transition")}}</li>
</ul>
