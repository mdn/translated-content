---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

**`Accept-Charset`** は HTTP のリクエストヘッダーで、クライアントが理解できる{{glossary("character encoding", "文字エンコーディング")}}を広報します。[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)を使用して、サーバーは提案の 1 つを選択、使用し、クライアントに選択結果を {{HTTPHeader("Content-Type")}} レスポンスヘッダー内、ふつうは `charset=` 引数の中で通知します。通常はそれぞれのリソースの既定値が正しく、これを送信すると[フィンガープリンティング](/ja/docs/Mozilla/Firefox/Privacy/Tracking_Protection)を許してしまうことがあるため、ブラウザーは通常、このヘッダーを設定しません。

サーバーが一致する文字エンコーディングを提供できない場合、理論的には {{HTTPStatus("406", "406 Not Acceptable")}} エラーコードを返すことができます。しかし、より使い勝手をよくするために、これはめったに行われず、 `Accept-Charset` ヘッダーは無視されます。

> **メモ:** HTTP/1.1 の初期のバージョンでは、既定の文字エンコーディングを ISO-8859-1 と定義していました。これはすでに推奨されなくなっており、コンテンツ型ごとに個別に既定値が設定されるようになりました。
>
> UTF-8 への対応が進み、圧倒的に推奨される文字エンコーディングになっています。[設定に基づいたエントロピーを減少させることでより良いプライバシーを保証する](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)ために、すべてのブラウザーが `Accept-Charset` ヘッダーを省略しています。 Internet Explorer 8 以降、 Safari 5 以降、 Opera 11 以降、 Firefox 10 以降、 Chrome 27 以降は送信しなくなりました。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Accept-Charset: <charset>

// 複数の型を{{glossary("quality values", "品質値")}}で重みづけした構文
Accept-Charset: utf-8, iso-8859-1;q=0.5
```

## ディレクティブ

- `<charset>`
  - : `utf-8` または `iso-8859-15` のような文字セット。
- `*`
  - : ヘッダー内の他の場所に記述されていない文字セット。 `'*'` はワイルドカードとして使用されます。
- `;q=<weight>`
  - : エンコーディングはすべて、*重み*と呼ばれる相対的な{{glossary("quality values", "品質値")}}を使用して表現された設定の順番で配置されます。

## 例

```
Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

## 仕様書

| 仕様書                                     | 題名                                                          |
| ------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Charset", "5.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## ブラウザーの互換性

{{Compat("http.headers.Accept-Charset")}}

## 関連情報

- HTTP の[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- コンテンツネゴシエーションの結果を含むヘッダー: {{HTTPHeader("Content-Type")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
