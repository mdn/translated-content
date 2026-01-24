---
title: device-posture
slug: Web/CSS/Reference/At-rules/@media/device-posture
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{seecompattable}}

**`device-posture`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、端末の[現在の形態](/ja/docs/Web/API/Device_Posture_API)、つまり、ビューポートが平らな形態 (`continuous`) か、折り曲げられた形態 (`folded`) かを検出することができます。

## 構文

`device-posture` 特性は、以下のリストから選択したキーワード値として指定します。

- `continuous`
  - : 画面が平らな形態を示します。折り曲げ式の端末は、完全に開いているか完全に閉じられているか、平らな形態である間は `continuous` です。折り曲げ式ではない端末は平らとみなされるため、常に `continuous` です。これには、シームレスな曲面ディスプレイ、標準的なデスクトップ、ノートパソコン、タブレット、モバイル端末の画面が含まれます。
- `folded`
  - : 折り曲げられた画面の形態を示します。折り曲げ可能な端末は、本やノートパソコンのように使用しているときは `folded` の形態です。

## 例

この例では、 `device-posture` メディア特性により、端末が折り曲げられた形態にあることを検出すると、その向き ([`orientation`](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation)) に応じてマージンが追加され、アプリケーションの 2 つのパネル間の余白が広くなり、読みやすくなります。

```css
@media (device-posture: folded) and (orientation: landscape) {
  .list-view {
    margin-inline-end: 60px;
  }
}

@media (device-posture: folded) and (orientation: portrait) {
  .list-view {
    margin-block-end: 60px;
  }
}
```

上記のコードの動作を確認するには、可能であれば、折りたたみ式端末で [Device Posture API のデモ](https://mdn.github.io/dom-examples/device-posture-api/)をご覧ください。現在のブラウザー開発者ツールでは、折りたたみ式端末のエミュレーションは可能ですが、部分的に折りたたまれた端末のエミュレーションは記載されていません。完全に開かれた、または閉じられた端末のみエミュレーションできるため、常に `continuous` が返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DevicePosture")}}
- [端末形態 API](/ja/docs/Web/API/Device_Posture_API)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
