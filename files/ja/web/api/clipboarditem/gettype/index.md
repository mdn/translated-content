---
title: "ClipboardItem: getType() メソッド"
short-title: getType()
slug: Web/API/ClipboardItem/getType
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`getType()`** は {{domxref("ClipboardItem")}} インターフェイスのメソッドで、要求された {{Glossary("MIME type", "MIME タイプ")}} の {{domxref("Blob")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。MIME タイプが見つからない場合はエラーになります。

## 構文

```js-nolint
getType(type)
```

### 引数

- `type`
  - : 有効な {{Glossary("MIME type", "MIME タイプ")}}です。

### 返値

{{domxref("Blob")}} オブジェクトで解決するプロミス ({{jsxref("Promise")}})です。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : `type` が既知の {{Glossary("MIME type", "MIME タイプ")}}に一致しない。
- {{jsxref("TypeError")}}
  - : 引数が指定されなかった、または `type` が {{domxref("ClipboardItem")}} のものではない。

## 例

次の例では、 {{domxref("clipboard.read()")}} メソッドによってクリップボード上のすべてのアイテムを返しています。そして、 {{domxref("ClipboardItem.types")}} プロパティを利用して `getType()` 引数をセットし、対応する blob オブジェクトを返します。

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // ここで blob を使用することができます
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
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
