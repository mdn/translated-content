---
title: steps()
slug: Web/CSS/Reference/Values/easing-function/steps
original_slug: Web/CSS/easing-function/steps
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

**`steps()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、入力時間を同じ長さの指定した数値の間隔に分割する遷移を定義します。ステップ関数のサブクラスは、「階段関数」とも呼ばれることがあります。

## 構文

```css
/* 様々な間隔 */
steps(2, end)
steps(4, jump-end)
steps(12, end)

/* 様々なジャンプ位置 */
steps(3, jump-start)
steps(3, jump-end)
steps(3, jump-none)
steps(3, jump-both)
```

### 引数

この関数は、次の引数を受け入れます。

- `<integer>`
  - : 間隔または「段階」の等間隔の数値を表します。
    2 つ目の引数が `jump-none` である場合を除き、 `0` より大きい正の整数でなければなりません。その場合、 `1` より大きい正の整数でなければなりません。

- `<step-position>`
  - : 値間のジャンプが発生するタイミングを指定します。
    省略した場合は、既定では `end` となります。
    利用可能なキーワード値には、次のものがあります。
    - `jump-start` または `start`
      - : アニメーションが始まるときに最初の段階が現れることを示します。
    - `jump-end` または `end`
      - : アニメーションが終わるときに最後の段階が現れることを示します。
    - `jump-none`
      - : 最初のジャンプも最後のジャンプも現れないことを示します。
    - `jump-both`
      - : 最初のジャンプと最後のジャンプの両方が現れることを示します。

## 解説

`steps()` 関数は、アニメーションの再生時間を等間隔に分割します。
例えば、 `steps(4, end)` はアニメーションを 4 つの等間隔に分割し、各間隔の終わりに値が変化します。ただし、最後の変化はアニメーションの終わりに発生します。

アニメーションに複数の区間がある場合、指定した数値は各区間に適用されます。例えば、アニメーションに 3 つの区間があり、 `steps(2)` を使用している場合、合計 6 段階となり、各区間に 2 段階ずつ割り当てられます。

次の画像は、ジャンプが発生した際の様々な `<step-position>` 値の影響を示しています。

```css
steps(2, jump-start)  /* または steps(2, start) */
steps(4, jump-end)    /* または steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![入力の進行から出力の進行へのグラフ。そのうち steps(2, jump-start) では、それぞれ (0, 0.5) と (0.5, 1) から 0.5 単位延びた水平線を表示させ、元と (0.5, 0.5) に空の円を表示させます。 steps(4, jump-end) では、それぞれ (0, 0)、(0.25, 0.25)、(0.5, 0.5)、(0.75, 0.75) から 0.25 単位ずつ延びる水平線を示しており、(0.25, 0)、(0.5, 0.25)、 (0.75, 0.5) にそれぞれ塗りつぶされていない円、(1, 1) に塗りつぶされた円、 steps(5, jump-none) は、それぞれ (0, 0)、(0.2, 0.25)、(0.4, 0.5)、(0.6, 0.75)、(0.8, 1) から 0.2 単位の水平行をそれぞれ表示させ、 塗りつぶされていない円はそれぞれ (0.2, 0), (0.4, 0.25), (0.6, 0.5), (0.8, 0.75) にあり、 steps(3, jump-both) は、それぞれ (0, 0.25), (1/3, 0.5), それぞれ、(1, 1) に実線円、原点、(1/3, 0.25)、(2/3, 0.5)、(1, 0.75) に点線円が配置されています。](jump.svg)

## 形式文法

{{csssyntax}}

## 例

### steps() 関数の使用

以下の `steps()` 関数は有効です。

```css example-good
/* 5 段階で最後にジャンプ */
steps(5, end)

/* 2 段階で最初にジャンプ */
steps(2, start)

/* 第 2 引数は既定値を使用 */
steps(2)
```

以下の `steps()` 関数は無効です。

```css example-bad
/* 第 1 引数は実数ではなく <integer> でなければならない */
steps(2.0, jump-end)

/* 段階の数値は正でなければならない */
steps(-3, start)

/* 段階の数値は 1 以上でなければならない */
steps(0, jump-none)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のイージング関数: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} および {{cssxref("easing-function/linear", "linear()")}}
- [階段関数](https://ja.wikipedia.org/wiki/階段関数) （ウィキペディア）
