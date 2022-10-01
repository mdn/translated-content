---
title: NetworkInformation
slug: Web/API/NetworkInformation
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation`** インターフェースは、デバイスがネットワーク通信に使用している接続の情報を提供します。また、接続の種類が変更した場合、スクリプトに通知する手段を提供します。`NetworkInformation` インターフェースは、インスタンス生成できません。代わりに、{{domxref("Navigator")}} インターフェースの `connection` プロパティを通してアクセスします。

## プロパティ

_このインターフェースは、親である {{domxref("EventTarget")}} のプロパティも継承しています。_

- {{domxref("NetworkInformation.type")}} {{readonlyinline}}

  - : デバイスがネットワーク通信に使用している接続の種類を返す。値は次のうちのいずれかである：

    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

- {{domxref("NetworkInformation.downlinkMax")}} {{readonlyinline}}
  - : メガビット毎秒（Mbps）単位で、基底の接続技術の最大下り速度を返す。

### イベントハンドラ

- {{domxref("NetworkInformation.onchange")}}
  - : 接続情報が変更されたときに発火するイベントで、このオブジェクトで {{event("change")}} が発火する。

## メソッド

_このインターフェースは、親である {{domxref("EventTarget")}} のメソッドを継承しています。_

## 仕様

| 仕様                                                                                                                 | ステータス                                   | コメント   |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------- |
| {{SpecName('Network Information', '#idl-def-NetworkInformation', 'NetworkInformation')}} | {{Spec2('Network Information')}} | 最初の定義 |

## ブラウザ実装状況

{{Compat("api.NetworkInformation")}}

## 関連項目

- [Network Information API](/ja/docs/Web/API/Network_Information_API)
- [Online and offline events](/ja/docs/Online_and_offline_events)
- これを実装している {{domxref("Navigator")}} インターフェース。
