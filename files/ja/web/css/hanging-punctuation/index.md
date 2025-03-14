---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
l10n:
  sourceCommit: c2ef352178529c5b7c7f58819cf7f8baa1aa6b55
---

{{CSSRef}}

**`hanging-punctuation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、区切り記号をテキストの行頭や行末にぶら下げるべきかどうかを指定します。ぶら下げられる区切り記号は行ボックスの外側に配置されれることがあります。

## 構文

```css
/* キーワード値 */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: allow-end;

/* 2 つのキーワード */
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last allow-end;

/* 3 つのキーワード */
hanging-punctuation: first allow-end last;

/* グローバル値 */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: revert;
hanging-punctuation: revert-layer;
hanging-punctuation: unset;
```

`hanging-punctuation` プロパティは 1 つ、2 つ、3 つの値を空白で区切った値で指定することができます。

### 値

- `none`
  - : 文字のぶら下げを行いません。
- `first`

  - : 要素の最初の書式設定された行頭にある、開き括弧または引用符をぶら下げます。次のものが適用されます。

    - Unicode の [Ps](https://unicodeplus.com/category/Ps)、[Pf](https://unicodeplus.com/category/Pf)、[Pi](https://unicodeplus.com/category/Pi) カテゴリーに含まれるすべての文字
    - 引用符 `U+0027` APOSTROPHE (`'`) 及び `U+0022` QUOTATION MARK (`"`)。

- `last`
  - : 要素の最後の書式設定された行末にある、閉じ括弧または引用符をぶら下げます。次のものが適用されます。
    - Unicode の [Ps](https://unicodeplus.com/category/Ps)、[Pf](https://unicodeplus.com/category/Pf)、[Pi](https://unicodeplus.com/category/Pi) カテゴリーに含まれるすべての文字
    - 引用符 `U+0027` APOSTROPHE (`'`) 及び `U+0022` QUOTATION MARK (`"`)。
- `allow-end`
  - : 句読点をぶら下げないと行末が揃わない場合に、句読点をぶら下げます。

ぶら下げることができる区切り文字や句読点には、次のものがあります。

- `U+002C`, COMMA
- `U+002E`, FULL STOP
- `U+060C`, ARABIC COMMA
- `U+06D4`, ARABIC FULL STOP
- `U+3001`, IDEOGRAPHIC COMMA
- `U+3002`, IDEOGRAPHIC FULL STOP
- `U+FF0C`, FULLWIDTH COMMA
- `U+FF0E`, FULLWIDTH FULL STOP
- `U+FE50`, SMALL COMMA
- `U+FE51`, SMALL IDEOGRAPHIC COMMA
- `U+FE52`, SMALL FULL STOP
- `U+FF61`, HALFWIDTH IDEOGRAPHIC FULL STOP
- `U+FF64`, HALFWIDTH IDEOGRAPHIC COMMA

ユーザーエージェントによってはそれ以外の文字があるかもしれません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 開始と終了の引用符をぶら下げるよう設定

#### HTML

```html live-sample___setting_opening_and_closing_quotes_to_hang
<p>
  «For a moment, nothing happened. Then, after a second or so, nothing continued
  to happen.»
</p>

<p class="hanging">
  «For a moment, nothing happened. Then, after a second or so, nothing continued
  to happen.»
</p>

<p class="hanging right">
  «For a moment, nothing happened. Then, after a second or so, nothing continued
  to happen.»
</p>
```

#### CSS

```css live-sample___setting_opening_and_closing_quotes_to_hang
p {
  width: 15em;
  border: 1px solid #cccccc;
  font-size: 2rem;
  font-style: italic;
  margin: 1em;
}

p.hanging {
  hanging-punctuation: first last;
}

p.right {
  text-align: right;
}
```

#### 結果

{{EmbedLiveSample("Setting_opening_and_closing_quotes_to_hang", "", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('text-indent')}}
- [CSS Tricks: Hanging punctuation](https://css-tricks.com/almanac/properties/h/hanging-punctuation/)
