---
title: suffix
slug: Web/CSS/Reference/At-rules/@counter-style/suffix
original_slug: Web/CSS/@counter-style/suffix
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`suffix`** は {{cssxref("@counter-style")}} ルールの記述子で、マーカーの表現に追加されるものを指定します。

## 構文

```css
/* <symbol> 値: 文字列、画像、識別子 */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
```

### 値

**`suffix`** 記述子は、その値として単一の `<symbol>` を取ります。

- `<symbol>`
  - : マーカー表現に追加される `<symbol>` を指定します。 {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}} が指定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターの接尾辞を設定

#### HTML

```html
<ul class="choices">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>該当なし</li>
</ul>
```

#### CSS

```css
@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}
```

#### 結果

{{ EmbedLiveSample('カウンターの接尾辞を設定')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
