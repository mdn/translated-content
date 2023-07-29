---
title: share_target
slug: Web/Manifest/share_target
l10n:
  sourceCommit: f7a5accb5daac36bf909f45ad79642a454e64646
---

{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

マニフェストの `share_target` メンバーは、{{Glossary("Progressive Web Apps", "プログレッシブウェブアプリ")}} (PWA) をシステムの共有ダイアログの共有先として登録することを可能にします。

登録されインストールされると、Web Share Target API を用いる PWA は電子メール、メッセンジャー、そしてその他の共有されるコンテンツを受け取れるネイティブアプリといったシステム上の通常の共有先とともに、コンテンツの共有先として振る舞います。

> **メモ:** Web Share API を用いてデータを共有したい場合、[Web Share API](/ja/docs/Web/API/Web_Share_API) および [`navigator.share()`](/ja/docs/Web/API/Navigator/share) を参照してください。

## プロパティ

アプリケーションがどのように共有されるデータを受け取るかを定義するため、マニフェスト中の `share_target` オブジェクトは以下のプロパティを持つことができます。(`action` と `params` は必須です)

- `action`
  - : ウェブ共有先の URL です。
- `enctype` {{Optional_Inline}}
  - : [`POST`](/ja/docs/Web/HTTP/Methods/POST) リクエストが用いられる場合の、共有データのエンコーディングです。[`GET`](/ja/docs/Web/HTTP/Methods/GET) リクエストでは無視されます。
- `method` {{Optional_Inline}}
  - : 使用する [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)です。[`GET`](/ja/docs/Web/HTTP/Methods/GET) または [`POST`](/ja/docs/Web/HTTP/Methods/POST) のいずれかを指定します。共有されるデータが画像などのバイナリデータを含むか、対象のアプリケーションに変化を起こす (例えば、ブックマークなどのデータを生成する) 場合、`POST` を指定してください。
- `params`
  - : 共有のパラメーターを設定するオブジェクトです。このオブジェクトのキーは [`navigator.share()` における `data` オブジェクト](/ja/docs/Web/API/Navigator/share#%E5%BC%95%E6%95%B0)に対応します。以下の値が指定でき、クエリーパラメーターとして用いられます。
    - `title` {{Optional_Inline}}: 共有されるドキュメントのタイトル用のクエリーパラメーターの名前です。
    - `text` {{Optional_Inline}}: 共有されるメッセージのテキスト (本文) 用のクエリーパラメーターの名前です。
    - `url` {{Optional_Inline}}: 共有されるリソースの URL 用のクエリーパラメーターの名前です。
    - `files` {{Optional_Inline}}: 共有先が受け入れるファイルの種類を定義するオブジェクト (またはオブジェクトの配列) です。このオブジェクトには以下のプロパティが必要です。
      - `name`: ファイルの共有に用いるフォームフィールドの名前です。
      - `accept`: 受け入れる MIME タイプまたはファイルの拡張子を表す文字列 (または文字列の配列) です。

## 例

### 共有されたデータを GET で受け取る

以下の `share_target` マニフェストメンバーにより、共有先を登録できます。

```json
{
  "share_target": {
    "action": "/shared-content-receiver/",
    "method": "GET",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link"
    }
  }
}
```

ユーザーがシステムの共有ダイアログでこのアプリケーションを選択すると、この PWA が起動し、指定のクエリーパラメーターが入った指定の URL に HTTP の `GET` リクエストが発生します。これは `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F` のような URL になります。

アプリケーションで共有されたデータを処理するには、{{domxref("URLSearchParams")}} インターフェイスが便利です。

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### 共有されたデータを POST で受け取る

共有の要求が一つまたは複数のファイルを含むか、アプリケーションに副作用を及ぼす場合、HTTP の [`POST`](/ja/docs/Web/HTTP/Methods/POST) メソッドを使用するべきです。例えば、アプリケーションが処理対象の画像を受け取ったり、共有されたリンクをブックマークとしてデータベースに保存する場合が該当します。

```json
{
  "share_target": {
    "action": "/save-bookmark/",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "url": "link"
    }
  }
}
```

`POST` により共有されたデータはサーバーサイドのコードで処理することもできますし、オフラインのユーザーによりよい体験を提供するため、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)内で `fetch` イベントリスナーを用いて HTTP リクエストに割り込み、データにアクセスすることもできます。

```js
self.addEventListener("fetch", (event) => {
  // Web Share Target には関係ない通常のリクエスト
  if (event.request.method !== "POST") {
    event.respondWith(fetch(event.request));
    return;
  }

  // Web Share Target 関係のリクエスト
  event.respondWith(
    (async () => {
      const formData = await event.request.formData();
      const link = formData.get("link") || "";
      // 元の URL `/save-bookmark/` のかわりに、
      // `saveBookmark()` 関数が返す URL、例えば `/` に
      // ユーザーをリダイレクトします。
      const responseUrl = await saveBookmark(link);
      return Response.redirect(responseUrl, 303);
    })(),
  );
});
```

処理後、ユーザーがページをリロードした場合などに `POST` リクエストが複数回送られるのを防ぐため、この `POST` リクエストには HTTP の [303 See Other](/ja/docs/Web/HTTP/Status/303) リダイレクトで応答するべきです。

### 共有されたファイルを受け取る

共有されたファイルを受け取るには、HTTP メソッドは `POST`、`enctype` は `multipart/form-data` とし、受け入れるファイルの種類を定義する `files` エントリーを用意しなければいけません。

`files` エントリーは `name` プロパティを持っていなければならず、`accept` プロパティは受け入れる MIME タイプまたはファイルの拡張子を指定しなければなりません。オペレーティングシステムがどっちを使いたいかが違うかもしれないので、両方を指定するのがおそらく良いでしょう。

```json
{
  "share_target": {
    "action": "/file-collector",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link",
      "files": [
        {
          "name": "lists",
          "accept": ["text/csv", ".csv"]
        },
        {
          "name": "photos",
          "accept": ["image/svg+xml", ".svg"]
        }
      ]
    }
  }
}
```

共有されたファイルのデータを扱うためには、前述の `POST` の例を参照し、ファイルを読むために {{domxref("FileReader")}} API を用います。サービスワーカーコンテキストからクライエントコンテキストにファイルを渡すための一つの方法として、ファイルを一時的に {{domxref("Cache")}} または [IndexedDB](/ja/docs/Web/API/IndexedDB_API) に格納し、クライアントに {{domxref("Client.postMessage()")}} により通知する方法があります。

## セキュリティとプライバシー

PWA は、インストールされている場合のみウェブ共有先として振る舞うことができます。[PWA をインストール可能にするには](/ja/docs/Web/Progressive_web_apps/Installable_PWAs)も参照してください。

HTML フォームから送信された場合と同様に、共有先としてアプリケーションに送られたデータは注意して扱うべきです。使う前に必ず入力データを検証してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
