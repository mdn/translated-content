---
title: margin-trim
slug: Web/CSS/margin-trim
l10n:
  sourceCommit: de76d381cb79a61813378963b66d98f68e74381c
---

{{CSSRef}}{{SeeCompatTable}}

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

## 値

- `none`

  - : マージンは包含ブロックで切り取られません。

- `block`

  - : コンテナーの辺に隣接するブロックの子に指定されたマージンは、コンテナーに指定されたマージンに影響を与えることなく、ゼロに切り詰められます。

- `block-start`

  - : コンテナーの端にある最初の子ブロックのマージンはゼロに切り詰められます。

- `block-end`

  - : コンテナーの端にある最後の子ブロックのマージンはゼロに切り詰められます。

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

同様に、コンテナーのエッジで左マージンを除去する場合は次のようにします。

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
