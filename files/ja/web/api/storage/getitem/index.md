---
title: Storage.getItem()
slug: Web/API/Storage/getItem
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} インターフェイスの `getItem()` メソッドはキーの名称を渡すと、そのキーに対する値を返します。

## 構文

```js
var aValue = storage.getItem(keyName);
```

### 引数

- `keyName`
  - : 値を取り出したいキーの名称を持つ {{domxref("DOMString")}}。

### 返値

キーに対する値を持つ {{domxref("DOMString")}}。キーが存在しない場合は `null` が返ります。

## 例

以下の関数はローカルストレージから 3 個のデータアイテムを取り出して、その値を使用してページのカスタムスタイルを設定します。

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **メモ:** 実際の例として、[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Storage.getItem")}}

## 関連情報

- [Storage.setItem()](/ja/docs/Web/API/Storage/setItem)
- [Storage.removeItem()](/ja/docs/Web/API/Storage/removeItem)
- [Web Storage API を使用する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
