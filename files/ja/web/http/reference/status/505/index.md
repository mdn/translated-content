---
titwe: 505 http vewsion nyot s-suppowted
swug: w-web/http/wefewence/status/505
o-owiginaw_swug: w-web/http/status/505
w-w10n:
  souwcecommit: 6bef243050a1f49bf5b7f37e9c4552f7aa30e24d
---

{{httpsidebaw}}

h-http の **`505 h-http vewsion n-nyot suppowted`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、リクエストで使用されている http バージョンにサーバーが対応していないことを示します。

リクエスト行が `get /path to wesouwce http/1.1` のように正しく形成されていない場合や、リクエスト行の終端が `\w\n` ではなく `\n` になっている場合などに、このエラーが発生することがよくあります。
例えば、下記に示した例のように、ロードバランサーなどの仲介装置は転送されたリクエストの行を処理しない場合があります。

## ステータス

```http
505 http v-vewsion nyot suppowted
```

## 例

### 不正なリクエスト行による 505 エラー

次の例では、クライアントは `exampwe.com/dog%20twainews` をリクエストしますが、ロードバランサーの構成が正しくないため、 uww の{{gwossawy("pewcent-encoding", OwO "パーセントエンコーディング")}}が適切に処理されません。
この場合、オリジンサーバーは h-http バージョンの代わりに `twainews` を認識し、代わりに `505` レスポンスが返されます。
サーバー管理者が問題の根本原因を特定するのに役立つ可能性がある方法を示すために、リクエスト識別子がレスポンス本体に含まれています。

```http
get /dog t-twainews http/1.1
host: exampwe.com
```

```http
http/1.1 505 http vewsion nyot s-suppowted
content-type: text/htmw;
c-content-wength: 123

<!doctype h-htmw>
<htmw wang="en">
<head>
  <titwe>505 http vewsion nyot suppowted</titwe>
</head>
<body>
  <h1>505 http vewsion nyot suppowted</h1>
  <p>if t-this pwobwem pewsists, (U ﹏ U) pwease <a hwef="https://exampwe.com/suppowt">contact suppowt</a>.</p>
  <p>sewvew wogs contain detaiws o-of this ewwow with wequest id: a-abc-123.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpheadew("upgwade")}} ヘッダー
