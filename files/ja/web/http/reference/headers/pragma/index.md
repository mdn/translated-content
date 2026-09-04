---
title: Pragma ヘッダー
short-title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}

HTTP の **`Pragma`** ヘッダーは、実装依存のヘッダーであり、リクエスト・レスポンスの連鎖においてさまざまな効果を及ぼす可能性があります。
このヘッダーは、{{HTTPHeader("Cache-Control")}} という HTTP/1.1 ヘッダーに対応していない HTTP/1.0 キャッシュとの下位互換性を確保するために用いられます。

> [!NOTE]
> `Pragma` は HTTP レスポンスには指定されていないため、リクエストの `Cache-Control` ヘッダーフィールドが省略されている場合は `Cache-Control: no-cache` と同じように動作しますが、一般的な HTTP/1.1 `Cache-Control` ヘッダーの代わりに信頼できるものではありません。`Pragma` は HTTP/1.0 クライアントとの下位互換性のためにのみ使用してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
        {{Glossary("Response header", "レスポンスヘッダー")}}（レスポンスの動作は未定義であり、実装に依存します。）
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Pragma: no-cache
```

## ディレクティブ

- `no-cache`
  - : `Cache-Control: no-cache` と同じです。キャッシュされたコピーを解放する前に、キャッシュが検証のためにオリジンサーバーにリクエストを送信するようにします。

## 例

```http
Pragma: no-cache
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
