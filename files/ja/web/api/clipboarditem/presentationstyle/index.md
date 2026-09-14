---
title: "ClipboardItem: presentationStyle プロパティ"
short-title: presentationStyle
slug: Web/API/ClipboardItem/presentationStyle
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`presentationStyle`** は {{domxref("ClipboardItem")}} インターフェイスの読み取り専用プロパティで、アイテムをどう表示すべきかを示す文字列を返します。

例えば、コンテキストによっては画像がインラインで表示されることもありますし、添付ファイルとして表されることもあります。

## 値

`"unspecified"`, `"inline"`, `"attachment"` のいずれかです。

## 例

以下の例では、 {{domxref("clipboard.read()")}} メソッドによってクリップボード上のすべてのアイテムを返し、 `presentationStyle` プロパティをログ出力しています。

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
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
