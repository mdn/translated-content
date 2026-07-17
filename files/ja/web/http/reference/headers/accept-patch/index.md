---
title: Accept-Patch ヘッダー
short-title: Accept-Patch
slug: Web/HTTP/Reference/Headers/Accept-Patch
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

HTTP の **`Accept-Patch`** {{Glossary("response header", "レスポンスヘッダー")}}は、サーバーが {{HTTPMethod("PATCH")}} リクエストで認識できる[メディア種別](/ja/docs/Web/HTTP/Guides/MIME_types)を伝えます。
例えば、対応していないメディア種別を含む `PATCH` リクエストを受信したサーバーは、{{HTTPStatus("415", "415 Unsupported Media Type")}} を返すとともに、1 つ以上の対応メディア種別を指定した `Accept-Patch` ヘッダーを返すことができます。

このヘッダーは、`PATCH` メソッドに対応しているリソースに対する {{HTTPMethod("OPTIONS")}} リクエストに現れる必要があります。
どのリクエストメソッドに対するレスポンスであっても、そこに `Accept-Patch` ヘッダーが含まれている場合は、そのリクエストの対象リソースに対して `PATCH` が許可されていることを暗黙的に意味します。

> [!NOTE]
> IANA レジストリーが[公式なコンテンツエンコーディングの完全なリスト](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)を管理しています。
> `bzip` および `bzip2` エンコード方式は、標準外ですが、特に過去との互換性を確保する場合などには使用されることがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Accept-Patch: <media-type>/<subtype>
Accept-Patch: <media-type>/*
Accept-Patch: */*

// メディアス種別カンマ区切りのリスト
Accept-Patch: <media-type>/<subtype>, <media-type>/<subtype>
```

## ディレクティブ

- `<media-type>/<subtype>`
  - : 単独の、詳細の[メディア種別](/ja/docs/Web/HTTP/Guides/MIME_types)、例えば `text/html` です。
- `<media-type>/*`
  - : サブタイプを持たないメディア種別。
    例えば、`image/*` は `image/png`、`image/svg`、`image/gif`、その他の画像種別に対応します。
- `*/*`
  - : 任意のメディア種別です。

## 例

```http
Accept-Patch: application/json
Accept-Patch: application/json, text/plain
Accept-Patch: text/plain;charset=utf-8
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ブラウザーの互換性はこのヘッダーには関係ありません。
ヘッダーはサーバーから送られ、仕様書ではクライアントの動作を定義していません。

## 関連情報

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}} リクエストメソッド
