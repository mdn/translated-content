---
title: '-webkit-touch-callout'
slug: Web/CSS/-webkit-touch-callout
tags:
  - CSS
  - CSS プロパティ
  - Non-standard
  - Reference
  - WebKit 拡張
  - 'recipe:css-property'
  - リファレンス
  - レイアウト
  - 標準外
translation_of: Web/CSS/-webkit-touch-callout
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <code>-webkit-touch-callout</code> プロパティは、対象を長押しすることで現れるコールアウト表示を制御します。</p>

<p>iOS 上で対象が長押しされたとき、 Safari はそのリンクに関する情報をコールアウトで表示します。このプロパティはそういった挙動を無効にすることを可能にします。</p>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* グローバル値 */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: unset;</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>default</code></dt>
 <dd>既定のコールアウトが表示されます。</dd>
 <dt><code>none</code></dt>
 <dd>コールアウト表示が無効になります。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">.example {
  -webkit-touch-callout: none;
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>どの仕様書でも定義されていません。</p>

<p>Apple は <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout">Safari CSS リファレンス</a> に説明を載せています。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.-webkit-touch-callout")}}</p>
