---
title: overflow
slug: Web/CSS/overflow
tags:
  - CSS
  - CSS プロパティ
  - CSS 基本ボックスモデル
  - Reference
  - overflow
  - クリッピング
  - スクロール
  - レイアウト
translation_of: Web/CSS/overflow
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <code>overflow</code> プロパティは、要素の内容が多すぎて<a href="/ja/docs/CSS/block_formatting_context">ブロック整形コンテキスト</a>に収まらない場合にどうするかを設定します。これは {{cssxref("overflow-x")}} および {{cssxref("overflow-y")}} の<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定</a>です。</p>

<div>{{EmbedInteractiveExample("pages/css/overflow.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>選択肢としては、クリッピング、スクロールバーの表示、コンテナーの外側にはみ出して周囲の領域に表示するものがあります。</p>

<p>値を (既定値の) <code>visible</code> 以外の値に指定すると、新たな<a href="/ja/docs/CSS/block_formatting_context">ブロック整形コンテキスト</a>を生成します。これは技術的な理由で必要なものです。そうでなければ、もしスクロールする要素に浮動要素が交差している時、スクロールするごとに強制的に折り返し処理をやり直すことになり、スクロール操作が遅くなる原因になるからです。</p>

<p><code>overflow</code> の効果を得るには、ブロックレベルコンテナーに高さ (<code>height</code> または <code>max-height</code>) を設定するか、 <code>white-space</code> を <code>nowrap</code> に設定することが必要です。</p>

<div class="note">
<p><strong>メモ</strong>: 一方の軸を<code>visible</code> (既定値) に設定して、もう一方を<em>他の</em>値に設定すると、 <code>visible</code> は <code>auto</code> として動作する結果になります。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: JavaScript の {{domxref("Element.scrollTop")}} プロパティは、 <code>overflow</code> が <code>hidden</code> に設定されている場合でも HTML 要素をスクロールさせるために使うことができます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* キーワード値 */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* グローバル値 */
overflow: inherit;
overflow: initial;
overflow: unset;
</pre>

<p><code>overflow</code> プロパティは、以下の値の一覧のうち一つまたは二つのキーワードで指定します。二つのキーワードが指定された場合、最初の値が <code>overflow-x</code> で、二つ目の値が <code>overflow-y</code> になります。それ以外の場合、 <code>overflow-x</code> および <code>overflow-y</code> は同じ値に設定されます。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>内容はクリッピングされず、パディングボックスの外側に表示されることがあります。</dd>
 <dt><code>hidden</code></dt>
 <dd>内容は、必要に応じてパディングボックスに合わせて切り取られます。スクロールバーは表示されず、ユーザーがスクロールできるようにするための対応 (ドラッグやスクロールホイールによる方法) もありません。内容はプログラム的に (例えば、 {{domxref("HTMLElement.offsetLeft", "offsetLeft")}} のようなプロパティの値を設定する方法などで) スクロールすることが<em>できます</em>ので、要素はスクロールコンテナーになります。</dd>
 <dt><code>clip</code></dt>
 <dd><code>hidden</code> と同様に、コンテンツは要素のパディングボックスに合わせて切り取られます。 <code>clip</code> と <code>hidden</code> の違いは、 <code>clip</code> キーワードがプログラム的なスクロールも含め、すべてのスクロールを禁止することです。ボックスはスクロールコンテナーにはならず、新しい整形コンテキストを始めることもありません。新しい整形コンテキストを始めたいのであれば、 {{cssxref("display", "display: flow-root", "#flow-root")}} を使用して実現することができます。</dd>
 <dt><code>scroll</code></dt>
 <dd>内容は、必要に応じてパディングボックスに合わせて切り取られます。コンテンツが変化したときに、スクロールバーが現れたり消えたりするのを防ぐため、ブラウザーは内容がクリッピングされるかどうかに関わらず、スクロールバーを常に表示します。プリンターはあふれた部分の内容を印刷する可能性があります。</dd>
 <dt><code>auto</code></dt>
 <dd>{{Glossary("user agent", "ユーザーエージェント")}}に依存します。内容がパディングボックス内に収まる場合は <code>visible</code> と同じように表示されますが、新しいブロック整形コンテキストを生成します。デスクトップブラウザーは内容があふれる場合、スクロールバーを表示します。</dd>
</dl>

<dl>
 <dt><code>overlay</code> {{deprecated_inline}}</dt>
 <dd><code>auto</code> と同じ動作をしますが、場所を取る代わりに内容の先頭にスクロールバーを表示します。 WebKit ベース (例えば Safari) 及び Blink ベース (例えば Chrome 又は Opera) のブラウザーでのみ対応しています。</dd>
</dl>

<h4 id="Mozilla_extensions" name="Mozilla_extensions">Mozilla 拡張</h4>

<dl>
 <dt><code>-moz-scrollbars-none</code> {{obsolete_inline}}<a href="#Deprecated">[1]</a></dt>
 <dd>代わりに <code>overflow:hidden</code> を使ってください。</dd>
 <dt><code>-moz-scrollbars-horizontal</code> {{deprecated_inline}}<a href="#Deprecated">[1]</a></dt>
 <dd>{{Cssxref("overflow-x")}} および {{Cssxref("overflow-y")}} を使用してください。</dd>
 <dt><code>-moz-scrollbars-vertical</code> {{deprecated_inline}}<a href="#Deprecated">[1]</a></dt>
 <dd>{{Cssxref("overflow-x")}} および {{Cssxref("overflow-y")}} を使用してください</dd>
 <dt><code>-moz-hidden-unscrollable</code> {{non-standard_inline}}</dt>
 <dd>内部使用、テーマ向けです。 XML のルート要素と <code>&lt;html&gt;</code>、 <code>&lt;body&gt;</code> が、矢印キーとマウスホイールでスクロールすることを禁止します。</dd>
</dl>

<p id="Deprecated">[1] Firefox 63 において、この機能は機能設定に隠されています。 about:config の中で <code>layout.css.overflow.moz-scrollbars.enabled</code> を <code>true</code> に設定してください。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css">p {
  width: 12em;
  height: 6em;
  border: dotted;
  overflow: visible; /* content is not clipped */
}
</pre>

<p style="overflow: visible; display: inline-block; width: 12em; height: 6em; border: dotted;"><code>visible</code> (既定)<br>
 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

<pre class="brush: css">p { overflow: hidden; /* スクロールバー表示なし */ }
</pre>

<p style="overflow: hidden; display: inline-block; width: 12em; height: 6em; border: dotted;"><code>overflow: hidden</code><br>
 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

<pre class="brush: css">p { overflow: scroll; /* 常にスクロールバーを表示 */ }
</pre>

<p style="overflow: scroll; display: inline-block; width: 12em; height: 6em; border: dotted;"><code>overflow: scroll</code><br>
 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

<pre class="brush: css">p { overflow: auto; /* 必要に応じてスクロールバーを追加 */ }
</pre>

<p style="overflow: auto; display: inline-block; width: 12em; height: 6em; border: dotted;"><code>overflow: auto</code><br>
 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

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
   <td>{{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS3 Overflow')}}</td>
   <td>
    <p>キーワードを一つだけではなく一つまたは二つで利用できるように構文を変更</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Box', '#propdef-overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS3 Box')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.overflow")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連 CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}</li>
</ul>
