---
title: 캔버스 최적화
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/HTML/Canvas/Tutorial/Optimizing_canvas
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</div>

<div class="summary">
<p>{{HTMLElement("canvas")}} 엘리먼트는 웹에서 2D 그래픽을 렌더링하는 데 가장 널리 사용되는 도구 중 하나입니다. 그러나 웹 사이트와 앱이 Canvas API를 최대한으로 밀면 성능이 저하되기 시작합니다. 그러나 웹 사이트 및 앱이 Canvas API를 한계치까지 사용하면 성능이 저하되기 시작합니다. <span class="seoSummary">이 글에서는 그래픽이 잘 동작하도록 보장하기 위해 캔버스 엘리먼트의 사용을 최적화하기위한 제안 사항을 제공합니다.</span></p>
</div>

<h2 id="성능_팁">성능 팁</h2>

<p>다음은 캔버스 성능을 개선하기 위한 팁 모음입니다.</p>

<h3 id="캔버스에_표시되지_않는_비슷한_원시_혹은_반복_객체를_미리_그려라">캔버스에 표시되지 않는 비슷한 원시 혹은 반복 객체를 미리 그려라</h3>

<p>만약 당신이 캔버스에 애니메이션 프레임을 그리면서 반복적인 작업이 발견된다면, 눈에 보이지 않는 숨겨진 캔버스 요소를 새로 만들고 그 캔버스에 미리 그려 넣는 방법을 고려하세요. 그렇게 하면 필요한 순간에 숨긴 캔버스에 그려진 이미지를 다시 주 캔버스 이미지에 그려넣어, 불필요한 렌더링 반복 작업을 줄여 성능 향상을 꾀할 수 있습니다.</p>

<pre class="brush: js">myCanvas.offscreenCanvas = document.createElement('canvas');
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext('2d').drawImage(myCanvas.offScreenCanvas, 0, 0);</pre>

<h3 id="부동_소수점_좌표를_피하고_대신_정수를_사용하라.">부동 소수점 좌표를 피하고 대신 정수를 사용하라.</h3>

<p>정수값들 없이 캔버스 상의 객체를 렌더링할 때 부가적인 픽셀 렌더링이 발생합니다.</p>

<pre class="brush: js">ctx.drawImage(myImage, 0.3, 0.5);
</pre>

<p>이렇게하면 앤티 앨리어싱(anti-aliasing) 효과를 만들기 위해 브라우저에서 추가 연산을 수행해야합니다. 예제에서 이를 방지하려면 {{jsxref("Math.floor()")}}를 사용하여 {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} 호출에 사용된 모든 좌표를 반올림해야합니다.</p>

<h3 id="drawImage에서_이미지_크기를_조정하지_마라."><code>drawImage</code>에서 이미지 크기를 조정하지 마라.</h3>

<p>{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}에서 즉시 크기를 조정하지 말고 다양한 이미지 크기를 오프스크린(offscreen) 캔버스에 캐시하십시오.</p>

<h3 id="복잡한_장면에_여러_개의_레이어_캔버스를_사용하라.">복잡한 장면에 여러 개의 레이어 캔버스를 사용하라.</h3>

<p>어플리케이션에서 일부 객체는 자주 이동하거나 변경해야하지만 다른 객체는 상대적으로 고정 위치에 남아야 합니다. 이런 상황에서 대응 가능한 최적화는 여러 <code>&lt;canvas&gt;</code> 엘리먼트를 사용하여 항목을 겹쳐서 만드는 것입니다.</p>

<p>예를 들어 상단에 UI, 중간에 게임 플레이 액션, 하단에 정적 배경이있는 게임이 있다고 가정 해 보겠습니다. 이 경우 게임을 세 개의 <code>&lt;canvas&gt;</code> 레이어로 나눌 수 있습니다. UI는 사용자 입력시에만 변경되며 게임 플레이 레이어는 모든 새 프레임마다 변경되며 배경은 일반적으로 변경되지 않습니다.</p>

<pre class="brush: html">&lt;div id="stage"&gt;
  &lt;canvas id="ui-layer" width="480" height="320"&gt;&lt;/canvas&gt;
  &lt;canvas id="game-layer" width="480" height="320"&gt;&lt;/canvas&gt;
  &lt;canvas id="background-layer" width="480" height="320"&gt;&lt;/canvas&gt;
&lt;/div&gt;

&lt;style&gt;
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }

  canvas { position: absolute; }
  #ui-layer { z-index: 3; }
  #game-layer { z-index: 2; }
  #background-layer { z-index: 1; }
&lt;/style&gt;
</pre>

<h3 id="큰_배경_이미지는_일반_CSS를_사용하라.">큰 배경 이미지는 일반 CSS를 사용하라.</h3>

<p>정적 배경 이미지가있는 경우 CSS {{cssxref("background")}} 속성을 사용하여 일반 {{HTMLElement("div")}} 요소에 그릴 수 있으며 캔버스 아래에 배치 할 수 있습니다. 이렇게하면 모든 틱 마다 배경을 캔버스에 렌더링 할 필요가 없어집니다.</p>

<h3 id="CSS_변환transform을_사용하여_캔버스_크기_조정하라.">CSS 변환(transform)을 사용하여 캔버스 크기 조정하라.</h3>

<p><a href="/en-US/docs/Web/Guide/CSS/Using_CSS_transforms">CSS 변환(transform)</a>은 GPU를 사용하기 때문에 더 빠릅니다. 가장 좋은 경우는 캔버스를 스케일링하지 않거나, 큰 캔버스를 축소하기보다 작은 캔버스를 확대하는 것입니다.</p>

<pre class="brush: js">var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
</pre>

<h3 id="투명도를_사용하지_마라.">투명도를 사용하지 마라.</h3>

<p>응용 프로그램이 캔버스를 사용하고 투명 배경을 필요로하지 않는 경우 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext" title="The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported."><code>HTMLCanvasElement.getContext()</code></a>를 사용하여 드로잉 컨텍스트를 만들 때 alpha 옵션을 false로 설정합니다. 이 정보는 렌더링을 최적화하기 위해 브라우저에서 내부적으로 사용할 수 있습니다.</p>

<pre class="brush: js">var ctx = canvas.getContext('2d', { alpha: false });</pre>

<h3 id="추가_팁들">추가 팁들</h3>

<ul>
 <li>배치 캔버스를 함께 호출합니다. 예를 들어 여러 개의 개별 선 대신 다각형 선을 그립니다.</li>
 <li>불필요한 캔버스 상태 변경을 피하십시오.</li>
 <li>화면의 차이만 렌더링하고 완전히 새로운 상태로 렌더링하지 마십시오.</li>
 <li>가능하면 {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} 속성을 사용하지 마십시오.</li>
 <li>가능하면 <a href="/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_text">텍스트 렌더링</a>을 피하십시오.</li>
 <li>캔버스를 지우는 여러 가지 방법을 시도해보십시오 ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. 캔버스 크기 조정).</li>
 <li>애니메이션에서는 {{domxref("window.setInterval()")}} 대신 {{domxref("window.requestAnimationFrame()")}}을 사용하십시오.</li>
 <li>무거운 물리 연산 라이브러리를 주의하십시오.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref">Improving HTML5 Canvas Performance – HTML5 Rocks</a></li>
 <li><a href="https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/">Optimizing your JavaScript game for Firefox OS – Mozilla Hacks</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}</p>
