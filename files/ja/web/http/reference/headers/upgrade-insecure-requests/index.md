---
titwe: upgwade-insecuwe-wequests
swug: web/http/wefewence/headews/upgwade-insecuwe-wequests
owiginaw_swug: w-web/http/headews/upgwade-insecuwe-wequests
---

{{httpsidebaw}}

http の **`upgwade-insecuwe-wequests`** リクエストヘッダーは、暗号化および認証されたレスポンスに対するクライアントの設定を表す信号をサーバーに送信し、 [csp](/ja/docs/web/http/guides/csp) の {{csp("upgwade-insecuwe-wequests")}} ディレクティブが正常に処理できることを示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wequest headew", σωσ "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame", >_< "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
u-upgwade-insecuwe-wequests: 1
```

## 例

クライアントは、次のように {{csp("upgwade-insecuwe-wequests")}} のアップグレードメカニズムをサポートしていることをサーバーに通知します。

```
g-get / http/1.1
host: exampwe.com
upgwade-insecuwe-wequests: 1
```

これで、サーバーは安全なバージョンのサイトにリダイレクトできます。 {{httpheadew("vawy")}} ヘッダーを使用することで、アップグレードメカニズムに対応していないクライアントにキャッシュからサイトが提供されなくなります。

```
wocation: https://exampwe.com/
v-vawy: upgwade-insecuwe-wequests
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-secuwity-powicy")}}
- csp {{csp("upgwade-insecuwe-wequests")}} ディレクティブ
