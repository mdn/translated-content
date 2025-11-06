---
title: fallback
slug: Web/CSS/Reference/At-rules/@counter-style/fallback
original_slug: Web/CSS/@counter-style/fallback
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`fallback`** は {{cssxref("@counter-style")}} アットルールの記述子で、現在のカウンタースタイルが特定のカウンター値でマーカー表現を生成できなかった場合に、代替で使用されるカウンタースタイルを指定するために使用します。

## 構文

```css
/* キーワード値 */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## 値

この記述子は、単一の `<counter-style-name>` をその値として取ります。

- [`<counter-style-name>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
  - : 代替として使用するカウンタースタイルの名前を提供します。これは、大文字と小文字を区別する独自の CSS カウンタースタイル（引用符は不要）の `<custom-ident>`、または大文字と小文字を区別しない {{cssxref("list-style-type")}} プロパティの値（`decimal`、`disc` といった具合に）のどちらかです。

省略した場合、カウンターの代替は既定で `decimal` です。

## 解説

カウンタースタイルの記述子として指定された `fallback` の値が、カウンタースタイルに指定された {{cssxref('@counter-style/range', 'range')}} 記述子に使用されます。`fallback` スタイルは、範囲外にあるすべての値を表すために使用されます。`fallback` スタイルは、`fixed` の {{cssxref('@counter-style/system', 'system')}} が使用され、すべてのリストアイテムをカバーするのに十分な記号がない場合にも使用されます。`fallback` スタイルは、固定システムの範囲を超えるすべての値を表すために使用されます。これらの場合、および定義されたカウンターが特定のカウンター値を作成できないその他の場合、`fallback` スタイルが使用されます。

指定された代替スタイルも表現を構築できない場合、その代替カウンターの `fallback` 値が使用されます。その代替スタイルの代替も表現を構築できない場合、その代替の代替が使用されます。この代替は、カウンター表現を構築できる代替が見つかるまで続きます。代替 `fallback` 値が表現を構築できない場合（代替スタイルに `fallback` 値が設定されていない場合、または `fallback` 値が指定されていないか、または不正な場合）、`fallback` は既定で `decimal` になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターの代替スタイルの指定

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style fallback-example {
  system: fixed;
  symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}

.list {
  list-style: fallback-example;
}
```

#### 結果

{{ EmbedLiveSample('カウンターの代替スタイルの指定') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
