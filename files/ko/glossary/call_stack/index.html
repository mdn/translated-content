---
title: 호출 스택
slug: Glossary/Call_stack
tags:
  - Glossary
  - JavaScript
  - 호출 스택
translation_of: Glossary/Call_stack
---
<p><strong>호출 스택</strong>은 여러 함수들({{glossary("function","functions")}})을 호출하는 스크립트에서 해당 위치를 추적하는 인터프리터 (웹 브라우저의 자바스크립트 인터프리터같은)를 위한 메커니즘입니다. 현재 어떤 함수가 동작하고있는 지, 그 함수 내에서 어떤 함수가 동작하는 지, 다음에 어떤 함수가 호출되어야하는 지 등을 제어합니다.</p>

<ul>
 <li>스크립트가 함수를 호출하면 인터프리터는 이를 호출 스택에 추가한 다음 함수를 수행하기 시작합니다.</li>
 <li>해당 함수에 의해 호출되는 모든 함수는 호출 스택에 추가되고 호출이 도달하는 위치에서 실행합니다.</li>
 <li>메인 함수가 끝나면 인터프리터는 스택을 제거하고 메인 코드 목록에서 중단된 실행을 다시 시작합니다.</li>
 <li>스택이 할당된 공간보다 많은 공간을 차지하면 "stack overflow" 에러가 발생합니다.</li>
</ul>

<h2 id="예제">예제</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">greeting</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
   <span class="comment token">// [1] Some codes here</span>
   <span class="function token">sayHi</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
   <span class="comment token">// [2] Some codes here</span>
<span class="punctuation token">}</span>
<span class="keyword token">function</span> <span class="function token">sayHi</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
   <span class="keyword token">return</span> <span class="string token">"Hi!"</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="comment token">// Invoke the `greeting` function</span>
<span class="function token">greeting</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>

<span class="comment token">// [3] Some codes here</span></code></pre>

<p>위 코드는 다음과 같이 실행될 것입니다.</p>

<ol>
 <li><code>greeting()</code> 함수에 도달할 때까지, 모든 함수를 무시합니다.</li>
 <li><code>greeting()</code> 함수를 호출합니다.</li>
 <li><code>greeting()</code> 함수를 호출 스택 리스트에 추가합니다.<br>

  <div class="note">
  <p>호출 스택 리스트:<br>
   - greeting</p>
  </div>
 </li>
 <li>`greeting` 함수 내부의 모든 코드를 실행합니다.</li>
 <li><code>sayHi()</code> 함수를 얻습니다.</li>
 <li><code>sayHi()</code> 함수를 호출 스택 리스트에 추가합니다.<br>

  <div class="note">
  <p>호출 스택 리스트:<br>
   - greeting<br>
   - sayHi</p>
  </div>
 </li>
 <li><code>sayHi()</code> 함수의 끝에 도달할 때까지, 함수 내부의 모든 코드를 실행합니다.</li>
 <li><code>sayHi()</code> 가 호출된 라인으로 돌아와 <code>greeting()</code> 함수의 나머지를 계속 실행합니다.</li>
 <li>호출 스택 리스트에서 <code>sayHi()</code> 함수를 제거합니다.<br>

  <div class="note">
  <p>호출 스택 리스트:<br>
   - greeting</p>
  </div>
 </li>
 <li><code>greeting()</code> 함수 내부의 모든 코드가 실행되었을 때, 이를 호출한 라인으로 돌아와 JS 코드의 나머지를 계속 실행합니다.</li>
 <li>호출 스택 리스트에서 <code>greeting()</code> 함수를 제거합니다.<br>

  <div class="note">
  <p>호출 스택 리스트:<br>
   EMPTY</p>
  </div>
 </li>
</ol>

<p>우리는 빈 호출 스택으로 시작하며, 함수를 호출할 때마다 자동으로 호출 스택에 추가되고, 해당 코드가 모두 실행된 후, 호출 스택에서 자동으로 제거됩니다. 결국, 마찬가지로 빈 호출 스택으로 끝납니다.</p>

<h2 id="더_알아보기">더 알아보기</h2>

<h3 id="일반_지식">일반 지식</h3>

<ul>
 <li><a href="https://ko.wikipedia.org/wiki/%EC%BD%9C_%EC%8A%A4%ED%83%9D">콜 스택</a> on Wikipedia</li>
</ul>
