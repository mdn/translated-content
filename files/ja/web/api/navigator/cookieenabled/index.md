---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
tags:
  - API
  - HTML DOM
  - Navigator
  - Property
  - プロパティ
translation_of: Web/API/Navigator/cookieEnabled
---
<div>{{ApiRef("HTML DOM")}}</div>

<p><span class="seoSummary"><code>navigator.cookieEnabled</code> は、クッキーが有効かどうかを示す Boolean 値を返します。</span>このプロパティは読み取り専用です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">var cookieEnabled = navigator.cookieEnabled;
</pre>

<ul>
 <li><code>cookieEnabled</code> は <a href="/ja/docs/Glossary/Boolean">Boolean</a> で、 <code>true</code> または <code>false</code> のいずれかです。</li>
</ul>

<div class="note"><strong>注:</strong> ブラウザーがサードパーティのクッキーをブロックするように構成されていた場合で、 <code>navigator.cookieEnabled</code> がサードパーティの iframe の中で呼び出された場合、 Safari, Edge Spartan, IE では <code>true</code> を返します (この場合にクッキーを設定しようとしても失敗するにもかかわらず)。 Firefox および Chromium ベースのブラウザーでは <code>false</code> を返します。</div>

<div class="note"><strong>注:</strong> ウェブブラウザーは特定の場面で特定のクッキーを書き込むことを阻止することがあります。例えば、 Chrome 80 以降では <code><a href="/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite">SameSite=None</a></code> 属性の付いたクッキーを作成することを許可しませんが、 <a href="https://www.chromestatus.com/feature/5633521622188032">HTTPS 上で生成され <code>Secure</code> 属性がある場合は例外です。</a></div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">if (!navigator.cookieEnabled) {
  // The browser does not support or is blocking cookies from being set.
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName("HTML WHATWG", "webappapis.html#dom-navigator-cookieenabled", "Navigator.cookieEnabled")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.cookieEnabled")}}</p>
