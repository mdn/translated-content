---
title: Storage
slug: Web/API/Storage
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Storage API")}}

**`Storage`** は[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) のインターフェイスで、特定のドメインのセッションストレージまたはローカルストレージへのアクセス機能を提供して、例えば保存されているデータアイテムを追加、変更、削除することができます。

例えば、ドメインのセッションストレージを操作したい場合は、{{domxref("Window.sessionStorage")}} メソッドを呼び出してください。ドメインのローカルストレージを操作したい場合は、{{domxref("Window.localStorage")}} を呼び出してください。

## プロパティ

- {{domxref("Storage.length")}} {{ReadOnlyInline}}
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
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> [!NOTE]
> 完全に動作する例として実行する様子を見るために、[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}
