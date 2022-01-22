---
title: 'Feature-Policy: battery'
slug: Web/HTTP/Headers/Feature-Policy/battery
translation_of: Web/HTTP/Headers/Feature-Policy/battery
---
{{HTTPSidebar}}{{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `battery` ディレクティブは、現在の文書で {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} で得られる {{DOMxRef("BatteryManager")}} インターフェイスによって、端末のバッテリに関する情報の収集を許可するかどうかを制御します。

## 構文

<pre class="notranslate">Feature-Policy: battery &lt;allowlist&gt;;</pre>

 <dt>&lt;allowlist&gt;</dt>
 <dd>{{page("/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}}</dd>

## 既定のポリシー

既定値は `'self'` です。

## 仕様書

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Feature Policy")}}</td>
   <td>{{Spec2("Feature Policy")}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName("Battery API","#feature-policy-integration","Feature Policy integration")}}</td>
   <td>{{Spec2("Battery API")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("http.headers.Feature-Policy.battery")}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Battery Status API](/ja/docs/Web/API/Battery_Status_API)
- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- {{DOMxRef("BatteryManager")}}
