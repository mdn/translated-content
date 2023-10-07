---
title: Server
slug: Web/HTTP/Headers/Server
---

{{HTTPSidebar}}

**`Server`** ヘッダーは、リクエストを処理したオリジンサーバー、すなわち、レスポンスを生成したサーバーで使用されたソフトウェアを説明します。

> **警告:** `Server` の値は、攻撃者が既知のセキュリティホールを悪用するのを (少し) 容易にする情報を暴露する可能性があるので、過度に詳細にすることは避けてください。

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
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Server: <product>
```

## ディレクティブ

- `<product>`
  - : リクエストを処理したソフトウェアまたは製品の名前です。通常は {{HTTPHeader('User-Agent')}} と似た形式です。

どのくらいの詳細を含めるかのバランスを取るのは興味深いことです。 OS のバージョンを公開することは、先ほどの過度に詳細な値についての警告で述べたように、おそらく悪い考えです。しかし、 Apache のバージョンを公開すると、あるバージョンが持つ {{HTTPHeader('Content-Encoding')}} と {{HTTPHeader('Range')}} を組み合わせたバグをブラウザーが回避するのに役立ちます。

## 例

```
Server: Apache/2.4.1 (Unix)
```

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Server", "7.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.headers.Server")}}

## 関連情報

- {{HTTPHeader("Allow")}}
