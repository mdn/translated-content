---
title: <frame>
slug: Web/HTML/Element/frame
translation_of: Web/HTML/Element/frame
---
<div>{{Deprecated_header}}</div>

<h2 id="요약">요약</h2>

<p><code>&lt;frame&gt;</code>은 다른 HTML 문서가 표시될 수 있는 특정 영역을 정의하는 element이다. frame은 {{HTMLElement("frameset")}}내에서 사용되어야 한다.</p>

<p>&lt;frame&gt; element의 사용은 screen reader 사용자들의 접근성 부족과같은 기능문제같은 특정 단점 때문에 권장되지 않는다<br>
 &lt;frame&gt; element 대신에 {{HTMLElement("iframe")}} 가 아마 더 적합할것이다.</p>

<h2 id="속성(Attributes)">속성(=Attributes)</h2>

<p>다른 모든 HTML elments와 마찬가지로, &lt;frame&gt; element는 전역속성(<a href="/en-US/docs/HTML/Global_attributes" title="HTML/Global attributes">global attributes</a>)이 적용된다.</p>

<dl>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>이 속성은 frame으로 표시될 문서를 기입합니다.</dd>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>
 <p>이 속성은 프레임을 명명하는데 사용됩니다. 명명되지않은  모든 링크들은 그들이 속해있는 그 프레임 안에서 열릴것입니다</p>
 </dd>
 <dt> </dt>
 <dt>{{htmlattrdef("noresize")}}</dt>
 <dd>이 속성은 사용자가 프레임크기를 조정할수 없게합니다.</dd>
 <dt>{{htmlattrdef("scrolling")}}</dt>
 <dd><br>
 이 속성은 스크롤바의 유무를 결정합니다. 이 속성을 사용하지않으면 특정상황에서 자동으로 브라우져에 스크롤바가 생깁니다.<br>
 두가지를 선택할 수 있습니다. "yes"면 항상 스크롤바를 보여주고 "no"면 항상 스크롤바를 보여주지 않습니다.</dd>
 <dt>{{htmlattrdef("marginheight")}}</dt>
 <dd>이 속성은 프레임 사이의 여백 높이를 정의할때 사용됩니다.</dd>
 <dt>{{htmlattrdef("marginwidth")}}</dt>
 <dd>이 속성은 프레임 사이의 여백 넓이를 정의할때 사용됩니다.</dd>
 <dt>{{htmlattrdef("frameborder")}}</dt>
 <dd>이 속성을 사용하면 프레임에 대한 경계선을 넣을 수 있습니다.</dd>
</dl>

<h2 id="예시">예시</h2>

<pre class="brush: html">&lt;frameset cols="50%,50%"&gt;
  &lt;frame src="https://developer.mozilla.org/en/HTML/Element/iframe" /&gt;
  &lt;frame src="https://developer.mozilla.org/en/HTML/Element/frame" /&gt;
&lt;/frameset&gt;
</pre>

<h2 id="참조">참조</h2>

<ul>
 <li>{{HTMLElement("frameset")}}</li>
 <li>{{HTMLElement("iframe")}}</li>
</ul>

<p>{{HTMLRef}}</p>
