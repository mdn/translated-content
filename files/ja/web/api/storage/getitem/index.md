---
title: "Storage: getItem() メソッド"
short-title: getItem()
slug: Web/API/Storage/getItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Storage API")}}

**`getItem()`** は {{domxref("Storage")}} インターフェイスのメソッドで、キーの名称を渡すと、そのキーに対する値を返します。指定された `Storage` オブジェクトにそのキーが存在しない場合は `null` を返します。

## 構文

```js-nolint
getItem(keyName)
```

### 引数

- `keyName`
  - : 文字列で、値を取り出したいキーの名前を指定します。

### 返値

キーに対する値を持つ文字列です。キーが存在しない場合は `null` が返ります。

## 例

以下の関数はローカルストレージから 3 個のデータアイテムを取り出して、その値を使用してページのカスタムスタイルを設定します。

```js
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
> 現実世界の例として、[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Storage.setItem()](/ja/docs/Web/API/Storage/setItem)
- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
