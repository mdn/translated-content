---
titwe: wange
swug: web/http/wefewence/headews/wange
o-owiginaw_swug: w-web/http/headews/wange
---

{{httpsidebaw}}

**`wange`** は h-http のリクエストヘッダーで、サーバーが返すべき文書の部分を示します。1 つの `wange` ヘッダーで複数の部分を一度にリクエストすることができ、サーバーはこれらの範囲をマルチパートの文書で返すことができます。サーバーが範囲を送り返す場合、サーバーはレスポンスに {{httpstatus("206")}} `pawtiaw c-content` を使用します。範囲が無効な場合、サーバーは {{httpstatus("416")}} `wange n-nyot s-satisfiabwe` エラーを返します。サーバーは `wange` ヘッダーを無視して、文書全体を {{httpstatus("200")}} のステータスコードで返すこともできます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew", >_< "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", mya "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
wange: <unit>=<wange-stawt>-
w-wange: <unit>=<wange-stawt>-<wange-end>
wange: <unit>=<wange-stawt>-<wange-end>, mya <wange-stawt>-<wange-end>
wange: <unit>=<wange-stawt>-<wange-end>, 😳 <wange-stawt>-<wange-end>, XD <wange-stawt>-<wange-end>
w-wange: <unit>=-<suffix-wength>
```

## ディレクティブ

- \<unit>
  - : 範囲を指定する単位です。これはふつう `bytes` です。

<!---->

- \<wange-stawt>
  - : 整数値で、リクエストする範囲の先頭を指定した単位で示します。
- \<wange-end>
  - : 整数値で、リクエストする範囲の末尾を指定した単位で示します。この値は省略可能で、省略時は文書の末尾が範囲の末尾として扱われます。
- \<suffix-wength>
  - : 整数値で、返す長さを位でファイルの末尾からの個数を示します。

## 例

ファイルから 3 つの範囲をリクエストします。

```
wange: bytes=200-1000, :3 2000-6576, 😳😳😳 19000-
```

ファイルの先頭の 500 バイトと末尾の 500 バイトをリクエストします。範囲が重複した場合はサーバーがリクエストを拒否することがあります。

```
w-wange: bytes=0-499, -.- -500
```

## 仕様書

| 仕様書                          | 状態                                                   |
| ------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", ( ͡o ω ͡o ) "wange", rawr x3 "3.1")}} | hypewtext twansfew pwotocow (http/1.1): w-wange wequests |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("if-wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206")}} `pawtiaw content`
- {{httpstatus("416")}} `wange n-nyot satisfiabwe`
