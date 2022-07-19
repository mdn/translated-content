---
title: Worklet.addModule()
slug: Web/API/Worklet/addModule
translation_of: Web/API/Worklet/addModule
---
<div>{{APIRef("Worklets")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("Worklet")}} インタフェースで定義される <code><strong>addModule()</strong></code> メソッドを利用することで、指定したJavaScript ファイルで定義されるモジュールを <code>Worklet</code> にロードできます。</span></p>

<h2 id="記法">記法</h2>

<pre class="syntaxbox"><em>addPromise</em> = <em>worklet</em>.addModule(<em>moduleURL</em>);
<em>addPromise =</em> <em>worklet</em>.addModule(<em>moduleURL</em>, <em>options</em>);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>moduleURL</code></dt>
 <dd>追加するモジュールが定義されている JavaScript ファイルのURLを表す {{jsxref("String")}}。</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>次のオプションを指定するためのオブジェクト:
 <ul>
  <li><code>credentials</code>: {{domxref("RequestCredentials")}} に指定するモジュールのロードに必要な クレデンシャル情報 (例: cookies や HTTP 認証)。 <code>"omit"</code>、<code>"same-origin"</code>、 <code>"include"</code>のいずれかの値を指定します。デフォルト値は<code>"same-origin"</code>となっています。詳しくは {{domxref("Request.credentials")}} を参照してください。</li>
 </ul>
 </dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>{{jsxref("Promise")}} オブジェクトが帰ります。このオブジェクトは、URLで指定されたモジュールがロードできた場合に受理状態になります。またコールバック関数は何の引数も与えられず呼び出されます。</p>

<h2 id="使用例">使用例</h2>

<pre class="brush:js, highlight:[3,4,5]">const audioCtx = new AudioContext();
const audioWorklet = audioCtx.audioWorklet;
await audioWorklet.addModule('modules/bypassFilter.js', {
  credentials: 'omit',
});
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Worklets', '#dom-worklet-addmodule', 'addModule()')}}</td>
   <td>{{Spec2('Worklets')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.Worklet.addModule")}}</p>
