---
title: pointer
slug: Web/CSS/@media/pointer
tags:
  - '@media'
  - CSS
  - メディアクエリ
  - メディア特性
  - リファレンス
translation_of: Web/CSS/@media/pointer
---
<div>{{cssref}}</div>

<p><a href="/ja/docs/CSS">CSS</a> の <strong><code>pointer</code></strong> <a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>は、ユーザーが（マウスなどの）ポインティングデバイスを持っているか、もしそうならば、<em>主要な</em>ポインティングデバイスにどれだけの正確性があるかを調べます。</p>

<div class="note">
<p><strong>メモ:</strong> <em>すべての</em>ポインティングデバイスの正確性を調べたい場合は、代わりに <code><a href="/ja/docs/Web/CSS/@media/any-pointer">any-pointer</a></code> を使用してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>pointer</code> 特性は、以下の一覧の中から一つのキーワード値で指定します。</p>

<dl>
 <dt><code>none</code></dt>
 <dd>主要な入力メカニズムに、ポインティングデバイスがありません。</dd>
 <dt><code>coarse</code></dt>
 <dd>主要な入力メカニズムにポインティングデバイスがありますが、その正確性が限定されています。</dd>
 <dt><code>fine</code></dt>
 <dd>主要な入力メカニズムにポインティングデバイスがあり、正確性も高いです。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>次の例は、主要なポインティングデバイスの正確性によって、チェックボックスの大きさを変更しています。正確性が高い場合は小さく、低い場合は大きくなります。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input id="test" type="checkbox" /&gt;
&lt;label for="test"&gt;Look at me!&lt;/label&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

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
   <td>{{SpecName('CSS4 Media Queries', '#pointer', 'pointer')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.at-rules.media.pointer")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/@media/any-pointer"><code>any-pointer</code> メディア特性</a></li>
</ul>
