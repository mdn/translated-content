---
title: "ClipboardItem: ClipboardItem() コンストラクター"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`ClipboardItem()`** は新しい {{domxref("ClipboardItem")}} オブジェクトを生成します。これは、[クリップボード API](/ja/docs/Web/API/Clipboard_API) で保存・取得するデータを表し、それぞれ {{domxref("clipboard.write()")}} と {{domxref("clipboard.read()")}} で操作します。

> [!NOTE]
> `read()` および `write()` メソッドは、テキスト文字列や {{domxref("Blob")}} インスタンスで表される任意のデータアイテムの作業に使用できます。ただし、テキストのみを作業する場合は、{{domxref("Clipboard.readText()")}} および {{domxref("Clipboard.writeText()")}} メソッドを使用したほうが便利です。

> [!NOTE]
> 画像の対応形式はブラウザーによって異なります。`Clipboard` インターフェイスの[ブラウザーの互換性一覧表](/ja/docs/Web/API/Clipboard#ブラウザーの互換性)を参照してください。

## 構文

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### 引数

- `data`
  - : {{Glossary("MIME type", "MIME タイプ")}}をキー、データを値とする {{jsxref("Object")}} です。
    データは次のいずれかで表すことができます。
    - {{domxref("Blob")}}
    - 文字列
    - `Blob` または文字列に解決する {{jsxref("Promise")}}
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `presentationStyle` {{optional_inline}}
      - : `unspecified`、`inline`、`attachment` の 3 つの文字列のうちの 1 つ。デフォルト値は `unspecified` です。

        `inline` は、貼り付けを受け取るアプリに対して、`ClipboardItem` を貼り付け位置にインラインで挿入すべきであることを示します。`attachment` は、貼り付けを受け取るアプリに対して、`ClipboardItem` を添付ファイルとして追加すべきであることを示します。`unspecified` は、貼り付けを受け取るアプリに対して何の情報も示しません。

## 例

以下の例では、{{domxref("Window/fetch", "fetch()")}} を使って PNG 画像をリクエストし、 {{domxref("Response.blob()")}} メソッドを用いて新しい {{domxref("ClipboardItem")}} を生成しています。このアイテムは、 {{domxref("Clipboard.write()")}} メソッドを用いて、クリップボードに書き込まれます。

> [!NOTE]
> 一度に渡すことができるクリップボードのアイテムは 1 つだけです。

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/png")) {
      const imgURL = "/my-image.png";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("読み込んだ画像をコピーしました。");
    } else {
      console.log("PNG 画像に対応していません");
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
