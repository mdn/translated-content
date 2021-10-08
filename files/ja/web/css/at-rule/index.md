---
title: '@-規則'
slug: Web/CSS/At-rule
tags:
  - '@-規則'
  - '@規則'
  - CSS
  - CSS リファレンス
  - Reference
  - アット規則
translation_of: Web/CSS/At-rule
---
<div>{{cssref}}</div>

<p><span class="seoSummary"><strong>@-規則</strong> は <a href="/ja/docs/Web/CSS/Syntax#CSS_statements">CSS 文</a> の一つで、 CSS の振舞いを規定します。 @-規則は、アットマーク、 '<code>@</code>' (<code>U+0040 COMMERCIAL AT</code>) で始まり、それに続く識別子から、次のセミコロン、 ';' (<code>U+003B SEMICOLON</code>) もしくは次の <a href="/ja/docs/Web/CSS/Syntax#CSS_declarations_blocks">CSS ブロック</a>のどちらかが現れるまでの部分からなります。</span></p>

<pre class="brush: css notranslate">/* 一般的な構造 */
@IDENTIFIER (RULE);

/* 例: ブラウザーに UTF-8 文字セットを使用することを知らせる */
@charset "utf-8";</pre>

<p>@-規則は何種類かあり、識別子で区別され、それぞれに異なる構文が使用されます:</p>

<ul>
 <li>{{cssxref("@charset")}} — スタイルシートで使用される文字セットを定義します。</li>
 <li>{{cssxref("@import")}} — 外部のスタイルシートを読み込むよう CSS エンジンに指示します。</li>
 <li>{{cssxref("@namespace")}} — CSS エンジンに、内容のすべてに XML 名前空間の接頭辞がついていると見なすよう指示します。</li>
 <li><strong><em>入れ子状の @-規則</em></strong> — 入れ子になった文のサブセットになります。スタイルシートの文としてだけではなく、条件付きグループ規則の内部で使用されます:
  <ul>
   <li>{{cssxref("@media")}} — <em>メディアクエリ</em>の条件を満たすデバイスで読み込まれた場合にこれの中身が適用される、条件付きグループ規則です。</li>
   <li>{{cssxref("@supports")}} — ブラウザーが指定の条件を満たす場合にこれの中身が適用される、条件付きグループ規則です。</li>
   <li>{{cssxref("@document")}} {{experimental_inline}} — このスタイルシートが適用される文書が、与えられた条件を満たす場合に、これの中身が適用される条件付きグループ規則です。<em>(CSS Level 4 仕様に先送り)</em></li>
   <li>{{cssxref("@page")}} — 文書印刷の際に適用されるレイアウト変更に関する指定を記述します。</li>
   <li>{{cssxref("@font-face")}} — ダウンロードすべき外部フォントに関する指定を記述します。</li>
   <li>{{cssxref("@keyframes")}} — CSS アニメーションシーケンスの中間ステップに関する指定を記述します。</li>
   <li>{{cssxref("@viewport")}} {{experimental_inline}} — 小さな画面のデバイス用に、ビューポートに関する指定を記述します。<em>(現在は Working Draft 段階)</em></li>
   <li>{{cssxref("@counter-style")}} — 定義済みのスタイルにはない、独自のカウンタースタイルを定義します。<em>(勧告候補段階ですが、現時点で Gecko しか実装していません)</em></li>
   <li>{{cssxref("@font-feature-values")}} (および <code>@swash</code>, <code>@ornaments</code>, <code>@annotation</code>, <code>@stylistic</code>, <code>@styleset</code>, <code>@character-variant</code>)<br>
    — OpenType の各機能を有効化するために、 {{cssxref("font-variant-alternates")}} の一般名を定義します。<em>(勧告候補段階ですが、現時点で Gecko しか実装していません)</em></li>
  </ul>
 </li>
</ul>

<h2 id="Conditional_group_rules" name="Conditional_group_rules">条件付きグループ規則</h2>

<p>プロパティの値のように、各 @-規則は異なる構文を持ちます。しかし、いくつかの @-規則は <strong>条件付きグループ規則</strong>という特別なカテゴリに分類されます。条件付きグループ規則の文は、構文が共通していて、どれも入れ子の文を持つことができ、ここには普通のルールセットはもちろん、さらに入れ子の @-規則を含める事ができます。さらに言えば、それらはすべて共通の意味あいがあります。 — 全ては常に<strong>真</strong>か<strong>偽</strong>と判定される何らかの条件と結びついています。条件が<strong>真</strong>であれば、条件付きグループ規則内の文全部が適用されます。</p>

<p>条件付きグループ規則は <a href="http://dev.w3.org/csswg/css3-conditional/">CSS Conditionals Level 3</a> で定義されており、以下の規則があります。</p>

<ul>
 <li>{{cssxref("@media")}}</li>
 <li>{{cssxref("@supports")}}</li>
 <li>{{cssxref("@document")}} <em>(CSS Level 4 仕様に先送り)</em></li>
</ul>

<p>条件付きグループは、入れ子状の文を持ち、いくつでも入れ子にすることができます。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Conditional')}}</td>
   <td>{{Spec2('CSS3 Conditional')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('Compat', '#css-at-rules', 'CSS At-rules')}}</td>
   <td>{{Spec2('Compat')}}</td>
   <td><code>@-webkit-keyframes</code> を標準化</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSS_key_concepts}}</li>
</ul>
