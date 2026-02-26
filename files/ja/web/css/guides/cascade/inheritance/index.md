---
title: 継承
slug: Web/CSS/Guides/Cascade/Inheritance
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

CSS において、**継承** (inheritance) はある要素のあるプロパティに値が指定されなかった場合の挙動を制御します。

CSS プロパティは 2 種類に分類することができます。

- **継承プロパティ**は、既定で親要素の[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)に設定されるものです
- **非継承プロパティ**は、既定でそのプロパティの[初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)に設定されるものです

[いずれかの CSS プロパティ](/ja/docs/Web/CSS/Reference#keyword_index)の定義を参照して、それぞれのプロパティが既定値を継承するか ("継承: あり") しないか ("継承: なし") を確認してください。

## 継承プロパティ

要素の**継承プロパティ**に値が指定されなかった場合、要素はその親要素のプロパティの[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)を取得します。文書のルート要素だけは、プロパティの概要で与えられた[初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)を取得します。

継承プロパティの一般例として {{cssxref("color")}} プロパティが挙げられます。以下のスタイルルールとマークアップを考えてみましょう。

```css
p {
  color: green;
}
```

```html
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

{{EmbedLiveSample("Inherited properties","",40)}}

「強調されたテキスト」という文字列は、 `em` 要素が `p` 要素から {{cssxref("color")}} プロパティの値を継承する為、プロパティの初期値（※祖先要素のいずれにも color プロパティが指定されていない場合に使用される文字色）ではなく、継承値の緑色となります。

## 非継承プロパティ

値を持たない**非継承プロパティ**が要素に指定された場合、要素はプロパティの[初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)（プロパティのページの「概要」の節に記されています）を取得します。

非継承プロパティの一般的な例としては {{ Cssxref("border") }} プロパティが挙げられます。以下のスタイルルールとマークアップを考えてみましょう。

```css
p {
  border: medium solid;
}
```

```html
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

{{EmbedLiveSample("Non-inherited properties","",40)}}

この場合、「強調されたテキスト」という文字列には ({{ Cssxref("border-style") }} の初期値が `none` であるため) 境界線がありません。

## メモ

{{cssxref("inherit")}} のキーワードで、明示的に継承することを指定することができます。これはこれは継承プロパティでも非継承プロパティでも動作します。

すべてのプロパティに値を適用する {{cssxref("all")}} 一括指定プロパティを使用することで、すべてのプロパティの継承を制御することができます。例えば、

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

これは、{{cssxref("font")}} プロパティのスタイルを、ユーザーのスタイルシートがなければユーザーエージェントの既定値に、あればその値に戻します。それからフォントの寸法を倍にして、{{cssxref("font-weight")}} に `"bold"` を適用します。

### 継承のオーバーライドの一例

前回の {{cssxref("border")}} を使用した例で、 `inherit` で継承を明示的に設定すると次のようになります。

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

{{EmbedLiveSample("Overriding inheritance, an example","",40)}}

「強調されたテキスト」という単語の周りに別の境界線ができます。

## 仕様書

{{Specifications}}

## 関連情報

- 継承を制御する CSS 値: {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("unset")}}
- [CSS カスケードと継承](/ja/docs/Web/CSS/Guides/Cascade)モジュール
- [CSS のエラー処理](/ja/docs/Web/CSS/Guides/Syntax/Error_handling)
- [CSS カスケード入門](/ja/docs/Web/CSS/Guides/Cascade/Introduction)
- [学習: 競合の処理](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [学習: カスケードレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS 構文入門: 宣言、ルールセット、文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
- [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
- 値: [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)、[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)、[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)、[実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
- [値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュール
