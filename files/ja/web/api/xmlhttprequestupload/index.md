---
title: XMLHttpRequestUpload
slug: Web/API/XMLHttpRequestUpload
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`XMLHttpRequestUpload`** インターフェイスは、特定の{{domxref("XMLHttpRequest")}}のアップロード処理を表します。これは _opaque_ オブジェクトで、基盤であるブラウザー依存のアップロード処理を表します。これは{{domxref("XMLHttpRequestEventTarget")}}であり、{{domxref("XMLHttpRequest.upload")}}を呼び出すことで取得できます。

{{AvailableInWorkers("notservice")}}

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスに特有のプロパティはありませんが、 {{domxref("XMLHttpRequestEventTarget")}} および {{domxref("EventTarget")}} から継承したプロパティがあります。_

## インスタンスメソッド

_このインターフェイスに特有のメソッドはありませんが、 {{domxref("XMLHttpRequestEventTarget")}} および {{domxref("EventTarget")}} から継承したメソッドがあります。_

## イベント

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
  - : リクエストが中止された場合に、例えばプログラムが {{domxref("XMLHttpRequest.abort()")}} を呼び出したために発行されます。
    `onabort` イベントハンドラープロパティでも利用できます。
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
  - : リクエストがエラーに遭遇したときに発行されます。
    `onerror` イベントハンドラープロパティでも利用できます。
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
  - : リクエストトランザクションが成功裏に完了したときに発行されます。
    `onload` イベントハンドラープロパティでも利用できます。
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
  - : リクエストが成功した場合（{{domxref("XMLHttpRequest/load_event", "load")}} の後）または失敗した場合（{{domxref("XMLHttpRequestUpload/abort_event", "abort")}} または {{domxref("XMLHttpRequest/error_event", "error")}} の後）に発行されます。
    `onloadend` イベントハンドラープロパティでも利用できます。
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
  - : リクエストがデータの読み込みを開始したときに発行されます。
    `onloadstart` イベントハンドラープロパティでも利用できます。
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
  - : リクエストがより多くのデータを受け取ったときに定期的に発行されます。
    `onprogress` イベントハンドラープロパティでも利用できます。
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
  - : あらかじめ設定された時間が経過し、進行が終了したときに発行されます。
    `ontimeout` イベントハンドラープロパティでも利用できます。

## 例

### タイムアウト付きでファイルをアップロード

アップロード中は進捗バーが表示され、進捗状況や成功・失敗のメッセージが表示されます。中止ボタンでアップロードを中止できます。

#### HTML

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>XMLHttpRequestUpload のテスト</title>
    <link rel="stylesheet" href="xhrupload_test.css" />
    <script src="xhrupload_test.js"></script>
  </head>
  <body>
    <main>
      <h1>ファイルのアップロード</h1>
      <p>
        <label for="file">アップロードするファイル</label>
        <input type="file" id="file" />
      </p>
      <p>
        <progress />
      </p>
      <p>
        <output></output>
      </p>
      <p>
        <button disabled id="abort">中止</button>
      </p>
    </main>
  </body>
</html>
```

#### CSS

```css
body {
  background-color: lightblue;
}

main {
  margin: 50px auto;
  text-align: center;
}

#file {
  display: none;
}

label[for="file"] {
  background-color: lightgrey;
  padding: 10px 10px;
}

progress {
  display: none;
}

progress.visible {
  display: inline;
}
```

#### JavaScript

```js
addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file");
  const progressBar = document.querySelector("progress");
  const log = document.querySelector("output");
  const abortButton = document.getElementById("abort");

  fileInput.addEventListener("change", () => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000; // 2 秒

    // リンク中止ボタン
    abortButton.addEventListener(
      "click",
      () => {
        xhr.abort();
      },
      { once: true },
    );

    // アップロードを開始する時に、進捗バーを表示する
    xhr.upload.addEventListener("loadstart", (event) => {
      progressBar.classList.add("visible");
      progressBar.value = 0;
      progressBar.max = event.total;
      log.textContent = "Uploading (0%)…";
      abortButton.disabled = false;
    });

    // 進捗イベントを受信するたびに、バーを更新する
    xhr.upload.addEventListener("progress", (event) => {
      progressBar.value = event.loaded;
      log.textContent = `Uploading (${(
        (event.loaded / event.total) *
        100
      ).toFixed(2)}%)…`;
    });

    // アップロードが完了したら、プログレスバーを非表示にする
    xhr.upload.addEventListener("loadend", (event) => {
      progressBar.classList.remove("visible");
      if (event.loaded !== 0) {
        log.textContent = "Upload finished.";
      }
      abortButton.disabled = true;
    });

    // エラー、中止、タイムアウトの場合、プログレスバーを非表示にする
    // これらのイベントは xhr オブジェクトでも待ち受けすることができることに注意
    function errorAction(event) {
      progressBar.classList.remove("visible");
      log.textContent = `Upload failed: ${event.type}`;
    }
    xhr.upload.addEventListener("error", errorAction);
    xhr.upload.addEventListener("abort", errorAction);
    xhr.upload.addEventListener("timeout", errorAction);

    // 本体を構築
    const fileData = new FormData();
    fileData.append("file", fileInput.files[0]);

    // 理論的には、 open() 呼び出しの後にイベントリスナーを設定することができますが、
    // ブラウザーはこの部分にバグがありがち
    xhr.open("POST", "upload_test.php", true);

    // イベントリスナーは送信する前に設定しなければならないことに注意してください（プリフライトリクエストであるため）。
    xhr.send(fileData);
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
