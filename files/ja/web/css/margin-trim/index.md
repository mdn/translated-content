---
title: margin-trim
slug: Web/CSS/margin-trim
tags:
  - CSS
  - CSS プロパティ
  - Draft
  - Experimental
  - NeedsContent
  - NeedsExample
  - NeedsLiveSample
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.margin-trim
translation_of: Web/CSS/margin-trim
---
{{CSSRef}}

`margin-trim` プロパティは、包含ブロックがその子のマージンを包含ブロックの縁に隣接する部分で切り取るすることを可能にします。

## 構文

```css
margin-trim: none;
margin-trim: in-flow;
margin-trim: all;

/* グローバル値 */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: unset;
```

## 値

- `none`
  - : マージンは包含ブロックで切り取られません。
- `in-flow`

  - : このボックスに含まれるフロー内のボックスでは、ボックスの縁に隣接するブロック軸のマージンがゼロに切り捨てられます。

    また、そのようなマージンで相殺されたマージンは切り捨てられます。

- `all`
  - : 包含ブロックのコンテンツの縁とマージンが一致しているフロー内のボックスや浮動要素のマージンを切り取ります。

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
}
```

ここでの問題は、行の右に 20px の間隔が空きすぎてしまうことで、それを修正するためにこのようにするのではないでしょうか。

```css
span:last-child {
  margin-right: 0;
}
```

これを実現するために別のルールを書かなければならないのは面倒ですし、柔軟性もありません。代わりに、 `margin-trim` で解決できます。

```css
 article {
  margin-trim: in-flow;
  ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("margin")}}
