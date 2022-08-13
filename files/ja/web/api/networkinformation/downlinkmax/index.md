---
title: NetworkInformation.downlinkMax
slug: Web/API/NetworkInformation/downlinkMax
tags:
  - API
  - Experimental
  - Network Information API
  - NetworkInformation
  - Property
  - Read-only
  - Reference
translation_of: Web/API/NetworkInformation/downlinkMax
---
<p>{{APIRef("Network Information API")}}{{SeeCompatTable}}</p>

<p><strong><code>NetworkInformation.downlinkMax</code></strong> 読み取り専用プロパティは、メガビット毎秒（Mbps）単位で、基底の接続技術の最大下り速度を返します。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">var <em>max</em> = NetworkInformation.<em>downlinkMax</em></pre>

<h3 id="戻り値">戻り値</h3>

<ul>
 <li>メガビット毎秒（Mbps）単位で、基底の接続技術の最大下り速度を表す<code>無制限のdouble</code>。</li>
</ul>

<h2 id="例">例</h2>

<p>次の例は、<code>change</code> イベントで接続をモニターして、発生した変更をロギングしています。</p>

<pre class="brush: js"><code>function logConnectionType() {
  var connectionType = 'not supported';
  var downlinkMax = 'not supported';

  if ('connection' in navigator) {
    connectionType = navigator.connection.type;

    if ('downlinkMax' in navigator.connection) {
      downlinkMax = navigator.connection.downlinkMax;
    }
  }

  console.log('Current connection type: ' + connectionType +
    ' (downlink max: ' + downlinkMax + ')');
}

logConnectionType();
navigator.connection.addEventListener('change', logConnectionType);</code></pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Network Information', '#widl-NetworkInformation-downlinkMax', 'downlinkMax')}}</td>
   <td>{{Spec2('Network Information')}}</td>
   <td>最初の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.NetworkInformation.downlinkMax")}}</p>
