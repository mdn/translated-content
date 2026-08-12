---
title: InternalError() コンストラクター
short-title: InternalError()
slug: Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

**`InternalError()`** コンストラクターは {{jsxref("InternalError")}} オブジェクトを生成します。

## 構文

```js-nolint
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

> [!NOTE]
> `InternalError()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せます。どちらも新しい `InternalError` インスタンスを生成します。

### 引数

- `message` {{optional_inline}}
  - : 人間が読むためのエラーの説明です。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `cause` {{optional_inline}}
      - : エラーの具体的な原因を示すプロパティです。
        エラーを捕捉し、より具体的または有用なエラーメッセージを付けて再度投げる場合、このプロパティを使用して元のエラーを渡すことができます。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 例外が発生したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい InternalError の生成

```js
new InternalError("Engine failure");
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
