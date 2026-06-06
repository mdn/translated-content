---
title: CSS `box-flex-group` プロパティ
short-title: box-flex-group
slug: Web/CSS/Reference/Properties/box-flex-group
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> これはもともと CSS Flexible Box Layout Module の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) を参照してください。

**`box-flex-group`** は [CSS](/ja/docs/Web/CSS) のプロパティで、フレックスボックスの子要素をフレックスグループに割り当てます。

フレックスグループに割り当てられたフレキシブル要素の場合、最初のフレックスグループは 1 となり、それより大きい値は以降のフレックスグループを指定します。初期値は 1 です。ボックスの余白を分ける際、ブラウザーはまず最初のフレックスグループ内のすべての要素を考慮します。そのグループ内の各要素には、同じフレックスグループ内の他の要素の柔軟性に対するその要素の柔軟性の比率に基づいて余白が割り当てられます。グループ内のすべてのフレキシブル子要素の余白が最大まで増えた場合、前のフレックスグループで残った余白を使って、次のフレックスグループ内の子要素に対して同じプロセスが繰り返されます。フレックスグループがなくなり、なお余白が残っている場合、余白は {{cssxref("box-pack")}} プロパティに従って、コンテナボックス内で分けられます。

子要素の推奨余白を計算した後、ボックスがオーバーフローする場合は、余白を加える場合と同じ方法で、フレキシブル要素から余白が消されます。各フレックスグループが順番に調べられ、各要素の柔軟性の比率に基づいて余白が消されます。要素は最小幅より小さくはなりません。

## 構文

```css
/* <integer> 値 */
box-flex-group: 1;
box-flex-group: 5;

/* グローバル値 */
box-flex-group: inherit;
box-flex-group: initial;
box-flex-group: unset;
```

`box-flex-group` プロパティは、任意の正の {{CSSxRef("&lt;integer&gt;")}} で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`box-flex-group = <integer>`)}}

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

- {{CSSxRef("flex")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
