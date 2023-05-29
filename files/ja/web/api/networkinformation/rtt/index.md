---
title: NetworkInformation.rtt
slug: Web/API/NetworkInformation/rtt
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiref("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation.rtt`** は読み取り専用のプロパティで、現在の接続の推定有効ラウンドトリップ時間を、25 ミリ秒の倍数に丸めた値で返します。この値は、最近アクティブになった接続のアプリケーション層の RTT 測定値に基づいています。プライベートアドレス空間への接続は除外されます。最近の測定データが利用できない場合、この値は基盤となる接続技術のプロパティに基づきます。

{{AvailableInWorkers}}

## 値

数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("RTT")}}
