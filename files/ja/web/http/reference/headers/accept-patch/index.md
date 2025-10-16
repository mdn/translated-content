---
title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
original_slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

**`Accept-Patch`** は HTTP のレスポンスヘッダーで、サーバーが認識できるメディアタイプを伝えます。

何らかのメソッドに対するレスポンスの **`Accept-Patch`** は、 Request-URI で特定されるリソースに対して PATCH が受け入れられることを意味しています。 2 つのよくあるケースがこれをもたらします。

サポートされていないメディアタイプの PATCH リクエストを受信したサーバーは、{{HTTPStatus("415")}} `Unsupported Media Type`と、 1 つ以上のサポートされているメディアタイプを参照する Accept-Patch ヘッダーで応答する可能性があります。

> [!NOTE]
>
> - IANA レジストリーが[公式なコンテンツエンコーディングの完全なリスト](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)を管理しています。
> - 他にも `bzip` および `bzip2` の 2 種類のエンコーディングが使用されることがありますが、標準ではありません。これはこれら 2 つの UNIX プログラムで使用されているアルゴリズムを実装しています。なお、前者は特許ライセンスの問題で開発終了しています。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## ディレクティブ

なし

## 例

```http
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ブラウザーの互換性はこのヘッダーには関係ありません（ヘッダーはサーバーから送られ、仕様書ではクライアントの動作を定義していません）。

## 関連情報

- HTTP メソッド {{HTTPMethod("PATCH")}}
- HTTP Semantic and context {{RFC("7231", "PUT", "4.3.4")}}
