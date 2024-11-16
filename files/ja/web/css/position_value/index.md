---
title: <position>
slug: Web/CSS/position_value
l10n:
  sourceCommit: 243dd73fe136031badaef52c3e6133b21bcf7a07
---

{{CSSRef}}

**`<position>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 2 次元の座標を表し、要素ボックスからの相対的な位置を示すために用いられます。 {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}}, {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}}, {{cssxref("transform-origin")}} で使用されています。

> **メモ:** `<position>` 値で記述される最終的な位置は、要素ボックスの中である必要はありません。

## 構文

![様々な値の配置を示すグリッド。 0 0 は左上の角。 4 つの値、right、right center、center left 100%、top 50% left 100% はすべて等価で、縦方向中央の右端にあります。 top 75px left 100px と left 100px top 75px の 2 つの値は同じです。 bottom left 25% は top 100% left 25% と同じです。](position_type.png)

`<position>` データ型は 1 ～ 2 つのキーワードと、任意のオフセットで定義されます。

キーワード値は `center`、 `top`、 `right`、 `bottom`、 `left` です。それぞれのキーワードは要素ボックスの辺または2辺の中心線を表します。使われる場所によって、 `center` は左右の辺の中心か、上下の辺の中心を表します。

オフセット値を指定する場合は、相対的な {{cssxref("&lt;percentage&gt;")}} 値か絶対的な {{cssxref("&lt;length&gt;")}} 値のどちらかで指定することができます。正の数は右または下（適切な方）に向けたオフセットで、負の数は逆方向のオフセットです。

単一のオフセット値のみが指定された場合は X 座標を定義し、もう一方の軸は既定値の `center` に設定されます。

```css
/* 値 1 つの構文 */
keyword                  /* 水平位置または垂直位置。もう一方の軸は既定値の center になる */
value                    /* X 座標の位置。 Y 座標は既定値の 50% になる */

/* 値 2 つの構文 */
keyword keyword          /* それぞれの方向のキーワード（順不同） */
keyword value            /* キーワードで定義された辺からのオフセット */
value keyword            /* 水平位置を表す値、垂直位置を表すキーワード */
value value              /* それぞれの方向（水平、垂直）の距離の値 */

/* 値 4 つの構文 */
keyword value keyword value /* それぞれの値はその前のキーワードからのオフセット */
```

> **メモ:** {{cssxref("background-position")}} プロパティも3つの値の構文を受け付けます。これは `<position>` を使用する他のプロパティでは許可されません。

## 補間

アニメーション時、座標の横軸と縦軸の値が独立して補間されます。ただし、補間の速度は両方の座標で 1 つの[イージング関数](/ja/docs/Web/CSS/easing-function)が用いられるため、座標は直線的に移動します。

### 形式文法

{{csssyntax}}

## 例

### 有効な位置

```plain example-good
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

### 無効な位置

```plain example-bad
left right
bottom top
10px 15px 20px 15px
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 値と単位の紹介](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
