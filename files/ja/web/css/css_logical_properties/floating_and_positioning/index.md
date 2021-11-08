---
title: 浮動と位置指定の論理的プロパティ
slug: Web/CSS/CSS_Logical_Properties/Floating_and_positioning
tags:
  - CSS
  - CSS 論理的プロパティ
  - Guide
  - ガイド
  - 位置指定
  - 浮動
translation_of: Web/CSS/CSS_Logical_Properties/Floating_and_positioning
---
<div>{{CSSRef}}</div>

<p class="summary"><ruby><a href="https://drafts.csswg.org/css-logical/">論理的プロパティと値仕様書</a><rp> (</rp><rt>Logical Properties and Values specification</rt><rp>) </rp></ruby>には、 {{cssxref("float")}} および {{cssxref("clear")}} の物理的な値の論理的な対応付けと、<a href="/ja/docs/Web/CSS/CSS_Positioning">位置指定レイアウト</a>で使用する位置指定プロパティを含んでいます。このガイドはこれらの使い方を見てみます。</p>

<h2 id="Mapped_properties_and_values" name="Mapped_properties_and_values">マッピングされるプロパティと値</h2>

<p>以下の表はこのガイドで物理的なマッピングに沿って議論されるプロパティや値を説明しています。水平方向の {{cssxref("writing-mode")}} は、左書きを想定しています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">論理的プロパティまたは値</th>
   <th scope="col">物理的プロパティまたは値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{cssxref("float")}}: inline-start</td>
   <td>{{cssxref("float")}}: left</td>
  </tr>
  <tr>
   <td>{{cssxref("float")}}: inline-end</td>
   <td>{{cssxref("float")}}: right</td>
  </tr>
  <tr>
   <td>{{cssxref("clear")}}: inline-start</td>
   <td>{{cssxref("clear")}}: left</td>
  </tr>
  <tr>
   <td>{{cssxref("clear")}}: inline-end</td>
   <td>{{cssxref("clear")}}: right</td>
  </tr>
  <tr>
   <td>{{cssxref("inset-inline-start")}}</td>
   <td>{{cssxref("left")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("inset-inline-end")}}</td>
   <td>{{cssxref("right")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("inset-block-start")}}</td>
   <td>{{cssxref("top")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("inset-block-end")}}</td>
   <td>{{cssxref("bottom")}}</td>
  </tr>
  <tr>
   <td>{{cssxref("text-align")}}: start</td>
   <td>{{cssxref("text-align")}}: left</td>
  </tr>
  <tr>
   <td>{{cssxref("text-align")}}: end</td>
   <td>{{cssxref("text-align")}}: right</td>
  </tr>
 </tbody>
</table>

<p>これらの対応付けられたプロパティに加えて、ブロック方向やインライン方向を示すことができる一括指定プロパティがいくつかあります。これらは {{cssxref("inset")}} プロパティを除いて物理的なプロパティに対応付けられていません。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">論理的プロパティ</th>
   <th scope="col">目的</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{cssxref("inset-inline")}}</td>
   <td>上記のインライン方向における両方の inset 値を同時に設定します。</td>
  </tr>
  <tr>
   <td>{{cssxref("inset-block")}}</td>
   <td>上記のブロック方向における両方の inset 値を同時に設定します。</td>
  </tr>
  <tr>
   <td>{{cssxref("inset")}}</td>
   <td>4つの inset 値をすべて同時に設定し、複数値の物理的な対応付けを行います。</td>
  </tr>
 </tbody>
</table>

<h2 id="Float_and_clear_example" name="Float_and_clear_example">浮動と解除の例</h2>

<p>{{cssxref("float")}} および {{cssxref("clear")}} プロパティで用いられる物理的な値 <code>left</code>, <code>right</code>, <code>both</code> です。論理的プロパティの仕様書は、 <code>inline-start</code> および <code>inline-end</code> の値を <code>left</code> および <code>right</code> に対応付けて定義しています。</p>

<p>下記の例では、二つのボックスがあります。 — 一つ目は <code>float: left</code> で、二つ目は <code>float: inline-start</code> で浮動させています。 <code>writing-mode</code> を <code>vertical-rl</code> に変更したり、 <code>direction</code> を <code>rtl</code> に変更したりすると、 left で浮動させたボックスは常に左にくっつきますが、 <code>inline-start</code> で浮動させたアイテムは <code>direction</code> や <code>writing-mode</code> に従います。</p>

<p>{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}</p>

<h2 id="Example_Inset_properties_for_positioned_layout" name="Example_Inset_properties_for_positioned_layout">例: 位置指定レイアウトにおける inset プロパティ</h2>

<p>一般的に位置指定では、要素を含むブロックに対して相対的に要素を配置することができます。基本的に、通常のフローに基づいてアイテムが配置された場所に対して相対的にアイテムを挿入します。これを行うために、歴史的には {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} の物理的なプロパティを使用してきました。</p>

<p>これらのプロパティは、長さまたはパーセント値を値として取り、ユーザーの画面寸法に関連します。</p>

<p>論理的プロパティの仕様書では、指定した書字方向におけるテキストの流れに関連した位置合わせを行いたい場合のために、新しいプロパティが作成されました。これらは {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, {{cssxref("inset-inline-end")}} になります。</p>

<p>以下の例では、 <code>inset-block-start</code> と <code>inset-inline-end</code> プロパティを使用して、青枠を灰色の点線で囲まれた領域 (<code>position: relative</code>) の内側に絶対位置を使用して配置しています 。 <code>writing-mode</code> プロパティを <code>vertical-rl</code> に変更するか、 <code>direction: rtl</code> を追加して、フロー相対ボックスがテキストの方向に従う様子を見てみましょう。</p>

<p>{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}</p>

<h2 id="New_two-_and_four-value_shorthands" name="New_two-_and_four-value_shorthands">新しい2または4値の一括指定</h2>

<p>仕様書の他のプロパティと同様に、いくつかの新しい一括指定プロパティがあり、一度に 2 つまたは 4 つの値を設定することができます。</p>

<ul>
 <li>{{cssxref("inset")}} — 物理的な対応付けを使用して四辺をすべて設定します。</li>
 <li>{{cssxref("inset-inline")}} — 論理的なインライン方向の内側の距離を両方設定します。</li>
 <li>{{cssxref("inset-block")}} — 論理的なブロック方向の内側の距離を両方設定します。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注</strong>: 論理的プロパティ仕様書をを実装しているブラウザーは、これまでのところ直接マッピングを実装しており、新しい一括指定は実装していません。詳細については、各プロパティページのリファレンスにあるブラウザーの互換性データの節を参照してください。</p>
</div>

<h2 id="Example_Logical_values_for_text-align" name="Example_Logical_values_for_text-align">例: text-align の論理値</h2>

<p>{{cssxref("text-align")}} プロパティは、テキストの方向に関連する論理値を持っています。 <code>left</code> と <code>right</code> に代わり、 <code>start</code> と <code>end</code> を使用することができます。以下の例では、最初のブロックで <code>text-align: right</code>、2番目のブロックで <code>text-align: end</code> を設定しています。</p>

<p><code>direction</code> の値を <code>rtl</code> に変更すると、最初のブロックでは配置が右に留まりますが、2番目のブロックでは論理的な末尾が左になることがわかります。</p>

<p>{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}</p>

<p>これは、物理的な方向ではなく、先頭と末尾を使用したボックス配置を使用した場合に、より一貫性のある方法で動作します。</p>
