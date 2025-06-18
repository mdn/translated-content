---
title: アプリ間でデータを共有する
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

アプリケーションの共有とは、あるアプリケーションが、同じ端末上の別のアプリケーションに情報やデータを渡す機能です。この機能により、ユーザーは、アプリケーションが相互に認識していなくても、 2 つのアプリケーション間で情報を共有することができるため、とても便利です。

例えば、モバイル端末では、写真アプリから、画像を受け入れる別のアプリケーション（メールアプリケーションなど）に写真や動画を共有することができます。この共有パターンは、 2 つのアプリケーションがインストールされているオペレーティングシステム (OS) によって調整されています。

1. ユーザーが写真の共有を開始すると、写真アプリケーションは、選択した画像のデータ準備を行い、それをオペレーティングシステムに渡します。
2. オペレーティングシステムは、共有画像データを処理できるアプリケーションのリストを選択し、ユーザーに表示します。
3. ユーザーが対象アプリケーションのいずれかを選択すると、オペレーティングシステムは共有画像を使用してそのアプリケーションを起動します。

[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) も、同じ OS オーケストレーションパターンを使用して情報を共有する機能を備えています。PWA は、データの共有と共有データの受け入れの両方を行うことができます。

PWA を構築する場合、共有データを受け入れることで、 PWA がより親しみやすく、ユーザーの端末に自然に統合されたものになります。

## 他のアプリとのデータ共有

ユーザーが PWA から他のアプリとデータを共有できるようにするには、[ウェブ共有 API](/ja/docs/Web/API/Web_Share_API) を使用します。ウェブ共有 API を使用すると、アプリは基盤となるオペレーティングシステムの共有メカニズムを介して、テキスト、リンク、またはファイルを他のアプリと共有できます。

データを共有するには、ボタンクリックなどのユーザー操作に応じて、 {{domxref("navigator.share()")}} メソッドを使用します。

### 対応の確認

アプリケーションにコンテンツ共有 UI を表示する前に、ウェブ共有 API 機能に対応していることを確認してください。ウェブ共有 API に対応しているブラウザーでも、すべての種類のデータを共有できるわけではありません。したがって、最初に {{domxref("navigator.canShare()")}} メソッドを使用して、共有しようとしているデータが、アプリケーションを実行しているブラウザーから実際に共有できるかどうかを検証することをお勧めします。

この例では、ウェブ共有 API が対応しているかどうか、およびデータを共有できるかどうかを調べる方法を示します。

```js
function canBrowserShareData(data) {
  if (!navigator.share || !navigator.canShare) {
    return false;
  }

  return navigator.canShare(data);
}

const sharedDataSample = {
  title: "Some text title",
  text: "More text",
  url: "A url we want to share",
};

if (canBrowserShareData(sharedDataSample)) {
  // UI の共有ボタンを有効にする
  renderAppSharingUI();
} else {
  // このブラウザー/オペレーティングシステムでは共有が使えない
}
```

### 例外の処理

{{domxref("navigator.share()")}} メソッドはプロミス ({{jsxref("Promise")}}) を返しますが、共有データが正しくない場合、ユーザーが共有操作を中止した場合、またはデータ送信に失敗した場合などに拒否される可能性があります。

したがって、アプリの JavaScript コードでエラーを避けるためには、プロミスが拒否されたことを捕捉することが重要です。

```js
async function shareData(data) {
  try {
    await navigator.share(data);
    // データの共有に成功した
  } catch (e) {
    // データが共有できなかった
    console.error(`エラー: ${e}`);
  }
}
```

### テキストデータの共有

次の例は、アプリ内のボタンがクリックされたときにリンクとテキストを共有する方法を示しています。この例で使用されている `canBrowserShareData` 関数は、「[対応の確認](#対応の確認)」で説明されていますので、ここでは繰り返しません。

```js
// DOM からボタンを取得します。ボタンはこれで非表示になります。
const button = document.querySelector("#share");

if (canBrowserShareData({ text: "text", url: "https://example.com" })) {
  // ボタンを表示
  button.style.display = "inline";

  // ボタンをクリックしたイベントを待ち受けして、データを共有します。
  button.addEventListener("click", async () => {
    try {
      await navigator.share({
        text: "アプリ間でデータを共有する方法を学ぶための MDN 記事",
        url: "https://developer.mozilla.org/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps",
      });

      console.log("URL の共有に成功しました。");
    } catch (err) {
      console.error(`URL が共有できませんでした: ${err}`);
    }
  });
}
```

### ファイルの共有

次のサンプルコードは、アプリ内のボタンがクリックされたときにファイルを共有する方法を示しています。 `canBrowserShareFiles` 関数は、ブラウザーがファイル共有に対応している場合にのみ共有ボタンを表示するために使用されます。

```js
function canBrowserShareFiles() {
  if (!navigator.share || !navigator.canShare) {
    return false;
  }

  // ファイルで検査用のデータを作成し、ブラウザーが共有に対応しているかどうかを調べます。
  const testFile = new File(["foo"], "foo.txt", { type: "text/plain" });
  const data = { files: [testFile] };

  return navigator.canShare(data);
}

// DOM からボタンを取得します。ボタンはこれで非表示になります。
const button = document.querySelector("#share");

if (canBrowserShareFiles()) {
  // このブラウザーはファイルの共有に対応しています。ボタンを表示します
  button.style.display = "inline";

  // ボタンがクリックされるのを待ち受けし、ファイルを共有します。
  button.addEventListener("click", async () => {
    try {
      // 共有するファイルを取得します。
      // この関数は、File オブジェクトを返す必要があります。
      // これはおそらく動的に作成するか、 IndexedDB から取得します。
      const file = await getTheFileToShare();

      await navigator.share({
        title: "My shared file",
        files: [file],
      });

      console.log("ファイルの共有に成功しました。");
    } catch (err) {
      console.error(`ファイルの共有ができませんでした: ${err}`);
    }
  });
}
```

詳しくは、[ファイル共有の例](/ja/docs/Web/API/Navigator/share#sharing_files)を `navigator.share()` メソッドのページで参照してください。

## 他のアプリから来た共有データの処理

PWA を他のアプリの共有データのターゲットとして登録するには、[ウェブ共有ターゲット API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target)、具体的には [`share_target`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) ウェブアプリマニフェストメンバーを使用します。

`share_target` マニフェストメンバーを使用すると、インストールされた PWA を、他のアプリが共有するコンテンツの潜在的なターゲットとして、オペレーティングシステムレベルに登録することができます。これは、ユーザーが別のアプリから PWA と互換性のあるデータを共有すると、オペレーティングシステムが、メールやメッセージングアプリなどの他の一般的な共有ターゲットの横に PWA を一覧表示することを意味します。共有データを受信する潜在的なターゲットとして表示するには、PWA がインストールされている必要があることにご注意ください。

マニフェストファイルで `share_target` メンバーで指定した情報は、アプリがターゲットとなるデータ、およびユーザーがアプリをターゲットとして選択した場合にオペレーティングシステムがアプリを起動する方法を定義します。

### テキストデータの処理

これは、`share_target` メンバーを使用したウェブアプリマニフェストの例です。

```json
{
  "name": "ChattyBox",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "share_target": {
    "action": "/share-handler",
    "method": "GET",
    "params": {
      "text": "description",
      "url": "link"
    }
  }
}
```

ユーザーが別のアプリの共有コンテンツを処理するためにアプリを選択すると、アプリが起動し、 {{htmlelement("form")}} 要素が送信されるのと同様の方法で、共有コンテンツがアプリに渡されます。

先のウェブアプリマニフェストのサンプルコードでは、 ChattyBox アプリがターゲットとして選択されると、 HTTP の [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) リクエストが `/share-handler` の URL で発行されてアプリが起動し、共有データが `description` および `link` という名前付きリクエスト引数として渡されます。

`GET` リクエストは、 `/shared-handler?description=...&link=...` のようになります。

アプリのメインの JavaScript コードは、 [URLSearchParams](/ja/docs/Web/API/URLSearchParams) インターフェイスを使用して、共有データを取得することができます。

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

詳細については、 `share_target` ウェブアプリマニフェストメンバーのページにある「[GET を使用して共有データを受信する](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#共有されたデータを_get_で受け取る)」の例をご覧ください。

### 共有されたファイルの処理

前の例では、テキストデータは `GET` リクエストとして処理されました。しかし、ファイルを処理するには、 [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) リクエストを `multipart/form-data` [エンコード方式](/ja/docs/Web/API/HTMLFormElement/enctype)を使用する必要があります。

次のコードスニペットは、 PWA がさまざまな種類の共有ファイルを受け入れるように構成する方法を示しています。

```json
{
  "name": "ChattyBox",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "share_target": {
    "action": "/share-file-handler",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "files": [
        {
          "name": "textFiles",
          "accept": ["text/plain", ".txt"]
        },
        {
          "name": "htmlFiles",
          "accept": ["text/html", ".html"]
        },
        {
          "name": "images",
          "accept": ["image/jpeg", "image/png", "image/webp", "image/gif"]
        }
      ]
    }
  }
}
```

この例に示すように、 `files` プロパティの各ファイルオブジェクトは、 `name` プロパティと `accept` プロパティを保有している必要があります。 `accept` プロパティは、受け入れられる [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)またはファイル拡張子を指定する必要があります。

ユーザーが共有ファイル（または複数のファイル）を処理するためにアプリを選択すると、エンコードされたフォームデータとともに、 `POST` リクエストが `/share-file-handler` URL でアプリに送信され、アプリが起動します。

これは `POST` リクエストであるため、アプリのメイン JavaScript コードはフォームデータに直接アクセスできません。送信されたファイルは、 `/share-file-handler` の URL エンドポイントで受信して、サーバー側のコードで処理できます。ただし、オフラインでも動作するより優れた使い勝手を実現するには、次のように、 [`fetch` イベントハンドラー](/ja/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)を使用してサービスワーカーコードでファイルを処理します。

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  // このイベントリスナーは、 POST リクエストが /share-file-handler に送信された時だけ使用します。
  const url = new URL(event.request.url);
  if (
    event.request.method !== "POST" ||
    url.pathname !== "/share-file-handler"
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      // 送信されたフォームからデータを取得します。
      const formData = await event.request.formData();

      // 送信されたファイルを取得します。
      const textFiles = formData.getAll("textFiles");
      const htmlFiles = formData.getAll("htmlFiles");
      const imageFiles = formData.getAll("images");

      // ファイルをフロントエンドアプリに送信してください。
      sendFilesToFrontend(textFiles, htmlFiles, imageFiles);

      // インポートされたファイルを表示する URL にユーザーをリダイレクトします。
      return Response.redirect("/display-new-files", 303);
    })(),
  );
});
```

このサンプルコードでは、共有ファイルがフォームデータから抽出され、ユーザーは別のページにリダイレクトされます。抽出されたファイルの処理方法は、サービスワーカーのコードを使用して、ご自由に決定してください。たとえば、 {{domxref("Worker.postMessage()")}} メソッドを使用してアプリのメイン JavaScript コードに送信したり、サービスワーカーとアプリのメイン JavaScript コードの両方からアクセスできる [Indexed DB](/ja/docs/Web/API/IndexedDB_API) データベースに保存したりすることができます。

詳細については、 `share_target` ウェブアプリのマニフェストメンバーページにある、[共有ファイルの受信](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/share_target#receiving_shared_files)の例をご覧ください。

## 関連情報

- [ウェブ共有 API](/ja/docs/Web/API/Web_Share_API)
- [`share_target` マニフェストメンバー](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
- [Integrate with the OS sharing UI with the Web Share API](https://web.dev/articles/web-share) (web.dev)
- [Web Share Target API を使用して共有データを受信する](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) (developer.chrome.com)
- [他のアプリとコンテンツを共有する](https://learn.microsoft.com/ja-jp/microsoft-edge/progressive-web-apps-chromium/how-to/share) (microsoft.com)
