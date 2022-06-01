---
title: 計算値
slug: Web/CSS/computed_value
tags:
  - CSS
  - ガイド
  - リファレンス
translation_of: Web/CSS/computed_value
---
{{CSSRef}}

**計算値** (computed value) は [CSS](/ja/docs/Web/CSS) プロパティにおいて、継承の過程で親から子へと伝えられる値です。これは[指定値](/ja/docs/Web/CSS/specified_value)から計算されます。

1.  特殊な値である {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("unset")}}, {{cssxref("revert")}} を扱います。
2.  プロパティの概要の「計算値」に記載された値に達するのに必要な計算を行います。

プロパティの計算値に達するのに必要な計算は、一般に (`em` の単位やパーセントなどの) 相対値を絶対値に変換する計算を含みます。例えば、ある要素に `font-size: 16px` と `padding-top: 2em` が指定された場合、 `padding-top` の計算値は `32px` (フォントサイズの倍) になります。

しかしながら、いくつかのプロパティ (`width`, `margin-right`, `text-indent`, `top` など、レイアウトの定義に必要ものに対する割合が相対的なもの) でパーセント値で指定された値はパーセント値で計算された値に変わります。さらに、 `line-height` に指定された単位なしの値は、指定された計算値になります。これらの計算値に残った相対的な値は、[使用値](/ja/docs/Web/CSS/used_value)が定義された場合、絶対値になります。

> **Note:** DOM の {{domxref("Window.getComputedStyle", "getComputedStyle()")}} API は[解決値](/ja/docs/Web/CSS/resolved_value)を返しますが、これはプロパティによって[計算値](/ja/docs/Web/CSS/computed_value)であるか[使用値](/ja/docs/Web/CSS/used_value)であるかが変わります。

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
      <td>
        {{SpecName("CSS2.2", "cascade.html#computed-value", "computed-value")}}
      </td>
      <td>{{Spec2("CSS2.2")}}</td>
      <td>変更なし</td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS2.1", "cascade.html#computed-value", "computed value")}}
      </td>
      <td>{{Spec2("CSS2.1")}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

## 関連情報

- {{domxref("window.getComputedStyle")}}
- {{CSS_key_concepts}}
