---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
tags:
  - API
  - Experimental
  - Interface
  - Intersection Observer API
  - IntersectionObserver
  - NeedsTranslation
  - Reference
  - TopicStub
  - observers
translation_of: Web/API/IntersectionObserver
---
<div>{{APIRef("Intersection Observer API")}}</div>

<p><a href="/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer API</a> 의 <code><strong>IntersectionObserver</strong></code> 인터페이스는 대상 요소와 그 상위 요소 혹은 최상위 도큐먼트인 <span class="seoSummary">{{Glossary('viewport')}}</span>와의 교차 영역에 대한 변화를 비동기적으로 감지할 수 있도록 도와줍니다.</p>

<p> <code>IntersectionObserver</code> 가 생성되면, 루트 내에서 설정된 비율 만큼의 가시성을 계속 감시하도록 설정됩니다. 한번 생성되고 나면, 설정 값은 변경될 수 없으므로, 생성된 감시자 객체는 가시성 정도의 변화를 감시하는 데에만 쓰일 수 있습니다. 하지만 동일한 감시자 객체로 여러 대상 요소를 감시할 수 있습니다.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("IntersectionObserver.IntersectionObserver()")}}</dt>
 <dd><code>IntersectionObserver</code> 객체를 생성합니다. 해당 객체는 대상 요소의 가시성이 하나 이상의 설정된 정도 값을 넘을 경우 주어진 콜백 함수를 실행합니다.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("IntersectionObserver.root")}} {{readonlyinline}}</dt>
 <dd>대상 요소 ({{domxref("element")}}) 를 감시할 상위 요소. 값을 넣지 않거나 <code>null</code> 일 경우, 최상위 문서의 뷰포트가 사용된다.</dd>
 <dt>{{domxref("IntersectionObserver.rootMargin")}} {{readonlyinline}}</dt>
 <dd>교차 정도를 계산할 때 루트의 {{Glossary('bounding box')}} 에 적용되는 offset 사각형으로, 루트의 범위를 효과적으로 늘리거나 줄입니다. 이 특성이 반환한 값은, 생성자를 호출 할 때 내부 요구 사항에 맞게 변경 될 수 있으므로 지정된 값과 같지 않을 수 있습니다. 각 offset 은 픽셀(<code>px</code>) 혹은 퍼센트(<code>%</code>)로 표기될 수 있습니다. 기본 값은 "0px 0px 0px 0px" 입니다.</dd>
 <dt>{{domxref("IntersectionObserver.thresholds")}} {{readonlyinline}}</dt>
 <dd>임계값 목록. 숫자의 오름차순으로 정렬되며, 각 임계 값은 감시하는 대상의 경계 상자 영역과의 교차 비율입니다. 대상에 대한 알림은 해당 대상에 대한 임계 값이 초과 될 때 생성됩니다. 생성자에 값이 전달되지 않을 경우 0이 사용됩니다.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("IntersectionObserver.disconnect()")}}</dt>
 <dd><code>IntersectionObserver</code> 가 어떤 대상이라도 감시하는 것을 중지합니다.</dd>
 <dt>{{domxref("IntersectionObserver.observe()")}}</dt>
 <dd>대상 요소에 대한 감시를 시작합니다.</dd>
 <dt>{{domxref("IntersectionObserver.takeRecords()")}}</dt>
 <dd>모든 감시되는 대상의 배열 ({{domxref("IntersectionObserverEntry")}}) 을 리턴합니다.</dd>
 <dt>{{domxref("IntersectionObserver.unobserve()")}}</dt>
 <dd>특정 대상 요소를 감시하는 것을 중지합니다.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var intersectionObserver = new IntersectionObserver(function(entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  if (entries[0].intersectionRatio &lt;= 0) return;

  loadItems(10);
  console.log('Loaded new items');
});
// start observing
intersectionObserver.observe(document.querySelector('.scrollerFooter'));</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("IntersectionObserver", "#intersection-observer-interface", "IntersectionObserver")}}</td>
   <td>{{Spec2('IntersectionObserver')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.IntersectionObserver")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref('MutationObserver')}}</li>
 <li>{{domxref('PerformanceObserver')}}</li>
 <li>{{domxref('ResizeObserver')}}</li>
</ul>
