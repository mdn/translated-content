---
title: initial-letter
slug: Web/CSS/Reference/Properties/initial-letter
original_slug: Web/CSS/initial-letter
l10n:
  sourceCommit: 33cd63a518c57caded1b43ff9fff071230a2397a
---

`initial-letter` は CSS のプロパティで、ドロップ、レイズ、サンクンされた最初の文字のサイズとシンクを設定します。このプロパティは、 {{cssxref("::first-letter")}} 擬似要素およびブロックコンテナーのインラインレベル最初の子供要素に適用されます。

## 構文

```css
/* キーワード値 */
initial-letter: normal;

/* 1 つの値 */
initial-letter: 3; /* 頭文字が 3 行分を占める */
initial-letter: 1.5; /* 頭文字が 1.5 行分を占める */

/* ２ つの値 */
initial-letter: 3 2; /* 頭文字が 3 行分を占め、ベースラインは 2 行目（1 行分上がる） */
initial-letter: 3 1; /* 頭文字が 3 行分を占め、ベースライン変更なし（2 行分上がる） */

/* グローバル値 */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

### 値

キーワード値の `normal`、または `<number>` と、その後に任意で `<integer>` が付きます。

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
<p class="normal">先頭文字は通常通りです。</p>
<p class="onefive">先頭文字は 1.5 行を占めます。</p>
<p class="three">先頭文字は 3 行を占めます。</p>
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

p {
  outline: 1px dashed red;
}
```

#### 結果

{{EmbedLiveSample('先頭文字の大きさの設定', 250, 180)}}

### sink 値を設定

この例では、すべての最初の文字は同じサイズですが、シンク値が異なります。

#### HTML

```html
<p class="four">先頭文字: シンク値 = 4</p>
<p class="same">先頭文字: シンク値は定義されていません（サイズと同じ）</p>
<p class="two">先頭文字: シンク値 = 2</p>
<p class="one">先頭文字: シンク値 = 1</p>
```

#### CSS

```css
.four::first-letter {
  -webkit-initial-letter: 3 4;
  initial-letter: 3 4;
}

.same::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}

.two::first-letter {
  -webkit-initial-letter: 3 2;
  initial-letter: 3 2;
}

.one::first-letter {
  -webkit-initial-letter: 3 1;
  initial-letter: 3 1;
}

p {
  outline: 1px dashed red;
}
```

#### 結果

{{EmbedLiveSample('sink_値を設定', 250, 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::first-letter")}}
- {{cssxref(":first-child")}}
- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/) via Oddbird (2017)
