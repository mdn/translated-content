---
title: "Response: bytes() メソッド"
short-title: bytes()
slug: Web/API/Response/bytes
l10n:
  sourceCommit: 638277dd6c4ab389c6b606dbb7d21b6bd838ba76
---

{{APIRef("Fetch API")}}

**`bytes()`** は {{domxref("Response")}} インターフェイスのメソッドで、{{domxref("Response")}} を取り、終わりまで読み取ります。
{{jsxref("Uint8Array")}} で解決されるプロミスを返します。

## 構文

```js-nolint
bytes()
```

### 引数

None.

### 返値

{{jsxref("Uint8Array")}} で解決されるプロミス。

### 例外

- {{domxref("DOMException")}} `AbortError`
  - : リクエストが[中止された](/ja/docs/Web/API/Fetch_API/Using_Fetch#リクエストの中止)場合。
- {{jsxref("TypeError")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheader("Content-Encoding")}} ヘッダーが不正な場合など）。
- {{jsxref("RangeError")}}
  - : 関連づけられた `ArrayBuffer` を作成する際に問題が発生した場合。
    例えば、データサイズが [`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) を超える場合など。

## 例

### ファイルの読み取りとデコード

下記のコードは、テキストファイルを取得し、本体を {{jsxref("Uint8Array")}} として返す方法を示しています。その後、これを文字列にデコードします。

```js
const response = await fetch("https://www.example.com/textfile.txt");
const textFile = await response.bytes();
const string = new TextDecoder().decode(textFile);
console.log(string);
```

### 画像ファイルのシグネチャの取得

この例では、`bytes()` を使用して複数の画像ファイルのシグネチャバイトを読み込み、型を識別する方法を示しています。

#### HTML

まず、ファイルの種類を選択するための {{htmlelement("select")}} 要素を定義し、ウィキメディア・コモンズから取得する特定のファイルを示す対応する値を持ちます。

```html
<label for="file-select">ファイルを選択:</label>

<select name="Files" id="file-select">
  <option value="">--画像の形式を選択--</option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png">
    PNG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg">
    JPG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example.gif">
    GIF89a
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

コードの最初の部分では、`bytes()` メソッドに対応しているかどうかを確認します。
メソッドに対応している場合は、`<select>` 要素に [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベント用のイベントハンドラーを追加します。
値が変更されると、選択された値(画像ファイルの URL)を下記で定義する `checkSignature()` メソッドに渡します。
このメソッドが対応していない場合は、この情報をログに記録します。

```js
if ("bytes" in Response.prototype) {
  const selectFileElement = document.getElementById("file-select");
  selectFileElement.addEventListener("change", (event) => {
    try {
      checkSignature(event.target.value);
    } catch (e) {
      log(e);
    }
  });
} else {
  log("Response.bytes() に対応していません");
}
```

`checkSignature()` メソッドは下記で定義されています。
これは、指定されたURLのファイルを取得し、`response.bytes()` を使用してコンテンツをバイト配列として取得します。
次に、初期バイトを一般的なファイル形式の初期シグネチャバイトと比較します。
そしてファイル名とファイル形式をログ出力します。

```js
async function checkSignature(url) {
  if (url == "") return;
  log(`File: ${url}`);
  const response = await fetch(url);
  const image = await response.bytes();

  // File signatures from: https://en.wikipedia.org/wiki/List_of_file_signatures
  const jpgSignature = [0xff, 0xd8, 0xff, 0xe0];
  const pngSignature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  const gif89aSignature = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61];

  if (
    image
      .slice(0, jpgSignature.length)
      .every((byte, index) => byte === jpgSignature[index])
  ) {
    log(`JPG signature: FF D8 FF E0`);
  } else if (
    image
      .slice(0, pngSignature.length)
      .every((byte, index) => byte === pngSignature[index])
  ) {
    log(`PNG signature: 89 50 4E 47 0D 0A 1A 0A`);
  } else if (
    image
      .slice(0, gif89aSignature.length)
      .every((byte, index) => byte === gif89aSignature[index])
  ) {
    log(`GIF (GIF89a) signature: 47 49 46 38 39 61`);
  } else {
    log("Unknown format");
  }
}
```

#### 結果

選択リストを使用して画像の種類を選べます。
ログ出力には、ファイルのシグネチャから判別されたファイル型とともにファイル名が表示されます。

{{EmbedLiveSample("画像ファイルのシグネチャの取得", "100", "200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
