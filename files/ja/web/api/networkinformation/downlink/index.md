---
title: NetworkInformation.downlink
slug: Web/API/NetworkInformation/downlink
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{SeeCompatTable}}{{APIRef("Network Information API")}}

**`downlink`** は {{domxref("NetworkInformation")}} インターフェイスの読み取り専用プロパティで、実効帯域幅の推定値をメガビット毎秒で返し、25キロビット毎秒の最も近い倍数に丸めます。この値は、プライベートアドレス空間への接続を除き、最近アクティブになった接続で最近観測されたアプリケーション層のスループットに基づきます。最近の帯域幅測定データがない場合、属性の値は、基礎となる接続技術のプロパティによって決定されます。

## 値

数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Downlink")}}
