---
title: "`margin-trim` プロパティ"
short-title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: bf7ff749b987d530e9a6c07f23ac66f94d968e57
---

`margin-trim` プロパティにより、コンテナーの辺に隣接する子のマージンを切り取ることができます。

## 構文

```css
margin-trim: none;
margin-trim: block;
margin-trim: block-start;
margin-trim: block-end;
margin-trim: inline;
margin-trim: inline-start;
margin-trim: inline-end;

/* グローバル値 */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: revert-layer;
margin-trim: unset;
```

### 値

このプロパティは、次のキーワード値のいずれかで指定します。

- `none`
  - : コンテナーによってマージンは切り取られません。

- `block`
  - : コンテナーの辺に接するブロックレベルの子要素に指定されたマージンは、コンテナー自体に指定されたマージンに影響することなく、0 に切り詰められます。

- `block-start`
  - : コンテナーの辺に接する最初のブロックレベルの子要素のマージンは、0 に切り詰められます。

- `block-end`
  - : コンテナーの辺に接する最後のブロックレベルの子要素のマージンは、0 に切り詰められます。

- `inline`
  - : コンテナーの辺に隣接するインラインの子に指定されたマージンは、行の始まりと終わりの空間に影響を与えることなく、ゼロに切り詰められます。

- `inline-start`
  - : コンテナーの辺と最初のインラインの子との間のマージンはゼロに切り詰められます。

- `inline-end`
  - : コンテナーの辺と最後のインラインの子との間のマージンはゼロに切り詰められます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティへの対応が実装されたら、次のように動作するでしょう。

インラインの子を持つ包含ブロックがあり、それぞれの子の間にマージンを入れたいが、行末の空間とは干渉しないようにするには、次のようにします。

```css
article {
  background-color: red;
  margin: 20px;
  padding: 20px;
  display: inline-block;
}

article > span {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  margin-right: 20px;
  margin-left: 30px;
}
```

ここでの問題は、行の右に 20px の間隔が空きすぎてしまうことで、それを修正するためにこのようにするのではないでしょうか。

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

これを実現するために別のルールを書かなければならないのは面倒ですし、柔軟性もありません。代わりに、 `margin-trim` で解決できます。

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

同様に、コンテナーの辺にあるインライン方向の先頭側のマージンを除去するには、次のようにします。

```css
article {
  margin-trim: inline-start;
  /* … */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("margin")}}
