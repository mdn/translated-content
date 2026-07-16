---
title: "Clipboard: writeText() メソッド"
short-title: writeText()
slug: Web/API/Clipboard/writeText
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`writeText()`** は {{domxref("Clipboard")}} インターフェイスのメソッドで、指定されたテキスト文字列をシステムのクリップボードに書き込み、システムのクリップボードが更新されたら解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
writeText(newClipText)
```

### 引数

- `newClipText`
  - : クリップボードに書き込む文字列。

### 返値

クリップボードの内容が更新されると解決されるプロミス ({{jsxref("Promise")}}) です。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : クリップボードへ書き込みをすることができない場合に発生します。

## セキュリティの注意事項

クリップボードからの読み取りは、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ行うことができます。

その他のセキュリティ要件は、API の概要トピックにある[セキュリティの注意事項](/ja/docs/Web/API/Clipboard_API#セキュリティの考慮)の節で網羅されています。

## 例

この例では、クリップボードの内容を "\<empty clipboard>" という文字列に設定します。

```js
button.addEventListener("click", () => writeClipboardText("<empty clipboard>"));

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
