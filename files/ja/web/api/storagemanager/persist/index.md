---
title: "StorageManager: persist() メソッド"
short-title: persist()
slug: Web/API/StorageManager/persist
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}}

**`persist()`** は {{domxref("StorageManager")}} インターフェイスのメソッで、永続的ストレージ（persistent storage）を使用するパーミッションを要求します。 そして、パーミッションが付与されてボックスモードが永続的な場合は `true` に、そうでない場合は `false` に解決される {{jsxref("Promise")}} を返します。（詳細については、[ブラウザーのストレージ割り当てと削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#ブラウザーに格納されるデータは維持されるか)のガイドを参照してください。）

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できませんが、{{domxref("StorageManager")}} インターフェイスは自体利用可能です。

## 構文

```js-nolint
persist()
```

### 引数

なし。

### 返値

{{jsxref('Boolean')}} に解決される {{jsxref("Promise")}}。

### 例外

- `TypeError`
  - : ローカルストレージのシェルフの取得に失敗した場合に発生します。例えば、現在のオリジンが不透明なオリジンである場合や、ユーザーがストレージを無効にしている場合などです。

## 例

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
    if (persistent) {
      console.log("明示的なユーザー操作以外では、ストレージは消去されません。");
    } else {
      console.log(
        "ストレージは UA によってストレージの圧力により消去されるかもしれません。",
      );
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
