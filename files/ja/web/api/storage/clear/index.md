---
title: "Storage: clear() メソッド"
short-title: clear()
slug: Web/API/Storage/clear
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Storage API")}}

**`clear()`** は {{domxref("Storage")}} インターフェイスのメソッドで、指定された `Storage` オブジェクトに格納されているすべてのキーを消去します。

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下の関数はローカルストレージに 3 個のデータアイテムを作成した後、 `clear()` を使用してすべて削除します。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "miGato.png");

  localStorage.clear();
}
```

> [!NOTE]
> 現実世界の例としては、 [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
