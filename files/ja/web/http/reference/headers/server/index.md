---
title: Server ヘッダー
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Server`** {{Glossary("response header", "レスポンスヘッダー")}}は、リクエストを処理し、レスポンスを生成したオリジンサーバーで使用されているソフトウェアを表します。

このヘッダーを介してサーバーの種類やバージョンを通知することの利点は、分析に役立ち、特定の相互運用性の問題がどれほど広範囲に及んでいるかを特定するのに役立つことです。
従来、クライアントはサーバーのバージョン情報を利用して、特定のソフトウェアバージョンにおける [range リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)の対応が不統一であるといった既知の制限を回避してきました。

> [!WARNING]
> レスポンスにこのヘッダーが含まれていると、特にサーバーソフトウェアに関する詳細な実装情報が含まれている場合、既知の脆弱性を検出しやすくなる可能性があります。

レスポンスの遅延や前述のセキュリティ上の理由から、`Server` ヘッダーに詳細な情報を記載しすぎることは推奨されません。
このヘッダーの情報を隠蔽することに大きなメリットがあるかどうかは議論の余地があります。というのも、他の手段を通じてサーバーソフトウェアのフィンガープリントを特定することは可能だからです。
一般的に、サーバーのセキュリティをより強固にするためには、既知の脆弱性に対してソフトウェアを定期的に更新またはパッチ適用することが、より確実なアプローチと言えます。

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
Server: <product>
```

## ディレクティブ

- `<product>`
  - : リクエストを処理したソフトウェアまたは製品の名前です。
    通常は {{HTTPHeader('User-Agent')}} と似た形式です。

## 例

```http
Server: Apache/2.4.1 (Unix)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Allow")}}
- [HTTP Observatory](/ja/observatory)
- [Prevent information disclosure via HTTP headers](https://owasp.org/www-project-secure-headers/index.html#prevent-information-disclosure-via-http-headers) - OWASP Secure Headers Project
