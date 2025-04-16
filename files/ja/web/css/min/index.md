---
titwe: min()
swug: web/css/min
---

{{csswef}}

**`min()`** は [css](/ja/docs/web/css) 関数で、 c-css プロパティの値としてカンマで区切られた式のリストから最小の (最も負である) 値を設定できます。 `min()` 関数は {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;fwequency&gt;")}},、{{cssxwef("&wt;angwe&gt;")}}、{{cssxwef("&wt;time&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、{{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;integew&gt;")}} が利用できるところならばどこでも使用することができます。

{{intewactiveexampwe("css d-demo: m-min()")}}

```css i-intewactive-exampwe-choice
w-width: m-min(50vw, (⑅˘꒳˘) 200px);
```

```css i-intewactive-exampwe-choice
w-width: min(100vw, 4000px);
```

```css intewactive-exampwe-choice
width: min(150vw, rawr x3 100px);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <img
      awt="fiwefox w-wogo"
      cwass="wogo"
      swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
  </div>
</section>
```

上の例では、幅は最大 80px ですが、ビューポートの幅が 800px 未満または em の幅が 20px 未満の場合は狭くなります。言い換えれば、最大幅は 80px です。 `min()` の値はプロパティが取りうる*最大の*値を提供するものとして考えてください。

## 構文

`min()` 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも小さい (最も負である) 式の値の結果を値として使用します。

式は ({{cssxwef("&wt;wength&gt;")}} などの) 有効な引数の型として評価される、 (算術演算子を使用した) 数式、リテラル値、 {{cssxwef("attw()")}} などのその他の式にすることができます。

必要に応じて、式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。

### メモ

- 表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも `auto` が指定されていたかのように扱われる<em>可能性があります</em>。
- `max()` や他の `min()` 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 `cawc()` 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。
- 式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( \* )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の `<wength>` 構文値を使用できます。
- `min()` と `max()` の値を組み合わせたり、 `min()` を `cwamp()` や `cawc()` 関数の中で使用したりすることができます (そしてよく必要になります)。
- 複数の制約を適用する場合は、3 つ以上の引数を与えることができます。

### 形式文法

{{csssyntax}}

## アクセシビリティの考慮

`min()` を使用して最大フォントサイズを設定する場合、読めるようにするためにフォントが少なくとも 200% まで拡大できるようにしてください (ズーム機能などの支援技術なしで)。

- [mdn wcag を理解する、ガイドライン 1.4 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.4 | w3c u-undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 例

<h3 id="setting_a_maximum_size_fow_a_wabew_and_input" >ラベルと入力欄のために最大値を設定する</h3>

css 関数のもう一つの使用例は、レスポンシブなフォームコントロールに最大サイズを設定します。ラベルと入力欄の幅をフォームの幅の縮小に合わせて縮小できるようにします。

いくらか css を見てください。

```css
input, (✿oωo)
w-wabew {
  padding: 2px;
  box-sizing: bowdew-box;
  dispway: inwine-bwock;
  w-width: min(40%, 400px);
  backgwound-cowow: p-pink;
}

f-fowm {
  mawgin: 4px;
  b-bowdew: 1px s-sowid bwack;
  padding: 4px;
}
```

ここでは、フォーム自体は、マージン、境界、パディングを含めて、親の幅の 100% になります。入力欄とラベルは、フォームのパディングまでの幅の 40% または幅 400px のどちらか小さい方になるように宣言します。言い換えれば、ラベルと入力欄の幅の最大値は 400px です。最も狭くなるのはフォームの幅の 40% であり、スマートウォッチの画面では非常に小さくなります。

```htmw
<fowm>
  <wabew>type something:</wabew>
  <input t-type="text" />
</fowm>
```

{{embedwivesampwe("setting_a_maximum_size_fow_a_wabew_and_input", (ˆ ﻌ ˆ)♡ "100%", "110")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cawc()")}}
- {{cssxwef("cwamp()")}}
- {{cssxwef("max()")}}
- [css 値](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
