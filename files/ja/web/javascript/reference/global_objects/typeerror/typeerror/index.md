---
title: TypeError() コンストラクター
short-title: TypeError()
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`TypeError()`** コンストラクターは {{jsxref("TypeError")}} オブジェクトを生成します。

## 構文

```js-nolint
new TypeError()
new TypeError(message)
new TypeError(message, options)
new TypeError(message, fileName)
new TypeError(message, fileName, lineNumber)

TypeError()
TypeError(message)
TypeError(message, options)
TypeError(message, fileName)
TypeError(message, fileName, lineNumber)
```

> [!NOTE]
> `TypeError()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出すことができます。どちらも新しい `TypeError` インスタンスを作成します。

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `options` {{optional_inline}}
  - : 次のプロパティを持つオブジェクトです。
    - `cause` {{optional_inline}}
      - : エラーの具体的な原因を示すプロパティ。
        より具体的または有用なエラーメッセージでエラーを捕捉し再スローする場合、このプロパティを使用して元のエラーを渡すことができます。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### TypeError の捕捉

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // エラーのスタック
}
```

### TypeError の生成

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // エラーのスタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
