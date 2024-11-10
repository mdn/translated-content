---
title: "Storage: setItem() メソッド"
short-title: setItem()
slug: Web/API/Storage/setItem
l10n:
  sourceCommit: 4e414137707f4734a1ac972491519320c4edf82c
---

{{APIRef("Web Storage API")}}

**`setItem()`** は {{domxref("Storage")}} インターフェイスのメソッドで、キーの名前と値を `Storage` オブジェクトに渡すと、ストレージにキーを追加したり、またはキーがすでに存在する場合はキーに対する値を更新したりします。

## 構文

```js-nolint
setItem(keyName, keyValue)
```

### 引数

- `keyName`
  - : 作成または更新したいキーの名前を持つ文字列です。
- `keyValue`
  - : 作成または更新したいキーに対して渡したい値を持つ文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

`setItem()` は、ストレージが満杯である場合に例外が発生します。開発者は、**`setItem()` で発生する可能性がある例外を常に捕捉する**ようにしてください。

## 例

以下の関数はローカルストレージに 3 個のデータアイテムを作成します。

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> [!NOTE]
> 現実世界のの例として、[Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) をご覧ください。

`Storage` は文字列の格納と取り出しにのみ対応しています。他にもデータ型を保存したい場合は、文字列に変換する必要があります。プレーンなオブジェクトや配列の場合は {{jsxref("JSON.stringify()")}} を使用します。

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

しかし、任意のデータ型を格納するために汎用的な方法はありません。さらに、取得されたオブジェクトは元オブジェクトの[ディープコピー](/ja/docs/Glossary/Deep_copy)であり、それに対する変更は元オブジェクトには影響しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Storage.getItem()](/ja/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/ja/docs/Web/API/Storage/removeItem)
- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
