---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
translation_of: Web/API/Event/currentTarget
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("Event")}} 介面的唯讀屬性 <code><strong>currentTarget</strong></code> 會標明事件指向（current target）、還有該事件所遍歷的 DOM。屬性總會指向當時處理該事件的事件監聽器所註冊的 DOM 物件，而 {{domxref("event.target")}} 屬性則是永遠指向觸發事件的 DOM 物件。</p>

<h2 id="範例">範例</h2>

<p><code>event.currentTarget</code> 在把相同的事件監聽器，附加到多個元素時，會出現很有趣的事情：</p>

<pre class="brush: js">function hide(e){
  e.currentTarget.style.visibility = "hidden";
  // 在這個函式用於事件監聽器時： this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i &lt; ps.length; i++){
  ps[i].addEventListener('click', hide, false);
}

// 單擊四周的話 p 元素就會消失
</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("api.Event.currentTarget")}}</p>

<h2 id="參見">參見</h2>

<ul>
 <li><a href="/zh-TW/docs/Web/API/Event/Comparison_of_Event_Targets">事件指向的比較</a></li>
</ul>
