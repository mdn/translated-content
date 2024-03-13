---
title: ClipboardItem.types
slug: Web/API/ClipboardItem/types
---

{{DefaultAPISidebar("Clipboard API")}}

**`types`** は {{domxref("ClipboardItem")}} インターフェイスの読み取り専用プロパティで、この {{domxref("ClipboardItem")}} の内容で利用できる{{Glossary("MIME type", 'MIME タイプ')}}の配列 ({{jsxref("Array")}}) を返します。

## 値

利用できる{{Glossary("MIME type", 'MIME タイプ')}}の配列 ({{jsxref("Array")}}) です。

## 例

以下の例では、 {{domxref("clipboard.read()")}} メソッドによってクリップボード上のすべての項目を返しています。次に、 `types` プロパティで利用可能な型を確認し、 {{domxref("ClipboardItem.getType()")}} メソッドを使用して {{domxref("Blob")}} オブジェクトを返しています。指定されたタイプに対応するクリップボードのコンテンツが見つからない場合は、エラーが返されます。

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
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
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
