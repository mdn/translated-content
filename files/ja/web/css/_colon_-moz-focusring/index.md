---
title: ':-moz-focusring'
slug: 'Web/CSS/:-moz-focusring'
tags:
  - CSS
  - 'CSS:Mozilla Extensions'
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
translation_of: 'Web/CSS/:-moz-focusring'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

[CSS](/ja/docs/Web/CSS) の <strong>`:-moz-focusring`</strong> [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、 {{cssxref(":focus")}} 擬似クラスに似た [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)ですが、現在フォーカスが当たっていて、<em>かつ</em>フォーカスリングやその他のインジケーターがその周りに描かれる場合のみ一致します。

<div class="blockIndicator note">
<strong>重要</strong>: このセレクターは CSS Selectors 4 仕様で {{cssxref(":focus-visible")}} に改名されました。
</div>

`:-moz-focusring` に一致すると `:focus` にも一致しますが、逆は常に成り立つとは限りません。{{glossary("user agent", "ユーザーエージェント")}}がフォーカスリングの描画を有効にしているかどうか、どのようにして要素にフォーカスが当たったかによります。ユーザーエージェントがフォーカスリングの描画を有効にしているかどうかは、オペレーティングシステムの設定やその他の要因によりますので、この擬似クラスの詳細な動きはプラットフォームごとに異なります。

作業グループは以前、[この機能を CSS Selectors 4 または 5 で](https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html) `:focus-ring` として追加する意向を持っており、[改名が決定され](https://lists.w3.org/Archives/Public/www-style/2017Dec/0018.html) {{cssxref(":focus-visible")}} となり、 CSS Selectors 4 に追加されました。

<div class="note">
<strong>注</strong>: 開発者は `:-moz-focusring` を、 `focus` 状態がユーザーによる<strong>マウスのクリック</strong>と<strong>キーボードのタブ移動</strong>のどちらで行なわれたのかを区別するために使う傾向があります。これは[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)を作成し、振る舞いに応じてスタイルを変更したい場合にも便利かもしれません。
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">:-moz-focusring</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;input /&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">input {
  margin: 5px;
}

:-moz-focusring {
  color: red;
  outline: 2px dotted green;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

{{EmbedLiveSample('Example')}}

<h2 id="Specifications" name="Specifications">仕様書</h2>

どの仕様にも含まれていません。

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.selectors.-moz-focusring")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref(":focus-visible")}}</li>
 <li>{{bug("418521")}}</li>
</ul>
