---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
---

{{CSSRef}}

**`hanging-punctuation`** は [CSS](/ja/docs/Web/CSS) のプロパティで、区切り記号をテキストの行頭や行末にぶら下げるべきかどうかを指定します。ぶら下げられる区切り記号は行ボックスの外側に配置されれることがあります。

```css
/* キーワード値 */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* 2 つのキーワード */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* 3 つのキーワード */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* グローバル値 */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: revert;
hanging-punctuation: unset;
```

## 構文

`hanging-punctuation` プロパティは 1 つ、2 つ、3 つの値で指定することができます。

- **値 1 つ**の構文は、下記の値リストのキーワード値のいずれか 1 つを使用します。
- **値 2 つ**の構文は、次のうち 1 つを使用します。

  - `first` と併せて、`last`, `allow-end`, `force-end` のいずれか
  - `last` と併せて、`first`, `allow-end`, `force-end` のいずれか

- **値 3 つ**の構文は、次のうち 1 つを使用します。

  - `first`, `allow-end`, `last`
  - `first`, `force-end`, `last`

### 値

- `none`
  - : 文字のぶら下げを行いません。
- `first`
  - : 要素の最初の書式設定された行頭にある、開き括弧または引用符をぶら下げます。
- `last`
  - : 要素の最後の書式設定された行末にある、閉じ括弧または引用符をぶら下げます。
- `force-end`
  - : 行末の句読点をぶら下げます。
- `allow-end`
  - : 句読点をぶら下げないと行末が揃わない場合に、句読点をぶら下げます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_opening_and_closing_quotes_to_hang">開始と終了の引用符をぶら下げるよう設定</h3>

#### HTML

```html
<p>
  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim
  nunc mauris, et sollicitudin est scelerisque sed. Praesent laoreet tortor
  massa, sit amet vulputate nulla pharetra ut.”
</p>
```

#### CSS

```css
p {
  hanging-punctuation: first last;
  margin: 0.5rem;
}
```

#### 結果

{{EmbedLiveSample("Setting_opening_and_closing_quotes_to_hang")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

- [CSS Tricks: Hanging punctuation](https://css-tricks.com/almanac/properties/h/hanging-punctuation/)
