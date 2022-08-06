---
title: 캔버스 생성과 그리기
slug: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
tags:
  - 2D
  - 게임
  - 비기너
  - 자바스크립트
  - 캔버스
  - 튜토리얼
translation_of: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
original_slug: Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/캔버스_생성과_그리기
---
<div>{{GamesSidebar}}</div><div>{{IncludeSubnav("/ko/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임", "Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/공_움직이기")}}</p>

<div class="summary">
<p>이 강의는 <a href="https://developer.mozilla.org/ko/docs/Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임">게임 개발 캔버스 튜토리얼</a>의 10단계 중 첫 번째 과정입니다. <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html">Gamedev-Canvas-workshop/lesson1.html</a>에서 이 강의의 완성된 코드를 볼 수 있습니다.</p>
</div>

<p><span class="seoSummary">게임의 기능들을 작성하기 전에, 게임 내부에 렌더링 하기 위한 기본 구조들을 HTML과 {{htmlelement("canvas")}} 엘리먼트를 사용하여 만들어야 합니다.</span></p>

<h2 id="게임의_HTML">게임의 HTML</h2>

<p>HTML문서 구조는 꽤 간단합니다. 게임은 {{htmlelement("canvas")}} 엘리먼트에 렌더링됩니다. 여러분이 좋아하는 텍스트 에디터로 새로운 HTML 문서를 생성하여 index.html로 저장하고, 아래 코드를 추가하세요.</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Gamedev Canvas Workshop&lt;/title&gt;
    &lt;style&gt;
    	* { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;canvas id="myCanvas" width="480" height="320"&gt;&lt;/canvas&gt;

&lt;script&gt;
	// JavaScript 코드가 여기에 들어갈 것입니다.
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>{{htmlelement("head")}} 에는 문자셋이 정의되어 있고, {{htmlelement("title")}}과 몇가지 기본적인 CSS가 있습니다. {{htmlelement("body")}}는 {{htmlelement("canvas")}} 와 {{htmlelement("script")}}를 포함하고 있습니다. {{htmlelement("canvas")}}에는 게임이 렌더되고, {{htmlelement("script")}}에는 JavaScript가 들어갑니다. {{htmlelement("canvas")}}엘리먼트는 쉽게 참조하기 위해 id로 <code>myCanvas</code>를 갖고 있고, 480픽셀의 길이와 320픽셀의 높이를 갖도록 되어있습니다. 우리가 이 튜토리얼에서 작성하게될 모든 JavaScript 코드는 <code>&lt;script&gt;</code>와  <code>&lt;/script&gt;</code> 태그 사이에 들어가게 됩니다.</p>

<h2 id="캔버스_기본">캔버스 기본</h2>

<p>실제로 {{htmlelement("canvas")}}엘리먼트 위에 그래픽을 렌더링하기 위해서는 JavaScript로 참조할 수 있게 만들어야 합니다. 다음 코드를 여러분의 <code>&lt;script&gt;</code> 태그 다음에 추가하세요..</p>

<pre class="brush: js">var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");</pre>

<p>{{htmlelement("canvas")}} 엘리먼트에 대한 참조를 <code>canvas</code> 변수에 저장하였습니다. 그러고 나서는 캔버스에 그리기 위해 실질적으로 사용되는 도구인 2D rendering context를 <code>ctx</code> 변수에 저장하고 있습니다.</p>

<p>캔버스에 빨간색 네모를 그리는 짧은 예제 코드를 작성해봅시다. 바로 직전의 JavaScript 코드 아래에 다음 코드를 추가하고 <code>index.html을</code> 브라우저에서 열어 보세요.</p>

<pre class="brush: js">ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();</pre>

<p>{{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}와 {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}메소드 사이에 모든 명령어가 들어갑니다. 우리는 {{domxref("CanvasRenderingContext2D.rect()","rect()")}}를 이용해서 직사각형을 정의했는데, 처음 두 값들은 캔버스의 좌상단 모서리로 부터의 좌표를 의미하고, 나머지 두 값은 직사각형의 너비와 높이를 의미합니다. 위 코드에서 직사각형은 캔버스 좌측에서 20픽셀 떨어져있고, 캔버스 상단에서 40픽셀만큼 아래로 떨어져 있습니다. 그리고 너비와 높이는 각각 50픽셀로 설정되어 완벽한 정사각형으로 그려지고 있습니다. {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}은  {{domxref("CanvasRenderingContext2D.fill()","fill()")}}메소드에서 칠해질 색상 값을 갖게 됩니다. 위 코드에서는 사각형을 빨간색으로 칠하고 있습니다.</p>

<p>직사각형만 그릴 수 있는 것은 아닙니다. 이번에는 초록색 원을 그려보겠습니다. 아래의 코드를 여러분의 JavaScript의 마지막에 추가하고, 저장한 이후에 페이지를 새로고침 해보세요.</p>

<pre class="brush: js">ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();</pre>

<p>위 코드에서 볼 수 있듯이{{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}와 {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}메소드가 다시 나왔습니다. 그 사이에, 가장 중요한 부분인 {{domxref("CanvasRenderingContext2D.arc()","arc()")}} 메소드가 있습니다. 이 메소드는 6개의 파라미터를 갖습니다.</p>

<ul>
 <li><code>원의 중심을 가리키는 x와 y좌표</code></li>
 <li>원의 반지름</li>
 <li>시작 각도와 끝 각도(원을 그릴 때 시작과 끝이되는 각도이며, 라디안 값입니다.)</li>
 <li>그리는 방향(false를 넣으면 시계방향으로 그려집니다. 기본 값이나 true를 넣으면 반 시계방향으로 그려집니다.) 이 파라미터는 옵션입니다.</li>
</ul>

<p>{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}속성은 이전과 조금 달라 보이는데, 이는 CSS에서 색상을 표현하는 여러가지 방법 중 하나입니다. 색상을 표현할 때, 16진수로 색상값을 표현하거나, 색상 키워드를 사용하거나, rgba() 함수를 사용하거나 그외에 다른 색상 메소드를 사용할 수 있습니다.</p>

<p>{{domxref("CanvasRenderingContext2D.fill()","fill()")}}을 사용해서 원에 색상을 채울 수 있다면,{{domxref("CanvasRenderingContext2D.stroke()","stroke()")}}를 이용하면 원의 외곽선에 색상을 부여할 수 있습니다. 아래의 코드들도 여러분의 JavaScript에 추가해보세요.</p>

<pre class="brush: js">ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();</pre>

<p>위 코드는 비어있는 파란색 외곽선으로 된 원을 그립니다. <code>rgba()</code> 함수의 알파 채널 값 때문에 파란색은 반투명하게 표현됩니다.</p>

<h2 id="여러분의_코드와_비교해_보세요">여러분의 코드와 비교해 보세요</h2>

<p> JSFiddle에서 라이브로 실행되는 전체 코드입니다.</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","370")}}</p>

<div class="note">
<p><strong>연습해보기</strong>: 주어진 모양들의 크기와 색상을 변경해보세요.</p>
</div>

<h2 id="다음_단계로">다음 단계로</h2>

<p>이제 우리는 기본적인 HTML을 설정하고, canvas에 대해 조금 배웠습니다. 두 번째 챕터로 넘어가서 <a href="https://developer.mozilla.org/ko/docs/Games/Tutorials/%EC%88%9C%EC%88%98%ED%95%9C_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC_%EC%9D%B4%EC%9A%A9%ED%95%9C_2D_%EB%B2%BD%EB%8F%8C%EA%B9%A8%EA%B8%B0_%EA%B2%8C%EC%9E%84/%EA%B3%B5_%EC%9B%80%EC%A7%81%EC%9D%B4%EA%B8%B0">게임에서 공을 움직이기</a>위해 어떻게 해야 하는지 계속 알아봅시다.</p>

<p>{{PreviousNext("Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임", "Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/공_움직이기")}}</p>
