---
title: ClipboardItem
slug: Web/API/ClipboardItem
---

{{DefaultAPISidebar("Clipboard API")}}

**`ClipboardItem`** は{{domxref('Clipboard API', 'クリップボード API', '', 1)}} のインターフェイスで、 {{domxref('Clipboard API', 'クリップボード API', '', 1)}} を介して読み書きする単一の形式の項目を表します。読み書きはそれぞれ {{domxref("clipboard.read()")}} と {{domxref("clipboard.write()")}} で行います。

データを表現するために **`ClipboardItem`** インターフェイスを持つことの利点は、開発者がファイルタイプやデータの様々な範囲に簡単に対処できることです。

クリップボードの内容へのアクセスは[権限 API](/ja/docs/Web/API/Permissions_API) の下で制限されています。クリップボードへの書き込み権限は、ページがアクティブなタブにあるときに自動的に付与されます。 `clipboard-read` 権限は要求する必要があり、これはクリップボードからデータを読もうとすることで行えます。

> [!NOTE]
> テキストを扱うには、 {{domxref("Clipboard")}} インターフェイスの {{domxref("Clipboard.readText()")}} および {{domxref("Clipboard.writeText()")}} メソッドをご覧ください。

> [!NOTE]
> 一度に渡すことができるクリップボードの項目は 1 つだけです。

## コンストラクター

- {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}}
  - : 新しい **ClipboardItem`** オブジェクトを作成します。キーは {{Glossary("MIME type", "MIME タイプ")}}で、値は {{domxref("Blob")}} です。

## プロパティ

_このインターフェイスは以下のプロパティを提供しています。_

- {{domxref("ClipboardItem.types", "types")}} {{ReadOnlyInline}}
  - : この **`ClipboardItem`** 内で利用できる MIME タイプの配列 ({{jsxref("Array")}}) を返します。
- {{domxref("ClipboardItem.presentationStyle", "presentationStyle")}} {{ReadOnlyInline}}
  - : `"unspecified"`, `"inline"`, `"attachment"` のいずれかを返します。

## メソッド

_このインターフェイスは以下のメソッドを定義しています。_

- {{domxref("ClipboardItem.getType", "getType()")}}
  - : 要求された {{Glossary("MIME type", "MIME タイプ")}} の {{domxref("Blob")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。 MIME タイプが見つからない場合はエラーになります。

## 例

### クリップボードへの書き込み

ここでは、{{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}} に新しい {{domxref("Fetch API") }} を記述し、その{{domxref("Response.blob()", "レスポンスの blob()")}} メソッドを用いて、新しい {{domxref("ClipboardItem")}} を生成しています。

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

### クリップボードからの読み取り

ここでは、 {{domxref("clipboard.read()")}} メソッドでクリップボード上の全項目を返しています。次に、 {{domxref("ClipboardItem.types")}} プロパティを利用して {{domxref("ClipboardItem.getType", "getType()")}} の引数をセットし、対応する blob オブジェクトを返します。

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
