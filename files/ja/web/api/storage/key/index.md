---
title: "Storage: key() メソッド"
short-title: key()
slug: Web/API/Storage/key
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Storage API")}}

**`key()`** は {{domxref("Storage")}} インターフェイスのメソッドで、数値 n を渡すと、指定された `Storage` 内で n 番目のキーの名称を返します。キーの順序はユーザエージェント依存であり、この順序に頼るべきではありません。

## 構文

```js-nolint
key(index)
```

### 引数

- `index`
  - : 名称を取得したいキーの番号を表す整数。これは 0 から始まるインデックスです。

### 返値

キーの名前を持つ文字列です。該当のインデックスが存在しない場合は `null` が返ります。

## 例

以下の関数は、ローカルストレージのキー全体に対して反復処理を行います。

```js
function forEachKey(callback) {
  for (let i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

以下の関数は、ローカルストレージのキーを反復処理し、各キーに設定された値を取得します。

```js
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
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
