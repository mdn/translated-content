---
title: "Keyboard: lock() メソッド"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: 371da4c57ffe165ed392b8d7e02c6904296ffe69
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

**`lock()`** は {{domxref("Keyboard")}} インターフェイスのメソッドで、物理キーボード上の任意のキーまたはすべてのキーのキー押下のキャプチャを有効にした後、プロミス ({{jsxref('Promise')}}) を返します。このメソッドでキャプチャできるのは、基本的なオペレーティングシステムがアクセスを許可しているキーだけです。

`lock()` を複数回呼び出すと、最後に呼び出したキーコードだけがロックされます。
前に `lock()` を呼び出したときにロックされたキーはロック解除されます。

## 構文

```js-nolint
lock()
lock(keyCodes)
```

### 引数

- `keyCodes` {{optional_inline}}
  - : ロックする 1 つ以上のキーコードの配列 ({{jsxref('Array')}})。キーコードが指定されなかった場合、すべてのキーがロックされます。有効なコード値のリストは、 [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) 仕様にあります。

### 返値

ロックが成功したときに {{jsxref('undefined')}} で解決される {{jsxref('Promise')}} です。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : 現在の呼び出しが終了する前に `lock()` を新たに呼び出した場合に発生します。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : keyCodes 内のキーが有効なキーコード属性値でない場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : アクティブな最上位の閲覧コンテキストで `lock()` が呼び出されなかった場合に発生します。

## セキュリティ

[一時的なユーザーによる有効化](/ja/docs/Web/Security/Defenses/User_activation)が必要です。この機能が動作するためには、ユーザーがページや UI 要素を操作する必要があります。

## 例

### すべてのキーのキャプチャ

次の例では、すべてのキー入力をキャプチャします。

```js
navigator.keyboard.lock();
```

### 特定のキーのキャプチャ

以下の例では、"W"、"A"、"S"、"D" キーをキャプチャしています。キーを押したときにどの修飾キーが使われたかに関係なく、これらのキーをキャプチャします。標準的な US QWERTY レイアウトを想定すると、 `"KeyW"` を登録することで、"W"、Shift+"W"、Control+"W"、Control+Shift+"W"、その他すべての修飾キーと "W" の組み合わせがアプリに送信されるようになります。
`KeyA"`、`"KeyS"`、`"KeyD"` についても同様です。

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
