---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
tags:
  - JavaScript
  - メソッド
  - プロトタイプ
  - Reference
  - WeakRef
browser-compat: javascript.builtins.WeakRef.deref
translation_of: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
---
{{JSRef}}

`deref` メソッドは {{jsxref("WeakRef")}} インスタンスのターゲットオブジェクトを返します。そのオブジェクトが既にガベージコレクションされている場合は `undefined` を返します。

## 構文

```js
deref()
```

### 返値

WeakRef のターゲットオブジェクトです。そのオブジェクトが既にガベージコレクションされている場合は `undefined` です。

## 注意事項

重要な注意事項については {{jsxref("WeakRef")}} ページの [WeakRef の注意事項](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs)の節を参照してください。

## 例

### deref の使用

完全な例については {{jsxref("WeakRef")}} ページ内の[例](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples)の節を参照してください。

```js
const tick = () => {
  // 弱参照から要素を取得する (まだ存在していれば)
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // 要素が既に存在しない場合
    console.log("この要素は消滅しました");
    this.stop();
    this.ref = null;
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakRef")}}
