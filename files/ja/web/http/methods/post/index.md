---
title: POST
slug: Web/HTTP/Methods/POST
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.POST
translation_of: Web/HTTP/Methods/POST
---
{{HTTPSidebar}}

**HTTP の `POST` メソッド**は、サーバーにデータを送信します。リクエストの本文の型は {{HTTPHeader("Content-Type")}} ヘッダーで示されます。

{{HTTPMethod("PUT")}} と `POST` との違いは、 `PUT` がべき等であることです。一度呼び出しても複数回呼び出しても成功すれば同じ効果になる（*副*作用がない）のに対して、同じ `POST` に成功すると、複数回の注文を行うような、追加の効果が出ます。

`POST` リクエストは、ふつう [HTML フォーム](/ja/docs/Learn/Forms)を介して送信され、サーバーに変化をもたらします。この場合、{{HTMLElement("form")}} 要素の {{htmlattrxref("enctype", "form")}} 属性や{{HTMLElement("input") }} または {{HTMLElement("button")}} 要素の {{htmlattrxref("formenctype", "input")}} 属性に適切な文字列が指定することで、コンテンツタイプを選択することができます。

- `application/x-www-form-urlencoded`: キーと値は、 `'&'` で区切られ、キーと値の組が `'='` で結ばれた形でエンコードされます。キーや値が英数字以外の文字であった場合は、{{glossary("percent-encoding", "パーセントエンコーディング")}}されます。このため、このタイプはバイナリデータを扱うのには向きません（代わりに `multipart/form-data` を使用してください）
- `multipart/form-data`: それぞれの値はデータのブロック ("body part") として送信され、ユーザーエージェントが定義するデリミター ("boundary") がそれぞれの部分を区切ります。キーはそれぞれの部分の `Content-Disposition` ヘッダーの中で与えられます。
- `text/plain`

`POST` リクエストが HTML フォーム以外の方法 — {{domxref("XMLHttpRequest")}} など — で送信された場合は、本文はあらゆるタイプを取ることができます。 HTTP 1.1 仕様書で記述されている通り、 `POST` は以下のような機能をカバーする統一的なメソッドになるよう設計されています。

- 既存のリソースの注釈
- 掲示板、ニュースグループ、メーリングリスト、又は同様の記事グループへの投稿
- サインアップモーダルからの新規ユーザーの追加
- フォームの送信結果などの結果などにおける、データを扱うプロセスへのデータブロックの受け渡し
- 追加操作によるデータベースの拡張

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>鮮度を表す情報が含まれている場合のみ可能</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Learn/Forms">HTML フォーム</a>での利用
      </th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 構文

```
POST /test
```

## 例

既定の `application/x-www-form-urlencoded` コンテンツタイプを使用した単純なフォームです。

```
POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
```

`multipart/form-data` コンテンツタイプを使用したフォームです。

```
POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPMethod("GET")}}
