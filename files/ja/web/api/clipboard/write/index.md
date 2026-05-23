---
title: "Clipboard: write() メソッド"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`write()`** は {{domxref("Clipboard")}} インターフェイスのメソッドで、画像やテキストなどの任意の {{domxref("ClipboardItem")}} データをクリップボードに書き込み、完了時に返された {{jsxref("Promise")}} を解決します。
これを使用して、切り取りやコピー機能を実装することができます。

このメソッドは、理論上、任意のデータを書き込むことができます（テキストしか書き込めない {{domxref("Clipboard.writeText", "writeText()")}} とは異なります）。
ブラウザーでは一般的に、テキスト、HTML、PNG 画像データの書き込みに対応しています。

## 構文

```js-nolint
write(data)
```

### 引数

- `data`
  - : クリップボードに書き込むデータを含む {{domxref("ClipboardItem")}} オブジェクトの配列です。

### 返値

クリップボードにデータが書き込まれたときに解決される {{jsxref("Promise")}} です。
なお、基盤となる OS がシステムクリップボード上のネイティブの複数クリップボードアイテムに対応していない場合、配列内の最初の {{domxref("ClipboardItem")}} のみが書き込まれます。

クリップボードへの書き込みができない場合、そのプロミスは拒否されます。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : クリップボードへ書き込みをすることができない場合に発生します。

## セキュリティの注意事項

クリップボードからの読み取りは、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ行うことができます。

その他のセキュリティ要件は、API の概要トピックにある[セキュリティの注意事項](/ja/docs/Web/API/Clipboard_API#セキュリティの考慮)の節で網羅されています。

## 例

### テキストをクリップボードへ書き込む

この例の関数は、ボタンが押された際に、クリップボードの現在の内容を指定された文字列に置き換えます。
なお、このような特定のケースでは、`Clipboard.writeText()` を使用することもできます。

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}
```

`setClipboard()` 関数は `"text/plain"` MIME タイプを `type` 定数に指定し、次に単一のプロパティを持つ `clipboardItemData` オブジェクトを指定します。このプロパティのキーは MIME タイプであり、値はクリップボードに書き込みたい、渡されたテキストです。次に、新しい {{domxref("ClipboardItem")}} オブジェクトを作成し、そこに `clipboardItemData` オブジェクトを渡します。

最後に、`write()` を `await` 付きで呼び出し、データをクリップボードに書き込みます。

### キャンバスのコンテンツをクリップボードへ書き込む

この例では、キャンバスに青い矩形を描画します。
矩形をクリックすると、キャンバスのコンテンツを画像としてクリップボードにコピーできます。その後、別の要素を選択し、クリップボードからそのコンテンツを貼り付けることができます。

#### HTML

HTML は、`<canvas>` 要素と、キャンバスの画像を張り付ける ID が `target` の `<div>` 要素を定義しているだけです。

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">ここに貼り付けてください。</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 60px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

まず、キャンバスを Blob にコピーする非同期 (`async`) 関数を定義します。
これは、従来のコールバック形式の {{domxref("HTMLCanvasElement.toBlob()")}} メソッドを、より直感的な `Promise` ベースの関数にラップしたものです。

```js
// toBlob() コールバックを置き換える async/await 版メソッド
async function getBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("キャンバスの toBlob に失敗しました"));
      }
    });
  });
}
```

次に、キャンバスを設定し、`click` イベントのイベントリスナーを追加します。

青い矩形をクリックすると、その矩形を表示しているキャンバスの内容を blob にコピーし、その blob を `ClipboardItem` に追加された後、クリップボードに書き込みます。

```js
const canvas = document.getElementById("canvas");

// Set up canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  // キャンバスを blob へコピー
  try {
    const blob = await getBlobFromCanvas(canvas);
    // blob とその型をつけて ClipboardItem を作成し、配列に追加します
    const data = [new ClipboardItem({ [blob.type]: blob })];
    // データをクリップボードに書き込む
    await navigator.clipboard.write(data);
    log("コピーしました");
  } catch (error) {
    log(error);
  }
}
```

あまり一般的ではないファイル形式や、事前に形式が分からないリソースを取得する場合は、{{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} を使用してファイル形式が対応しているかを調べ、対応していない場合にはユーザーに適切なエラーメッセージを示すことをお勧めします。

次に、クリップボードのコンテンツを画像として表示させたい要素に対して、[`paste` イベント](/ja/docs/Web/API/Element/paste_event)のイベントリスナーを定義します。
[FileReader API](/ja/docs/Web/API/FileReader) を使用すると、[`readAsDataUrl`](/ja/docs/Web/API/FileReader/readAsDataURL) メソッドで Blob を読み取り、そのコンテンツを `<img>` 要素として生成することができます。

```js
target.addEventListener("paste", (event) => {
  const items = (event.clipboardData || window.clipboardData).items;
  const blob = items[0].getAsFile();
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const img = new Image();
    img.src = event.target.result;
    target.appendChild(img);
  });

  reader.readAsDataURL(blob);
});
```

```css hidden
body {
  font-family: sans-serif;
}
#target {
  border: 2px solid;
  padding: 1rem;
  height: 150px;
}
img {
  margin: 0.5rem;
}
```

#### 結果

結果は以下に示します。
まず青い四角をクリックし、次に「ここに貼り付け」というテキストを選択して、お使いの OS に応じたキーボードショートカット（Windows の場合は `Ctrl+V` など）を使用して、クリップボードから貼り付けてください。

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
