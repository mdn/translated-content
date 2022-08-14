---
title: flexbox의 기본 개념
slug: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Flexbox의_기본_개념
---
<div>{{CSSRef}}</div>

<p class="summary">일명 flexbox라 불리는 Flexible Box module은 flexbox 인터페이스 내의 아이템 간 공간 배분과 강력한 정렬 기능을 제공하기 위한 1차원 레이아웃 모델 로 설계되었습니다. 이 글에서는 flexbox의 주요 기능에 대한 개요를 다룹니다. 더 자세한 내용은 가이드의 다른 글에서 탐구하게 될 것입니다.</p>

<p>flexbox를 1차원이라 칭하는 것은, 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다는 뜻입니다. 이는 행과 열을 함께 조절하는 <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS 그리드 레이아웃</a>의 2차원 모델과는 대조됩니다.</p>

<h2 id="flexbox의_두_개의_축">flexbox의 두 개의 축</h2>

<p>flexbox를 다루려면 주축과 교차축이라는 두 개의 축에 대한 정의를 알아야 합니다. 주축은 {{cssxref("flex-direction")}} 속성을 사용하여 지정하며 교차축은 이에 수직인 축으로 결정됩니다. flexbox의 동작은 결국 이 두 개의 축에 대한 문제로 환원되기 때문에 이들이 어떻게 동작하는지 처음부터 이해하는 것이 중요합니다.</p>

<h3 id="주축">주축</h3>

<p>주축은 <code>flex-direction</code>에 의해 정의되며 4개의 값을 가질 수 있습니다:</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p><code>row</code> 혹은 <code>row-reverse</code>를 선택하면 주축은 <strong>인라인 방향</strong>으로 행을 따릅니다.</p>

<p><img alt="If flex-direction is set to row the main axis runs along the row in the inline direction." src="https://mdn.mozillademos.org/files/15614/Basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p><code>column</code> 혹은 <code>column-reverse</code> 을 선택하면 주축은 페이지 상단에서 하단으로 <strong>블록 방향</strong>을 따릅니다.</p>

<p><img alt="If flex-direction is set to column the main axis runs in the block direction." src="https://mdn.mozillademos.org/files/15615/Basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<h3 id="교차축">교차축</h3>

<p>교차축은 주축에 수직하므로, 만약 <code>flex-direction</code>(주축)이 <code>row</code> 나 <code>row-reverse</code> 라면 교차축은 열 방향을 따릅니다.</p>

<p><img alt="If flex-direction is set to row then the cross axis runs in the block direction." src="https://mdn.mozillademos.org/files/15616/Basics3.png" style="display: block; height: 125px; margin: 0px auto; width: 666px;"></p>

<p>주축이 <code>column</code> 혹은 <code>column-reverse</code> 라면 교차축은 행 방향을 따릅니다.</p>

<p><img alt="If flex-direction is set to column then the cross axis runs in the inline direction." src="https://mdn.mozillademos.org/files/15617/Basics4.png" style="display: block; height: 244px; margin: 0px auto; width: 523px;"></p>

<p>flex 요소를 정렬하고 끝을 맞추(justify)려면 어느 축이 어느 방향인지 이해하는 것이 중요합니다; flexbox는 주축, 교차축을 따라 항목을 정렬하고 끝을 맞추는 각종 속성들을 적용하는 방식으로 동작합니다.</p>

<h2 id="시작선과_끝선">시작선과 끝선</h2>

<p>flexbox가 쓰기 방법(writing mode)을 가정하지 않는다는 것은 상당히 중요합니다. 과거의 CSS는 왼쪽에서 오른쪽으로 향하는 가로 방향의 쓰기 방법에 치우쳐 있었습니다. 하지만 현대의 레이아웃은 다양한 쓰기 방법을 포괄해야 하므로, 더이상 텍스트가 문서의 왼쪽 상단에서 시작해서 오른쪽으로 향한다고 가정하지 않습니다. 새 라인이 항상 아래에 쌓인다고 가정하지도 않습니다.</p>

<p>다른 글에서 flexbox와 쓰기 방법 명세(writing mode spec.)가 어떤 관련이 있는지 알아볼 수 있습니다. 그 전에, 이 글에서 flex 요소의 정렬 방향에 "왼쪽, 오른쪽, 위, 아래"를  사용하지 않는 이유를 알 수 있었으면 합니다.</p>

<p><code>flex-direction</code>이 <code>row</code>고 영어 문장을 문서에 쓰고 있다면, 주축의 시작선은 왼쪽 끝, 끝선은 오른쪽 끝이 될 것입니다.</p>

<p><img alt="Working in English the start edge is on the left." src="https://mdn.mozillademos.org/files/15618/Basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>아랍어 문장을 쓰고 있다면, 주축의 시작선은 오른쪽 끝, 끝 선은 왼쪽 끝이 될 것입니다.</p>

<p><img alt="The start edge in a RTL language is on the right." src="https://mdn.mozillademos.org/files/15619/Basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>영어와 아랍어는 모두 가로 쓰기를 채택하고 있으므로 두 예시에서 교차축의 시작선은 <strong>flex 컨테이너</strong>의 위 끝이며 끝선은 아래 끝입니다.</p>

<p>조금만 지나면 왼쪽-오른쪽으로 생각하는 것보다 시작선-끝선으로 생각하는 것이 금새 자연스러워질 것입니다. 동일한 패턴을 따르는 CSS 그리드 레이아웃 같은 방법을 다룰 때도 쉽게 적응할 수 있을 것입니다.</p>

<h2 id="flex_컨테이너">flex 컨테이너</h2>

<p>문서의 영역 중에서 flexbox가 놓여있는 영역을 <strong>flex 컨테이너</strong>라고 부릅니다. flex 컨테이너를 생성하려면 영역 내의 컨테이너 요소의 {{cssxref("display")}} 값을 <code>flex</code> 혹은 <code>inline-flex</code>로 지정합니다. 이 값이 지정된 컨테이너의 일차 자식(direct children) 요소가 <strong>flex 항목</strong>이 됩니다. display 속성만 지정하여 flex 컨테이너를 생성하면 다른 flex 관련 속성들은 아래처럼 기본 값이 지정됩니다.</p>

<ul>
 <li>항목은 행으로 나열됩니다. (<code>flex-direction</code> 속성의 기본값은 <code>row</code>입니다).</li>
 <li>항목은 주축의 시작 선에서 시작합니다.</li>
 <li>항목은 주 차원 위에서 늘어나지는 않지만 줄어들 수 있습니다.</li>
 <li>항목은 교차축의 크기를 채우기 위해 늘어납니다.</li>
 <li>{{cssxref("flex-basis")}} 속성은 <code>auto</code>로 지정됩니다.</li>
 <li>{{cssxref("flex-wrap")}} 속성은 <code>nowrap</code>으로 지정됩니다.</li>
</ul>

<p>이렇게되면 <strong>flex 항목</strong>들은 각 항목 별 내부 요소의 크기로 주축을 따라 정렬됩니다. 컨테이너의 크기보다 더 많은 항목이 있을 경우 행을 바꾸지 않고 주축 방향으로 흘러 넘치게 됩니다. 어떤 항목이 다른 항목보다 높이 값이 크다면 나머지 모든 항목들은 그에 맞게 교차축을 따라 늘어나게 됩니다.</p>

<p>다음의 라이브 예시를 통해 어떻게 보여지는지 확인할 수 있습니다. flexbox의 초기 동작을 시험해보려면 항목을 추가하거나 수정해보시기 바랍니다.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}} </p>

<h3 id="flex-direction_지정">flex-direction 지정</h3>

<p><strong>flex 컨테이너</strong>에 {{cssxref("flex-direction")}} 속성을 지정하면 flex 항목이 나열되는 방향을 변경할 수 있습니다. <code>flex-direction: row-reverse</code> 라고 지정하면 행으로 나열되는 것은 그대로지만 시작 선과 끝 선이 서로 바뀌게 됩니다.</p>

<p><code>flex-direction</code>을 <code>column</code>으로 지정하면 주축이 변경되고 항목들은 열로 나열됩니다. <code>column-reverse</code>로 지정하면 그에 더해 시작 선과 끝 선이 서로 바뀌게 됩니다.</p>

<p>다음의 라이브 예시는 <code>flex-direction</code>이 <code>row-reverse</code>로 지정되어 있습니다. <code>row</code>, <code>column</code>, <code>column-reverse</code>와 같은 값을 지정해서 어떻게 되는지 확인해보시기 바랍니다.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}</p>

<h2 id="flex-wrap을_이용한_복수_행_flex_컨테이너_지정">flex-wrap을 이용한 복수 행 flex 컨테이너 지정</h2>

<p>flexbox는 1차원 모델이지만 <strong>flex 항목</strong>이 여러 행에 나열되도록 할 수 있습니다. 그 경우 각 행이 새로운 <strong>flex 컨테이너</strong>라고 생각해야 합니다. 공간 배분은 해당 행에서만 이루어지며 다른 행은 영향을 받지 않습니다.</p>

<p>항목이 여러 행에 나열되도록 하려면 {{cssxref("flex-wrap")}} 속성의 값을 <code>wrap</code>으로 지정합니다. 그러면 항목이 하나의 행에 들어가지 않을 정도로 클 경우 다른 행에 배치됩니다. 아래의 라이브 예시에 있는 <strong>flex 항목</strong>은 폭이 지정되어 있으며 항목들의 폭의 합은 <strong>flex 컨테이너</strong>에 들어가기에는 너무 넓습니다. <code>flex-wrap</code>속성이 <code>wrap</code>으로 지정되어 있으므로 항목은 여러 행에 나열됩니다. 초깃값과 동일한 <code>nowrap</code>을 지정하고 flex항목에 대한 확대/축소 방식을 별도로 지정하지 않으면 <strong>flex 항목</strong>들은 컨테이너의 폭에 맞게 줄어듭니다.  <code>nowrap</code>을 지정하면 항목이 전혀 줄어들 수 없거나 충분히 줄어들 수 없을 때 흘러넘치게 됩니다.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}</p>

<p><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items">Mastering Wrapping of Flex Items</a> 가이드에서 더 자세한 내용을 확인할 수 있습니다.</p>

<h2 id="축약형_속성_flex-flow">축약형 속성 flex-flow</h2>

<p><code>flex-direction</code> 속성과 <code>flex-wrap</code> 속성을 {{cssxref("flex-flow")}}라는 축약 속성으로 합칠 수 있습니다. 첫 번째 값은 <code>flex-direction</code>이고 두 번째 값은 <code>flex-wrap</code>입니다.</p>

<p>다음의 라이브 예시에서 첫 번째 값을 <code>flex-direction</code>에 지정 가능한 값들(<code>row</code>, <code>row-reverse</code>, <code>column</code> or <code>column-reverse</code>)로 바꿔보시기 바랍니다. 두 번째 값도 <code>wrap</code>이나 <code>nowrap</code>으로 바꿔보시기 바랍니다.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}</p>

<h2 id="flex_항목에_지정_가능한_속성들">flex 항목에 지정 가능한 속성들</h2>

<p><strong>flex 항목</strong>에 적용할 수 있는 속성은 다음과 같습니다.</p>

<ul>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
</ul>

<p>이 글에서는 위의 속성들에 대해 간략하게 살펴보겠습니다. 자세한 내용은 <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling Ratios of Flex Items on the Main Axis</a>에서 다룹니다.</p>

<p>500 픽셀의 크기를 갖는 <strong>flex 컨테이너</strong> 내에 100 픽셀 크기의 자식 세 개가 존재할 때, <strong>사용가능한 공간 </strong>200 픽셀이 남게 됩니다. 기본적으로 flexbox는 이 공간을 마지막 자식 요소 다음에 빈공간으로 남겨둡니다.</p>

<p><img alt="This flex container has available space after laying out the items." src="https://mdn.mozillademos.org/files/15620/Basics7.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p>위의 세 가지 속성을 변경한다는 것은 <strong>flex 항목</strong>에게 <strong>사용가능한 공간</strong>을 분배하는 방식을 변경하는 것입니다. <strong>사용가능한 공간 </strong>개념은 <strong>flex 항목</strong>을 정렬할 때 특히 중요합니다.</p>

<h3 id="flex-basis_속성"><code>flex-basis</code> 속성</h3>

<p><code>flex-basis</code> 속성은 항목의 크기를 결정합니다. 이 속성의 기본값은 <code>auto</code>이며, 이 경우 브라우저는 항목이 크기를 갖는지 확인합니다. 위의 사진 예시의 경우 항목의 크기가 100 픽셀이므로 flex-basis의 값으로 100 픽셀이 사용됩니다.</p>

<p><strong>flex 항목</strong>에 크기가 지정되어 있지 않으면, <strong>flex 항목</strong>의 내용물 크기가 flex-basis 값으로 사용됩니다. 따라서 <strong>flex 컨테이너</strong>에서 <code>display: flex</code> 속성만을 지정하면 flex항목들이 각 내용물 크기만큼 공간을 차지하게 됩니다.</p>

<h3 id="flex-grow_속성"><code>flex-grow</code> 속성</h3>

<p><code>flex-grow</code>값을 양수로 지정하면<strong> flex 항목</strong>별로 주축 방향 크기가 <code>flex-basis</code> 값 이상으로 늘어날 수 있게 됩니다. 위의 사진 예시에서 모든 항목의 flex-grow 값을 1로 지정하면 사용가능한 공간은 각 항목에게 동일하게 분배되며, 각 항목은 주축을 따라 분배받은 값만큼 사이즈를 늘려 공간을 차지합니다.</p>

<p>첫 항목의 <code>flex-grow</code> 값을 2로 지정하고 나머지 두 개의 항목을 1로 지정한다면 각 항목에 지정된 <code>flex-grow</code> 값의 비율에 따라 남은 공간이 분배됩니다. 각 항목의 <code>flex-grow</code> 비율이 2:1:1 이므로 첫 항목에게 100 픽셀, 두 번째와 세 번째 항목에게 50 픽셀씩 분배됩니다.</p>

<h3 id="flex-shrink_속성"><code>flex-shrink</code> 속성</h3>

<p><code>flex-grow</code> 속성이 주축에서 남는 공간을 항목들에게 분배하는 방법을 결정한다면 <code>flex-shrink</code> 속성은 주축의 공간이 부족할때 각 항목의 사이즈를 줄이는 방법을 정의합니다. 만약 <strong>flex 컨테이너</strong>가 <strong>flex 항목</strong>을 모두 포함할 만큼 넉넉한 공간을 갖고 있지 않고 <code>flex-shrink</code> 값이 양수이면 <strong>flex 항목</strong>은 flex-basis에 지정된 크기보다 작아집니다. 또한, <code>flex-grow</code> 속성과 마찬가지로 더 큰 <code>flex-shrink</code> 값을 갖는 항목의 사이즈가 더 빨리 줄어듭니다.</p>

<p>항목의 최소 크기는 실제 축소량을 계산할 때 고려되기 때문에 flex-shrink 속성이 flex-grow 속성에 비해 덜 일관된 모습을 보여줄지도 모릅니다. <code>flex-shrink</code> 속성이 항목의 사이즈를 결정하는 알고리즘에 관해서는 <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling Ratios of Flex Items on the Main Axis</a>에서 자세히 살펴히보겠습니다.</p>

<div class="note">
<p><code>flex-grow</code> 와 <code>flex-shrink</code>의 값이 비율임을 유의하세요.  <strong>flex 항목</strong>의 flex 속성을 모두 <code>1 1 200px</code> 로 지정하고 한 항목만 크기가 늘어나는 비율을 타 항목의 두배로 하고 싶으면 해당 <strong>flex 항목</strong>의 flex 속성을 <code>2 1 200px</code>로 지정하면 되지만, flex 속성 값을 모두  <code>10 1 200px</code>로 지정하고 늘어나는 비율을 두 배로 하고 싶은 항목의 flex 속성 값만 <code>20 1 200px</code>로 지정해도 동일하게 동작합니다.</p>
</div>

<h3 id="축약형_속성_flex">축약형 속성 flex</h3>

<p>보통은 <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>  값을 각각 사용하지 않고 이 세 속성을 한번에 지정하는 {{cssxref("flex")}} 축약형을 많이 사용합니다. <code>flex</code> 축약형의 값은 <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> 순서로 지정됩니다.</p>

<p>다음의 라이브 예시에서 flex 축약형의 값들을 조절하면서 시험해 볼 수 있습니다. 첫 값이 <code>flex-grow</code>를 지정하며,  이 첫 값을 양수로 하면 <strong>flex 항목</strong>이 넓어질 수 있습니다. 두 번째 값은 <code>flex-shrink</code> 를 지정하며 이 두 번째 값에 양수를 지정하면 <strong>flex 항목</strong>이 좁아질 수 있습니다. 세 번째 값은 <code>flex-basis</code>를 지정하며 이 값은 <strong>flex 항목</strong>이 넓어지거나 좁아질 때 고려하는 기준 값입니다.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}</p>

<p>flex 축약형 표현에 사용할 수 있는 미리 정의된 축약 값들이 아래에 나열되어 있습니다. 이 값들 만으로도 대부분의 경우(use-case)에 대응할 수 있을 것 입니다.</p>

<ul>
 <li><code>flex: initial</code></li>
 <li><code>flex: auto</code></li>
 <li><code>flex: none</code></li>
 <li><code>flex: &lt;positive-number&gt;</code></li>
</ul>

<p><strong>flex 항목</strong>을 <code>flex: initial</code>로 지정하면  <code>flex: 0 1 auto</code> 로 지정한 것과 동일하게 동작합니다. 이 경우, <strong>flex 항목</strong>들은  <code>flex-grow</code>가 0이므로  <code>flex-basis</code>값보다 커지지 않고  <code>flex-shrink</code>가 1이므로 <strong>flex 컨테이너</strong> 공간이 모자라면 크기가 줄어듭니다. 또, <code>flex-basis</code>가 <code>auto</code>이므로 <strong>flex 항목</strong>은 주축 방향으로 지정된 크기 또는 자기 내부 요소 크기 만큼 공간을 차지합니다.</p>

<p><code>flex: auto</code> 로 지정하면 <code>flex: 1 1 auto</code>로 지정한 것과 동일하며, <code>flex:initial</code> 과는 주축 방향 여유 공간이 있을 때 <strong>flex 항목</strong>들이 늘어나서 주축 방향 여유 공간을 채우는 점만 다릅니다.</p>

<p><code>flex: none</code>으로 지정하면 <code>flex: 0 0 auto</code>으로 지정한 것과 동일하며 <strong>flex 컨테이너</strong>의 크기 변화에도<strong> flex 항목</strong> 크기는 변하지 않고 <code>flex-basis</code>를 <code>auto</code>로 지정했을 때 정해지는 크기로 결정됩니다.  </p>

<p>이 축약형은 더 축약해서 <code>flex: 1</code> 이나 <code>flex: 2</code>처럼 쓸수도 있는데, 이는 <code>flex-grow</code> 만 지정하고 나머지는 1 0으로 사용한다는 뜻이다. 따라서 <code>flex: 2</code>는 <code>flex: 2 1 0</code>와 동일하게 처리됩니다.</p>

<p>다음 라이브 예제에서 이 축약 값들을 시험해 볼 수 있습니다.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}</p>

<h2 id="정렬_끝_맞추기(justification)_flex_항목간_여유_공간_분배">정렬, 끝 맞추기(justification), flex 항목간 여유 공간 분배</h2>

<p>flexbox의 주 기능 중 하나는 (주축과 교차축으로 표현되는) <strong>flex 컨테이너</strong> 공간 안에 <strong>flex 항목</strong>들을 정렬하고 끝 마추며 여유 공간을 항목 간에 분배하는 것입니다. </p>

<p>역주) 이 절의 내용은 편의상 <strong>flex 컨테이너</strong>의 flex-direction를 row로 가정하고 '행'과 '열'로 표기했습니다.</p>

<h3 id="align-items"><code>align-items</code></h3>

<p>{{cssxref("align-items")}}는 <strong>flex 컨테이너</strong>에 지정하는 속성이며, 교차축을 따라 <strong>flex 항목</strong> 열을 정렬하는 방식을 지정합니다. </p>

<p>이 속성의 (아무것도 지정하지 않았을 때 적용되는)초기 값은 <code>stretch</code>이며 이 값을 지정하면 <strong>flex 항목</strong>의 높이는 <strong>flex 컨테이너</strong> 내 <strong>flex 항목</strong> 행의 최대 높이로 지정됩니다. 따라서, <strong>flex 항목</strong> 행이 하나 일 때는 <strong>flex 항목</strong>은 교차축 방향으로 <strong>flex 컨테이너</strong>를 가득 채우게 됩니다.</p>

<p>이 속성을 <code>flex-start</code>로 지정하면<strong> flex 항목</strong>의 첫 열이 교차축 방향의 시작선에 정렬됩니다. <code>flex-end</code>로 지정하면 <strong>flex 항목</strong>의 첫 열이 교차축 방향의 끝선에 정렬됩니다. <code>center</code>로 지정하면 <strong>flex 항목</strong> 행에 배분된 공간의 가운데 라인에 정렬됩니다.</p>

<p>다음 라이브 예제에서 이 값들을 시험해 볼 수 있습니다. - 이 시험을 위해 의도적으로 <strong>flex 컨테이너</strong>에 높이를 지정해 두었습니다.</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}</p>

<h3 id="justify-content"><code>justify-content</code></h3>

<p>{{cssxref("justify-content")}} 속성은 주축을 따라 <strong>flex 항목</strong> 행을 정렬하는 방식을 지정합니다.</p>

<p>이 속성의 (아무것도 지정하지 않았을 때 적용되는)초기 값은 <code>flex-start</code>이며 이 값을 지정하면 <strong>flex 항목</strong> 행 내의 항목들은 <strong>flex 컨테이너</strong>의 시작선에서 부터 정렬됩니다. <code>flex-end</code>로 지정하면 <strong>flex 항목</strong> 행의 마지막 항목이 <strong>flex 컨테이너</strong>의 끝선에서 정렬됩니다. <code>center</code>로 지정하면 <strong>flex 항목</strong>들이 <strong>flex 항목</strong> 행의 가운데 정렬됩니다.</p>

<p><code>space-between</code>을 지정하면 주축 방향 여유 공간을 <strong>flex 항목</strong> 사이의 공간에 균등 배분합니다. </p>

<p><code>space-around</code>는 시작선 및 끝선과<strong> flex 항목</strong>간 공간도 균등 배분에 고려하므로 시작선 및 끝선과 <strong>flex 항목</strong> 간의 공간의 크기를 1로 배분한다면 <strong>flex 항목</strong> 사이의 공간은 2로 배분합니다. </p>

<p><code>space-evenly</code>로 지정하면 여유 공간을 <strong>flex 항목</strong> 사이의 공간 및 시작선 및 끝선과 <strong>flex 항목</strong> 간의 공간에 모두 균등하게 배분합니다.</p>

<p>다음 라이브 예제에서 <code>justify-content</code>에 지정할 수 있는 다음 값들을 시험해 볼 수 있습니다.</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
 <li><code>space-around</code></li>
 <li><code>space-between</code></li>
 <li><code>space-evenly</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}</p>

<p>이 절에서 설명한 내용으로 대부분의 경우에 대응할 수 있지만,  <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning Items in a Flex Container</a> 에서 이 속성들을 더 자세히 살펴볼 것입니다.</p>

<h2 id="Next_steps">Next steps</h2>

<p>Flexbox의 개요를 살펴보았습니다. 다음 글 <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">how this specification relates to other parts of CSS</a>에서 이 규격이 다른 CSS 규격과 어떻게 연관되어 있는지 말씀드리겠습니다.</p>
