---
title: 자바스크립트의 메모리관리
slug: Web/JavaScript/Memory_Management
translation_of: Web/JavaScript/Memory_Management
---
<div>{{JsSidebar("Advanced")}}</div>

<p>C 언어같은 저수준 언어에서는 메모리 관리를 위해 <a href="https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html">malloc()</a> 과 <a href="https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions">free()</a>를 사용한다. 반면, 자바스크립트는 객체가 생성되었을 때 자동으로 메모리를 할당하고 쓸모 없어졌을 때 자동으로 해제한다(<em>가비지 컬렉션</em>). 이러한 자동 메모리 관리는 잠재적 혼란의 원인이기도 한데, 개발자가 메모리 관리에 대해 고민할 필요가 없다는 잘못된 인상을 줄 수 있기 때문이다.</p>

<h2 id="Memory_life_cycle">메모리 생존주기</h2>

<p>메모리 생존주기는 프로그래밍 언어와 관계없이 비슷하다.</p>

<ol>
 <li>필요할때 할당한다.</li>
 <li>사용한다. (읽기, 쓰기)</li>
 <li>필요없어지면 해제한다. </li>
</ol>

<p>두 번째 부분은 모든 언어에서 명시적으로 사용된다. 그러나 첫 번째 부분과 마지막 부분은 저수준 언어에서는 명시적이며, 자바스크립트와 같은 대부분의 고수준 언어에서는 암묵적으로 작동한다. </p>

<h3 id="Allocation_in_JavaScript">자바스크립트에서 메모리 할당</h3>

<h4 id="Value_initialization">값 초기화</h4>

<p>프로그래머를 할당 문제로 괴롭히지 않기 위해서, 자바스크립트는 값을 선언할 때 자동으로 메모리를 할당한다.</p>

<pre class="brush: js">var n = 123; // 정수를 담기 위한 메모리 할당
var s = 'azerty'; // 문자열을 담기 위한 메모리 할당

var o = {
  a: 1,
  b: null
}; // 오브젝트와 그 오브젝트에 포함된 값들을 담기 위한 메모리 할당

// (오브젝트처럼) 배열과 배열에 담긴 값들을 위한 메모리 할당
var a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // 함수를 위한 할당(함수는 호출 가능한 오브젝트이다)

// 함수식 또한 오브젝트를 담기위한 메모리를 할당한다.
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);
</pre>

<h4 id="Allocation_via_function_calls">함수 호출을 통한 할당</h4>

<p>함수 호출의 결과 메모리 할당이 일어나기도 한다. </p>

<pre class="brush: js">var d = new Date(); // Date 개체를 위해 메모리를 할당

var e = document.createElement('div'); // DOM 엘리먼트를 위해 메모리를 할당한다.
</pre>

<p>메소드가 새로운 값이나 오브젝트를 할당하기도 한다.</p>

<pre class="brush: js">var s = 'azerty';
var s2 = s.substr(0, 3); // s2는 새로운 문자열
// 자바스크립트에서 문자열은 immutable 값이기 때문에,
// 메모리를 새로 할당하지 않고 단순히 [0, 3] 이라는 범위만 저장한다.

var a = ['ouais ouais', 'nan nan'];
var a2 = ['generation', 'nan nan'];
var a3 = a.concat(a2);
// a 와 a2 를 이어붙여, 4개의 원소를 가진 새로운 배열
</pre>

<h3 id="Using_values">값 사용</h3>

<p>값 사용이란 기본적으로는 할당된 메모리를 읽고 쓰는 것을 의미한다. 변수나 객체 속성의 값을 읽고 쓰거나 함수 호출시 함수에 인수를 전달하여 수행 할 수 있다. </p>

<h3 id="Release_when_the_memory_is_not_needed_anymore">할당된 메모리가 더 이상 필요없을 때 해제하기</h3>

<p>이 단계에서 대부분의 문제가 발생한다. "할당된 메모리가 더 이상 필요없을 때"를 알아내기가 어렵기 때문이다.</p>

<p>저수준 언어에서는 메모리가 필요없어질 때를 개발자가 직접 결정하고 해제하는 방식을 사용한다. </p>

<p>자바스크립트와 같은 고수준 언어들은 "<a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">가비지 콜렉션</a>(GC)"이라는 자동 메모리 관리 방법을 사용한다. 가비지 콜렉터의 목적은 메모리 할당을 추적하고 할당된 메모리 블록이 더 이상 필요하지 않게게 되었는지를 판단하여 회수하는 것이다. 이러한 자동 메모리 관리 프로세스는 궁극의 방법은 아니다. 왜냐하면 어떤 메모리가 여전히 필요한지 아닌지를 판단하는 것은 <a class="external" href="http://en.wikipedia.org/wiki/Decidability_%28logic%29">비결정적</a> 문제이기 때문이다.</p>

<h2 id="Garbage_collection">가비지 콜렉션</h2>

<p>위에서 언급한 것처럼 "더 이상 필요하지 않은" 모든 메모리를 찾는건 비결정적 문제다. 따라서 가비지 컬렉터들은 이 문제에 대한 제한적인 해결책을 구현한다. 이 섹션에서는 주요한 가비지 컬렉션 알고리즘들과 그 한계를 이해하는데 필요한 개념을 설명한다.</p>

<h3 id="References">참조</h3>

<p>가비지 콜렉션 알고리즘의 핵심 개념은 <em>참조</em>이다. A라는 메모리를 통해 (명시적이든 암시적이든) B라는 메모리에 접근할 수 있다면 "B는 A에 참조된다" 라고 한다. 예를 들어 모든 자바스크립트 오브젝트는 <a href="/en/JavaScript/Guide/Inheritance_and_the_prototype_chain" title="en/JavaScript/Guide/Inheritance_and_the_prototype_chain">prototype</a> 을 암시적으로 참조하고 그 오브젝트의 속성을 명시적으로 참조한다.</p>

<p>앞으로 "오브젝트"라는 어휘의 의미를 넓혀서 기존의 자바스크립트 오브젝트뿐만 아니라 함수 스코프도 포괄하자.</p>

<h3 id="Reference-counting_garbage_collection">참조-세기(Reference-counting) 가비지 콜렉션</h3>

<p>참조-세기 알고리즘은 가장 소박한 알고리즘이다. 이 알고리즘은 "더 이상 필요없는 오브젝트"를 "어떤 다른 오브젝트도 참조하지 않는 오브젝트"라고 정의한다. 이 오브젝트를 "가비지"라 부르며, 이를 참조하는 다른 오브젝트가 하나도 없는 경우, 수집이 가능하다.</p>

<h4 id="Example">예제</h4>

<pre class="brush: js">var x = {
  a: {
    b: 2
  }
};
// 2개의 오브젝트가 생성되었다. 하나의 오브젝트는 다른 오브젝트의 속성으로 참조된다.
// 나머지 하나는 'x' 변수에 할당되었다.
// 명백하게 가비지 콜렉션 수행될 메모리는 하나도 없다.


var y = x;      // 'y' 변수는 위의 오브젝트를 참조하는 두 번째 변수이다.

x = 1;          // 이제 'y' 변수가 위의 오브젝트를 참조하는 유일한 변수가 되었다.

var z = y.a;    // 위의 오브젝트의 'a' 속성을 참조했다.
                // 이제 'y.a'는 두 개의 참조를 가진다.
                // 'y'가 속성으로 참조하고 'z'라는 변수가 참조한다.

y = "mozilla";  // 이제 맨 처음 'y' 변수가 참조했던 오브젝트를 참조하는 오브젝트는 없다.
                // (역자: 참조하는 유일한 변수였던 y에 다른 값을 대입했다)
                // 이제 오브젝트에 가비지 콜렉션이 수행될 수 있을까?
                // 아니다. 오브젝트의 'a' 속성이 여전히 'z' 변수에 의해 참조되므로
                // 메모리를 해제할 수 없다.

z = null;       // 'z' 변수에 다른 값을 할당했다.
                // 이제 맨 처음 'x' 변수가 참조했던 오브젝트를 참조하는
                // 다른 변수는 없으므로 가비지 콜렉션이 수행된다.
</pre>

<h4 id="Limitation_Circular_references">한계: 순환 참조</h4>

<p>순환 참조를 다루는 일에는 한계가 있다. 다음 예제에서는 두 객체가 서로 참조하는 속성으로 생성되어 순환 구조를 생성한다. 함수 호출이 완료되면 이 두 객체는 스코프를 벗어나게 될 것이며, 그 시점에서 두 객체는 불필요해지므로 할당된 메모리는 회수되어야 한다. 그러나 두 객체가 서로를 참조하고 있으므로, 참조-세기 알고리즘은 둘 다 가비지 컬렉션의 대상으로 표시하지 않는다. 이러한 순환 참조는 메모리 누수의 흔한 원인이다.</p>

<pre class="brush: js">function f() {
  var x = {};
  var y = {};
  x.a = y;         // x는 y를 참조한다.
  y.a = x;         // y는 x를 참조한다.

  return "azerty";
}

f();
</pre>

<h4 id="Real-life_example">실제 예제</h4>

<p>인터넷 익스플로러 6, 7 은 DOM 오브젝트에 대해 참조-세기 알고리즘으로 가비지 콜렉션을 수행한다. 흔히, 이 두 브라우저에서는 다음과 같은 패턴의 메모리 누수가 발생한다. </p>

<pre class="brush: js">
var div;
window.onload = function() {
  div = document.getElementById('myDivElement');
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join('*');
};
</pre>

<p>위의 예에서 DOM 요소 "myDivElement"는 "circularReference" 속성에서 자신에 대한 순환 참조를 가지고 있습니다. 속성이 명시적으로 제거되거나 null이 되지않으면 참조-계산 가비지 수집기는 항상 하나 이상의 참조를 그대로 유지하며 DOM 트리에서 제거 된 경우에도 DOM 요소를 메모리에 유지합니다. DOM 요소가 많은 양의 데이터를 보유하는 경우 (위의 예에서 'lotsOfData'속성으로 설명 됨)이 데이터에 사용 된 메모리는 절대 해제되지 않으며 브라우저가 점점 더 느려지는 등 메모리 관련 문제로 이어질 수 있습니다.</p>

<h3 id="Mark-and-sweep_algorithm">표시하고-쓸기(Mark-and-sweep) 알고리즘</h3>

<p>이 알고리즘은 "더 이상 필요없는 오브젝트"를 "닿을 수 없는 오브젝트"로 정의한다.</p>

<p>이 알고리즘은 <em>roots</em> 라는 오브젝트의 집합을 가지고 있다(자바스크립트에서는 전역 변수들을 의미한다). 주기적으로 가비지 콜렉터는 roots로 부터 시작하여 roots가 참조하는 오브젝트들, roots가 참조하는 오브젝트가 참조하는 오브젝트들... 을 <em>닿을 수 있는 오브젝트</em>라고 표시한다. 그리고 닿을 수 있는 오브젝트가 아닌 닿을 수 없는 오브젝트에 대해 가비지 콜렉션을 수행한다.</p>

<p>이 알고리즘은 위에서 설명한 참조-세기 알고리즘보다 효율적이다. 왜냐하면 "참조되지 않는 오브젝트"는 모두 "닿을 수 없는 오브젝트" 이지만 역은 성립하지 않기 때문이다. 위에서 반례인 순환 참조하는 오브젝트들을 설명했다.</p>

<p>2012년 기준으로 모든 최신 브라우저들은 가비지 콜렉션에서 표시하고-쓸기 알고리즘을 사용한다. 지난 몇 년간 연구된 자바스크립트 가비지 콜렉션 알고리즘의 개선들은 모두 이 알고리즘에 대한 것이다. 개선된 알고리즘도 여전히 "더 이상 필요없는 오브젝트"를 "닿을 수 없는 오브젝트"로 정의하고 있다.</p>

<h4 id="Cycles_are_no_longer_a_problem">순환 참조는 이제 문제가 되지 않는다.</h4>

<p>첫 번째 예제에서 함수가 리턴되고 나서 두 오브젝트는 닿을 수 없다. 따라서 가비지 콜렉션이 일어난다.</p>

<p>두 번째 예제에서도 마찬가지다. div 변수와 이벤트 핸들러가 roots로 부터 닿을 수 없어지면 순환 참조가 일어났음에도 불구하고 가비지 콜렉션이 일어난다. (역자2: div 선언을 블럭안에다 넣어야 된다.(테스트는 못 해봤다.))</p>

<h4 id="Limitation_Releasing_memory_manually">한계: 수동 메모리 해제.</h4>

<p>어떤 메모리를 언제 해제할지에 대해 수동으로 결정하는 것이 편리할 때가 있습니다. 그리고 수동으로 객체의 메모리를 해제하려면, 객체 메모리에 도달할 수 없도록 명시하는 기능이 있어야 합니다.</p>
 
<p>2019년 현재의 JavaScript에서는 명시적으로 또는 프로그래밍 방식으로 가비지 컬렉션을 작동할 수 없습니다.</p>

<h2 id="Node.js">Node.js</h2>

<p>Node.js는 브라우저 환경에서 실행되는 JavaScript에 사용할 수 없는 메모리 문제를 구성하고 디버깅하기 위한 추가 옵션과 도구를 제공합니다.</p>

<h4 id="V8_Engine_Flags">V8 엔진 플래그</h4>

<p>사용 가능한 힙 메모리의 최대 양은 플래그를 사용하여 늘릴 수 있습니다.</p>

<p><code>node --<em>max-old-space-size=6000</em> index.js</code></p>

<p>플래그 및 <a href="https://nodejs.org/en/docs/guides/debugging-getting-started/"></a>Chrome 디버거</a>를 사용하여 메모리 문제를 디버깅하기 위해 가비지 수집기를 노출 할 수도 있습니다:</p>

<pre class="brush: bash">node --expose-gc --inspect index.js</pre>

<p>더 보기</p>

<ul>
 <li><a class="external" href="http://www.ibm.com/developerworks/web/library/wa-memleak/">"JavaScript의 메모리 누수 패턴"에 대한 IBM 기사 (2007)</a></li>
 <li><a class="external" href="http://msdn.microsoft.com/en-us/magazine/ff728624.aspx">이벤트 핸들러를 등록하고 메모리 누수를 방지하는 방법에 대한 Kangax 기사 (2010)</a></li>
 <li><a href="/en-US/docs/Mozilla/Performance">성능</a></li>
</ul>
