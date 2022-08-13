---
title: 공을 벽에 튕기기
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
original_slug: Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Bounce_off_the_walls
---
<div>{{GamesSidebar}}</div><div>{{IncludeSubnav("/ko/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/공_움직이기", "Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Paddle_and_keyboard_controls")}}</p>

<div class="summary">
<p>이 글은 <a href="/ko/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas 튜토리얼</a>에 포함된 10단계 중 3단계 글입니다. 이 글을 다 읽고 난 뒤 완성된 소스코드는 <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html">Gamedev-Canvas-workshop/lesson3.html</a>에서 확인해볼 수 있습니다.</p>
</div>

<p><span class="seoSummary">공이 움직이는 걸 보니 기쁩니다! 하지만 기쁨을 즐길 틈도 없이 공이 스크린 밖으로 사라져버리네요. 이 문제를 해결하기 위해 공이 캔버스의 4군데 모서리에 다달았을 때 튕겨나올 수 있도록 간단한 충돌 감지 기능(더 자세한 내용은 <a href="/ko/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection">다음 글</a>에서 다시 설명할 예정입니다)을 구현해야 합니다.</span></p>

<h2 id="간단한_충돌_감지">간단한 충돌 감지</h2>

<p>충돌을 감지하기 위해서는 공이 벽에 닿았는지를 확인하고 그에 따라 움직이는 방향을 수정해야 합니다.</p>

<p>보다 계산을 쉽게 하기 위하여 <code>ballRadius</code> 변수를 만든 뒤 원의 반지름 값을 대입하여 계산하는데 사용합니다. 아래의 코드를 기존의 변수들 아래에 삽입하세요:</p>

<pre class="brush: js">var ballRadius = 10;</pre>

<p>이제<code>drawBall()</code> func기능 안에 볼을 그리는 코드를 아래와 같이 수정하세요:</p>

<pre class="brush: js">ctx.arc(x, y, ballRadius, 0, Math.PI*2);</pre>

<h3 id="위_아래_방향으로_튕기기">위 아래 방향으로 튕기기</h3>

<p>캔버스에는 총 4개의 모서리 즉, 4개의 벽이 있습니다. 일단 상단의 벽에 집중해 보겠습니다. 공을 그리는 매 프레임마다 우리는 볼이 상단 모서리에 닿았는지 확인해야합니다 — 닿았다면 볼이 움직이는 방향을 반대로 바꾸어 캔버스 안에 여전히 공이 보이도록 만들어주어야 합니다. 캔버스 내 위치 구조는 좌상단으로 부터 시작하는 것을 잊지마세요:</p>

<pre class="brush: js">if(y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>만약 공의 위치에서 <code>y</code>값이 0보다 작은 경우 음/양수를 반대로 바꾸어주어 y 축의 방향을 바꾸어 줍니다. 공이 매 프레임마다 2픽셀만큼 움직이고 있었다면, 이제는 매 프레임마다 2픽셀만큼 "아래 방향으로" 이동할 것입니다.</p>

<p>위 코드는 상단 모서리를 튕기도록 해주기 때문에 이번엔 하단 모서리를 튕기도록 해보겠습니다:</p>

<pre class="brush: js">if(y + dy &gt; canvas.height) {
    dy = -dy;
}</pre>

<p>공의 위치에서 y값이 캔버스의 높이보다 큰 경우(좌상단으로부터 y값을 측정하기 때문에 상단모서리에서의 y값은 0, 하단모서리에서의 y값은 480, 즉 캔버서의 높이값임을 잊지마세요) y축 움직임의 반대 방향으로 튕겨냅니다.</p>

<p>위의 두가지 코드를 하나로 합칠 수 있습니다:</p>

<pre class="brush: js">if(y + dy &gt; canvas.height || y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>둘 중 하나의 조건이라도 만족한다면, 공의 방향은 반대로 바뀝니다.</p>

<h3 id="좌우로_튕겨내기">좌우로 튕겨내기</h3>

<p>우리는 방금 상, 하단 모서리를 인식했으므로 이번엔 좌우 모서리를 생각해봅시다. 거의 같은 문제이므로 우리는 y 대신 x값을 대입하여 그대로 반복해주기만 하면 됩니다:</p>

<pre class="brush: js">if(x + dx &gt; canvas.width || x + dx &lt; 0) {
    dx = -dx;
}

if(y + dy &gt; canvas.height || y + dy &lt; 0) {
    dy = -dy;
}</pre>

<p>이 후 위 코드를 draw() 함수블럭이 끝나는 중괄호 바로 전에 삽입합니다.</p>

<h3 id="공이_여전히_벽_밖으로_사라져요!">공이 여전히 벽 밖으로 사라져요!</h3>

<p>코드를 테스트해보세요. — 아마 캔버스 모서리에서 튕겨나오는 볼이 인상적이지 않나요? 하지만 또 다른 문제가 생겼습니다. — 공이 벽을 튕겨나와 방향이 바뀌기 전에 살짝 벽 안으로 숨어버리네요:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/10432/ball-in-wall.png" style="display: block; height: 320px; margin: 0px auto; width: 480px;"></p>

<p>이 문제는 우리가 충돌을 감지할 때 그 기준을 공의 원점에 두고 계산했지만, 원의 둘레를 기준으로 계산을 해야 하기 때문입니다. 벽에 공이 절반쯤 지난 뒤가 아니라 닿자마자 튕겨나와야 합니다. 이에 맞게 코드를 조금 수정해봅시다. 여러분이 삽입한 코드를 아래와 같이 수정해보세요:</p>

<pre class="brush: js">if(x + dx &gt; canvas.width-ballRadius || x + dx &lt; ballRadius) {
    dx = -dx;
}
if(y + dy &gt; canvas.height-ballRadius || y + dy &lt; ballRadius) {
    dy = -dy;
}</pre>

<p>공의 원점과 벽 사이의 거리가 공의 반지름과 같아졌을 때 공의 움직임이 바뀌도록 만들었습니다. 이제야 볼이 정확히 튕겨나오고 있네요.</p>

<h2 id="여러분의_코드를_비교해보세요">여러분의 코드를 비교해보세요</h2>

<p>자, 다시 여러분이 작성한 코드를 완성된 코드와 비교해보고 게임을 실행해보세요:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/redj37dc/","","370")}}</p>

<div class="note">
<p><strong>Exercise</strong>: 공이 벽에 부딪힐 때마다 공의 색을 무작위로 변화시켜보세요.</p>
</div>

<h2 id="다음_단계">다음 단계</h2>

<p>이제 우리는 공이 게임판 안에서 어디서 어떻게 움직이고 있는지 파악했습니다. 네번째 챕터에서는 조작 가능한 배드를 구현해볼 것입니다. — <a href="/ko/docs/Games/Workflows/Breakout_game_from_scratch/Paddle_and_keyboard_controls">패드와 키보드 조작</a>.</p>

<p>{{PreviousNext("Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/공_움직이기", "Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Paddle_and_keyboard_controls")}}</p>
