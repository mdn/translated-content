---
title: "Window: sharedStorage プロパティ"
short-title: sharedStorage
slug: Web/API/Window/sharedStorage
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Shared Storage API")}}{{SecureContext_Header}}{{non-standard_header}}

グローバルの読み取り専用プロパティである **`sharedStorage`** は、現在のオリジンの {{domxref("WindowSharedStorage")}} オブジェクトを返します。これは、[共有ストレージ API](/ja/docs/Web/API/Shared_Storage_API)を使用して共有ストレージにデータを書き込むための主要なエントリーポイントです。

> [!NOTE]
> `sharedStorage` はウェブワーカー内では利用できません。これは {{domxref("Window")}} に実装されており、共有ストレージワークレットでも利用できます（{{domxref("WorkletSharedStorage")}} を返す {{domxref("SharedStorageWorkletGlobalScope.sharedStorage")}} を参照）。

## 値

{{domxref("WindowSharedStorage")}} オブジェクトのインスタンスです。

## 例

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(() => console.log("共有ストレージに値を保存しました"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WindowSharedStorage")}}
- [共有ストレージ API](/ja/docs/Web/API/Shared_Storage_API)
