---
title: horizontal-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

**`horizontal-viewport-segments`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、端末が指定された数のビューポートセグメントを水平方向に（横に並べて）配置しているかどうかを検出します。

[ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API) に関連し、`vertical-viewport-segments` 機能は、折り曲げ画面型やマルチ画面型など、ディスプレイが論理的に別個のビューポートセグメントに分割されている端末（マルチビューポート端末）で適切に動作するレスポンシブデザインを作成するために使用できます。

## 構文

`horizontal-viewport-segments` 特性は、端末が持つ水平ビューポートセグメント数を表す `1` 以上の整数値 ({{cssxref("integer")}}) として指定します。

- 値は次の場合は `1` となります。
  - 折り曲げ式ではない端末（例えば、標準的な単一の画面を持つスマートフォンやタブレット）
  - 折り曲げ可能な端末が開いているか閉じられた状態（[`continuous` 端末形態](/ja/docs/Web/API/Device_Posture_API#continuous)）にある。
  - 2 画面のマルチ画面型端末、または折り曲げ画面型端末で、現在折り曲げられており、縦方向に配置されているため、画面セグメントが縦に並んでいる状態。
- この値が `2` となるのは、2 画面のマルチ画面型端末、または折り曲げ画面型端末で、水平方向に折れ曲がっている状態（[`folded` 端末形態](/ja/docs/Web/API/Device_Posture_API#folded)）であり、画面セグメントが横に並んでいる状態です。
- 折り曲げ可能な端末で複数の折れ曲がり箇所がある場合、この値は `2` を超えることがあります。

## 例

### 基本的な `horizontal-viewport-segments` の使い方

このスニペットでは、折り曲げ式端末でセグメントが左右に並んでいる場合を処理するため、`horizontal-viewport-segments` メディアクエリーを使用しています。

左側のコンテナーの幅を左セグメントの幅 (`env(viewport-segment-width 0 0)`) に設定し、右側のコンテナーの幅を右セグメントの幅 (`env(viewport-segment-width 1 0)`) に設定します。

折り曲げ部分が両コンテナー間で占める幅を計算するには、左コンテナーの右端オフセットから右コンテナーの左端オフセットを差し引きます (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`)。

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

完全な動作デモについては、[ビューポートセグメント API デモ](https://mdn.github.io/dom-examples/viewport-segments-api/)を確認してください（[ソースコード](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)）。同時に、完全なデモの説明については[ビューポートセグメント API の使用方法](/ja/docs/Web/API/Viewport_segments_API/Using)も確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` 特性
- [ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) - developer.chrome.com (2024)
