---
title: "::view-transition-group"
slug: Web/CSS/::view-transition-group
l10n:
  sourceCommit: 6d4b6a0f9df94de158c373d6b08c504caafcee5f
---

{{CSSRef}}{{SeeCompatTable}}

**`::view-transition-group`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、単一のビュートランジショングループを表します。

ビュートランジションの間、 `::view-transition-group` はは、[ビュートランジションプロセス](/ja/docs/Web/API/View_Transitions_API#the_view_transition_process) で説明されているように、関連する擬似要素ツリーに含まれています。これは{{cssxref("::view-transition")}}の唯一の子であり、{{cssxref("::view-transition-image-pair")}}を子として持ちます。

`::view-transition-group` は UA スタイルシートで以下の既定のスタイルを与えられています。

```css
html::view-transition-group(*) {
  position: absolute;
  top: 0;
  left: 0;

  animation-duration: 0.25s;
  animation-fill-mode: both;
}
```

既定では、選択された要素は、「古い｝ビュー状態を表す {{cssxref("::view-transition-old")}} 擬似要素、または「古い」ビュー状態がない場合は「新しい」ビュー状態を表す {{cssxref("::view-transition-new")}} 擬似要素のサイズと位置を最初に反映します。

「古い」ビュー状態と「新しい」ビュー状態の両方がある場合、ビュートランジションスタイルシートのスタイルは、この擬似要素の {{cssxref("width")}} と {{cssxref("height")}} を「古い」ビュー状態の境界ボックスのサイズから「新しい」ビュー状態の境界ボックスのサイズにアニメーションさせます。

> **メモ:** ビュートランジションスタイルシートのスタイルは、ビューのトランジション中に動的に生成されます。詳細については、仕様書の[トランジション擬似要素の設定](https://drafts.csswg.org/css-view-transitions-1/#setup-transition-pseudo-elements)および[擬似要素スタイルの更新](https://drafts.csswg.org/css-view-transitions-1/#update-pseudo-element-styles)の節を参照してください。

さらに、要素の変換は、「古い」ビュー状態の画面空間変換から新しいビュー状態の画面空間変換へアニメーションします。アニメーションしているプロパティの値はトランジションを始める時点に決定されるため、このスタイル設定は動的に生成されます。

## 構文

```css-nolint
::view-transition-group(<pt-name-selector>) {
  /* ... */
}
```

`<pt-name-selector>` は以下の値のうちのいずれかです。

- `*`
  - : 擬似要素が、すべてのビュートランジショングループに一致するようにします。
- `root`
  - : 擬似要素が、ページ全体のビュートランジションを含むためにユーザエージェントによって作成された既定の `root` ビュートランジショングループに一致するようにします。すなわち、 {{cssxref("view-transition-name")}} プロパティによって自分自身を固有のビュートランジショングループに割り当てていない要素を意味します）。
- {{cssxref("custom-ident")}}
  - : 擬似要素が、指定された {{cssxref("custom-ident")}} を {{cssxref("view-transition-name")}} プロパティを通して要素に割り当てることによって作成された固有のビュートランジショングループに一致するようにします。

## 例

```css
view-transition-group(embed-container) {
  animation-duration: 0.3s;
  animation-timing-function: ease;
  z-index: 1;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュートランジション API](/ja/docs/Web/API/View_Transitions_API)
- [ビュートランジション API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)
