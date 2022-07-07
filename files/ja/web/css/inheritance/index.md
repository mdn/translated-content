---
title: 継承
slug: Web/CSS/inheritance
tags:
  - CSS
  - ガイド
  - 継承
  - レイアウト
  - ウェブ
translation_of: Web/CSS/inheritance
---
{{CSSRef}}

CSS において、**継承** (inheritance) はある要素のあるプロパティに値が指定されなかった場合の挙動を制御します。

CSS プロパティは 2 種類に分類することができます。

- **継承プロパティ**は、既定で親要素の[計算値](/ja/docs/Web/CSS/computed_value)に設定されるものです
- **非継承プロパティ**は、既定でそのプロパティの[初期値](/ja/docs/Web/CSS/initial_value)に設定されるものです

[いずれかの CSS プロパティ](/ja/docs/Web/CSS/Reference#keyword_index)の定義を参照して、それぞれのプロパティが既定値を継承するか ("継承: あり") しないか ("継承: なし") を確認してください。

## 継承プロパティ

要素の**継承プロパティ**に値が指定されなかった場合、要素はその親要素のプロパティの[計算値](/ja/docs/Web/CSS/computed_value)を取得します。文書のルート要素だけは、プロパティの概要で与えられた[初期値](/ja/docs/Web/CSS/initial_value)を取得します。

継承プロパティの一般例として {{ Cssxref("color") }} プロパティが挙げられます。次の様なスタイルルールを指定し、

```css
p { color: green; }
```

次の様にマークアップしたとします。

```html
<p>この段落には<em>強調されたテキスト</em>があります。</p>
```

「強調されたテキスト」という文字列は、 `em` 要素が `p` 要素から {{ Cssxref("color") }} プロパティの値を継承する為、プロパティの初期値 (※祖先要素の何れにも color プロパティが指定されていない場合に使用される文字色) ではなく、継承値の緑色となります。

## 非継承プロパティ

値を持たない**非継承プロパティ**が要素に指定された場合、要素はプロパティの[初期値](/ja/docs/Web/CSS/initial_value)（※各プロパティのページの「概要」の節に記されています）を取得します。

非継承プロパティの一般的な例としては {{ Cssxref("border") }} プロパティが挙げられます。次の様なスタイルルールを指定し、

```css
 p { border: medium solid; }
```

次の様にマークアップしたとします。

```html
  <p>この段落には<em>強調されたテキスト</em>があります。</p>
```

この場合、「強調されたテキスト」という文字列は ({{ Cssxref("border-style") }} の初期値が `none` であるため) 境界がありません。

## 注

{{ Cssxref("inherit") }} のキーワードで、明示的に継承することを指定することができます。これはこれは継承プロパティでも非継承プロパティでも動作します。

すべてのプロパティに値を適用する {{cssxref("all")}} 一括指定プロパティを使用することで、すべてのプロパティの継承を制御することができます。例えば、

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

これは、 {{cssxref("font")}} プロパティのスタイルを、ユーザーのスタイルシートがなければユーザーエージェントの既定値に、あればその値に戻します。それからフォントの寸法を倍にして、 {{cssxref("font-weight")}} に `"bold"` を適用します。

## 関連情報

- 継承を制御する CSS 値: {{ cssxref("inherit") }}, {{cssxref("initial")}}, {{cssxref("unset")}}, {{cssxref("revert")}}
- [CSS カスケード入門](/ja/docs/Web/CSS/Cascade)
- [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- {{ CSS_key_concepts() }}
