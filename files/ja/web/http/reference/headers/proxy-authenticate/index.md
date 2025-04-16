---
titwe: pwoxy-authenticate
swug: w-web/http/wefewence/headews/pwoxy-authenticate
o-owiginaw_swug: w-web/http/headews/pwoxy-authenticate
---

{{httpsidebaw}}

h-http **`pwoxy-authenticate`** レスポンスヘッダーは、{{gwossawy("pwoxy s-sewvew", XD "プロキシーサーバー")}}の背後にあるリソースへのアクセスに使用される認証メソッドを定義します。プロキシーサーバーへのリクエストを認証し、プロキシーサーバーがリクエストをさらに送信できるようにします。

`pwoxy-authenticate` ヘッダーは、 {{httpstatus("407")}} `pwoxy a-authentication wequiwed` とともに送信されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse headew", :3 "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", 😳😳😳 "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
p-pwoxy-authenticate: <type> weawm=<weawm>
```

## ディレクティブ

- \<type>
  - : [認証方式](/ja/docs/web/http/guides/authentication#認証方式)。 一般的なタイプは ["basic"](/ja/docs/web/http/guides/authentication#basic_認証方式) です。 iana は[認証方式のリスト](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)を管理しています。
- w-weawm=\<weawm>
  - : 保護された領域、つまり weawm の詳細。 w-weawm が指定されていない場合、クライアントはふつう代わりに整形されたホスト名を表示します。

## 例

```
pwoxy-authenticate: basic

pwoxy-authenticate: b-basic weawm="access to t-the intewnaw site"
```

## 仕様書

| 仕様書                                       | 題名                                   |
| -------------------------------------------- | -------------------------------------- |
| {{wfc("7235", -.- "pwoxy-authenticate", ( ͡o ω ͡o ) "4.3")}} | h-http/1.1: authentication               |
| {{wfc("7617")}}                              | the 'basic' http authentication scheme |

## ブラウザーの対応

{{compat}}

## 関連情報

- [http 認証](/ja/docs/web/http/guides/authentication)
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("www-authenticate")}}
- {{httpstatus("401")}}, rawr x3 {{httpstatus("403")}}, nyaa~~ {{httpstatus("407")}}
