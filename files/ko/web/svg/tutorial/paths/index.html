---
title: 패스
slug: Web/SVG/Tutorial/Paths
tags:
  - SVG
  - 학습서
translation_of: Web/SVG/Tutorial/Paths
---
<p>{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}</p>

<p><a href="/en-US/Web/SVG/Element/path"><code>&lt;path&gt;</code></a> 엘리먼트는 SVG <a href="/ko/docs/Web/SVG/Tutorial/Basic_Shapes">기본 도형</a> 라이브러리에서 가장 강력한 엘리먼트이다. 선과 곡선, 호 등 다양한 형태를 그릴 수 있다.</p>

<p>패스는 여러 개의 직선과 곡선을 합쳐서 복잡한 도형을 그릴 수 있게 해준다. 직선으로만 이루어진 복잡한 도형은 <a href="/en-US/docs/Web/SVG/Tutorial/Basic_Shapes#Polyline">polylines</a>으로도 그릴 수 있지만, 곡선을 묘사할 때 polylines은 패스로 그린 도형에 비해 더 많은 직선이 필요에 확대가 잘 되지 않을 수 있다. 그렇기에 SVG를 그릴 때 패스에 대해 이해하는 것은 매우 중요하다고 할 수 있다. 복잡한 패스를 XML 편집기 또는 일반적인 텍스트 에디터로 그리는 것은 권장하지 않지만, SVG가 표시될 때 문제점을 찾고 고치는 데는 충분히 도움이 될 것이다.</p>

<p>패스의 모양은 {{ SVGAttr("d") }} 속성 하나로 정의된다(<a href="/en-US/docs/">basic shapes</a> 참조). <code>"d"</code> 속성은 여러 개의 명령어와 그 파라미터들로 이루어진다.</p>

<p>각각 명령은 특정 알파벳으로 시작한다. 예를 들면 현재 그려지는 위치를 XY 좌표계의 (10, 10)으로 이동할 때 "Move To" 명령을 사용하게 되는데, 이 명령은 알파벳 M으로 호출한다. SVG 처리기가 이 문자를 읽게 되면 다른 위치로 이동하라는 명령으로 이해하게 된다. 즉, (10, 10)으로 이동하려면 명령어 "M 10 10"을 쓰면 된다. 이후에 처리기는 다음 명령어를 읽기 시작한다.</p>

<p>모든 명령어는 2가지 변형이 존재하는데, 알파벳이 <strong>대문자</strong>일 경우(예를 들면 대문자 M), 뒤따르는 좌표는 페이지의 절대 좌표를 참조하며, <strong>소문자</strong> 알파벳(m)일 경우 마지막 위치에 대한 상대적 좌표로 참조된다.</p>

<p>"d" 속성의 좌표는<strong> 절대 단위가 붙지 않으며,</strong> 패스의 위치나 형태가 어떻게 변형될 수 있는지는 나중에 배우도록 한다.</p>

<h2 id="선(Line)_명령어">선(Line) 명령어</h2>

<p><code>&lt;path&gt;</code> 노드에는 다섯 개의 선 명령어가 있다. 이름에서 알 수 있듯이 각각의 명령어는 두 점 사이에 선을 그리는 역할을 한다. 첫 번째 명령어는 'Move To(이동하기)' 혹은 'M' 이다. 이 명령어는 두 개의 파라미터로 x와 y 좌표를 받는다. 그리기 커서가 이미 페이지의 다른 곳에 있었더라도 두 점 사이에 점이 그려지지는 않는다. 'Move To' 명령어는 다음과 같이 패스의 맨 처음에 와서 그리기를 시작할 위치를 지정한다:</p>

<pre> M x y
</pre>

<p>혹은</p>

<pre> m dx dy</pre>

<p>아래의 예제에서는 좌표 (10,10)에만 점을 찍었다. 일반적으로 패스를 그릴 때는 이 점이 나타나지 않는다는 점에 주의해야 한다.</p>

<p><img alt="" class="internal" src="/@api/deki/files/45/=Blank_Path_Area.png" style="float: right;"></p>

<pre class="brush: xml">&lt;svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;path d="M10 10"/&gt;

  &lt;!-- 점 --&gt;
  &lt;circle cx="10" cy="10" r="2" fill="red"/&gt;

&lt;/svg&gt;</pre>

<p>선을 그리는 명령어는 세 가지가 있다. 가장 일반적인 것은 'L'이라 부르는 "Line To(선 그리기)" 명령어이다. L 명령어는 x, y라는 두 개의 파라미터를 받아서 현재 위치에서 새 위치로 선을 긋는다.</p>

<pre> L x y (혹은 l dx dy)
</pre>

<p>가로선과 세로선을 그리는 축약 명령어도 있다. 'H'는 가로선을 그리고, 'V'는 세로선을 그릴 수 있다. 두 명령어는 한 좌표축으로만 이동하므로 하나의 파라미터만을 받는다.</p>

<pre> H x (혹은 h dx)
 V y (혹은 v dy)
</pre>

<p>도형 그리기부터 시작해 보자. 사각형을 그려볼 텐데(<code>&lt;rect&gt;</code>를 이용해 쉽게 그릴 수도 있다), 시작점부터 가로, 세로선도 함께 사용되었다.</p>

<p><img alt="" class="internal" src="/@api/deki/files/292/=Path_Line_Commands.png" style="float: right;"></p>

<pre class="brush: xml">&lt;svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;path d="M10 10 H 90 V 90 H 10 L 10 10"/&gt;

  &lt;!-- 점 --&gt;
  &lt;circle cx="10" cy="10" r="2" fill="red"/&gt;
  &lt;circle cx="90" cy="90" r="2" fill="red"/&gt;
  &lt;circle cx="90" cy="10" r="2" fill="red"/&gt;
  &lt;circle cx="10" cy="90" r="2" fill="red"/&gt;

&lt;/svg&gt;</pre>

<p>'Z'라는 "Close Path(패스 닫기)" 명령어를 통해 쉽게 패스를 마무리할 수 있다. 이 명령어는 현 위치에서 시작점으로 직선을 그린다. 항상은 아니지만 패스의 끝에 자주 쓰인다. 대문자와 소문자 사이의 차이는 없다.</p>

<pre> Z (혹은 z)
</pre>

<p>위 코드를 짧게 줄여보면:</p>

<pre class="brush: xml">&lt;path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/&gt;
</pre>

<p>위의 형태를 상대좌표로도 표현해볼 수 있다. 상대좌표 명령어는 앞서 기술된 바와 같이 소문자로 되어 있는 명령어인데, 패스를 움직일 때 정확한 위치를 지정해주는 것이 아니라 현재 위치로부터 얼마나 움직여야 하는지를 기술해준다. 예를 들면 위 80x80 상자를 아래와 같이 표현할 수 있다.</p>

<pre class="brush: xml">&lt;path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/&gt;
</pre>

<p>여기서 패스는 (10,10)에서 시작하여 수평으로 80포인트<strong>만큼 오른쪽</strong>으로 움직이고 수직으로 80포인트<strong>만큼 아래로</strong> 이동하고 다시 시작점으로 이동하게 된다.</p>

<p>위 예제의 모양을 만드는 데는 &lt;polygon&gt; 태그나 &lt;polyline&gt; 태그가 더 간편해보일 수 있지만, 패스는 SVG를 그릴 때 자주 사용되므로 개발자 입장에서 더 편할 수도 있다. 성능 면에서는 둘 모두 비슷비슷하니, 편한 것으로 사용하자.</p>

<h2 id="곡선_(Curve)_명령어">곡선 (Curve) 명령어</h2>

<p>부드러운 곡선을 그릴 수 있는 세 가지 명령어가 있다. 이 중 두 가지는 '베지어 곡선'이며, 나머지 하나는 원의 조각인 '호'이다. 베지어 곡선은 아마 일러스트레이터나 포토샵, 잉크스케이프 등의 벡터 그래픽 기반의 툴을 통해서 경험해봤을 것이다. 베지어 곡선의 수학적 배경은 <a class="external" href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve">위키피디아</a>를 참조하길 바란다. 베지어 곡선의 종류는 무한하지만, 패스 엘리먼트에서는 가장 간단한 두 종류만을 지원한다. 하나는 'C'라고 부르는 3차(Cubic) 베지어 곡선이고, 다른 하나는 'Q'로 사용되는 2차(Quadratic) 베지어 곡선이다.</p>

<h3 id="베지어_곡선">베지어 곡선</h3>

<p>3차 베지어 곡선인 'C'는 조금 복잡한 곡선이다. 3차 베지어 곡선은 선을 잇는 두 점에 하나씩 제어점을 가지고 있다. 그러므로 3차 베지에 곡선을 그리려면 총 세 개의 좌표가 필요하다.</p>

<pre> C x1 y1, x2 y2, x y (혹은 c dx1 dy1, dx2 dy2, dx dy)
</pre>

<p>마지막으로 지정된 좌표 (x, y)는 곡선의 끝점이다. 나머지 두 개는 제어점이며, 첫 번째 제어점은 (x1, y1), 두 번째 제어점은 (x2, y2)이다. 제어점은 기본적으로 시작점과 끝점에서 곡선의 방향을 기술한다. 베지어 함수는 각 제어점의 방향을 이용해 부드러운 곡선을 만드는 기능을 한다.</p>

<p><img alt="Cubic Bézier Curves with grid" class="internal" src="https://mdn.mozillademos.org/files/10401/Cubic_Bezier_Curves_with_grid.png" style="float: right; height: 160px; width: 190px;"></p>

<pre class="brush: xml">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/&gt;
  &lt;path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/&gt;
  &lt;path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/&gt;
  &lt;path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/&gt;
  &lt;path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/&gt;
  &lt;path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/&gt;
  &lt;path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/&gt;
  &lt;path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/&gt;
  &lt;path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/&gt;

&lt;/svg&gt;
</pre>

<p>위 예제에서는 아홉 개의 베지어 곡선을 그린다. 왼쪽으로 갈수록 곡선이 수평에 가까워지고, 오른쪽으로 갈수록 제어점이 원점에서 멀어진다. 여기서 주목해야 할 점은 곡선이 첫 번째 제어점 방향으로 시작한 다음, 두 번째 제어점 방향으로 구부러지고 있다는 것이다.</p>

<p>여러 베지어 곡선을 연결하여 확장된 곡선 형태를 만들 수도 있다. 한 선의 제어점을 다른 선의 제어점과 반대 방향으로 그어서 완만한 경사를 만들어야 할 때가 많은데, 이 경우에는 간단한 형태의 3차 베지어 곡선 명령어인 'S' (혹은 's')를 사용해서 구현할 수 있다.</p>

<pre> S x2 y2, x y (혹은 s dx2 dy2, dx dy)
</pre>

<p><code>S</code>는 위와 같은 형태의 곡선을 그리지만, 다른 <code>S</code>나 <code>C</code> 명령어 다음에 올 경우 첫 번째 제어점은 이전에 사용했던 제어점을 뒤집은 것으로 간주된다. <code>S</code> 명령어가 다른 <code>S</code>나 <code>C</code> 명령어 다음에 오지 않을 경우에는 현재 커서 위치가 첫 번째 제어점으로 사용되며, 이 경우에 그려지는 결과는 Q 명령어로 같은 파라미터를 사용해서 그린 결과와 같게 된다. 아래에 이 명령어의 예제가 있으며, 왼쪽의 미리보기에서 패스에 명시적으로 표시된 제어점은 빨간색, 생략된 제어점은 파란색으로 표시한다.</p>

<p><img alt="ShortCut_Cubic_Bezier_with_grid.png" class="internal" src="https://mdn.mozillademos.org/files/10405/ShortCut_Cubic_Bezier_with_grid.png" style="float: right; height: 160px; width: 190px;"></p>

<pre class="brush: xml">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/&gt;
&lt;/svg&gt;</pre>

<p>3차 베지어 곡선보다 간단한 다른 형태의 곡선은 'Q'라고 부르는 2차 베지어 곡선이며, 하나의 제어점이 시작점과 끝점의 방향을 모두 결정한다. 이 명령어는 매개변수로 제어점과 곡선의 끝점 2개를 받는다.</p>

<pre> Q x1 y1, x y (혹은 q dx1 dy1, dx dy)
</pre>

<p><img alt="Quadratic Bézier with grid" class="internal" src="https://mdn.mozillademos.org/files/10403/Quadratic_Bezier_with_grid.png" style="float: right; height: 160px; width: 190px;"></p>

<pre class="brush: xml">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/&gt;
&lt;/svg&gt;</pre>

<p>3차 베지어 곡선과 같이 2차 베지어 곡선을 연결하는 단축 명령어가 있으며, T라고 부른다.</p>

<pre> T x y (혹은 t dx dy)
</pre>

<p>이 축약 명령어는 이전에 사용한 제어점으로부터 새로운 제어점을 만들어낸다. 즉, 처음에 제어점 하나만을 기술하면 끝점만을 계속 이어서 꽤 복잡한 도형을 만들 수 있다.</p>

<div class="note">
<p>Q나 T 명령어 다음에 올 때만 적용된다. 그렇지 않을 경우 제어점은 시작점의 좌표로 간주되며, 직선만 그릴 수 있게 된다.</p>
</div>

<p><img alt="Shortcut_Quadratic_Bezier_with_grid.png" class="internal" src="https://mdn.mozillademos.org/files/10407/Shortcut_Quadratic_Bezier_with_grid.png" style="float: right; height: 158px; width: 188px;"></p>

<pre class="brush: xml">&lt;svg width="190" height="160" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/&gt;
&lt;/svg&gt;</pre>

<p>두 종류의 곡선이 비슷한 결과를 만들어내긴 하지만, 3차 곡선의 경우 모양을 더 자유롭게 수정할 수 있다. 둘 중 어느 것이 좋은지는 그때그때 다르며, 선 모양이 얼마나 대칭적인지에 따라 달라진다.</p>

<h3 id="Arcs" name="Arcs">원호</h3>

<p>SVG로 그릴 수 있는 다른 형태의 곡선으로는 A라고 부르는 호(arc)가 있다. 호는 원이나 타원의 일부분을 말한다. x, y축 반지름이 주어졌을 때, (두 점이 충분히 가깝다고 가정할 때) 두 점을 연결할 수 있는 타원은 2개가 있으며, 각각의 타원에서 두 점을 잇는 경로 또한 2개씩 있기 때문에 어떤 상황에서든 네 종류의 호를 그릴 수 있다. 이러한 성질 때문에 호 명령어는 꽤 많은 파라미터를 받는다:</p>

<pre> A rx ry x축-회전각 큰-호-플래그 쓸기-방향-플래그 x y
 a rx ry x축-회전각 큰-호-플래그 쓸기-방향-플래그 dx dy
</pre>

<p>A 명령어는 일단 x축, y축 반지름을 매개변수로 받는다. 혹시 필요하다면 <a href="/ko/docs/Web/SVG/Element/ellipse">ellipse</a> 문서에서 두 매개변수가 어떻게 작동하는지 확인해볼 수 있다. 세 번째 매개변수는 호의 회전각을 기술한다. 이는 아래 예제에서 잘 확인할 수 있다.</p>

<p><img alt="SVGArcs_XAxisRotation_with_grid" class="internal" src="https://mdn.mozillademos.org/files/10409/SVGArcs_XAxisRotation_with_grid.png" style="float: right; height: 201px; width: 200px;"></p>

<pre class="brush: xml">&lt;svg width="320" height="320" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M10 315
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/&gt;
&lt;/svg&gt;</pre>

<p>이 예제는 페이지를 대각선으로 가로질러 이동하는 패스인데, 그 중간에 두 개의 타원형 호가 절단되어 있다(x축 반지름 = 30, y축 반지름 = 50). 첫 번째는 x축 회전각이 0이므로 호의 기준이 되는 타원(회색으로 표시)은 위아래로 똑바로 서 있다. 두 번째 호는 x축 회전각이 -45도이므로 회전을 해서 예제에서 보이는 것처럼 타원의 단축과 패스 방향이 나란해졌다.</p>

<p>위에서 언급한 네 가지 경로는 이어지는 두 개의 매개변수 플래그에 의해 결정된다. 앞서 언급했듯이, 두 점을 잇는 타원도 2개, 각각 취할 수 있는 방향도 2개이므로 모두 네 가지 경로가 가능하다. 첫 번째 인수는 큰 호 플래그(large-arc-flag)이며, 중심각이 180도 이상이 될지를 결정한다. 결국, 이 플래그는 호가 주어진 원의 어느 방향을 따라 돌지를 결정한다. 두 번째 인수는 쓸기 방향 플래그(sweep-flag)이며, 호가 이동해야 할 각이 음인지 양인지를 결정한다. 이 각은 본질적으로 두 개의 원 중 어느 쪽을 따를지를 결정한다. 아래 예는 네 가지 가능한 조합을 각 사례별로 두 개의 원과 함께 표시하고 있다.</p>

<p><img alt="" class="internal" src="/@api/deki/files/345/=SVGArcs_Flags.png" style="float: right;"></p>

<pre class="brush: xml">&lt;svg width="325" height="325" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;path d="M80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/&gt;
  &lt;path d="M230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/&gt;
  &lt;path d="M80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/&gt;
  &lt;path d="M230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/&gt;
&lt;/svg&gt;</pre>

<p><span id="result_box" lang="ko"><span>마지막 두 개의 매개변수는 호가 끝나는 x와 y 좌표를 지정한다. </span><span>호는 도면에서 원 또는 타원 조각을 쉽게 만들 수 있는 방법이다. </span><span>예를 들어 원그래프는 각 조각마다 다른 호가 필요하다.</span></span></p>

<p>원을 한 바퀴 도는 패스의 경우 시작점과 끝점이 같으므로 선택할 수 있는 원이 무한히 있으며, 그러므로 실제 패스가 정의되지 않는다. 이때는 시작점과 끝점을 살짝 비뚤어지게 배치하고 이 둘을 다른 패스 선으로 마저 이음으로써 비슷하게 만들 수 있지만, 이때는 실제 원이나 타원 노드를 쓰는 것이 쉬울 때가 많다.</p>

<p><a href="/ko/docs/Web/HTML/Canvas">캔버스</a>에서 SVG로 넘어오는 사람에게는 호가 가장 배우기 어려울 수도 있지만, 그런 만큼 강력하기도 하다. 다음 반응형 예제를 보면 SVG 호의 개념을 이해하는 데 도움이 될 것이다. <a href="http://codepen.io/lingtalfi/pen/yaLWJG">http://codepen.io/lingtalfi/pen/yaLWJG</a> (크롬과 파이어폭스로만 테스트했으므로 일부 브라우저에서 동작하지 않을 수 있음)</p>

<p>{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}</p>
