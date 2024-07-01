---
title: ClipboardItem.presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
---

{{DefaultAPISidebar("Clipboard API")}}

**`presentationStyle`** は {{domxref("ClipboardItem")}} インターフェイスの読み取り専用プロパティで、アイテムをどう表示すべきかを示す文字列を返します。

## 値

`"unspecified"`, `"inline"`, `"attachment"` のいずれかです。

## 例

以下の例では、 {{domxref("clipboard.read()")}} メソッドによってクリップボード上のすべての項目を返し、 `presentationStyle` プロパティをログ出力しています。

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      console.log(clipboardItem.presentationStyle);
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
