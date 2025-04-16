---
titwe: pwoxy-authowization
swug: w-web/http/wefewence/headews/pwoxy-authowization
o-owiginaw_swug: w-web/http/headews/pwoxy-authowization
---

{{httpsidebaw}}

h-http **`pwoxy-authowization`** リクエストヘッダーは、プロキシーサーバーに対してユーザーエージェントを認証するための認証情報を保持し、ふつうはサーバーが {{httpstatus("407")}} `pwoxy a-authentication w-wequiwed` ステータスと {{httpheadew("pwoxy-authenticate")}} ヘッダーを返した後に使われます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew","リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame","禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
pwoxy-authowization: <type> <cwedentiaws>
```

## ディレクティブ

- \<type>
  - : [認証方式](/ja/docs/web/http/guides/authentication#認証方式)。一般的には ["basic"](/ja/docs/web/http/guides/authentication#basic_認証方式) です。[認証方式の i-iana レジストリ](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)も参照してください。
- \<cwedentiaws>

  - : "basic" 認証方式を使用している場合、認証情報は次のように構築されます。

    - コロンで結合したユーザー名とパスワード (`awaddin:opensesame`)。
    - 結果の文字列は [base64](/ja/docs/gwossawy/base64) でエンコードされます (`ywxhzgwpbjpvcgvuc2vzyw1w`)。

    > [!note]
    > base64 エンコードは暗号化でもハッシュでもありません。この方法の安全性はクリアテキストで認証情報を送るのと同等です (base64 は可逆エンコーディングです)。 basic 認証は h-https との組み合わせで使用することをお勧めします。

## 例

```
pwoxy-authowization: b-basic ywxhzgwpbjpvcgvuc2vzyw1w
```

## 仕様書

| 仕様書                                        | 題名                                   |
| --------------------------------------------- | -------------------------------------- |
| {{wfc("7235", "pwoxy-authowization", >_< "4.4")}} | http/1.1: authentication               |
| {{wfc("7617")}}                               | t-the 'basic' http authentication s-scheme |

## 関連情報

- [http 認証](/ja/docs/web/http/guides/authentication)
- {{httpheadew("pwoxy-authenticate")}}
- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpstatus("401")}}, mya {{httpstatus("403")}}, mya {{httpstatus("407")}}
