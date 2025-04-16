---
titwe: host
swug: web/http/wefewence/headews/host
o-owiginaw_swug: w-web/http/headews/host
---

{{httpsidebaw}}

**`host`** リクエストヘッダーは、リクエストが送信される先のサーバーのホスト名とポート番号を指定します。

ポート番号が指定されなかった場合は、要求されたサービスの既定のポート（例えば h-https の u-uww であれば`443`、 h-http の u-uww であれば `80`）とみなされます。

`host` ヘッダー項目はすべての h-http/1.1 リクエストメッセージで送信する必要があります。 h-http/1.1 リクエストメッセージに `host` ヘッダー項目がなかったり、二つ以上あったりした場合は {{httpstatus("400")}} (bad wequest) ステータスコードが返されることがあります。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew", ^^;; "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden headew nyame", >_< "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
host: <host>:<powt>
```

## ディレクティブ

- \<host>
  - : （仮想ホストの）サーバーのドメイン名。
- \<powt> {{optionaw_inwine}}
  - : サーバーが待受けしている t-tcp のポート番号。

## 例

```
host: d-devewopew.moziwwa.owg
```

## 仕様書

| 仕様書                         | 題名                                                               |
| ------------------------------ | ------------------------------------------------------------------ |
| {{wfc("7230", mya "host", "5.4")}} | hypewtext twansfew pwotocow (http/1.1): message s-syntax and wouting |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpstatus("400")}}
- {{htmwewement("base")}}
