---
title: "Storage: removeItem() メソッド"
short-title: removeItem()
slug: Web/API/Storage/removeItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Storage API")}}

**`removeItem()`** は {{domxref("Storage")}} インターフェイスのメソッドは、キーの名前を渡すと、指定された `Storage` からキーを削除します。
**`Storage`** は[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) のインターフェイスで、特定のドメインのセッションストレージまたはローカルストレージへのアクセス機能を提供します。

指定されたキーに関連するアイテムがない場合、このメソッドは何もしません。

## 構文

```js-nolint
removeItem(keyName)
```

### 引数

- `keyName`
  - : 削除したいキーの名前を持つ文字列です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

以下の関数はローカルストレージに 3 個のデータ項目を作成した後、データ項目 `image` を削除します。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

セッションストレージについても同じことができます。

```js
function populateStorage() {
  sessionStorage.setItem("bgcolor", "red");
  sessionStorage.setItem("font", "Helvetica");
  sessionStorage.setItem("image", "myCat.png");

  sessionStorage.removeItem("image");
}
```

> [!NOTE]
> 現実世界のの例として、[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
