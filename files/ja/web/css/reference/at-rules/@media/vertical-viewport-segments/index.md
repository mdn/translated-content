---
title: vertical-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/vertical-viewport-segments
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

**`vertical-viewport-segments`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、端末が指定された数のビューポートセグメントを垂直方向に（上から下に）配置しているかどうかを検出します。

[ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API) に関連し、`vertical-viewport-segments` 機能は、折り曲げ画面型やマルチ画面型など、ディスプレイが論理的に別個のビューポートセグメントに分割されている端末（マルチビューポート端末）で適切に動作するレスポンシブデザインを作成するために使用できます。

## 構文

`vertical-viewport-segments` 特性は、端末が持つ垂直ビューポートセグメント数を表す `1` 以上の整数値 ({{cssxref("integer")}}) として指定します。

- 値は次の場合は `1` となります。
  - 折り曲げ式ではない端末（例えば、標準的な単一の画面を持つスマートフォンやタブレット）
  - 折り曲げ画面型端末が展開されているか閉じられた状態（[`continuous` 端末状態](/ja/docs/Web/API/Device_Posture_API#continuous)）にある。
  - 2 画面のマルチ画面型端末、または折り曲げ画面型端末で、現在折りたたまれており、横方向に配置されているため、画面セグメントが横に並んでいる状態。
- この値が `2` となるのは、2 画面のマルチ画面型端末、または折り曲げ画面型端末で、垂直方向に折れ曲がっている状態（[`folded` 端末状態](/ja/docs/Web/API/Device_Posture_API#folded)）であり、画面セグメントが縦に並んでいる状態です。
- 折り曲げ画面型端末で複数の折れ曲がり箇所がある場合、この値は `2` を超えることがあります。

## 例

### 基本的な `vertical-viewport-segments` の使い方

このスニペットでは、折り曲げ式端末でセグメントが上下に並んでいる場合を処理するため、`vertical-viewport-segments` メディアクエリーを使用しています。

上側のコンテナーの高さを上セグメントの高さ (`env(viewport-segment-height 0 0)`) に設定し、下側のコンテナーの高さを下セグメントの高さ (`env(viewport-segment-height 0 1)`) に設定します。

折り曲げ部分が両コンテナー間で占める高さを計算するには、上コンテナーの下端オフセットから下コンテナーの下端オフセットを差し引きます (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`)。

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

完全な動作デモについては、[ビューポートセグメント API デモ](https://mdn.github.io/dom-examples/viewport-segments-api/)を確認してください（[ソースコード](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)）。同時に、完全なデモの説明については[ビューポートセグメント API の使用方法](/ja/docs/Web/API/Viewport_segments_API/Using)も確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` 特性
- [ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) - developer.chrome.com (2024)
