---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

**`deref()`** は {{jsxref("WeakRef")}} インスタンスのメソッドで、この `WeakRef` のターゲット値、またはその値が既にガベージコレクションされている場合は `undefined` を返します。

## 構文

```js-nolint
deref()
```

### 引数

なし。

### 返値

この WeakRef の参照先となるターゲット値で、オブジェクトまたは[未登録のシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー)のどちらかです。その値が既にガベージコレクションされている場合は `undefined` です。

## 解説

重要な注意事項については {{jsxref("WeakRef")}} ページの [WeakRef の注意事項](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#weakref_における注意)の節を参照してください。

## 例

### deref() の使用

完全な例については {{jsxref("WeakRef")}} ページ内の[例](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#例)の節を参照してください。

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
