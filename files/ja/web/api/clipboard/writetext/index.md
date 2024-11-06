---
title: Clipboard.writeText()
slug: Web/API/Clipboard/writeText
---

{{APIRef("Clipboard API")}}

{{domxref("Clipboard")}} インターフェイスの **`writeText()`**
メソッドは、指定されたテキスト文字列をシステムのクリップボードに書き込みます。テキストは {{domxref("Clipboard.read", "read()")}} または {{domxref("Clipboard.readText", "readText()")}} を使って読み戻すことができます。

[権限 API](/ja/docs/Web/API/Permissions_API) の `"clipboard-write"` 権限は、ページがアクティブなタブにあるときに自動的に付与されます。

## 構文

```js
writeText(newClipText);
```

### 引数

- `newClipText`
  - : クリップボードに書き込む文字列。

### 返値

クリップボードの内容が更新されると解決されるプロミス ({{jsxref("Promise")}})。呼び出し元がクリップボードへの書き込み権限を持っていない場合、このプロミスは拒否されます。

## 例

この例では、クリップボードの内容を "\<empty clipboard>" という文字列に設定します。

```js
navigator.clipboard.writeText("<empty clipboard>").then(
  () => {
    /* clipboard successfully set */
  },
  () => {
    /* clipboard write failed */
  },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
