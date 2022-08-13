---
title: Gamepad.index
slug: Web/API/Gamepad/index
tags:
  - API
  - Gamepad
  - Gamepad API
  - Index
  - ゲーム
  - プロパティ
  - リファレンス
translation_of: Web/API/Gamepad/index
---
<div>{{APIRef("Gamepad API")}}</div>

<p>{{domxref("Gamepad") }} インターフェイスの <code><strong>Gamepad.index</strong></code> プロパティは、現在システムに接続されているそれぞれの機器の整数の固有番号 (自動更新) の整数を返します。</p>

<p>これは複数のコントローラーを識別するために使用することができます。接続が解除された後で再接続されたゲームパッドは、同じ番号を保持します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><span class="idlInterface" id="idl-def-Gamepad"><span class="idlAttribute">readonly    attribute <span class="idlAttrType">long</span>                <span class="idlAttrName">index</span>;</span></span></pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">window.addEventListener("gamepadconnected", function() {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ".";
});</pre>

<h3 id="Value" name="Value">値</h3>

<p>A {{jsxref("number") }}.</p>

<h2 id="Speicifications" name="Speicifications">仕様書</h2>

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
   <td>{{SpecName("Gamepad", "#widl-Gamepad-index", "Gamepad.index")}}</td>
   <td>{{Spec2("Gamepad")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Gamepad.index")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<p><a href="/ja/docs/Web/Guide/API/Gamepad">Gamepad API の利用</a></p>
