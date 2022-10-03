---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
tags:
  - Global attributes
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/spellcheck
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p><code><strong>spellcheck</strong></code> <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>은 요소의 맞춤법 검사 여부를 지정하는 열거형 특성입니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</div>

<p>가능한 값은 다음과 같습니다.</p>

<ul>
 <li><code>true</code>는 가능한 경우 요소의 맞춤법을 검사해야 함을 나타냅니다.</li>
 <li><code>false</code>는 요소의 맞춤법을 검사하지 않아야 함을 나타냅니다.</li>
</ul>

<div class="blockIndicator note">
<p><strong>참고:</strong> <code>spellcheck</code> 특성은 불리언이 아니고 열거형 특성이므로 <code>true</code> 또는 <code>false</code>를 반드시 지정해야 합니다. 즉, <code>&lt;textarea spellcheck&gt;&lt;/textarea&gt;</code>처럼은 사용할 수 없으며, <code>&lt;textarea spellcheck="true"&gt;&lt;/textarea&gt;</code>와 같이 사용해야 합니다.</p>
</div>

<p>특성을 지정하지 않았을 때의 기본값은 브라우저 및 요소에 따라 다릅니다. 또한, <code>spellcheck</code> 특성은 상속 대상이므로, 부모 요소의 값에도 영향을 받습니다.</p>

<p><code>spellcheck</code>는 권장사항에 불과하며, 브라우저가 맞춤법을 검사해야 할 의무는 없습니다. 보통 <code>spllcheck</code> 특성을 <code>true</code>로 지정하더라도, 요소를 편집할 수 없다면 맞춤법 검사를 하지 않습니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.global_attributes.spellcheck")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>모든 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>.</li>
</ul>
