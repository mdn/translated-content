---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - CSS データ型
  - Reference
  - フィルター効果
translation_of: Web/CSS/filter-function
---
<div>{{cssref}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <code><strong>&lt;filter-function&gt;</strong></code> <a href="/ja/docs/Web/CSS/CSS_Types">データ型</a>は、入力された画像の表示方法を変更することができるグラフィカル効果を表します。これは {{cssxref("filter")}} 及び {{cssxref("backdrop-filter")}} プロパティで使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>&lt;filter-function&gt;</code> データ型は以下の一覧にあるフィルター関数を使用して指定されます。それぞれの関数には引数が必要であり、無効な場合は、フィルターが適用されません。</p>

<dl>
 <dt>{{cssxref("filter-function/blur", "blur()")}}</dt>
 <dd>画像をぼかします。</dd>
 <dt>{{cssxref("filter-function/brightness", "brightness()")}}</dt>
 <dd>画像を明るくしたり暗くしたりします。</dd>
 <dt>{{cssxref("filter-function/contrast", "contrast()")}}</dt>
 <dd>画像のコントラストを上げたり下げたりします。</dd>
 <dt>{{cssxref("filter-function/drop-shadow", "drop-shadow()")}}</dt>
 <dd>画像の背後にドロップシャドウを適用します。</dd>
 <dt>{{cssxref("filter-function/grayscale", "grayscale()")}}</dt>
 <dd>画像をグレイスケールに変換します。</dd>
 <dt>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}}​​​​​​​</dt>
 <dd>画像の色相を全体的に変更します。</dd>
 <dt>{{cssxref("filter-function/invert", "invert()")}}</dt>
 <dd>画像の色を反転させます。</dd>
 <dt>{{cssxref("filter-function/opacity", "opacity()")}}</dt>
 <dd>画像を半透明にします。</dd>
 <dt>{{cssxref("filter-function/saturate", "saturate()")}}</dt>
 <dd>入力画像の彩度を上げたり下げたりします。</dd>
 <dt>{{cssxref("filter-function/sepia", "sepia()")}}</dt>
 <dd>画像をセピア調に変換します。</dd>
</dl>

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
   <td>{{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }}</td>
   <td>{{ Spec2('Filters 1.0') }}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このデータ型を使用するプロパティ: {{cssxref("filter")}} 及び {{cssxref("backdrop-filter")}}</li>
</ul>
