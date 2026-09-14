---
title: "Clipboard: read() メソッド"
short-title: read()
slug: Web/API/Clipboard/read
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`read()`** は {{domxref("Clipboard")}} インターフェイスのメソッドで、クリップボードのコンテンツのコピーをリクエストし、返される {{jsxref("Promise")}} をそのデータで履行します。

このメソッドは、理論上、任意のデータを返すことができます（テキストしか返せない {{domxref("Clipboard.readText", "readText()")}} とは異なります）。
ブラウザーでは一般的に、テキスト、HTML、PNG 画像データの読み取りに対応しています。

## 構文

```js-nolint
read()
read(formats)
```

### 引数

- `formats` {{optional_inline}}
  - : 以下のプロパティを持つオプションのオブジェクトです。
    - `unsanitized` {{optional_inline}}
      - : 文字列の配列 ({{jsxref("Array")}}) で、クリップボードから読み込む際に無害化が行われないデータ形式の MIME タイプが入ります。

        ブラウザーによっては、悪意のあるコンテンツが文書に貼り付けられるのを防ぐため、クリップボードのデータを読み込む際に無害化処理を行う場合があります。例えば、Chrome（およびその他の Chromium ベースのブラウザー）では、`<script>` タグやその他の潜在的に危険なコンテンツを削除することで、HTML データを無害化します。`unsanitized` 配列を使用すると、無害化処理を行わない MIME タイプの一覧を指定することができます。

### 返値

クリップボードの内容が含まれている {{domxref("ClipboardItem")}} オブジェクトの配列で解決する {{jsxref("Promise")}} です。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : クリップボードからの読み取りをすることができない場合に発生します。

## セキュリティの注意事項

クリップボードからの読み取りは、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ行うことができます。

その他のセキュリティ要件は、API の概要トピックにある[セキュリティの注意事項](/ja/docs/Web/API/Clipboard_API#セキュリティの考慮)の節で網羅されています。

## 例

### 画像データの読み取り

この例では、`read()` メソッドを使用してクリップボードから画像データを読み取り、それを {{HTMLElement("img")}} 要素に貼り付けます。

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" src="" alt="Pasted image" />
<button id="reload" type="button">再読み込み</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}
#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

このコードは、エラーを ID が `log` の要素にログ出力するための仕組みを提供します。

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

同時に、「再読み込み」ボタンが押された際に、例を再読み込みしてクリアするコードも追加します。

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

残りのコードは、出力先要素がクリックされた際にクリップボードを読み取り、画像データを `destinationImage` 要素にコピーします。
`read()` メソッドが使用できない場合、またはクリップボードに PNG 形式のデータが含まれていない場合は、エラーをログに出力します。

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("クリップボードに PNG 画像データが入っていません。");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### 結果

左側の蝶の画像をコピーするには、画像を右クリックし、コンテキストメニューから「画像をコピー」を選択してください。
次に、右側の空のフレームをクリックしてください。
この例では、クリップボードから画像データを取得し、空のフレームに画像を表示させます。

{{EmbedLiveSample("Reading image data from clipboard", "100%", "250", "", "", "", "clipboard-read")}}

> [!NOTE]
> プロンプトが表示されたら、画像を貼り付けるための権限を付与してください。

### クリップボードからデータの読み取り

この例では、`read()` メソッドを使用してクリップボードからデータを読み取り、クリップボードに格納されているデータをログ出力します。

このバージョンは前のものと異なり、画像だけでなく、テキスト、HTML、および画像の {{domxref("ClipboardItem")}} オブジェクトも表示させるようになります。

#### HTML

```html-nolint
<img id="source_jpg" src="butterfly.jpg" alt="JPG butterfly image" />
<div id="destination">ここをクリックすると、クリップボードにデータをコピーします。</div>
<button id="reload" type="button">再読み込み</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}

#destination {
  min-height: 300px;
  min-width: 90%;
  margin: 0 1rem;
  border: 1px solid black;
}

#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

このコードは、エラーを ID が `log` の要素にログ出力するための仕組みを提供します。

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

同時に、「再読み込み」ボタンが押された際に、例を再読み込みしてクリアするコードも追加します。

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

残りのコードは、出力先要素がクリックされた際にクリップボードを読み取り、それぞれの {{domxref("ClipboardItem")}} 要素とその MIME タイプを表示します。
`read()` メソッドが使用できない場合、またはクリップボードに他の MIME タイプが含まれている場合は、エラーをログに記録します。

```js
const destinationDiv = document.querySelector("#destination");
destinationDiv.addEventListener("click", pasteData);

async function pasteData() {
  destinationDiv.innerText = ""; // 中身のテキストをクリア
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      for (const mimeType of item.types) {
        const mimeTypeElement = document.createElement("p");
        mimeTypeElement.innerText = `MIME タイプ: ${mimeType}`;
        destinationDiv.appendChild(mimeTypeElement);
        if (mimeType === "image/png") {
          const pngImage = new Image();
          pngImage.alt = "クリップボード内の PNG 画像";
          const blob = await item.getType("image/png");
          pngImage.src = URL.createObjectURL(blob);
          destinationDiv.appendChild(pngImage);
        } else if (mimeType === "text/html") {
          const blob = await item.getType("text/html");
          const blobText = await blob.text();
          const clipHTML = document.createElement("pre");
          clipHTML.innerText = blobText;
          destinationDiv.appendChild(clipHTML);
        } else if (mimeType === "text/plain") {
          const blob = await item.getType("text/plain");
          const blobText = await blob.text();
          const clipPlain = document.createElement("pre");
          clipPlain.innerText = blobText;
          destinationDiv.appendChild(clipPlain);
        } else {
          throw new Error(`${mimeType} には対応していません。`);
        }
      }
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### 結果

下記にあるテキストまたは蝶の画像 (JPG) をコピーしてください（画像をコピーするには、画像を右クリックし、コンテキストメニューから「画像をコピー」を選択してください）。
下記で示されたフレームを選択し、クリップボードからその情報をフレームに貼り付けてください。

{{EmbedLiveSample("Reading data from the clipboard", "100%", "500", "", "", "", "clipboard-read")}}

メモ:

- 蝶の画像が JPG ファイルであっても、クリップボードから読み込むと PNG になります。
- プロンプトが表示された場合は、画像を貼り付けるために権限を与える必要があります。
- サンプルフレームには、[Permissions-Policy](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy) の `clipboard-read` および `clipboard-write` 権限が与えられていないため、Chromium 系ブラウザーでは正常に動作しない可能性があります（[Chromium 系ブラウザーでは必須](/ja/docs/Web/API/Clipboard_API#security_considerations)）。

### クリップボードからの無害化されていない HTML の読み取り

この例では、`formats` 引数を使用してクリップボードから HTML データを読み込み、ブラウザーによる事前処理を経ずに、コードを元の形式のまま取得します。

#### HTML

```html
<textarea id="source" rows="5">
  <style>h1 {color: red;} p {color: blue;}</style>
  <h1>Hello world!</h1>
  <p>This is a test.</p>
  <script>alert('Hello world!');</script>
</textarea>
<button id="copy">HTML をコピー</button>
<button id="paste_normal">HTML を貼り付け</button>
<button id="paste_unsanitized">無害化されていない HTML を貼り付け</button>
<textarea id="destination" rows="5"></textarea>
```

#### CSS

```css
body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

textarea {
  grid-column: 1 / span 3;
}
```

#### JavaScript

```js
const copyButton = document.getElementById("copy");
const pasteButton = document.getElementById("paste_normal");
const pasteUnsanitizedButton = document.getElementById("paste_unsanitized");
const sourceTextarea = document.getElementById("source");
const destinationTextarea = document.getElementById("destination");

copyButton.addEventListener("click", async () => {
  const text = sourceTextarea.value;
  const type = "text/html";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  try {
    await navigator.clipboard.write(data);
  } catch (error) {
    destinationTextarea.value = `クリップボードへの書き込みに失敗: ${error}`;
  }
});

async function getHTMLFromClipboardContents(clipboardContents) {
  for (const item of clipboardContents) {
    if (item.types.includes("text/html")) {
      const blob = await item.getType("text/html");
      const blobText = await blob.text();
      return blobText;
    }
  }

  return null;
}

pasteButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read();
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "クリップボード内に HTML データが見つかりません。";
  } catch (error) {
    destinationTextarea.value = `クリップボードからの読み取りに失敗: ${error}`;
  }
});

pasteUnsanitizedButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read({
      unsanitized: ["text/html"],
    });
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "クリップボード内に HTML データが見つかりません。";
  } catch (error) {
    destinationTextarea.value = `クリップボードからの読み取りに失敗: ${error}`;
  }
});
```

#### 結果

まず、「HTML をコピー」ボタンをクリックして、最初のテキストエリアの HTML コードをクリップボードにコピーしてください。その後、「HTML を貼り付け」ボタン、または「無害化されていない HTML を貼り付け」ボタンをクリックして、無害化された HTML コード、または無害化されていない HTM Lコードを 2 つ目テキストエリアに貼り付けてみてください。

{{EmbedLiveSample("Reading unsanitized HTML from the clipboard", "100%", "250", "", "", "", "clipboard-read; clipboard-write")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Unblocking clipboard access](https://web.dev/articles/async-clipboard) - web.dev
- [Unsanitized HTML in the Async Clipboard API](https://developer.chrome.com/docs/web-platform/unsanitized-html-async-clipboard) - developer.chrome.com
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
