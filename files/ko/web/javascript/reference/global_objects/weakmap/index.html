---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - ECMAScript6
  - JavaScript
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
browser-compat: javascript.builtins.WeakMap
---
<div>{{JSRef}}</div>

<p><strong><code>WeakMap</code></strong> 객체는 키가 약하게 참조되는 키/값 쌍의 컬렉션입니다. 키는 객체여야만 하나 값은 임의 값이 될 수 있습니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">new WeakMap([iterable])
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>iterable</code></dt>
 <dd>iterable은 배열 또는 요소가 키-값 쌍(2-요소 배열)인 다른 iterable 객체입니다. 각 키-값 쌍은 새로운 WeakMap에 추가됩니다. null은 undefined로 취급됩니다.</dd>
</dl>

<h2 id="설명">설명</h2>

<p>WeakMap의 키는 오직 <code>Object</code>형뿐입니다. 키로 {{Glossary("Primitive", "원시 데이터형")}}은 허용되지 않습니다(가령 {{jsxref("Symbol")}}은 <code>WeakMap</code> 키가 될 수 없습니다).</p>

<p>WeakMap 내 키는 약하게 유지됩니다. 이게 뜻하는 바는, 다른 강한 키 참조가 없는 경우, 그러면 모든 항목은 가비지 컬렉터에 의해 WeakMap에서 제거됩니다.</p>

<h3 id="왜_WeakMap인가요">왜 <em>Weak</em>Map인가요?</h3>

<p>숙련된 JavaScript 프로그래머는 이 API는 네 API 메서드에 의해 공유되는 두 배열(키에 하나, 값에 하나)로 JavaScript에서 구현될 수 있음을 알 수 있습니다. 이러한 구현은 주로 두 가지가 불편했을 겁니다. 첫 번째는 O(n) 검색(n은 map 내 키 개수)입니다. 두 번째는 메모리 누수 문제입니다. 수동으로 작성된 map이면, 키 배열은 키 객체 참조를 유지하려고 합니다, 가비지 컬렉트되는 것을 방지하는. 원래 WeakMap에서는, 키 객체 참조는 "약하게" 유지되고, 이는 다른 객체 참조가 없는 경우 가비지 컬렉션을 막지 않음을 뜻합니다.</p>

<p>약한 참조로 인해, <code>WeakMap</code> 키는 열거불가입니다(즉 키 목록을 제공하는 메서드가 없습니다). 키가 있다면, 그 목록은 가비지 콜렉션 상태에 달려있습니다, 비결정성(non-determinism, 크기를 결정할 수 없는)을 도입하는. 키 목록을 원하는 경우, {{jsxref("Map")}}을 사용해야 합니다.</p>

<h2 id="속성">속성</h2>

<dl>
 <dt><code>WeakMap.length</code></dt>
 <dd><code>length</code> 속성값은 0.</dd>
 <dt>{{jsxref("WeakMap.prototype")}}</dt>
 <dd><code>WeakMap</code> 생성자에 대한 프로토타입을 나타냅니다. 모든 <code>WeakMap</code> 객체에 속성을 추가할 수 있습니다.</dd>
</dl>

<h2 id="WeakMap_인스턴스"><code>WeakMap</code> 인스턴스</h2>

<p>모든 <code>WeakMap</code> 인스턴스는 {{jsxref("WeakMap.prototype")}}에서 상속합니다.</p>

<h3 id="속성_2">속성</h3>

<p>{{page('ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype','속성')}}</p>

<h3 id="메서드">메서드</h3>

<p>{{page('ko/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/prototype','메서드')}}</p>

<h2 id="예">예</h2>

<h3 id="WeakMap_사용"><code>WeakMap</code> 사용</h3>

<pre class="brush: js">var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 값은 무엇이든 될 수 있음, 객체 또는 함수 포함
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 키와 값은 어떤 객체든 될 수 있음. 심지어 WeakMap도!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, wm2에 o2에 대한 키가 없기에
wm2.get(o3); // undefined, 이게 설정값이기에

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (값 자체가 'undefined'이더라도)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
</pre>

<h3 id=".clear()_메서드로_WeakMap_같은_클래스_구현">.clear() 메서드로 <code>WeakMap</code> 같은 클래스 구현</h3>

<p>설명을 위해, 다음 예는 새로운 ECMAScript 6 <code>class</code> 구조를 사용합니다, 현재 널리 구현되지 않은.</p>

<pre class="brush: js">class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li><a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=547941">Mozilla에서 WeakMap 버그</a></li>
 <li><a href="http://fitzgeraldnick.com/weblog/53/">ECMAScript 6 WeakMap으로 구현 정보 은닉</a></li>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>
