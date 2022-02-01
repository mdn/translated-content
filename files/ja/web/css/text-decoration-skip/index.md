---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
tags:
  - CSS
  - CSS プロパティ
  - CSS テキスト装飾
  - Experimental
  - レイアウト
  - Reference
  - Web
  - recipe:css-property
browser-compat: css.properties.text-decoration-skip
translation_of: Web/CSS/text-decoration-skip
---
{{CSSRef}}

**`text-decoration-skip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素に影響する要素の内容に対するテキスト装飾のどの部分をスキップする必要があるかを設定します。これは要素によって描かれたテキスト装飾の行、および祖先によって描かれたすべてのテキスト装飾を制御します。

> **Note:** 他の多くのブラウザーでは、より単純な {{cssxref("text-decoration-skip-ink")}} プロパティへの対応に集中しています。

```css
/* キーワード値 */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* 複数のキーワード */
text-decoration-skip: objects spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* グローバル値 */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: revert;
text-decoration-skip: unset;
```

## 構文

### 値

- `none`
  - : 何もスキップされません。つまり、テキストの装飾はすべてのテキストの内容と不可分のインラインレベルボックスに渡って描かれます。
- `objects`
  - : 要素の中で、画像やインラインブロックなどの不可分のインラインボックスのマージンボックス全体がスキップされます。
- `spaces`
  - : すべての空白をスキップします。すべての [Unicode ホワイトスペース文字](https://www.unicode.org/reports/tr44/#White_Space)、すべての単語区切りに加えて、子孫の {{cssxref("letter-spacing")}} または {{cssxref("word-spacing")}} すべてです。
- `leading-spaces`
  - : 先頭の空白のみがスキップされるという点を除いて、 `spaces` と同じです。
- `trailing-spaces`
  - : 末尾の空白のみがスキップされるという点を除いて、 `spaces` と同じです。
- `edges`

  - : テキスト装飾の始点と終点を、装飾ボックスのコンテンツの辺からわずかに (例えば線の太さの半分だけ) 離します。つまり、子孫ボックスには個別に下線が引かれます。 (これは中国語では、区切って下線を引くのに重要です。)

    !["text-decoration-skip: edges;" の例です。](decoration-skip-edges.png)

- `box-decoration`
  - : テキストの装飾はボックスのマージン、境界、パディング領域をスキップします。これは祖先により重ねられた装飾の効果のみを持ちます。*装飾ボックス*はボックスの装飾の上に描画を行いません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Skipping_edges">エッジをスキップ</h3>

#### HTML

```html
<p>Hey, grab a cup of <em>coffee!</em></p>
```

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: edges;
}
```

#### 結果

{{EmbedLiveSample("Skipping_edges", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`text-decoration-skip-ink`](/ja/docs/Web/CSS/text-decoration-skip-ink)
