---
title: PWA にファイルを関連付ける
slug: Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

端末では、ファイルは通常アプリに関連付けられているため、ユーザーがファイルを開くと、オペレーティングシステムが適切なアプリを起動し、ファイルを渡します。例えば、 HTML ファイルはウェブブラウザーで、テキストファイルはテキストエディターで、動画は動画プレーヤーで開くことが多いです。

プログレッシブウェブアプリでもこの機能を利用できます。ユーザーが特定の形式のファイルをクリックすると、PWA が起動してそのファイルを処理できます。

ファイル処理に対応するには、次の 2 つを行います。

- ウェブアプリマニフェストメンバーの [`file_handlers`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers) を使用して、特定のファイル形式に対応していることを宣言します。
- {{domxref("LaunchQueue")}} インターフェイスを使用してファイルを処理します。

> [!NOTE]
> 現在、この機能は Chromium ベースのブラウザーだけで利用でき、デスクトップ OS のみで利用できます。

## ファイル形式への対応を宣言する

具体的なファイル形式に対応していることを宣言するには、 [`file_handlers`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers) メンバーが[マニフェストファイル](/ja/docs/Web/Progressive_web_apps/Manifest)に記述します。

`file_handlers` メンバーは、ファイルハンドラーオブジェクトの配列です。各ファイルハンドラーオブジェクトには、 `action` と `accept` という 2 つの必須プロパティが存在します。

- `accept` プロパティには {{Glossary("MIME_Type", "MIME タイプ")}}と関連付けるファイル拡張子を設定して、ハンドラーに扱い方を知らせます。
- `action` プロパティは、ユーザーがファイルを開くためのナビゲーション先となる URL です。このページは PWA のスコープ内に存在する必要があります。

下記のマニフェストファイルには、 {{Glossary("JPEG")}} と {{Glossary("PNG")}} ファイルを処理する単一のハンドラーを含む `file_handlers` メンバーが記載されており、ユーザーがこれらのファイルのいずれかをクリックすると、 PWA のルートページに移動します。

```json
{
  "name": "File handling demo",
  "icons": [
    {
      "src": "icons/lightbulb.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "file_handlers": [
    {
      "action": "/",
      "accept": {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"]
      }
    }
  ]
}
```

このマニフェストを設定すると、PWA のインストール後、ユーザーがこれらの形式のファイルを開いたときに PWA を起動できます。

通常、複数のアプリケーションが指定された形式のファイルを開くことができます。そのため、オペレーティングシステムには、ユーザーがファイルを開く際に使用するアプリケーションを選択したり、デフォルトのハンドラーを設定したりできる機能が用意されています。例えば、macOS では、ユーザーはファイルを右クリックして「情報を見る」を選択し、表示されるダイアログでデフォルトのハンドラーを設定できます。

![macOS でデフォルトのハンドラーを選択](macos-get-info-dialog.png)

## ユーザーの許可を求める

ユーザーが開いたファイルを処理するためにブラウザーが初めて PWA を起動しようとすると、PWA でファイルを開くことを確認するダイアログが表示されます。例えば、Chrome のダイアログは次のようになります。

![ファイルを処理するために PWA を起動する際の Chrome の警告ダイアログ](macos-chrome-launch-warning.png)

## ファイルの処理

ブラウザーが PWA を起動すると、`file_handlers` マニフェストメンバーの `action` プロパティで指定したページに移動します。そのページでファイルを処理するコードを実行してください。

ここで重要なインターフェイスは {{domxref("LaunchQueue")}} で、グローバルな {{domxref("Window")}} オブジェクトのプロパティとして利用できます。

`LaunchQueue` インターフェイスには、単一のメソッドである {{domxref("LaunchQueue/setConsumer", "setConsumer()")}} があり、引数として、ブラウザーが処理する 1 つ以上のファイルを持つ PWA を起動したときに呼び出されるコールバック関数を取ります。

コールバックに {{domxref("LaunchParams")}} オブジェクトを渡すと、そのオブジェクトには、ユーザーが開いたファイルの 1 つを表す {{domxref("FileSystemHandle")}} オブジェクトの配列が含まれている {{domxref("LaunchParams/files", "files")}} プロパティが含まれています。

例えば、次のサンプルコードでは、ファイルを読み込んでそのコンテンツを {{HTMLElement("img")}} 要素に割り当て、ページに追加しています。

```js
const imageContainer = document.querySelector("#container");

if ("launchQueue" in window) {
  launchQueue.setConsumer(async (launchParams) => {
    for (const file of launchParams.files) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(await file.getFile());
      imageContainer.appendChild(img);
    }
  });
}
```

API に対応していないブラウザーでもアプリが確実に動作するように、 `launchQueue` を使用する前に、存在しているかどうかをコードが調べることに注意してください。

## 関連情報

- [`file_handlers`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers) マニフェストメンバー
- {{domxref("LaunchQueue")}} インターフェイス
- [ファイルシステム API](/ja/docs/Web/API/File_System_API)
- [ファイル API](/ja/docs/Web/API/File_API)
- [Let installed web applications be file handlers](https://developer.chrome.com/docs/capabilities/web-apis/file-handling) (developer.chrome.com, 2022)
- [PWA 内のファイルを処理する](https://learn.microsoft.com/ja-jp/microsoft-edge/progressive-web-apps/how-to/handle-files) (learn.microsoft.com, 2023)
