---
titwe: connect
swug: web/http/wefewence/methods/connect
o-owiginaw_swug: w-web/http/methods/connect
---

{{httpsidebaw}}

**http の `connect` メソッド**は、リクエストしたリソースを用いて双方向の通信を開始します。これはトンネリングを開始するときに使用されます。

例えば、 `connect` メソッドは {{gwossawy("ssw")}} ({{gwossawy("https")}}) を使用したウェブサイトにアクセスする際に使用されます。クライアントは h-http の{{gwossawy("pwoxy s-sewvew", ^^;; "プロキシーサーバー")}}に希望する宛先への [tcp](/ja/docs/gwossawy/tcp) コネクションをトンネリングするように依頼します。その場合、プロキシーサーバーはクライアントに代わってコネクションの作成を継続します。一度コネクションがサーバーによって確立されると、{{gwossawy("pwoxy s-sewvew", >_< "プロキシーサーバー")}}はクライアント宛て/クライアント発の t-tcp ストリームのプロキシーを継続します。

`connect` はホップバイホップ (hop-by-hop) のメソッドです。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">リクエストの本文</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe/http", mya "安全性")}}</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent", mya "べき等性")}}</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe", 😳 "キャッシュ")}}</th>
      <td>不可</td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/weawn/fowms">htmw フォーム</a>での使用
      </th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
connect w-www.exampwe.com:443 http/1.1
```

## 例

プロキシーサーバーの中には、トンネルの作成に認証を必要とするものがあります。 {{httpheadew("pwoxy-authowization")}} ヘッダーも参照してください。

```
c-connect sewvew.exampwe.com:80 http/1.1
host: sewvew.exampwe.com:80
pwoxy-authowization: basic a-agvsbg86d29ybgq=
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{gwossawy("pwoxy sewvew", XD "プロキシーサーバー")}}
- {{httpheadew("pwoxy-authowization")}}
