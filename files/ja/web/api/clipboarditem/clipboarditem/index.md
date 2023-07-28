---
title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
---

{{DefaultAPISidebar("Clipboard API")}}

**`ClipboardItem()`** は{{domxref("Clipboard API", "クリップボード API", "", 1)}} のコンストラクターで、新しい {{domxref("ClipboardItem")}} オブジェクトを生成します。これは、{{domxref("Clipboard API", "クリップボード API", "", 1)}} で保存・取得するデータを表し、それぞれ {{domxref("clipboard.write()")}} と {{domxref("clipboard.read()")}} で操作します。

> **メモ:** 画像形式の対応はブラウザーによって異なります。 {{domxref("Clipboard")}} インターフェイスについては、ブラウザーの互換性一覧表を参照してください。

## 構文

```js
new ClipboardItem(data);
new ClipboardItem(data, options);
```

### 引数

- `data`
  - : {{Glossary("MIME type", "MIME タイプ")}}をキー、データを値とする {{jsxref("Object")}} です。データは {{domxref("Blob")}}、文字列、または blob か文字列に解決する {{jsxref("Promise")}} として表現することが可能です。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `presentationStyle` {{optional_inline}}
      - : `unspecified`、`inline`、`attachment` の 3 つの文字列のうちの 1 つ。既定値は `unspecified`。

> **メモ:** また、 {{domxref("Clipboard")}} インターフェイスの {{domxref("Clipboard.readText()")}} メソッドと {{domxref("Clipboard.writeText()")}} メソッドにより、テキストを扱うことができます。

## 例

以下の例では、 {{domxref("Fetch API")}} を使って PNG 画像をリクエストし、 {{domxref("Response.blob()", "responses' blob()")}} メソッドを用いて新しい {{domxref("ClipboardItem")}} を生成しています。このアイテムは、 {{domxref("Clipboard.write()")}} メソッドを用いて、クリップボードに書き込まれます。

> **メモ:** 一度に渡すことができるクリップボードの項目は 1 つだけです。

```js
async function writeClipImg() {
  try {
    const imgURL = "/myimage.png";
    const data = await fetch(imgURL);
    const blob = await data.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    console.log("Fetched image copied.");
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
