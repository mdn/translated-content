---
title: Response.arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("Fetch")}}

**`arrayBuffer()`** は {{domxref("Response")}} インターフェイスのメソッドで、リクエストの本体を読み取り、 {{jsxref("ArrayBuffer")}} で解決されるプロミスを返します。

## 構文

```js-nolint
arrayBuffer()
```

### 引数

なし。

### 返値

{{jsxref("ArrayBuffer")}} で解決されるプロミス。

## 例

### 音楽の演奏

[fetch array buffer のライブ](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer)では、Play ボタンを配置して、押下されると `getData()` 関数が実行されるようになっています。 再生する前に音声ファイル全体をダウンロードすることに注意してください。ダウンロード中に演奏を開始したい (つまりストリーム再生したい) 場合は、次のように {{domxref("HTMLAudioElement")}} を使いましょう。

```js
new Audio("music.ogg").play();
```

`getData()` 関数内では、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して OGG 音声トラックを読み取ります。 また、{{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource")}} を使用して、音声バッファーソースを作成します。 読み取りが成功したら、`arrayBuffer()` を使用してレスポンスから {{jsxref("ArrayBuffer")}} を読み取り、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} を使用して音声データをデコードし、デコードされたデータを音声バッファーソースのバッファー（`source.buffer`）として設定し、それから {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} にソースを接続します。

`getData()` の実行が完了すると、`start(0)` で音声ソースの再生を開始し、それから再生中に再度再生ボタンをクリックできないようにするために（これはよくエラーの原因になります）ボタンを無効化しています。

```js
function getData() {
  const audioCtx = new AudioContext();

  return fetch("viper.ogg")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.arrayBuffer();
    })
    .then((buffer) => audioCtx.decodeAudioData(buffer))
    .then((decodedData) => {
      const source = new AudioBufferSourceNode();
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
      return source;
    });
}

// wire up buttons to stop and play audio

play.onclick = () => {
  getData().then((source) => {
    source.start(0);
    play.setAttribute("disabled", "disabled");
  });
};
```

### ファイルを読む

{{domxref("Response.Response","Response()")}} コンストラクターは、 {{domxref("File")}} と {{domxref("Blob")}} を受け入れるため、 {{domxref("File")}} を他の形式に読み込むために使用することができます。

```js
function readFile(file) {
  return new Response(file).arrayBuffer();
}
```

```html
<input type="file" onchange="readFile(this.files[0])" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
