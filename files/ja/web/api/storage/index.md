---
title: Storage
slug: Web/API/Storage
---

{{APIRef("Web Storage API")}}

Web Storage API の `Storage` インターフェイスは、特定のドメインのセッションストレージまたはローカルストレージへのアクセス機能を提供して、例えば保存されているデータアイテムを追加、変更、削除することができます。

ドメインのセッションストレージを操作したい場合は、{{domxref("Window.sessionStorage")}} メソッドを呼び出してください。ドメインのローカルストレージを操作したい場合は、{{domxref("Window.localStorage")}} を呼び出してください。

## プロパティ

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : `Storage` オブジェクトに保存されているデータアイテムの数を表す整数を返します。

## メソッド

- {{domxref("Storage.key()")}}
  - : 数値 n を渡すと、ストレージ内で n 番目のキーの名称を返します。
- {{domxref("Storage.getItem()")}}
  - : キーの名称を渡すと、キーに対する値を返します。
- {{domxref("Storage.setItem()")}}
  - : キーの名称と値を渡すと、ストレージにキーを追加し、または既存のキーに対する値を更新します。
- {{domxref("Storage.removeItem()")}}
  - : キーの名称を渡すと、ストレージからキーを削除します。
- {{domxref("Storage.clear()")}}
  - : ストレージからすべてのキーを消去します。

## 例

ここでは、`localStorage` を呼び出して `Storage` オブジェクトにアクセスしています。始めに `!localStorage.getItem('bgcolor')` というコードを使用して、ローカルストレージにデータアイテムが含まれているかを確認します。含まれている場合は、{{domxref("Storage.getItem()")}} を使用してデータアイテムを取得して、さらにそのデータを使用してページのスタイルを更新する `setStyles()` 関数を実行します。含まれていない場合は `populateStorage()` 関数を実行します。こちらは {{domxref("Storage.setItem()")}} を使用してアイテムの値を設定してから、`setStyles()` 関数を実行します。

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
}
setStyles();

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);
}

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

> **メモ:** 完全に動作する例として実行する様子を見るために、[Web Storage Demo](https://github.com/mdn/web-storage-demo) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Storage")}}

## 関連情報

- [Web Storage API を使用する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
