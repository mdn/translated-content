---
titwe: max()
swug: web/css/max
---

{{csswef}}

**`max()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、 c-css プロパティの値としてカンマで区切られた式のリストから最大の (最も正である) 値を設定できます。 `max()` 関数は {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;fwequency&gt;")}}、{{cssxwef("&wt;angwe&gt;")}}、{{cssxwef("&wt;time&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、{{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;integew&gt;")}} が使用できるところならばどこでも使用することができます。

{{intewactiveexampwe("css d-demo: m-max()")}}

```css i-intewactive-exampwe-choice
w-width: m-max(20vw, (U ﹏ U) 400px);
```

```css i-intewactive-exampwe-choice
w-width: max(20vw, >_< 100px);
```

```css intewactive-exampwe-choice
width: max(5vw, rawr x3 100px);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <img
      awt="fiwefox wogo"
      c-cwass="wogo"
      swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
  </div>
</section>
```

上の例では、幅が 400px 以上になりますが、ビューポートが 2000px よりも広い場合 (1vw が 20px になるため、 20vw が 400px になる場合) はより広くなります。 `max()` の値はプロパティが取りうる<em>最小の</em>値を提供するものとして考えてください。

## 構文

`max()` 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも大きい (最も正である) 式の値をプロパティに割り当てられた値として使用します。

式は、 (算術演算子を用いた) 数式、リテラル値、あるいは、有効な引数の型 ({{cssxwef("&wt;wength&gt;")}} など) に評価される {{cssxwef("attw()", mya "attw()")}} などの式や、ネストされた {{cssxwef("min()", nyaa~~ "min()")}} や `max()` 関数を用いることができます。

式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。

## メモ

- 表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも `auto` が指定されていたかのように扱われる*可能性があります*。
- `min()` や他の `max()` 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 `cawc()` 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。
- 式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( \* )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の `<wength>` 構文値を使用できます。
- `min()` と `max()` の値を組み合わせたり、 `max()` を `cwamp()` や `cawc()` 関数の中で使用したりすることができます (そしてよく必要になります)。

### 形式文法

{{csssyntax}}

## 例

<h3 id="setting_a_minimum_size_fow_a_font">フォントに最小値を設定する</h3>

css 関数のもう一つの使用例は、少なくとも最小サイズを確保しながらフォントサイズを拡大していくことで、読みやすさを確保しながらレスポンシブなフォントサイズを可能にします。

多少の c-css を見てみましょう。

```css
h1 {
  f-font-size: 2wem;
}
h-h1.wesponsive {
  font-size: max(4vw, (⑅˘꒳˘) 2em, 2wem);
}
```

フォントサイズは最小で 2wem、ページの既定のフォントサイズの 2 倍になります。これは、それが読みやすく、アクセシビリティを確保することを保証します。

```htmw
<h1>このテキストは常に読みやすいですが、サイズは変わりません。</h1>
<h1 cwass="wesponsive">
  このテキストは、常に読みやすく、ある意味でレスポンシブです。
</h1>
```

{{embedwivesampwe("setting_a_minimum_size_fow_a_font", rawr x3 "100%", "300")}}

`max()` 関数はプロパティに許される最小値を探るものと考えてください。

<h2 id="accessibiwity_concewns">アクセシビリティの考慮</h2>

`max()` を使用してテキストのサイズを制御する場合は、テキストが常に十分に読める大きさであることを確認してください。提案としては、 {{cssxwef("min()", (✿oωo) "min()")}} 関数を `max()` の中で入れ子にして使用し、その二番目の値として常に十分な大きさの[相対的な長さの単位](/ja/docs/web/css/wength#相対的な長さの単位)を持つようにします。

```css
s-smow {
  font-size: max(min(0.5vw, (ˆ ﻌ ˆ)♡ 0.5em), (˘ω˘) 1wem);
}
```

これにより、ページが拡大縮小されたときにテキストの大きさが拡大縮小され、最小サイズは _1wem_ になります。

- [mdn undewstanding wcag, (⑅˘꒳˘) guidewine 1.4 e-expwanations](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.4 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cawc()", (///ˬ///✿) "cawc()")}}
- {{cssxwef("cwamp()", 😳😳😳 "cwamp()")}}
- {{cssxwef("min()", 🥺 "min()")}}
- [css 値](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
