---
title: アクセシビリティのためのメディアクエリの使用
slug: Web/CSS/Media_queries/Using_Media_Queries_for_Accessibility
tags:
  - '@media'
  - CSS
  - アクセシビリティ
  - アニメーション
  - メディア特性
translation_of: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
---
<p><strong>メディアクエリ</strong>は、障碍を持ったユーザーがウェブサイトをより理解することを支援するためにも利用することができます。</p>

<h2 id="Reduced_Motion" name="Reduced_Motion">動きの縮減</h2>

<p>点滅やフラッシュのアニメーションは、注意欠陥障害 (ADHD) のような認知障害を持った人々にとって問題になる可能性があります。加えて、特定の種類の動きが前庭障害、てんかん、片頭痛、スコピック感受性などを引き起こす可能性があります。</p>

<p>また、この方法でユーザー設定によってアニメーションの停止を切り替えると、バッテリーが少ない、または性能が低い携帯電話やコンピューターを使用しているユーザーにも便益があります。</p>

<h3 id="構文">構文</h3>

<dl>
 <dt><code><dfn>no-preference</dfn></code></dt>
 <dd>システムが把握している設定をユーザーが行っていないことを示します。</dd>
 <dt><code><dfn>reduce</dfn></code></dt>
 <dd>ユーザーがシステムに、動作やアニメーションを最小量にして、必要以外の動作を削除したほうが好ましいと通知したことを示します。</dd>
</dl>

<h3 id="Example">Example</h3>

<p>この例は、アクセシビリティ設定で動きを抑制するよう設定しないと煩いアニメーションが表示されます。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="animation"&gt;animated box&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.animation {
  -webkit-animation: vibrate 0.3s linear infinite both;
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
</pre>

<h2 id="High_Contrast_Mode" name="High_Contrast_Mode">高コントラストモード</h2>

<div>{{CSSRef}}{{Non-standard_header}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong>-ms-high-contrast</strong> <a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">メディア特性</a>は <a href="/ja/docs/Web/CSS/Microsoft_CSS_extensions">Microsoft 拡張</a>で、アプリケーションが高コントラストモードで表示されているかどうか、どの配色で表示されているかを記述します。</p>

<p>これは弱視やコントラストに敏感な問題を抱えるユーザーだけでなく、直射日光下のコンピューターや携帯電話で作業をしているユーザーにも役立ちます。</p>

<h3 id="Syntax_2" name="Syntax_2">構文</h3>

<p><strong><code>-ms-high-contrast</code></strong> メディア特性は、以下の値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>active</code></dt>
 <dd>
 <p>配下の整形規則は、システムが任意の配色の高コントラストモードの時に適用されることを示します。</p>
 </dd>
 <dt><code>black-on-white</code></dt>
 <dd>
 <p>配下の整形規則は、システムが白地に黒の高コントラストモードの時に適用されることを示します。</p>
 </dd>
 <dt><code>white-on-black</code></dt>
 <dd>
 <p>配下の整形規則は、システムが黒地に白の高コントラストモードの時に適用されることを示します。</p>
 </dd>
</dl>

<h3 id="Example_2" name="Example_2">例</h3>

<p>以下の宣言は、それぞれ任意の配色、白地に黒、黒地に白の高コントラストモードで表示されているアプリケーションに一致します。</p>

<pre class="brush: css">@media screen and (-ms-high-contrast: active) {
  /* すべての高コントラストの整形規則 */
}
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
</pre>
