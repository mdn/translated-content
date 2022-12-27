---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
---

{{HTTPSidebar}}

**`Accept-Patch`** は HTTP のレスポンスヘッダーで、サーバーが認識できるメディアタイプを伝えます。

任意のメソッドに応答する**`Accept-Patch`**は、Request-URI で識別されるリソースで、 {{HTTPMethod("PATCH")}} が許可されることを意味します。 2 つの一般的なケースがこれにつながります。

サポートされていないメディアタイプの {{HTTPMethod("PATCH")}} リクエストを受信したサーバーは、{{HTTPStatus("415")}} `Unsupported Media Type`と、1 つ以上のサポートされているメディアタイプを参照する Accept-Patch ヘッダーで応答する可能性があります。

> **メモ:** - IANA レジストリは、[公式コンテンツエンコーディングの完全なリスト](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)を保持しています。
>
> - 標準ではありませんが、他の 2 つのコンテンツエンコーディング `bzip`と`bzip2`が時々使用されます。 これらは、これら 2 つの UNIX プログラムで使用されるアルゴリズムを実装しています。 最初のものは、特許ライセンスの問題のために中止されたことに注意してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
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
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## ディレクティブ

なし

## 例

```
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## 仕様書

| 仕様書                                               | 題名       |
| ---------------------------------------------------- | ---------- |
| {{RFC("5789", "Accept-Patch", "3.1")}} | HTTP PATCH |

## ブラウザーの互換性

{{Compat("http.headers.Accept-Patch")}}

## 関連情報

- Http method {{HTTPMethod("PATCH")}}
- HTTP Semantic and context {{RFC("7231", "PUT", "4.3.4")}}
