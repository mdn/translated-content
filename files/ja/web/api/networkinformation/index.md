---
title: NetworkInformation
slug: Web/API/NetworkInformation
l10n:
  sourceCommit: bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation`** は[ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API) のインターフェイスで、端末がネットワークとの通信に使用している接続に関する情報を提供し、接続の種類が変更された場合にスクリプトに通知するための手段を提供します。
`NetworkInformation` インターフェイスはインスタンスを生成できません。代わりに、{{domxref("Navigator")}} インターフェイスの `connection` プロパティを通してアクセスします。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは、親である {{domxref("EventTarget")}} のプロパティも継承しています。_

- {{domxref("NetworkInformation.downlink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 実効帯域幅の推定値をメガビット毎秒で返します。 25 キロビット毎秒の最も近い倍数に丸められた値です。
- {{domxref("NetworkInformation.downlinkMax")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 基盤となる接続技術の下りの最大速度を、メガビット毎秒 (Mbps) 単位で返します。
- {{domxref("NetworkInformation.effectiveType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 'slow-2g', '2g', '3g', '4g' のいずれかを意味する接続の有効な種類を返します。この値は、最近観測されたラウンドトリップ時間とダウンリンク値の組合せを使用して決定されます。
- {{domxref("NetworkInformation.rtt")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 推定有効ラウンドトリップ時間を、 25 ミリ秒の倍数に丸めた値で返します。
- {{domxref("NetworkInformation.saveData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ユーザーがユーザーエージェントにデータ使用量の削減オプションを設定している場合、 `true` を返します。
- {{domxref("NetworkInformation.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 端末がネットワーク通信に使用している接続の種類を返します。値は次のうちのいずれかです。
    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

## インスタンスメソッド

_このインターフェイスは、親である {{domxref("EventTarget")}} のメソッドを継承しています。_

### イベント

- {{domxref("NetworkInformation.change_event", "change")}} {{Experimental_Inline}}
  - : 接続情報が変更されたときに発行されるイベントです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [オンライン／オフラインイベント](/ja/docs/Web/API/Navigator/onLine)
