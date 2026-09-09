---
title: Sec-Purpose ヘッダー
short-title: Sec-Purpose
slug: Web/HTTP/Reference/Headers/Sec-Purpose
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Sec-Purpose`** {{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}は、リクエストされたリソースがユーザーエージェントによる直接的な利用以外にも使用される場合、その使用目的を示すものです。

現在定義されている唯一の目的は `prefetch` であり、これは、検索結果にリンクされているページや、ユーザーが当てたリンクなど、近い将来に遷移される可能性が高いページで必要になると予想されるリソースがリクエストされていることを示します。
サーバーはこの情報を活用して、リクエストのキャッシュ有効期限を調整したり、リクエストを拒否したり、あるいはページ閲覧数の集計において異なる扱いを行ったりすることができます。

このヘッダーは、[`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素に属性 [`rel="prefetch"`](/ja/docs/Web/HTML/Reference/Attributes/rel/prefetch) を付けたものを含むページが読み込まれた際に送信されます。
なお、このヘッダーが設定されている場合、リクエスト内の {{HTTPHeader("Sec-Fetch-Dest")}} ヘッダーは `empty` に設定しなければならず（ [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 属性の [`as`](/ja/docs/Web/HTML/Reference/Elements/link#as) に指定された値は無視されます）、{{HTTPHeader("Accept")}} ヘッダーは通常のナビゲーションリクエストで使用される値と一致している必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい（<code>Sec-</code> 接頭辞）</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-Purpose: prefetch
```

## ディレクティブ

許可されているトークンは以下の通りです。

- `prefetch`
  - : 目的は、将来的にナビゲーションを行う際に必要となる可能性があるリソースを先読みして取得しておくことです。

## 例

### 先読みリクエスト

ブラウザーが、`rel="prefetch"` 属性と、画像ファイルのアドレスを含む `href` 属性を持つ [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素を含むファイルを読み込む場合を考えてみましょう。
結果の `fetch()` は、`Sec-Purpose: prefetch`、`Sec-Fetch-Dest: empty`、およびブラウザーがページ移動時に使用するものと同じ `Accept` 値を持つ HTTP リクエストとなるはずです。

そのようなヘッダーの例（Firefox の場合）を下記に示します。

```http
GET /images/some_image.png HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Sec-Purpose: prefetch
Connection: keep-alive
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: same-origin
Pragma: no-cache
Cache-Control: no-cache
```

> [!NOTE]
> この記事の執筆時点では、Firefox は先読みに対して `Accept` ヘッダーを誤って `Accept: */*` と設定しています。
> この例は、`Accept` の値がどうあるべきかを示すために変更しています。
> この問題については、[Firefox バグ 1836334](https://bugzil.la/1836334) で追跡可能です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} フェッチメタデータリクエストヘッダー
- {{Glossary("Prefetch", "先読み")}} （用語集）
- [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素の [`rel="prefetch"`](/ja/docs/Web/HTML/Reference/Attributes/rel/prefetch) 属性付きのもの
