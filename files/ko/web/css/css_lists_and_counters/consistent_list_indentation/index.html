---
title: Consistent List Indentation
slug: Web/CSS/CSS_Lists_and_Counters/Consistent_list_indentation
tags:
  - CSS
  - Guide
  - NeedsUpdate
translation_of: Web/CSS/CSS_Lists_and_Counters/Consistent_list_indentation
original_slug: Consistent_List_Indentation
---
<div>{{CSSRef}}</div>

<p>가장 흔하게 리스트에 적용되는 스타일 변경은 들여쓰기(indentation)거리의 변경입니다 -- 즉, 리스트 아이텡을 오른쪽으로 얼마나 멀리 들여쓸것인가 라는것입니다. 이 작업은 가끔 한 브라우저에서 나오던 효과가 다른 브라우저에서는 같은 효과를 내지 못해서 애를 먹게하곤 합니다. 예를들면, 리스트가 왼쪽 마진을 갖지 못하도록 선언할 경우, 익스플로러에선 이동이되지만, Gecko기반의 브라우저에선 고집스럽게도 꼼짝않고 제 자리를 지키며 있는 그런 경우 입니다.</p>

<p>왜 이런 일이 일어나는 가를 이해하고 더 나아가 이러한 문제점을 피해나갈 방법을 이해하기 위해서, 리스트 형성에대한 세부과정을 검토하는 것이 필요합니다.</p>

<h2 id=".EB.A6.AC.EC.8A.A4.ED.8A.B8_.EB.A7.8C.EB.93.A4.EA.B8.B0" name=".EB.A6.AC.EC.8A.A4.ED.8A.B8_.EB.A7.8C.EB.93.A4.EA.B8.B0">리스트 만들기</h2>

<p>먼저, 한개의 단순한 리스트 아이템을 생각해봅시다. 이 리스트 아이템엔 아무런 마커(불렛이라고도 알려져 있습니다)도 없고, 아직 그자체로 어떤 리스트의 부분이 아닙니다. 그림 1에서 보이는 바와같이, 단순하고 아무 치장도 없는 채로 그냥 혼자 허공에 떠 있는 상태라고 할 수 있습니다.</p>

<p><img alt="Figure 1" src="https://developer.mozilla.org/@api/deki/files/619/=Consistent-list-indentation-figure1.gif"></p>

<p>빨간 점선으로된 경계선은 리스트 아이템의 내용물-지역의 바깥 경계를 나타내고 있습니다. 이 시점에서 리스트 아이템은 패딩이나 보더(경계)를 가지고 있지 않다는 점을 상기하십시오. 만약 2개의 리스트 아이템을 더 추가 한다면, 그림 2에 보여진 것과같은 결과를 얻게 될 것입니다.</p>

<p><img alt="Figure 2" src="https://developer.mozilla.org/@api/deki/files/620/=Consistent-list-indentation-figure2.gif"></p>

<p>이제 이 아이템들을 부모 엘리먼트로 랩핑(포장)합니다; 이 경우, 우리는 아이템들을 순서없는 리스트로 (즉, <code>&lt;ul&gt;</code>) 랩핑합니다. CSS 상자(박스) 모델에 의하면, 리스트 아이템들의 상자들은 부모 엘리먼트의 내용물-지역안에 디스플레이 되어야만 합니다. 이 부모 엘리먼트에 패딩이나 마진이 아직 없으므로 우리는 그림 3에 보여진 것과 같은 상황을 맞이하게 됩니다.</p>

<p><img alt="Figure 3" src="https://developer.mozilla.org/@api/deki/files/621/=Consistent-list-indentation-figure3.gif"></p>

<p>여기서, 푸른 점선 경계선은 <code>&lt;ul&gt;</code>엘리먼트의 내용물 지역의 경계를 보여줍니다. <code>&lt;ul&gt;</code>엘리먼트에 패딩이 없으므로 엘리먼트의 내용물은 세 리스트 아이템들을 촘촘하게 랩핑하게 됩니다.</p>

<p>이제, 리스트 아이템 마커를 추가합니다. 이 리스트는 순서가 없는 리스트이므로, 그림 4에 보여긴 것 같은 전통적인 채워진 원 불렛을 추가합니다.</p>

<p><img alt="Figure 4" src="https://developer.mozilla.org/@api/deki/files/622/=Consistent-list-indentation-figure4.gif"></p>

<p>보여지는 것으론, 마커들은 <code>&lt;ul&gt;</code>의 내용물-지역의<em>바깥</em> 에 있으나, 여기서 이점은 그다지 중요하지 않습니다. 중요한 점은 마커들이 <code>&lt;li&gt;</code>엘리먼트들의 "principal 상자"의 밖에 놓여진다는 점입니다. 이 마커들은 <code>&lt;lt&gt;</code>의 내용물-지역의 밖에 매달려 있으나 여전히 <code>&lt;li&gt;</code>에 부착되어있는 일종의 리스트 아이템들의 꼬리표같다고 할 수 있습니다.</p>

<p><br>
 바로 이런 이유로, 윈도우의 익스플로러을 제외한 모든 브라우저에서, 마커들이 <code>&lt;li&gt;</code>엘리먼트에 지정된 보더밖에 놓이며, <code>list-sytle-position</code>값으로 <code>outside</code>를 취하게 되는 것입니다. 만일 값이 <code>inside</code>로 바뀌게 되면, 마커들은, 비록 <code>&lt;li&gt;</code>의 바로 시작부분에 놓여진 inline 상자임에도 불구하고, <code>&lt;li&gt;</code> 안쪽으로 옯겨지게 됩니다.</p>

<h2 id=".EB.91.90.EB.B2.88_.EB.93.A4.EC.97.AC.EC.93.B0.EA.B8.B0" name=".EB.91.90.EB.B2.88_.EB.93.A4.EC.97.AC.EC.93.B0.EA.B8.B0">두번 들여쓰기</h2>

<p>그럼 이 모든게 문서에서는 어떻게 나타날까요? 현재, 우리는 아래의 스타일들에 비견되는 상황에 있다고 할 수 있습니다.</p>

<pre>ul, li {margin-left: 0; padding-left: 0;}</pre>

<p>만일 이 리스트를 있는 그대로 문서에 삽입할 경우, 가시적 들여쓰기 효과는 나타나지 않고, 마커들은 브라우저 윈도우의 왼쪽끝으로 잘려나갈 상황에 처하게 될것입니다.</p>

<p>이를 피하고 들여쓰기효과를 얻을 목적으로 브라우저 개발자들에게 사용가능한 옵션은 다음의 세가지밖에 없습니다.</p>

<ol>
 <li>각 <code>&lt;li&gt;</code> 엘리먼트에 왼쪽 마진을 준다.</li>
 <li><code>&lt;ul&gt;</code> 엘리먼트에 왼쪽 마진을 준다.</li>
 <li><code>&lt;ul&gt;</code> 엘리먼트에 왼쪽 패딩을 준다.</li>
</ol>

<p>결과론적으로, 누구도 첫번째 옵션을 사용하지는 않는것 같습니다. 두번째 옵션은 윈도우 익스플로러, 매킨토쉬, 그리고 오페라에서 적용되었습니다. 세번째 옵션은 Gecko 와 범주상 이를 임베드해서 사용하는 모든 브라우저들에 적용되었다고 할 수 있습니다.</p>

<p>이 두 접근법에 대해서 잠깐 살펴봅시다. 익스플로러와 오페라의 경우, 리스트들은 <code>&lt;ul&gt;</code>에 40 픽셀의 왼쪽 마진을 줌으로써 들여쓰여지게 됩니다. 만일 <code>&lt;ul&gt;</code> 엘리먼트에 배경색을 적용하고 리스트 아이템과 <code>&lt;ul&gt;</code> 보더들을 그냥 놔둘 경우, 그림 5에서 보이는 것과 같은 결과를 얻게 됩니다.</p>

<p><img alt="Figure 5"></p>

<p>반면, Gecko는 <code>&lt;ul&gt;</code> 엘리먼트에 대해서 40픽셀의 왼쪽<em>패딩</em> 을 줍니다. 따라서 그림 5를 만들어내는데 사용된 것과 똑 같은 스타일을 적용하게 된다고 가정하면, Gecko기반 브라우저로 예제를 로딩했을때 그림 6과 같은 그림을 보게 됩니다.</p>

<p><img alt="Figure 6"></p>

<p>보이는 바와 같이, 마커들은, 어디에 있게 되건간에, <code>&lt;li&gt;</code> 엘리먼트에 붙여진 채로 남아 있습니다. 차이점은 전적으로 <code>&lt;ul&gt;</code>가 어떤식으로 스타일을 갖추게 되는가에 달려있습니다. 이 차이점은 <code>&lt;ul&gt;</code> 엘리먼트에 배경색이나 보더를 지정하려고 할 경우에만 나타나게 됩니다.</p>

<h2 id=".EC.9D.BC.EA.B4.80.EC.84.B1_.EC.B0.BE.EA.B8.B0" name=".EC.9D.BC.EA.B4.80.EC.84.B1_.EC.B0.BE.EA.B8.B0">일관성 찾기</h2>

<p>모든것을 정리해보면 이런 결론에 도달하게 됩니다. 즉, Gecko, 익스플로러, 그리고 오페라 간에 리스트을 일관성있게 렌더링하고 싶으면, <code>&lt;ul&gt;</code> 엘리먼트의 왼쪽 마진 그리고 왼쪽 패딩<em>둘다</em> 지정해야 한다는 것입니다. 이런 목적으로 <code>&lt;li&gt;</code> 을 아예 무시해 버릴 수도 있습니다. 넷스케이프 6.x 에서 디폴트 디스플레이로 돌아가고 싶다면:</p>

<pre>ul {margin-left: 0; padding-left: 40px;}</pre>

<p>만약, 익스플로러/오페라 모델을 따르길 원한다면:</p>

<pre>ul {margin-left: 40px; padding-left: 0;}</pre>

<p>라고 쓰면 됩니다.</p>

<p>물론, 자기 자신이 선호하는 값을 써 넣을 수도 있습니다. 원한다면 둘다 <code>1.25em</code>로 정해 줄 수도 있습니다 -- 픽셀에 기반한 들여쓰기에만 묶여있을 이유는 없습니다. 만일 리스트들이 들여쓰기를 하지 않도록 리셋하고 싶으면, 패딩과 마진 값을 0으로 정해 주어야만 합니다.</p>

<pre>ul {margin-left: 0; padding-left: 0;}</pre>

<p>하지만, 그렇게 하면, 불렛들이 리스트와 부모 엘리먼트의 바깥쪽에 매달려 있게 된다는 점을 기억하세요. 만일 <code>body</code>가 부모일 경우, 불렛이 브라우저 윈도우 밖으로 완전히 나가있게 되서, 보이지 않게 될 가능성이 아주 높습니다.</p>

<h2 id=".EA.B2.B0.EB.A1.A0" name=".EA.B2.B0.EB.A1.A0">결론</h2>

<p>결국, 여기에 언급된 브라우져들이 리스트를 레이아웃하는 방식에있어서 올바르거나 그르거나 하지 않다는 것을 알 수 있습니다. 각 브라우저는 다른 디폴트 스타일을 사용하고 있으며, 거기서 문제점들이 기어들어 오게 되는 것입니다. 리스트의 왼쪽 패딩과 왼쪽 마진 둘다를 확실하게 스타일 지정 함으로써 리스트 들여쓰기에 있어서 브라우저간 일관성을 보다 획기적으로 유지할 수 있게 되는 것입니다.</p>

<h2 id=".EA.B6.8C.EC.9E.A5_.EC.82.AC.ED.95.AD" name=".EA.B6.8C.EC.9E.A5_.EC.82.AC.ED.95.AD">권장 사항</h2>

<ul>
 <li>리스트의 들여쓰기간격을 바꿀때에는 패딩과 마진 둘다 지정하는 것을 잊지마세요.</li>
</ul>

<div class="originaldocinfo">
<h2 id="Original_Document_Information">Original Document Information</h2>

<ul>
 <li>Author(s): Eric A. Meyer, Netscape Communications</li>
 <li>Last Updated Date: Published 30 Aug 2002</li>
 <li>Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.</li>
 <li>Note: This reprinted article was originally part of the DevEdge site.</li>
</ul>
</div>
