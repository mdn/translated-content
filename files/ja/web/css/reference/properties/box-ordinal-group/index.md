---
title: box-ordinal-group
slug: Web/CSS/Reference/Properties/box-ordinal-group
original_slug: Web/CSS/box-ordinal-group
---

{{Non-standard_Header}}

> [!WARNING]
> これはオリジナルの CSS フレックスボックスレイアウトモジュールの草稿のプロパティで、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)を参照してください。

**`box-ordinal-group`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスボックスの子要素を順序付きグループに割り当てます。

```css
/* <integer> 値 */
box-ordinal-group: 1;
box-ordinal-group: 5;

/* グローバル値 */
box-ordinal-group: inherit;
box-ordinal-group: initial;
box-ordinal-group: unset;
```

順序付きグループは、ボックスの直接の子が現れる順序を制御するために、 {{CSSxRef("box-direction")}} プロパティとの組み合わせで使用されることがあります。 `box-direction` の計算値が normal である場合、ボックスは小さい番号が付いた順序付きグループから要素を表示し、それらの要素がコンテナーの左 (水平ボックスの場合) または上端 (垂直ボックスの場合) に現れます。同じ順序付きグループの要素は、ソースの文書ツリーに現れる順序で流れます。逆の方向では、順序付きグループは要素が逆に現れた場合を除き、順序付きグループは同じ順序で現れようとします。

## 構文

`box-ordinal-group` プロパティは任意の正の {{CSSxRef("&lt;integer&gt;")}} で指定されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な使用方法の例

古いバージョンの仕様では、 `box-ordinal-group` はフレックスコンテナー内の子の表ジュ順序を変更するために含まれていました。

```css
article:nth-child(1) {
  -webkit-box-ordinal-group: 2
  -moz-box-ordinal-group: 2
  box-ordinal-group: 2
}

article:nth-child(2) {
  -webkit-box-ordinal-group: 1
  -moz-box-ordinal-group: 1
  box-ordinal-group: 1
}
```

現在のフレックスボックスの同等の機能は {{cssxref("order")}} です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("box-flex")}}
- {{CSSxRef("box-flex-group")}}
- {{CSSxRef("box-pack")}}
