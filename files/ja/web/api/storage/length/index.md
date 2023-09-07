---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} インターフェイスの読み取り専用プロパティ `length` は、`Storage` オブジェクトに保存されているデータアイテムの数を表す整数を返します。

## 構文

```js
var aLength = storage.length;
```

### 返値

整数

## 例

以下の関数はカレントドメインのローカルストレージに 3 個のデータアイテムを追加して、ストレージ内のアイテムの数を返します:

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // 3 を返す
}
```

> **メモ:** 実際の例として、[Web Storage Demo](https://github.com/mdn/web-storage-demo) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Storage.length")}}

## 関連情報

- [Web Storage API を使用する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
