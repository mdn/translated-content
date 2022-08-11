---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
translation_of: Web/JavaScript/Reference/Statements/Empty
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong>empty</strong> 문은 JavaScript 아무것도 동작하지 않습니다.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-empty.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">;
</pre>

<h2 id="설명">설명</h2>

<p>empty statement은 JavaScript구문에 하나가 필요할 때 어떤 문도 실행되지 않을 것이라는 것을 나타내는 세미 콜론(;)입니다. 여러개의 문장을 원하지만 JavaScript는 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/block">block statement</a>을 사용하여 하나만 허용하며 여러개의 문장을 하나로 결합합니다.</p>

<h2 id="예제">예제</h2>

<p>빈 문은 루프 문과 함께 사용되기도합니다. 빈 루프 본문이있는 다음 예제를 참조하십시오.</p>

<pre class="brush: js">var arr = [1, 2, 3];

// Assign all array values to 0
for (i = 0; i &lt; arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr)
// [0, 0, 0]
</pre>

<p><strong>참고:</strong> 정상적인 세미 콜론을 구분하는 것이 그리 쉽지 않기 때문에, empty statement를 사용할 때는 의도적으로 주석을 달아주는것이 좋습니다. 다음 예 에서는 의도한대로 코드가 동작하지 않을것입니다. 아마도 killTheUniverse()를 if문 안에서 실행하고자 했던것 같습니다.</p>

<pre class="brush: js">if (condition);       // Caution, this "if" does nothing!
   killTheUniverse()  // So this always gets executed!!!
</pre>

<p>다른 예 : 중괄호 ({})가없는 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else"><code>if...else</code></a> 문에서 <code>three</code>가 <code>true</code>이면 아무 일도 일어나지 않고 <code>four</code>를 건너 뛰고 else case의 launchRocket() 함수도 실행되지 않습니다.</p>

<pre class="brush: js">if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("javascript.statements.empty")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Statements/block", "Block statement")}}</li>
</ul>
