---
title: "ClipboardItem: supports() 静的メソッド"
short-title: supports()
slug: Web/API/ClipboardItem/supports_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`supports()`** は {{domxref("ClipboardItem")}} インターフェイスの静的メソッドで、クリップボードで指定された {{Glossary("MIME type", "MIME タイプ")}}が対応している場合は `true` を返し、そうでない場合は `false` を返します。

なお、[クリップボード API](/ja/docs/Web/API/Clipboard_API) では、プレーンテキスト、HTML、PNG ファイルの対応が必須となっています。
`supports()` メソッドは、これらの MIME タイプに対しては常に `true` を返すため、これらを検査する必要はありません。

## 構文

```js-nolint
supports(type)
```

### 引数

- `type`
  - : 検査対象の {{Glossary("MIME type", "MIME タイプ")}}を示す文字列。

    次の MIME タイプは常に対応しています。
    - `text/plain`
    - `text/html`
    - `image/png`

    次の MIME タイプに対応している場合があります。
    - `image/svg+xml`
    - `"web "` で始まる独自の MIME タイプの形式。
      独自のタイプ（`"web "` という接頭辞を除く）は、MIME タイプとして正しい形式でなければなりません。

### 返値

指定された {{Glossary("MIME type", "MIME タイプ")}}がクリップボードで対応している場合は `true`、そうでない場合は `false` を返します。

## 例

### クリップボードへの画像の書き込み

次の例では、SVG 画像を取得し、それを {{domxref("Blob")}} として表した後、クリップボードに書き込みます。

ここでは、`supports()` を使用して、クリップボードが `"image/svg+xml"` の MIME タイプに対応しているかどうかを調べます。それから画像を読み取り、{{domxref("clipboard.write()")}} を使用してクリップボードに書き込みます。
また、関数本体を [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) 文で囲み、例えば `ClipboardItem` 自体に対応していない場合など、その他のあらゆるエラーを捕捉します。

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/my-image.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("読み込んだ画像をコピーしました。");
    } else {
      console.log("SVG 画像はクリップボードで対応していません。");
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
