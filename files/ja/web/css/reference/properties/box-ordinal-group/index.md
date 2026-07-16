---
title: CSS `box-ordinal-group` プロパティ
short-title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> これはオリジナルの CSS フレックスボックスレイアウトモジュールの草稿のプロパティで、より新しい標準に置き換えられました。現在の標準についての情報は [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) を参照してください。

**`box-ordinal-group`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスボックスの子要素を順序付きグループに割り当てます。

順序グループは、 {{CSSxRef("box-direction")}} プロパティと組み合わせて使うことで、ボックスの直接の子要素の表示順序を制御できます。計算された `box-direction` が normal の場合、ボックスは最も番号の小さい順序グループから要素を表示し、それらの要素がコンテナの左側（水平方向のボックスの場合）または上部（垂直方向のボックスの場合）に表示されるようにします。同じ順序グループの要素は、ソース文書ツリー上の記述順に並べられます。逆方向の場合、順序グループは同じ順序で調べられますが、要素の表示順序は逆になります。

## 構文

```css
/* <integer> 値 */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* グローバル値 */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

`box-ordinal-group` プロパティは任意の正の {{CSSxRef("&lt;integer&gt;")}} で指定されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`box-ordinal-group = <integer>`)}}

## 例

### 基本的な使用方法の例

古いバージョンの仕様では、 `box-ordinal-group` はフレックスコンテナー内の子の表示順序を変更するために含まれていました。

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  box-ordinal-group: 2;
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1;
  -moz-box-ordinal-group: 1;
  box-ordinal-group: 1;
}
```

現在のフレックスボックスの同等の機能は {{cssxref("order")}} です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
