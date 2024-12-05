---
title: <ratio>
slug: Web/CSS/ratio
l10n:
  sourceCommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{CSSRef}}

**`<ratio>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、幅と高さの比例関係を記述します。これは、メディアクエリー {{cssxref("@media")}} における `aspect-ratio` メディア特性の値として、コンテナークエリー {{cssxref("@container")}} における `aspect-ratio` サイズ特性の値として、 CSS {{cssxref("aspect-ratio")}} プロパティの値として使用します。

## 構文

`<ratio>` データ型は {{cssxref("&lt;number&gt;")}} に続くフォワードスラッシュ ('/', Unicode `U+002F SOLIDUS`) と 2 つ目の {{cssxref("&lt;number&gt;")}} から成ります。数字はどちらも正の値でなければなりません。スラッシュの前後のスペースは省略可能です。最初の数字は幅を表し、 2 つ目は高さを表します。また、値として単一の {{cssxref("&lt;number&gt;")}} を指定することもできます。

### 一般的なアスペクト比

| 比率                      |                                             | 用例                                                               |
| ------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `4/3` または `1.33333`    | ![高さ 3 対幅 4 の矩形](ratio4_3.png)       | 20 世紀における伝統的な TV 画面の形状です。                        |
| `16/9` または `1.7777778` | ![高さ 16 対幅 9 の矩形](ratio16_9.png)     | 現代の「ワイド画面」の TV の形状です。                             |
| `185/100` または `1.85`   | ![高さ 1 対幅 1.85 の矩形](ratio1_1.85.png) | 1960 年代から用いられている最も一般的な映画スクリーンの形状です。  |
| `239/100` または `2.39`   | ![高さ 1 対幅 2.39 の矩形](ratio1_2.39.png) | 「ワイドスクリーン」、アナモルフィックな映画スクリーンの形状です。 |

## 形式文法

{{csssyntax}}

## 例

### メディアクエリーでの使用

```css
@media screen and (min-aspect-ratio: 16/9) {
  /* … */
}
```

### @container サイズクエリーでの使用

```css
@container (aspect-ratio > 1) and (width < 20em) {
  /* … */
}
```

### CSS プロパティ値としての使用

```css
.square {
  aspect-ratio: 1 / 1;
}
.circle {
  aspect-ratio: 1;
  border-radius: 50%;
}
.portrait {
  aspect-ratio: 5 / 7;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aspect-ratio`](/ja/docs/Web/CSS/@media/aspect-ratio) メディア記述子
- [アスペクト比の理解](/ja/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)ガイド
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)ガイド
- [CSS メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)モジュール
- [CSS 拘束](/ja/docs/Web/CSS/CSS_containment)モジュール
- [CSS ボックスサイズ](/ja/docs/Web/CSS/CSS_box_sizing)モジュール
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)モジュール
