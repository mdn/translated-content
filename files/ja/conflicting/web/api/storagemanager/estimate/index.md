---
title: StorageEstimate
slug: conflicting/Web/API/StorageManager/estimate
original_slug: Web/API/StorageEstimate
---

{{securecontext_header}}{{APIRef("Storage")}}

**`StorageEstimate`** ディクショナリは、サイトまたはアプリのデータストアのサイズとその使用量の概算値を提供するために {{domxref("StorageManager")}} によって使用されます。{{domxref("StorageManager.estimate", "estimate()")}} メソッドは、その {{jsxref("Promise")}} が解決されたときにこのディクショナリに適合するオブジェクトを返します。

これらの値は、パフォーマンスと、ストレージ容量データがフィンガープリント目的で使用されることの防止との両方を含む、いくつかの理由のため、単なる概算値にすぎません。詳細は各プロパティのページをご覧ください。

## プロパティ

- {{domxref("StorageEstimate.quota", "quota")}} {{securecontext_inline}}
  - : ユーザーのデバイスやコンピューターがサイトオリジンやウェブアプリで使用できる合計ストレージの控えめな概算値を提供する数値。それが事実であることに頼ることはできませんが、この利用可能なスペースの量より多くがある可能性があります。
- {{domxref("StorageEstimate.usage", "usage")}} {{securecontext_inline}}
  - : `quota` で示される利用可能スペースのうち、サイトやウェブアプリが現在使用しているストレージスペースの量を概算する数値。
- {{domxref("StorageEstimate.usageDetails", "usageDetails")}} {{securecontext_inline}}
  - : ストレージシステムごとの `usage` の内訳を含むディクショナリ。含まれるメンバーはすべて 0 より大きい `usage` を持ち、`usage` が 0 のストレージシステムはすべてディクショナリから除外されます。

## 仕様

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Storage', '#dictdef-storageestimate', 'StorageEstimate')}} | {{Spec2('Storage')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.StorageEstimate")}}

## 関連情報

- [Storage API](/ja/docs/Web/API/Storage_API)
- {{domxref("StorageManager")}}
- {{domxref("StorageManager.estimate()")}}
- {{domxref("NavigatorStorage.storage", "navigator.storage")}}
