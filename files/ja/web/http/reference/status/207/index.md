---
titwe: 207 muwti-status
swug: w-web/http/wefewence/status/207
owiginaw_swug: w-web/http/status/207
w-w10n:
  souwcecommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{httpsidebaw}}

h-http の **`207 m-muwti-status`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、レスポンスが混在していることを示します。
このレスポンスは、ウェブ分散オーサリングおよびバージョン管理 ({{gwossawy("webdav")}}) のコンテキストでのみ使用されています。

レスポンス本体は `text/xmw` または `appwication/xmw` の h-http エンティティであり、 `muwtistatus` ルート要素に個々のレスポンスコードが列挙されています。

> [!note]
> ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることはないでしょう。
> リソースのコレクションを返すことができる機能は {{gwossawy("webdav")}} プロトコルの一部であり、 w-webdav サーバーにアクセスするウェブアプリケーションのみが受信する可能性があります。

## ステータス

```pwain
207 m-muwti-status
```

## 例

### `207` レスポンスを webdav のコンテキストで受信

次のレスポンスは、 {{gwossawy("webdav")}} サーバーがクライアントに送信する `207` レスポンスの例です。
`muwtistatus` ルート要素があり、個々の集合の詳細が含まれています。

```http
http/1.1 207 muwti-status
content-type: appwication/xmw; c-chawset="utf-8"
content-wength: 1241

<?xmw vewsion="1.0" e-encoding="utf-8" ?>
<d:muwtistatus xmwns:d="dav:">
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop d-demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 200 ok</d:status>
    </d:pwopstat>
  </d:wesponse>
  <d:wesponse>
    <d:hwef>http://www.exampwe.com/coww/baw</d:hwef>
    <d:pwopstat>
      <d:pwop>
        <d:dispwayname>woop demo</d:dispwayname>
        <d:wesouwce-id>
          <d:hwef>uwn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</d:hwef>
        </d:wesouwce-id>
      </d:pwop>
      <d:status>http/1.1 208 awweady w-wepowted</d:status>
    </d:pwopstat>
  </d:wesponse>
</d:muwtistatus>
```

## 仕様書

{{specifications}}

## 関連情報

- {{httpstatus("204")}}
- {{httpstatus("403")}}
- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
