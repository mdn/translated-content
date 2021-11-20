---
title: Cross-Origin Resource Policy (CORP)
slug: Web/HTTP/Cross-Origin_Resource_Policy_(CORP)
tags:
  - HTTP
  - Reference
  - Security
translation_of: Web/HTTP/Cross-Origin_Resource_Policy_(CORP)
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><strong>クロスオリジンリソースポリシー</strong>は {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーによって設定されるポリシーで、ウェブサイトやアプリケーションが他のオリジンから (<code>&lt;script&gt;</code> や <code>&lt;img&gt;</code> などの要素を使用して発行された) 特定のリクエストに対する保護をオプトインすることで、 <a href="https://ja.wikipedia.org/wiki/Spectre">Spectre</a> のような投機的なサイドチャネル攻撃や、クロスサイトスクリプトインクルージョン攻撃を緩和することができます。</p>

<p class="summary">CORP は既定で {{Glossary("same-origin policy")}} を超えた保護の追加レイヤーです。クロスオリジンリソースポリシーは、既定でクロスオリジンの読み込みを保護するメカニズムである、 <a href="https://fetch.spec.whatwg.org/#corb">クロスオリジンリードブロッキング</a> (CORB)を補完します。</p>

<div class="blockIndicator note">
<p>このポリシーは、既定で CORS セーフリストメソッド／ヘッダーに対して発行される、<a href="https://fetch.spec.whatwg.org/#concept-request-mode"><samp>no-cors</samp></a> リクエストに対してのみ有効です。</p>
</div>

<p>このポリシーは<em><a href="/ja/docs/Glossary/Response_header">レスポンスヘッダー</a></em>を介して表現されるため、実際のリクエストは防止されません。むしろ、ブラウザーは応答本文を削除することで<em>結果</em>が漏洩するのを防ぎます。</p>

<h2 id="History" name="History">歴史</h2>

<p>コンセプトは 2012 年に（<samp>From-Origin</samp>として）元々提案されましたが、2018 年の Q2 に<a href="https://github.com/whatwg/fetch/issues/687">再提案されて</a> Safari と Chromium に実装されました。</p>

<p>2018年の前半に、<em>Meltdown</em> と <em>Spectre</em> として知られる 2 つのサイドチャネルハードウェア脆弱性が公表されました。パフォーマンスを改善するために設計された投機的実行機能の一部として生じた競合状態により、これらの脆弱性は機密性の高いデータを漏洩することができます。</p>

<p>これを受けて Chromium は <a href="https://fetch.spec.whatwg.org/#corb">Cross-Origin Read Blocking</a> を実装しました。これにより、クロスオリジンの読み込みに対してリソース（<samp>Content-Type</samp> が HTML、JSON、XML）を自動的に保護します。アプリケーションが <a href="/ja/docs/Web/HTTP/Headers/X-Content-Type-Options"><code>no-sniff</code> ディレクティブ</a>を渡していない場合、Chromium は <samp>Content-Type</samp> を推測しようと試みて、とにかく保護を適用します。</p>

<p>クロスオリジンリソースポリシーは<em>どのような</em>リソースでも保護することができるオプトインのレスポンスヘッダーです。ブラウザーが MIME タイプを嗅ぎ分ける必要はありません。</p>

<h2 id="Usage" name="Usage">使用方法</h2>

<div class="note">
<p><strong>注意:</strong> <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1074261">Chrome のバグ</a>が原因で、クロスオリジンリソースポリシーが PDF の描画を破壊し、訪問者が PDF の 1 ページ目以降を読めない可能性があります。本番環境ではこのヘッダーの仕様には注意してください。</p>
</div>

<p>ウェブアプリケーションは、次の 3 つの値の中から 1 つ受け取ることができる {{HTTPHeader("Cross-Origin-Resource-Policy")}} の HTTP レスポンスヘッダーを介してクロスオリジンリソースポリシーを設定します。</p>

<dl>
 <dt>same-site</dt>
 <dd>
 <p>同じ <em>{{Glossary("Site")}}</em> からのリクエストのみリソースを読み込めます。</p>

 <div class="blockIndicator warning">
 <p><strong>警告:</strong> これは{{Glossary("origin", "オリジン")}}よりも安全性が低いものです。<a href="https://html.spec.whatwg.org/multipage/origin.html#same-site">2つのオリジンが同じサイトであるかどうかをチェックするアルゴリズム</a>は HTML 標準で定義されており、<em>登録可能なドメイン</em>をチェックします。</p>
 </div>
 </dd>
 <dt>same-origin</dt>
 <dd>同じ <em>{{Glossary("origin")}}</em> (すなわち、スキーマ + ホスト + ポート) からのリクエストのみリソースを読み込めます。</dd>
 <dt>cross-origin</dt>
 <dd>いかなる <em>{{Glossary("origin")}}</em> (same-site と cross-site 両方) からのリクエストでもリソースを読み込めます。</dd>
</dl>

<pre class="notranslate">Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin</pre>

<p>クロスオリジンリソースポリシーチェックの際に、ヘッダーが設定されている場合、ブラウザーは異なるオリジンやサイトから発行された <code>no-cors</code> リクエストを拒否します。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Cross-Origin-Resource-Policy")}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Fetch", '#cross-origin-resource-policy-header')}}</td>
   <td>{{Spec2("Fetch", '#cross-origin-resource-policy-header')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP Header</li>
 <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1459573">Bugzilla bug 1459573</a></li>
</ul>
