---
title: "Clipboard: readText() メソッド"
short-title: readText()
slug: Web/API/Clipboard/readText
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`readText()`** は {{domxref("Clipboard")}} インターフェイスのメソッドで、システムクリップボードのテキストの内容のコピーに解決されるプロミス ({{jsxref("Promise")}}) を返します。

> [!NOTE]
> クリップボードからテキスト以外のコンテンツを読み取る場合は、代わりに {{domxref("Clipboard.read", "read()")}} メソッドを使用してください。
> {{domxref("Clipboard.writeText", "writeText()")}} をすると、クリップボードにテキストを書き込むことができます。

## 構文

```js-nolint
readText()
```

### 引数

なし。

### 返値

クリップボードのテキストの内容を持つ文字列に解決される、プロミス ({{jsxref("Promise")}}) です。

クリップボードが空の場合、テキストが含まれていない場合、またはクリップボードの内容を表すオブジェクトの中にテキスト表現が含まれていない場合は、空文字列を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : クリップボードからの読み取りをすることができない場合に発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : クリップボードがテキストとして表すことができるデータが含まれていることを示しているにもかかわらず、テキスト形式での表現を提供できない場合に発生します。

## セキュリティの注意事項

クリップボードからの読み取りは、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ行うことができます。

その他のセキュリティ要件は、API の概要トピックにある[セキュリティの注意事項](/ja/docs/Web/API/Clipboard_API#セキュリティの考慮)の節で網羅されています。

## 例

この使用例は、クリップボードからテキストの内容を取得し、ある要素の内容にその取得されたテキストを設定します。

```js
const destination = document.getElementById("outbox");
destinationImage.addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((clipText) => (destination.innerText = clipText));
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
