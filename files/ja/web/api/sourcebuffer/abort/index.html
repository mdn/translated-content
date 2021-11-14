---
title: SourceBuffer.abort()
slug: Web/API/SourceBuffer/abort
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - Video
  - abort
translation_of: Web/API/SourceBuffer/abort
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("SourceBuffer")}} インターフェイスの <strong><code>abort()</code></strong> メソッドは、現在のセグメントを打ち切り、セグメントパーサーをリセットします。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>sourceBuffer</em>.abort();
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref('undefined')}}。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>親メディアソースの {{domxref("MediaSource.readyState")}} プロパティが <code>open</code> と等しくないか、この <code>SourceBuffer</code> が {{domxref("MediaSource")}} から取り除かれています。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p><code>abort()</code> の仕様の説明はやや混乱します。 例えば、パーサーの状態のリセット（<a href="http://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state">reset parser state</a>）のステップ1を検討してください。 MSE API は完全に非同期ですが、この手順は同期（ブロッキング）操作を示唆しているように見えますが、これは意味がありません。</p>

<p>つまり、現在の実装は、ソースバッファで発生している現在の追加（またはその他）操作を停止し、すぐに操作を再開したい特定の状況で役立ちます。 例えば、次のコードを検討してください。</p>

<pre class="brush: js">sourceBuffer.addEventListener('updateend', function (_) {
  ...
});

sourceBuffer.appendBuffer(buf);</pre>

<p><code>appendBuffer</code> の呼び出し後、<code>updateend</code> イベントが発生する前（つまり、バッファは追加されているが、操作はまだ完了していない）に、ユーザーが新しいポイントを探して動画を「スクラブ」するとします。 この場合、ソースバッファで <code>abort()</code> を手動で呼び出して現在のバッファのデコードを停止し、動画の現在の新しい位置に関連する新しく要求されたセグメントを取得して追加します。</p>

<p>Nick Desaulnier の <a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html">bufferWhenNeeded デモ</a>で同様の動作を確認できます。 <a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L48">48行目では、イベントリスナーが再生中の動画に追加され</a>、<code>seek()</code> という関数が <code>seeking</code> イベントが発生したときに実行されます。 <a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L92-L101">行92〜101では、seek() 関数が定義されています</a>。 ここで、{{domxref("MediaSource.readyState")}} が <code>open</code> に設定されている場合、<code>abort()</code> が呼び出されることに注意してください。 つまり、新しいソースバッファを受信する準備ができていることを意味します。 この時点で、現在のセグメントを打ち切り、新しいシーク位置のセグメントを取得するだけの価値があります（<code><a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L78-L90">checkBuffer()</a></code> および <code><a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L103-L105">getCurrentSegment()</a></code> を参照）。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-abort()', 'abort()')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBuffer.abort")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>
