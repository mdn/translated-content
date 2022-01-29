---
title: console
slug: Web/API/Console
tags:
  - API
  - Interface
  - Reference
  - console
  - 콘솔
translation_of: Web/API/Console
---
<div>{{APIRef("Console API")}}</div>

<p><span class="seoSummary"><strong><code>console</code></strong> 객체는 브라우저의 디버깅 콘솔(Firefox <a href="/ko/docs/Tools/Web_Console">웹 콘솔</a> 등)에 접근할 수 있는 메서드를 제공합니다.</span> 동작 방식은 브라우저마다 다르지만, 사실상 표준으로 여겨지는 기능도 여럿 있습니다.</p>

<p><code>console</code> 객체는 아무 전역 객체에서나 접근할 수 있습니다. 브라우징 문맥에선 {{domxref("Window")}}, 워커에서는 {{domxref("WorkerGlobalScope")}}이 속성으로 포함하고 있습니다. {{domxref("Window.console")}}의 형태로 노출되어 있으므로 간단하게 <code>console</code>로 참조할 수 있습니다.</p>

<pre class="brush: js">console.log("링크를 열 수 없습니다")</pre>

<p>이 문서는 콘솔 객체에서 사용할 수 있는 {{anch("메서드")}}와 몇 가지 {{anch("예제")}}를 다룹니다.</p>

<p>{{AvailableInWorkers}}</p>

<div class="blockIndicator note">
<p><strong>참고</strong>: 실제 <code>console</code> 인터페이스는 역사적 이유로 인해 모두 소문자(즉 <code>Console</code>이 아니고 <code>console</code>)입니다.</p>
</div>

<h2 id="메서드">메서드</h2>

<dl>
 <dt>{{domxref("console.assert()")}}</dt>
 <dd>첫 번째 매개변수가 <code>false</code>인 경우 메시지와 {{anch("스택 추적")}}을 출력합니다.</dd>
 <dt>{{domxref("console.clear()")}}</dt>
 <dd>콘솔의 내용을 지웁니다.</dd>
 <dt>{{domxref("console.count()")}}</dt>
 <dd>주어진 레이블로 메서드를 호출한 횟수를 출력합니다.</dd>
 <dt>{{domxref("console.countReset()")}}</dt>
 <dd>주어진 라벨의 횟수를 초기화합니다.</dd>
 <dt>{{domxref("console.debug()")}}</dt>
 <dd><code>"debug"</code> 중요도로 메시지를 출력합니다.</dd>
 <dt>{{domxref("console.dir()")}}</dt>
 <dd>주어진 JavaScript 객체의 속성 목록을 상호작용 가능한 형태로 표시합니다. 속성 값이 다른 객체라면 펼쳐서 살펴볼 수 있습니다.</dd>
 <dt>{{domxref("console.dirxml()")}}</dt>
 <dd>
 <p>객체를 XML/HTML 요소 형태로 나타낼 수 있으면 그렇게 표시하고, 아닐 경우 JavaScript 객체 형태로 표시합니다.</p>
 </dd>
 <dt>{{domxref("console.error()")}}</dt>
 <dd>오류 메시지를 출력합니다. 추가 매개변수와 함께 {{anch("문자열 치환")}}을 사용할 수 있습니다.</dd>
 <dt>{{domxref("console.exception()")}} {{non-standard_inline}} {{deprecated_inline}}</dt>
 <dd><code>error()</code>의 별칭입니다.</dd>
 <dt>{{domxref("console.group()")}}</dt>
 <dd>새로운 인라인 {{anch("그룹")}}을 생성해, 이후 모든 출력을 한 단계 들여씁니다. 그룹을 나오려면 <code>groupEnd()</code>를 호출하세요.</dd>
 <dt>{{domxref("console.groupCollapsed()")}}</dt>
 <dd>새로운 인라인 {{anch("그룹")}}을 생성해, 이후 모든 출력을 한 단계 들여씁니다. 그러나 <code>group()</code>과 달리, <code>groupCollapsed()</code>로 생성한 그룹은 처음에 접혀 있습니다. 그룹을 나오려면 groupEnd()를 호출하세요.</dd>
 <dt>{{domxref("console.groupEnd()")}}</dt>
 <dd>현재 인라인 {{anch("그룹")}}을 나옵니다.</dd>
 <dt>{{domxref("console.info()")}}</dt>
 <dd>정보 메시지를 출력합니다. 추가 매개변수와 함께 {{anch("문자열 치환")}}을 사용할 수 있습니다.</dd>
 <dt>{{domxref("console.log()")}}</dt>
 <dd>일반 메시지를 출력합니다. 추가 매개변수와 함께 {{anch("문자열 치환")}}을 사용할 수 있습니다.</dd>
 <dt>{{domxref("console.profile()")}}</dt>
 <dd>브라우저의 내장 프로파일러(<a href="/ko/docs/Tools/Performance">Firefox 성능 측정 도구</a> 등)를 실행합니다. 선택 사항으로 프로파일에 이름을 붙일 수 있습니다.</dd>
 <dt>{{domxref("console.profileEnd()")}}</dt>
 <dd>프로파일러를 멈춥니다. 프로파일 결과는 브라우저의 성능 측정 도구(<a href="/ko/docs/Tools/Performance">Firefox 성능 측정 도구</a> 등)에서 확인할 수 있습니다.</dd>
 <dt>{{domxref("console.table()")}}</dt>
 <dd>표 형태의 데이터를 표에 그립니다.</dd>
 <dt>{{domxref("console.time()")}}</dt>
 <dd>주어진 이름의 {{anch("타이머")}}를 실행합니다. 하나의 페이지에서는 최대 10,000개의 타이머를 동시에 실행할 수 있습니다.</dd>
 <dt>{{domxref("console.timeEnd()")}}</dt>
 <dd>지정한 {{anch("타이머")}}를 멈추고, 소요시간을 출력합니다.</dd>
 <dt>{{domxref("console.timeStamp()")}} {{non-standard_inline}}</dt>
 <dd>브라우저의 <a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool">타임라인</a>이나 <a href="/ko/docs/Tools/Performance/Waterfall">워터폴</a>에 마커를 추가합니다.</dd>
 <dt>{{domxref("console.trace()")}}</dt>
 <dd>{{anch("스택 추적")}}을 출력합니다.</dd>
 <dt>{{domxref("console.warn()")}}</dt>
 <dd>경고 메시지를 출력합니다. 추가 매개변수와 함께 {{anch("문자열 치환")}}을 사용할 수 있습니다.</dd>
</dl>

<h2 id="Usage" name="Usage">예제</h2>

<h3 id="Outputting_text_to_the_console" name="Outputting_text_to_the_console">콘솔에 텍스트 출력하기</h3>

<p>콘솔에서 가장 많이 사용하는 기능은 데이터와 텍스트를 출력하는 것입니다. 콘솔 메시지의 중요도는 네 가지로, 각각 {{domxref("console.log()")}}, {{domxref("console.info()")}}, {{domxref("console.warn()")}}, {{domxref("console.error()")}} 메서드를 사용해 출력할 수 있습니다. 중요도 별로 출력 스타일이 조금씩 다르며, 중요도 필터를 사용해 원하는 메시지만 골라 볼 수도 있습니다.</p>

<p>각각의 출력 메서드는 두 가지 방법으로 사용할 수 있습니다. 첫 번째는 단순히 객체 목록을 제공하는 것으로, 각자의 문자열 표현이 하나로 합쳐져서 출력됩니다. 두 번째는 치환 문자열을 포함한 문자열 뒤에, 그 자리에 배치할 객체 목록을 제공하는 것입니다.</p>

<h4 id="단일_객체_출력하기">단일 객체 출력하기</h4>

<p>로그를 남기는 가장 간단한 방법은 하나의 객체를 출력하는 것입니다.</p>

<pre class="brush: js">var someObject = { str: "Some text", id: 5 };
console.log(someObject);
</pre>

<p>출력은 다음과 같습니다.</p>

<pre>[09:27:13.475] ({str:"Some text", id:5})</pre>

<h4 id="여러_객체_출력하기">여러 객체 출력하기</h4>

<p>여러 객체를 출력하는 방법은 메서드를 호출할 때 모두 나열하면 됩니다.</p>

<pre class="brush: js">var car = "Dodge Charger";
var someObject = {str:"Some text", id:5};
console.info("My first car was a", car, ". The object is: ", someObject);</pre>

<p>출력은 다음과 같습니다.</p>

<pre>[09:28:22.711] My first car was a Dodge Charger. The object is: ({str:"Some text", id:5})
</pre>

<h4 id="문자열_치환">문자열 치환</h4>

<p><code>log()</code>처럼 문자열을 받는 콘솔 메서드에는 아래의 치환 문자열을 제공할 수 있습니다.</p>

<table class="standard-table" style="width: auto;">
 <tbody>
  <tr>
   <td class="header">치환 문자열</td>
   <td class="header">설명</td>
  </tr>
  <tr>
   <td><code>%o</code> 또는 <code>%O</code></td>
   <td>JavaScript 객체를 출력합니다. 객체 이름을 클릭하면 검사기에 더 자세한 정보를 보여줍니다.</td>
  </tr>
  <tr>
   <td><code>%d</code> 또는 <code>%i</code></td>
   <td>정수를 출력합니다. 서식도 지원합니다. 예를 들어 <code>console.log("Foo %.2d", "1.1")</code>은 정수부를 0이 앞서는 두 자리로 표현하므로 <code>Foo 01</code>을 출력합니다.</td>
  </tr>
  <tr>
   <td><code>%s</code></td>
   <td>문자열을 출력합니다.</td>
  </tr>
  <tr>
   <td><code>%f</code></td>
   <td>부동소수점 수를 출력합니다. 서식도 지원합니다. 예를 들어 <code>console.log("Foo %.2f", "1.1")</code>은 소수부를 두 자리로 표현하므로 <code>Foo 1.10</code>을 출력합니다.</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>참고</strong>: Chrome은 숫자 서식을 지원하지 않습니다.</p>
</div>

<p>각각의 치환 문자열은 이후 매개변수에서 값을 가져옵니다. 예를 들어...</p>

<pre>for (var i=0; i&lt;5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}
</pre>

<p>위의 출력은 다음과 같습니다.</p>

<pre>[13:14:13.481] Hello, Bob. You've called me 1 times.
[13:14:13.483] Hello, Bob. You've called me 2 times.
[13:14:13.485] Hello, Bob. You've called me 3 times.
[13:14:13.487] Hello, Bob. You've called me 4 times.
[13:14:13.488] Hello, Bob. You've called me 5 times.
</pre>

<h4 id="console_출력_꾸미기"><code>console</code> 출력 꾸미기</h4>

<p><code>"%c"</code> 명령을 사용해 콘솔 출력에 CSS 스타일을 적용할 수 있습니다.</p>

<pre class="brush: js">console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");</pre>

<div>명령 이전의 텍스트는 영향을 받지 않고, 이후의 텍스트는 매개변수로 제공한 CSS 선언을 적용합니다.</div>

<div><img alt="" src="https://mdn.mozillademos.org/files/12527/CSS-styling.png" style="display: block; margin: 0 auto;"></div>

<div></div>

<p><code>%c</code> 구문과 함께 사용할 수 있는 CSS 속성은 다음과 같습니다. (Firefox 기준, 브라우저마다 다를 수 있음)</p>

<ul>
 <li>{{cssxref("background")}}와 그 본디 속성.</li>
 <li>{{cssxref("border")}}와 그 본디 속성.</li>
 <li>{{cssxref("border-radius")}}</li>
 <li>{{cssxref("box-decoration-break")}}</li>
 <li>{{cssxref("box-shadow")}}</li>
 <li>{{cssxref("clear")}}, {{cssxref("float")}}</li>
 <li>{{cssxref("color")}}</li>
 <li>{{cssxref("cursor")}}</li>
 <li>{{cssxref("display")}}</li>
 <li>{{cssxref("font")}}와 그 본디 속성.</li>
 <li>{{cssxref("line-height")}}</li>
 <li>{{cssxref("margin")}}</li>
 <li>{{cssxref("outline")}}과 그 본디 속성.</li>
 <li>{{cssxref("padding")}}</li>
 <li>{{cssxref("text-transform")}} 등 <code>text-*</code> 속성.</li>
 <li>{{cssxref("white-space")}}</li>
 <li>{{cssxref("word-spacing")}}, {{cssxref("word-break")}}</li>
 <li>{{cssxref("writing-mode")}}</li>
</ul>

<div class="note">
<p><strong>참고</strong>: 콘솔 메시지는 인라인 요소처럼 행동합니다. <code>padding</code>, <code>margin</code>등의 효과를 보려면 <code>display: inline-block</code> 등을 지정해야 합니다.</p>
</div>

<h3 id="콘솔_그룹_사용하기"><a id="그룹" name="그룹">콘솔 그룹 사용하기</a></h3>

<p>중첩 그룹을 사용하면 서로 관련된 출력 결과를 시각적으로 묶어 정돈할 수 있습니다. 새로운 중첩 블록을 생성하려면 <code>console.group()</code>을 호출하세요. <code>console.groupCollapsed()</code> 메서드도 유사하지만, 대신 새로운 블록을 접힌 채로 생성하므로 내부를 보려면 열어야 합니다.</p>

<p>현재 그룹에서 나가려면 <code>console.groupEnd()</code>를 호출하세요. 예를 들어...</p>

<pre class="brush: js">console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");</pre>

<p>위의 출력은 다음과 같습니다.</p>

<p><img alt="Demo of nested groups in Firefox console" src="https://mdn.mozillademos.org/files/16911/console_groups_demo.png" style="height: 169px; width: 236px;"></p>

<h3 id="타이머">타이머</h3>

<p>특정 작업의 소요시간을 측정할 땐 타이머를 사용할 수 있습니다. 타이머를 시작하려면 <code>console.time()</code> 메서드를 호출하세요. 유일한 매개변수로 타이머의 이름을 제공할 수 있습니다. 타이머를 멈추고, 시작한 후 지난 시간을 알아내려면 <code>console.timeEnd()</code> 메서드를 호출하세요. 역시, 유일한 매개변수로 이전에 사용한 타이머 이름을 제공하면 됩니다.</p>

<p>예를 들어...</p>

<pre class="brush: js">console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");</pre>

<p>위의 코드는 사용자가 경고 상자를 닫는데 걸린 시간을 기록한 후 출력하고, 두 번째 경고를 닫을 때까지 기다린 후, 총 걸린 시간을 출력합니다.</p>

<p><img alt="timerresult.png" class="default internal" src="https://mdn.mozillademos.org/files/16113/console-timeLog.png" style="border: 1px solid black; height: 102px; margin: 0 auto; width: 318px;"></p>

<p>시작할 때와 끝낼 때 모두 타이머의 이름이 표시됨을 알 수 있습니다.</p>

<div class="note"><strong>참고:</strong> 타이머를 네트워크 트래픽 소요시간 측정에 사용하는 경우, 타이머는 총 소요시간을 보여주지만 네트워크 패널에 표시되는 시간은 헤더에 소모한 시간만 나타낸다는 것을 알아야 합니다. 응답 본문 로깅을 활성화한 경우, 응답 헤더와 본문의 시간을 합한 값이 타이머의 콘솔 출력과 비슷해야 합니다.</div>

<h3 id="스택_추적">스택 추적</h3>

<p>콘솔 객체는 스택 추적도 지원합니다. 스택 추적은 {{domxref("console.trace()")}}를 호출하게 된 경로를 보입니다. 예를 들어...</p>

<pre class="brush: js">function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
</pre>

<p>위 코드의 출력 결과는 다음과 같습니다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/7167/api-trace2.png" style="display: block; margin-left: auto; margin-right: auto;"></p>

<h2 id="Specification" name="Specification">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Console API')}}</td>
   <td>{{Spec2('Console API')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.Console")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Tools" title="Tools">Firefox Developer Tools</a></li>
 <li><a href="/ko/docs/Tools/Web_Console" title="Web Console">Web Console</a> — how the Web Console in Firefox handles console API calls</li>
 <li><a href="/ko/docs/Tools/Remote_Debugging">Remote Debugging</a> — how to see console output when the debugging target is a mobile device</li>
</ul>

<h3 id="다른_구현체">다른 구현체</h3>

<ul>
 <li><a href="https://developers.google.com/web/tools/chrome-devtools/console/api">Google Chrome DevTools</a></li>
 <li><a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/console/console-api">Microsoft Edge DevTools</a></li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html">Safari Web Inspector</a></li>
</ul>
