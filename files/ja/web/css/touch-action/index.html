---
title: touch-action
slug: Web/CSS/touch-action
tags:
  - CSS
  - CSS Property
  - Pointer Events
  - Reference
  - 'recipe:css-property'
  - ポインターイベント
translation_of: Web/CSS/touch-action
---
<p>{{CSSRef}}</p>

<p>CSS の <strong><code>touch-action</code></strong> プロパティは、タッチ画面のユーザーが要素のある領域をどのように操作できるか (例えば、ブラウザー内に組み込まれたパンまたはズーム機能) を設定します。</p>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* グローバル値 */
touch-action: inherit;
touch-action: initial;
touch-action: unset;
</pre>

<p>既定で、パン (スクロール) およびピンチ操作はブラウザーとは独立して別に扱われます。{{domxref("Pointer_events", "ポインターイベント", "", 1)}}を使用するアプリケーションは、ブラウザーがタッチジェスチャーの扱いを始めるときに {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベントを受け取ります。ブラウザーがどのジェスチャーを扱うかについての具体的に定義することによって、アプリケーションはジェスチャーを記憶するために {{domxref("HTMLElement/pointermove_event", "pointermove")}} および {{domxref("HTMLElement/pointerup_event", "pointerup")}} リスナーの中で独自の振る舞いを提供することができます。{{domxref("Touch_events", "タッチイベント", "", 1)}}を使用するアプリケーションは、 {{domxref("Event.preventDefault","preventDefault()")}} を呼び出すことでブラウザーがジェスチャーを扱うのを無効にすることができますが、イベントリスナーが呼び出される前に、 <code>touch-action</code> を使用してブラウザーにアプリケーションの目的を知らせるようにもしてください。</p>

<p>ジェスチャーが開始されると、ブラウザーはタッチ要素の <code>touch-action</code> の値を、祖先のうちジェスチャーを実装しているもの (言い換えれば、最初のスクロールを含む要素) まで交差させます。つまり実際には、 <code>touch-action</code> は通常、その要素の子孫のいずれかに <code>touch-action</code> を明示的に指定する必要なく、独自の動作を持つ最上位の要素にのみ適用されます。</p>

<div class="blockIndicator note">
<p>ジェスチャーが開始された後、 <code>touch-action</code> の値を変更しても、現在のジェスチャーの動作には影響を与えません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>touch-action</code> プロパティは次の何れかの形で指定することができます。</p>

<ul>
 <li><code><a href="#auto">auto</a></code>, <code><a href="#none">none</a></code>, <code><a href="#manipulation">manipulation</a></code> のキーワードのうち一つと、<em>または</em></li>
 <li><code><a href="#pan-x">pan-x</a></code>, <code><a href="#pan-keywords">pan-left</a></code>, <code><a href="#pan-keywords">pan-right</a></code>, and/or one of the keywords <code><a href="#pan-y">pan-y</a></code>, <code><a href="#pan-keywords">pan-up</a></code>, <code><a href="#pan-keywords">pan-down</a></code>, のキーワードのうち一つと、加えて任意のキーワード <code><a href="#pinch-zoom">pinch-zoom</a></code>。</li>
</ul>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt id="auto"><code>auto</code></dt>
 <dd>ブラウザーがすべてのパンやズームのジェスチャーを扱うことを有効にします。</dd>
 <dt id="none"><code>none</code></dt>
 <dd>ブラウザーがすべてのパンやズームのジェスチャーを扱うことを無効にします。</dd>
 <dt id="pan-x"><code>pan-x</code></dt>
 <dd>指１本で水平にパンするジェスチャーを有効にします。 <strong>pan-y</strong>, <strong>pan-up</strong>, <strong>pan-down</strong>, <strong>pinch-zoom</strong> と組み合わせることができます。</dd>
 <dt id="pan-y"><code>pan-y</code></dt>
 <dd>指１本で垂直にパンするジェスチャーを有効にします。 <strong>pan-x</strong>, <strong>pan-left</strong>, <strong>pan-right</strong>, <strong>pinch-zoom</strong> と組み合わせることができます。</dd>
 <dt id="manipulation"><code>manipulation</code></dt>
 <dd>パンおよびズームのジェスチャーは有効にしますが、ダブルタップでのズームなど、標準外の追加的なジェスチャーを無効します。ダブルタップでズームすることを無効にすることで、ユーザーが画面をタップしたとき、ブラウザーが<strong>クリック</strong>イベントの生成を待つ必要がなくなります。これは "<strong>pan-x pan-y pinch-zoom</strong>" の別名です (互換性のために、これも有効です)。</dd>
</dl>

<dl>
 <dt id="pan-keywords"><code>pan-left</code>, <code>pan-right</code>, <code>pan-up</code>, <code>pan-down</code> {{experimental_inline}}</dt>
 <dd>指定された方向へのスクロールを始める指１本のジェスチャーを有効にします。スクロールが始まると、その方向が予約されることがあります。なお、「上」にスクロールすること (<strong>pan-up</strong>) は、ユーザーが画面の表面を指で下方向にドラッグすることを意味し、同様に <strong>pan-left</strong> はユーザーが指で右にドラッグすることを意味します。より単純な表現がない限り、複数の方向を組み合わせることができます (例えば、 "<strong>pan-left pan-right</strong>" は "<strong>pan-x</strong>" の方がより単純なので不正ですが、 "<strong>pan-left pan-down</strong>" 有効です)。</dd>
 <dt id="pinch-zoom"><code>pinch-zoom</code></dt>
 <dd>複数の指でのページのパンやズーム有効にします。これは <strong>pan-</strong> のあらゆる値と組み合わせることができます。</dd>
</dl>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p><code>touch-action: none;</code> の宣言は、ブラウザー内蔵のズーム機能を操作することを阻害することがあります。これは弱視の人がページのコンテンツを読んで理解できるようになることを阻害します。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN "WCAG を理解する ― ガイドライン 1.4 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html">Understanding Success Criterion 1.4.4 | Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="すべてのジェスチャーの無効化">すべてのジェスチャーの無効化</h3>

<p>最も一般的な使い方は、要素 (およびスクロールしないその子孫) のすべてのジェスチャーを無効にして、地図やゲームの画面のように、独自のドラッグやズームの振る舞いを提供することです。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div id="map"&gt;&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">#map {
  height: 400px;
  width: 400px;
  background: blue;
  touch-action: none;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Disabling_all_gestures')}}</p>

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
   <td>{{SpecName('Compat', '#touch-action', 'touch-action')}}</td>
   <td>{{Spec2('Compat')}}</td>
   <td><code>pinch-zoom</code> プロパティ値を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 3', '#the-touch-action-css-property', 'touch-action')}}</td>
   <td>{{Spec2('Pointer Events 3')}}</td>
   <td><code>pan-left</code>, <code>pan-right</code>, <code>pan-up</code>, <code>pan-down</code> プロパティ値を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2', '#the-touch-action-css-property', 'touch-action')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td>最新の勧告</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#the-touch-action-css-property', 'touch-action')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{compat("css.properties.touch-action")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Pointer_events","Pointer Events")}}</li>
 <li>WebKit Blog <a href="https://webkit.org/blog/5610/more-responsive-tapping-on-ios/" rel="bookmark" title="Permanent Link: More Responsive Tapping on iOS">More Responsive Tapping on iOS</a></li>
 <li>Google Developers Blog <a href="https://developers.google.com/web/updates/2017/01/scrolling-intervention">Making touch scrolling fast by default</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Scroll_Snap">スクロールスナップ</a></li>
</ul>
