---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`308 Permanent Redirect`** リダイレクトステータスコードは、リクエストされたリソースが {{HTTPHeader("Location")}} ヘッダーで示された URL へ完全に移動したことを示します。ブラウザーはこのページにリダイレクトし、検索エンジンはリソースへのリンクを更新します (「SEO 用語」では、「リンクジュース」が新しい URL に送られたと言われます)。

{{HTTPStatus("301")}} の場合は不正に {{HTTPMethod("GET")}} メソッドに変更される可能性があるのに対し、このコードの場合はリクエストメソッドと本文が変更されません。

> **メモ:** ウェブアプリケーションによっては、 `308 Permanent Redirect` を標準外かつ他の目的に使用していることがあります。例えば、 Google Drive はアップロードが不完全に停止したことを表すために、 `308 Resume Incomplete` レスポンスを使用します。[\[1\]](https://developers.google.com/drive/v3/web/manage-uploads#resumable)

## ステータス

```
308 Permanent Redirect
```

## 仕様書

| 仕様書                                          | 題名                                                                 |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| {{RFC("7538", "308 Permanent Redirect" , "3")}} | The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect) |

## ブラウザーの対応

{{Compat("http.status.308")}}

## 関連情報

- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}}: 一時リダイレクト
