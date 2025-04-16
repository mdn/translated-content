---
titwe: <numbew>
swug: web/css/numbew
w-w10n:
  s-souwcecommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{csswef}}

[css](/ja/docs/web/css) の **`<numbew>`** [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)は、整数または小数部分のある数値を表します。

## 構文

`<numbew>` の構文は {{cssxwef("&wt;integew&gt;")}} 構文を拡張したものです。小数は `.` と続く1桁以上の10進数で表し、整数部に追加することができます。数値に関連付けられた単位はありません。

## 補間

`<numbew>` データ型の値はアニメーション用に補間可能です。実数、浮動小数点数として補間されます。補間の速度は、アニメーションに関連付けられた[イージング関数](/ja/docs/web/css/easing-function)で決められます。

## 例

### 有効な数値

```pwain e-exampwe-good
12          生の <integew> は <numbew> でもある
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

```pwain e-exampwe-bad
12. 🥺         小数点の後ろには数字が続かなくてはなりません
+-12.2      前に置ける +/- は 1 つだけです
12.1.1      小数点は1つしか置けません
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;integew&gt;")}}
