---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/break
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>break</code> 문</strong>은 현재 반복문, {{jsxref("Statements/switch", "switch")}} 문, 또는 {{jsxref("Statements/label", "label")}} 문을 종료하고, 그 다음 문으로 프로그램 제어를 넘깁니다.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-break.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="syntaxbox">break [<em>label</em>];</pre>

<dl>
 <dt><code>label</code> {{optional_inline}}</dt>
 <dd>문의 라벨에 연결한 {{glossary("identifier", "식별자")}}. 반복문이나 {{jsxref("Statements/switch", "switch")}}에서 사용하는게 아니면 필수로 제공해야 합니다.</dd>
</dl>

<h2 id="설명">설명</h2>

<p><code>break</code> 문은 프로그램이 label 달린 문에서 빠져나오게 하는 선택사항 label을 포함합니다. <code>break</code> 문은 참조되는 label 내에 중첩되어야 합니다. label 달린 문은 어떤 {{jsxref("Statements/block", "block")}} 문이든 될 수 있습니다. 꼭, loop 문을 달 필요가 없습니다.</p>

<h2 id="예제">예제</h2>

<p>다음 함수는 <code>i</code>가 3일 때 {{jsxref("Statements/while", "while")}} loop를 종료하는 break 문이 있고, 그러고는 3 * <code>x</code>값을 반환합니다.</p>

<pre class="brush:js;highlight:[6];">function testBreak(x) {
  var i = 0;

  while (i &lt; 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}</pre>

<p>다음 코드는 label 달린 블록이 있는 <code>break</code> 문을 사용합니다. <code>break</code> 문은 자신이 참조하는 label 내에 중첩되어야 합니다. <code>inner_block</code>은 <code>outer_block</code>내에 중첩되어야 함을 주의하세요.</p>

<pre class="brush:js;highlight:[1,2,4];">outer_block: {
  inner_block: {
    console.log('1');
    break outer_block; // inner_block과 outer_block 둘다 빠져나옴
    console.log(':-('); // 건너뜀
  }
  console.log('2'); // 건너뜀
}
</pre>

<p>다음 코드는 또한 label 달린 블록이 있는 break 문을 사용하지만 그 <code>break</code> 문이 <code>block_2</code>를 참조하지만 <code>block_1</code> 내에 있기에 구문 오류(Syntax Error)가 발생합니다. <code>break</code> 문은 항상 자신이 참조하는 label 내에 중첩되어야 합니다.</p>

<pre class="brush:js;highlight:[1,3,6];">block_1: {
  console.log('1');
  break block_2; // SyntaxError: label을 찾을 수 없음
}

block_2: {
  console.log('2');
}
</pre>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.statements.break")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Statements/continue", "continue")}}</li>
 <li>{{jsxref("Statements/label", "label")}}</li>
 <li>{{jsxref("Statements/switch", "switch")}}</li>
</ul>
