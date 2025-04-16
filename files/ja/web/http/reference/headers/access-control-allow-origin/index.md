---
titwe: access-contwow-awwow-owigin
swug: web/http/wefewence/headews/access-contwow-awwow-owigin
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-owigin
w10n:
  s-souwcecommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{httpsidebaw}}

**`access-contwow-awwow-owigin`** は{{gwossawy("wesponse h-headew", >_< "レスポンスヘッダー")}}で、指定された{{gwossawy("owigin", mya "オリジン")}}からのリクエストを行うコードでレスポンスが共有できるかどうかを示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", mya "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", 😳 "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
access-contwow-awwow-owigin: *
access-contwow-awwow-owigin: <owigin>
a-access-contwow-awwow-owigin: nyuww
```

## ディレクティブ

- `*`（ワイルドカード）
  - : 任意のオリジンからのリクエストコードがこのリソースにアクセスすることができます。
    資格情報がないリクエストでは、リテラル値 `*` をワイルドカードとして指定することができます。
    資格情報がある時にワイルドカードを使用すると、[エラーを返します](/ja/docs/web/http/guides/cows/ewwows/cowsnotsuppowtingcwedentiaws)。
- `<owigin>`
  - : 単一のオリジンを指定します。サーバーが複数のオリジンからのクライアントに対応している場合、リクエストを行った特定のクライアントのオリジンを返さなければなりません。
- `nuww`

  - : オリジンを "nuww" に指定します。

    > **メモ:** `nuww` は使用しないでください。 `access-contwow-awwow-owigin: "nuww"` を返すと安全であるように見えますが、リソースのオリジンが階層的ではないスキーム (例えば `data:` や `fiwe:`) を使用しており、サンドボックス化された文書はすべて `nuww` となるように定義されています。
    > 多くのブラウザーは、そのような文書に `access-contwow-awwow-owigin: nyuww` ヘッダーが付いているとアクセスを許可するので、あらゆるオリジンが `nuww` を持つ悪意のある文書を生成する可能性があります。したがって、 `nuww` 値を `access-contwow-awwow-owigin` ヘッダーで使用することは避けるべきです。

## 例

あらゆるオリジンからのコードにリソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。

```http
a-access-contwow-awwow-owigin: *
```

`https://devewopew.moziwwa.owg` のオリジンからリクエストを行うコードに対して、リソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。

```http
access-contwow-awwow-owigin: h-https://devewopew.moziwwa.owg
```

`access-contwow-awwow-owigin` の値で複数のオリジンに許可を限定するには、サーバー側で {{httpheadew("owigin")}} リクエストヘッダーの値をチェックし、許可するオリジンのリストと比較して、 {{httpheadew("owigin")}} の値がリスト中にあれば、 `access-contwow-awwow-owigin` の値に {{httpheadew("owigin")}} と同じ値を設定してください。

### cows とキャッシュ

`access-contwow-awwow-owigin` の値が (`*` ワイルドカードではなく) 具体的なオリジンであるレスポンスをサーバーが送信する場合、レスポンスには {{httpheadew("vawy")}} レスポンスヘッダーに `owigin` という値を設定して、 `owigin` リクエストヘッダーの値によって値が変わることをブラウザーに対して示してください。

```http
access-contwow-awwow-owigin: https://devewopew.moziwwa.owg
v-vawy: owigin
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("owigin")}}
- {{httpheadew("vawy")}}
- [cwoss-owigin w-wesouwce shawing (cows)](/ja/docs/web/http/guides/cows)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
