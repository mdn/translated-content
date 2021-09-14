---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/for
browser-compat: javascript.builtins.Symbol.for
---
<div>{{JSRef}}</div>

<p><code><strong>Symbol.for(key)</strong></code> 메소드는  runtime-wide 심볼 레지스트리에서 해당 키로 존재하는 심볼을 찾는다. 없으면 전역 심볼 레지시트리에  해당 키로 새로운 심볼을 만들어 준다.  </p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox"><var>Symbol.for(key)</var>;</pre>

<h3 id="파라미터">파라미터</h3>

<dl>
 <dt>key</dt>
 <dd>String, 필수. 심볼의 키 (심볼의 설명을 위해서도 쓰인다).</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>해당 키에 해당하는 심볼이 있다면 반환 없으면 새로운 심볼을 만들고 반환한다.</p>

<h2 id="설명">설명</h2>

<p><code>Symbol()과는 다르게</code>, the <code>Symbol.for()</code> 함수는 전역 심볼 레지스트리 리스트에 심볼을 만든다. <code>Symbol.for()는 또한 매 호출마다 새로운 심볼을 만들지 않고 현재 레지스트리에 해당 키를 가진 심볼이 있는지 먼저 검사를 한다. 있다면 그 심볼을 반환한다. 만약 키에 해당하는 심볼이 없다면 </code>Symbol.for()는 새로운 전역 심볼을 만들 것이다.</p>

<h3 id="전역_심볼_레지스트리">전역 심볼 레지스트리 </h3>

<p>전역심볼 레지스트리는 다음 레코드 구조를 가진 리스트이고 초기 값은 비어 있다:</p>

<p>전역심볼 레지스트리의 레코드</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>필드 명</th>
   <th>값</th>
  </tr>
  <tr>
   <td>[[key]]</td>
   <td>심볼을 구분하기 위해 사용되는 문자열 키</td>
  </tr>
  <tr>
   <td>[[symbol]]</td>
   <td>전역으로 저장되는 심볼</td>
  </tr>
 </tbody>
</table>

<h2 id="예제">예제</h2>

<pre class="brush: js">Symbol.for('foo'); // 새로운 전역심볼 생성
Symbol.for('foo'); // 이미 만들어진 심볼을 검색

// 전역심볼은 서로 같고, 지역심볼은 아니다.
Symbol.for('bar') === Symbol.for('bar'); // true
Symbol('bar') === Symbol('bar'); // false

// 키는 설명하는데 쓰이기도 한다.
var sym = Symbol.for('mario');
sym.toString(); // "Symbol(mario)"
</pre>

<p>다른 라이브러리의 전역 심볼들과 당신의 전역 심볼간의 키 충돌을 피하기 위해서는 당신 심볼 앞에 prefix를 두는 것이 좋다:</p>

<pre class="brush: js">Symbol.for('mdn.foo');
Symbol.for('mdn.bar');
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="참조">참조</h2>

<ul>
 <li>{{jsxref("Symbol.keyFor()")}}</li>
</ul>
