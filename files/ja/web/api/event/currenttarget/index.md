---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
tags:
  - API
  - DOM
  - Gecko
  - NeedsBrowserCompatibility
  - Property
translation_of: Web/API/Event/currentTarget
---
{{APIRef("DOM")}}

イベントは DOM を横断するので、イベントの現在のターゲットを識別します。イベントが発生した要素を特定する `event.target` とは対照的に、常にイベントハンドラがアタッチされた要素を参照します。

<h2 id="例">例</h2>

`event.currentTarget` は、同じイベントハンドラを複数の要素にアタッチしているときに使用すると興味深いです。

<pre class="brush: js">function hide(e){
  e.currentTarget.style.visibility = "hidden";
  // この関数がイベントハンドラとして使用されるとき： this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i &lt; ps.length; i++){
  ps[i].addEventListener('click', hide, false);
}

// 周辺をクリックすると段落が消えます。
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様</th>
   <th>状態</th>
   <th>コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-Event-currentTarget", "Event.currentTarget")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

{{Compat("api.Event.currentTarget")}}

<h2 id="関連項目">関連項目</h2>

<a href="/ja/docs/Web/API/Event/Comparison_of_Event_Targets">Comparison of Event Targets</a>
