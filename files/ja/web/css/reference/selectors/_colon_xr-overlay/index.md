---
title: "`:xr-overlay` 擬似クラス (CSS)"
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: f18c76e518179f2facc688464c5d382bf5a9b536
---

{{SeeCompatTable}}

**`:xr-overlay`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、[WebXR DOM オーバーレイ](/ja/docs/Web/CSS/Guides/WebXR_DOM_overlays)モジュールで定義されており、没入型の AR または VR 環境でウェブページが表示されている際に、DOM オーバーレイ要素に一致します。

## 構文

```css
:xr-overlay {
  /* ... */
}
```

## 解説

`:xr-overlay` 擬似クラスは、DOM オーバーレイを使用した没入型セッションの期間中、オーバーレイ要素に一致します。

オーバーレイ要素は[バックドロップルート](/ja/docs/Web/CSS/Reference/Properties/backdrop-filter#backバックドロップルートdrop_root)です。DOM のオーバーレイ要素またはその子要素に対する {{cssxref("backdrop-filter")}} の効果は、AR カメラの画像（該当する場合）や、没入型セッションの {{domxref("XRWebGLLayer")}} に描画されるレンダリング済みコンテンツを変更することはありません。

オーバーレイ要素自体は、その固定された {{cssxref("position")}} により、[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)となります。オーバーレイ要素の親要素（存在する場合）の重ね合わせコンテキストは、没入型セッションのディスプレイには描画されません。

> [!NOTE]
> マルチディスプレイシステムでは、オーバーレイ要素の親要素や同階層の要素の重ね合わせコンテキストが、別個のディスプレイに表示されることがあります。

## 例

### 基本的な使い方

この例では、オーバーレイを半透明の黒として定義し、オーバーレイの背後にあるコンテンツが部分的に見えるようにしています。コンテンツと背景の間に十分なコントラストを実現するため、{{cssxref("color")}} を `white` に設定しています。

```css
:xr-overlay {
  background-color: rgb(0 0 0 / 0.5);
  color: white;
}
```

### オーバーレイのコンテンツを対象とする

この例では、`:xr-overlay` セレクターを使用して、XR DOM オーバーレイ内の {{htmlelement("button")}} 要素にスタイルを設定します。

```css
:xr-overlay button {
  background-color: white;
  color: black;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":modal")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":picture-in-picture")}}
- [CSS 擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [WebXR DOM オーバーレイ](/ja/docs/Web/CSS/Guides/WebXR_DOM_overlays)モジュール
- [WebXR 機器 API の基本](/ja/docs/Web/API/WebXR_Device_API/Fundamentals)
- {{domxref("XRSession.domOverlayState")}}
