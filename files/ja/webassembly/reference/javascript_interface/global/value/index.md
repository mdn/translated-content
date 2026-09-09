---
title: WebAssembly.Global.prototype.value
short-title: value
slug: WebAssembly/Reference/JavaScript_interface/Global/value
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
---

**`value`** は [`WebAssembly.Global`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Global) オブジェクトプロトタイプのプロパティで、グローバル変数に含まれる値を返します。

## 値

グローバル変数の値を示す文字列。

## 解説

`Global` オブジェクトのインスタンスの `value` プロパティを使用すると、グローバル変数の値を直接取得または設定することができます。

セッターが機能するためには、グローバル変数が変更可能である必要があります（宣言時に [`mutable`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Global/Global#mutable) オプションが `true` に設定されていた場合）。そうでない場合、`TypeError` 例外が発生します。

## 例

### 変更不可のグローバルを作成

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: false }, 42);

// 42
console.log(myGlobal.value);

// TypeError
myGlobal.value = 100;
```

### 変更可能なグローバルを作成

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 42);

// 42
console.log(myGlobal.value);

myGlobal.value = 100;
// 100
console.log(myGlobal.value);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`global`](/ja/docs/WebAssembly/Reference/Definitions/global) の定義
- [WebAssembly](/ja/docs/WebAssembly)
