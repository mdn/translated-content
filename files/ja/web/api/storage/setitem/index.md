---
title: Storage.setItem()
slug: Web/API/Storage/setItem
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} インターフェイスの `setItem()` メソッドはキーの名称と値を渡すと、ストレージにキーを追加し、またはキーがすでに存在する場合はキーに対する値を更新します。

## 構文

```js
storage.setItem(keyName, keyValue);
```

### 引数

- `keyName`
  - : 作成または更新したいキーの名称を持つ {{domxref("DOMString")}}。
- `keyValue`
  - : 作成または更新するキーに対して渡したい値を持つ {{domxref("DOMString")}}。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

`setItem()` は、ストレージが満杯である場合に例外が発生します。特に Mobile Safari (iOS 5 以降) では、ユーザがプライベートモードに入っているときに必ず例外が発生します (Safari はプライベートモードで、クォータを 0 バイトに設定します。一方他のブラウザは別のデータコンテナを使用して、プライベートモードでもストレージを使用できます)。
従って開発者は、**`setItem()` で発生する可能性がある例外を常にキャッチする**ようにしてください。

## 例

以下の関数はローカルストレージに 3 個のデータアイテムを作成します。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> **メモ:** 実際の例として、[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Storage.setItem")}}

## 関連情報

- [Storage.getItem()](/ja/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/ja/docs/Web/API/Storage/removeItem)
- [Web Storage API を使用する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
