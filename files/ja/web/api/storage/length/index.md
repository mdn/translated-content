---
title: "Storage: length プロパティ"
short-title: length
slug: Web/API/Storage/length
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Storage API")}}

**`length`** は {{domxref("Storage")}} インターフェイスの読み取り専用プロパティで、`Storage` オブジェクトに保存されているデータアイテムの数を表す整数を返します。

## 値

`Storage` オブジェクトに格納されているアイテムの数です。

## 例

以下の関数は現在のドメインのローカルストレージに 3 個のデータアイテムを追加して、ストレージ内のアイテムの数を返します。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  return localStorage.length; // 3 を返す
}
```

> [!NOTE]
> 現実世界の例として、 [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
