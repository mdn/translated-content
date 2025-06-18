---
title: box-flex-group
slug: Web/CSS/box-flex-group
---

{{CSSRef}}{{Non-standard_Header}}

> [!WARNING]
> これはもともと CSS Flexible Box Layout Module の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)を参照してください。

**`box-flex-group`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスボックスの子要素をフレックスグループに割り当てます。

```css
/* <integer> 値 */
box-flex-group: 1;
box-flex-group: 5;

/* グローバル値 */
box-flex-group: inherit;
box-flex-group: initial;
box-flex-group: unset;
```

フレックスグループに割り当てられたフレックス要素について、最初のフレックスグループは 1 であり、より高い値は下位のフレックスグループを示します。初期値は 1 です。ボックスの余白が分割されるとき、ブラウザーは最初にすべての要素が最初のフレックスグループに入ると想定します。そのグループ内のそれぞれの要素は、同じフレックスグループ内の他の要素のフレックス係数と比較した、その余蘊そのフレックス係数に基づいて余白が与えられます。グループ内のすべてのフレックスな子の余白が最大まで増加した場合は、前のフレックスグループから残っている余白を使用して、次のフレックスグループ内の子に対して処理が繰り返されます。フレックスグループがなくなり、まだ余白が残っている場合は、 {{cssxref("box-pack")}} プロパティに従って、追加の余白が包含ボックス内で配分されます。

推奨される子の余白が計算された後でボックスがあふれた場合は、追加の余白を追加するときに使用されるのと同様の方法で、フレックス要素からスペースが削除されます。各フレックスグループを順番に調べ、各要素のフレックス係数の比率に従ってスペースを削除します。要素は最小幅より小さくはなりません。

## 構文

`box-flex-group` プロパティは、任意の正の {{CSSxRef("&lt;integer&gt;")}} で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### シンプルな使用例

当初のフレックスボックスの仕様書では、 `box-flex-group` を使用してフレックスの子を異なるグループに割り当て、自由な空間を配分できるようになっていました。

```css
article:nth-child(1) {
  -webkit-box-flex-group: 1;
}

article:nth-child(2) {
  -webkit-box-flex-group: 2;
}
```

これは WebKit ベースのブラウザーのみが接頭辞つきで対応しましたが、仕様書のその後の版ではこれとは同等の機能ではありませんでした。代わりに、フレックスコンテナー内の空間の配分は、 {{cssxref("flex-basis")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}} を使用して制御するようになっています。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("box-flex")}}
- {{CSSxRef("box-ordinal-group")}}
- {{CSSxRef("box-pack")}}
