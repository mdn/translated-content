---
title: device-posture
slug: Web/CSS/Reference/At-rules/@media/device-posture
original_slug: Web/CSS/@media/device-posture
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{seecompattable}}

**`device-posture`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、端末の[現在の状態](/ja/docs/Web/API/Device_Posture_API)、つまり、ビューポートが平ら (`continuous`) 状態か、折り曲げられた (`folded`) 状態かを検出することができます。

## 構文

`device-posture` 特性は、以下のリストから選択したキーワード値として指定します。

- `continuous`
  - : 画面が平らな状態を示します。折り曲げ式の端末は、完全に開いているか完全に閉じられているか、平らな状態である間は `continuous` です。折り曲げ式ではない端末は平らとみなされるため、常に `continuous` です。これには、シームレスな曲面ディスプレイ、標準的なデスクトップ、ノートパソコン、タブレット、モバイル端末の画面が含まれます。
- `folded`
  - : 折り曲げられた画面の状態を示します。折り曲げ可能な端末は、本やノートパソコンのように使用しているときは `folded` の状態です。

## 例

この例では、 `device-posture` メディア特性により、端末が折られた状態にあることを検出すると、その向き ([`orientation`](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation)) に応じてマージンが追加され、アプリケーションの 2 つのパネル間の余白が広くなり、読みやすくなります。

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
- [Device Posture API](/ja/docs/Web/API/Device_Posture_API)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
