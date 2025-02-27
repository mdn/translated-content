---
title: initial-letter
slug: Web/CSS/initial-letter
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{SeeCompatTable}}

`initial-letter` は CSS のプロパティで、頭文字をドロップキャップにしたり、上げたり、下げたりすることを設定します。

```css
/* キーワード値 */
initial-letter: normal;

/* 数値 */
initial-letter: 1.5; /* 頭文字が 1.5 行分を占める */
initial-letter: 3; /* 頭文字が 3 行分を占める */
initial-letter: 3 2; /* 頭文字が 3 行分を占め、
                           2 行分下がる */

/* グローバル値 */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

キーワード値の `normal`、または `<number>` と、その後に任意で `<integer>` が付きます。

### 値

- `normal`
  - : 頭文字に特別な効果を付与しません。テキストは普通通りに表示されます。
- `<number>`
  - : 頭文字の寸法を、何行を占めるかで指定します。負の値は使用できません。
- `<integer>`
  - : 寸法が与えられたときに、頭文字が沈み込む行数を定義します。0 以上の値でなければなりません。省略された場合は、寸法の値を複製し、最も近い正の整数に切り捨てられます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 先頭文字の大きさの設定

#### HTML

```html
<p class="normal">Initial letter is normal</p>
<p class="onefive">Initial letter occupies 1.5 lines</p>
<p class="three">Initial letter occupies 3 lines</p>
```

#### CSS

```css
.normal::first-letter {
  -webkit-initial-letter: normal;
  initial-letter: normal;
}

.onefive::first-letter {
  -webkit-initial-letter: 1.5;
  initial-letter: 1.5;
}

.three::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}
```

#### 結果

{{EmbedLiveSample('先頭文字の大きさの設定', 250, 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("initial-letter-align")}}
- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/)
