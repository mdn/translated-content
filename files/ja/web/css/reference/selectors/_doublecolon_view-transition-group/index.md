---
title: ::view-transition-group()
slug: Web/CSS/Reference/Selectors/::view-transition-group
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`::view-transition-group()`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、単一のビュー遷移グループを表します。

ビュー遷移の間は、`::view-transition-group()` が、[ビュー遷移の擬似要素ツリー](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移の擬似要素ツリー)で説明されているように、関連付けられた擬似要素ツリーに含まれます。これは {{cssxref("::view-transition")}} の唯一の子であり、{{cssxref("::view-transition-image-pair()")}} を子として持ちます。

`::view-transition-group()` は UA スタイルシートで以下のデフォルトのスタイルを与えられています。

```css
:root::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

デフォルトでは、選択された要素は、「古い」ビュー状態を表す {{cssxref("::view-transition-old")}} 擬似要素、または「古い」ビュー状態がない場合は「新しい」ビュー状態を表す {{cssxref("::view-transition-new")}} 擬似要素のサイズと位置を最初に反映します。

「古い」ビュー状態と「新しい」ビュー状態の両方がある場合、ビュー遷移スタイルシートのスタイルは、この擬似要素の {{cssxref("width")}} と {{cssxref("height")}} を「古い」ビュー状態の境界ボックスのサイズから「新しい」ビュー状態の境界ボックスのサイズにアニメーションさせます。

> [!NOTE]
> ビュー遷移スタイルシートのスタイルは、ビュー遷移中に動的に生成されます。詳細については、仕様書の[遷移擬似要素の設定](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements)<sup>(英語)</sup>および[擬似要素スタイルの更新](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles)<sup>(英語)</sup>の節を参照してください。

さらに、要素の変換は、「古い」ビュー状態の画面空間変換から新しいビュー状態の画面空間変換へアニメーションします。アニメーションしているプロパティの値はトランジションを始める時点に決定されるため、このスタイル設定は動的に生成されます。

## 構文

```css-nolint
::view-transition-group([ <pt-name-selector> <pt-class-selector>? ] | <pt-class-selector>) {
  /* ... */
}
```

### 引数

- `*`
  - : [全称セレクター (`*`)](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)です。ページ上のすべてのビュー遷移グループを選択します。
- `root`
  - : {{cssxref("view-transition-name")}} を {{cssxref(":root")}} に適用すると、擬似要素が、ページ全体のビュー遷移を含むためにユーザーエージェントによって作成されたデフォルトの `root` ビュー遷移グループに一致するようにします。すなわち、 `view-transition-name` プロパティによって自分自身を固有のビュー遷移グループに割り当てていない要素を意味します）。
- `<pt-name-selector>`
  - : 一連の {{cssxref("custom-ident")}} で、{{cssxref("view-transition-name")}} プロパティの値です。
- `<pt-class-selector>`
  - : 一連の {{cssxref("custom-ident")}} で、{{cssxref("view-transition-class")}} プロパティの値の前にピリオド (`.`) を置いたものです。

名前付きビュー遷移擬似要素の{{cssxref("specificity", "詳細度")}}は、[要素型セレクターの詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity#type_列)と等しくなります。ただし、全称セレクターが使用されている場合は、詳細度はゼロとなります。

## 例

```css
::view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}

::view-transition-group(.card) {
  animation-duration: 1s;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API によるスムーズでシンプルな遷移](https://developer.chrome.com/docs/web-platform/view-transitions/)<sup>(英語)</sup>
