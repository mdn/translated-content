---
title: 변형 (transformations)
slug: Web/API/Canvas_API/Tutorial/Transformations
tags:
  - CSS
  - HTML
  - 이동
  - 축소
  - 캔버스
  - 크기변형
  - 트랜스폼
  - 확대
translation_of: Web/API/Canvas_API/Tutorial/Transformations
original_slug: Web/HTML/Canvas/Tutorial/변형
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}</div>

<div class="summary">이 튜토리얼에 앞서 <a href="/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes">canvas 그리드</a>와 <strong>좌표 공간</strong>에 대해 알아 보았습니다. 지금까지는 기본적인 그리드를 사용해 요구에 맞추어 전체 canvas의 크기를 바꾸기만 했습니다. Transformation(변형)에는 그리드를 원점에서 다른 위치로 옮기고, 회전하며, 확대·축소까지 하는 더 강력한 방법들이 있습니다.</div>

<h2 id="Saving_and_restoring_state" name="Saving_and_restoring_state">상태(state)의 저장과 복원</h2>

<p>변형(transformation) 메소드을 살펴보기 전에 두 가지 다른 메소드를 보도록 하지요. 일단 여러분이 더 복잡한 그림(drawings)을 그리기 시작하면 반드시 있어야 하는 메소드들입니다.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.save", "save()")}}</dt>
 <dd>canvas의 모든 상태를 저장합니다.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.restore", "restore()")}}</dt>
 <dd>가장 최근에 저장된 canvas 상태를 복원합니다.</dd>
</dl>

<p>Canvas 상태는 스택(stack)에 쌓입니다. <code>save()</code> 메소드가 호출될 때마다 현재 drawing 상태가 스택 위로 푸시됩니다. drawing 상태는 다음과 같이 이루어집니다.</p>

<ul>
 <li>이전부터 적용된 변형(가령,  <code>translate</code>과 <code>rotate</code>와 <code>scale</code> 같은 – 아래의 내용을 보세요).</li>
 <li>다음 속성(attributes)의 현재 값:<br>
  {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}, {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}, {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}, {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}, {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}, {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}, {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}, {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}, {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}, {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}, {{domxref("CanvasRenderingContext2D.font", "font")}}, {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}}, {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.</li>
 <li>현재의 <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing#Clipping_paths">clipping path</a>, 이것은 다음 섹션에서 다루겠습니다.</li>
</ul>

<p>여러분은 원하는 만큼 <code>save()</code> 메소드를 많이 호출할 수 있습니다. <code>restore()</code> 메소드를 호출할 때마다 마지막으로 저장된 상태가 스택에서 튀어나와 저장된 설정들을 모두 복원시킵니다.</p>

<h3 id="A_save_and_restore_canvas_state_example" name="A_save_and_restore_canvas_state_example"><code>save</code>와 <code>restore</code> canvas 상태(state) 예제</h3>

<p>사각형 세트를 연이어 그려서 drawing 상태를 가진 스택이 어떻게 기능하는지를 이 예제에서 설명하고자 합니다.</p>

<pre class="brush: js; highlight:[5,10,15,18]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);   // 기본 설정으로 사각형을 그리기
  ctx.save();                  // 기본 상태를 저장하기

  ctx.fillStyle = '#09F';      // 설정 변경하기
  ctx.fillRect(15, 15, 120, 120); // 새로운 설정으로 사각형 그리기

  ctx.save();                  // 현재 상태 저장하기
  ctx.fillStyle = '#FFF';      // 설정 변경하기
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);   // 새로운 설정으로 사각형 그리기

  ctx.restore();               // 이전 상태 복원하기
  ctx.fillRect(45, 45, 60, 60);   // 복원된 설정으로 사각형 그리기

  ctx.restore();               // 초기 상태를 복원하기
  ctx.fillRect(60, 60, 30, 30);   // 복원된 설정으로 사각형 그리기
}</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>첫 단계로 기본 설정으로 커다란 사각형을 그립니다. 그다음에는 이 상태를 저장하고 fill color를 바꿉니다. 그런 후에 두 번째이자 크기가 더 작은 파란 사각형을 그리고 그 상태를 저장합니다. 다시 한번 일부 drawing 설정을 바꾸고 세 번째 반투명한 흰 사각형을 그립니다. </p>

<p>여기까지는 이전 섹션에서 했던 작업과 매우 유사합니다. 하지만 일단 첫 번째 <code>restore()</code> 문을 호출하면 스택에서 맨 위의 drawing 상태가 지워지고 설정이 복원됩니다. 만일 <code>save()</code>로 저장하지 않았다면, 이전 상태로 되돌리기 위해 fill color와 투명도를 일일이 바꿔주어야 했을 것입니다. 두 속성이라서 간단했을 테지만 그보다 더 많았으면 코드가 급속히 길어졌겠지요. </p>

<p>두 번째 <code>restore()</code>문이 호출될 때, 초기 상태( 처음으로 <code>save</code>를 호출하기 전에 설정한 상태)가 복원되고 마지막 사각형은 한번 더 검게 그려집니다.</p>

<p>{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "180", "180", "https://mdn.mozillademos.org/files/249/Canvas_savestate.png")}}</p>

<h2 id="Translating" name="Translating">이동(translating)</h2>

<p><img alt="" class="internal" src="https://mdn.mozillademos.org/files/234/Canvas_grid_translate.png" style="float: right;">우리가 살펴볼 첫 번째 변형 메소드는 <code>translate()</code>입니다.  이 메소드는 그리드에서 canvas를 원점에서 다른 점으로 옮기는 데 사용됩니다. </p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.translate", "translate(x, y)")}}</dt>
 <dd>그리드에서 canvas와 그 원점을 이동합니다. <code>x</code>는 이동시킬 수평 거리를 가리키고, <code>y</code>는 그리드에서 수직으로 얼마나 멀리 떨어지는지를 표시합니다. </dd>
</dl>

<p>변형하기 전에 canvas 상태를 저장하는 것이 좋습니다. 대다수의 경우, 원래 상태로 되돌리려고 역이동(reverse translation)을 시키는 것보다 <code>restore</code> 메소드를 호출하는 것이 더욱 간편합니다. 게다가 루프(loop) 안에서 이동하는 거라면 canvas 상태를 저장하고 복원하지 마세요. canvas 모서리 밖에서 그려지는 바람에 drawing의 일부를 잃어버리게 될지 모릅니다. </p>

<h3 id="A_translate_example" name="A_translate_example"><code>translate</code> 예제</h3>

<p>이 예제에서 canvas 원점의 이동에 관한 좋은 점을 일부 보여드리겠습니다. <code>translate()</code> 메소드를 쓰지 않으면 모든 사각형은 같은 위치 (0, 0)에 그려집니다. 또한, <code>translate()</code> 메소드는 사각형을 <code>fillRect()</code> function에서 좌표를 일일이 적으며 바꾸지 않아도 어디에나 위치할 수 있게 해줍니다. 이렇게 하면 이해하고 사용하기가 좀 더 쉽습니다. </p>

<p> <code>draw()</code> function에서 두 개의 루프(loops)를 이용해 <code>fillRect()</code> function을 아홉 번 호출합니다. 루프마다 canvas가 이동하고 사각형이 그려지며, canvas는 원래 상태로 되돌아 갑니다. <code>fillRect()</code>로의 호출이 <code>translate()</code>에 의지해 drawing 위치를 바꾸는데 어떻게 매번 같은 좌표를 사용하는지 눈여겨 보세요.</p>

<pre class="brush: js; highlight:[7]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i &lt; 3; i++) {
    for (var j = 0; j &lt; 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("A_translate_example", "160", "160", "https://mdn.mozillademos.org/files/9857/translate.png")}}</p>

<h2 id="Rotating" name="Rotating">회전(rotating)</h2>

<p><img alt="" class="internal" src="https://mdn.mozillademos.org/files/233/Canvas_grid_rotate.png" style="float: right;">두 번째 변형 메소드는 <code>rotate()</code>입니다. canvas를 현재의 원점 둘레로 회전하는 데 사용합니다.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.rotate", "rotate(angle)")}}</dt>
 <dd>canvas를 현재 원점을 기준으로 라디안의 <code>angle</code> 숫자만큼 시계방향으로 회전시킵니다.</dd>
</dl>

<p>회전의 중심점은 언제나 canvas 원점입니다. 중심점을 바꾸려면 <code>translate()</code> 메소드를 써서 canvas를 이동해야 합니다.</p>

<h3 id="A_rotate_example" name="A_rotate_example"><code>rotate</code> 예제</h3>

<p>이 예제는 사각형을 canvas 원점에서 먼저 회전하고 그다음에 <code>translate()</code>의 도움을 받아 사각형 자체의 중심에서 회전하는 데 <code>rotate()</code>를 사용합니다.</p>

<div class="note">
<p><strong>주의</strong>: 각도의 단위는 도(degree)가 아닌 라디안(radian)입니다.   변환하려면 <code>radians = (Math.PI/180)*degrees</code>.를 사용합니다.</p>
</div>

<pre class="brush: js; highlight:[9, 23]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 좌측 사각형, canvas 원점에서 회전하기
  ctx.save();
  // 파란 사각형
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // 회색 사각형
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // 우측 사각형, 사각형 중심에서 회전하기
  // 파란 사각형 그리기
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // 사각형 중심으로 이동하기
                          // x = x + 0.5 * width
                          // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // 회전
  ctx.translate(-200, -80); // 예전 위치로 이동하기

  // 회색 사각형 그리기
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(150, 30, 100, 100);
}
</pre>

<p>사각형 자체의 중심 둘레로 회전하려면 사각형의 중심으로 canvas를 옮기세요. 그런 후에 canvas를 회전하고, 그 canvas를 0, 0로 되돌려 이동합니다. 그다음에 사각형을 그리세요.</p>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="300" height="200"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("A_rotate_example", "310", "210", "https://mdn.mozillademos.org/files/9859/rotate.png")}}</p>

<h2 id="Scaling" name="Scaling">확대·축소(scaling)</h2>

<p>다음 변형 메소드는 확대·축소(scaling)입니다. canvas 그리드에서 단위(units)를 키우거나 줄이는 데 사용합니다. 이는 벡터 모양과 비트맵(bitmaps) 요소를 축소하거나 확대해서 그리는 데 사용될 수 있습니다.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.scale", "scale(x, y)")}}</dt>
 <dd>canvas 단위를 수평으로 x만큼, 수직으로 y만큼 크기를 확대·축소합니다. 둘의 매개 변수는 실수입니다. 1.0보다 작은 값이면 단위의 크기를 축소하고, 1.0보다 큰 값이면 단위의 크기를 확대합니다. 값이 1.0이면 단위의 크기는 그대로입니다.</dd>
</dl>

<p>음수를 이용해서 축을 대칭 시킬 수 있습니다(가령 <code>translate(0,canvas.height); scale(1,-1);</code>로 쓰는 것처럼 말이죠. 좌측 하단 모서리에 있는 원점을 이용한, 잘 알려진 카르테시안 좌표계(Cartesian coordinate)인 것이지요.</p>

<p>기본적으로 canvas에서 하나의 단위는 정확히 1픽셀입니다. 예를 들어 0.5라는 확대·축소 비율을 적용한다면, 결과로 나오는 단위는 0.5 픽셀이 될 것이고, 고로 모양도 절반 크기로 그려질 것입니다. 이런 방식으로 크기 비율을 2.0으로 잡으면 단위 크기가 확대되어 하나의 단위는 이제 2픽셀이 되겠지요. 이 결과로 모양은 그만큼 2배로 커집니다.</p>

<h3 id="A_scale_example" name="A_scale_example"><code>scale</code> 예제</h3>

<p>마지막 예제로 다양한 확대·축소 비율을 이용해 모양을 그려보겠습니다.</p>

<pre class="brush: js; highlight:[6,11]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 간단하지만 확대·축소 비율을 적용한 사각형 그리기
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // 수평으로 대칭하기
  ctx.scale(-1, 1);
  ctx.font = '48px serif';
  ctx.fillText('MDN', -135, 120);
}

</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("A_scale_example", "160", "160", "https://mdn.mozillademos.org/files/9861/scale.png")}}</p>

<h2 id="Transforms" name="Transforms">변형(transforms)</h2>

<p>마지막으로, 다음의 변형(transform) 메소드들은 변환 행렬(transformation matrix)로 변경할 사항을 즉시 적용할 수 있습니다.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.transform", "transform(a, b, c, d, e, f)")}}</dt>
 <dd>인수(arguments)에 표시된 행렬을 이용해 현재 변환 행렬을 곱합니다. 변환 행렬은 다음과 같이 작성됩니다. <br>
 <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &amp; c &amp; e \\ b &amp; d &amp; f \\ 0 &amp; 0 &amp; 1 \end{array} \right]</annotation></semantics></math></dd>
</dl>

<dl>
 <dd>만일 인수 중에 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity" title="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>가 있다면, 변환 행렬은 예외 처리하는 메소드 대신에 반드시 infinite로 표시되어야 합니다.</dd>
</dl>

<p>이 function의 매개 변수들은 다음과 같습니다.</p>

<dl>
 <dt><code>a (m11)</code></dt>
 <dd>수평으로 확대·축소하기</dd>
 <dt><em><code>b (m12)</code></em></dt>
 <dd>수평으로 비스듬히 기울이기</dd>
 <dt><code>c (m21)</code></dt>
 <dd>수직으로 비스듬히 기울이기</dd>
 <dt><code>d (m22)</code></dt>
 <dd>수직으로 확대·축소하기</dd>
 <dt><code>e (dx)</code></dt>
 <dd>수평으로 이동하기</dd>
 <dt><code>f (dy)</code></dt>
 <dd>수직으로 이동하기</dd>
 <dt>{{domxref("CanvasRenderingContext2D.setTransform", "setTransform(a, b, c, d, e, f)")}}</dt>
 <dd>현재 변형 상태를 단위 행렬로 재설정하고 나서 동일한 인수로 <code>transform()</code> 메소드를 적용합니다. 이는 기본적으로 현재의 변형을 무효로 한 후에 명시된 변형으로 바뀌는데, 한번에 모든 게 진행됩니다.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.resetTransform", "resetTransform()")}}</dt>
 <dd>현재 변형 상태를 단위 행렬로 재설정합니다. 이는 <code>ctx.setTransform(1, 0, 0, 1, 0, 0);</code> 호출과 같습니다.</dd>
</dl>

<h3 id="transform과_setTransform_예제"><code>transform</code>과 <code>setTransform</code> 예제</h3>

<pre class="brush: js; highlight:[12,15]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i &lt;= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
  ctx.fillRect(0, 50, 100, 100);
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="200" height="250"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("Example_for_transform_and_setTransform", "230", "280", "https://mdn.mozillademos.org/files/255/Canvas_transform.png")}}</p>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}</p>
