---
title: <number>
slug: Web/CSS/Reference/Values/number
original_slug: Web/CSS/number
l10n:
  sourceCommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

[CSS](/ja/docs/Web/CSS) の **`<number>`** [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)は、整数または小数部分のある数値を表します。

## 構文

`<number>` の構文は {{CSSxRef("&lt;integer&gt;")}} 構文を拡張したものです。小数は `.` と続く1桁以上の10進数で表し、整数部に追加することができます。数値に関連付けられた単位はありません。

## 補間

`<number>` データ型の値はアニメーション用に補間可能です。実数、浮動小数点数として補間されます。補間の速度は、アニメーションに関連付けられた[イージング関数](/ja/docs/Web/CSS/Reference/Values/easing-function)で決められます。

## 例

### 有効な数値

```plain example-good
12          生の <integer> は <number> でもある
4.01        正の実数
-456.8      負の実数
0.0         ゼロ
+0.0        + に続くゼロ
-0.0        - に続くゼロ
.60         前のゼロがない小数値
10e3        指数表記
-3.4e-2     複雑な指数表記
```

### 無効な数値

```plain example-bad
12.         小数点の後ろには数字が続かなくてはなりません
+-12.2      前に置ける +/- は 1 つだけです
12.1.1      小数点は1つしか置けません
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;integer&gt;")}}
