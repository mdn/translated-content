---
title: file_handlers
slug: Web/Progressive_web_apps/Manifest/Reference/file_handlers
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{SeeCompatTable}}

`file_handlers` メンバーは、インストールされた[プログレッシブウェブアプリ (PWA)](/ja/docs/Web/Progressive_web_apps) が処理できるファイルの型を表すオブジェクトの配列を指定します。

`file_handlers` メンバーは、PWA がインストールされ使用される際にブラウザーによって読み取られ、オペレーティングシステムレベルで指定された一連のファイル形式とアプリケーションが関連付けられた際に使用されます。

例えば、ある PWA を `text/plain` の [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types/Common_types)と一致するファイルを処理させることができます。この PWA がインストールされると、オペレーティングシステムはこれを使用してテキストファイルを処理できるようになり、ユーザーがこの形式のファイルをオープンすると、PWA が開きます。なお、他にもテキストファイルのハンドラーとして登録されているアプリケーションがある可能性があり、オペレーティングシステムがファイル形式とアプリケーションの関連付けを管理する方法、および指定されたファイルを処理するアプリケーションをユーザーに選択させる方法は、端末によって異なる場合があります。

> [!NOTE]
> `file_handlers` メンバーは、指定されたファイル形式を設定して PWA を登録するために使用されますが、これによって一致するファイルがオープンされたときにのみ、オペレーティングシステムが PWA を起動する結果となります。その後、PWA は実際に JavaScript コードを使用してファイルを処理する必要があります。詳しくは[ファイルの処理](#ファイルの処理)を参照してください。

### 値

オブジェクトの配列。配列内の各オブジェクトには、次の値が含まれている必要があります（`action` と `accept`は必須です）。

- `action`
  - : ファイルを処理する際の移動先の URL が入っている文字列。
    この URL は、 PWA が移動できる URL のセットである PWA のナビゲーションスコープ内に設定する必要があります。 PWA のナビゲーションスコープは、 [`start_url`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) メンバーが既定値ですが、 [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) メンバーを使用して設定することもできます。

- `accept`
  - : オブジェクトです。このオブジェクトのそれぞれのキーは次のようなものです。
    - プロパティのキーは MIME タイプです。
    - プロパティ値は、その MIME タイプに関連付けられたファイル拡張子を表す文字列の配列です。

## 例

この例では、ウェブアプリマニフェストで、音声ファイルを処理するアプリを登録するファイルハンドラーを 1 つ宣言しています。この例では、簡潔にするために、 `name` や `icons` などの他のマニフェストメンバーは記載していません。

```json
{
  "file_handlers": [
    {
      "action": "/handle-audio-file",
      "accept": {
        "audio/wav": [".wav"],
        "audio/x-wav": [".wav"],
        "audio/mpeg": [".mp3"],
        "audio/mp4": [".mp4"],
        "audio/aac": [".adts"],
        "audio/ogg": [".ogg"],
        "application/ogg": [".ogg"],
        "audio/webm": [".webm"],
        "audio/flac": [".flac"],
        "audio/mid": [".rmi", ".mid"]
      }
    }
  ]
}
```

### ファイルの処理

実際に PWA でファイル処理を実装するには、ウェブ開発者は {{domxref("Window.launchQueue")}} を使用して、アプリケーションの JavaScript コードで受信したファイルを処理する必要があります。

ファイルの処理は、{{Glossary("Main thread", "メインスレッド")}}で動作するアプリケーションコードで行われ、アプリケーションの[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)では行われません。

次の例では、 {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} を使用して、入力した音声ファイル群を受け取り、最初のものを {{domxref("HTMLAudioElement.Audio", "Audio")}} 要素で再生するためのコールバック関数を指定します。

```js
async function playSong(handledFile) {
  const blob = await handledFile.getFile();
  const url = window.URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.play();
}

if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files && launchParams.files.length) {
      playSong(launchParams.files[0]);
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Handle files in Progressive Web Apps on learn.microsoft.com](https://learn.microsoft.com/ja/microsoft-edge/progressive-web-apps/how-to/handle-files)
- [Let installed web applications be file handlers on developer.chrome.com](https://developer.chrome.com/docs/capabilities/web-apis/file-handling)
