---
title: '@counter-style'
slug: Web/CSS/@counter-style
tags:
  - At-rule
  - CSS
  - CSS Counter
  - CSS カウンター
  - Reference
  - counter
translation_of: Web/CSS/@counter-style
---
<p>{{CSSRef}}</p>

<p><strong><code>@counter-style</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/At-rule">@-規則</a>で、スタイルにあらかじめ設定されたものではないカウンターのスタイルを定義することができます。 <code>@counter-style</code> 規則はカウンターの値をどのように文字列表現に変換するかを定義します。</p>

<pre class="brush: css no-line-numbers notranslate">@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}

ul {
  list-style: thumbs;
}</pre>

<p>初期バージョンの CSS では、有用なカウンターのスタイルのセットを定義していました。しかし、年月が経つにつれて、あらかじめ定義されたセットに他のスタイルが追加され、世界中の記法のニーズを満たすにはこのシステムでは不十分になりました。 <code>@counter-style</code> @規則は、あらかじめ定義されたスタイルがニーズに合っていないときに独自のカウンタースタイルを定義できるようにすることで、この欠点を完全に解決します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Descriptors" name="Descriptors">記述子</h3>

<p>各 <code>@counter-style</code> は名前で識別され、記述子のセットを持ちます。</p>

<dl>
 <dt>{{cssxref("@counter-style/system", "system")}}</dt>
 <dd>カウンターの整数値を文字列表現に変換するために使用するアルゴリズムを指定します。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/negative", "negative")}}</dt>
 <dd>値が負の数の時に、カウンター表現の前又は後に追加する記号を指定します。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/prefix", "prefix")}}</dt>
 <dd>マーカー表現の前に追加する記号を指定します。接頭辞は表現の最終段階で追加されるため、カウンターの最終的な表現では、負号の前に来ます。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/suffix", "suffix")}}</dt>
 <dd>prefix 記述子と同様に、マーカー表現に追加される記号を指定します。接尾辞はマーカー表現の後に来ます。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/range", "range")}}</dt>
 <dd>カウンタースタイルが適用される値の範囲を定義します。カウンタースタイルが範囲を外れたカウンター値を表現するために使用されると、カウンタースタイルにはフォールバックスタイルが代用されます。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/pad", "pad")}}</dt>
 <dd>マーカー表現に最少文字数を適用する必要がある場合に使用されます。例えば、カウンターが 01 から始まって 02、03、04 のように進む場合は、パッド文字が使用されます。指定されたパッド値よりも長い文字数の場合は、マーカーは通常通りに構築されます。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/fallback", "fallback")}}</dt>
 <dd>指定したシステムでカウンター値の表現を構築できない場合や、カウンター値が指定された範囲の外にあった場合に、代わりに使用されるシステムを指定します。指定されたフォールバックも値の表現に失敗した場合は、フォールバックスタイルのフォールバックがあれば、それが使用されます。フォールバックシステムが記述されていない場合や、フォールバックシステムのチェーンがカウンター値を表現できなかった場合は、最終的に decimal スタイルにフォールバックされます。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/symbols", "symbols")}}</dt>
 <dd>マーカー表現に使用される記号を指定します。記号は文字列、画像、カスタム識別子を含むことができます。記号がマーカー表現を構築するためにどのように使用されるかは、 system 記述子で指定されたアルゴリズムによります。例えば、 system が fixed に指定されていた場合は、この記述子で N 個の記号が指定されていると、カウンターの最初の N 個の記号を表すために使用されます。記号のセットを使い切ると、リストの残りにはフォールバックスタイルが使用されます。<br>
 <br>
 以下の <code>@counter-style</code> 規則では、文字の記号ではなく画像を使用しています。画像の値に記号を使用するのは現在のところ「リスクのある」機能で、実装されているブラウザーはありません。
 <pre class="brush: css notranslate">@counter-style winners-list {
  system: fixed;
  symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
  suffix: " ";
}</pre>
 </dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/additive-symbols", "additive-symbols")}}</dt>
 <dd>symbols 記述子で指定された記号は、多くのアルゴリズムではマーカーを構築するために使用されますが、 'addaptive' などの一部のシステムではこの記述子の<em>加算的タプル</em>に依存します。それぞれの加算的タプルはカウンター記号と、非負の整数の重みによって成ります。加算的タプルは重みの降順で指定しなければなりません。</dd>
</dl>

<dl>
 <dt>{{cssxref("@counter-style/speak-as", "speak-as")}}</dt>
 <dd>読み上げソフトのような音声シンセサイザーで、カウンタースタイルを読み上げる方法を記述します。例えば、マーカー記号の値はこの記述子の値に応じて、順序付きリストでは数値やアルファベットとして、順序なしリストでは合図として読み上げられることがあります。</dd>
</dl>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Specifying_symbols_with_counter-style" name="Specifying_symbols_with_counter-style">counter-style で記号を設定</h3>

<pre class="brush: css notranslate">@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}</pre>

<p>上記のカウンタースタイル規則は、このようにリストに適用されます。</p>

<pre class="brush: css notranslate">.items {
  list-style: circled-alpha;
}
</pre>

<p>このようなリストを生み出します。</p>

<p>Ⓐ One<br>
 Ⓑ Two<br>
 Ⓒ Three<br>
 Ⓓ Four<br>
 Ⓔ FIve<br>
 ...<br>
 ...<br>
 Ⓨ Twenty Five<br>
 Ⓩ Twenty Six<br>
 27 Twenty Seven<br>
 28 Twenty Eight<br>
 29 Twenty Nine<br>
 30 Thirty</p>

<p>他の例は<a href="https://mdn.github.io/css-examples/counter-style-demo/">デモページ</a>をご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>仕様書</th>
   <th>状況</th>
   <th>備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Counter Styles', '#the-counter-style-rule', 'counter-style')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.at-rules.counter-style")}}</p>

<h3 id="Quantum_CSS_notes" name="Quantum_CSS_notes">Quantum CSS のメモ</h3>

<ul>
 <li>Gecko は <code>@counter-style</code> の <code>system</code> および <code>fallback</code> 記述子の値として <code>none</code> を許容していましたが、これは仕様書が無効な @ 規則として扱うべきとしています。 Firefox の新しいパラレル CSS エンジン (<a class="external external-icon" href="https://wiki.mozilla.org/Quantum">Quantum CSS</a> または <a class="external external-icon" href="https://wiki.mozilla.org/Quantum/Stylo">Stylo</a> とも呼ばれ、 Firefox 57 でリリース済み) ではこれを修正されました ({{bug(1377414)}})。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}</li>
 <li>無名のカウンタースタイルを作成する関数表記である {{cssxref("symbols", "symbols()")}}</li>
 <li>CSS の {{Cssxref("counter")}} および {{Cssxref("counters")}} 関数</li>
 <li><a href="https://mdn.github.io/css-examples/counter-style-demo/">カウンタースタイルのデモ</a> (<a href="https://github.com/mdn/css-examples/tree/master/counter-style-demo">コード</a>)</li>
</ul>
