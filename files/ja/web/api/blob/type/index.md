---
title: "Blob: type プロパティ"
short-title: type
slug: Web/API/Blob/type
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`type`** は {{domxref("Blob")}} インターフェイスの読み取り専用プロパティで、このファイルの {{Glossary("MIME type", "MIME タイプ")}}を返します。

> [!NOTE]
> 現在の実装に基づくと、ブラウザーはファイルのバイトストリームを実際に読み込んで、そのメディア形式を決定するわけではありません。
> ファイル拡張子に基づいて推測されます。PNG 画像ファイルの拡張子を .txt に変更すると、"_text/plain_" となり、"_image/png_" とはなりません。さらに、`blob.type` で信頼性が高いのは、画像、HTML 文書、音声、動画などの一般的なファイル形式のみです。
> 一般的ではないファイル拡張子は空文字列を返します。
> クライアント構成（例えば、Windows レジストリー）は、一般的な形式であっても予期しない値になる可能性があります。 **開発者は、このプロパティを唯一の検証手段として使用しないよう注意してください。**

### 値

ファイルの MIME タイプを含む文字列、または型が特定できなかった場合は空文字列を指定します。

## 例

この例では、ユーザーにいくつかのファイルを選択してもらい、各ファイルが指定された画像ファイルタイプのセットのいずれかであるかどうかを確認します。

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">画像ファイルを選択してください…</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// このアプリケーションは GIF, PNG, JPEG 画像のみを許可します
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "画像ファイルを選択してください…";
    return;
  }

  const allAllowed = Array.from(files).every((file) =>
    allowedFileTypes.includes(file.type),
  );
  output.innerText = allAllowed
    ? "すべてのファイルが合格です!"
    : "画像ファイルのみを選択してください。";
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
