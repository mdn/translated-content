---
title: Document.readyState
slug: Web/API/Document/readyState
translation_of: Web/API/Document/readyState
---
<div>{{APIRef("DOM")}}{{gecko_minversion_header("1.9.2")}}</div>

<p><strong><code>Document.readyState</code></strong> 속성을 통해  {{domxref("document")}}의 로딩 상태를 확인할 수 있다.</p>

<p>Document.readyState 속성 값이 바뀔 때 {{event("readystatechange")}} 이벤트가 {{domxref("document")}}에서 일어난다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <var>string</var> = <var>document</var>.readyState;
</pre>

<h3 id="Values">Values</h3>

<p><code><font face="Arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">document의 </span></font>readyState</code> 상태는 아래 3가지가 될 수 있다.</p>

<dl>
 <dt><code>loading</code></dt>
 <dd> {{domxref("document")}} 로딩 중.</dd>
 <dt><code>interactive</code></dt>
 <dd>문서의 로딩은 끝이 나고 해석 중 이지만  images, stylesheets, frames과 같은 하위 자원들은 로딩되고 있는 상태이다.</dd>
 <dt><code>complete</code></dt>
 <dd>문서와 모든 하위 자원들의 로드가 완료된 상태이다. 이 상태는 {{event("load")}}  이벤트가 발생되기 직전 상태이다.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Different_states_of_readiness">Different states of readiness</h3>

<pre class="brush: js">switch (document.readyState) {
  case "loading":
    // The document is still loading.
    break;
  case "interactive":
    // The document has finished loading. We can now access the DOM elements.
    // But sub-resources such as images, stylesheets and frames are still loading.
    var span = document.createElement("span");
    span.textContent = "A &lt;span&gt; element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // The page is fully loaded.
    console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
</pre>

<h3 id="readystatechange_as_an_alternative_to_DOMContentLoaded_event">readystatechange as an alternative to DOMContentLoaded event</h3>

<pre class="brush: js">// Alternative to DOMContentLoaded event
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    initApplication();
  }
}
</pre>

<h3 id="readystatechange_as_an_alternative_to_load_event">readystatechange as an alternative to load event</h3>

<pre class="brush: js">// Alternative to load event
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    initApplication();
  }
}</pre>

<h3 id="readystatechange_as_event_listener_to_insert_or_modify_the_DOM_before_DOMContentLoaded">readystatechange as event listener to insert or modify the DOM before DOMContentLoaded</h3>

<pre class="brush: js">document.addEventListener('readystatechange', event =&gt; {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat("api.Document.readyState")}}</div>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{event("readystatechange")}} event</li>
 <li>{{event("DOMContentLoaded")}} event</li>
 <li>{{event("load")}} event</li>
</ul>
