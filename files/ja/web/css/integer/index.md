---
title: <integer>
slug: Web/CSS/integer
l10n:
  sourceCommit: b4862a953a358b2f08a181e3a4051433cfa86ca0
---

{{CSSRef}}

**`<integer>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{cssxref("number")}} の特殊型であり、正と負の整数を表現します。整数は数多くの CSS プロパティや記述子で使用することができます。例えば {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("z-index")}} プロパティや {{cssxref("@counter-style/range", "range")}} 記述子などです。

## 構文

`<integer>` データ型は 1 桁から数桁の 10 進数、 0 から 9 までを含み、任意でその前に単一の `+` または `-` の符号が付きます。整数に関連付けられた単位はありません。

> [!NOTE]
> 有効な `<integer>` の値の公式な範囲はなく、仕様書は範囲を指定していません。

## 補間

アニメーション時には、 `<integer>` データ型の値は離散的に整数を使用して{{Glossary("interpolation", "補間")}}されます。実数、すなわち浮動小数点で計算が行われた場合、離散値は [floor 関数](https://ja.wikipedia.org/wiki/%E5%BA%8A%E9%96%A2%E6%95%B0%E3%81%A8%E5%A4%A9%E4%BA%95%E9%96%A2%E6%95%B0)を使って求められます。補間の速度は、アニメーションに結びつけられた[タイミング関数](/ja/docs/Web/CSS/easing-function)で決められます。

## 例

### 有効な整数

```plain example-good
12          正の整数 (先頭の + なし)
+123        正の整数 (先頭の + あり)
-456        負の整数
0           ゼロ
+0          ゼロ、先頭の + つき
-0          ゼロ、先頭の - なし
```

### 無効な整数

```plain example-bad
12.0        整数を表していますが、これは <number> であり、<integer> ではありません。
12.         小数点を含んではいけません。
+---12      先頭に置ける +/- は 1 つだけです。
ten         文字は使えません。
_5          記号は使えません。
\35         エスケープを使った Unicode 文字は、それが整数を表す場合でも (これは 5 です) 使えません。
\4E94       アラビア数字以外の数字は使えません (これは日本語の「五」です)。
3e4         指数表記は使えません。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;number&gt;")}}
